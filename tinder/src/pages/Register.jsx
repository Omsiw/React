import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { a } from "../services/axiosInstance";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
        if (password !== passwordConfirm) {
            alert("Пароли не совпадают");
            return;
        }
        if (!email || !password) {
            alert("Все поля обязательны");
            return;
        }
        try {
            const res = await a.post("/register", {
                email: email,
                password: password,
                name: "Новый пользователь",
                age: null,
                gender: "не определен",
                about: "",
                whatsapp: "",
                instgram: "",
                avatar: `https://i.pravatar.cc/150?u=${email}`,
            });
            if (res.data.token) {
                localStorage.setItem("authToken", res.data.token);
                navigate("/profile");
            } else {
                navigate("/login");
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    }


    return (
        <section class="block">
            <div class="container">
                <form class="form" onSubmit={handleSubmit}>
                    <h1 class="title">Регистрация</h1>
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
                    <div class="form-control">
                        <label for="password2">Подтвердите пароль</label>
                        <input
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}                          
                            type="password"
                            id="password2"
                            placeholder="Подтвердите пароль"
                        />
                    </div>
                    <button class="btn-success" type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </section>
    );
}

export default Register;