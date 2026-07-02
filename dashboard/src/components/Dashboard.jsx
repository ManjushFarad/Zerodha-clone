import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [isWatchlistActive, setIsWatchlistActive] = useState(false);

  return (
    <GeneralContextProvider>
      <div className={`dashboard-container ${isWatchlistActive ? "watchlist-active" : ""}`}>
        <WatchList />
        <div className="content" onClick={() => setIsWatchlistActive(false)}>
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>

        <button 
          className="watchlist-toggle-btn" 
          onClick={() => setIsWatchlistActive(!isWatchlistActive)}
          aria-label="Toggle Watchlist"
        >
          {isWatchlistActive ? "✕ Close" : "🔍 Watchlist"}
        </button>
      </div>
    </GeneralContextProvider>
  );
};

export default Dashboard;
