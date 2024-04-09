import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Surveyform from './pages/Surveyform';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Localinfo from './pages/Localinfo';
import Creator from './pages/Creator';
import Stp from './pages/Stp'
import SurveyInfo from './pages/SurveyInfo';
import Mess from './pages/Mess';
import Hospital from './pages/Hospital';



function App() {




  return (<>
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}  />
        <Route path="/survey" element={<Surveyform/>} />
        <Route path="/local-info" element={<Localinfo/>} />
        <Route path="/creator-info" element={<Creator/>} />
        <Route path="/stp" element={<Stp/>} />
        <Route path="/mess-agro-food-court" element={<Mess/>} />
        <Route path="/hospital" element={<Hospital/>} />
        <Route path="/local-survey-info" element={<SurveyInfo/>} />
      </Routes>
      <Footer/>
    </Router>
    </>)
}

export default App;
