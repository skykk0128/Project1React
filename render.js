const render = () => {

  const root = document.querySelector('#root');

  root.innerHTML = `
    <header id="header" class="navbar navstyle"></header>
    <main id="main"></main>
    <footer id="footer"></footer>
  `;

  renderHeader();
  renderMain();
  renderFooter();
};
// "repository": {
//   "type": "git",
//   "url": "git+https://github.com/skykk0128/Project1React.git"
// },
//
// "bugs": {
//   "url": "https://github.com/skykk0128/Project1React/issues"
// },
// "homepage": "https://github.com/skykk0128/Project1React#readme",
