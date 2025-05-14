import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { a } from "../services/axiosInstance";

function Profile() {

    const [profileData, setProfileData] = useState(null);
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
                setProfileData(res.data);
            } catch (error) {
                console.error("Error: ", error);
            }
        }
        fetchProfile;
    }, [navigate]);

    if (!profileData) {
        return null;
    }

    const {
        avatar = "https://i.pravatar.cc/150",
        name = "None",
        age = "None",
        gender = "None",
        about = "None",
        whatsapp = "None",
        instagram = "None",
        email = "None",

    } = profileData;

    return (
        <section class="block">
            <div class="container">
                <div class="user-card">
                    <img
                        src={avatar}
                        alt={name}
                        class="user-card__avatar"
                    />
                    <h1 class="user-card__title">{name}</h1>
                    <div class="user-card__body">
                        <div class="card-body__item">
                            <strong>Возраст:</strong>
                            <span>{age}</span>
                        </div>
                        <div class="card-body__item">
                            <strong>Пол:</strong>
                            <span>{gender}</span>
                        </div>
                        <div class="card-body__item">
                            <strong>WhatsApp:</strong>
                            <span>{whatsapp}</span>
                        </div>
                        <div class="card-body__item">
                            <strong>Instagram:</strong>
                            <span>{instagram}</span>
                        </div>
                    </div>
                    <div class="user-card-description">
                        <h5 class="user-card-desc__title">О себе:</h5>
                        <p>{about}</p>
                    </div>
                    <div class="user-card-btn">
                        <Link to="/profile/edit" class="btn-success">
                            Изменить профиль
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;