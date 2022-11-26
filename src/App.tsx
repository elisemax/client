/* eslint-disable jsx-a11y/no-redundant-roles */
import { useResource } from './hooks/useResource';
import ButtonRounded from './button/button';
import logo from './resource/logo.png';
import icon from './resource/User-icon.png';
function App() {
  const { images } = useResource()
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
                <ButtonRounded img={img}/>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
