import React, { useState } from "react";

const Apps = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  const appsData = [
    {
      name: "Kite",
      description: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Available on web and mobile.",
      tag: "In-House",
      action: "Launch Kite",
      color: "#f56834",
      letter: "K",
    },
    {
      name: "Console",
      description: "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
      tag: "In-House",
      action: "Launch Console",
      color: "#4184f3",
      letter: "C",
    },
    {
      name: "Coin",
      description: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Browse hundreds of direct index funds.",
      tag: "In-House",
      action: "Launch Coin",
      color: "#4caf50",
      letter: "M",
    },
    {
      name: "Kite Connect",
      description: "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. Excellent choice for developers and startups.",
      tag: "In-House",
      action: "Access APIs",
      color: "#74a7fa",
      letter: "A",
    },
    {
      name: "Varsity",
      description: "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Bite-size cards to learn on the go.",
      tag: "In-House",
      action: "Open Varsity",
      color: "#624bdf",
      letter: "V",
    },
    {
      name: "Smallcase",
      description: "Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs based on ideas, models, or sectors.",
      tag: "Partner",
      action: "Explore Smallcases",
      color: "#387ed1",
      letter: "S",
    },
    {
      name: "Streak",
      description: "Systematic trading platform that allows you to create and backtest quantitative strategies without coding. Analyze live markets.",
      tag: "Partner",
      action: "Launch Streak",
      color: "#eb5350",
      letter: "T",
    },
    {
      name: "Sensibull",
      description: "Options trading platform that lets you create option strategies, analyze positions, and examine data points like open interest.",
      tag: "Partner",
      action: "Launch Sensibull",
      color: "#9c27b0",
      letter: "O",
    },
    {
      name: "GoldenPi",
      description: "Investment research platform offering detailed insights and access to bonds, corporate debt, sectors, and supply chains.",
      tag: "Partner",
      action: "Explore Bonds",
      color: "#ff9800",
      letter: "G",
    },
    {
      name: "Ditto",
      description: "Personalized advice on life and health insurance. Zero spam and zero mis-selling. Get complete clarity before you purchase a policy.",
      tag: "Partner",
      action: "Get Advice",
      color: "#009688",
      letter: "D",
    },
  ];

  // Filtering Logic
  const filteredApps = appsData.filter((app) => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          app.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "All" || 
                       (activeTab === "In-House" && app.tag === "In-House") || 
                       (activeTab === "Partners" && app.tag === "Partner");
    return matchesSearch && matchesTab;
  });

  return (
    <div className="apps-page-container">
      <div>
        <h3 className="title" style={{ marginBottom: "8px" }}>Apps Ecosystem</h3>
        <p style={{ color: "#666", fontSize: "0.9rem", margin: 0 }}>
          Access in-house products and partner tools to expand your trading and investment experience.
        </p>
      </div>

      {/* Header Search & Tabs */}
      <div className="apps-header-row">
        <div className="apps-tabs">
          <button 
            className={`apps-tab ${activeTab === "All" ? "active" : ""}`}
            onClick={() => setActiveTab("All")}
          >
            All Products
          </button>
          <button 
            className={`apps-tab ${activeTab === "In-House" ? "active" : ""}`}
            onClick={() => setActiveTab("In-House")}
          >
            In-House
          </button>
          <button 
            className={`apps-tab ${activeTab === "Partners" ? "active" : ""}`}
            onClick={() => setActiveTab("Partners")}
          >
            Partner Platforms
          </button>
        </div>

        <div className="apps-search-bar">
          <svg style={{ width: "18px", height: "18px", fill: "#888" }} viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input 
            type="text" 
            placeholder="Search apps..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="apps-grid">
        {filteredApps.length > 0 ? (
          filteredApps.map((app, index) => (
            <div className="app-card" key={index}>
              <div className="app-card-header">
                <div className="app-logo-box" style={{ backgroundColor: app.color }}>
                  {app.letter}
                </div>
                <div className="app-title-group">
                  <h4 className="app-card-title">{app.name}</h4>
                  <span className={`app-tag ${app.tag === "In-House" ? "in-house" : "partner"}`}>
                    {app.tag}
                  </span>
                </div>
              </div>
              <p className="app-description">{app.description}</p>
              <button className="app-action-btn">{app.action}</button>
            </div>
          ))
        ) : (
          <div className="no-apps-found">
            <h4>No applications match your search.</h4>
            <p style={{ margin: "4px 0 0 0", fontSize: "0.85rem" }}>Try searching for a different keyword.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
