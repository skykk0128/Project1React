const createNavItem = (href, children) => {
  return `
    <a href="${href}" class="navbar__menuitems" id="homepage" data-id="1"><li>${children}</li></a>
  `;
  // const a = document.createElement('a');
  //
  // a.classList.add('navbar__menuitems');
  // a.href = href;
  // a.innerHTML = children;
  //
  // return a;
};
const renderNav = () => {
  const navbar = document.querySelector('nav');

  const home = createNavItem('#home', 'Home');
  const about = createNavItem('#about', 'About');
  const resume = createNavItem('#resume', 'Resume');
  const projects = createNavItem('#projects', 'Projects');
  const contact = createNavItem('#contact', 'Contact');
  const blog = createNavItem('#blog', 'Blog');

  nav.innerHTML = `
    <ul class="navbar__menu">
      ${createNavItem('#home', 'Home')}
      ${createNavItem('#about', 'About')}
      ${createNavItem('#resume', 'Resume')}
      ${createNavItem('#projects', 'Projects')}
      ${createNavItem('#contact', 'Contact')}
      ${createNavItem('#blog', 'Blog')}
    </ul>
  `;
};
