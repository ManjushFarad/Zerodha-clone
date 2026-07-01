function RightSection({imageURL,productName,productDescription,tryDemo}) {
    return ( 
        <div className="container" style={{marginBottom:"6rem"}}>
            <div className="row">
            

                <div className="col-6 mt-5" style={{paddingLeft:"100px", paddingTop:"50px"}}>
                    <h3 className="mb-3 text-muted">{productName}</h3>
                    <p className="mb-5 fs-6" style={{paddingRight:"100px"}}>{productDescription}</p>

                    <div className="">
                        <a href={tryDemo}  style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                </div>

                <div className="col-6">
                    <img src={imageURL} alt="leftImage" className="p-5"/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;