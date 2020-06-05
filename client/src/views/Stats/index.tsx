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
import store, { getStats } from '../../store';
import { Stat } from '../../store/stat/types';

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
  row: Stat;
}

const Row: React.FC<Props> = ({ row }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  const shootingdata = (made: number, attempt: number): string => {
    const pct = ((100 * made) / attempt).toFixed(0);
    return attempt > 0 ? `${made}/${attempt}/${pct}` : '0/0/0';
  };

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell padding="none" size="small" className={classes.cell}>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell
          padding="none"
          size="small"
          className={classes.cell}
          align="center"
        >
          {row.playerNumber}
        </TableCell>
        <TableCell
          padding="none"
          size="small"
          className={classes.cell}
          align="center"
        >
          {row.onePm + row.twoPm * 2 + row.threePm * 3}
        </TableCell>
        <TableCell
          padding="none"
          size="small"
          className={classes.cell}
          align="center"
        >
          {row.ast}
        </TableCell>
        <TableCell
          padding="none"
          size="small"
          className={classes.cell}
          align="center"
        >
          {row.stl}
        </TableCell>
        <TableCell
          padding="none"
          size="small"
          className={classes.cell}
          align="center"
        >
          {row.orb + row.drb}
        </TableCell>
        <TableCell
          padding="none"
          size="small"
          className={classes.cell}
          align="center"
        >
          {row.blk}
        </TableCell>
        <TableCell
          padding="none"
          size="small"
          className={classes.cell}
          align="center"
        >
          {row.to}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      padding="none"
                      className={classes.cell}
                      align="center"
                    >
                      1P M/A/%
                    </TableCell>
                    <TableCell
                      padding="none"
                      className={classes.cell}
                      align="center"
                    >
                      2P M/A/%
                    </TableCell>
                    <TableCell
                      padding="none"
                      className={classes.cell}
                      align="center"
                    >
                      3P M/A/%
                    </TableCell>
                    <TableCell
                      padding="none"
                      className={classes.cell}
                      align="center"
                    >
                      ORB/DRB
                    </TableCell>
                    <TableCell
                      padding="none"
                      className={classes.cell}
                      align="center"
                    >
                      EFF
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      padding="none"
                      className={classes.cell}
                      align="center"
                    >
                      {shootingdata(row.onePm, row.onePa)}
                    </TableCell>
                    <TableCell
                      padding="none"
                      className={classes.cell}
                      align="center"
                    >
                      {shootingdata(row.twoPm, row.twoPa)}
                    </TableCell>
                    <TableCell
                      padding="none"
                      className={classes.cell}
                      align="center"
                    >
                      {shootingdata(row.threePm, row.threePa)}
                    </TableCell>
                    <TableCell
                      padding="none"
                      className={classes.cell}
                      align="center"
                    >
                      {`${row.orb} / ${row.drb}`}
                    </TableCell>
                    <TableCell
                      padding="none"
                      className={classes.cell}
                      align="center"
                    >
                      EFF
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const Stats: React.FC = () => {
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
          {getStats(store.getState()).map((row) => (
            <Row key={row.playerNumber} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Stats;
