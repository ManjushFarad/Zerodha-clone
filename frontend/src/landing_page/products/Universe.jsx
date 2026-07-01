import React from 'react';

function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center mb-4'>
                <h2 className='fs-5 mb-5 text-muted'>Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</h2>
            </div>

            <div className='row text-center mb-5'>
                <h1 className='fs-4 mb-3 text-muted'>The Zerodha Universe</h1>
                <p className='fs-6 text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>

           <div className="row text-center">
 <div className="col-4 p-5 mt-5">
  <img src="media/images/smallcaseLogo.png" alt="Smallcase" />
  <p
    className="text-small text-muted"
    style={{ padding: "0 2rem" }}
  >
    Thematic investing platform
    that helps you invest in diversified
    baskets of stocks on ETFs.
  </p>
</div>

<div className="col-4 p-5 mt-5">
  <img
    src="media/images/streakLogo.png"
    style={{ width: "35%" }}
    alt="Streak"
  />
  <p
    className="text-small text-muted"
    style={{ padding: "0 2rem" }}
  >
    Systematic trading platform
    that allows you to create and backtest
    strategies without coding.
  </p>
</div>

<div className="col-4 p-5 mt-5">
  <img
    src="media/images/sensibullLogo.svg"
    style={{ width: "60%" }}
    alt="Sensibull"
  />
  <p
    className="text-small text-muted"
    style={{ padding: "0 2rem" }}
  >
    Options trading platform that lets you
    create strategies, analyze positions, and examine
    data points like open interest, FII/DII, and more.
  </p>
</div>

<div className="col-4 p-5">
  <img
    src="media/images/zerodhaFundhouse.png"
    style={{ width: "50%" }}
    alt="Zerodha Fund House"
  />
  <p
    className="text-small text-muted"
    style={{ padding: "0 2rem" }}
  >
    Our asset management venture
    that is creating simple and transparent index
    funds to help you save for your goals.
  </p>
</div>

<div className="col-4 p-5">
  <img
    src="media/images/goldenpiLogo.png"
    alt="GoldenPi"
  />
  <p
    className="text-small text-muted"
    style={{ padding: "0 2rem" }}
  >
    Investment research platform
    that offers detailed insights on stocks,
    sectors, supply chains, and more.
  </p>
</div>

<div className="col-4 p-5">
  <img
    src="media/images/dittoLogo.png"
    style={{ width: "35%" }}
    alt="Ditto"
  />
  <p
    className="text-small text-muted"
    style={{ padding: "0 2rem" }}
  >
    Personalized advice on life
    and health insurance. No spam
    and no mis-selling.
    Sign up for free.
  </p>
</div>

<button
          className="p-1 btn btn-primary fs-5 mb-5"
          style={{ width: "15%", margin: "2rem auto" ,backgroundColor:"#387ED1"}}
        >
          Sign up for free
        </button>
</div>
                
            </div>
     );
}

export default Universe;