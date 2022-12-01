/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/no-redundant-roles */
import infl from '../../resource/iconsContent/infl.svg';
import bottle from '../../resource/iconsContent/medBottle.svg';
import pill from '../../resource/iconsContent/presc.svg';
import devIcon from '../../resource/iconsContent/devIcon.svg';
import notif from '../../resource/iconsContent/notif.svg'
import done from '../../resource/iconsContent/done.svg'
import graph from '../../resource/graph.png'
import { useState, useEffect} from 'react';
import { PlusIcon as PlusIconMini } from '@heroicons/react/20/solid'
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { fetchContent } from '../../store/slice/contentSlice';
import { useTypeDispatch } from '../../hooks/useAppDispatch';
import { Ifilter } from '../../types/filter';
import ContentItem from '../contentItem/ContentItem';

const Content = () => {
    const activeState = useTypeSelector(state => {
        let activeState: Ifilter = { id: '',status: '',src: '', srcActive: ''};
        state.filter.filter.forEach((item) => {
            if (item.status === 'active') {
                activeState = item
            }
        })
        return activeState;
    });
    const dispatch = useTypeDispatch();
    const [dataConsulations, setDataConsultation] = useState([]);
    const [dataLaboratory, setDataLaboratory] = useState([]);
    const [dataPrescription, setDataPrescription] = useState([]);
    const dataDevices = ['DEXCOM G6', 'Smart Insulin Pen', 'Insulin pump'];
    const [devButton, setDevButton] = useState(false);

    useEffect(() => {
        if (activeState.status) {
            if (activeState.endpoint) {
                activeState.endpoint.forEach((item: any) => {
                    dispatch(fetchContent(item));
                })
            }
        }
        else{
            console.log('useEffect else');
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeState]);
    const renderContentConsultaion = (data: any) => {
        return (<div className="pt-3 px-5">
            <div className="bg-green-100 rounded">
                <div className="max-w-7xl py-1 sm:py-24 sm:px-6 lg:px-8 rounded">
                    <div className='flex'>
                        <img className='ml-3' src={infl} alt="" />
                        <h2 className="py-1 text-xs ml-2 font-bold tracking-tight text-green-600">Doctor exam</h2>
                    </div>
                    <div className="mt-1 border-t border-gray-500/10 pt-1">
                        <dl className="grid grid-cols-2">
                            <div>
                                <dt className="text-xs ml-3 font-medium leading-5 text-gray-400">Last checked:</dt>
                            </div>
                            <div>
                                <dd className="mr-5 text-right font-bold text-xs text-orange-400">{data.start ? data.start.slice(0, 10) : undefined}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>)
    }
    const renderContentLaboratory = (data: any) => {
        const oldDate = Date.parse(data.time)
        const nowDate = new Date()
        let finalResult = false;
        let resStyle;
        let medTest = ''

        if (nowDate.getTime() - oldDate > 86400000) {
            finalResult = true;
        }
        if (finalResult) {
            resStyle = `mr-5 text-right font-bold text-xs text-red-500`;
            medTest = '0/1'
        } else {
            resStyle = `mr-5 text-right font-bold text-xs text-green-400`;
            medTest = '1/1'
        }

        return (<div className="pt-3 px-5">
            <div className="bg-green-100 rounded">
                <div className="max-w-7xl py-1 sm:py-24 sm:px-6 lg:px-8 rounded">
                    <div className='flex'>
                        <img className='ml-3' src={bottle} alt="" />
                        <h2 className="py-1 text-xs ml-2 font-bold tracking-tight text-green-600">{data.name ? data.name : undefined}</h2>
                    </div>
                    <div className="mt-1 border-t border-gray-500/10 pt-1">
                        <dl className="grid grid-cols-2">
                            <div>
                                <dt className="text-xs ml-3 font-medium leading-5 text-gray-400">Recommended: 1 per year</dt>
                            </div>
                            <div>
                                <dd className={resStyle}>{medTest ? medTest : undefined}</dd>
                            </div>
                        </dl>
                        <dl className="grid grid-cols-2">
                            <div>
                                <dt className="text-xs ml-3 font-medium leading-5 text-gray-400">Date of last test:</dt>
                            </div>
                            <div>
                                <dd className="mr-5 text-right font-bold text-xs text-orange-400">{data.time ? data.time.slice(0, 10) : undefined}</dd>
                            </div>
                        </dl>
                        <dl className="grid grid-cols-2">
                            <div>
                                <dt className="text-xs ml-3 font-medium leading-5 text-gray-400">Result:</dt>
                            </div>
                            <div>
                                <dd className="mr-5 text-right font-bold text-xs text-orange-400">{data.result ? data.result : null} mg/dL</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>)
    }
    const renderContentMedication = (data: any) => {
        let resStyle = `mr-5 text-right font-bold text-xs text-red-500`;
        return (<div className="pt-3 px-5">
            <div className="bg-green-100 rounded">
                <div className="max-w-7xl py-1 sm:py-24 sm:px-6 lg:px-8 rounded">
                    <div className='flex'>
                        <img className='ml-3' src={pill} alt="" />
                        <h2 className="py-1 text-xs ml-2 font-bold tracking-tight text-green-600">{data.medicine ? data.medicine : undefined}</h2>
                    </div>
                    <div className="mt-1 border-t border-gray-500/10 pt-1">
                        <dl className="grid grid-cols-2">
                            <div>
                                <dt className="text-xs ml-3 font-medium leading-5 text-gray-400">Dosage:</dt>
                            </div>
                            <div>
                                <dd className={resStyle}>{data.dosage ? data.dosage : undefined}</dd>
                            </div>
                        </dl>
                        <dl className="grid grid-cols-2">
                            <div>
                                <dt className="text-xs ml-3 font-medium leading-5 text-gray-400">Times per day:</dt>
                            </div>
                            <div>
                                <dd className="mr-5 text-right font-bold text-xs text-red-400">{data.period ? data.period : undefined}</dd>
                            </div>
                        </dl>
                        <dl className="grid grid-cols-2">
                            <div>
                                <dt className="text-xs ml-3 font-medium leading-5 text-gray-400">Prescribed by:</dt>
                            </div>
                            <div>
                                <dd className="mr-5 text-right font-bold text-xs text-orange-400">{data.doctorName ? data.Name : null} mg/dL</dd>
                            </div>
                        </dl>
                        <dl className="grid grid-cols-2">
                            <div>
                                <dt className="text-xs ml-3 font-medium leading-5 text-gray-400">Date of prescription:</dt>
                            </div>
                            <div>
                                <dd className="mr-5 text-right font-bold text-xs text-stone-500">{data.time ? data.time.slice(0, 10) : null}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>)
    }
    const renderContentDevices = (data: any) => {
        if (devButton) {
            return (
                <div className="pt-3 px-5">
                    <div className="bg-green-100 rounded">
                        <div className="max-w-7xl py-1 sm:py-24 sm:px-6 lg:px-8 rounded">
                            <div className='flex justify-between items-center'>
                                <div className='flex'><img className='ml-3' src={devIcon} alt="icon" />
                                    <h2 className="text-xs ml-2 leading-7 font-bold tracking-tight text-green-600">{data}</h2></div>

                            </div>
                        </div>
                        <div className="mt-1 border-t border-gray-500/10 pt-1">
                            <dl className="flex">
                                <div>
                                    <dt className="text-xs ml-3 font-medium leading-5 text-gray-400">Installed on a date:</dt>
                                </div>
                                <div>
                                    <dd className="ml-1 items-center font-bold text-xs text-stone-500">21/11/2022</dd>
                                </div>
                            </dl>
                            <dl className="flex">
                                <div>
                                    <dt className="text-xs ml-3 font-medium leading-5 text-gray-400">Remaining days:</dt>
                                </div>
                                <div>
                                    <dd className="ml-1 font-bold text-xs text-green-500">14</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            )
        } else if (devButton === false) {
            return (
                <div className="pt-3 px-5">
                    <div className="bg-green-100 rounded">
                        <div className="max-w-7xl py-1 sm:py-24 sm:px-6 lg:px-8 rounded">
                            <div className='flex justify-between items-center'>
                                <div className='flex'><img className='ml-3' src={devIcon} alt="icon" />
                                    <h2 className="text-xs ml-2 leading-7 font-bold tracking-tight text-green-600">{data}</h2></div>
                                <div className='mt-1 mr-3 items-center'><button onClick={() => { setDevButton(!devButton) }} className='rounded-full border-2 border-green-700 text-white shadow-lg bg-green-100'>
                                    <PlusIconMini className="h-4 w-4 text-green-700" aria-hidden="true" /></button></div>
                            </div>
                        </div>
                    </div>
                </div>)
        }
    }
    const renderContentToday = () => {
        return (<><div className="pt-3 px-5">
            <div className="bg-green-100 rounded">
                <div className="max-w-7xl py-1 sm:py-24 sm:px-6 lg:px-8 rounded">
                    <div className='flex flex-col'>
                        <h2 className="py-1 text-xs ml-2 font-bold tracking-tight text-green-600">Your last glucose check-up:</h2>
                        <div className='flex'>
                            <div className='pl-2 text-lg font-medium leading-5 text-orange-500'>5.5</div>
                            <div className='text-xs ml-1 font-medium leading-5 text-stone-500'>mmol/L</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="pt-3 px-5">
                <div className="bg-green-100 rounded">
                    <div className="max-w-7xl py-1 sm:py-24 sm:px-6 lg:px-8 rounded">
                        <div className='flex flex-col'>
                            <h2 className="py-1 text-xs ml-2 font-bold tracking-tight text-green-600">Your next doctor visit:</h2>
                            <div className='text-xs ml-2 font-medium leading-5 text-stone-500'>12/12/2022</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-3 px-5">
                <div className="bg-green-100 rounded">
                    <div className="max-w-7xl py-1 sm:py-24 sm:px-6 lg:px-8 rounded">
                        <div className='flex'>
                            <img className='ml-3' src={notif} alt="" />
                            <h2 className="py-1 text-xs ml-2 font-bold tracking-tight text-rose-700">Don’t forget to take your medications</h2>
                        </div>
                        <div className="mt-1 border-t border-gray-500/10 pt-1">
                            <dl className="flex">
                                <img className='ml-3' src={pill} alt="" />
                                <dt className="text-xs ml-3 font-bold leading-5 text-green-600 mr-2">Hydrochlorothiazide 12.5 MG<br />amLODIPine 5 MG<br />Olmesartan medoxomil 20 MG Oral Tablet</dt>
                            </dl>
                            <dl className="flex justify-end mt-8">
                                <div>
                                    <dt className="text-xs ml-3 font-bold leading-5 text-green-700 mr-2">Mark as done</dt>
                                </div>
                                <img className='mr-4' src={done} alt="" />
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
    const renderContentReports = () => {
        return (<div>
            <div className='p-5 flex flex-col'>
                <img className='' src={graph} alt="" />
                <button
                    type="button"
                    className="mt-8 items-center rounded-md border bg-orange-500 px-3 py-2 text-sm font-Bold leading-4 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 text-center"
                >
                    SEND REPORT TO MY DOCTOR
                </button>
            </div>
        </div>)
    }
    
    const elementMeds = dataPrescription.map((item: any) => { return renderContentMedication(item) })
    const elementsConsultation = {
        header: 'Doctor exam',
        icon: infl,
        title: 'Consultation',
        border: true,
        mark: {
            header:'green',
            text:'orange',
            space: 'spaceAround'
        },
        text:[ {textHeader:'time',textContent:'12/12/2022'}]
    }
    const elementsLaboratory = 
    {
        header: 'Doctor exam',
        title: 'Consultation',
        border: false,
        mark: {
            header: 'red',
            text: 'green',
            space: 'spaceBetween'
        },
        text: [{ textHeader: 'time', textContent: '12/12/2022' }]
    }
    const elementsDevices = dataDevices.map((item: any) => renderContentDevices(item));
    const elementToday = renderContentToday()
    const elementReports = renderContentReports()
    const elementsInsulin = { header:'Doctors exam',
                            icon: infl,
                            title: 'Insulin',
                            btn:false,
                            border:true,
                            mark:{header:'green',
                                   text:'stone',
                                   space:'spaceBetween'},
                            text:[{textHeader:'Long insulin',textContent:'__UN'},
                                {textHeader:'Short insulin',textContent:'__UN'},],
                        }
    const renderContent = () => {
        if (activeState.id === 'Doctors') {
            return (<div>
                <h2 className="pl-6 pt-10 text-base text-amber-800 uppercase font-medium">Consultation</h2>
                <ContentItem content={elementsConsultation}/>
                <h2 className="pl-6 pt-10 text-base text-amber-800 uppercase font-medium">Laboratory</h2>
                <ContentItem content={elementsLaboratory}/>
            </div>)
        } else if (activeState.id === 'Insulin') {
            return (<div>
                <ContentItem content={elementsInsulin} />
            </div>)
        }
        else if (activeState.id === 'Meds') {
            return (<div>
                <h2 className="pl-6 pt-10 text-base text-amber-800 uppercase font-medium">Prescription</h2>
                {elementMeds}
            </div>)
        }
        else if (activeState.id === 'Devices') {
            return (<div>
                {elementsDevices}
            </div>)
        }
        else if (activeState.id === 'Today') {
            return (<div>
                <h2 className="pl-6 pt-10 text-base text-amber-800 uppercase font-medium">How do you feel today?</h2>
                {elementToday}
            </div>)
        }
        else if (activeState.id === 'Reports') {
            return (<div>
                <h2 className="pl-6 pt-10 text-lg text-amber-800 uppercase font-medium">Glucose</h2>
                {elementReports}
            </div>)
        }
        else if (activeState.id === 'Chat') {
            return
        }
    }
    return (
        <>
            {renderContent()}
        </>
    )
}
export default Content;


