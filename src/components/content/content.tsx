/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/no-redundant-roles */
import infl from '../../resource/iconsContent/infl.svg';
import bottle from '../../resource/iconsContent/medBottle.svg';
import pill from '../../resource/iconsContent/presc.svg';
import devIcon from '../../resource/iconsContent/devIcon.svg';
import notif from '../../resource/iconsContent/notif.svg'
import done from '../../resource/iconsContent/done.svg'
import graph from '../../resource/graph.png'
import { useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { fetchContent } from '../../store/slice/contentSlice';
import { useTypeDispatch } from '../../hooks/useAppDispatch';
import { Ifilter } from '../../types/filter';
import { ContentHeader } from '../contentHeader/ContentHeader';
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
        border: false,
        mark: {
            header: 'red',
            text: 'green',
            space: 'spaceBetween'
        },
        text: [{ textHeader: 'time', textContent: '12/12/2022' }]
    }
    const elementsDevices = {
        header: 'Dexcom G6',
        icon: devIcon,
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
    const elementsInsulin =[ { header:'Doctors exam',
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
                    ]
    const renderContent = () => {
        if (activeState.id === 'Doctors') {
            return (<>
                <ContentHeader headerContent='Consultation'/>
                <ContentItem content={elementsConsultation}/>
                <ContentHeader headerContent='Laboratory'/>
                <ContentItem content={elementsLaboratory}/>
            </>)
        } else if (activeState.id === 'Insulin') {
            return (<>
                {elementsInsulin.map((item, index) => {
                    return (<ContentItem key={index} content={item}/>)
                })}
            </>)
        }
        else if (activeState.id === 'Meds') {
            return (<>
                <ContentHeader headerContent='Prescription'/>
                <ContentItem content={elementMeds} />
            </>)
        }
        else if (activeState.id === 'Devices') {
            return (<>
                <ContentItem content={elementsDevices}/>
            </>)
        }
        else if (activeState.id === 'Today') {
            return (<>
                <ContentHeader headerContent='How do you feel today?'/>
                <ContentItem content={elementToday} />
            </>)
        }
        else if (activeState.id === 'Reports') {
            return (<>
                <ContentHeader headerContent='Glucose'/>
               <ContentItem content={elementReports}/>
            </>)
        }
        else if (activeState.id === 'Chat') {
            return
        }
    }
    const content = renderContent();
    return (
        <>
            {content}
        </>
    )
}
export default Content;


