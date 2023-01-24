import type { TreeNode } from '../model/entities';
import type { TreeNodeDto } from '../model/dto';
import type { Executor, Dynamic } from '../';

export class TreeService {
    
    constructor(private executor: Executor) {}
    
    async deleteTree(options: TreeServiceOptions['deleteTree']): Promise<void> {
        let uri = '/tree/';
        uri += encodeURIComponent(options.id);
        return (await this.executor({uri, method: 'DELETE'})) as void
    }
    
    async findRootTrees(options?: TreeServiceOptions['findRootTrees']): Promise<
        ReadonlyArray<TreeNodeDto['DEFAULT']>
    > {
        let uri = '/rootNodes';
        if (options?.rootName !== undefined && options.rootName !== null) {
            uri += '?rootName=';
            uri += encodeURIComponent(options.rootName);
        }
        return (await this.executor({uri, method: 'GET'})) as ReadonlyArray<TreeNodeDto['DEFAULT']>
    }
    
    async findRootTrees_2(options?: TreeServiceOptions['findRootTrees_2']): Promise<
        ReadonlyArray<TreeNodeDto['TreeService/RECURSIVE_FETCHER']>
    > {
        let uri = '/rootTrees';
        let separator = '?';
        if (options?.rootName !== undefined && options.rootName !== null) {
            uri += separator;
            uri += 'rootName=';
            uri += encodeURIComponent(options.rootName);
            separator = '&';
        }
        if (options?.noRecursiveNames !== undefined && options.noRecursiveNames !== null) {
            uri += separator;
            uri += 'noRecursiveNames=';
            uri += encodeURIComponent(options.noRecursiveNames);
            separator = '&';
        }
        return (await this.executor({uri, method: 'GET'})) as ReadonlyArray<TreeNodeDto['TreeService/RECURSIVE_FETCHER']>
    }
    
    async saveTree(options: TreeServiceOptions['saveTree']): Promise<
        Dynamic<TreeNode>
    > {
        let uri = '/tree';
        uri += '?rootName=';
        uri += encodeURIComponent(options.rootName);
        uri += '&depth=';
        uri += encodeURIComponent(options.depth);
        uri += '&breadth=';
        uri += encodeURIComponent(options.breadth);
        return (await this.executor({uri, method: 'PUT'})) as Dynamic<TreeNode>
    }
}

export type TreeServiceOptions = {
    'deleteTree': {readonly id: number},
    'findRootTrees': {readonly rootName?: string},
    'findRootTrees_2': {readonly rootName?: string, readonly noRecursiveNames?: string},
    'saveTree': {
        readonly rootName: string, 
        readonly depth: number, 
        readonly breadth: number
    }
}