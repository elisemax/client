import Content from '../content/content';
import MenuBot from '.././menuBot/menuBot';
import MenuTop from '../menuTop/menuTop';
import AppBanner from '../appBanner/appBanner';

function App(){
  return (<>
    <AppBanner/>
        <MenuTop/>
          <Content/>
        <MenuBot/>
     </>
  );
}


export default App;
