import React from 'react';
import Box from '@material-ui/core/Box';
import store, { getTeams } from '../../store';
import TeamSelect from '../../components/select/TeamSelect';
import { Team } from '../../store/team/types';
import { Game } from '../../store/game/types';
import teamService from '../../services/teams';
import GameTable from '../../components/table/GameTable';

const Statselect: React.FC = () => {
  const [games, setGames] = React.useState<Game[]>([]);

  const handleTeamSelect = async (team: Team['id']) => {
    console.log('team: ', team);
    const gameData = await teamService.getGamesByTeam(team);
    console.log(games);
    setGames(gameData);
  };

  return (
    <>
      <Box mt={1}>
        <TeamSelect
          teams={getTeams(store.getState())}
          submit={handleTeamSelect}
        />
      </Box>
      <GameTable games={games} />
    </>
  );
};

export default Statselect;
