import { ItemChart } from "./items/ItemChart";
import { Item } from "./items/Item";
import { useState } from "react";
import { ItemJournal } from "./items/ItemJournal";
const ContentItem = (props: any) => {
    const [show, setShow] = useState(false);
    const stylesText = {
        red: 'mx-3 text-right font-bold text-xs text-red-500',
        gray: 'text-xs mx-3 font-medium leading-5 text-stone-400',
        green: 'mx-3 text-right font-bold text-xs leading-5 text-green-600',
        orange: 'text-xs mx-3  font-medium leading-5 text-orange-500',
        stone: 'mx-3 text-right font-bold text-xs leading-5 text-stone-500',
        spaceBetween: 'flex justify-between items-center',
        spaceAround: 'flex justify-start items-center',
    }
    const stylesHeader = {
        red: 'py-1 text-xs ml-2 leading-7 font-bold tracking-tight text-red-500',
        green: 'py-1 text-xs ml-2 leading-7 font-bold tracking-tight text-green-600',
    }
    const onClick = () => {setShow(!show);}
    let elem;
    if (props.create === 'Item') {
        elem = <Item
            content={props.content}
            stylesText={stylesText}
            stylesHeader={stylesHeader}
            onClick={onClick} show={show} />;
    }else if(props.create === 'Chart'){
        elem = <ItemChart grap={props.graph[0]}/>;
    }else if (props.create === 'Baby journal') {
        elem = <ItemJournal
            content={props.content}/>
    }

    if(props.title === 'Baby journal'){
        elem = <ItemJournal content={props.content}/>
    }
    return (<>{elem}</>)
}

export default ContentItem;