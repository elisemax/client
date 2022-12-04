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
import ContentItem from '../contentItem/ContentItem1';
const Content = () => {
    const currentUser = useTypeSelector(state => state.userSlice.user);
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
                     dispatch(fetchContent(item + '/' + currentUser));
                })
            }
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeState]);    
    const testElem = useTypeSelector(state => state.content.content);
    console.log(testElem);
    const renderContent = () => {
        if (activeState.id === testElem.title) {
            return (<>
                <ContentHeader headerContent={testElem.headerContent}/>
                {testElem.contents.map((item, index) => {
                    return (<ContentItem key={index} content={item} create={testElem.create}/>)
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


