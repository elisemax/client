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
    const elementMeds = 
    {
        header: 'Doctor exam',
        icon: infl,
        title: 'Consultation',
        border: true,
        mark: {
            header: 'green',
            text: 'orange',
            space: 'spaceAround'
        },
        text: [{ textHeader: 'time', textContent: '12/12/2022' }]
    }
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
    const elementsDevices = {
        header: 'Doctor exam',
        icon: infl,
        title: 'Consultation',
        border: true,
        mark: {
            header: 'green',
            text: 'orange',
            space: 'spaceAround'
        },
        text: [{ textHeader: 'time', textContent: '12/12/2022' }]
    }
    const elementToday = {
        header: 'Doctor exam',
        icon: infl,
        title: 'Consultation',
        border: true,
        mark: {
            header: 'green',
            text: 'orange',
            space: 'spaceAround'
        },
        text: [{ textHeader: 'time', textContent: '12/12/2022' }]
    }
    const elementReports = {
        header: 'Doctor exam',
        icon: infl,
        title: 'Consultation',
        border: true,
        mark: {
            header: 'green',
            text: 'orange',
            space: 'spaceAround'
        },
        text: [{ textHeader: 'time', textContent: '12/12/2022' }]
    }
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
                <ContentItem content={elementMeds} />
            </div>)
        }
        else if (activeState.id === 'Devices') {
            return (<div>
                <ContentItem content={elementsDevices} />
            </div>)
        }
        else if (activeState.id === 'Today') {
            return (<div>
                <h2 className="pl-6 pt-10 text-base text-amber-800 uppercase font-medium">How do you feel today?</h2>
                <ContentItem content={elementToday} />
            </div>)
        }
        else if (activeState.id === 'Reports') {
            return (<div>
                <h2 className="pl-6 pt-10 text-lg text-amber-800 uppercase font-medium">Glucose</h2>
               <ContentItem content={elementReports}/>
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


