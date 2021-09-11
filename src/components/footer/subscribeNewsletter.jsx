const SubscribeToNewsLetter = () => {
    return (
        <div className="download-application">
            <div className="container-width">
                
               <div className="row text-center">
                   <div className="col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                       <h5 className="subfooter-hd mb-2">Subscribe to our newsletter!</h5>
                       <p className="subfooter-para">Lorem ipsum dolor sit amet, consectetur complete text is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts.</p>
                    
                       <div className="f-subscribe">
                           <input type="email" placeholder="Enter your email" className="sbs-input"/>
                           <a href="#" className="btn btn-danger sbs-btn" role="button">subscribe</a>
                        </div>
                    </div>
               </div>
               {/* end of row */}

            </div>
            {/* end of container width */}
        </div> 
    )
}

export default SubscribeToNewsLetter;