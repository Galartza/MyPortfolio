// src/App.jsx
import './index.css';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route, Navigate } from 'react-router-dom'; // No es necesario BrowserRouter aquí
import { About } from './pages/About/About';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { Contact } from './pages/Contact/Contact';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/" />} /> {/* Redirige a /home */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
