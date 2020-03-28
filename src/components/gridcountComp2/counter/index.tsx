import React from 'react';
import Grid from '../grid';

interface IGridCounter{
    rows:number;
    columns:number;
    counter?:any;
  }

  const GridCounter: React.FC<IGridCounter> = ({rows, columns, counter}) => {
    return (
        <React.Fragment>
            <Grid heading={'Counter'} rows={rows} columns={columns} contentcallback={counter} />
        </React.Fragment>
    );
  };

  export default GridCounter;

