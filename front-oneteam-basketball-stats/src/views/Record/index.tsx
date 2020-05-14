import React from 'react';
import EventButtons from '../../EventButtons';
import PlayerButtons from '../../PlayerButtons';

const Record: React.FC = () => {
  const [showPlayerButtons, SetShowPlayerButtons] = React.useState(true);
  return (
    <>
      {showPlayerButtons ? (
        <PlayerButtons showPlayerButtons={SetShowPlayerButtons} />
      ) : (
        <EventButtons showPlayerButtons={SetShowPlayerButtons} />
      )}
    </>
  );
};

export default Record;
