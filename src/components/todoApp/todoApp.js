import React, { useState } from 'react';
import TodoList from './todoList';
import TodoDeleteAll from './todoDeleteAll';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 2,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 30,
  padding: '0 30px',
});

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const TodoApp = (props) => {
  const classes = useStyles();
  const [items, setItems] = React.useState([]);
  const [text, setText] = React.useState('');

  const deleteItem = (id) => {
    setItems(items.filter(el => el.id !== id ));
  };

  const deleteAllItem = () => {
    setItems([]);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!text.length) {
      return;
    }
    const datenow = new Date();
    const datenowstr = Date.now();
    const newItem = {
      text: text,
      id: datenowstr,
      date: formatDate(datenow),
      //isDisabled: false,
      updateDate: '',
      checked: false
    };
    setItems(items.concat(newItem));
    setText('');
  };

  const toggle = (id,event) => {
    const datenow = new Date();
    for(let i=0; i<items.length; i++){
      if(id===items[i].id){
        items[i].checked = event.target.checked;
        if(items[i].checked){
          items[i].updateDate = formatDate(datenow);
        }
        else{
          items[i].updateDate = '';
        }
      }
    }
    setItems(items.sort(function(a,b){return ( a.checked - b.checked );}).filter(item=>true));
  };

  return (
    <div align="center">
      <form onSubmit={handleSubmit}>
      <table width="60%">
        <thead>
          <tr>
            <th>
              <Typography variant="h3" gutterBottom>
                TODO Stable
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td align="center">
            <TextField
              required
              align="center"
              id="new-todo"
              label="Add a task..."
              margin="normal"
              onChange={handleChange}
              value={text}
              className={classes.textField}
            />
            <MyButton type="submit">
              Add #{items.length + 1}
            </MyButton>
            <TodoDeleteAll itemslength={(items)?items.length:0} handleDeleteAll={deleteAllItem}/>
          </td>
        </tr>
        <tr>
          <td>
            <TodoList items={items} toggle={toggle} deleteItem={deleteItem}/>
          </td>
        </tr>
        </tbody>
      </table>
      </form>
    </div>
  );
};

export default TodoApp;

function formatDate(date) {
  const monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", 
    "Oct", "Nov", "Dec"
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}