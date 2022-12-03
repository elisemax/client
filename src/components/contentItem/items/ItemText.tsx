import { getStyle } from "../support/supportStyle";
export const ItemText = (props:any) => {
    const { text, mark } = props.content;
    const stylesText = props.stylesText;
    const currentStyleText = getStyle(stylesText, mark.text);
    const styleBetween = getStyle(stylesText, mark.space);
    return (
        text.map((item: any) => {
            return (<dl className={styleBetween}>
                <div>
                    <dt className="text-xs ml-3 font-medium leading-5 text-gray-400">{item.textHeader}</dt>
                </div>
                <div>
                    <dd className={currentStyleText}>{item.textContent}</dd>
                </div>
            </dl>)
        })
    )
}