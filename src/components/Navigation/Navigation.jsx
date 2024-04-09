import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import '../Navigation/navigation.css'

function Navigation() {
  return (
    <Nav className='nav' variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Link to="/home" className="nav-link">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about" className="nav-link">About me</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contact" className="nav-link">Contact</Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;

