import React from 'react';
import Grid from '../grid';

interface IGridClicker{
    rows:number;
    columns:number;
    doCount:any;
    cellData:any;
  }

  const GridClicker: React.FC<IGridClicker> = ({rows, columns, doCount, cellData}) => {
    return (
        <React.Fragment>
            <Grid heading={'Clicker'} rows={rows} columns={columns} cellCallback={doCount} cellData={cellData} />
        </React.Fragment>
    );
  };

  export default GridClicker;

