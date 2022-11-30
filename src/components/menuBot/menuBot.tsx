export const MenuBot = (props: any) => {
    const { src, srcActive, id} = props.img
    const { activeState, onFilterChange } = props
    console.log(id)
    return (
        <>
            <div><button
                type="button"
                className="inline-flex items-center"
                onClick={onFilterChange}
            >
                <img className="w-6 h-6" src={activeState === id ? srcActive : src} alt="dev" />
            </button><div className="font-bold text-xs text-center text-gray-400">{id}</div></div></>
    )
}