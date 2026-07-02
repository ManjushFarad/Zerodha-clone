const isRender = window.location.hostname.includes("onrender.com");

const API_URL = isRender
    ? "https://zerodha-backend-zi92.onrender.com"
    : "http://localhost:8080";

export const DASHBOARD_URL = isRender
    ? "https://zerodha-dashboard-te5j.onrender.com"
    : "http://localhost:5174";

export default API_URL;