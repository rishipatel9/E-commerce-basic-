import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/homeComponents/Navbar';
import RegisterPage from '../../frontend/src/components/RegisterPage';
import HomePage from './components/HomePage';
import FocalImage from './components/homeComponents/FocalImage';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/* <Route path="/navbar" element={<Navbar/>}/> */}
        <Route path="/image" element={<FocalImage/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
