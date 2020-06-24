import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  cell: {
    width: 35,
  },
}));

const StatTableHeader: React.FC = () => {
  const classes = useStyles();
  return (
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
        <TableCell
          padding="none"
          size="small"
          className={classes.cell}
          align="center"
        >
          EFF
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default StatTableHeader;
