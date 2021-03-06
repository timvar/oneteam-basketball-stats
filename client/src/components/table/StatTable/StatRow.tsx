import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Stat } from '../../../store/stat/types';

const useRowStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  cell: {
    width: 50,
  },
  tablerow: {
    width: '100%',
  },
}));

interface Props {
  row: Stat;
}

const StatRow: React.FC<Props> = ({ row }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const classes = useRowStyles();

  const shootingdata = (made: number, attempt: number): string => {
    const pct = ((100 * made) / attempt).toFixed(0);
    return attempt > 0 ? `${made}/${attempt}/${pct}` : '0/0/0';
  };

  const efficiency = (stat: Stat): string => {
    const result: number =
      stat.ast +
      stat.blk +
      stat.drb -
      stat.onePa +
      stat.onePm +
      stat.orb +
      stat.stl -
      stat.threePa +
      stat.threePm -
      stat.to -
      stat.twoPa +
      stat.twoPm +
      stat.onePm +
      stat.threePm * 3 +
      stat.twoPm * 2;

    return `${result}`;
  };

  const fgm = (stat: Stat): string => {
    const result: number = stat.threePm + stat.twoPm;
    return `${result}`;
  };

  const fga = (stat: Stat): string => {
    const result: number = stat.threePa + stat.twoPa;
    return `${result}`;
  };

  const fgpct = (stat: Stat): string => {
    if (stat.threePa + stat.twoPa) {
      const pct = (
        (100 * (stat.threePm + stat.twoPm)) /
        (stat.threePa + stat.twoPa)
      ).toFixed(0);
      return `${pct}`;
    }
    return '0';
  };

  return (
    <>
      <TableRow className={classes.tablerow}>
        <TableCell padding="none" size="small" className={classes.cell}>
          <IconButton
            size="small"
            color="primary"
            onClick={() => setOpen(!open)}
          >
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
        <TableCell padding="none" className={classes.cell} align="center">
          {efficiency(row)}
        </TableCell>
      </TableRow>
      <TableRow className={classes.tablerow}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
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
                      FG M/A/%
                    </TableCell>
                    <TableCell
                      padding="none"
                      className={classes.cell}
                      align="center"
                    >
                      ORB/DRB
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
                      {`${fgm(row)}/${fga(row)}/${fgpct(row)}`}
                    </TableCell>
                    <TableCell
                      padding="none"
                      className={classes.cell}
                      align="center"
                    >
                      {`${row.orb} / ${row.drb}`}
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

export default StatRow;
