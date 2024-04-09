import './index.css'
import Navigation from './components/Navigation/Navigation';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'; // Importa Navigate aquí
import { About } from './components/About/About';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Contact } from './components/Contact/Contact';
import { Home } from './components/Home/Home';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} /> {/* Redirige a /home */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
