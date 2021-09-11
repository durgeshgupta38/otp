const AboutUs = () => {
    return (
        <>
        <div class="body-banner about">
        <h4 class="heading-top about">About us</h4>
      </div>


    <div class="body-container">
        
        <article>

            <section id="about-breadcrumbs">
                <div class="breadcrumbs-list">
                    <div class="container-width">
                        <ul class="breadcrumb px-0">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="About us.html" class="active">About us</a></li>
                        </ul>
                    </div>
                    {/* end of container width */}
                </div>
                {/* end of breadcrumbs */}
            </section>
            {/* end of about breadcrumbs section */}

            <section id="about-cozmos">
                <div class="container-width">
                    <div class="row">
                        
                        <div class="col-md-6">
                            <h4 class="heading-top">We are cozmos</h4>
                            <p class="heading-subcontent about-text">Lorem sit amet, ac donec hendrerit mi, fermentum ultricies, pellentesque harum luctus ut varius. Maecenas lacust ipsum mi.</p>
                        
                            <div class="about-listing mt-4 mb-5">
                                <ul>
                                    <li>
                                        <img src="images/check.svg" alt="check icon"/>
                                        Trusted worldwide
                                    </li>

                                    <li>
                                        <img src="images/check.svg" alt="check icon"/>
                                        Secure Wallet service
                                    </li>

                                    <li>
                                        <img src="images/check.svg" alt="check icon"/>
                                        Clean Modern Design
                                    </li>

                                    <li>
                                        <img src="images/check.svg" alt="check icon"/>
                                        Bunch of Experts
                                    </li>

                                    <li>
                                        <img src="images/check.svg" alt="check icon"/>
                                        Lots Of Usefull Features
                                    </li>


                                </ul>
                            </div>
                            {/* end of about listing */}

                            <a href="Login.html" class="navigation-button about">
                                <button>join now</button>
                            </a>

                        </div>
                        {/* end of col md 7 */}

                        <div class="col-md-6 aboutCozmos-image">
                            <img src="images/about.jpg" class="img-fluid" alt="about image"/>
                        </div>
                        {/* end of col md 5 */}

                    </div>
                    {/* end of row */}
                </div>
                {/* end of container width */}
            </section>
            {/* end of about cozcos section */}
        
            <section id="about-chooseUs">

                <div class="wallet-features">

                    <div class="features-heading">
                    <h4 class="heading-top">
                        Why choose us
                    </h4>
                    <p class="heading-subcontent about">
                        Lorem ipsum dolor sit amet, ac donec hendrerit mi, fermentum ultricies, pellentesque harum luctus ut varius. Maecenas lacust ipsum.
                    </p>
                    </div>
                    {/* end of features heading */}

                    <div class="features-list">
                        <div class="container-width">

                        <div class="row w-100 text-center m-0">
                            <div class="col-md-4 feature-card">
                                <img src="images/payment-options.svg" alt="payment icon" class="feature-icon"/>
                                <h6 class="feature-name">Payment options</h6>
                                <p class="feature-para">Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, quis metus.</p>
                            </div>
                            <div class="col-md-4 feature-card">
                                <img src="images/secure.svg" alt="security icon" class="feature-icon"/>
                                <h6 class="feature-name">strong security</h6>
                                <p class="feature-para">Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, quis metus.</p>
                            </div>
                            <div class="col-md-4 feature-card">
                                <img src="images/world-coverage.svg" alt="world coverage icon" class="feature-icon"/>
                                <h6 class="feature-name">world coverage</h6>
                                <p class="feature-para">Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, quis metus.</p>
                            </div>
                        </div>

                    </div>
                    {/* end of container common */}
                    </div>
                    {/* end of features list */}
                </div>
                {/* end of feature one */}

            </section>

            <section id="expert-team">
                
                <div class="features-heading">
                    <h4 class="heading-top">
                        our expert team
                    </h4>
                    <p class="heading-subcontent about">
                        Lorem ipsum dolor sit amet, ac donec hendrerit mi, fermentum ultricies, pellentesque harum luctus ut varius. Maecenas lacust ipsum.
                    </p>
                </div>
                {/* end of heading */}

                <div class="team-listing container-width">
                    
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src="images/team1.jpg" alt="Card image cap"/>
                                <div class="card-body">
                                  <h5 class="card-title mb-1">johnson markson</h5>
                                  <p class="card-text">consultant</p>
                                </div>
                            </div>
                        </div>
                        {/* end of col */}
                        <div class="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src="images/team2.jpg" alt="Card image cap"/>
                                <div class="card-body">
                                  <h5 class="card-title mb-1">antonio conte</h5>
                                  <p class="card-text">ceo & founder</p>
                                </div>
                            </div>
                        </div>
                        {/* end of col */}
                        <div class="col-md-4">
                            <div class="card">
                                <img class="card-img-top" src="images/team3.jpg" alt="Card image cap"/>
                                <div class="card-body">
                                  <h5 class="card-title mb-1">johnson smith</h5>
                                  <p class="card-text">manager</p>
                                </div>
                            </div>
                        </div>
                        {/* end of col */}
                    </div>
                    {/* end of row */}

                </div>
                {/* end of team listing */}
                
            </section>
            {/* end of expert team section */}

        </article>
    
    </div>
    </>
    )
}

export default AboutUs;