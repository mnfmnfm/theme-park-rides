import useRide from "./useRide";

function Ride() {
    // TODO: get ride information based on ID in URL bar
    const rideInfo = useRide("1");

    return <div>
        <h2>{rideInfo.name}</h2>
        <p>{rideInfo.name} is located at {rideInfo.park}. It's a great ride!</p>
        <img src={rideInfo.image} alt={`${rideInfo.name}`} />
    </div>
}

export default Ride;