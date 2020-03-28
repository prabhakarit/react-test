import React from 'react';
import GridClicker from './clicker';
import GridCounter from './counter';
import { useData } from './hooks';

interface IGridMaster{
  rows:number;
  columns:number;
}

const Gridstate: React.FC<IGridMaster> = ({rows,columns}) => {
  const {doCount, getDataByIndex} = useData(rows,columns);
    return (
        <React.Fragment>
          <h1>Grid count comp</h1>
          <GridClicker rows={rows} columns={columns} captureCount={doCount}  />
          <br/><br/>
          <GridCounter rows={rows} columns={columns} counter={getDataByIndex} />
        </React.Fragment>
    );
};

export default Gridstate;