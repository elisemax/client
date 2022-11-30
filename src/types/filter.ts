export interface Ifilter {
    id: string;
    src: string;
    srcActive: string;
    status: string;
    endpoint?: string[];
}
export interface filterState {
    filter: Ifilter[];
}

