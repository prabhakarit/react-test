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
    cell: {
      cursor: 'pointer'
    }
  });

  interface IGrid{
    rows:number;
    columns:number;
    heading:string;
    tagcallback?:any;
    contentcallback?:any;
  }

  const Grid: React.FC<IGrid> = ({rows, columns, heading, tagcallback, contentcallback}) => {
    const classes = useStyles();

    const generateTable = () => {
        const tableArray = new Array();
        [...Array(rows).keys()].forEach((row)=>{
            tableArray.push(
                            <TableRow>
                                {[...Array(columns).keys()].map((col)=>{
                                    return(
                                        <TableCell onClick={()=>{(tagcallback)?tagcallback(row,col):''}}>{contentcallback(row,col)}</TableCell>
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
                    <TableCell colSpan={columns}><h2>{heading}</h2></TableCell>
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
