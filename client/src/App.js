import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component imports
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
