import { useState } from "react"

const ButtonRounded = (props:any) =>{
    const {img:imgInt} = props
    const {src, srcWhite,name} = imgInt
    let {status} = imgInt
    const [isClick, setIsClick] = useState(false)
    const renderButton = () =>{
        if(isClick || status === 'active'){
            status = 'inactive'
            return (
                <div>
                    <button
                        type="button"
                        className="inline-flex items-center rounded-full border border-transparent p-4 text-white shadow-lg bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        onClick={() => { setIsClick(!isClick) }}
                    >
                        <img className="w-6 h-6" src={srcWhite} alt="dev" />
                    </button>
                    <div className="mt-1 font-bold text-xs text-center text-violet-700">{name}</div>
                </div>
            )
        }
        else{
            return (
                <div>
                    <button
                        type="button"
                        className="inline-flex items-center rounded-full border border-transparent p-4 text-white shadow-lg bg-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                        onClick={() => { setIsClick(!isClick) }}
                    >
                        <img className="w-6 h-6" src={src} alt="dev" />
                    </button>
                    <div className="mt-1 font-bold text-xs text-center text-violet-700">{name}</div>
                </div>
            )
        }
    }
    return(
        renderButton()
    )
}
export default ButtonRounded;