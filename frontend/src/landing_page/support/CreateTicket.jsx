import React from "react";

function CreateTicket() {
  const linkStyle = {
    textDecoration: "none",
    lineHeight: "2.5",
  };

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-4 mb-4 text-muted text-center">
          To create a ticket, select a relevant topic
        </h1>

        {/* Account Opening */}
        <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-2 mb-2">
           <h4 className="fs-5 text-muted">
            <i className="fa fa-user-plus" aria-hidden="true"></i>{" "}
            Account Opening
          </h4>

          <a href="" style={linkStyle}>Online Account Opening</a><br />
          <a href="" style={linkStyle}>Offline Account Opening</a><br />
          <a href="" style={linkStyle}>Corporate & HUF Accounts</a><br />
          <a href="" style={linkStyle}>NRI Account Opening</a><br />
          <a href="" style={linkStyle}>Account Opening Charges</a><br />
          <a href="" style={linkStyle}>Getting Started</a>
        </div>

        {/* Your Account */}
        <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-2 mb-2">
           <h4 className="fs-5 text-muted">
            <i className="fa fa-user" aria-hidden="true"></i>{" "}
            Your Account
          </h4>

          <a href="" style={linkStyle}>Profile Update</a><br />
          <a href="" style={linkStyle}>Change Mobile Number</a><br />
          <a href="" style={linkStyle}>Update Email Address</a><br />
          <a href="" style={linkStyle}>Bank Account Modification</a><br />
          <a href="" style={linkStyle}>Nominee Details</a><br />
          <a href="" style={linkStyle}>Close Account</a>
        </div>

        {/* Trading & Markets */}
        <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-2 mb-2">
           <h4 className="fs-5 text-muted">
            <i className="fa fa-line-chart" aria-hidden="true"></i>{" "}
            Trading & Markets
          </h4>

          <a href="" style={linkStyle}>Equity Trading</a><br />
          <a href="" style={linkStyle}>F&O Trading</a><br />
          <a href="" style={linkStyle}>Commodity Trading</a><br />
          <a href="" style={linkStyle}>Currency Trading</a><br />
          <a href="" style={linkStyle}>Trading Holidays</a><br />
          <a href="" style={linkStyle}>Market Timings</a>
        </div>

        {/* Funds */}
        <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-2 mb-2">
           <h4 className="fs-5 text-muted">
            <i className="fa fa-credit-card" aria-hidden="true"></i>{" "}
            Funds
          </h4>

          <a href="" style={linkStyle}>Add Funds</a><br />
          <a href="" style={linkStyle}>Withdraw Funds</a><br />
          <a href="" style={linkStyle}>Fund Transfer Status</a><br />
          <a href="" style={linkStyle}>UPI Payments</a><br />
          <a href="" style={linkStyle}>Net Banking</a><br />
          <a href="" style={linkStyle}>Payment Issues</a>
        </div>

        {/* Reports & Statements */}
        <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-2 mb-2">
          <h4 className="fs-5 text-muted">
           <i className="fa fa-line-chart" aria-hidden="true"></i>{" "}
            Reports & Statements
          </h4>

          <a href="" style={linkStyle}>Contract Notes</a><br />
          <a href="" style={linkStyle}>P&amp;L Report</a><br />
          <a href="" style={linkStyle}>Tax Reports</a><br />
          <a href="" style={linkStyle}>Account Statement</a><br />
          <a href="" style={linkStyle}>Holdings Report</a><br />
          <a href="" style={linkStyle}>Download Reports</a>
        </div>

        {/* Support & Security */}
        <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-2 mb-2">
           <h4 className="fs-5 text-muted">
            <i className="fa fa-life-ring" aria-hidden="true"></i>{" "}
            Support & Security
          </h4>

          <a href="" style={linkStyle}>Login Issues</a><br />
          <a href="" style={linkStyle}>Forgot Password</a><br />
          <a href="" style={linkStyle}>Two-Factor Authentication</a><br />
          <a href="" style={linkStyle}>API Support</a><br />
          <a href="" style={linkStyle}>Raise a Ticket</a><br />
          <a href="" style={linkStyle}>Contact Support</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;