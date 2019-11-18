import React from 'react';
import TodoItem from './todoItem';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

const TodoList = (props) => {
  const classes = useStyles();

  return ( 
          <div align="center">
            <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table" aria-label="a dense table" width="100%">
            <TableHead>
                <TableRow>
                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        done ?
                        </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        item
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        date added
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        date completed
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        delete ?
                      </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {
              props.items.map(
                (item,index) => ( 
                  <TodoItem item={item} serialId={index+1} toggle={props.toggle} deleteItem={props.deleteItem} /> 
                )
              )
            } 
            </TableBody>
            </Table>
            </Paper> 
          </div> 
        );
};

export default TodoList;

/*

                    <TableCell>
                      <Typography variant="h6" gutterBottom>
                        #
                        </Typography>
                    </TableCell>
                    */