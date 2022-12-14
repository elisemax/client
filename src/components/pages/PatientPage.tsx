import Content from '../content/Content';
import MenuBot from '../menuBot/MenuBot';
import MenuTop from '../menuTop/MenuTop';
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