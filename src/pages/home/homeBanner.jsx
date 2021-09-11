const HomeBanner = () => {
    return (
        <div className="body-banner">
        <div id="banner" className="carousel slide" data-ride="carousel">

            <ul className="carousel-indicators">
                <li data-target="#banner" data-slide-to="0" className="active"></li>
                <li data-target="#banner" data-slide-to="1"></li>
                <li data-target="#banner" data-slide-to="2"></li>
            </ul>

   
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/slider1.jpg" alt="banner 1" className="img-fluid" />
                </div>
                <div className="carousel-item">
                    <img src="images/slider1.jpg" alt="banner 2" className="img-fluid" />
                </div>
                <div className="carousel-item">
                    <img src="images/slider1.jpg" alt="banner 3" className="img-fluid" />
                </div>
            </div>

        </div>

        
        <div className="banner-content">
            <div className="wrap-bannerContent">
                
                <h4 className="bannerContent-heading">
                    <span className="bannerContent-highlight">Secure</span>
                     and <span className="bannerContent-highlight">Easy</span> Way To 
                     <span className="bannerContent-highlight">Trade</span>
                </h4>

                <p className="bannerContent-para">
                    Cozmos is the best software platform to make secure and fast payments to just about anyone that has a smartphone.
                </p>

                <a href="#features" className="navigation-button">
                    <button className="banner-button">Discover features</button>
                </a>

            </div>
        </div>


    </div>
    )
}

export default HomeBanner;