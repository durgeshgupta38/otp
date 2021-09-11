import { useEffect, useState } from "react";
import {activateUser} from "../../apis/authenticationApis";
import CustomDialogue from "../../components/dialogues/customDialogue";
const ActivateUser = (props) =>{
    const [isActivated, setIsActivated] = useState(false);
    const handleOk = () => {
       // setDialogueText("");
        isActivated && props.history.push("/login");
    
    }
    useEffect(()=>{
        console.log("props in activation  ",props);
        const token = props?.match?.params?.token;
        console.log("token", token);
        activateUser(token).then((res) => {
            setIsActivated(true);
            console.log("******response after activation***",res);
        })
    })
    return(
        <div>
            
            {isActivated ? <CustomDialogue dialogueMessage="Welcome, Your account is activated"  handleOk={handleOk} /> : <span>
                Please wait..
            </span> }
        
        </div>
    )
}

export default ActivateUser;