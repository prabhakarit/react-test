import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    strike: {
        textDecoration: 'line-through'
    }
  }));

function TodoList(props) {

    const classes = useStyles();

    const handleClick = (item) => {
        props.delet(item);
    };

    const mark = (key, status) => {
        props.markItem(key, status);
    };

    const list = props.taskList;
    //console.log(list);
    //const listItems = list.map((item) => <li key={item} onClick={() => handleClick(item)}>{item}</li>);
    
    let pendingTasks = [];
    let completedTasks = [];
    for(var i=0; i < list.length; i++) {
        list[i].status == 'pending' ? pendingTasks.push(list[i].value) : completedTasks.push(list[i].value);
    }


    // .....start........

    

    // .....end..........

    const listItems1 = pendingTasks.map((item) => 
        <ListItem key={item} dense button onClick={() => mark(item,'done')}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={false}
                    tabIndex={-1}
                    disableRipple
                />
            </ListItemIcon>
            <ListItemText primary={item} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => handleClick(item)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        );

    const listItems2 = completedTasks.map((item) => 
        <ListItem key={item} dense button onClick={() => mark(item,'pending')}>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={true}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText className={classes.strike} primary={item} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => handleClick(item)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
        </ListItem>
    );

    
    

    return(
        <div>
            <List className={classes.root}>{listItems1}</List>
            <List className={classes.root}>{listItems2}</List>
        </div>
     );
}

export default TodoList;