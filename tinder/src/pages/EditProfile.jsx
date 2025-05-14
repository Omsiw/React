import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { a } from "../services/axiosInstance";

function EditProfile() {
    const [formData, setFormData] = useState({
        id: '',
        email: '',
        name: '',
        age: '',
        gender: '',
        about: '',
        whatsapp: '',
        instagram: '',
        avatar: '',
    })
    const navigate = useNavigate();


    useEffect(() => {
        async function fetchProfile() {
            const token = localStorage.getItem("authToken");
            if (!token) {
                navigate("/login");
                return;
            }
            try {
                const res = await a.get('/auth_me');
                const profile = res.data;
                setFormData({
                    id: profile.id,
                    email: profile.email,
                    name: profile.name,
                    age: profile.age,
                    gender: profile.gender,
                    about: profile.about,
                    whatsapp: profile.whatsapp,
                    instagram: profile.instagram,
                    avatar: profile.avatar,
                })
            } catch (error) {
                console.error("Error: ", error);
            }
        }
        fetchProfile();
    }, [navigate]);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const updatedData = {
            name: formData.name,
            age: formData.age,
            gender: formData.gender,
            about: formData.about,
            whatsapp: formData.whatsapp,
            instagram: formData.instagram,
            avatar: formData.avatar,
        }

        try {
            await a.patch(`/users/${formData.id}`, updatedData);
            navigate('/profile');
        } catch (error) {
            console.error("Error: ", error);
        }

    }


    return (
        <section class="block">
        <div class="container">
            <form class="form" onSubmit={handleSubmit}>
                <h1 class="title">Изменить профиль</h1>
                <div class="form-control">
                    <label for="email">E-mail</label>
                    <input
                        name="email"
                        disabled
                        value={formData.email}
                        type="email"
                        id="email"
                        placeholder="Введите e-mail"
                    />
                </div>
                <div class="form-control">
                    <label for="fullname">Имя</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        id="fullname"
                        placeholder="Ваше имя"
                    />
                </div>
                <div class="form-control">
                    <label for="gender">Пол</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} id="gender">
                        <option value="male">Мужской</option>
                        <option value="female">Женский</option>
                    </select>
                </div>
                <div class="form-control">
                    <label for="age">Возраст</label>
                    <input
                        name="age"
                        value={formData.age}
                        onChange={handleChange}                    
                        type="number"
                        id="age"
                        placeholder="Введите возраст"
                    />
                </div>
                <div class="form-control">
                    <label for="about">О себе</label>
                    <textarea
value={formData.about}
onChange={handleChange}                    
name="about"
id="about"
placeholder="Расскажите о себе"
cols="30"
></textarea>
</div>
<div class="form-control">
<label for="whatsapp">WhatsApp</label>
<input
name="whatsapp"
value={formData.whatsapp}
onChange={handleChange}                    
type="text"
id="whatsapp"
placeholder="+7 XXX XXX XX XX"
/>
</div>
<div class="form-control">
<label for="instgram">Instgram</label>
<input
value={formData.instagram}
onChange={handleChange}
type="text"
id="instgram"
placeholder="Введите аккаунт Instgram"
/>
</div>
<div class="form-control">
<label for="avatar">Аватар</label>
<input 
value={formData.avatar}
onChange={handleChange}                        
type="url" 
id="avatar" 
/>
</div>
<button class="btn-success" type="submit">Сохранить изменения</button>
</form>
</div>
</section>
);
}
export default EditProfile;