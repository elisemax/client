/* eslint-disable jsx-a11y/no-redundant-roles */
import logo from '../../resource/logo.png';
import icon from '../../resource/User-icon.png';
import Content from '../content/content';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../store/slice/filterSlice';
function App()    {
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

  const buttonsCreate = (props: any) => {
    const { src, srcActive, name, id } = props
    const styleWhite = 'inline-flex items-center rounded-full border border-transparent p-4 text-white shadow-lg bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2'
    const styleOrange = 'inline-flex items-center rounded-full border border-transparent p-4 text-white shadow-lg bg-white focus:outline-none focus:ring-2 focus:ring-offset-2'
    return (
      <div>
        <button
          type="button"
          className={activeState === id ? styleWhite : styleOrange}
          onClick={() =>  dispatch(changeFilter(id))}
        >
          <img className="w-6 h-6" src={activeState === id ? srcActive : src} alt="dev" />
        </button>
        <div className="mt-1 font-bold text-xs text-center text-violet-700">{name}</div>
      </div>
    )
  }
  const buttonsCreateBottom = (props: any) => {
    const { src, name,srcActive, id } = props
      return (
        <>
        <div><button
          type="button"
          className="inline-flex items-center"
          onClick={() => dispatch(changeFilter(id))}
        >
            <img className="w-6 h-6" src={activeState === id ? srcActive : src} alt="dev" />
          </button><div className="font-bold text-xs text-center text-gray-400">{name}</div></div></>
      )
  }
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
                {buttonsCreate(img)}
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
                  {buttonsCreateBottom(img)}
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
