import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, List, IconButton } from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { successColor } from '../../constants/colors';

import TeamItem from './TeamItem';
import { Team, TeamInput } from '../../store/team/types';
import TeamAddDialog from '../../components/dialog/TeamAddDialog';
import TeamUpdateDialog from '../../components/dialog/TeamUpdateDialog';
import store, { getTeams } from '../../store';
import { addTeam, updateTeam } from '../../store/team/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    teamSelect: {
      marginTop: 10,
    },
  })
);

const TeamView: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
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
    <div className={classes.root}>
      <Grid item xs={12} md={6}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <List>
            {getTeams(store.getState()).map((p) => (
              <TeamItem
                key={p.id}
                team={p}
                handleTeamUpdate={openUpdateTeamDialog}
              />
            ))}
          </List>
          <IconButton onClick={() => openAddTeamDialog()}>
            <GroupAddIcon style={{ fontSize: 48, color: successColor }} />
          </IconButton>

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
        </Grid>
      </Grid>
    </div>
  );
};

export default TeamView;
