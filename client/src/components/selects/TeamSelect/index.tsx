import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import { Team } from '../../../store/team/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

interface Props {
  teams: Team[];
}

const TeamSelect: React.FC<Props> = ({ teams }) => {
  const classes = useStyles();
  const [teamId, setTeamId] = React.useState<string>('');
  const [state, setState] = React.useState<{
    age: string | number;
    name: string;
  }>({
    age: '',
    name: 'hai',
  });

  const handleTeamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeamId(event.target.value);
    console.log(teamId);
  };

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const options = (items: Team[]) => {
    return items.map((item) => (
      <option key={item.id} value={item.id}>
        {item.teamName}
      </option>
    ));
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Team</InputLabel>
       
        <Select
          native
          value={teamId}
          onChange={() => handleTeamChange}
          label="Team"
        >
          {options(teams)}
        </Select>
      </FormControl>
    </div>
  );
};

export default TeamSelect;
