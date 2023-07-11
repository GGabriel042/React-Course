/* import React from "react"; */
/* import ReactDOM from "react-dom"; */

function Header() {
  return(
    <header>
      <nav className="nav">
        <img className="react-logo" src="react-logo.png"></img>
        <ul className="nav-items">
          <li>Login</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return(
    <footer className="footer">
      <small>Copyright</small>
    </footer>
  )
}

function MainContent() {
  return(
    <div className="main-content">
      <h1>Hello, world</h1>
      <ol>
        <li>Estou</li>
        <li>aprendendo</li>
        <li>React</li>
      </ol>
    </div>
    
  )
}

function Page() {
  return (
    <div>

      <Header />
      
      <MainContent />


      <Footer />
    </div>
  )
}



ReactDOM.render(<Page />, document.getElementById("root"))