/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/no-redundant-roles */
import infl from '../resource/infl.svg';
import bottle from '../resource/medBottle.svg';
import pill from '../resource/presc.svg';
import devIcon from '../resource/devIcon.svg';
import { useHttp } from '../hooks/http.hook';
import {useState, useEffect, useReducer } from 'react';
import { reducerBut } from '../store/reducer';
import { PlusIcon as PlusIconMini } from '@heroicons/react/20/solid'

const Content = (props:any) => {
    const { id } = props
    const { request } = useHttp();
    const [dataConsulations, setDataConsultation] = useState([]);
    const [dataLaboratory, setDataLaboratory] = useState([]);
    const [dataPrescription, setDataPrescription] = useState([]);
    const [state, dispatch] = useReducer(reducerBut, {id: 0, name: ''});
    const dataDevices = ['DEXCOM G6', 'Smart Insulin Pen','Insulin pump'];
    const [devButton,setDevButton] = useState(false) 
   // const buttonSelected = (id:number)=>{
   //     setDevButton(id)
   // }  
   useEffect(() => {
        if (id===1) {
            request('http://34.118.48.240:8080/patient/encounters/1', 'GET', null)
                .then((data) => {
                    setDataConsultation(data);
                });
            request('http://34.118.48.240:8080/patient/tests/1', 'GET', null)
                .then((data) => {
                    setDataLaboratory(data);
                });
        }
        if (id===2) {
            request('http://34.118.48.240:8080/patient/encounters/1', 'GET', null)
                .then((data) => {
                    setDataConsultation(data);
                });
            request('http://34.118.48.240:8080/patient/tests/1', 'GET', null)
                .then((data) => {
                    setDataLaboratory(data);
                });
        }
       if (id === 3) {
           request('http://34.118.48.240:8080/patient/meds/1', 'GET', null)
               .then((data) => {
                   setDataPrescription(data);
               });
       }
       if (id === 4) {

       }
        }, [id]);
    const renderContentConsultaion = (data:any) => {
       
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
                                    <dd className="mr-5 text-right font-bold text-xs text-orange-400">{data.start ? data.start : undefined}</dd>
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
        //""
        if (finalResult) {
            resStyle = `mr-5 text-right font-bold text-xs text-red-500`;
            medTest = '0/1'
        }else{
            resStyle = `mr-5 text-right font-bold text-xs text-green-400`;
            medTest = '1/1'
        }

        //if (nowDate.getFullYear()-1 > oldDate) {
        //    finalResult = true
        //}
      
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
                                <dd className="mr-5 text-right font-bold text-xs text-orange-400">{data.time ? data.time : undefined}</dd>
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
                                <dd className="mr-5 text-right font-bold text-xs text-stone-500">{data.time? data.time : null} mg/dL</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>)
    }
    const renderContentDevices = (data: any) => {
        console.log(devButton)
        if (devButton) {
            return (
                <div className="pt-3 px-5">
                    <div className="bg-green-100 rounded">
                        <div className="max-w-7xl py-1 sm:py-24 sm:px-6 lg:px-8 rounded">
                            <div className='flex justify-between'>
                                <div><img className='ml-3' src={devIcon} alt="icon" />
                                    <h2 className="py-1 text-xs ml-2 font-bold tracking-tight text-green-600">{data}</h2></div>
                                <div><button onClick={() => { setDevButton(!devButton) }} className='rounded-full border border-green-600 border-transparent p-2 text-white shadow-lg bg-green-100 mr-3'>
                                    <PlusIconMini className="h-4 w-4 text-green-600" aria-hidden="true" /></button></div>
                            </div>
                        </div>
                        <div className="mt-1 border-t border-gray-500/10 pt-1">
                            <dl className="grid grid-cols-2">
                                <div>
                                    <dt className="tnext-xs ml-3 font-medium leading-5 text-gray-400">Installed on a date:</dt>
                                </div>
                                <div>
                                    <dd className="mr-5 text-right font-bold text-xs text-stone-500">21/11/2022</dd>
                                </div>
                            </dl>
                            <dl className="grid grid-cols-2">
                                <div>
                                    <dt className="text-xs ml-3 font-medium leading-5 text-gray-400">Remaining days:</dt>
                                </div>
                                <div>
                                    <dd className="mr-5 text-right font-bold text-xs text-green-500">14</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            )
        }else if(devButton===false){
            return (
                <div className="pt-3 px-5">
                    <div className="bg-green-100 rounded">
                        <div className="max-w-7xl py-1 sm:py-24 sm:px-6 lg:px-8 rounded">
                            <div className='flex justify-between'>
                                <div><img className='ml-3' src={devIcon} alt="icon" />
                                    <h2 className="py-1 text-xs ml-2 font-bold tracking-tight text-green-600">{data}</h2></div>
                                <div><button onClick={() => { setDevButton(!devButton) }} className='rounded-full border border-green-600 border-transparent p-2 text-white shadow-lg bg-green-100 mr-3'>
                                    <PlusIconMini className="h-4 w-4 text-green-600" aria-hidden="true" /></button></div>
                            </div>
                        </div>
                    </div>
                    </div>)
        }
    }
    const renderContentInsulin = (data: any) => {
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
                                <dd className="mr-5 text-right font-bold text-xs text-orange-400">{data.start ? data.start : undefined}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>)
    }
    const elementMeds = dataPrescription.map((item: any) => { return renderContentMedication(item) })
    const elementsConsultation = dataConsulations.map((item:any) => renderContentConsultaion(item));
    const elementsLaboratory = dataLaboratory.map((item:any) => renderContentLaboratory(item));
    const elementsDevices = dataDevices.map((item:any) => renderContentDevices(item));
    const renderContent = (id:number) => {
        if (id === 1) {
        return (<div>
            <h2 className="pl-6 pt-10 text-base text-amber-800 uppercase font-medium">Consultation</h2>
                {elementsConsultation}
            <h2 className="pl-6 pt-10 text-base text-amber-800 uppercase font-medium">Laboratory</h2>
                {elementsLaboratory}
        </div>)} else if (id === 2) {
            return}
        else if (id === 3) {
            return(<div>
                <h2 className="pl-6 pt-10 text-base text-amber-800 uppercase font-medium">Prescription</h2>
                {elementMeds}
            </div>)}
        else if (id === 4) {
            return(<div>
                {elementsDevices}
            </div>)}
    }
    return (
        <>
            {renderContent(id)}
        </>
    )
}
export default Content;