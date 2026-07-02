import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 p-md-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{ textDecoration: "none" }}>Track Tickets</a>
      </div>
      <div className="container">
        <div className="row mt-3">  
          <div className="col-12 col-md-6 mb-5">
            <h1 className="fs-5 mb-4">
              Search for an answer or browse help topics <br />
              to create a ticket
            </h1>
            <input placeholder="Eg. how do I activate F&O" className="fs-6 w-100" style={{ maxWidth: "500px", display: "block" }}/>
            <div className="d-flex flex-wrap gap-2 mt-2" style={{ fontSize: "0.9rem" }}>
              <a href="" className="me-2 mb-2 d-inline-block">Track account opening</a>
              <a href="" className="me-2 mb-2 d-inline-block">Track segment activation</a>
              <a href="" className="me-2 mb-2 d-inline-block">Intraday margins</a>
              <a href="" className="mb-2 d-inline-block">Kite user manual</a>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-5 ps-md-5">
            <h1 className="fs-4 mb-3">Featured</h1>
            <ol className="ps-3">
              <li className="mb-2">
                <a href="" style={{ lineHeight: "1.6" }}>Current Takeovers and Delisting - January 2024</a>
              </li>
              <li>
                <a href="" style={{ lineHeight: "1.6" }}>Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;