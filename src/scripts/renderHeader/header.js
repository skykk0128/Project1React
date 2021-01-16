const renderHeader = () => {

  const header = document.querySelector('#header');

  header.innerHTML = `
    <div class="navbar__logo" id="logo"></div>
    <nav id="nav"></nav>
  `;

  renderLogo();
  renderNav();
};
