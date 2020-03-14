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

const Gridstate = () => {
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

  const [idqueue,setIdqueue] = React.useState(new Array());
  const [toggle,setToggle] = React.useState(false);

  useEffect(
    () => {
    const id = shiftToIdQueue();
    if(!id){
      return;
    }
    switch(id){
      case '00':
        setCount00(count00+1);
        break;
      case '01':
        setCount01(count01+1);
        break;
      case '02':
        setCount02(count02+1);
        break;
      case '10':
        setCount10(count10+1);
        break;
      case '11':
        setCount11(count11+1);
        break;
      case '12':
        setCount12(count12+1);
        break;
      case '20':
        setCount20(count20+1);
        break;
      case '21':
        setCount21(count21+1);
        break;
      case '22':
        setCount22(count22+1);
        break;
      default:
        // do nothing
        break;
      }
    }
  ),[toggle];

  function pushToIdQueue(id){
    let idqueue_local = idqueue || [];
    idqueue_local.push(id);
    setIdqueue(idqueue_local);
    setToggle(!toggle);
  }

  function shiftToIdQueue(){
    let idqueue_local = idqueue || [];
    let element = (idqueue_local && idqueue_local.length>0)?idqueue_local.shift():undefined;
    if(!element){
      return undefined;
    }
    setIdqueue(idqueue_local);
    return element;
  }

    return (
        <>
        <h2>Grid count fancy</h2>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell colSpan="3">Click Grid</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                    <TableCell onClick={()=>{pushToIdQueue('00')}}>00</TableCell>
                    <TableCell onClick={()=>{pushToIdQueue('01')}}>01</TableCell>
                    <TableCell onClick={()=>{pushToIdQueue('02')}}>02</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell onClick={()=>{pushToIdQueue('10')}}>10</TableCell>
                    <TableCell onClick={()=>{pushToIdQueue('11')}}>11</TableCell>
                    <TableCell onClick={()=>{pushToIdQueue('12')}}>12</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell onClick={()=>{pushToIdQueue('20')}}>20</TableCell>
                    <TableCell onClick={()=>{pushToIdQueue('21')}}>21</TableCell>
                    <TableCell onClick={()=>{pushToIdQueue('22')}}>22</TableCell>
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