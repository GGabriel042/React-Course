/* import React from "react"; */
/* import ReactDOM from "react-dom"; */

function Header() {
  return(
    <header>
      <nav><h1>Hello, world</h1></nav>
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