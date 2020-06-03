import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
  dialogOpen: boolean;
  onClose: () => void;
  onSubmit: (response: boolean) => void;
}

const AlertDialog: React.FC<Props> = ({ dialogOpen, onClose, onSubmit }) => {
  const handleCancel = () => {
    onSubmit(false);
  };

  const handleFinish = () => {
    onSubmit(true);
  };

  return (
    <div>
      <Dialog
        open={dialogOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Foo</DialogTitle>
        <DialogContent>
          <DialogContentText>Finish recording?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFinish} color="primary">
            Finish
          </Button>
          <Button onClick={handleCancel} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
