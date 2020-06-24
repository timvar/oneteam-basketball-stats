import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetTeams } from '../../store/team/actions';
import { resetPlayers } from '../../store/player/actions';
import { setHeaderTitle } from '../../store/header/actions';
import { resetRoster } from '../../store/roster/actions';
import { resetStats } from '../../store/stat/actions';
import StatRow from '../../components/table/StatTable/StatRow';
import StatTableHeader from '../../components/table/StatTable/StatTableHeader';
import store, { getStats } from '../../store';
import RestartButton from '../../components/button/RestartButton';

const useStyles = makeStyles((theme: Theme) => ({
  table: {
    width: '100%',
  },
}));

const Stats: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleGameReset = () => {
    dispatch(resetPlayers());
    dispatch(resetRoster());
    dispatch(resetStats());
    dispatch(resetTeams());
    dispatch(setHeaderTitle('Home'));
    history.push('/');
  };
  return (
    <>
      <Table stickyHeader className={classes.table}>
        <StatTableHeader />
        <TableBody>
          {getStats(store.getState())
            .sort((a, b) => a.playerNumber - b.playerNumber)
            .map((row) => (
              <StatRow key={row.playerNumber} row={row} />
            ))}
        </TableBody>
      </Table>
      <Box display="flex" alignItems="center" justifyContent="center" py={2}>
        <RestartButton action={handleGameReset} />
      </Box>
    </>
  );
};

export default Stats;
