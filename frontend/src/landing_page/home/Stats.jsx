import React from 'react';

function Stats() {
    return ( 
        <div className='container p-2'>
            <div className='row p-3 p-md-5 align-items-center'>
                <div className='col-12 col-md-6 p-3 p-md-5'>
                    <h1 className='fs-2 mb-4'>Trust with confidence</h1>
 
                    <h2 className='fs-5 mt-4'>Customer-first always</h2>
                    <p className='text-muted fs-6'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
 
                    <h2 className='fs-5 mt-4'>No spam or gimmicks</h2>
                    <p className='text-muted fs-6'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
 
                    <h2 className='fs-5 mt-4'>The Zerodha universe</h2>
                    <p className='text-muted fs-6'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
 
                    <h2 className='fs-5 mt-4'>Do better with money</h2>
                    <p className='text-muted fs-6'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-12 col-md-6 p-3 p-md-4 text-center'>
                    <img src="media\images\ecosystem.png" alt="Ecosystem" className='img-fluid mb-3 mt-3 mt-md-5' style={{maxWidth: "90%"}}/>
                    <div className='d-flex flex-wrap justify-content-center gap-3 mt-3'>
                        <a href="" style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="" style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;