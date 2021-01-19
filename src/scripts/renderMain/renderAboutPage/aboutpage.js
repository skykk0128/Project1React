const renderAboutPage = () => {
  const aboutPage = document.querySelector('#about');

  aboutPage.innerHTML = `
    <div class="titlebanner">
      <h1>About Me</h1>
    </div>
    <div class="about__introduction">
      <p class="about__about">
        I am an enthusiastic programmer who enjoys troubleshooting, and keen to develop trouble-free web applications,
        monitor current web applications and provide stunning websites to support the company vision and objective.
      </p>
    </div>
  `;
};
