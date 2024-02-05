import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import RegisterPage from './components/RegisterPage';


function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<RegisterPage/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
