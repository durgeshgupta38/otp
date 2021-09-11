import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(true);
  // useEffect(() => {
  //   setOpen(true);
  // }, [props]);

  const handleClose = () => {
    setOpen(false);
    props.clearDialogueTex && props.clearDialogueText();
    props.handleOk && props.handleOk();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className="pop-msg">
          <DialogContentText id="alert-dialog-description">
         {props.dialogueMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions className="text-center">
          <Button onClick={handleClose} color="primary btn btn-primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
