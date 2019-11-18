import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TodoItemDelete from './todoItemDelete';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
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

const TodoItem = (props) => {
    const classes = useStyles();
    return (
            <TableRow htmlFor={props.item.id}>
                <TableCell width="15%">
                    <Checkbox
                        name="isDone"
                        checked={props.item.checked}
                        onChange={(event)=>props.toggle(props.item.id,event)}
                        value=""
                        inputProps={{
                        'aria-label': 'primary checkbox',
                        }}
                    />
                </TableCell>
                <TableCell align="left">
                    <Typography variant="body1" gutterBottom>
                        <span>{props.item.text}</span>
                    </Typography>
                </TableCell>
                <TableCell align="left" width="20%">
                    <Typography variant="body1" gutterBottom>
                        <span>{props.item.date}</span>
                    </Typography>
                </TableCell>
                <TableCell align="left" width="20%">
                    <Typography variant="body1" gutterBottom>
                        <span>{props.item.updateDate}</span>
                    </Typography>
                </TableCell>
                <TableCell width="25%">
                    <Typography variant="body1" gutterBottom>
                        <TodoItemDelete item={props.item} idext='fordelete' deleteItem={props.deleteItem} />
                    </Typography>
                </TableCell>
            </TableRow>
      );
    };

export default TodoItem;

// <input type="checkbox" id={props.item.id} name="isDone" value='' checked={props.item.checked} onChange={(event)=>props.toggle(props.item.id,event)} />
//<td width="75%"><TodoItemDisplay item={props.item} serialId={props.serialId} /></td>
/*
<TableCell width="5%" align="left">
                    <Typography variant="body1" gutterBottom>
                        {props.serialId}
                    </Typography>
                </TableCell>
                */