import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import ShowRoster from './ShowRoster';
import RosterOkButton from '../../button/RosterOkButton';

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
        <RosterOkButton action={handleOK} />
      </DialogContent>
    </Dialog>
  );
};

export default SelectRosterDialog;
