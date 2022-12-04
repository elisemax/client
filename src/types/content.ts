export interface ContentState {
    content: IContent;
    loading: boolean;
    error: null | string;
}
interface IContent {
    title: string;
    headerContent: string;
    create: string;
    contents:IElem[];
    graph:any[];
}
interface IElem{
    header: string;
    icon: string;
    border: boolean;
    mark: IColor;
    content: IText[];

}

interface IColor{
    header: string;
    text: string;
    space: string;
}
interface IText {
    textHeader: string;
    textContent: string;
}
