import Logo from './components/Logo/Logo';
import Navbar from './components/Navbar/Navbar';
import './Nav.css';

const Nav = () => (
  <header className="navbar navstyle" id="header">
    <Logo />
    <nav>
      <Navbar />
    </nav>
  </header>
);

export default Nav;
