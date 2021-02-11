import React from 'react';
import Item from './components/Item/Item';

const Navbar = () => (
  <ul className="navbar__menu">
    <Item href="#home" children="Home"/>
    <Item href="#about" children="About"/>
    <Item href="#resume" children="Resume"/>
    <Item href="#projects" children="Projects"/>
    <Item href="#blog" children="Blog"/>
    <Item href="#contact" children="Contact"/>
  </ul>
);

export default Navbar;
