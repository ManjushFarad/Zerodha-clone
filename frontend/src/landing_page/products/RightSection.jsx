function RightSection({imageURL,productName,productDescription,tryDemo}) {
    return ( 
        <div className="container" style={{marginBottom:"6rem"}}>
            <div className="row align-items-center">
                <div className="col-12 col-md-6 order-2 order-md-1 p-3 p-md-4">
                    <h3 className="mb-3 text-muted">{productName}</h3>
                    <p className="mb-4 fs-6">{productDescription}</p>

                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0">
                    <img src={imageURL} alt="rightImage" className="img-fluid p-3 p-md-5"/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;