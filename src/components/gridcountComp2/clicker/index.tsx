import React from 'react';
import Grid from '../grid';

interface IGridClicker{
    rows:number;
    columns:number;
    captureCount:any;
  }

  const GridClicker: React.FC<IGridClicker> = ({rows, columns, captureCount}) => {
    const contentShow = (row:number, column:number) => {
        return `CELL${row}${column}`;
    }
    return (
        <React.Fragment>
            <Grid heading={'Clicker'} rows={rows} columns={columns} tagcallback={captureCount} contentcallback={contentShow} />
        </React.Fragment>
    );
  };

  export default GridClicker;

