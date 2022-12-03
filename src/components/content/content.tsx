/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/no-redundant-roles */
import infl from '../../resource/iconsContent/infl.svg';
import bottle from '../../resource/iconsContent/medBottle.svg';
import pill from '../../resource/iconsContent/presc.svg';
import devIcon from '../../resource/iconsContent/devIcon.svg';
import notif from '../../resource/iconsContent/notif.svg'
import done from '../../resource/iconsContent/done.svg'
import { useEffect } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { fetchContent } from '../../store/slice/contentSlice';
import { useTypeDispatch } from '../../hooks/useAppDispatch';
import { Ifilter } from '../../types/filter';
import { ContentHeader } from '../contentHeader/ContentHeader';
import ContentItem from '../contentItem/ContentItem';
import { ItemChart } from "../contentItem/items/ItemChart";

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

    const elementsInsulin ={
        title: 'Insulin',
        headerContent: 'Prescription',
        elem:[ { header:'Doctors exam',
                            icon: infl,
                            btn: false,
                            border:true,
                            mark:{header:'green',
                                   text:'stone',
                                   space:'spaceBetween'},
                            text:[{textHeader:'Long insulin',textContent:'__UN'},
                                {textHeader:'Short insulin',textContent:'__UN'},],
                        },
            {
                header: 'Doctors exam',
                icon: infl,
                btn: true,
                border: true,
                mark: {
                    header: 'green',
                    text: 'stone',
                    space: 'spaceBetween'
                },
                text: [{ textHeader: 'Long insulin', textContent: '__UN' },
                { textHeader: 'Short insulin', textContent: '__UN' },],
            }
                    ]}
    const renderContent = () => {
        if (activeState.id === elementsInsulin.title) {
            return (<>
                <ContentHeader headerContent={elementsInsulin.headerContent}/>
                {elementsInsulin.elem.map((item, index) => {
                    return (<ContentItem key={index} content={item}/>)
                })}
            </>)
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


