import React from 'react';

function Team() {
    return ( 
        <div className='container'>
             <div className='row mb-5'>
                    <h1 className='text-center mt-5' style={{fontSize:"1.6rem", color:"#424242"}}>People</h1>
            </div>

            <div className='row mt-3 mt-md-5 mb-5 align-items-center'>
                <div className='col-12 col-md-6 text-center mt-3 mt-md-5 mb-4 mb-md-0'>
                    <img src="media\images\nithinKamath.jpg" alt="Nitin Kamath" style={{borderRadius:"100%", height:"auto", width:"100%", maxWidth:"300px"}} className='mb-4 img-fluid'/>
                    <h1 className='fs-5'>Nitin Kamath</h1>
                    <p className='fs-6'>Founder, CEO</p>
                </div>

                <div className='col-12 col-md-6 p-3 p-md-4'>
                    <p className='mt-2 mt-md-5 mb-4'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p className='mb-4'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p className='mb-4'>Playing basketball is his zen.</p>
                    <p className='mb-4'>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
                
        </div>
     );
}

export default Team;