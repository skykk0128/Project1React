import React from 'react';
import './HomePage.css';

const HomePage = () => (
  <div className="main default" id="home">
    <div className="main__introduction">
      <div className="main__photo">
        
      </div>
      <div className="main__about">
        <h2>About Me</h2>
        <p>I am a current IT student with experience in HTML5, CSS3, JavaScript (Vanilla, ES6), WordPress and Shopify Ruby on Rails as a full stack web developer,
           where I also build my professional communication skills, teamwork skills and problem-solving and analytical skills.
           I have professional knowledge of HTML, CSS, JavaScript and Java, and an understanding of the project management and Moodle system.
        </p>
      </div>
    </div>
    <div className="main__details">
      <div className="main__info">
        <h1>Shikai Wang (Steven)</h1>
        <div className="main__position--developer">
          Full Stack Developer
        </div>
        <div className="main__position--designer">
          Web Designer
        </div>
        <ul className="main__social">
          <a href="https://www.linkedin.com/in/shikai-wang-b6a83ab2"><li><img src="src/assets/icon/linkedin.svg" alt="linkedin" className="main__icon" /></li></a>
          <a href="https://github.com/skykk0128"><li><img src="src/assets/icon/github.svg" alt="github" className="main__icon" /></li></a>
          <a href="https://www.facebook.com/liushisky/"><li><img src="src/assets/icon/facebook.svg" alt="facebook" className="main__icon" /></li></a>
          <a href="https://twitter.com/Shikai_Steven"><li><img src="src/assets/icon/twitter.svg" alt="twitter" className="main__icon" /></li></a>
        </ul>
      </div>
      <div className="main__briefing">
        <table className="main__table">
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
  </div>
);

export default HomePage;