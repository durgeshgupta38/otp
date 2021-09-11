import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Paper, withStyles, Grid, FormControlLabel, Checkbox } from '@material-ui/core';
import { validateUsername, validateEmail, validatePassword, validateConfirmPassword } from "../../utils/common";
import { registerUser, loginUser } from "../../apis/authenticationApis";
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


const Form = (props) => {
//   const classes = useStyles();
let { classes } = props;
console.log("register props",props)
  // create state variables for each input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState('');
    const [nameErrortext, setNameErrorText] = useState("");
  const [emailErrorText, setEmaiErrorText] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [confirmErrorText, setConfirmErrorText] = useState("");
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [tncChecked, setTncChecked] = useState(false);
  const [dialogueText, setDialogueText] = useState("");
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [tncErrorText, setTncErrorText] = useState("");
//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(firstName, lastName, email, password);
//     handleClose();
//   };
const  handleShowPasswordClick = () => {
setShowPassword(!showPassword);
}

const  handleShoConfirmwPasswordClick = () => {
    setShowConfirmPassword(!showConfirmPassword);
 }
    const handleCheckBox = () => {
        setTncChecked(!tncChecked);
        
        console.log("Yes");
    }
    const handleOk = () => {
        setDialogueText("");
        isRegisterSuccess && props.history.push("/");

    }
    const handleFormSubmit = () => {
        console.log("*********function called********");
        setNameErrorText("");
        setEmaiErrorText("");
        setPasswordErrorText("");
        setConfirmErrorText("");
        setTncErrorText("");
        let emailIsValid = false;
        let passwordIsValid = false;
        //change this to false when you implment nameValid
        let nameValid = false;
        let confirmPassValid = false;

        if (validateUsername(name)) {
            console.log("*************Valid Name*********");
            nameValid = true;
            setNameErrorText("");
        }
        else {
            console.log("*************Not a valid name**********");
            setNameErrorText("Not A valid Name");
        }

        // if (email === "") {
        //     setEmaiErrorText("");
        // } else {
            if (validateEmail(email)) {
                console.log("*********Valid email****");
                emailIsValid = true
                setEmaiErrorText("");
            } else {
                console.log("*********InValid email****");
                setEmaiErrorText("Sorry, this is not a valid email");
            }
        //}
        // if (password === "" || !password) {
        //     setPasswordErrorText("");
        // } else {
            const passwordError = validatePassword(password);
            console.log("password error length", passwordError.length);
            console.log(passwordError);
            if (passwordError.length) {
                setPasswordErrorText(passwordError)
            }
            else {
                passwordIsValid = true;
            }
      //  }
        if(validateConfirmPassword(password,confirmPassword)) {
            confirmPassValid = true;
            console.log("**********password matched*******");
        } else {
            console.log("***********passowrd and confirm password must be equal****");
            setConfirmErrorText("passowrd and confirm password must be equal");
        }

        !tncChecked && setTncErrorText("Please check the Terms & Conditions");

        if (emailIsValid && passwordIsValid && confirmPassValid && nameValid && tncChecked) {
            registerUser(name, email, password ).then((res) =>{
               // loginUser(email, password)
            console.log("Redirecting to verify mail", res);
            if(res && res.data && res.data.isSuccess == false) {
                setDialogueText("Email already exist. Please login using this email or try registration with different email.");
               // props.history.push("/login")
            }
            else {
                setDialogueText("Resigterd successfully. Please click verification link sent in the mail to activate your account.");
                setIsRegisterSuccess(true);
            }
           
            //    props.history.push("/verifymail")
            }
            ).catch((err) => {
                console.log(err);
                setDialogueText("Something wen wrong. Please try again.");
            });
           
            return true;
        }
        setShowError(true);
        return false;
    }
 
  let emailErrorClass = emailErrorText ? "email-validation-error" : "";
  let nameErrorClass = nameErrortext ? "name-validation-error" : "";
  let passwordErrorClass = passwordErrorText ? "password-validation-error" : "";
  let confirmErrorClass = confirmErrorText ? "confirm-validation-error" : ""; 
  let tncErrorClass = !tncChecked ? "tnc-validation-error" : "";

   return (
    <div className="wrap-body">

    <div className="body-container">
    
        <div className="wrapper">

            <div className="wrapper-content text-center">

                <div className="content-width">
                    <img src="images/loginSignup-logo.svg" alt="brand logo" className="img-fluid logo-edit"/>
                    
                    <h4 className="main-heading">get started</h4>

                    {/* <form action=""> */}
                        
                        <div className={`single-input w-100 ${nameErrorClass}`}> 
                          <span>
                            <img src="images/user.svg" alt="mail icon" className="user"/>
                          </span>
                          <input type="text" placeholder="Username" value={name} onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="error-msg-wrap">
                        {nameErrortext && <span className="name-error-message">{nameErrortext}</span>}
                        </div>
                        <div className={`single-input w-100 ${emailErrorClass}`}>
                            <span>
                              <img src="images/mail.svg" alt="mail icon" className="mail"/>
                            </span>
                            <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                           
                        </div>
                        <div className="error-msg-wrap">
                            {emailErrorText && <span className="email-error-message">{emailErrorText}</span>}
                        </div>
                        <div className={`single-input w-100 ${passwordErrorClass}`}>
                            <span>
                              <img src="images/lock.svg" className="lock" alt="lock icon" />
                            </span>
                            <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                            <span>
                                {showPassword ? <VisibilityOffIcon onClick={handleShowPasswordClick}/> : <VisibilityIcon onClick={handleShowPasswordClick} />}
                            </span>
                          </div>
                        <div className="error-msg-wrap">
                            {passwordErrorText && <span className="password-error-message">{passwordErrorText}</span>}
                        </div>
                        <div className={`single-input w-100 mb-0 ${confirmErrorClass}`}>
                          <span>
                            <img src="images/lock.svg" className="lock" alt="lock icon"/>
                          </span>
                          <input type={showConfirmPassword ? 'text' : 'password'} placeholder="confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                          <span>
                                {showConfirmPassword ? <VisibilityOffIcon onClick={handleShoConfirmwPasswordClick}/> : <VisibilityIcon onClick={handleShoConfirmwPasswordClick} />}
                          </span>
                         
                        </div>
                        <div className="error-msg-wrap mb-4">
                         {confirmErrorText && <span clasName="confirm-error-message">{confirmErrorText}</span>}
                        </div>
                        <div className="optional-contents">
                            
                            <div className={`logged-in ${tncErrorClass}`}>
                                <label className="account-option">
                                    <input type="checkbox" onChange={handleCheckBox} />
                                    I agree to all the
                                    <span>
                                        <Link to="/tnc">terms & conditions</Link>
                                    </span> 
                                </label>
                                <div className="error-msg-wrap">
                            {tncErrorText && <span className="tnc-error-message">{tncErrorText}</span>}
                             </div>
                            </div>
                            {/* end of logged in */}

                        </div>
                        {/* end of optional contents */}

                        <button className="btn btn-primary login-button w-100" onClick={handleFormSubmit}>
                            register
                        </button>

                        <p className="account-option p-0 m-0">Already have an account?
                            <span>
                                <Link to="/login">Login</Link>
                            </span>
                        </p>
                    {/* </form> */}

                </div>
                {/* end of content width */}

            </div>
            {/* end of wrapper content */}

            <div className="wrapper-image">
                <img src="images/Illustration.svg" alt="login illustration" className="img-fluid"/>
            </div>
            {/* end of wrapper image */}

        </div>
        {/* end of wrapper */}
        {dialogueText && <CustomDialogue dialogueMessage={dialogueText} clearDialogueText={()=>{ setDialogueText("")}} handleOk={handleOk} />}
    </div>
    {/* end of body container */}

    <div className="body_footer"></div>
    {/* end of body footer */}

</div>

   
  );
};

export default withStyles(styles)(Form);