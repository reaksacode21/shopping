
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
        <Route path="/products" index element={<Productpage />} />
        <Route path="/about" index element={<About />} />
        <Route path="/products/:id" index element={<ProductDetail/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
