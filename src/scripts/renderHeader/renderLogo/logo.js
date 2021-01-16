const renderLogo = () => {
  const logo = document.querySelector('#logo');

  logo.innerHTML = `
    <div class="logo__wcrown">
      <div class="logo__wcrown--top">
        <div class="logo__top">
        </div>
        <div class="logo__top">
        </div>
      </div>
      <div class="logo__wcrown--bottom">
      </div>
    </div>
    <div class="logo__s">
      S
    </div>
  `;
};
