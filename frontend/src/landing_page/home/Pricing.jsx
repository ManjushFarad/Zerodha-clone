import React from 'react';

function Pricing() {
    return ( 
        <div className='container mb-5' style={{marginTop : "8rem"}}>
            <div className='row'>
                <div className='col-4 p-3'>
                    <h1 className='fs-2 mb-3'>Unbeatable pricing</h1>
                    <p className='fs-6'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                     <a href=""  style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                </div>

                <div className='col-2'></div>

                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col border'>
                            <h1 className='mb-4 mt-4'>₹0</h1>
                            <p className='mb-4'>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col border'>
                            <h1 className='mb-4 mt-4'>₹20</h1>
                            <p className='mb-4'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;