import './App.css';
import Home from './Pages/home/Home';

import {Routes,Route } from 'react-router-dom'
import CatelogHome from './Pages/catalogue/CatelogHome';
import Navigation from './Pages/home/Navigation';

function App() {
  return (
    <main className='app'>
    <Navigation/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/categories' element={<CatelogHome/>}/>
    </Routes>
    </main>
  );
}

export default App;
