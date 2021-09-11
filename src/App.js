import { Route, Switch } from "react-router";
import { useLocation } from 'react-router-dom'
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Wallet from "./pages/wallet";
import Login from "./pages/authentication/login";
import RegisterForm from "./pages/authentication/registration";
import ActivateUser from "./pages/authentication/activateUser";
import VerifyMail from "./pages/authentication/verifyMail";
import ProtectedRoute from "./protectedRoutes";
import AdminRoute from "./adminRoute";
import UserProfile from "./pages/profile";
import AdminProfile from "./pages/profile/adminProfile";
import ResetPassword from "./pages/authentication/resetpass";
import ResetPasswordMessage from "./pages/authentication/resetPasswordMessage";
import SetPassword from "./pages/setPassword";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import Features from "./pages/features";
import Faqs from "./pages/faqs";
import './App.css';
import AuthContext from "./contexts/auth-context";
import HomeWithLayout from "./pages/home/homeWithLayout";
import { setPassword } from "./apis/authenticationApis";
import { useEffect, useState } from "react";
import { getCurrentUser } from "./apis/authenticationApis";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const currLoc = useLocation();
  const noHeaderFooterPages = ["/login","/register","/forgot-password"];
  const handleAuth = () => {
    const currentUser = getCurrentUser();
    if(currentUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }
  console.log("currLoc", currLoc);
  return (
    <div className="wrap-body">
      <AuthContext.Provider value={{isUsedLoggedIn: isLoggedIn, handleAuth: handleAuth}}>
      {!noHeaderFooterPages.includes(currLoc.pathname) && <Header/>}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path = "/login" component={Login} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/features" component={Features} />
        <Route path="/faq" component={Faqs} />
        {/* <Route path="/verifymail" component={VerifyMail} /> */}
        <Route path="/forgot-password" component={ResetPassword} />
        {/* <Route path="/mailToresetPassword" component={ResetPasswordMessage} /> */}
        <Route  path="/user/reset/:userId" component={SetPassword} />
        <ProtectedRoute path = "/wallet" component={Wallet} />
        <ProtectedRoute path="/profile" component={UserProfile} />
        <AdminRoute path="/admin" component={AdminProfile} />
        <Route  path="/user/activate/:token" component={ActivateUser} />
      </Switch>
      {!noHeaderFooterPages.includes(currLoc.pathname) && <Footer/>}
      </AuthContext.Provider>
    </div>
  ) 
}
// function Appnew() {
//   return (
//     <div>
//       <Switch>
//         <Route exact path="/" component={HomeWithLayout} />
//         <Route path = "/wallet" component={Wallet} />
//       </Switch>
//     </div>
//   )
   
// }

export default App;
