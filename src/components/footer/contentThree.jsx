import { Link } from "react-router-dom";

const ContentThree = () =>{
    const footerList = [
        {to:"/faq", name:"FAQ"},
        {to:"/contact", name:"Contact Us"},
        {to:"/knowledge", name:"Knowledge base"}
    ]

    return(
        <div className="content_three">
               
        <div className="footer_heading">
            support
        </div>
        {/* end of footer heading */}

        <div className="footer_lists">
             <ul>
                 {footerList.map(item =><li className="common_lists"><Link to={item.to} className="common_links">{item.name}</Link></li>)}
                 {/* <li className="common_lists"><a href="#" className="common_links">FAQ</a></li>
                 <li className="common_lists"><a href="#" className="common_links">contact us</a></li>
                 <li className="common_lists"><a href="#" className="common_links">knowledge base</a></li> */}
             </ul>
        </div>
        {/* end of footer lists */}

       </div> 
    )

}
export default ContentThree;