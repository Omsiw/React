import { useEffect, useState } from "react";
import PeopleItem from "./PeopleItem";
import { useNavigate } from "react-router-dom";
import { a } from "../../services/axiosInstance";

function PeopleList() {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchUsers() {
            const token = localStorage.getItem("authToken");
            if (!token) {
                navigate("/login");
                return;
            }
            try {
                const res = await a.get('/users');
                setUsers(Array.isArray(res.data) ? res.data : []);
            } catch(error) {
                console.error("Error: ", error);
            }
        }
        fetchUsers();
    }, [navigate])

    return (
        <div class="data-list">
            {users.map((user) => (
                <PeopleItem key={user.id} user={user} />
            ))}
        </div>
    );
}

export default PeopleList;