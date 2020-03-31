import{ useState } from 'react';

  enum GRID_TYPE
    {
        CLICKER,
        COUNTER
    };

  const initData = (rows:number, columns:number, gridType:GRID_TYPE) => {
    let array = new Array(rows);
    for (let row:number = 0; row < array.length; row++) { 
      array[row] = new Array(columns); 
    } 
    for (let row = 0; row < rows; row++) { 
        for (let col = 0; col < columns; col++) { 
          array[row][col] = (gridType===GRID_TYPE.CLICKER)?`CELL${row}${col}`:0; 
        } 
    }
    return array;
  }


export const useCounter = (rows:number,columns:number) => {
    const [state,setState] = useState({
        counterData: initData(rows,columns,GRID_TYPE.COUNTER),
        clickerData: initData(rows,columns,GRID_TYPE.CLICKER),
    });
    const doCount = (row:number, col:number) => {
        const tempData = state.counterData;
        tempData[row][col] = tempData[row][col] + 1;
        setState({...state, counterData:tempData});
    }
    return{
        doCount,
        counterData: state.counterData,
        clickerData: state.clickerData,
    };
}
