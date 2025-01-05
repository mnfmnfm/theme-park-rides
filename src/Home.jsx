import { Link } from "react-router";
import rides from "./assets/rides.json"

function Home() {
    return <div>
        {rides.map(r => <div key={r.id} className="card">
            <div className="card-body">
                <Link to={`/rides/${r.id}`}>
                    <h2 className="card-title">{r.name}</h2>
                </Link>
            <p className="card-text">Located at {r.park}</p>
            </div>
        </div>)}
    </div>
}

export default Home;