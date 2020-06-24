import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import EditButton from '../button/EditButton';
import { Team } from '../../store/team/types';

interface Props {
  team: Team;
  handleTeamUpdate: (team: Team) => void;
}

const TeamListItem: React.FC<Props> = ({ team, handleTeamUpdate }) => {
  return (
    <div>
      <Box
        borderColor="secondary.light"
        border={1}
        borderRadius={8}
        px={2}
        py={1}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" color="textPrimary">
          {team.teamName}
        </Typography>
        <EditButton action={() => handleTeamUpdate(team)} />
      </Box>
    </div>
  );
};

export default TeamListItem;
