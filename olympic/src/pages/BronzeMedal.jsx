import { Link, useParams } from "react-router-dom";
import prev from "../assets/images/ico-prev.svg";
import logo from "../assets/images/logo-sm-white.png";
import { useState, useEffect } from "react";
import { a } from "../services/axiosInstance"
import { COUNTRY_DETAIL } from "../utils/consts";

function BronzeMedal() {

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
                    <Link to={COUNTRY_DETAIL.substring(0, COUNTRY_DETAIL.length - 10) + country.id} class="back-btn">
                        <img src={prev} alt="Back" />
                    </Link>
                    <img src={logo} alt="Logo SM" class="logo-sm" />
                    <span class="space"></span>
                </div>
                <h1 class="title">{country.name}</h1>
                <div class="flag-lg">
                    <img src={flagPath} alt={country.name} />
                </div>
                <div class="medals-count">
                    <h2 class="sm-title">Bronze medals</h2>
                    <h2 class="title">{country.medals.bronze}</h2>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Discipline</th>
                            <th>Medals</th>
                        </tr>
                    </thead>
                    <tbody>
                        {country.disciplines.map((discipline, index) => (
                            <tr key={index} class="border-bottom">
                                <td>{discipline.name}</td>
                                <td>{discipline.bronze}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default BronzeMedal