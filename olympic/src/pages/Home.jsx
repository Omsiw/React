import logo from '../assets/images/logo-white.png';
import frame from '../assets/images/frame.png';
import countries from '../assets/images/ico-countries.svg';
import disciplines from '../assets/images/ico-disciplines.svg';
import { Link } from 'react-router-dom';
import { COUNTRIES, DISCIPLINES } from '../utils/consts';

function Home() {
    return (
        <>
        <section class="block">
            <div class="flex-container align-items-center">
                <span class="logo">
                    <img src={logo} alt="Logo" />
                </span>
                <div class="banner">
                    <img src={frame} alt="Frame" />
                </div>
                <div class="main-action">
                    <Link to={COUNTRIES} class="btn-default">
                        <img src={countries} alt="Countries" />
                        <span>Countries</span>
                    </Link>
                    <Link to={DISCIPLINES} class="btn-default">
                        <img src={disciplines} alt="Disciplines" />
                        <span>Disciplines</span>
                    </Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home;