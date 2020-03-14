import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
    border: '2px'
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const clickRows = [
  createData('00', '01', '02'),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

const Gridcount = () => {
  const classes = useStyles();
  const [count00, setCount00] = React.useState(0);
  const [count01, setCount01] = React.useState(0);
  const [count02, setCount02] = React.useState(0);
  const [count10, setCount10] = React.useState(0);
  const [count11, setCount11] = React.useState(0);
  const [count12, setCount12] = React.useState(0);
  const [count20, setCount20] = React.useState(0);
  const [count21, setCount21] = React.useState(0);
  const [count22, setCount22] = React.useState(0);
  // function createTable(row:number, column:number){
  //   let tablecomp = <Table className={classes.table}><TableBody>;
  //   tablecomp += '' ;
  //   Array.from(Array(row)).forEach((x, i) => {
  //     something();
  //   });
  // }

    return (
        <>
        <h2>Grid count Basic</h2>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell colSpan="3">Click Grid</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                    <TableCell onClick={()=>(setCount00(count00+1))}>00</TableCell>
                    <TableCell onClick={()=>(setCount01(count01+1))}>01</TableCell>
                    <TableCell onClick={()=>(setCount02(count02+1))}>02</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell onClick={()=>(setCount10(count10+1))}>10</TableCell>
                    <TableCell onClick={()=>(setCount11(count11+1))}>11</TableCell>
                    <TableCell onClick={()=>(setCount12(count12+1))}>12</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell onClick={()=>(setCount20(count20+1))}>20</TableCell>
                    <TableCell onClick={()=>(setCount21(count21+1))}>21</TableCell>
                    <TableCell onClick={()=>(setCount22(count22+1))}>22</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
            <br/>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell colSpan="3">Count Grid</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{count00}</TableCell>
                  <TableCell>{count01}</TableCell>
                  <TableCell>{count02}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{count10}</TableCell>
                  <TableCell>{count11}</TableCell>
                  <TableCell>{count12}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>{count20}</TableCell>
                  <TableCell>{count21}</TableCell>
                  <TableCell>{count22}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
    );
};

export default Gridcount;