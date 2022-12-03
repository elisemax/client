import { ItemText } from "./ItemText";
import { ItemBorder } from "./ItemBorder";
import { ItemHeader } from "./ItemHeader";

export const Item = (props: any) => {
    const { stylesText, stylesHeader, onClick, show } = props;
    let element;
    if (show && props.content.btn) {
        element = <ItemBorder content={props.content} stylesText={stylesText} />
    } else if (!props.content.btn) {
        element = <ItemBorder content={props.content} stylesText={stylesText} />
    } else if (!props.content.border) {
        element = <ItemText content={props.content} stylesText={stylesText} />
    }

    return (<>
        <div className="pt-3 px-5">
            <div className="bg-green-50 rounded">
                <div className="max-w-7xl py-1 sm:py-24 sm:px-6 lg:px-8 rounded">
                    <ItemHeader content={props.content}
                        stylesText={stylesText}
                        stylesHeader={stylesHeader}
                        onClick={onClick} />
                    {element}
                </div>
            </div>
        </div>
    </>)
}