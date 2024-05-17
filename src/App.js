
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" index element={<HomePage />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
