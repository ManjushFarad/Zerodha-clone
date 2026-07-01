function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className="container" style={{marginBottom:"6rem"}}>
            <div className="row">
                <div className="col-6">
                    <img src={imageURL} alt="leftImage" className="p-5"/>
                </div>

                <div className="col-6 mt-5" style={{paddingLeft:"100px", paddingTop:"50px"}}>
                    <h3 className="mb-3 text-muted">{productName}</h3>
                    <p className="mb-5 fs-6" style={{paddingRight:"100px"}}>{productDescription}</p>

                    <div className="mt-2">
                        <a href={tryDemo}  style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore}  style={{textDecoration:"none", marginLeft:"80px"}}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <div className="mt-3">
                        <a href={googlePlay}><img src="media\images\googlePlayBadge.svg" alt="" /></a>
                        <a href={appStore} style={{marginLeft:"50px"}}><img src="media\images\appstoreBadge.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;