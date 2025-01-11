import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Form from './pages/Form';
import Cards from './pages/Cards';
import Recommendations from './pages/Recommendations';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </Router>
  );
};

export default App;