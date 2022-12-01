const ContentItem = (props: any) => {
    const { header, text, mark , icon, btn, border } = props.content;
    console.log(props)
    const renderHeader = () =>{
        return(
        <div className='flex'>
            <img className='ml-3' src={icon} alt="" />
            <h2 className="py-1 text-xs ml-2 font-bold tracking-tight text-green-600">{header}</h2>
        </div>)
    }  
    const renderBorder = () => {
        const element = renderText();
        return (
            <div className="mt-1 border-t border-gray-500/20 pt-1">
                {element}
            </div>
        )
    }
    const renderText = () => {
        return (
            text.map((item: any) => { 
            return(<dl className="grid grid-cols-2">
                <div>
                    <dt className="text-xs ml-3 font-medium leading-5 text-gray-400">{item.textHeader}</dt>
                </div>
                <div>
                    <dd className="mr-5 text-right font-bold text-xs text-amber-700">{item.textContent}</dd>
                </div>
            </dl>)})
        )
    }
    const contentHeader = renderHeader();
    const contentBorder = renderBorder();
    const contentText = renderText(); 
    return (
        <div className="pt-3 px-5">
            <div className="bg-green-100 rounded">
                <div className="max-w-7xl py-1 sm:py-24 sm:px-6 lg:px-8 rounded">
                    {contentHeader}
                    {border ? contentBorder : contentText}
                </div>
            </div>
        </div>)
}
export default ContentItem;