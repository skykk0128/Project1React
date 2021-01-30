import App from './components/App/App';
import './style.css';
// render();
// import React from 'react';
// import ReactDOM from 'react-dom';


ReactDOM.render(
  <App />,
  document.querySelector('#root'),
);


// function switchPage(clicked) {
//   const pages = ["homepage", "aboutpage", "resumepage", "projectspage", "contactpage", "blogpage"];
//   document.getElementById(clickedPage).classList.add("current");
//   pages.filter(page => page !== clickedPage).forEach(page => {
//     document.getElementById(page).classList.remove("current");
//   })
// }
// document.querySelectorAll("nav-item").addEventListener("click", event => {
//   const pages = ["homepage", "aboutpage", "resumepage", "projectspage", "contactpage", "blogpage"];
//   pages.forEach(page => {
//     document.getElementById(page).classList.remove("current");
//   });
//   document.getElementById(page).classList.add("current");
// });
// Highlight menu item when navigating
// const toHomePage = () => { document.getElementById("homepage").addEventListener("click", event => {
//     document.getElementById("homepage").classList.add("current");
//     document.getElementById("aboutpage").classList.remove("current");
//     document.getElementById("resumepage").classList.remove("current");
//     document.getElementById("projectspage").classList.remove("current");
//     document.getElementById("contactpage").classList.remove("current");
//     document.getElementById("blogpage").classList.remove("current");
//   });
// }
// toHomePage();
//
// document.getElementById("aboutpage").addEventListener("click", event => {
//   document.getElementById("homepage").classList.remove("current");
//   document.getElementById("aboutpage").classList.add("current");
//   document.getElementById("resumepage").classList.remove("current");
//   document.getElementById("projectspage").classList.remove("current");
//   document.getElementById("contactpage").classList.remove("current");
//   document.getElementById("blogpage").classList.remove("current");
// });
// document.getElementById("resumepage").addEventListener("click", event => {
//   document.getElementById("homepage").classList.remove("current");
//   document.getElementById("aboutpage").classList.remove("current");
//   document.getElementById("resumepage").classList.add("current");
//   document.getElementById("projectspage").classList.remove("current");
//   document.getElementById("contactpage").classList.remove("current");
//   document.getElementById("blogpage").classList.remove("current");
// });
// document.getElementById("projectspage").addEventListener("click", event => {
//   document.getElementById("homepage").classList.remove("current");
//   document.getElementById("aboutpage").classList.remove("current");
//   document.getElementById("resumepage").classList.remove("current");
//   document.getElementById("projectspage").classList.add("current");
//   document.getElementById("contactpage").classList.remove("current");
//   document.getElementById("blogpage").classList.remove("current");
// });
// document.getElementById("contactpage").addEventListener("click", event => {
//   document.getElementById("homepage").classList.remove("current");
//   document.getElementById("aboutpage").classList.remove("current");
//   document.getElementById("resumepage").classList.remove("current");
//   document.getElementById("projectspage").classList.remove("current");
//   document.getElementById("contactpage").classList.add("current");
//   document.getElementById("blogpage").classList.remove("current");
// });
// document.getElementById("blogpage").addEventListener("click", event => {
//   document.getElementById("homepage").classList.remove("current");
//   document.getElementById("aboutpage").classList.remove("current");
//   document.getElementById("resumepage").classList.remove("current");
//   document.getElementById("projectspage").classList.remove("current");
//   document.getElementById("contactpage").classList.remove("current");
//   document.getElementById("blogpage").classList.add("current");
// });

// const currentpage = () => {
//   const pages = ["homepage", "aboutpage", "resumepage", "projectspage", "contactpage", "blogpage"];
//   pages.forEach('click', event => {
//     document.querySelectorAll()
//   });
// });

// Changeable Position
// const changePosition = () => {
//   window.switchIn = () => {
//     $('.main__position--developer').fadeToggle(() => {
//         $('.main__position--designer').fadeToggle(() => {
//             setTimeout(() => {window.switchOut();}, 3000);
//         });
//     });
//   }
//   window.switchOut = () => {
//     $('.main__position--designer').fadeToggle(() => {
//         $('.main__position--developer').fadeToggle(() => {
//             setTimeout(() => {window.switchIn();}, 3000);
//         });
//     });
//   }
//   setTimeout(() => {window.switchIn();}, 3000);
// }
// changePosition();
//
// // Sticky Navigation Bar
// const stickybar = () => {
//   var navbar = document.getElementById("header");
//   var sticky = navbar.offsetTop;
//   window.onscroll = () => {
//     if (window.pageYOffset >= sticky) {
//       navbar.classList.add("sticky");
//       navbar.classList.remove("navstyle");
//     } else {
//       navbar.classList.remove("sticky");
//       navbar.classList.add("navstyle");
//     }
//   };
// }
// stickybar();


// $(document).ready(function(){
//   $("#blogpage").click(function(){
//     $("#home").fadeOut();
//     $("#about").fadeOut();
//     $("#resume").fadeOut();
//     $("#projects").fadeOut();
//     $("#contact").fadeOut();
//     $("#blog").fadeIn();
//   });
// });
