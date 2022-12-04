import Content from '../content/Content';
import MenuBot from '../menuBot/MenuBot';
import MenuTop from '../menuTop/MenuTop';
import AppBanner from '../appBanner/AppBanner';
import React from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
const DoctorPage = () => {
    const doctorId = useTypeSelector(state => state.userSlice.user);
    return (
        <>
            <AppBanner />
            <MenuTop id={doctorId} />
            <Content id={doctorId} />
            <MenuBot id={doctorId} />
        </>
    );
};

export default DoctorPage;