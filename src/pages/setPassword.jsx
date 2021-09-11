import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Paper, withStyles, Grid, FormControlLabel } from '@material-ui/core';
import { validatePassword, validateConfirmPassword } from "../utils/common";
import {changePassword} from "../apis/authenticationApis";
import { Link } from 'react-router-dom';
import CustomDialogue from "../components/dialogues/customDialogue";
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
//   const classNamees = useStyles();
let { classNamees } = props;
console.log("setPassword props",props)
  // create state variables for each input
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [confirmErrorText, setConfirmErrorText] = useState("");
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showError, setShowError] = useState(false);

  const [dialogueText, setDialogueText] = useState("");
  const [isResetSuccess, setIsResetSuccess] = useState(false);

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(firstName, lastName, email, password);
//     handleClose();
//   };


const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
}
    
const handleShoConfirmwPasswordClick = () => {
    setShowConfirmPassword(!showConfirmPassword);
}


const handleOk = () => {
    setDialogueText("");
    isResetSuccess && props.history.push("/login");

}

    const handleFormSubmit = () => {
        console.log("*********function called********"); 
        setPasswordErrorText("");
        setConfirmErrorText(""); 
        let passwordIsValid = false; 
        let confirmPassValid = false;
      
         
      
            const passwordError = validatePassword(password);
            console.log("password error length", passwordError.length);
            console.log(passwordError);
            if (passwordError.length) {
                setPasswordErrorText(passwordError)
            }
            else {
                passwordIsValid = true;
            }
      
        if(validateConfirmPassword(password,confirmPassword)) {
            confirmPassValid = true;
            console.log("**********password matched*******");
        } else {
            console.log("***********passowrd and confirm password must be equal****");
            setConfirmErrorText("passowrd and confirm password must be equal");
        }

        if (passwordIsValid && confirmPassValid) {
            changePassword(props.match.params.userId,password, confirmPassword ).then(() =>{
               // loginUser(email, password)
               console.log("Reset password done");
               setDialogueText("Password reset successfull");
               setIsResetSuccess(true);
            //    props.history.push("/verifymail")
            }
            ).catch((error) => {
                setDialogueText("Something wen wrong, Please try again");
            });
            
      
            return true;
        }
        setShowError(true);
        return false;
    }
    // const handleSubmit = () => {
    //     console.log("*********handle submit********");
    //     let isFormValid = isDisabled();
    //     if (isFormValid) {
    //         // send details to api
    //         regusterUser(name, email, password );
    //     } else {
    //         //perventdefaailt;
    //         setShowError(true);
    //     }
    // }
    // const login = () => {
    //   //  createUser(this.state.email, this.state.password);
    //     // this.setState({
    //     //     open: false
    //     // });
    // }


    let passwordErrorClass = passwordErrorText ? "password-validation-error" : "";
    let confirmErrorClass = confirmErrorText ? "confirm-validation-error" : ""; 

  return (
    <div className="wrap-body">

    <div className="body-container">

        <div className="wrapper">

            <div className="wrapper-content text-center">

                <div className="content-width">
                    <img src="/images/loginSignup-logo.svg" alt="brand logo" className="img-fluid logo-edit"/>
                    
                    <h4 className="main-heading mb-5">Reset password</h4>


                        
                    <div className={`single-input w-100 ${passwordErrorClass}`}>
                            <span>
                              <img src="/images/lock.svg" className="lock" alt="lock icon"/>
                            </span>
                            <input type={showPassword ? "text" : "password"} placeholder="New Password" value={password} onChange={e => setPassword(e.target.value)} />
                            <span>
                                {showPassword ? <VisibilityOffIcon onClick={handleShowPasswordClick}/> : <VisibilityIcon onClick={handleShowPasswordClick} />}
                            </span>
                        </div>
                        <div className="error-msg-wrap mb-4">
                         {passwordErrorText && <span clasName="confirm-error-message">{passwordErrorText}</span>}
                        </div>
                        <div className={`single-input w-100 mb-0 ${confirmErrorClass}`}>
                            <span>
                              <img src="/images/lock.svg" className="lock" alt="lock icon"/>
                            </span>
                            <input type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}  />
                            <span>
                                {showConfirmPassword ? <VisibilityOffIcon onClick={handleShoConfirmwPasswordClick}/> : <VisibilityIcon onClick={handleShoConfirmwPasswordClick} />}
                          </span>
                        </div>
                        <div className="error-msg-wrap mb-4">
                         {confirmErrorText && <span clasName="confirm-error-message">{confirmErrorText}</span>}
                        </div>
                        <button  className="btn btn-primary login-button w-100" data-toggle="modal" data-target="#emailModel" onClick={handleFormSubmit}>
                            save new password
                        </button>

                        <p className="account-option p-0 m-0">Back to
                            <span>
                                <Link to="/login">Login</Link>
                            </span>
                        </p>


                </div>
              

            </div>
      

            <div className="wrapper-image">
                <img src="/images/Illustration.svg" alt="login illustration" className="img-fluid"/>
            </div>
         

        </div>
        {dialogueText && <CustomDialogue dialogueMessage={dialogueText} clearDialogueText={()=>{ setDialogueText("")}} handleOk={handleOk} />}
    </div>
  

    <div className="body_footer"></div>
   

</div>
  );
};

export default withStyles(styles)(Form);