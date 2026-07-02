import React from 'react';

function Pricing() {
    return ( 
        <div className='container mb-5 mt-5 pt-md-5'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-4 p-3 mb-4 mb-md-0 text-center text-md-start'>
                    <h1 className='fs-2 mb-3'>Unbeatable pricing</h1>
                    <p className='fs-6'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                     <a href=""  style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                </div>

                <div className='d-none d-md-block col-md-2'></div>

                <div className='col-12 col-md-6'>
                    <div className='row text-center'>
                        <div className='col-6 border p-3'>
                            <h1 className='mb-4 mt-4'>₹0</h1>
                            <p className='mb-4 text-muted fs-7'>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col-6 border p-3'>
                            <h1 className='mb-4 mt-4'>₹20</h1>
                            <p className='mb-4 text-muted fs-7'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;