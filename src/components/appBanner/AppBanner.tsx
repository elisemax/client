/* eslint-disable jsx-a11y/no-redundant-roles */
import logo from '../../resource/banner/logo.png';
import icon from '../../resource/banner/User-icon.png';
import { Link } from 'react-router-dom';
const AppBanner = () => {
    return (
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
            <div className="absolute inset-0 bg-[url('resource/bg/backgroundMd.png')] sm:h-40 sm:bg-gradient-to-r from-blue-400 to-green-200 bg-no-repeat -z-10"></div>
                <div className='flex justify-around content-center flex-row pt-3 pb-16'>
                <div><img src={logo} alt="logo" /></div>
                    <h1 className='text-2xl leading-7 ml-12 mr-12 font-semibold text-slate-50/60 text-center'>Good<br />morning!</h1>
                    <div className="h-12 w-12">
                    <Link to="/" ><img src={icon} alt="icon"/></Link>
                        <div className='text-center text-violet-900 font-bold font-ubuntu'>
                            User
                        </div>
                    </div>
            </div>
        </div>);
}
export default AppBanner;