import { useParams } from "react-router";
import useRide from "./useRide";

function Ride() {
    const {id} = useParams();
    const rideInfo = useRide(id);

    return <div>
        <h2>{rideInfo.name}</h2>
        <p>{rideInfo.name} is located at {rideInfo.park}. It's a great ride!</p>
        <img src={rideInfo.image} alt={`${rideInfo.name}`} />
    </div>
}

export default Ride;