import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Weblayout from './layouts/Weblayout';


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          
          <Route element={<Weblayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
          
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
