import {Link} from "react-router-dom"
const Navigation = () => {
    const navData =[
         {
            name: 'Home',
            to: "/",
            classname: ""
        },
        {
            name: "Features",
            to: "/features",
            classname: ""
        },
       {
            name: "Pricing",
            to: "/pricing",
            classname: ""
        },
         {
            name: "FAQ",
            to: "/faq",
            classname: ""
        },
         {
            name: "Contact",
            to: "/contact-us",
            classname:""
        }
    ]


    return (
        navData.map((data) => {
            return (
                <li> 
                      <Link to={data.to} className={data.classname}>{data.name}</Link>
                </li>
            )
        })
    )

}

export default Navigation;