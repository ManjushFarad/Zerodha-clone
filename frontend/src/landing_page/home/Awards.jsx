import React from 'react';

function Awards() {
    return ( 
        <div className='container mb-5'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 p-3 p-md-5 text-center'>
                    <img src="media/images/largestBroker.svg" alt="Broker" className="img-fluid" />
                </div>
                <div className='col-12 col-md-6 p-3 p-md-5'>
                    <h1 className='mb-3 fs-2'>Largest stock broker in India</h1>
                    <p className='mb-4'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in :</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                        <div className="text-center text-md-start">
                            <img src="media\images\pressLogos.png" alt="pressLogo" className="mt-4 img-fluid" style={{maxWidth : "90%"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;
