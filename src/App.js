
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Productpage from './Pages/Productpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About';
import ProductDetail from './Components/ProductDetail';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/shop"  element={<Productpage />} />
        <Route path="/shop/:id"  element={<ProductDetail />} />
        <Route path="/about"  element={<About />} />
        
        </Routes>
        <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
