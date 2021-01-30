import Logo from './components/Logo/Logo';
import Navbar from './components/Navbar/Navbar';

const Nav = () => (
  <header className="navbar navstyle" id="header">
    <div className="navbar__logo">
      <Logo />
    </div>
    <nav>
      <Navbar />
    </nav>
  </header>
);

export default Nav;
