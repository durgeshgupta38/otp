import { Link } from "react-router-dom";
import ContentOne from "./contentOne";
import ContentTwo from "./contentTwo";
import ContentThree from "./contentThree";
const MainFooter = () => {
  //  [[],[],[]]   -- structure for content data

  const contentData = [
    [
        {
            to: "/about-us",
            name: "About Us"
        },
        {
            to: "/contact",
            name: "Contact Us"
        },
        {
            to: "/blog",
            name: "Blog"
        }

    ],
    [
        {to:"/faq", name:"FAQ"},
        {to:"/contact", name:"Contact Us"},
        {to:"/knowledge", name:"Knowledge base"}
    ],
    [
        {to:"/terms-of-use", name:"Terms of use"},
        {to:"/privacy-policy", name:"Privacy Policy"},
        {to:"/refund-policy", name:"Refund Policy"}
    ],
    [
        {to:"/faq", name:"FAQ"},
        {to:"/contact", name:"Contact Us"},
        {to:"/knowledge", name:"Knowledge base"}
    ]

  ];
    return (
        <footer className="footer-main">
    
        <div className="container-width">
        
        <div className="footer_content footer_spacing d-flex flex-md-row flex-column justify-content-between w-100">
            <ContentOne />
         
           {/* end of content_one */}

          <ContentTwo />
           {/* end of content_two */}

           <ContentThree/>
           {/* end of content_three */}

           <div className="content_four">
               
            <div className="footer_heading">
                policy
            </div>
            {/* end of footer heading */}

            <div className="footer_lists">
                 <ul>
                     <li className="common_lists"><a href="#" className="common_links">terms of use</a></li>
                     <li className="common_lists"><a href="#" className="common_links">privacy policy</a></li>
                     <li className="common_lists"><a href="#" className="common_links">refund policy</a></li>
                 </ul>
            </div>
            {/* end of footer lists */}

           </div>
           {/* end of content_four */}

           <div className="content_five">
               
            <div className="footer_heading">
                contacts
            </div>
            {/* end of footer heading */}

            <div className="footer_lists">
                 <ul>
                     <li className="common_lists"><a href="#" className="common_links">support@cozmos</a></li>
                     <li className="common_lists"><a href="#" className="common_links">+372 624 6211</a></li>
                     <li className="common_lists"><a href="#" className="common_links">+372 624 600</a></li>
                 </ul>
            </div>
            {/* end of footer lists */}

           </div>
           {/* end of content_five */}   
    
        </div>
        {/* end of footer_content */}

        <div className="footer_copyright d-flex flex-md-row flex-column justify-content-between align-items-center w-100">
            
            <div className="copyright_content">
                <p className="p-0 m-0">Copyright © 2021. All Rights Reserved By <span className="brand_text">Cozmos</span></p>
            </div>

            <div className="footer-socialIcons">
                <i className="fa fa-facebook" aria-hidden="true"></i>
                <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-google-plus" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
            {/* end of footer social icons */}

        </div>
        {/* end of footer copyright */}

        </div>
        {/* end of container width */}

    </footer>
  
    )
}

export default MainFooter;