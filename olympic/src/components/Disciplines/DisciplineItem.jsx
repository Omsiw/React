import { Link } from "react-router-dom";

function DisciplineItem({discipline}) {

    const disciplinePath = `/images/disciplines/${discipline.image.split('/')[1]}`;
    
    return (
        <Link to={`/disciplines/${discipline.name}`} class="btn-discipline">
            <img src={disciplinePath} class="disciplines-sm" alt="Discipline" />
            <span>{discipline.name}</span>
        </Link>
    );
}

export default DisciplineItem;