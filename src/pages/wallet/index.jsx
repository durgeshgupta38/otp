import SendBnbForm from "../../components/dialogues/sendBnbDialogue";
import SendTokenForm from "../../components/dialogues/sendTokenDialogue";

const Wallet = () => {
    return(
       <div>
           <h1>Wallet Page</h1>
           <SendBnbForm />
           <SendTokenForm />
       </div>
    )
};

export default Wallet;