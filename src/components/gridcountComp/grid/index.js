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

  const Grid = (props) => {
    const classes = useStyles();

    const generateTable = () => {
        const tableArray = new Array();
        const rowsArray = Array.from(Array(props.rows).keys());
        const colsArray = Array.from(Array(props.cols).keys());
        rowsArray.forEach((row)=>{
            tableArray.push(
                            <TableRow>
                                {colsArray.map((col)=>{
                                    return(
                                        (props.type==='counter')?(<TableCell>{props.data[row][col]}</TableCell>):(<TableCell onClick={()=>{props.captureCount(row,col)}}>{row}{col}</TableCell>)
                                    );
                                })}
                            </TableRow>
                        );
          });
        return tableArray;
    }

    return(
        <React.Fragment>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                    <TableCell colSpan={props.cols}>{(props.type==='counter')?'Count Grid':'Click Grid'}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                    generateTable().map((tablePart)=>{
                        return (tablePart);
                    })
                }
              </TableBody>
            </Table>
          </TableContainer>
        </React.Fragment>
    );
  };

  export default Grid;
