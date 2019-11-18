// import React, {Fragment} from "react";
//import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoListC from './components/TodoListC';
//import { Grid, Typography , Button} from '@material-ui/core';

// import { ThemeProvider } from '@material-ui/styles';
// import theme from './utils/theme';
// import CssBaseline from '@material-ui/core/CssBaseline';

// const App = props => {
//   return (
//     <React.StrictMode>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Fragment>
//           ZeMoSo React Starter
//         </Fragment>
//       </ThemeProvider>
//     </React.StrictMode>

//   );
// };


const App = (props) => {

  //const classes = useStyles();
  
  const [task, setTask] = useState({value:'' , status:'pending'});
  const [taskList, setTasklist] = useState([]);

  const handleChange = (event) => {
    //setTask(event.target.value);
    console.log(event.target.value);
    let x = event.target.value;
    setTask(task => ({value:x, status:'pending'}));
  };

  const handleSubmit = (event) => {
    taskList.push(task);
    setTasklist(taskList);
    //setTask('');
    setTask(task => ({value:'', status:'pending'}));
    event.preventDefault();
  };

  // const deleteItem = (key) => {
  //   console.log("deleting");
  //   const filteredItems = taskList.filter( (item) => {
  //     return (item !== key);
  //   });
  //   console.log(filteredItems);
  //   setTasklist(filteredItems);
  // };

  const deleteItem = (key) => {
    console.log("deleting");
    const filteredItems = taskList.filter( (item) => {
      return (item.value !== key);
    });
    console.log(filteredItems);
    setTasklist(filteredItems);
  };

  const markItem = (key, status) => {
    console.log("marking");
    //var items = Object.assign({taskList});
    //items.assign({taskList});
    var items = taskList;
    console.log(items.length);
    for(var i=0; i<items.length; i++) {
      if(items[i].value == key) {
        break;
      }
    }
    // console.log(filteredItems);
    // setTasklist(filteredItems);
    setTask(task => ({...task, status:'done'}));
    items.splice(i,1,{value:key, status:status});
    setTasklist(items);
  };
  
  return (
    <Container>
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Add Task:
          <input type="text" value={task.value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <TodoList taskList={taskList} markItem={(key, status) => markItem(key,status)} delet={(key) => deleteItem(key)} />
    </div>
    </Container>
  );
};

export default App;