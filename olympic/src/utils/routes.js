import BronzeMedal from "../pages/BronzeMedal";
import Countries from "../pages/Countries";
import CountryDetail from "../pages/CountryDetail";
import Disciplines from "../pages/Disciplines";
import GoldMedal from "../pages/GoldMedal";
import Home from "../pages/Home";
import SilverMedal from "../pages/SilverMedal";

import {
    HOME,
    COUNTRIES,
    COUNTRY_DETAIL,
    GOLD_MEDALS,
    SILVER_MEDALS,
    BRONZE_MEDALS,
    DISCIPLINES
} from "./consts";

export const routes = [
    {
        path: HOME,
        element: Home
    },
    {
        path: COUNTRIES,
        element: Countries
    },
    {
        path: COUNTRY_DETAIL,
        element: CountryDetail
    },
    {
        path: GOLD_MEDALS,
        element: GoldMedal
    },
    {
        path: SILVER_MEDALS,
        element: SilverMedal
    },
    {
        path: BRONZE_MEDALS,
        element: BronzeMedal
    },
    {
        path: DISCIPLINES,
        element: Disciplines
    }
];