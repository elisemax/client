import { ItemText } from "./ItemText"
import { getStyle } from "../support/supportStyle";
export const ItemBorder = (props:any) => {
    const { text, mark } = props.content;
    const stylesText  = props.stylesText;
    const currentStyleText = getStyle(props.stylesText, mark.text);
    
    return (
        <div className="mt-1 border-t border-gray-500/20 pt-1">
            <ItemText text={text} 
                    stylesText={stylesText}
                    currentStyleText={currentStyleText}
                    mark={mark} />
        </div>
    )
}