import { ItemText } from "./ItemText"

export const ItemBorder = (props:any) => {

    return (
        <div className="mt-1 border-t border-gray-500/20 pt-1">
            <ItemText content={ props.content } 
                    stylesText={ props.stylesText}/>
        </div>
    )
}