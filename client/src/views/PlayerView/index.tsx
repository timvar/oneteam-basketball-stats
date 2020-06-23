import React from 'react';
import { useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import PlayerItem from '../../components/ListItem';
import { Player, PlayerInput } from '../../store/player/types';
import { Team } from '../../store/team/types';
import PlayerAddDialog from '../../components/dialog/PlayerAddDialog';
import PlayerUpdateDialog from '../../components/dialog/PlayerUpdateDialog';
import store, { getPlayers, getTeams } from '../../store';
import { addPlayer, updatePlayer } from '../../store/player/actions';
import TeamSelect from '../../components/select/TeamSelect';
import PersonAddButton from '../../components/button/PersonAddButton';

const PlayerView: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedTeam, setSelectedTeam] = React.useState<Team['id']>('');
  const [addDialogOpen, setAddDialogOpen] = React.useState<boolean>(false);
  const [updateDialogOpen, setUpdateDialogOpen] = React.useState<boolean>(
    false
  );
  const [player, setPlayer] = React.useState<Player>({
    id: '',
    playerName: '',
    team: '',
    playerNumber: 0,
  });

  const openAddDialog = (): void => {
    setAddDialogOpen(true);
  };
  const closeAddDialog = (): void => {
    setAddDialogOpen(false);
  };

  const openUpdateDialog = (playerToUpdate: Player): void => {
    setPlayer(playerToUpdate);
    setUpdateDialogOpen(true);
  };

  const closeUpdateDialog = (): void => {
    setUpdateDialogOpen(false);
  };

  const handleAddPlayer = async (values: PlayerInput) => {
    closeAddDialog();
    try {
      dispatch(addPlayer(values));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleUpdatePlayer = (values: Player): void => {
    closeUpdateDialog();
    dispatch(updatePlayer(values));
  };

  const handleTeamSelect = (value: Team['id']) => {
    setSelectedTeam(value);
  };

  return (
    <div>
      <Box mt={2} mx={2} mb={2}>
        <TeamSelect
          teams={getTeams(store.getState())}
          submit={handleTeamSelect}
        />
      </Box>
      {getPlayers(store.getState())
        .filter((p) => p.team === selectedTeam)
        .map((p) => (
          <PlayerItem
            key={p.id}
            player={p}
            handlePlayerUpdate={openUpdateDialog}
          />
        ))}

      <PersonAddButton action={() => openAddDialog()} />

      <PlayerUpdateDialog
        modalOpen={updateDialogOpen}
        player={player}
        onClose={closeUpdateDialog}
        onSubmit={handleUpdatePlayer}
      />

      <PlayerAddDialog
        modalOpen={addDialogOpen}
        onClose={closeAddDialog}
        onSubmit={handleAddPlayer}
        selectedTeam={selectedTeam}
      />
    </div>
  );
};

export default PlayerView;
