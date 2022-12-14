package org.babyfish.jimmer.client.generator.ts;

import org.babyfish.jimmer.client.meta.*;

import java.io.OutputStream;
import java.util.*;
import java.util.function.Function;

public class Context {

    private static final Comparator<Service> SERVICE_COMPARATOR =
            (a, b) -> a.getJavaType().getName().compareTo(b.getJavaType().getName());

    private final OutputStream out;

    private final File moduleFile;

    private final String indent;

    private final Map<Class<?>, StaticObjectType> genericTypeMap;

    private final Map<Operation, String> operationNameMap;

    private final Namespace<Type> typeNamespace;

    private final NavigableMap<Service, File> serviceFileMap;

    private final Map<Type, File> typeFileMap;

    public Context(Metadata metadata, OutputStream out, String moduleName, String indent) {
        this.out = out;
        this.moduleFile = new File("", moduleName);
        this.indent = indent;
        this.genericTypeMap = metadata.getGenericTypes();
        VisitorImpl impl = new VisitorImpl();
        for (Service service : metadata.getServices().values()) {
            service.accept(impl);
        }
        for (StaticObjectType genericType : metadata.getGenericTypes().values()) {
            genericType.accept(impl);
        }
        operationNameMap = impl.operationNamespace.getNameMap();
        typeNamespace = impl.typeNamespace;
        NavigableMap<Service, File> map = new TreeMap<>(SERVICE_COMPARATOR);
        map.putAll(impl.serviceFileManager.getFileMap());
        serviceFileMap = Collections.unmodifiableNavigableMap(map);
        typeFileMap = impl.typeFileManager.getFileMap();
    }

    public OutputStream getOutputStream() {
        return out;
    }

    public File getModuleFile() {
        return moduleFile;
    }

    public String getIndent() {
        return indent;
    }

    public File file(Service service) {
        return serviceFileMap.get(service);
    }

    public File file(Type type) {
        return typeFileMap.get(rawType(type));
    }

    public String operationName(Operation operation) {
        return operationNameMap.get(operation);
    }

    public String typeName(Type type) {
        return typeNamespace.get(rawType(type));
    }

    public Map<Service, File> getServiceFileMap() {
        return serviceFileMap;
    }

    public Iterable<Map.Entry<Type, File>> getTypeFilePairs() {
        return () -> typeFileMap.entrySet().iterator();
    }

    private Type rawType(Type type) {
        if (type instanceof StaticObjectType) {
            StaticObjectType staticObjectType = (StaticObjectType) type;
            if (!staticObjectType.getTypeArguments().isEmpty()) {
                return genericTypeMap.get(staticObjectType.getJavaType());
            }
        }
        return type;
    }

    private static class VisitorImpl implements Visitor {

        private String serviceName;

        private String operationName;

        final Namespace<Service> serviceNamespace = new Namespace<>(
                service -> service.getJavaType().getSimpleName()
        );

        final Namespace<Operation> operationNamespace = new Namespace<>(
                operation -> serviceName + "::" + operation.getName(),
                name -> name.substring(name.indexOf("::") + 2)
        );

        final Namespace<Type> typeNamespace = new Namespace<>(
                type -> {
                    if (type instanceof SimpleType) {
                        return CodeWriter.SIMPLE_TYPE_NAMES.get(((SimpleType)type).getJavaType());
                    }
                    if (type instanceof ImmutableObjectType) {
                        ImmutableObjectType immutableObjectType = (ImmutableObjectType) type;
                        switch (immutableObjectType.getCategory()) {
                            case FETCH:
                                return serviceName + '_' +
                                        operationName + '_' +
                                        immutableObjectType.getJavaType().getSimpleName();
                            case VIEW:
                                return immutableObjectType.getJavaType().getSimpleName() + "_View";
                            case RAW:
                                return immutableObjectType.getJavaType().getSimpleName();
                        }
                    } else if (type instanceof StaticObjectType) {
                        Class<?> javaType = ((StaticObjectType)type).getJavaType();
                        if (!((StaticObjectType)type).getTypeArguments().isEmpty()) {
                            throw new AssertionError("Can name of parameterized type");
                        }
                        return javaType.getSimpleName();
                    } else if (type instanceof EnumType) {
                        return ((EnumType)type).getJavaType().getSimpleName();
                    }
                    return null;
                }
        );

        final FileManager<Service> serviceFileManager = new FileManager<>(
                service -> "service",
                serviceNamespace
        );

        final FileManager<Type> typeFileManager = new FileManager<>(
                type -> {
                    if (!type.hasDefinition()) {
                        return null;
                    }
                    if (type instanceof ImmutableObjectType) {
                        ImmutableObjectType immutableObjectType = (ImmutableObjectType) type;
                        switch (immutableObjectType.getCategory()) {
                            case FETCH:
                                return "model/immutable/fetch";
                            case VIEW:
                                return "model/immutable/view";
                            case RAW:
                                return "model/immutable";
                        }
                    } else if (type instanceof StaticObjectType) {
                        Class<?> javaType = ((StaticObjectType)type).getJavaType();
                        return "model/static";
                    } else if (type instanceof EnumType) {
                        return "model/enum";
                    }
                    return null;
                },
                typeNamespace
        );

        @Override
        public void visitingService(Service service) {
            serviceName = serviceFileManager.add(service).getName();
        }

        @Override
        public void visitedService(Service service) {
            serviceName = null;
        }

        @Override
        public void visitingOperation(Operation operation) {
            operationName = operationNamespace.get(operation);
        }

        @Override
        public void visitedOperation(Operation operation) {
            operationName = null;
        }

        @Override
        public boolean isTypeVisitable(Type type) {
            return !typeFileManager.getFileMap().containsKey(type);
        }

        @Override
        public void visitImmutableObjectType(ImmutableObjectType immutableObjectType) {
            typeFileManager.add(immutableObjectType);
        }

        @Override
        public void visitStaticObjectType(StaticObjectType staticObjectType) {
            typeFileManager.add(staticObjectType);
        }

        @Override
        public void visitEnumType(EnumType enumType) {
            typeFileManager.add(enumType);
        }
    }

    private static class Namespace<N extends Node> {

        private final Map<N, String> nameMap = new IdentityHashMap<>();

        private final Map<String, Integer> nameCountMap = new HashMap<>();

        private final Function<N, String> initializer;

        private final Function<String, String> terminator;

        Namespace(Function<N, String> initializer) {
            this.initializer = initializer;
            this.terminator = null;
        }

        Namespace(Function<N, String> initializer, Function<String, String> terminator) {
            this.initializer = initializer;
            this.terminator = terminator;
        }

        public String get(N node) {
            String name = nameMap.get(node);
            if (name == null) {
                name = initializer.apply(node);
                Integer count = nameCountMap.get(name);
                if (count == null) {
                    nameCountMap.put(name, 1);
                } else {
                    count++;
                    nameCountMap.put(name, count);
                    name = name + '_' + count;
                }
                if (terminator != null) {
                    name = terminator.apply(name);
                }
                nameMap.put(node, name);
            }
            return name;
        }

        public Map<N, String> getNameMap() {
            return Collections.unmodifiableMap(nameMap);
        }
    }

    private static class FileManager<N extends Node> {

        private final Map<N, File> fileMap = new IdentityHashMap<>();

        private final Function<N, String> dirSupplier;

        private final Namespace<N> namespace;

        private FileManager(Function<N, String> dirSupplier, Namespace<N> namespace) {
            this.dirSupplier = dirSupplier;
            this.namespace = namespace;
        }

        public File add(N node) {
            File file = fileMap.get(node);
            if (file == null && !fileMap.containsKey(node)) {
                String dir = dirSupplier.apply(node);
                if (dir == null) {
                    return null;
                }
                String name = namespace.get(node);
                file = new File(dir, name);
                fileMap.put(node, file);
            }
            return file;
        }

        public Map<N, File> getFileMap() {
            return Collections.unmodifiableMap(fileMap);
        }
    }
}
