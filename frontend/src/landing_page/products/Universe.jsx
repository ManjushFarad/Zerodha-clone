import React from 'react';
import { Link } from 'react-router-dom';

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

           <div className="row text-center align-items-stretch">
 <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-4 mt-md-5">
   <img src="media/images/smallcaseLogo.png" alt="Smallcase" className="img-fluid mb-2" style={{ maxHeight: "40px", objectFit: "contain" }} />
   <p
     className="text-small text-muted"
     style={{ padding: "0 1rem" }}
   >
     Thematic investing platform
     that helps you invest in diversified
     baskets of stocks on ETFs.
   </p>
 </div>

 <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-4 mt-md-5">
   <img
     src="media/images/streakLogo.png"
     style={{ width: "35%", maxHeight: "40px", objectFit: "contain" }}
     alt="Streak"
     className="img-fluid mb-2"
   />
   <p
     className="text-small text-muted"
     style={{ padding: "0 1rem" }}
   >
     Systematic trading platform
     that allows you to create and backtest
     strategies without coding.
   </p>
 </div>

 <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-4 mt-md-5">
   <img
     src="media/images/sensibullLogo.svg"
     style={{ width: "60%", maxHeight: "40px", objectFit: "contain" }}
     alt="Sensibull"
     className="img-fluid mb-2"
   />
   <p
     className="text-small text-muted"
     style={{ padding: "0 1rem" }}
   >
     Options trading platform that lets you
     create strategies, analyze positions, and examine
     data points like open interest, FII/DII, and more.
   </p>
 </div>

 <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-4">
   <img
     src="media/images/zerodhaFundhouse.png"
     style={{ width: "50%", maxHeight: "40px", objectFit: "contain" }}
     alt="Zerodha Fund House"
     className="img-fluid mb-2"
   />
   <p
     className="text-small text-muted"
     style={{ padding: "0 1rem" }}
   >
     Our asset management venture
     that is creating simple and transparent index
     funds to help you save for your goals.
   </p>
 </div>

 <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-4">
   <img
     src="media/images/goldenpiLogo.png"
     alt="GoldenPi"
     className="img-fluid mb-2"
     style={{ maxHeight: "40px", objectFit: "contain" }}
   />
   <p
     className="text-small text-muted"
     style={{ padding: "0 1rem" }}
   >
     Investment research platform
     that offers detailed insights on stocks,
     sectors, supply chains, and more.
   </p>
 </div>

 <div className="col-12 col-sm-6 col-md-4 p-3 p-md-5 mt-4">
   <img
     src="media/images/dittoLogo.png"
     style={{ width: "35%", maxHeight: "40px", objectFit: "contain" }}
     alt="Ditto"
     className="img-fluid mb-2"
   />
   <p
     className="text-small text-muted"
     style={{ padding: "0 1rem" }}
   >
     Personalized advice on life
     and health insurance. No spam
     and no mis-selling.
     Sign up for free.
   </p>
 </div>

 <div className="col-12 text-center mt-4">
   <Link
          to="/signup"
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "max-content", minWidth: "220px", display: "inline-block" ,backgroundColor:"#387ED1"}}
        >
          Sign up for free
        </Link>
 </div>
                
            </div>
            </div>
     );
}

export default Universe;