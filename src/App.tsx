/* eslint-disable jsx-a11y/no-redundant-roles */
import { useResource } from './hooks/useResource';
import logo from './resource/logo.png';
import icon from './resource/User-icon.png';
import Content from './components/content/content';
import { useReducer, useState } from 'react';
import { reducerBut } from './store/reducer';
import { useResourceBottom } from './hooks/useResourceBottom';
function App()    {
  
  const { images } = useResource()
  const [state, dispatch] = useReducer(reducerBut, { id: 0, name: '' })
  const {imagesBottom} = useResourceBottom()
  const buttonsCreate = (props: any) => {
    const { src, srcWhite, name, id } = props
    const styleWhite = 'inline-flex items-center rounded-full border border-transparent p-4 text-white shadow-lg bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2'
    const styleOrange = 'inline-flex items-center rounded-full border border-transparent p-4 text-white shadow-lg bg-white focus:outline-none focus:ring-2 focus:ring-offset-2'
    return (
      <div>
        <button
          type="button"
          className={state.id === id ? styleWhite : styleOrange}
          onClick={() => {
            dispatch({ type: name, payload: { id: id, name: name } })
          }}
        >
          <img className="w-6 h-6" src={state.id === id ? srcWhite : src} alt="dev" />
        </button>
        <div className="mt-1 font-bold text-xs text-center text-violet-700">{name}</div>
      </div>
    )
  }
  const buttonsCreateBottom = (props: any) => {
    const { src, name, id } = props
    if (state.id === id) {
      console.log(state.id)
      return (
        <><div><button
          type="button"
          className="inline-flex items-center p-4 "
          onClick={() => {
            dispatch({ type: name, payload: { id: id, name: name } })
          }}
        >
          <img className="w-6 h-6" src={src} alt="dev" />
        </button><div className="mt-1 font-bold text-xs text-center text-gray-400">{name}</div></div></>
      )
    }else{
      return (
        <>
        <div><button
          type="button"
          className="inline-flex items-center"
          onClick={() => {
            dispatch({ type: name, payload: { id: id, name: name } })
          }}
        >
          <img className="w-6 h-6" src={src} alt="dev" />
          </button><div className="font-bold text-xs text-center text-gray-400">{name}</div></div></>
      )
    }
  }

  //const buttons = buttonsCreate(images)
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
          {<Content/> ? <Content id={state.id}/> : <div>loading</div>}
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
