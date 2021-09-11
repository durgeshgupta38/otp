import React, { useState,useEffect } from "react"
import { Link } from "react-router-dom";
import {getCurrentUser, logoutUser} from "../../apis/authenticationApis";
import {Button} from "@material-ui/core"
import AuthContext from "../../contexts/auth-context";
import { useContext } from "react";
import TopInfo from "./topInfo";
import BrandLogo from "./brandLogo";
import Navigation from "./navigation";
function Header() {


 const [currentUser, setCurrentUser]= useState(null);
 const authContext = useContext(AuthContext);
const handleLogout = () => {
  logoutUser();
  setCurrentUser(null);
}

// const renderSignInAndSignUp = () => {
//   return (
//     <div className="navbar-nav">
//       <Link exact class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
//       <Link className="nav-item nav-link" to="/login">Login</Link>
//       <Link className="nav-item nav-link" to="/register">Register</Link>
//     </div>
//   )
// }

// const renderSignOut = () => {
// return ( <div className="navbar-nav">
//     <Link class="nav-item nav-link" to="/wallet">Wallet</Link>
//     <Link class="nav-item nav-link" to="/profile">Profile</Link>
//   <Button onClick={handleLogout}>Logout</Button>
  
//   </div>)
// }

 useEffect(async ()=> {
  //let user  = await getCurrentUser();
  //setCurrentUser(user);
  authContext.handleAuth();
  setCurrentUser(authContext.isUsedLoggedIn);
 })


     return(
			    <div className="body-header">
        <header>
        
        <TopInfo />

            <div className="header-navigation" id="header">
                <div className="container-width navigation-wrapper">

                   <BrandLogo />
                
                    
                    <div className="navigation-menu" id="navigation">
                        <nav>
                            <ul className="m-0">
                               <Navigation />
                                <li>
                                {currentUser ? 
                                    <Link to="/" className="navigation-button" >
                                      <button onClick={handleLogout}>Logout</button>
                                    </Link>
                                : 
                                  
                                  <Link to="/login" className="navigation-button" >
                                    <button>Start now</button>
                                 </Link>
                                }
                                </li>
                            </ul>
                        </nav>
                    </div>
    
                
                </div>
       
            </div>


        </header>

    </div>

    )
    }

export default Header;
