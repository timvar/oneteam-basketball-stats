import React from 'react';
import { useParams } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { Stat } from '../../store/stat/types';
import StatRow from '../../components/table/StatTable/StatRow';
import StatTableHeader from '../../components/table/StatTable/StatTableHeader';
import gameService from '../../services/games';

const GameStats: React.FC = () => {
  const { id } = useParams();
  const [stats, setStats] = React.useState<Stat[]>([]);

  React.useEffect(() => {
    gameService.getStatsByGame(id).then((statData) => setStats(statData));
  }, [id]);

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <StatTableHeader />
        <TableBody>
          {stats
            .sort((a, b) => a.playerNumber - b.playerNumber)
            .map((row) => (
              <StatRow key={row.playerNumber} row={row} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GameStats;
