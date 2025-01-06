import { Link } from "react-router";

function RideCard({ride}) {
    // TODO: add link to ride
    return <div className="card">
        <div className="card-body">
            <Link to={`/rides/${ride.id}`}>
                <h2 className="card-title">{ride.name}</h2>
            </Link>
            <p className="card-text">Located at {ride.park}</p>
        </div>
  </div>
}

export default RideCard;