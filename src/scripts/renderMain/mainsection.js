const renderMain = () => {

  const mainsection = document.querySelector('#main');

  mainsection.innerHTML = `
    <!-- About Page -->
    <section class="about" id="about">
      <div class="titlebanner">
        <h1>About Me</h1>
      </div>
      <div class="about__introduction">
        <p class="about__about">
          I am an enthusiastic programmer who enjoys troubleshooting, and keen to develop trouble-free web applications,
          monitor current web applications and provide stunning websites to support the company vision and objective.
        </p>
      </div>
    </section>

    <!-- Resume Page -->
    <section class="resume" id="resume">
      <div class="titlebanner">
        <h1>My Resume</h1>
      </div>
      <div class="resume__content">
        <div class="resume__pastexperience">

          <!-- Education -->
          <div class="resume__education">
            <h2>Education</h2>
            <div class="resume__education--container resume__topitems">
              <div class="resume__bullet">
              </div>
              <div class="resume__line">
              </div>
              <div class="resume__education--card">
                <div class="resume__education--course">
                  Master of Information Technology (Professional Computing)
                </div>
                <div class="resume__yearandplace">
                  <div class="resume__year">
                    2020.8 - present
                  </div>
                  <div class="resume__separator">
                    |
                  </div>
                  <div class="resume__place">
                    Swinburne University of Technology
                  </div>
                </div>
                <h4>Special Interests:</h4>
                <div class="resume__education--focusedarea">
                  Java, HTML5, CSS3, JavaScript (Vanilla, ES6), PHP
                </div>
              </div>
            </div>

            <div class="resume__education--container">
              <div class="resume__bullet">
              </div>
              <div class="resume__line">
              </div>
              <div class="resume__education--card">
                <div class="resume__education--course">
                  Master of Information Technology
                </div>
                <div class="resume__yearandplace">
                  <div class="resume__year">
                    2016.7 - 2018.7
                  </div>
                  <div class="resume__separator">
                    |
                  </div>
                  <div class="resume__place">
                    Monash University
                  </div>
                </div>
                <h4>Special Interests:</h4>
                <div class="resume__education--focusedarea">
                  Java, C#, .NET Framework
                </div>
              </div>
            </div>

            <div class="resume__education--container">
              <div class="resume__bullet">
              </div>
              <div class="resume__line">
              </div>
              <div class="resume__education--card">
                <div class="resume__education--course">
                  Bachelor of Commerce - Professional Accounting
                </div>
                <div class="resume__yearandplace">
                  <div class="resume__year">
                    2014.7 - 2016.7
                  </div>
                  <div class="resume__separator">
                    |
                  </div>
                  <div class="resume__place">
                    Macquarie University
                  </div>
                </div>
                <h4>Special Interests:</h4>
                <div class="resume__education--focusedarea">
                  Financial Accounting, Management Accounting
                </div>
              </div>
            </div>
          </div>

          <!-- Work Experience -->
          <div class="resume__work">
            <h2>Work Experience</h2>
            <div class="resume__work--container resume__topitems">
              <div class="resume__bullet">
              </div>
              <div class="resume__line">
              </div>
              <div class="resume__work--card">
                <div class="resume__work--position">
                  Web Developer
                </div>
                <div class="resume__yearandplace">
                  <div class="resume__year">
                    2020.12 - present
                  </div>
                  <div class="resume__separator">
                    |
                  </div>
                  <div class="resume__place">
                    Lotus.Eco Co., Melbourne
                  </div>
                </div>
                <h4>Responsibilities:</h4>
                <ul class="resume__responsibilities">
                  <li>Designing wireframes of the official website</li>
                  <li>Developing a shopify website LIQUID files using Ruby on Rails</li>
                  <li>Styling the website using CSS3 and JavaScript (Vanilla, ES6)</li>
                </ul>
              </div>
            </div>

            <div class="resume__work--container">
              <div class="resume__bullet">
              </div>
              <div class="resume__line">
              </div>
              <div class="resume__work--card">
                <div class="resume__work--position">
                  Web Developer
                </div>
                <div class="resume__yearandplace">
                  <div class="resume__year">
                    2019.2 - 2019.5
                  </div>
                  <div class="resume__separator">
                    |
                  </div>
                  <div class="resume__place">
                    Uber IT Solutions, Melbourne
                  </div>
                </div>
                <h4>Responsibilities:</h4>
                <ul class="resume__responsibilities">
                  <li>Developing WordPress websites based on clients' requirements</li>
                  <li>Styling the website using CSS3</li>
                  <li>Working on simple functions on the website using PHP</li>
                </ul>
              </div>
            </div>

            <div class="resume__work--container">
              <div class="resume__bullet">
              </div>
              <div class="resume__line">
              </div>
              <div class="resume__work--card">
                <div class="resume__work--position">
                  Finance Team Intern
                </div>
                <div class="resume__yearandplace">
                  <div class="resume__year">
                    2016.1 - 2016.2
                  </div>
                  <div class="resume__separator">
                    |
                  </div>
                  <div class="resume__place">
                    Estee Lauder, Shanghai
                  </div>
                </div>
                <h4>Responsibilities:</h4>
                <ul class="resume__responsibilities">
                  <li>Collecting daily Cash Report</li>
                  <li>Inputing and Analysing data regarding SAP system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="resume__services">
          <!-- Coding Skills -->
          <div class="resume__coding">
            <h2>Coding Skills</h2>
            <div class="resume__skill">
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  HTML5
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--html"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  CSS3 / SASS
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--css"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  JavaScript (Vanilla, ES6, jQuery)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--js"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Java
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--java"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  PHP
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--php"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  C# (.NET)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--csharp"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Design Skills -->
          <div class="resume__design">
            <h2>Design Skills</h2>
            <div class="resume__skill">
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Web Design (WordPress)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--html"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Web Design (Shopify)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--shopify"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  System Management Design (Moodle)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--js"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Graphic Design (Adobe XD, Photoshop, Illustrator)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--graphic"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
            </div>
          </div>

          <!-- Other Skills -->
          <div class="resume__other">
            <h2>Other Skills</h2>
            <div class="resume__skill">
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Github / Git (Version Control)
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--git"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Troubleshooting
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--troubleshooting"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Teamwork
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--teamwork"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
              <div class="resume__skill--container">
                <div class="resume__skill--text">
                  Communication
                </div>
                <div class="resume__skill--bar">
                  <span class="resume__progress--communication"><span class="resume__progress--inner"></span></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Projects Page -->
    <section class="projects" id="projects">
      <div class="titlebanner">
        <h1>My Projects</h1>
      </div>
    </section>

    <!-- Contact Page -->
    <section class="contact" id="contact">
      <div class="titlebanner">
        <h1>Contact Me</h1>
      </div>
      <div class="contact__container">
        <div class="contact__getInTouch">

        </div>
        <div class="contact__form">

        </div>
      </div>
    </section>

    <!-- Blog Page -->
    <section class="blog" id="blog">
      <div class="titlebanner">
        <h1>My Blogs</h1>
      </div>
      <div class="blog__content">
        <div class="blog__container">
          <h2>Comming Soon</h2>
        </div>
        <div class="blog__container">

        </div>
      </div>
    </section>

    <!-- Main Page -->
    <!-- this page must be placed at last for the css to work -->
    <section class="main default" id="home">
      <div class="main__introduction">
        <div class="main__photo">
        </div>
        <div class="main__about">
          <h2>About Me</h2>
          <p>I am a current IT student with experience in HTML5, CSS3, JavaScript (Vanilla, ES6), WordPress and Shopify Ruby on Rails as a full stack web developer,
             where I also build my professional communication skills, teamwork skills and problem-solving and analytical skills.
             I have professional knowledge of HTML, CSS, JavaScript and Java, and an understanding of the project management and Moodle system.
          </p>
        </div>
      </div>
      <div class="main__details">
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
    </section>
  `;

  const renderHomePage = () => {

  };


  renderHomePage();
};
