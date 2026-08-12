import { QuartzComponent } from '@quartz-community/types';

interface FileTrieNode {
    slugSegment?: string;
    slugSegments?: string[];
    displayName?: string;
    isFolder: boolean;
    data: Record<string, unknown> | null;
    children: FileTrieNode[];
}
interface ExplorerOptions {
    title?: string;
    folderDefaultState: "collapsed" | "open";
    folderClickBehavior: "collapse" | "link";
    useSavedState: boolean;
    /**
     * Slug prefix whose notes become the top-level ("main") items in the sidebar.
     * Each such note is shown as an expandable entry; its children are the notes
     * that link TO it (backlinks). Defaults to the Zettelkasten index folder.
     */
    indexPrefix: string;
    sortFn?: (a: FileTrieNode, b: FileTrieNode) => number;
    filterFn?: (node: FileTrieNode) => boolean;
    mapFn?: (node: FileTrieNode) => FileTrieNode;
    order?: Array<"filter" | "map" | "sort">;
}
declare const _default: (userOpts?: Partial<ExplorerOptions>) => QuartzComponent;

export { _default as Explorer, type ExplorerOptions };
