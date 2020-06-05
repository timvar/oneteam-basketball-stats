import React from 'react';
import store, { getTeams } from '../../store';
import TeamSelect from '../../components/selects/TeamSelect';
import { Team } from '../../store/team/types';

const Statselect: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleTeamSelect = (team: Team['id']) => {
    console.log('team: ', team);
    
  };

  return (
    <>
      <TeamSelect
        teams={getTeams(store.getState())}
        submit={handleTeamSelect}
      />
    </>
  );
};

export default Statselect;
