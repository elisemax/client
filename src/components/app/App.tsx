/* eslint-disable jsx-a11y/no-redundant-roles */
import logo from '../../resource/logo.png';
import icon from '../../resource/User-icon.png';
import Content from '../content/content';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { changeFilter } from '../../store/slice/filterSlice';
import { MenuBot } from '.././menuBot/menuBot';
import { MenuTop } from '../menuTop/menuTop';
function App(){
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
  const images = useTypeSelector(state => state.filter.filter.slice(3));
  const imagesBottom  = useTypeSelector(state => state.filter.filter.slice(0, 3));
  const onFilterChange = useCallback((id: string )=> dispatch(changeFilter(id)), [activeState])
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
      <div className="absolute inset-0 bg-[url('resource/background.png')] bg-no-repeat">
        <section>
          <div className='flex justify-around content-center flex-row pt-3'>
            <div><img src={logo} alt="logo"/></div>
            <h1 className='text-2xl leading-7 ml-12 mr-12 font-semibold text-slate-50/60 text-center'>Good<br/>morning!</h1>
            <div className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
              <img src={icon} alt="icon" />
            </div> 
          </div>
        </section>
        <section className='pt-14'>
          <ul role="list" className="flex content-center justify-around flex-row">
            {images.map((img) => (
              <li>
                <MenuTop img={img} onFilterChange={() => onFilterChange(img.id)} activeState={activeState}></MenuTop>
              </li>
            ))}
          </ul>
        </section>
        <section>
          {<Content/> ? <Content id={activeState}/> : <div>loading</div>}
        </section>
        <section>
          <div className='bg-gray-100
             text-white text-center
             border-t-2 border-gray-300
             fixed
             inset-x-0
             bottom-0
             pt-2'>
            <div className='flex content-center justify-around flex-row'>
              {
                imagesBottom.map((img)=>(
                  <>
                    <MenuBot img={img} onFilterChange={() => onFilterChange(img.id)} activeState={activeState}></MenuBot>
                  </>
                ))}
            </div>
            </div>
        </section>
      </div>
    </div>
  );
}


export default App;
