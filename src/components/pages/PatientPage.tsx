import Content from '../content/Content1';
import MenuBot from '../menuBot/menuBot';
import MenuTop from '../menuTop/menuTop';
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