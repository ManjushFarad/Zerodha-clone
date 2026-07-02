function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className="container" style={{marginBottom:"6rem"}}>
            <div className="row align-items-center">
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                    <img src={imageURL} alt="leftImage" className="img-fluid p-3 p-md-5"/>
                </div>

                <div className="col-12 col-md-6 p-3 p-md-4">
                    <h3 className="mb-3 text-muted">{productName}</h3>
                    <p className="mb-4 fs-6">{productDescription}</p>

                    <div className="d-flex flex-wrap gap-4 mt-2 mb-3">
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{textDecoration:"none"}}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <div className="d-flex flex-wrap gap-3 mt-3">
                        <a href={googlePlay}><img src="media\images\googlePlayBadge.svg" alt="Google Play" style={{ width: "150px" }} /></a>
                        <a href={appStore}><img src="media\images\appstoreBadge.svg" alt="App Store" style={{ width: "150px" }} /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;