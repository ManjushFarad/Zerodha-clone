import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row">  
        <div className="col-6" style={{marginBottom: "5rem"}}>
          <h1 className="fs-5 mb-4" style={{marginLeft : "10rem"}}>
            Search for an answer or browse help topics <br />
            to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="fs-6" style={{marginLeft : "10rem"}}/>
          <br />
          <a href="" style={{marginLeft : "10rem"}}>Track account opening</a>
          <a href="" className="mx-2">Track segment activation</a>
          <br />
          <a href="" style={{marginLeft : "10rem"}}>Intraday margins</a>
          <a href="" className="mx-2">Kite user manual</a>
        </div>
        <div className="col-6" style={{marginBottom: "5rem"}}>
          <h1 className="fs-3 mx-5">Featured</h1>
          <ol className="mx-4">
            <li className="mb-2">
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;