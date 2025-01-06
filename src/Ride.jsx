import { Route, Routes, useParams } from "react-router";
import useRide from "./useRide";
import About from "./About";

function Ride() {
    // TODO: get ride information based on ID in URL bar
    const {id} = useParams();
    const rideInfo = useRide(id);

    return <div>
        <h2>{rideInfo.name}</h2>
        <p>{rideInfo.name} is located at {rideInfo.park}. It's a great ride!</p>
        <img src={rideInfo.image} alt={`${rideInfo.name}`} />
        <Routes>
            <Route path="/data" element={<About />} />
        </Routes>
    </div>
}

export default Ride;