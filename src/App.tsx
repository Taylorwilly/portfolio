function App() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-title">William Nzounkekang Motsou</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="page">
        {/* Hero */}
        <section>
          <p style={{ color: "#22d3ee", fontSize: "0.9rem", marginBottom: 4 }}>
            Hi, my name is
          </p>
          <h1>William Nzounkekang Motsou</h1>
          <h2>Computer Science student & aspiring software engineer.</h2>
          <p>
            I’m in my final semester of Computer Science, and I’m building real
            projects in web development, backend APIs, and machine learning to
            prepare for junior developer roles.
          </p>
        </section>

        {/* Projects */}
        <section id="projects">
          <h3>Projects</h3>
          <div className="projects-grid">
            <div className="project-card">
              <h4>Portfolio Website</h4>
              <p>
                This site. Built with React and CSS to showcase my work as I
                complete more projects.
              </p>
              <p style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                React · CSS
              </p>
            </div>

            <div className="project-card">
              <h4>Task Manager (coming soon)</h4>
              <p>
                Full-stack web app for managing tasks with authentication and a
                simple dashboard. This will be my next main project.
              </p>
              <p style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                React · API · Database
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about">
          <h3>About</h3>
          <p>
            I’m an undergraduate Computer Science student graduating in December.
            Even though I haven’t had an internship yet, I’m actively building
            real projects to gain practical experience.
          </p>
          <p>
            My interests include full-stack web development, backend APIs, and
            exploring machine learning. Right now I’m focused on creating a
            strong portfolio that shows what I can build.
          </p>
        </section>

        {/* Contact */}
        <section id="contact">
          <h3>Contact</h3>
          <p>
            I’m open to junior developer roles, internships, and trainee
            programs. You can reach me here:
          </p>
          <p>
            Email:{" "}
            <a href="mailto:williammotsou@gmail.com">your-email@example.com</a>
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/Taylorwilly" target="_blank">
              github.com/Taylorwilly
            </a>
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
