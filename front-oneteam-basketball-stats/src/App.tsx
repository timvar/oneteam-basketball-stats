import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import EventButtons from './EventButtons';
import PlayerButtons from './PlayerButtons';

const App: React.FC = () => {
  const [showPlayerButtons, SetShowPlayerButtons] = useState(true);
  return (
    <Container>
      {showPlayerButtons ? (
        <PlayerButtons showPlayerButtons={SetShowPlayerButtons} />
      ) : (
        <EventButtons showPlayerButtons={SetShowPlayerButtons} />
      )}
    </Container>
  );
};

export default App;
