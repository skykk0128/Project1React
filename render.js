const render = () => {

  const root = document.querySelector('#root');

  root.innerHTML = `
    <header id="header" class="navbar navstyle"></header>
    <main id="main"></main>
    <footer id="footer" class="footer"></footer>
  `;

  renderHeader();
  renderMain();
  renderFooter();
};
