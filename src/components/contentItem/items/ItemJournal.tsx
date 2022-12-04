import React from 'react';
import { ContentHeader } from '../../contentHeader/ContentHeader';
import { ItemSymptoms } from './ItemSymptoms';
import { ItemPost } from './ItemPost';
export const ItemJournal = (props: any) => {
    const data = ['weakness','sleepiness','blurred vision','decrease appetite','nausea','cramps','dizziness','polyuria','insomnia'];
    return(
        <>
        <div className='flex flex-wrap justify-evenly'>
        {data.map((item,index)=>{
            return(
                <ItemSymptoms key={index} name={item}/>
            )
        })}
            </div>
        <ContentHeader headerContent="Blood pressure" />
            <ItemPost header="Let’s check your BP" value="mmHg" />
        <ContentHeader headerContent="Weight tracker" />
            <ItemPost header="Your current weight" value="Kg"/>
            <div className='flex items-center justify-center pt-7 pb-20'>
                <button
                    type="button"
                    className="items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Send report to my doctor
                </button>
            </div>
        </>
    )
}