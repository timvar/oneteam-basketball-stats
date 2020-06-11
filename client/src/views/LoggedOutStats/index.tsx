import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

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

const Stats: React.FC = () => {
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
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <StatTableHeader />
          <TableBody>
            {getStats(store.getState())
              .sort((a, b) => a.playerNumber - b.playerNumber)
              .map((row) => (
                <StatRow key={row.playerNumber} row={row} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="outlined" onClick={handleGameReset}>
        Reset game
      </Button>
    </>
  );
};

export default Stats;