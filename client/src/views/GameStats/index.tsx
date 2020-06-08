import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Stat } from '../../store/stat/types';
import StatRow from './StatRow';
import gameService from '../../services/games';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  cell: {
    width: 30,
  },
}));

const GameStats: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [stats, setStats] = React.useState<Stat[]>([]);

  React.useEffect(() => {
    gameService.getStatsByGame(id).then((statData) => setStats(statData));
  }, [id]);

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
              ###
            </TableCell>
            <TableCell
              padding="none"
              size="small"
              className={classes.cell}
              align="center"
            >
              PTS
            </TableCell>
            <TableCell
              padding="none"
              size="small"
              className={classes.cell}
              align="center"
            >
              AST
            </TableCell>
            <TableCell
              padding="none"
              size="small"
              className={classes.cell}
              align="center"
            >
              STL
            </TableCell>
            <TableCell
              padding="none"
              size="small"
              className={classes.cell}
              align="center"
            >
              REB
            </TableCell>
            <TableCell
              padding="none"
              size="small"
              className={classes.cell}
              align="center"
            >
              BLK
            </TableCell>
            <TableCell
              padding="none"
              size="small"
              className={classes.cell}
              align="center"
            >
              TO
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stats.map((row) => (
            <StatRow key={row.playerNumber} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GameStats;
