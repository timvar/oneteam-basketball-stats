import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import store, { getStats } from '../../store';
import StatRow from '../../components/table/StatTable/StatRow';
import StatTableHeader from '../../components/table/StatTable/StatTableHeader';

const useRowStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  cell: {
    width: 30,
  },
}));

const Stats: React.FC = () => {
  const classes = useRowStyles();

  return (
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
  );
};

export default Stats;
