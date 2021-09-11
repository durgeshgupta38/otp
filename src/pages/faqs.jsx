const Faqs=() =>{
return(
    <>

    <div className="body-banner faq">
        <h4 className="heading-top about">FAQ</h4>
    </div>
    {/* end of body banner */}

    <div className="body-container">
        
        <article>

            <section id="about-breadcrumbs">
                <div className="breadcrumbs-list">
                    <div className="container-width">
                        <ul className="breadcrumb px-0">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#" className="active">FAQ</a></li>
                        </ul>
                    </div>
                    {/* end of container width */}
                </div>
                {/* end of breadcrumbs */}
            </section>
            {/* end of about breadcrumbs section */}

            <section className="f-lists faq">

                <div className="f-headings w-100">
                    <div className="container-width">
                        <div className="row">
                            <div className="col-sm-12 col-md-8 offset-md-2 text-center">
                                <h4 className="heading-top">
                                    frequently asked questions
                                </h4>
                                <p className="heading-subcontent f-text">
                                    If you haven’t found an answer to your question, contact us
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* end of container width */}
                </div>
                {/* end of f list */}

                <div className="container-width">
                    <div className="faq-listing qtn">

                        <div className="pricing-search qtn">
                            <form className="search" action="/action_page.php">
                                <input type="text" placeholder="Enter your search terms" name="search"/>
                                <i className="fa fa-search"></i>
                            </form>
                        </div>
                        {/* end of pricing search */}


                        <div className="accordion" id="faq-list">
                            
                            <div className="card">
            
                                <div className="card-header" id="faqhead1">
                                    <a href="#" className="btn btn-header-link" data-toggle="collapse" data-target="#faq1" aria-expanded="true" aria-controls="faq1">
                                        <img src="images/faq-icon.svg" alt="faq icon" className="faq-icon"/>
                                        <span>How can we get funding for our start up?</span>
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
                                    <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2" aria-expanded="true" aria-controls="faq2">
                                        <img src="images/faq-icon.svg" alt="faq icon" className="faq-icon"/>
                                            <span>Can i make extra payments on my car loan?</span>
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
                                    <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq3" aria-expanded="true" aria-controls="faq3">
                                        <img src="images/faq-icon.svg" alt="faq icon" className="faq-icon"/>
                                            <span>I am looking for a particular form, where can i find it?</span>
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
                                    <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq4" aria-expanded="true" aria-controls="faq4">
                                        <img src="images/faq-icon.svg" alt="faq icon" className="faq-icon"/>
                                            <span>What documentation is required when applying?</span>
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
                                    <a href="#" className="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq5" aria-expanded="true" aria-controls="faq5">
                                        <img src="images/faq-icon.svg" alt="faq icon" className="faq-icon"/>
                                            <span>What do I do if my financial situation changes?</span>
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
                    {/* end of faq listing */}
                </div>
                {/* end of container width */}

            </section>
            {/* end of features listings section */}

            <section className="faq-contactDetail">
                <div className="f-headings w-100">
                    <div className="container-width">
                        
                        <div className="row mb-3">
                            <div className="col-sm-12 col-md-8 offset-md-2 text-center">
                                <h4 className="heading-top w-chng">
                                    Stay Up To Date With Any Kind Of Doubts!
                                </h4>
                                <p className="heading-subcontent f-text">
                                    Lorem ipsum dolor sit amet, ac donec hendrerit mi, fermentum ultricies, pellentesque harum luctus ut varius Maecenas lacust ipsum mi  Maecenas lacust ipsum mi.
                                </p>
                            </div>
                        </div>

                        <div className="details-box w-100 d-flex align-items-center justify-content-between">
                            <div className="box-common">
                                <img src="images/add-icon.svg" alt="address icon" className="add-img"/>
                                <h6 className="feature-name m-0 mb-1">address</h6>
                                <p className="feature-para px-4">123 Disney Street Slim Av. Brooklyn
                                    Bridge, NY, New York</p>
                            </div>
                            <div className="box-common">
                                <img src="images/call-icon.svg" alt="address icon" className="add-img"/>
                                <h6 className="feature-name m-0 mb-1">phone</h6>
                                <p className="feature-para px-4">+xx xxx xxx xxxx</p>
                                <p className="feature-para mb-0">+xx xxx xxx xxxx</p>
                            </div>
                            <div className="box-common">
                                <img src="images/mail-icon.svg" alt="address icon" className="add-img"/>
                                <h6 className="feature-name m-0 mb-1">email</h6>
                                <p className="feature-para px-4">contact@example.com</p>
                                <p className="feature-para mb-0">info@example.com</p>
                            </div>
                        </div>
                        {/* end of detail box */}

                    </div>
                    {/* end of container width */}
                </div>
                {/* end of f list */}
            </section>

        </article>
    
    </div>
    </>
)

}


export default Faqs;