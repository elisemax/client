import React from "react"
import { useState } from "react"
export const ItemSymptoms = (props: any) => {
    const [active, setActive] = useState(false)
    let style = "inline-flex items-center mr-1 mt-1 rounded-xl border border-transparent bg-red-200 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm"
    if (active) {
        style = "inline-flex items-center mr-1 mt-1 rounded-xl border border-transparent bg-red-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm"
    }
    const name = props.name;
    return (
        <button type="button" onClick={ () => setActive(!active) } 
            className={style}>
            {name}
        </button>
    )
}