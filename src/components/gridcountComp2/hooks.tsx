import{ useState } from 'react';

const initData = (rows:number,columns:number) => {
    let array = new Array(rows);
    for (let i:number = 0; i < array.length; i++) { 
      array[i] = new Array(columns); 
    } 
    for (let i = 0; i < rows; i++) { 
        for (let j = 0; j < columns; j++) { 
          array[i][j] = 0; 
        } 
    }
    return array;
  }


export const useData = (rows:number,columns:number) => {
    const [state,setState] = useState({
        data: initData(rows,columns),
    });
    const getData = () => {
        return state.data;
    };
    const getDataByIndex = (row:number, col:number) => {
        return state.data[row][col];
    };
    const doCount = (row:number, col:number) => {
        const localData = getData();
        localData[row][col] = localData[row][col] + 1;
        setState({...state, data:localData});
    }
    return{
        doCount,
        getDataByIndex
    };
}
