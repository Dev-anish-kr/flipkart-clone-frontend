import './App.css';
import Home from './Pages/home/Home';

import { Routes, Route } from 'react-router-dom'
import CatelogHome from './Pages/catalogue/CatelogHome';
import Navigation from './Pages/home/Navigation';
import Footer from './Pages/home/Footer'
import ProductsHome from './Pages/Products/ProductsHome';

function App() {
  return (
    <main className='app'>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/categories' element={<CatelogHome />} />
        <Route exact path='/products' element={<ProductsHome />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;