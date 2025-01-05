import rides from "./assets/rides.json"
import RideCard from "./RideCard";

function Home() {
    return <div>
        {rides.map(r => <RideCard ride={r} key={r.id} />)}
    </div>
}

export default Home;