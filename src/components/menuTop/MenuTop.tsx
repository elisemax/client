import { useDispatch } from "react-redux";
import { useTypeSelector } from "../../hooks/useTypeSelector";
import { changeFilter } from "../../store/slice/filterSlice";

export const MenuTop = (props:any) => {
    const activeState = useTypeSelector(state => {
        let activeState: string = '';
        state.filter.filter.forEach((item) => {
            if (item.status === 'active') {
                activeState = item.id;
            }
        })
        return activeState;
    });
    const user = useTypeSelector(state => state.userSlice.user);
    let items = useTypeSelector(state => state.filter.filter.slice(3));
    if (user === 5) {
        items = items.slice(4);
    }else{
        items = items.slice(0,4);
    }
    const dispatch = useDispatch();
    const renderItem = (items: any) => {
        const { src, srcActive, id } = items
        const styleWhite = 'inline-flex items-center rounded-full border border-transparent p-4 text-white shadow-lg bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2'
        const styleOrange = 'inline-flex items-center rounded-full border border-transparent p-4 text-white shadow-lg bg-white focus:outline-none focus:ring-2 focus:ring-offset-2'
        return (
            <li>
            <div>
                <button
                    type="button"
                    className={activeState === id ? styleWhite : styleOrange}
                    onClick={() => dispatch(changeFilter(id))}>
                    <img className="w-6 h-6" src={activeState === id ? srcActive : src} alt="dev" />
                </button>
                <h2 className="mt-1 font-bold text-xs text-center text-violet-700">{id}</h2>
            </div>
            </li>
            )
    }
    const elements = items.map((item: any) => renderItem(item))
    return (
        <>
            <ul role="list" className="flex content-center justify-around flex-row">
                {elements}
            </ul>
        </>
    )
}
export default MenuTop;

