import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
               <img src="/media/images/homeHero.png" alt='Hero Image' className='mb-5'/>
                <h1 className='mt-2'>Invest in everything</h1>
                <p className='mt-2'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className='p-1 btn btn-primary fs-5 mt-2 mb-5' style={{width :"14%", margin : "0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;