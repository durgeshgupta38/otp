const ContactUs = () => {
    return (
        <>
              <div className="body-banner contact">
        <h4 className="heading-top about">Contact us</h4>
    </div>
    {/* end of body banner */}

    <div className="body-container">
        
        <article>

            <section id="about-breadcrumbs">
                <div className="breadcrumbs-list">
                    <div className="container-width">
                        <ul className="breadcrumb px-0">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="#" className="active">Contact us</a></li>
                        </ul>
                    </div>
                    {/* end of container width */}
                </div>
                {/* end of breadcrumbs */}
            </section>
            {/* end of about breadcrumbs section */}

            <section id="contact-form">
                <div className="container-width">

                    <div className="row btm-space">
                        
                        <div className="col-md-8">
                            <h4 className="heading-top">Contact form</h4>
                            <p className="heading-subcontent about-text">
                                Need to speak to us? Do you have any queries or suggestions?
                                Please contact us about all enquiries including membership and volunteer work using the form below.
                            </p>
                        
                            <div className="contact-userForm mt-5">
                                <form action="">

                                    <div className="field-one d-flex justify-content-between mb-1">
                                        <div className="contact-field">
                                            <div className="single-input">
                                                <span>
                                                  <img src="images/user.svg" alt="phone icon" className="user" />
                                                </span>
                                                <input type="number" placeholder="Name" required />
                                            </div>
                                        </div>
                                        <div className="contact-field">
                                            <div className="single-input">
                                                <span>
                                                  <img src="images/mail.svg" alt="mail icon" className="mail" />
                                                </span>
                                                <input type="text" placeholder="Email" required />
                                            </div>
                                        </div>
                                    </div>
                                    {/* end of field one */}

                                    <div className="field-one d-flex justify-content-between">
                                        <div className="contact-field">
                                            <div className="single-input">
                                                <span>
                                                  <img src="images/phone.svg" alt="phone icon" className="phone" />
                                                </span>
                                                <input type="tel" id="phone" name="phone" placeholder="phone number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                            </div>
                                        </div>
                                        <div className="contact-field">
                                            <div className="single-input">
                                                <span>
                                                  <img src="images/subject.svg" alt="subject icon" className="subject" />
                                                </span>
                                                <input type="text" placeholder="Subject" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* end of field one */}

                                    <div className="field-last d-flex justify-content-between">
                                        <div className="contact-field w-100">
                                            <div className="single-input txt">
                                                <span>
                                                  <img src="images/pen.svg" alt="pen icon" className="pen" />
                                                </span>
                                                <textarea id="message" name="umessage" placeholder="Type your message here..."></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end of field last */}

                                </form>
                            </div>
                            {/* end of contact user form */}

                            <a href="index.html" className="navigation-button about">
                                <button>Send message</button>
                            </a>

                        </div>
                        {/* end of col md 7 */}

                        <div className="col-md-4">

                            <div className="add d-flex align-items-start mb-3">
                                
                                <div className="add-icon">
                                    <img src="images/home.svg" alt="home icon"/>
                                </div>
                                {/* end of add icon */}

                                <div className="add-txt">
                                    <h6 className="feature-name mb-1">Address</h6>
                                    <p className="feature-para">
                                        123 Disney Street Slim Av. Brooklyn Bridge, NY, New York
                                    </p>
                                </div>
                                {/* end of add txt */}

                            </div>  
                            {/* end of address */}

                            <div className="add d-flex align-items-start mb-3">
                                
                                <div className="add-icon">
                                    <img src="images/colored-phone.svg" alt="phone icon"/>
                                </div>
                                {/* end of phone icon */}

                                <div className="add-txt">
                                    <h6 className="feature-name mb-1">phone</h6>
                                    <p className="feature-para"> +xx xxx xxx xxxx</p>
                                    <p className="feature-para"> +xx xxx xxx xxxx</p>
                                </div>
                                {/* end of phone txt */}

                            </div>  
                            {/* end of phone detail */}

                            <div className="add d-flex align-items-start mb-3">
                                
                                <div className="add-icon">
                                    <img src="images/email.svg" alt="mail icon"/>
                                </div>
                                {/* end of add icon */}

                                <div className="add-txt">
                                    <h6 className="feature-name mb-1">email</h6>
                                    <p className="feature-para"> contact@example.com </p>
                                    <p className="feature-para"> info@example.com </p>
                                   
                                </div>
                                {/* end of add txt */}

                            </div>  
                            {/* end of email detail */}

                            <div className="add d-flex align-items-start">
                                
                                <div className="add-icon">
                                    <img src="images/share.svg" alt="share icon"/>
                                </div>
                                {/* end of add icon */}

                                <div className="add-txt">
                                    <h6 className="feature-name mb-3">social profiles</h6>
                                    
                                    <div className="footer-socialIcons contact">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                        <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </div>
                                    {/* end of footer social icons */}

                                </div>
                                {/* end of add txt */}

                            </div>  
                            {/* end of email detail */}

                        </div>
                        {/* end of col md 5 */}

                    </div>
                    {/* end of row */}

                    <div className="row">
                        <div className="col-md-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.6020491395993!2d-73.99747138509579!3d40.704761245996174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3a68c3e995%3A0x16770ff7c9241e0c!2sBrooklyn%20Bridge%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1629897625090!5m2!1sen!2sin" className="google-map" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        {/* end of col 12 */}
                    </div>
                    {/* end of row */}

                </div>
                {/* end of container width */}
            </section>
            {/* end of about cozcos section */}
        
           
        </article>
    
    </div>  
        </>
    )
}

export default ContactUs;