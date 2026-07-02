import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 pt-md-5'>
            <div className='row mt-5 align-items-center'>
                <div className='col-12 col-md-6 text-center mb-4 mb-md-0'>
                    <img src="\media\images\education.svg" alt="varsity" className="img-fluid" style={{width : "80%"}}/>
                </div>

                <div className='col-12 col-md-6 p-4'>
                    <h1 className='mb-4 fs-2'>Free and open market education</h1>
                    <div className='mb-4'>
                    <p className='mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href=""  style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <div>
                        <p className='mb-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href=""  style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Education;