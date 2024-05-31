
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
<<<<<<< HEAD
        <Route path="/products" index element={<Productpage />} />
        <Route path="/about" index element={<About />} />
        <Route path="/products/:id" index element={<ProductDetail/>} />
=======
        <Route path="/shop"  element={<Productpage />} />
        <Route path="/shop/:id"  element={<ProductDetail />} />
        <Route path="/about"  element={<About />} />
        
>>>>>>> 7b5910999a77278dec1c678f346187119e7afc25
        </Routes>
        <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
