import logo from "../assets/images/logo.png";
import {Link} from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

function Header({onSearchChange}) {
    return (
        <header class="header">
        <div class="container header-flex">
            <Link class="logo">
                <img src={logo} alt="logo" />
            </Link>
            <form class="search-form">
                <input onChange={onSearchChange} type="text" class="form-control" placeholder="Поиск" />
            </form>
            <nav class="header-nav">
                <Link to="/" class="header-nav__link">Пины</Link>
                <Link to="/favorites" class="header-nav__link">Избранное</Link>
                <ThemeSwitcher />
            </nav>
        </div>
    </header>
    );
}
export default Header;