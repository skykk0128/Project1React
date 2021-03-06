const renderResumePage = () => {
  const resumePage = document.querySelector('#resume');

  resumePage.innerHTML = `
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
  `;
};
