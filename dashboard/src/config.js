const API_URL =
    import.meta.env.VITE_USE_RENDER === "true"
        ? import.meta.env.VITE_RENDER_API
        : import.meta.env.VITE_LOCAL_API;

export const FRONTEND_URL =
    import.meta.env.VITE_USE_RENDER === "true"
        ? import.meta.env.VITE_RENDER_FRONTEND
        : import.meta.env.VITE_LOCAL_FRONTEND;

export default API_URL;