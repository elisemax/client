import Content from '../content/Content';
import MenuBot from '../menuBot/menuBot';
import MenuTop from '../menuTop/menuTop';
import AppBanner from '../appBanner/AppBanner1';
const DoctorPage = () => {
    return (
        <>
            <AppBanner />
            <MenuTop />
            <Content />
            <MenuBot />
        </>
    );
};

export default DoctorPage;