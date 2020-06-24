import React from 'react';
import RosterItem from './RosterItem';
import store, { getPlayers } from '../../../store';

interface Props {
  selectedTeam: string;
}

const ShowRoster: React.FC<Props> = ({ selectedTeam }) => {
  return (
    <div>
      {getPlayers(store.getState())
        .filter((p) => p.team === selectedTeam)
        .map((p) => (
          <RosterItem key={p.id} player={p} />
        ))}
    </div>
  );
};

export default ShowRoster;
