import { getStyle } from "../support/supportStyle";
import { ItemButton } from "./ItemButton";


export const ItemHeader = (props:any) => {
    const { header, mark , icon, btn } = props.content;
    const stylesText = props.stylesText;
    const stylesHeader = props.stylesHeader;
    const currentStyleHeader = getStyle(stylesHeader, mark.header);
    let styleBtn = 'flex';
    let element;

    if (btn) {
        styleBtn = getStyle(stylesText, mark.space);
        element = <ItemButton onClick={props.onClick}/>;
    }
    
    return (
        <div className={styleBtn}>
            <div className="flex">
                <img className='ml-3' src={icon} alt="" />
                <h2 className={currentStyleHeader}>{header}</h2>
            </div>
            {element}
        </div>)
}  