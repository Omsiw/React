import React from 'react';

function TaskItem() {
    return (
        <div class="task-item">
            <strong class="task-item__title">Пример Задачи 1</strong>
            <span class="task-item__description">Это описание первой задачи.</span>
            <div class="task-item__actions">
                <button class="btn-action btn-success">В работу</button>
                <button class="btn-action btn-warning">Изменить</button>
                <button class="btn-action btn-danger">Удалить</button>
            </div>
        </div>
    );
}

export default TaskItem;