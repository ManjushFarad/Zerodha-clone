import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        <div className='container p-3 p-md-5 mb-5' style={{marginTop:"6rem"}}>
            <div className='row text-center justify-content-center'>
                 <div className='col-12 col-md-10 col-lg-8'>
                     <h1 className='mt-2 mb-2 fs-2'>Open a Zerodha account</h1>
                     <p className='mt-2 mb-4 text-muted fs-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                     <Link to="/signup" className='p-2 btn btn-primary fs-5 mt-2' style={{width :"max-content", minWidth: "220px", display: "inline-block"}}>Sign up for free</Link>
                 </div>
            </div>
        </div>
     );
}

export default OpenAccount;