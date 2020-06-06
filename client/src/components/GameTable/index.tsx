import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Game } from '../../store/game/types';
import Row from './Row';

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

interface Props {
  games: Game[];
}

const GameTable: React.FC<Props> = ({ games }) => {
  const classes = useRowStyles();

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell
              padding="none"
              size="small"
              className={classes.cell}
              align="center"
            />
            <TableCell
              padding="none"
              size="small"
              className={classes.cell}
              align="center"
            >
              Home
            </TableCell>
            <TableCell
              padding="none"
              size="small"
              className={classes.cell}
              align="center"
            >
              Away
            </TableCell>
            <TableCell
              padding="none"
              size="small"
              className={classes.cell}
              align="center"
            >
              Date
            </TableCell>
            <TableCell
              padding="none"
              size="small"
              className={classes.cell}
              align="center"
            >
              Descr
            </TableCell>
            <TableCell
              padding="none"
              size="small"
              className={classes.cell}
              align="center"
            >
              Game ID
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GameTable;
