import rides from './assets/rides.json'
import './App.css'

function App() {

  return (
    <div className="container">
      <header>
        <h1>Theme Park Rides</h1>
        <br />
      </header>
      <main>
        {rides.map(r => <div key={r.id} className="card">
          <div className="card-body">
          <h2 className="card-title">{r.name}</h2>
          <p className="card-text">Located at {r.park}</p>
          </div>
        </div>)}
      </main>
    </div>
  )
}

export default App
