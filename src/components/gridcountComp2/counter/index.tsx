import React from 'react';
import Grid from '../grid';

interface IGridCounter{
    rows:number;
    columns:number;
    doCount?:any;
    cellData:any;
  }

  const GridCounter: React.FC<IGridCounter> = ({rows, columns, doCount=()=>{}, cellData}) => {
    return (
        <React.Fragment>
            <Grid heading={'Counter'} rows={rows} columns={columns} cellCallback={doCount} cellData={cellData} />
        </React.Fragment>
    );
  };

  export default GridCounter;

