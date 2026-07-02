import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container p-3 p-md-5 mb-5'>
            <div className='row text-center justify-content-center'>
                <div className='col-12 col-md-10 col-lg-8'>
                    <img src="/media/images/homeHero.png" alt='Hero Image' className='mb-5 mx-auto' style={{ width: "100%", maxWidth: "800px", height: "auto" }}/>
                    <h1 className='mt-2 mb-3'>Invest in everything</h1>
                    <p className='mt-2 mb-4 text-muted fs-5'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <Link to="/signup" className='p-2 btn btn-primary fs-5 mb-5' style={{width :"max-content", minWidth: "200px", display: "inline-block"}}>Signup Now</Link>
                </div>
            </div>
        </div>
     );
}

export default Hero;