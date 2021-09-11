import LogoImage from "../logoImage";
const Logo = () => {
return(
    <div className="navigation-brand">
    <a href="#" target="_self">
        <LogoImage className="nav-logo" />
        {/* <img src="/images/logo.png" alt="brand logo" className="nav-logo" /> */}
    </a>
</div>
)

}


export default Logo;