import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from './grid/';

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

const Gridstate = (props) => {

  const initData = () => {
    var array = new Array(props.rows);
    for (var i = 0; i < array.length; i++) { 
      array[i] = new Array(props.cols); 
    } 
    for (var i = 0; i < props.rows; i++) { 
        for (var j = 0; j < props.cols; j++) { 
          array[i][j] = 0; 
        } 
    }
    return array;
  }

  const [data,setData] = React.useState(initData());
  
  const setRowColIncrement = (row, col) => {
    console.log('called with ','row ',row,' col ',col);
    console.log('data before update => ' + data);
    const localArray = data;
    localArray[row][col] = localArray[row][col] + 1;
    setData(localArray);
    setCountComponent(<Grid rows={props.rows} cols={props.cols} data={data} type={'counter'} />);
    console.log('data after update => ' + data);
  }

  const [countComponent,setCountComponent] = React.useState(<Grid rows={props.rows} cols={props.cols} data={data} type={'counter'} />);

    return (
        <React.Fragment>
          <h2>Grid count comp</h2>
          <Grid rows={props.rows} cols={props.cols} captureCount={setRowColIncrement} type={'clicker'} />
          <br/>
          {countComponent}
        </React.Fragment>
    );
};

export default Gridstate;