import { Link } from "react-router-dom";

function PeopleItem({user}) {

    const {
        id,
        avatar = "https://i.pravatar.cc/150",
        name = "None",
        age = "None",
        gender = "None",
    } = user;

    return (
        <div class="data-item">
            <img
                src={avatar}
                class="data-item__avatar"
                alt="Name"
            />
            <h3 class="data-item__title">{name}</h3>
            <p class="data-item__text">Возраст: {age}</p>
            <p class="data-item__text">Пол: {gender}</p>
            <Link to={`/people/${id}`} class="btn-success">Детали</Link>
        </div>
    );
}
export default PeopleItem;