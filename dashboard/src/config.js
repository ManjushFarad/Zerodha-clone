const API_URL =
    import.meta.env.VITE_USE_RENDER === "true"
        ? import.meta.env.VITE_RENDER_API
        : import.meta.env.VITE_LOCAL_API;

export default API_URL;