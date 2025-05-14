import { Link } from "react-router-dom";
import prev from "../assets/images/ico-prev.svg";
import logo from "../assets/images/logo-sm-white.png";
import CountryList from "../components/Countries/CountryList";
import { HOME } from "../utils/consts";
function Countries() {
    return (
        <section class="block">
            <div class="flex-container">
                <div class="block-header">
                    <Link to={HOME} class="back-btn">
                        <img src={prev} alt="Back" />
                    </Link>
                    <img src={logo} alt="Logo SM" class="logo-sm" />
                    <span class="space"></span>
                </div>
                <h1 class="title">Countries</h1>
                <CountryList />
            </div>
        </section>        
    );
}

export default Countries;