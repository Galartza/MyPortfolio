import React from 'react';
import '../Container/container.css';
import Navigation from '../Navigation/Navigation';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter aquí
import { About } from '../About/About';
import { Portfolio } from '../Portfolio/Portfolio';
import { Contact } from '../Contact/Contact';

const Container = () => {
  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path="/about" element={<About />} /> {/* Usa element en lugar de Component */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Container;
