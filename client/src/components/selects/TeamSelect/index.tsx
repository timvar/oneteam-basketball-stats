import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Select, MenuItem, FormControl } from '@material-ui/core';

import { Team } from '../../../store/team/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 240,
    },
  })
);

interface Props {
  teams: Team[];
  submit: (team: Team['id']) => void;
}

const TeamSelect: React.FC<Props> = ({ teams, submit }) => {
  const classes = useStyles();
  const [team, setTeam] = React.useState<Team['id']>('');

  const handleTeamChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const teamId = event.target.value as string;
    setTeam(teamId);
    submit(teamId);
  };

  const options = (items: Team[]) => {
    return items.map((item) => (
      <MenuItem key={item.id} value={item.id}>
        {item.teamName}
      </MenuItem>
    ));
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        placeholder="Team"
        labelId="team-label"
        id="team"
        value={team}
        onChange={handleTeamChange}
      >
        {options(teams)}
      </Select>
    </FormControl>
  );
};

export default TeamSelect;
