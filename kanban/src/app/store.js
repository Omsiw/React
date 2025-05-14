import { configureStore } from "@reduxjs/toolkit";
import tasksReducers from "../features/tasksSlice";

export const store = configureStore({
    reducer: {
        tasks: tasksReducers
    }
})