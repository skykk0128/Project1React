const createNavItem = (href, children) => {

  const a = document.createElement('a');
  a.classList.add('navbar__menuitems');
  a.href = href;
  a.innerText = children;
  // a.onclick = (event) => {
  //   event.preventDefault();
  //   console.log('clicked');
  // }
  return a;

  // return `
  //   <li><a href="${href}" class="navbar__menuitems">${children}</a></li>
  // `;

};

const renderNavItems = () => {
  const navItems = document.querySelector('#navItems');

  const items = [{
    href: '#home',
    children: 'Home',
  }, {
    href: '#about',
    children: 'About',
  }, {
    href: '#resume',
    children: 'Resume',
  }, {
    href: '#projects',
    children: 'Projects',
  }, {
    href: '#blog',
    children: 'Blog',
  }, {
    href: '#contact',
    children: 'Contact',
  }]

  items.forEach(({ href, children }) => {
    const item = createNavItem(href, children);

    navItems.append(item);
  });
  // navItems.innerHTML = `
  //   ${items.map((item) => {
  //     const { href, children } = item;
  //     return createNavItem(href, children);
  //   })}
  // `;
};
// ${createNavItem('#home', 'Home')}
// ${createNavItem('#about', 'About')}
// ${createNavItem('#resume', 'Resume')}
// ${createNavItem('#projects', 'Projects')}
// ${createNavItem('#blog', 'Blog')}
// ${createNavItem('#contact', 'Contact')}
