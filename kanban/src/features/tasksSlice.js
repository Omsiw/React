import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    fetchTasksAPI,
    // Убедись, что имя функции addTasksAPI правильное (или addTaskAPI?)
    addTasksAPI, // <--- Проверь имя этой функции в твоем API файле
    updateTaskAPI,
    deleteTaskAPI,
} from "../services/axiosInstance"; // Убедись, что путь правильный

export const fetchTasks = createAsyncThunk(
    "tasks/fetchTasks",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetchTasksAPI();
            // Добавим проверку, что возвращается массив
            return Array.isArray(res) ? res : [];
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || error.message || 'Failed to fetch'
            );
        }
    }
);

export const addTask = createAsyncThunk(
    "tasks/addTask",
    async (newTask, { rejectWithValue }) => {
        const taskWithStatus = { status: "todo", ...newTask };
        try {
            const res = await addTasksAPI(taskWithStatus); // <--- Проверь имя этой функции
            return res;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || error.message || 'Failed to add'
            );
        }
    }
);

export const updateTask = createAsyncThunk(
    "tasks/updateTask",
    async ({ id, ...updateData }, { rejectWithValue }) => {
        try {
            const res = await updateTaskAPI(id, updateData);
            return res;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || error.message || 'Failed to update'
            );
        }
    }
);

export const deleteTask = createAsyncThunk(
    "tasks/deleteTask",
    async (taskId, { rejectWithValue }) => {
        try {
            await deleteTaskAPI(taskId);
            return taskId;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || error.message || 'Failed to delete'
            );
        }
    }
);

const initialState = {
    items: [],
    status: "idle", // idle, loading, succeeded, failed
    error: null,
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        // Сюда можно добавить другие синхронные редьюсеры при необходимости
    },
    extraReducers: (builder) => {
        builder
            // Fetch Tasks
            .addCase(fetchTasks.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload; // Здесь payload - это массив задач
                state.error = null;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = "failed";
                // ИСПРАВЛЕНО: Записываем ошибку в state.error
                state.error = action.payload || 'Failed to fetch tasks';
                // state.items оставляем как есть или сбрасываем в []
                // state.items = []; // Раскомментируй, если хочешь очищать список при ошибке загрузки
            })
            // Add Task
            .addCase(addTask.pending, (state) => {
                // Опционально: можно не ставить 'loading', если не нужна индикация
                state.status = "loading";
                state.error = null;
            })
            .addCase(addTask.fulfilled, (state, action) => {
                // ИСПРАВЛЕНО: Устанавливаем статус и сбрасываем ошибку
                state.status = "succeeded";
                state.items.push(action.payload); // payload - новая задача
                state.error = null;
            })
            .addCase(addTask.rejected, (state, action) => {
                state.status = "failed";
                // ИСПРАВЛЕНО: Записываем ошибку в state.error
                state.error = action.payload || 'Failed to add task';
            })
            // Update Task
            .addCase(updateTask.pending, (state) => {
                // Опционально: можно не ставить 'loading'
                state.status = "loading";
                state.error = null;
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                // ИСПРАВЛЕНО: Устанавливаем статус и сбрасываем ошибку
                state.status = "succeeded";
                const index = state.items.findIndex(
                    (task) => task.id === action.payload.id // payload - обновленная задача
                );
                // ИСПРАВЛЕНО: Проверка на -1
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
                state.error = null;
            })
            .addCase(updateTask.rejected, (state, action) => {
                state.status = "failed";
                // ИСПРАВЛЕНО: Записываем ошибку в state.error
                state.error = action.payload || 'Failed to update task';
            })
            // Delete Task
            .addCase(deleteTask.pending, (state) => {
                 // Опционально: можно не ставить 'loading' или ввести 'deleting'
                state.status = "loading";
                state.error = null;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                // ИСПРАВЛЕНО: Устанавливаем статус и сбрасываем ошибку
                state.status = "succeeded";
                // ИСПРАВЛЕНО: Логика filter (используем !==)
                // action.payload здесь - это taskId
                state.items = state.items.filter((task) => task.id !== action.payload);
                state.error = null;
            })
            // ИСПРАВЛЕНО: Добавлен обработчик rejected для deleteTask
            .addCase(deleteTask.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload || 'Failed to delete task';
            });
    },
});

// Экспорт синхронного action creator
export const { clearError } = taskSlice.actions;

// Селекторы (остаются без изменений)
export const selectAllTasks = (state) => state.tasks.items;
export const selectTasksByStatus = (state, status) => {
    // Добавим проверку, что state.tasks.items это массив
    if (!Array.isArray(state.tasks.items)) return [];
    return state.tasks.items.filter((task) => task.status === status);
}
export const selectTasksStatus = (state) => state.tasks.status;
export const selectTasksError = (state) => state.tasks.error;

// Экспорт редьюсера
export default taskSlice.reducer;