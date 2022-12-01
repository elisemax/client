export const ContentItem = (props: any) => {
    const { Header, Text, Mark , Icon, btn, border } = props;
    //const itemType = { Header:'',Text:[], Mark:'',Icon:'' };
    const renderHeader = () =>{
        return(
        <div className='flex'>
            <img className='ml-3' src={Icon} alt="" />
            <h2 className="py-1 text-xs ml-2 font-bold tracking-tight text-green-600">Doctor exam</h2>
        </div>)
    }
    const renderBorder = () => {
        return (
            <div className="mt-1 border-t border-gray-500/20 pt-1">
                <dl className="grid grid-cols-2">
                    <div>
                        <dt className="text-xs ml-3 font-medium leading-5 text-gray-400">Long insulint:</dt>
                    </div>
                    <div>
                        <dd className="mr-5 text-right font-bold text-xs text-amber-700">___UN</dd>
                    </div>
                </dl>
            </div>
        )
    }
    const renderText = () => {
        return (
            <dl className="grid grid-cols-2">
                <div>
                    <dt className="text-xs ml-3 font-medium leading-5 text-gray-400">Long insulint:</dt>
                </div>
                <div>
                    <dd className="mr-5 text-right font-bold text-xs text-amber-700">___UN</dd>
                </div>
            </dl>
        )
    }
    return (
        <div className="pt-3 px-5">
            <div className="bg-green-100 rounded">
                <div className="max-w-7xl py-1 sm:py-24 sm:px-6 lg:px-8 rounded">
                </div>
            </div>
        </div>)
}