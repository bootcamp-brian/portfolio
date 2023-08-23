import './App.css'

function App() {

  return (
    <>
      <header>
        <nav>
          <div className="logo">Brian Mui</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>About me text</p>
      </section>
    
      <section id="portfolio" className="section">
        <h2>Portfolio</h2>
        <div className="portfolio-item">
          <img src="project1.jpg" alt="Project 1" />
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
        </div>
        <div className="portfolio-item">
          <img src="project2.jpg" alt="Project 2" />
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
      </section>
    
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>You can reach me at [email]</p>
      </section>
    
      <footer>
        <p>&copy; 2023 Brian Mui. All rights reserved.</p>
      </footer>
      </>
  )
}

export default App
