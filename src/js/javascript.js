'use strict';

// Highlight menu item when navigating
document.getElementById("homepage").addEventListener("click", event => {
  document.getElementById("homepage").classList.add("current");
  document.getElementById("aboutpage").classList.remove("current");
  document.getElementById("resumepage").classList.remove("current");
  document.getElementById("projectspage").classList.remove("current");
  document.getElementById("contactpage").classList.remove("current");
  document.getElementById("blogpage").classList.remove("current");
});
document.getElementById("aboutpage").addEventListener("click", event => {
  document.getElementById("homepage").classList.remove("current");
  document.getElementById("aboutpage").classList.add("current");
  document.getElementById("resumepage").classList.remove("current");
  document.getElementById("projectspage").classList.remove("current");
  document.getElementById("contactpage").classList.remove("current");
  document.getElementById("blogpage").classList.remove("current");
});
document.getElementById("resumepage").addEventListener("click", event => {
  document.getElementById("homepage").classList.remove("current");
  document.getElementById("aboutpage").classList.remove("current");
  document.getElementById("resumepage").classList.add("current");
  document.getElementById("projectspage").classList.remove("current");
  document.getElementById("contactpage").classList.remove("current");
  document.getElementById("blogpage").classList.remove("current");
});
document.getElementById("projectspage").addEventListener("click", event => {
  document.getElementById("homepage").classList.remove("current");
  document.getElementById("aboutpage").classList.remove("current");
  document.getElementById("resumepage").classList.remove("current");
  document.getElementById("projectspage").classList.add("current");
  document.getElementById("contactpage").classList.remove("current");
  document.getElementById("blogpage").classList.remove("current");
});
document.getElementById("contactpage").addEventListener("click", event => {
  document.getElementById("homepage").classList.remove("current");
  document.getElementById("aboutpage").classList.remove("current");
  document.getElementById("resumepage").classList.remove("current");
  document.getElementById("projectspage").classList.remove("current");
  document.getElementById("contactpage").classList.add("current");
  document.getElementById("blogpage").classList.remove("current");
});
document.getElementById("blogpage").addEventListener("click", event => {
  document.getElementById("homepage").classList.remove("current");
  document.getElementById("aboutpage").classList.remove("current");
  document.getElementById("resumepage").classList.remove("current");
  document.getElementById("projectspage").classList.remove("current");
  document.getElementById("contactpage").classList.remove("current");
  document.getElementById("blogpage").classList.add("current");
});

// Changeable Position
window.switchIn = () => {
  $('.main__position--developer').fadeToggle(() => {
      $('.main__position--designer').fadeToggle(() => {
          setTimeout(() => {window.switchOut();}, 3000);
      });
  });
}
window.switchOut = function () {
  $('.main__position--designer').fadeToggle(() => {
      $('.main__position--developer').fadeToggle(() => {
          setTimeout(() => {window.switchIn();}, 3000);
      });
  });
}
setTimeout(() => {window.switchIn();}, 3000)

// Sticky Navigation Bar
var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;
window.onscroll = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.remove("navstyle");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("navstyle");
  }
};


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
