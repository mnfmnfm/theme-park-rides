function RideCard({ride}) {
    // TODO: add link to ride
    return <div className="card">
        <div className="card-body">
            <h2 className="card-title">{ride.name}</h2>
            <p className="card-text">Located at {ride.park}</p>
        </div>
  </div>
}

export default RideCard;