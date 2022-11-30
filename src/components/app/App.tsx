import Content from '../content/content';
import MenuBot from '.././menuBot/menuBot';
import MenuTop from '../menuTop/menuTop';
import AppBanner from '../appBanner/appBanner';

function App(){
  return (<>
    <AppBanner/>
        <div className='pt-32'>
        <MenuTop/>
          <Content/>
        <MenuBot/>
      </div>
     </>
  );
}


export default App;
