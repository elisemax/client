import { ItemText } from "./items/ItemText";
import { ItemBorder } from "./items/ItemBorder";
import { ItemHeader } from "./items/ItemHeader";

const ContentItem = (props: any) => {
    const { border } = props.content;
    const stylesText = {
        red: 'mx-3 text-right font-bold text-xs text-red-500',
        gray: 'text-xs mx-3 font-medium leading-5 text-stone-400',
        green: 'mx-3 text-right font-bold text-xs leading-5 text-green-600',
        orange: 'text-xs mx-3  font-medium leading-5 text-orange-500',
        stone: 'mx-3 text-right font-bold text-xs leading-5 text-stone-500',
        spaceBetween: 'flex justify-between items-center',
        spaceAround: 'flex justify-start',
    }
    const stylesHeader = {
        red: 'py-1 text-xs ml-2 leading-7 font-bold tracking-tight text-red-500',
        green: 'py-1 text-xs ml-2 leading-7 font-bold tracking-tight text-green-600',
    }

    const contentHeader = <ItemHeader content={props.content} stylesText={stylesText} stylesHeader={stylesHeader}/>
    const contentBorder = <ItemBorder content={props.content} stylesText={stylesText} />;
    const contentText = <ItemText content={props.content} stylesText={stylesText} />

    return (
        <div className="pt-3 px-5">
            <div className="bg-green-50 rounded">
                <div className="max-w-7xl py-1 sm:py-24 sm:px-6 lg:px-8 rounded">
                    {contentHeader}
                    {border ? contentBorder : contentText}
                </div>
            </div>
        </div>)
}

export default ContentItem;