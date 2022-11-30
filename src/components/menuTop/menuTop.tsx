export const MenuTop = (props: any) => {
    const { src, srcActive, id } = props.img
    const { activeState, onFilterChange } = props
    const styleWhite = 'inline-flex items-center rounded-full border border-transparent p-4 text-white shadow-lg bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2'
    const styleOrange = 'inline-flex items-center rounded-full border border-transparent p-4 text-white shadow-lg bg-white focus:outline-none focus:ring-2 focus:ring-offset-2'
    return (
        <div>
            <button
                type="button"
                className={activeState === id ? styleWhite : styleOrange}
                onClick={ onFilterChange}
            >
                <img className="w-6 h-6" src={activeState === id ? srcActive : src} alt="dev" />
            </button>
            <div className="mt-1 font-bold text-xs text-center text-violet-700">{id}</div>
        </div>
    )
}