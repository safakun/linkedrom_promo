

import './index.css'
import { Navbar } from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Tarifs } from './components/Tarifs';
import { NotFound } from './components/NotFound';
import { Order } from './components/Order';
import { About } from './components/About';

function App() {
 

  return (
    <>
    <Router>
    <Navbar />
    <Routes>
<Route path='/' element={<Home />} />
<Route path='/tarifs' element={<Tarifs />} />
<Route path='/order' element={<Order />} />
<Route path='/about' element={<About />} />
<Route path='*' element={<NotFound />} />
</Routes>
    </Router>
    
     
    </>
  )
}

export default App
