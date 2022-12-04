import { MainPage, PatientPage } from '../pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App(){
  return (<Router>
    <Routes>
      <Route path="/" element={<MainPage/>}>
     </Route>
      <Route path='/patient'element={<PatientPage/>}>
      </Route>
    </Routes>
  </Router>
  );  
}


export default App;
