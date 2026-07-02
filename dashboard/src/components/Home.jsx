import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import API_URL from "../config";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await axios.get(`${API_URL}/check-auth`, {
          withCredentials: true,
        });
        if (response.data.authenticated) {
          setUser(response.data.user);
        } else {
          window.location.href = "http://localhost:5173/login";
        }
      } catch (error) {
        console.error("Session verification failed:", error);
        window.location.href = "http://localhost:5173/login";
      } finally {
        setLoading(false);
      }
    };

    verifySession();
  }, []);

  if (loading) {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fcfcfc",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
      }}>
        <div style={{
          width: "40px",
          height: "40px",
          border: "3px solid #e0e0e0",
          borderTop: "3px solid #387ed1",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          marginBottom: "16px"
        }}></div>
        <h3 style={{ fontWeight: 400, color: "#666", margin: 0, fontSize: "1.1rem" }}>Verifying session...</h3>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <TopBar user={user} />
      <Dashboard user={user} />
    </>
  );
};

export default Home;
