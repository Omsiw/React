import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { a } from "../services/axiosInstance";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state?.message) {
            alert(location.state.message);
            window.history.replaceState({}, document.title);
        }
    }, [location.state]);

    async function handleSubmit(event) {
        event.preventDefault();
        if (!email || !password) {
            alert("Все поля обязательные");
            return;
        }
        try {
            const res = await a.post('/auth', {
                email: email,
                password: password,
            });
            localStorage.setItem("authToken", res.data.token);
            navigate("/people");
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    return (
        <section class="block">
            <div class="container">
                <form class="form" onSubmit={handleSubmit}>
                    <h1 class="title">Вход</h1>
                    <div class="form-control">
                        <label for="email">E-mail</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            placeholder="Введите e-mail"
                        />
                    </div>
                    <div class="form-control">
                        <label for="password">Пароль</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}                        
                            type="password"
                            id="password"
                            placeholder="Введите пароль"
                        />
                    </div>
                    <button class="btn-success" type="submit">Войти</button>
                </form>
            </div>
        </section>
    );
}

export default Login;