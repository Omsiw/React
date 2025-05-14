import axios from 'axios';

const API_URL = 'https://f4e3faa52a75493b.mokky.dev/tasks';

export async function fetchTasksAPI() {
    const res = await axios.get(API_URL);
    return Array.isArray(res.data) ? res.data : [];
}

export async function addTaskAPI(task) {
    const res = await axios.post(API_URL, task);
    return res.data;
}

export async function updateTaskAPI(taskId, task) {
    const res = await axios.patch(`${API_URL}/${taskId}`, task);
    return res.data;
}

export async function deleteTaskAPI(taskId) {
    await axios.delete(`${API_URL}/${taskId}`);
    return taskId;
}