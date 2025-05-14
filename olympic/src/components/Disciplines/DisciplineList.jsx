import { useEffect, useState } from "react";
import DisciplineItem from "./DisciplineItem";
import { a } from "../../services/axiosInstance";

function DisciplineList() {

    const [disciplines, setDisciplines] = useState([]);

    useEffect(() => {
        async function fetchDisciplines() {
            try {
                const res = await a.get('/countries');
                const countriesData = res.data;

                const allDisciplines = countriesData.flatMap(country => 
                    (country.disciplines && Array.isArray(country.disciplines)) ? country.disciplines : []
                );

                const disciplineMap = new Map();
                allDisciplines.forEach(discipline => {
                    if (discipline?.name && !disciplineMap.has(discipline.name)) {
                        disciplineMap.set(discipline.name, discipline);
                    }
                });
                const uniqueList = Array.from(disciplineMap.values());

                setDisciplines(uniqueList);
                console.log(uniqueList);

            } catch (error) {
                console.error("Error: ", error);
            }
        }
        fetchDisciplines();
    }, []);

    if (!disciplines || disciplines.length === 0) {
        return null;
    }


    return (
        <div class="disciplines-list">
            {disciplines.map((discipline) => (
                <DisciplineItem key={discipline.name} discipline={discipline} />
            ))}
        </div>        
    );
}

export default DisciplineList;