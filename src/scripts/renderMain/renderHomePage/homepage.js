const renderHomePage = () => {
  const homePage = document.querySelector('#home');

  homePage.innerHTML = `
    <div class="main__introduction">
      <div class="main__photo">
      </div>
      <div class="main__info">
        <h1>Shikai Wang (Steven)</h1>
        <div class="main__position--developer">
          Full Stack Developer
        </div>
        <div class="main__position--designer">
          Web Designer
        </div>
        <ul class="main__social">
          <a href="https://www.linkedin.com/in/shikai-wang-b6a83ab2"><li><img src="src/assets/icon/linkedin.svg" alt="linkedin" class="main__icon"></li></a>
          <a href="https://github.com/skykk0128"><li><img src="src/assets/icon/github.svg" alt="github" class="main__icon"></li></a>
          <a href="https://www.facebook.com/liushisky/"><li><img src="src/assets/icon/facebook.svg" alt="facebook" class="main__icon"></li></a>
          <a href="https://twitter.com/Shikai_Steven"><li><img src="src/assets/icon/twitter.svg" alt="twitter" class="main__icon"></li></a>
        </ul>
      </div>
    </div>
    <div class="main__details">
      <div class="main__about">
        <h2>About Me</h2>
        <p>I am a current IT student with experience in HTML5, CSS3, JavaScript (Vanilla, ES6), WordPress and Shopify Ruby on Rails as a full stack web developer,
           where I also build my professional communication skills, teamwork skills and problem-solving and analytical skills.
           I have professional knowledge of HTML, CSS, JavaScript and Java, and an understanding of the project management and Moodle system.
        </p>
      </div>
      <div class="main__briefing">
        <table class="main__table">
          <tr>
            <th>Age:</th>
            <td></td>
            <td>27</td>
          </tr>
          <tr>
            <th>Residence:</th>
            <td></td>
            <td>Australia</td>
          </tr>
          <tr>
            <th>Address:</th>
            <td></td>
            <td>221B Baker Street</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td></td>
            <td><a href="mailto:steven93.wang@gmail.com">steven93.wang@gmail.com</a></td>
          </tr>
          <tr>
            <th>Phone:</th>
            <td></td>
            <td>0426119788</td>
          </tr>
        </table>
      </div>
    </div>
  `;
};
