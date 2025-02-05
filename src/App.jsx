// src/App.jsx
import './index.css';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route, Navigate } from 'react-router-dom'; // No es necesario BrowserRouter aquí
import { About } from './pages/about/About';
import { Portfolio } from './pages/portfolio/Portfolio';
import { Contact } from './pages/Contact/Contact'; // Si la carpeta se llama "Contact"
import { Home } from './pages/home/Home';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
