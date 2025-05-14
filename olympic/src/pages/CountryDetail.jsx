import { Link, useParams } from "react-router-dom";
import prev from "../assets/images/ico-prev.svg";
import logo from "../assets/images/logo-sm-white.png";
import goldIcon from "../assets/images/medals/gold.png";
import silverIcon from "../assets/images/medals/silver.png";
import bronzeIcon from "../assets/images/medals/bronze.png";
import { BRONZE_MEDALS, COUNTRIES, GOLD_MEDALS, SILVER_MEDALS } from "../utils/consts";
import { useState, useEffect } from "react";
import { a } from "../services/axiosInstance"
function CountryDetail() {

    const {countryId} = useParams();
    const [country, setCountry] = useState(null)

    useEffect(() => {
        async function fetchCountry() {
            try{
                const res = await a.get(`/countries/${countryId}`);
                setCountry(res.data);
            } catch (error) {
                console.error("Error fetching country:", error);
            }
        }
        fetchCountry()
    }, [countryId])

    if (!country) {
        return null;
    }

    const flagPath = `/images/flags/${country.flag.split('/')[1]}`;


    return (
        <section class="block">
            <div class="flex-container">
                <div class="block-header">
                    <Link to={COUNTRIES} class="back-btn">
                        <img src={prev} alt="Back" />
                    </Link>
                    <img src={logo} alt="Logo SM" class="logo-sm" />
                    <span class="space"></span>
                </div>
                <h1 class="title">{country.name}</h1>
                <div class="flag-lg">
                    <img src={flagPath} alt={country.name} />
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Gold</th>
                            <th>Silver</th>
                            <th>Bronze</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{country.medals.gold}</td>
                            <td>{country.medals.silver}</td>
                            <td>{country.medals.bronze}</td>
                            <td>{country.medals.gold + country.medals.silver + country.medals.bronze}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="medals-action">
                    <Link to={GOLD_MEDALS.substring(0, GOLD_MEDALS.length - 10) + country.id} class="btn-medals">
                        <img src={goldIcon} class="medals-sm" alt="Gold" />
                        <span>Medals</span>
                    </Link>
                    <Link to={SILVER_MEDALS.substring(0, SILVER_MEDALS.length - 10) + country.id} class="btn-medals">
                        <img src={silverIcon} class="medals-sm" alt="Silver" />
                        <span>Medals</span>
                    </Link >
                    <Link to={BRONZE_MEDALS.substring(0, BRONZE_MEDALS.length - 10) + country.id} class="btn-medals">
                        <img src={bronzeIcon} class="medals-sm" alt="Bronze" />
                        <span>Medals</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CountryDetail;