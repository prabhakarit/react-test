import React from 'react';
import GridClicker from './clicker';
import GridCounter from './counter';
import { useCounter } from './hooks';

interface IGridMaster{
  rows:number;
  columns:number;
}

const Gridstate: React.FC<IGridMaster> = ({rows,columns}) => {
  const {doCount, counterData, clickerData} = useCounter(rows,columns);
    return (
        <React.Fragment>
          <h1>Grid count comp</h1>
          <GridClicker rows={rows} columns={columns} doCount={doCount} cellData={clickerData}  />
          <br/><br/>
          <GridCounter rows={rows} columns={columns} cellData={counterData} />
        </React.Fragment>
    );
};

export default Gridstate;