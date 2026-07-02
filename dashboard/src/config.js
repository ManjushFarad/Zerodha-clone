const isRender = window.location.hostname.includes("onrender.com");

const API_URL = isRender
    ? "https://zerodha-backend-zi92.onrender.com"
    : "http://localhost:8080";

export const FRONTEND_URL = isRender
    ? "https://zerodha-frontend-w1qf.onrender.com"
    : "http://localhost:5173";

export default API_URL;