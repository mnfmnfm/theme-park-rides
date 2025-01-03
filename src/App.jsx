import rides from './assets/rides.json'
import './App.css'
import { Link, Route, Routes } from 'react-router'
import About from './About'
import Home from './Home'

function App() {

  return (
    <div className="container">
      <header>
        <h1>Theme Park Rides</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About This Site</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
