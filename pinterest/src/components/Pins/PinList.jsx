import { useEffect, useState } from "react";
import PinItem from "./PinItem";
import axios from "axios";
function PinList({searchTerm}) {

    const [pins, setPins] = useState([]);

    useEffect(() => {
        async function fetchPins() {
            try {
                const res = await axios.get('https://f35c0d043023351a.mokky.dev/pins');
                setPins(res.data);
            } catch (error) {
                console.error("Error:", error);
            }
        }
        fetchPins();
    }, [])

    const filteredPins = pins.filter(pin => 
        pin.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return(
       <div class="pins-grid">
            {filteredPins.map((pin) => (
                <PinItem key={pin.id} pin={pin} />
            ))}
            
       </div>
    );
}
export default PinList;