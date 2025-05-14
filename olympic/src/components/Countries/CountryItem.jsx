import { Link } from "react-router-dom";
import { COUNTRY_DETAIL } from "../../utils/consts";

function CountryItem({country}) {

    const flagPath = `/images/flags/${country.flag.split('/')[1]}`;

    return (
        <Link to={COUNTRY_DETAIL.substring(0, COUNTRY_DETAIL.length - 10) + country.id} class="btn-country">
            <img src={flagPath} class="country-sm" alt="Country" />
            <span>{country.name}</span>
        </Link>
    );
}

export default CountryItem;
