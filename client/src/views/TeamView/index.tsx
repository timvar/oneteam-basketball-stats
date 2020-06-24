import React from 'react';
import { useDispatch } from 'react-redux';
import { Team, TeamInput } from '../../store/team/types';
import TeamAddDialog from '../../components/dialog/TeamAddDialog';
import TeamUpdateDialog from '../../components/dialog/TeamUpdateDialog';
import store, { getTeams } from '../../store';
import { addTeam, updateTeam } from '../../store/team/actions';
import TeamAddButton from '../../components/button/TeamAddButton';
import TeamListItem from '../../components/TeamListItem';

const TeamView: React.FC = () => {
  const dispatch = useDispatch();
  const [addTeamDialogOpen, setAddTeamDialogOpen] = React.useState<boolean>(
    false
  );
  const [updateTeamDialogOpen, setUpdateTeamDialogOpen] = React.useState<
    boolean
  >(false);
  const [team, setTeam] = React.useState<Team>({
    id: '',
    teamName: '',
  });

  const openAddTeamDialog = (): void => {
    setAddTeamDialogOpen(true);
  };
  const closeAddTeamDialog = (): void => {
    setAddTeamDialogOpen(false);
  };

  const openUpdateTeamDialog = (teamToUpdate: Team): void => {
    setTeam(teamToUpdate);
    setUpdateTeamDialogOpen(true);
  };

  const closeUpdateTeamDialog = (): void => {
    setUpdateTeamDialogOpen(false);
  };

  const handleAddTeam = async (values: TeamInput) => {
    closeAddTeamDialog();
    try {
      dispatch(addTeam(values));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleUpdateTeam = (values: Team): void => {
    closeUpdateTeamDialog();
    dispatch(updateTeam(values));
  };

  return (
    <div>
      {getTeams(store.getState()).map((p) => (
        <TeamListItem
          key={p.id}
          team={p}
          handleTeamUpdate={openUpdateTeamDialog}
        />
      ))}
      <TeamAddButton action={() => openAddTeamDialog()} />

      <TeamUpdateDialog
        modalOpen={updateTeamDialogOpen}
        team={team}
        onClose={closeUpdateTeamDialog}
        onSubmit={handleUpdateTeam}
      />

      <TeamAddDialog
        modalOpen={addTeamDialogOpen}
        onClose={closeAddTeamDialog}
        onSubmit={handleAddTeam}
      />
    </div>
  );
};

export default TeamView;
