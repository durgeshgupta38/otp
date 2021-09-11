const HomeContent = () =>{
    return(
    <>    
    <div className="body-container">
        
    <article>

        <section id="features">
            
            <div className="wallet-features">

                <div className="features-heading">
                <h4 className="heading-top">
                    A powerful wallet <br /> for all your Cryptocurrencies
                </h4>
                <p className="heading-subcontent">
                    We’re constantly refining our product. Adding new features. Working to help your business grow.
                </p>
                </div>
                {/* end of features heading */}

                <div className="features-list">
                    <div className="container-width">

                    <div className="row w-100 text-center m-0 mb-5">
                        <div className="col-md-4 feature-card">
                            <img src="images/exchange.svg" className="feature-icon" />
                            <h6 className="feature-name">Instant Exchange</h6>
                            <p className="feature-para">Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, quis metus.</p>
                        </div>
                        <div className="col-md-4 feature-card">
                            <img src="images/digital-wallet.svg" className="feature-icon" />
                            <h6 className="feature-name">Mobile Wallet App</h6>
                            <p className="feature-para">Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, quis metus.</p>
                        </div>
                        <div className="col-md-4 feature-card">
                            <img src="images/secure.svg" className="feature-icon" />
                            <h6 className="feature-name">Security Focus</h6>
                            <p className="feature-para">Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, quis metus.</p>
                        </div>
                    </div>

                    <div className="row w-100 text-center">
                        <div className="col-md-4 feature-card">
                            <img src="images/buy.svg" className="feature-icon" />
                            <h6 className="feature-name">Recurring Buying</h6>
                            <p className="feature-para">Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                        </div>
                        <div className="col-md-4 feature-card">
                            <img src="images/api.svg" className="feature-icon" />
                            <h6 className="feature-name">Full API Integration</h6>
                            <p className="feature-para">Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                        </div>
                        <div className="col-md-4 feature-card">
                            <img src="images/lightbulb.svg" className="feature-icon" />
                            <h6 className="feature-name">Simple & Intuitive</h6>
                            <p className="feature-para">Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                        </div>
                    </div>

                </div>
                {/* end of container common */}
                </div>
                {/* end of features list */}
            </div>
            {/* end of feature one */}


            <div className="payment-features">
                <div className="row container-width Payment-section">
                    
                    <div className="col-md-6 payment-image">
                        <img src="images/multiple-payment-image.svg" alt="payment image" className="img-fluid" />
                    </div>
                    {/* end of payment image */}

                    <div className="col-md-6 payment-content">
                        
                        <h4 className="heading-top edit_heading">
                           Multiple payments easier on one platform.
                        </h4>
                        <p className="heading-subcontent edit_subcontent">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspissen varius elementum tristique.
                        </p>


                        <div className="feature-listing w-100 mt-5">
                            <ul>
                                
                                <li className="listing-style d-flex align-items-center mb-4">
                                    
                                    <div className="listing-icon mr-4">
                                        <img src="images/credit-card.png" alt="payment icon" />
                                    </div>
                                    {/* end of listing icon */}

                                    <div className="listing-content">
                                        <h6 className="feature-name m-0 mb-1">Secure Payment</h6>
                                        <p className="feature-para">varius enim in eros elementum tristique</p>
                                    </div>
                                    {/* end of listing content */}

                                </li>

                                <li className="listing-style d-flex align-items-center">
                                    
                                    <div className="listing-icon mr-4">
                                        <img src="images/location.png" alt="location icon" />
                                    </div>
                                    {/* end of listing icon */}

                                    <div className="listing-content">
                                        <h6 className="feature-name m-0 mb-1">Transaction Anywhere Any Time</h6>
                                        <p className="feature-para">varius enim in eros elementum tristique</p>
                                    </div>
                                    {/* end of listing content */}

                                </li>

                            </ul>
                        </div>
                        {/* end of feature listing */}

                    </div>
                    {/* end of payment iamge */}

                </div>
                {/* end of container width */}
            </div>
            {/* end of feature two */}


            <div className="control-features">
                <div className="row container-width Payment-section">

                    <div className="col-md-6 control-content">
                        
                        <h4 className="heading-top edit_heading">
                          Smarter cards keep you in full control.
                        </h4>
                        <p className="heading-subcontent edit_subcontent">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros tristique.
                        </p>

                        <div className="control-listing w-100 mt-5">
                            <ul>
                                
                                <li className="listing-style d-flex align-items-center mb-4">
                                    
                                    <div className="listing-icon mr-4">
                                        <img src="images/money.png" alt="money icon" />
                                    </div>
                                    {/* end of listing icon */}

                                    <div className="listing-content">
                                        <h6 className="feature-name m-0 mb-1">Total control over spending</h6>
                                        <p className="feature-para">varius enim in eros elementum tristique</p>
                                    </div>
                                    {/* end of listing content */}

                                </li>

                                <li className="listing-style d-flex align-items-center">
                                    
                                    <div className="listing-icon mr-4">
                                        <img src="images/accounting.png" alt="accounting icon" />
                                    </div>
                                    {/* end of listing icon */}

                                    <div className="listing-content">
                                        <h6 className="feature-name m-0 mb-1">accounts payable</h6>
                                        <p className="feature-para">varius enim in eros elementum tristique</p>
                                    </div>
                                    {/* end of listing content */}

                                </li>
                            </ul>
                        </div>
                        {/* end of feature listing */}

                    </div>
                    {/* end of payment iamge */}

                    <div className="col-md-6 payment-image">
                        <img src="images/smarter-card-image.svg" alt="smarter card image" className="img-fluid" />
                    </div>
                    {/* end of payment image */}

                </div>
                {/* end of container width */}
            </div>
            {/* end of feature three */}

        </section>
        {/* end of features section */}

        <section id="pricing">

            <div className="pricing-background"></div>
            
            <div className="pricing-section">
                
                <div className="features-heading">
                    <h4 className="heading-top">
                        market prices
                    </h4>
                    <p className="heading-subcontent">
                        Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature
                    </p>
                </div>
                {/* end of features heading */}

                <div className="pricing-content">
                    <div className="container-width">

                        <div className="pricing-search">
                            <form className="search" action="/action_page.php">
                                <input type="text" placeholder="Search from all the available coins" name="search" />
                                <i className="fa fa-search"></i>
                            </form>
                        </div>
                        {/* end of pricing search */}

                        <div className="pricing-table">
                            
                            <table className="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Change</th>
                                    <th scope="col">Market cap</th>
                                    <th scope="col">chart</th>
                                    <th scope="col">sell</th>
                                    <th scope="col">buy</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  
                                  <tr>
                                    <td className="table-name" scope="row">
                                        <img src="images/table-coin1.png" />
                                        <p>Bitcoin (BTC)</p>
                                    </td>
                                    <td>10791.43$</td>
                                    <td className="change-edit">+1.72%</td>
                                    <td>$190B</td>
                                    <td className="table-chart">
                                        <img src="images/table-chirt-1.png" />
                                    </td>
                                    <td>
                                        <a href="index.html" className="table-button">
                                            <button>Sell</button>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="index.html" className="table-button buy">
                                            <button>Buy</button>
                                        </a>
                                    </td>
                                  </tr>
                                 
                                  <tr>
                                    <td className="table-name" scope="row">
                                        <img src="images/table-coin2.png" />
                                        <p>Ethereum (ETH)</p>
                                    </td>
                                    <td>10791.43$</td>
                                    <td className="change-edit">+1.72%</td>
                                    <td>$190B</td>
                                    <td className="table-chart">
                                        <img src="images/table-chirt-1.png" />
                                    </td>
                                    <td>
                                        <a href="index.html" className="table-button">
                                            <button>Sell</button>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="index.html" className="table-button buy">
                                            <button>Buy</button>
                                        </a>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td className="table-name" scope="row">
                                        <img src="images/table-coin3.png" />
                                        <p>Ripple (XRP)</p>
                                    </td>
                                    <td>10791.43$</td>
                                    <td className="change-edit">+1.72%</td>
                                    <td>$190B</td>
                                    <td className="table-chart">
                                        <img src="images/table-chirt-1.png" />
                                    </td>
                                    <td>
                                        <a href="index.html" className="table-button">
                                            <button>Sell</button>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="index.html" className="table-button buy">
                                            <button>Buy</button>
                                        </a>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td className="table-name" scope="row">
                                        <img src="images/table-coin4.png" />
                                        <p>Litecoin (LTC)</p>
                                    </td>
                                    <td>10791.43$</td>
                                    <td className="change-edit">+1.72%</td>
                                    <td>$190B</td>
                                    <td className="table-chart">
                                        <img src="images/table-chirt-1.png" />
                                    </td>
                                    <td>
                                        <a href="index.html" className="table-button">
                                            <button>Sell</button>
                                        </a>
                                    </td>
                                    <td>
                                        <a href="index.html" className="table-button buy">
                                            <button>Buy</button>
                                        </a>
                                    </td>
                                  </tr>

                                </tbody>
                              </table>
                           
                        </div>
                        {/* end of pricing table */}

                    </div>
                    {/* end of container width */}
                </div>
                {/* end of pricing content */}

            </div>
            {/* end of pricing section */}

            <div className="pricing-video">

                <div className="features-heading">
                    <h4 className="heading-top">
                        take control of your expenses
                    </h4>
                    <p className="heading-subcontent">
                        Lorem Ipsum is not simply random text. It has roots in a Latin literature from making it
                    </p>
                </div>
                {/* end of features heading */}

                <div className="container-width expense-video">
                    <video poster="/images/video-background.svg" controls>
                        <source src="movie.mp4" type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                        Your browser does not support the video tag.
                     </video>

                     <div className="app-store-icon video-button">
                        <a href="#" className="app-icon video-icon">
                            <span className="iconback video">
                                <i className="fa fa-play" aria-hidden="true"></i>
                            </span>
                            <span className="video-content">Watch video now </span>                        </a>
                    </div>

                </div>
                {/* end of container width */}

            </div>
            {/* end of pricing video */}

        </section>
        {/* end of pricing section */}
        
        <section id="faq">
            
            <div className="features-heading">
                <h4 className="heading-top">
                    frequently asked questions
                </h4>
                <p className="heading-subcontent">
                    If you haven't found an answer to your question, contact us
                </p>
            </div>
            {/* end of faq heading */}

            <div className="faq-listing">
                
                <div className="container-width faqListing-width">
                    
                    <div className="accordion" id="faq-list">
                        
                        <div className="card">

                            <div className="card-header" id="faqhead1">
                                <a href="#" className="btn btn-header-link" data-toggle="collapse" data-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                    <img src="images/faq-icon.svg" alt="faq icon" className="faq-icon" />
                                        How can we get funding for our start up? 
                                </a>
                            </div>
    
                            <div id="faq1" className="collapse show" aria-labelledby="faqhead1" data-parent="#faq-list">
                                <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                    shoreditchil. 
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="faqhead2">
                                <a href="#" className="btn btn-header-link" data-toggle="collapse" data-target="#faq2" aria-expanded="true" aria-controls="faq2">
                                    <img src="images/faq-icon.svg" alt="faq icon" className="faq-icon" />
                                        Can i make extra payments on my car loan?
                                </a>
                            </div>
    
                            <div id="faq2" className="collapse" aria-labelledby="faqhead2" data-parent="#faq-list">
                                <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                    you probably them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="faqhead3">
                                <a href="#" className="btn btn-header-link" data-toggle="collapse" data-target="#faq3" aria-expanded="true" aria-controls="faq3">
                                    <img src="images/faq-icon.svg" alt="faq icon" className="faq-icon" />
                                        I am looking for a particular form, where can i find it? 
                                </a>
                            </div>
    
                            <div id="faq3" className="collapse" aria-labelledby="faqhead3" data-parent="#faq-list">
                                <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="faqhead4">
                                <a href="#" className="btn btn-header-link" data-toggle="collapse" data-target="#faq4" aria-expanded="true" aria-controls="faq4">
                                    <img src="images/faq-icon.svg" alt="faq icon" className="faq-icon" />
                                        What documentation is required when applying? 
                                </a>
                            </div>
    
                            <div id="faq4" className="collapse" aria-labelledby="faqhead4" data-parent="#faq-list">
                                <div className="card-body">
                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                                    proident.
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="faqhead5">
                                <a href="#" className="btn btn-header-link" data-toggle="collapse" data-target="#faq5" aria-expanded="true" aria-controls="faq5">
                                    <img src="images/faq-icon.svg" alt="faq icon" className="faq-icon" />
                                        What do I do if my financial situation changes? 
                                </a>
                            </div>
    
                            <div id="faq5" className="collapse" aria-labelledby="faqhead5" data-parent="#faq-list">
                                <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                                    moon officia aute, craft beer labore wes anderson cred nesciunt sapiente ea
                                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* end of accordion */}

                </div>
                {/* end of container width */}

            </div>
            {/* end of faq listing */}

        </section>
        {/* end of FAQ section */}
    
    </article>

</div>


    </>
    )
}


export default HomeContent;