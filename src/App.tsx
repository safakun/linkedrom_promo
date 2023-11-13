

import './index.css'
import { Navbar } from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Tarifs } from './components/Tarifs';
import { NotFound } from './components/NotFound';

function App() {
 

  return (
    <>
    <Router>
    <Navbar />
    <Routes>
<Route path='/' element={<Home />} />
<Route path='/tarifs' element={<Tarifs />} />
<Route path='*' element={<NotFound />} />
</Routes>
    </Router>
    
     
    </>
  )
}

export default App
