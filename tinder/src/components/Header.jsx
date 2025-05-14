import { Link, useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    const token = localStorage.getItem("authToken");

    function handleLogout() {
        localStorage.removeItem("authToken");
        navigate("/login");
    }


    return (
        <header class="header">
            <div class="container header-flex">
                <Link to={token ? "/people" : "/"} class="logo">Tinder</Link>
                <nav class="header-nav">
                    {token ? (
                        <>
                            <Link to="/people" class="header-nav__link">Люди</Link>
                            <Link to="/profile" class="header-nav__link">Мой профиль</Link>
                            <span onClick={handleLogout} class="header-nav__danger">Выход</span>
                        </>
                    ) : (
                        <>
                            <Link to="/login" class="header-nav__link">Вход</Link>
                            <Link to="/register" class="header-nav__success">Регистрация</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;