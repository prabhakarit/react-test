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
    table: {
      minWidth: 650,
      border: '2px'
    },
    cell: {
      cursor: 'pointer'
    }
  });

  interface IGrid{
    rows:number;
    columns:number;
    heading:string;
    cellCallback:any;
    cellData:any;
  }

  const Grid: React.FC<IGrid> = ({rows, columns, heading, cellCallback, cellData}) => {
    const classes = useStyles();

    const generateTable = () => {
        const tableRows = new Array();
        [...Array(rows).keys()].forEach((row)=>{
            tableRows.push(
                            <TableRow>
                                {[...Array(columns).keys()].map((col)=>{
                                    return(
                                        <TableCell className={classes.cell} onClick={()=>{cellCallback(row,col)}}>{cellData[row][col]}</TableCell>
                                    );
                                })}
                            </TableRow>
                        );
          });
        return tableRows;
    }

    return(
        <React.Fragment>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                    <TableCell colSpan={columns}><h2>{heading}</h2></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                    generateTable().map((tableRow)=>{
                        return (tableRow);
                    })
                }
              </TableBody>
            </Table>
          </TableContainer>
        </React.Fragment>
    );
  };

  export default Grid;
