export const ContentHeader = (props:any) => {
    const { headerContent } = props.headerContent;
    return (
        <h2 className="pl-6 pt-10 text-base text-amber-800 uppercase font-medium">{headerContent}</h2>
    )
}