import React, { useEffect } from 'react';
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



const Gridstate = () => {
  const classes = useStyles();
  const [state00, setState00] = React.useState(false);
  const [state01, setState01] = React.useState(false);
  const [state02, setState02] = React.useState(false);
  const [state10, setState10] = React.useState(false);
  const [state11, setState11] = React.useState(false);
  const [state12, setState12] = React.useState(false);
  const [state20, setState20] = React.useState(false);
  const [state21, setState21] = React.useState(false);
  const [state22, setState22] = React.useState(false);

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

  React.useEffect(()=>{
    if(state00){
      setCount00(count00+1);
      setState00(false);
    }
    if(state01){
      setCount01(count01+1);
      setState01(false);
    }
    if(state02){
      setCount02(count02+1);
      setState02(false);
    }
    if(state10){
      setCount10(count10+1);
      setState10(false);
    }
    if(state11){
      setCount11(count11+1);
      setState11(false);
    }
    if(state12){
      setCount12(count12+1);
      setState12(false);
    }
    if(state20){
      setCount20(count20+1);
      setState20(false);
    }
    if(state21){
      setCount21(count21+1);
      setState21(false);
    }
    if(state22){
      setCount22(count22+1);
      setState22(false);
    }
  },[state00,state01,state02,state10,state11,state12,state20,state21,state22]);

    return (
        <>
        <h2>Grid count Alt</h2>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell colSpan="3">Click Grid</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                    <TableCell onClick={()=>(setState00(true))}>00</TableCell>
                    <TableCell onClick={()=>(setState01(true))}>01</TableCell>
                    <TableCell onClick={()=>(setState02(true))}>02</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell onClick={()=>(setState10(true))}>10</TableCell>
                    <TableCell onClick={()=>(setState11(true))}>11</TableCell>
                    <TableCell onClick={()=>(setState12(true))}>12</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell onClick={()=>(setState20(true))}>20</TableCell>
                    <TableCell onClick={()=>(setState21(true))}>21</TableCell>
                    <TableCell onClick={()=>(setState22(true))}>22</TableCell>
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

export default Gridstate;