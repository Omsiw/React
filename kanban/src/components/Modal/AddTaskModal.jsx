import React from 'react';

function AddTaskModal() {

    return (
        <>
            <h2>Новая задача</h2>
            <form class="modal-form">
                <label>
                Название:
                <input type="text" placeholder="Введите название задачи" required />
                </label>
                <label>
                Описание:
                <textarea placeholder="Введите описание (необязательно)"></textarea>
                </label>
                <button type="submit">Создать задачу</button>
            </form>
        </>
    );
}

export default AddTaskModal;