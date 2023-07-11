/* import React from "react"; */
/* import ReactDOM from "react-dom"; */

function Header() {
  return(
    <header>
      <nav className="nav">
        <h1>Hello, world</h1>
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
    <footer>
      <small>Copyright</small>
    </footer>
  )
}

function MainContent() {
  return(
    <ol>
      <li>Estou</li>
      <li>aprendendo</li>
      <li>React</li>
    </ol>
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