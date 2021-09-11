import { Link } from "react-router-dom";
const ContentTwo = () => {
    const footerList = [
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

    ];
    return (
        <div className="content_two">
               
        <div className="footer_heading">
            Company
        </div>
        {/* end of footer heading */}

        <div className="footer_lists">
             <ul>
                 {footerList.map(item => 
                   <li className="common_lists"><Link to={item.to} className="common_links">{item.name}</Link></li>
                 )}
                 {/* <li className="common_lists"><Link to="about-us" className="common_links">About us</Link></li>
                 <li className="common_lists"><a href="#" className="common_links">contact us</a></li>
                 <li className="common_lists"><a href="#" className="common_links">blog</a></li> */}
             </ul>
        </div>
        {/* end of footer lists */}

    </div>
    )
}
export default ContentTwo;