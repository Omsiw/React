import axios from "axios";

export const a = axios.create({
    baseURL: "https://d0092a24d895b413.mokky.dev"
});

a.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

a.interceptors.request.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error("Error 401. Unauth");
            localStorage.removeItem("authToken");
        }
        return Promise.reject(error);
    }
)