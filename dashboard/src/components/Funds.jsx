import React from "react";

const Funds = () => {
  const transactions = [
    { id: "TXN1029472", date: "2026-06-28", type: "Deposit", amount: "₹2,500.00", status: "Success" },
    { id: "TXN1027381", date: "2026-06-15", type: "Deposit", amount: "₹1,500.00", status: "Success" },
    { id: "TXN1025542", date: "2026-06-01", type: "Withdrawal", amount: "₹500.00", status: "Success" },
    { id: "TXN1023910", date: "2026-05-18", type: "Deposit", amount: "₹2,000.00", status: "Success" },
  ];

  return (
    <div className="funds-container">
      {/* Top Banner Card */}
      <div className="funds-header-card">
        <p className="funds-header-text">
          Instant, zero-cost fund transfers with <span>UPI</span> or Netbanking
        </p>
        <div className="funds-action-buttons">
          <button className="btn-funds btn-funds-green">Add Funds</button>
          <button className="btn-funds btn-funds-blue">Withdraw</button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="funds-layout">
        {/* Left Side: Equity & Margin Breakdown */}
        <div className="funds-main-card">
          <h4 className="funds-section-title">
            <svg style={{ width: "20px", height: "20px", fill: "currentColor", marginRight: "8px" }} viewBox="0 0 24 24">
              <path d="M21 18v2H3v-2h18M19 5v10H5V5h14m2-2H3v14h18V3z"/>
            </svg>
            Equity & Derivatives
          </h4>

          {/* Core Metrics */}
          <div className="funds-metrics-grid">
            <div className="metric-box">
              <p className="metric-label">Available Margin</p>
              <h3 className="metric-val blue-text">4,043.10</h3>
            </div>
            <div className="metric-box">
              <p className="metric-label">Used Margin</p>
              <h3 className="metric-val">3,757.30</h3>
            </div>
            <div className="metric-box">
              <p className="metric-label">Available Cash</p>
              <h3 className="metric-val">4,043.10</h3>
            </div>
          </div>

          {/* Progress bar showing utilization */}
          <div className="margin-progress-wrapper">
            <div className="margin-progress-label">
              <span>Margin Utilization</span>
              <span>92.9% Used</span>
            </div>
            <div className="margin-progress-bar">
              <div className="margin-progress-fill" style={{ width: "92.9%" }}></div>
            </div>
          </div>

          {/* Detailed breakdown list */}
          <div className="funds-grid-table">
            <div className="funds-grid-row">
              <span className="label">Opening Balance</span>
              <span className="val">4,043.10</span>
            </div>
            <div className="funds-grid-row">
              <span className="label">Payin</span>
              <span className="val">4,064.00</span>
            </div>
            <div className="funds-grid-row">
              <span className="label">SPAN</span>
              <span className="val">0.00</span>
            </div>
            <div className="funds-grid-row">
              <span className="label">Delivery Margin</span>
              <span className="val">0.00</span>
            </div>
            <div className="funds-grid-row">
              <span className="label">Exposure</span>
              <span className="val">0.00</span>
            </div>
            <div className="funds-grid-row">
              <span className="label">Options Premium</span>
              <span className="val">0.00</span>
            </div>
            <div className="funds-grid-row">
              <span className="label">Collateral (Liquid)</span>
              <span className="val">0.00</span>
            </div>
            <div className="funds-grid-row">
              <span className="label">Collateral (Equity)</span>
              <span className="val">0.00</span>
            </div>
          </div>
        </div>

        {/* Right Side: Commodity activation card */}
        <div className="commodity-card">
          <div className="commodity-icon">
            🌾
          </div>
          <h4 className="commodity-title">Commodity Account</h4>
          <p className="commodity-desc">
            You don't have a commodity account active. Trade Agri-commodities, Gold, Silver, and Crude Oil.
          </p>
          <button className="btn-funds btn-funds-blue" style={{ width: "100%" }}>Activate Account</button>
        </div>
      </div>

      {/* Bottom Log: Transaction Log */}
      <div className="transactions-card">
        <h4 className="funds-section-title" style={{ marginBottom: "16px" }}>
          Recent Fund Transactions
        </h4>
        <table className="trans-table">
          <thead>
            <tr>
              <th>Ref ID</th>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={index}>
                <td style={{ fontWeight: 500, color: "#475569" }}>{txn.id}</td>
                <td>{txn.date}</td>
                <td style={{ fontWeight: 500, color: txn.type === "Deposit" ? "#137333" : "#d93025" }}>
                  {txn.type}
                </td>
                <td style={{ fontWeight: 600 }}>{txn.amount}</td>
                <td>
                  <span className="status-tag success">{txn.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Funds;
