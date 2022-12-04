import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../store/slice/filterSlice';

export const MenuBot = () => {
    const activeState = useTypeSelector(state => {
        let activeState: string = '';
        state.filter.filter.forEach((item) => {
            if (item.status === 'active') {
                activeState = item.id;
            }
        })
        return activeState;
    });
    const dispatch = useDispatch();
    const items = useTypeSelector(state => state.filter.filter.slice(0, 3));
    const renderItem = (items: any) => {
        const { src, srcActive, id } = items
        return (
            <div>
                <button
                    type="button"   
                    className="inline-flex items-center"
                    onClick={() => dispatch(changeFilter(id))}>
                    <img className="w-6 h-6" src={activeState === id ? srcActive : src} alt="dev" />
                </button>
                <h2 className="font-bold text-xs text-center text-gray-400">{id}</h2>
            </div>)
    }
    const elements = items.map((item: any) => renderItem(item))
    return (
        <>
            <div className='bg-gray-100
             text-white text-center
             border-t-2 border-gray-300
             fixed
             inset-x-0
             bottom-0
             pt-2'>
                <div className='flex content-center justify-around flex-row'>
            {elements}
            </div>
            </div>
        </ >
    )
}
export default MenuBot;