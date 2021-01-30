import Nav from '../Nav/Nav';

const App = () => (
  <header className="navbar navstyle" id="header">
    <div className="navbar__logo">
      <Logo />
    </div>
    <nav>
      <Navbar />
    </nav>
  </header>
);

export default App;
//
// "use strict";
//
// const App = () => {
//   return React.createElement("header", {
//     class: "navbar navstyle",
//     id: "header"
//   }, React.createElement("div", {
//     class: "navbar__logo"
//   }, React.createElement("div", {
//     class: "logo__wcrown"
//   }, React.createElement("div", {
//     class: "logo__wcrown--top"
//   }, React.createElement("div", {
//     class: "logo__top"
//   }), React.createElement("div", {
//     class: "logo__top"
//   })), React.createElement("div", {
//     class: "logo__wcrown--bottom"
//   })), React.createElement("div", {
//     class: "logo__s"
//   }, "S")), React.createElement("nav", null, React.createElement("ul", {
//     class: "navbar__menu"
//   }, React.createElement("a", {
//     href: "#home",
//     class: "navbar__menuitems",
//     id: "homepage",
//     "data-id": "1"
//   }, React.createElement("li", null, "Home")), React.createElement("a", {
//     href: "#about",
//     class: "navbar__menuitems",
//     id: "aboutpage",
//     "data-id": "2"
//   }, React.createElement("li", null, "About")), React.createElement("a", {
//     href: "#resume",
//     class: "navbar__menuitems",
//     id: "resumepage",
//     "data-id": "3"
//   }, React.createElement("li", null, "Resume")), React.createElement("a", {
//     href: "#projects",
//     class: "navbar__menuitems",
//     id: "projectspage",
//     "data-id": "4"
//   }, React.createElement("li", null, "Projects")), React.createElement("a", {
//     href: "#contact",
//     class: "navbar__menuitems",
//     id: "contactpage",
//     "data-id": "5"
//   }, React.createElement("li", null, "Contact")), React.createElement("a", {
//     href: "#blog",
//     class: "navbar__menuitems",
//     id: "blogpage",
//     "data-id": "6"
//   }, React.createElement("li", null, "Blog")))));
// };
//
// ReactDOM.render( React.createElement(App, null), document.querySelector('#root'));

// <li><a href="#home" className="navbar__menuitems" id="homepage" data-id="1">Home</a></li>
// <li><a href="#about" className="navbar__menuitems" id="aboutpage" data-id="2">About</a></li>
// <li><a href="#resume" className="navbar__menuitems" id="resumepage" data-id="3">Resume</a></li>
// <li><a href="#projects" className="navbar__menuitems" id="projectspage" data-id="4">Projects</a></li>
// <li><a href="#blog" className="navbar__menuitems" id="blogpage" data-id="5">Blog</a></li>
// <li><a href="#contact" className="navbar__menuitems" id="contactpage" data-id="6">Contact</a></li>
