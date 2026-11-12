
import './App.css'

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>PRINCE ASANTE</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="welcome-text">WELCOME TO MY PORTFOLIO</p>
          <h1>Hello, I'm <span>Prince Asante</span></h1>
          <h2>IT Graduate | Aspiring Cloud Engineer</h2>

          <p className="hero-description">
            I am passionate about technology, cloud computing,
            and solving problems through digital solutions.
            I am continuously developing my technical skills
            and exploring the world of AWS.
          </p>

          <a href="#projects" className="hero-button">
            Explore My Work
          </a>

          <a
            href="/Prince-Asante-CV.pdf"
            className="hero-button"
            download
          >
            Download My CV
          </a>
        </div>

        <div className="hero-visual">
          <div className="profile-card">
            <div className="profile-circle">PA</div>
            <h2>Prince Asante</h2>
            <p>Information Technology Graduate</p>
            <div className="profile-divider"></div>
            <div className="profile-tag">☁ Cloud Computing</div>
            <div className="profile-tag">💻 IT Support</div>
            <div className="profile-tag">🌐 Networking</div>
          </div>
        </div>
      </section>

      <section id="about" className="content-section">
        <h2>About Me</h2>
        <p>
          I am an Information Technology graduate from
          Ghana Communication Technology University.
          I have a foundation in IT support, networking,
          databases, operating systems, and web technologies.
          I am currently building my knowledge in AWS
          cloud computing.
        </p>
      </section>

      <section id="education" className="content-section">
        <h2>Education</h2>
        <div className="project-card">
          <h3>Ghana Communication Technology University</h3>
          <p>Bachelor of Science in Information Technology</p>
          <p>January 2021 – July 2024</p>
        </div>
      </section>

      <section id="experience" className="content-section">
        <h2>Work Experience</h2>
        <div className="project-card">
          <h3>Ghana Water Company Limited</h3>
          <p>Position: IT Assistant (National Service)</p>
          <p>Department: ICT Department</p>
          <p>Completed: October 2025</p>
          <p>
            Gained practical exposure to the ICT department
            and workplace IT operations.
          </p>
        </div>
      </section>

      <section id="skills" className="content-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div>IT Support</div>
          <div>Networking</div>
          <div>AWS Cloud</div>
          <div>Linux</div>
          <div>HTML & CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>MySQL</div>
        </div>
      </section>

      <section id="projects" className="content-section">
        <h2>My Projects</h2>

        <div className="project-card">
          <h3>StressPredict</h3>
          <p>
            A React-based group application designed to help
            users understand their stress levels and wellbeing.
          </p>
        </div>

        <div className="project-card">
          <h3>AWS Cloud Projects</h3>
          <p>
            Practical learning projects involving AWS
            cloud services, infrastructure, and deployment.
          </p>
        </div>
      </section>

      <section id="contact" className="content-section">
        <h2>Contact Me</h2>

        <p>
          I am open to IT opportunities, cloud projects,
          and professional connections.
        </p>

        <p>
          GitHub:{' '}
          <a
            href="https://github.com/Prince1-k"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My GitHub
          </a>
        </p>

        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/prince-asante-it"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect With Me on LinkedIn
          </a>
        </p>
      </section>

      <footer>
        <p>© 2026 Prince Asante. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
