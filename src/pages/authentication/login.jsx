import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { validateEmail, validatePassword } from "../../utils/common";
import { loginUser } from "../../apis/authenticationApis";
import { useState, useContext } from 'react';
import AuthContext from "../../contexts/auth-context";
import { Link } from 'react-router-dom';
import CustomDialogue from "../../components/dialogues/customDialogue";
const styles = theme => ({
    margin: {
    margin: theme.spacing.unit * 2,
    },
    padding: {
    padding: theme.spacing.unit
    },
    container: {
        width: '450px',
        margin: "0 auto",
        marginTop:"10%",
        marginBottom: "9%"
    }
});

const Login = (props) =>{
    let { classes } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErrorText, setEmaiErrorText] = useState('');
    const [passwordErrorText, setPasswordErrorText] = useState("");
    const [showError, setShowError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [dialogueText, setDialogueText] = useState("");
    const authContext = useContext(AuthContext);
    const handleShowPasswordClick = () => {
        setShowPassword(!showPassword);
    }
    // const handleForgotClick = () => {
    //     props.history.push("/forgot-password");
    // }

    const handleFormSubmit = () => {
        console.log("*********function called********");
        setEmaiErrorText("");
        setPasswordErrorText("");
        setDialogueText("");
        let emailIsValid = false;
        let passwordIsValid = false;

            if (validateEmail(email)) {
                console.log("*********Valid email****");
                emailIsValid = true
                setEmaiErrorText("");
            } else {
                console.log("*********InValid email****");
                setEmaiErrorText("Sorry, this is not a valid email");
            }

            // const passwordError = validatePassword(password);
            // console.log("password error length", passwordError.length);
            // console.log(passwordError);
            // if (passwordError.length) {
            //     setPasswordErrorText(passwordError)
            // }
            // else {
            //     passwordIsValid = true;
            // }

        if (emailIsValid ) {
            loginUser(email, password).then(
                (res) => {
                    console.log(res);
                    if (res.data && res.data.token) {
                    
                        authContext.handleAuth();
                      props.history.push("/profile");
                      }
                      else {
                        res.data && setDialogueText(res.data.message);
                      }
                 
                 // window.location.reload();
                }).catch(
                error => {
                //   const resMessage =
                //     (error.response &&
                //       error.response.data &&
                //       error.response.data.message) ||
                //     error.message ||
                //     error.toString();
                setDialogueText("Something went wrong. Please try again");
                }
            );
            return true;
        }
        setShowError(true);
        return false;
    }
    let emailErrorClass = emailErrorText ? "email-validation-error" : "";
    return(
    
<div className="wrap-body">

<div className="body-container">

    <div className="wrapper">

        <div className="wrapper-content text-center">

            <div className="content-width">
                <img src="images/loginSignup-logo.svg" alt="brand logo" className="img-fluid logo-edit" />
                
                <h4 className="main-heading">welcome back</h4>
        
                <a href="#" className="btn btn-primary w-100 google-button">
                    <img src="images/google-image.svg" alt="google image" className="img-fluid google-edit" />
                    Login with Google
                </a>

                <p className="optional">or login with email</p>

                {/* <form action=""> */}
                    
                    <div className={`single-input w-100 ${emailErrorClass}`}>
                      <span>
                        <img src="images/mail.svg" alt="mail icon" className="mail" />
                      </span>
                      <input type="text" placeholder="Email" value={email}  onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className="error-msg-wrap">
                            {emailErrorText && <span className="email-error-message">{emailErrorText}</span>}
                    </div>
                    <div className="single-input w-100 mb-4">
                      <span>
                        <img src="images/lock.svg" className="lock" alt="lock icon" />
                      </span>
                      <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                      <span>
                                {showPassword ? <VisibilityOffIcon onClick={handleShowPasswordClick}/> : <VisibilityIcon onClick={handleShowPasswordClick} />}
                      </span>
                    </div>
                   
                    <div className="optional-contents">
                        
                        <div className="logged-in">
                            <label>
                                <input type="checkbox" />
                                Keep me logged in
                            </label>
                        </div>
                        {/* {// end of logged in --> */}

                        <div className="forgot_password">
                            <Link to="/forgot-password">Forgot password?</Link>
                        </div>
                        {/* {// end of forgot password --> */}

                    </div>
                    {/* {// end of optional contents --> */}

                    <button onClick={handleFormSubmit} className="btn btn-primary login-button w-100">
                        login
                    </button>

                    <p className="account-option p-0 m-0">Don't have an account?
                        <span>
                            <Link to="register">Register</Link>
                        </span>
                    </p>
                {/* </form> */}

            </div>
            {/* {// end of content width --> */}

        </div>
        {/* {// end of wrapper content --> */}

        <div className="wrapper-image">
            <img src="images/Illustration.svg" alt="login illustration" className="img-fluid" />
        </div>
        {/* {// end of wrapper image --> */}

    </div>
    {/* {// end of wrapper --> */}
    {dialogueText && <CustomDialogue dialogueMessage={dialogueText} clearDialogueText={()=>{ setDialogueText("")}} />}
</div>
{/* {// end of body container --> */}

<div className="body_footer"></div>
{/* {// end of body footer --> */}

</div>
    )
}


export default Login;

{/* export default withStyles(styles)(Login); */}