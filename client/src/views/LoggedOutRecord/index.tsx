import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EventButtons from '../../EventButtons';
import PlayerButtons from '../../PlayerButtons';
import { setHeaderTitle } from '../../store/header/actions';

const LoggedOutRecord: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPlayerButtons, setShowPlayerButtons] = React.useState<boolean>(
    true
  );

  const handleFinishRecording = () => {
    dispatch(setHeaderTitle('Stat'));
    history.push('/loggedoutstats');
  };

  return (
    <>
      {showPlayerButtons ? (
        <PlayerButtons
          showPlayerButtons={setShowPlayerButtons}
          finishRecording={handleFinishRecording}
        />
      ) : (
        <EventButtons showPlayerButtons={setShowPlayerButtons} />
      )}
    </>
  );
};

export default LoggedOutRecord;
