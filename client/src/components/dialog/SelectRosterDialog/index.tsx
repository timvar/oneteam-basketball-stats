import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import ShowRoster from './ShowRoster';

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  selectedTeam: string;
}

const SelectRosterDialog: React.FC<Props> = ({
  modalOpen,
  onClose,
  onSubmit,
  selectedTeam,
}) => {
  const handleOK = () => {
    onSubmit();
  };

  return (
    <Dialog open={modalOpen} onClose={onClose}>
      <DialogContent>
        <ShowRoster selectedTeam={selectedTeam} />

        <Button
          onClick={handleOK}
          variant="outlined"
          type="submit"
          color="primary"
          style={{ marginBottom: 8, marginRight: 8 }}
        >
          OK
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SelectRosterDialog;
