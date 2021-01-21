const renderNav = () => {
  const navbar = document.querySelector('#nav');

  nav.innerHTML = `
    <ul class="navbar__menu" id="navItems">
    </ul>
  `;
  renderNavItems();
};
