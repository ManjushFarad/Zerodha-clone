function Hero() {
    return ( 
        <div className="container mt-5">
            <div className="row text-center mb-5 p-5">
                <h3>Charges</h3>
                <p className="text-muted">List of all charges and taxes</p>
            </div>
            <div className="row text-center align-items-stretch px-3 px-md-5">
                <div className="col-12 col-md-4 p-3 p-md-5 mb-4 mb-md-0 border-bottom border-bottom-md-0">
                    <img src="media\images\pricingMF.svg" alt="Free Equity" className="img-fluid mb-3" style={{ maxHeight: "120px" }} />
                    <h1 className="fs-4">Free equity delivery</h1>
                    <p className="fs-6 text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className="col-12 col-md-4 p-3 p-md-5 mb-4 mb-md-0 border-bottom border-bottom-md-0">
                    <img src="media\images\intradayTrades.svg" alt="Intraday Trades" className="img-fluid mb-3" style={{ maxHeight: "120px" }} />
                    <h1 className="fs-4">Intraday and F&O trades</h1>
                    <p className="fs-6 text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.  </p>
                </div>

                <div className="col-12 col-md-4 p-3 p-md-5">
                    <img src="media\images\pricingMF.svg" alt="Free Mutual Funds" className="img-fluid mb-3" style={{ maxHeight: "120px" }} />
                    <h1 className="fs-4">Free direct MF</h1>
                    <p className="fs-6 text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;