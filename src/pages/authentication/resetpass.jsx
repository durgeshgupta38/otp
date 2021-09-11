import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { validateEmail, validatePassword } from "../../utils/common";
import { useState } from 'react';
import { passwordReset } from "../../apis/authenticationApis";
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
const ResetPassword = (props) => {
    const {classes} = props;
    const [email, setEmail] = useState('');
    const [emailErrorText, setEmaiErrorText] = useState('');
    const [dialogueText, setDialogueText] = useState("");
    const [isResetSuccess, setIsResetSuccess] = useState(false);

    const handleOk = () => {
        setDialogueText("");
        isResetSuccess && props.history.push("/");
    
    }

    const handleFormSubmit = () => {
        console.log("*********function called********");
        setEmaiErrorText("");
 
        let emailIsValid = false;


            if (validateEmail(email)) {
                console.log("*********Valid email****");
                emailIsValid = true
                setEmaiErrorText("");
            } else {
                console.log("*********InValid email****");
                setEmaiErrorText("Sorry, this is not a valid email");
            }

        if (emailIsValid ) {
            console.log("calling password reset")
            passwordReset(email).then((res) => {
                console.log("password reset done")
                if(res && res.data && res.data.status == 404) {
                    setDialogueText("Email id you entered don't exists. Please try with registered e-mail id");
                   // props.history.push("/login")
                }
                else {
                    setDialogueText("An Verification link has been sent to your email id. Please use that link to reset your password");
                    setIsResetSuccess(true);
                }
                
            }).catch((err) => {
                setDialogueText("An Error occured please try again");
            });
            // loginUser(email, password).then(
            //     () => {
            //       props.history.push("/profile");
            //      // window.location.reload();
            //     },
            //     error => {
            //       const resMessage =
            //         (error.response &&
            //           error.response.data &&
            //           error.response.data.message) ||
            //         error.message ||
            //         error.toString();
            //     }
          //  );
            return true;
        }
       // setShowError(true);
        return false;
    }
    let emailErrorClass = emailErrorText ? "email-validation-error" : "";
    return (
        <div className="wrap-body">

        <div className="body-container">
       
            <div className="wrapper">
    
                <div className="wrapper-content text-center">
    
                    <div className="content-width">
                        <img src="images/loginSignup-logo.svg" alt="brand logo" class="img-fluid logo-edit"/>
                        
                        <h4 className="main-heading">forgot password</h4>
    
                        <p className="forgot-subheading mb-4">Please enter your email. You will receive a link to create a new password via email.</p>
    
                        {/* <form action=""> */}
                            
                            <div className="single-input w-100 mb-3">
                              <span>
                                <img src="images/mail.svg" alt="mail icon" class="mail"/>
                              </span>
                              <input type="text" placeholder="Email"  value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="error-msg-wrap">
                            {emailErrorText && <span className="email-error-message">{emailErrorText}</span>}
                            </div>
                           
                            <button  class="btn btn-primary login-button w-100" data-toggle="modal" data-target="#emailModel" onClick={handleFormSubmit}>
                                send reset link
                            </button>
    
                            <p className="account-option p-0 m-0">Back to
                                <span>
                                    <Link href="Login.html">Login</Link>
                                </span>
                            </p>
                        {/* </form> */}
    
                    </div>
                    {/* end of content width */}
    
                </div>
                {/* end of wrapper content */}
    
                <div className="wrapper-image">
                    <img src="/images/Illustration.svg" alt="login illustration" className="img-fluid"/>
                </div>
                {/* end of wrapper image */}
    
            </div>
            {/* end of wrapper */}
            {dialogueText && <CustomDialogue dialogueMessage={dialogueText} clearDialogueText={()=>{ setDialogueText("")}} handleOk={handleOk} />}
        </div>
        {/* end of body container */}
    
        <div class="body_footer"></div>
        {/* end of body footer */}
    
    </div>
    )
}

export default withStyles(styles)(ResetPassword);