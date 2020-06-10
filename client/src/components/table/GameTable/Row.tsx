import React from 'react';
import { useHistory } from 'react-router-dom';
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
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import { Game } from '../../../store/game/types';

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
  row: Game;
}

const Row: React.FC<Props> = ({ row }) => {
  const history = useHistory();
  const [open, setOpen] = React.useState<boolean>(false);
  const classes = useRowStyles();

  const handleClick = (id: string) => {
    console.log(id);
    history.push(`/stats/${id}`);
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
          {row.homeTeam}
        </TableCell>
        <TableCell
          padding="none"
          size="small"
          className={classes.cell}
          align="center"
        >
          {row.awayTeam}
        </TableCell>
        <TableCell
          padding="none"
          size="small"
          className={classes.cell}
          align="center"
        >
          {row.gameDate}
        </TableCell>
        <TableCell
          padding="none"
          size="small"
          className={classes.cell}
          align="center"
        >
          {row.gameNumber}
        </TableCell>
        <TableCell padding="none" className={classes.cell} align="center">
          <IconButton size="small" onClick={() => handleClick(row.id)}>
            <DoubleArrowRoundedIcon />
          </IconButton>
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
                      Description
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
                      {row.description}
                    </TableCell>
                    <TableCell
                      padding="none"
                      className={classes.cell}
                      align="center"
                    >
                      <IconButton
                        size="small"
                        onClick={() => handleClick(row.id)}
                      >
                        <DoubleArrowRoundedIcon />
                      </IconButton>
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

export default Row;
