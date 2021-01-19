const renderMain = () => {

  const mainsection = document.querySelector('#main');

  mainsection.innerHTML = `
    <!-- About Page -->
    <section class="about" id="about"></section>

    <!-- Resume Page -->
    <section class="resume" id="resume"></section>

    <!-- Projects Page -->
    <section class="projects" id="projects">
      <div class="titlebanner">
        <h1>My Projects</h1>
      </div>
    </section>

    <!-- Blog Page -->
    <section class="blog" id="blog"></section>

    <!-- Contact Page -->
    <section class="contact" id="contact"></section>

    <!-- Main Page -->
    <!-- this page must be placed at last for the css to work -->
    <section class="main default" id="home"></section>
  `;

  renderAboutPage();
  renderResumePage();
  renderBlogPage();
  renderContactPage();
  renderHomePage();
};
