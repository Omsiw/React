import { useEffect, useState } from "react";
import CountryItem from "./CountryItem";
import { a } from "../../services/axiosInstance";
function CountryList() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function fetchCountries() {
            try {
                const res = await a.get('/countries');
                setCountries(res.data);
            } catch (error) {
                console.error("Error: ", error);
            }
        }
        fetchCountries();
    }, []);

    return (
        <div class="countries-list">
            {countries.map((country) => (
                <CountryItem key={country.id} country={country} />
            ))}
        </div>        
    );
}

export default CountryList;
