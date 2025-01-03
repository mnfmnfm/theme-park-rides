import rides from "./assets/rides.json"

function Home() {
    return <div>
                  {rides.map(r => <div key={r.id} className="card">
            <div className="card-body">
            <h2 className="card-title">{r.name}</h2>
            <p className="card-text">Located at {r.park}</p>
            </div>
          </div>)}
    </div>
}

export default Home;