import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import CartPage from './components/Cart/CartPage';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cart" element={<CartPage/>}></Route>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
