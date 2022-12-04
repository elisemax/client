import Content from '../content/Content';
import MenuBot from '../menuBot/menuBot1';
import MenuTop from '../menuTop/menuTop1';
import AppBanner from '../appBanner/AppBanner';

const PatientPage = () => {
    return (
        <>
            <AppBanner />
            <MenuTop />
            <Content />
            <MenuBot />
        </>
    );
};
export default PatientPage;