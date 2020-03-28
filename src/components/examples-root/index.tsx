import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import TodoAppTest from "../todoApp-test/todoApp";
  import TodoAppStable from "../todoApp/todoApp";
  import Clock from "../clock/clock";
  import GraphQLTest from "../graphqltest/apolloconnect";
//   import ChartHigh from "../highcharts/test";
  //import ChartsHighTS from "../highcharts/";
import Gridcount from '../gridcount';
import GridcountAlt from '../gridcountAlt';
import GridcountFlex from '../gridcountFlex';
import GridcountComp from '../gridcountComp'; 
import GridcountComp2 from '../gridcountComp2';  

  const Root = () => {
    return (
      <Router>
        <div>
            <table style={{width:'100%'}}>
                <tbody>
                    <tr>
                        <td  style={{width:'100%'}}>
                            <nav>
                                <ul>
                                    {/* <li>
                                        <Link to="/">Todo-test</Link>
                                    </li> */}
                                    {/* <li>
                                        <Link to="/gridcounter">Grid Counter</Link>
                                    </li>
                                    <li>
                                        <Link to="/gridcounteralt">Grid Counter Alt</Link>
                                    </li>
                                    <li>
                                        <Link to="/gridcounterflex">Grid Counter Flex</Link>
                                    </li>
                                    <li>
                                        <Link to="/gridcountercomp">Grid Counter Comp</Link>
                                    </li> */}
                                    {/* <li>
                                        <Link to="/gridcountercomp2">Grid Counter Comp 2</Link>
                                    </li> */}
                                    {/* <li>
                                        <Link to="/todostable">Todo-stable</Link>
                                    </li>
                                    <li>
                                        <Link to="/clock">Clock</Link>
                                    </li>
                                    <li>
                                        <Link to="/graphqltest">graphql-test</Link>
                                    </li> */}
                                    {/* <li>
                                        <Link to="/highcharts">highcharts-test</Link>
                                    </li>
                                    <li>
                                        <Link to="/highchartsts">highcharts-ts-test</Link>
                                    </li> */}
                                </ul>
                            </nav>
                        </td>
                        <td valign="top">
                            {/* A <Switch> looks through its children <Route>s and
                             renders the first one that matches the current URL. */}
                            <Switch>
                                {/* <Route path="/gridcounter">
                                    <Gridcount />
                                </Route>
                                <Route path="/gridcounteralt">
                                    <GridcountAlt />
                                </Route>
                                <Route path="/gridcounterflex">
                                    <GridcountFlex />
                                </Route>
                                <Route path="/gridcountercomp">
                                    <GridcountComp rows={3} columns={3} />
                                </Route> */}
                                {/* <Route path="/gridcountercomp2">
                                    <GridcountComp2 rows={3} columns={3} />
                                </Route> */}
                                {/* <Route path="/todostable">
                                    <TodoAppStable />
                                </Route>
                                <Route path="/clock">
                                    <Clock name='Testing for event' />
                                </Route>
                                <Route path="/graphqltest">
                                    <GraphQLTest />
                                </Route> */}
                                {/* <Route path="/highcharts">
                                    <ChartHigh />
                                </Route>
                                <Route path="/highchartsts">
                                    <ChartsHighTS />
                                </Route> */}
                                {/* <Route path="/">
                                    <TodoAppTest />
                                </Route> */}
                            </Switch>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </Router>
    );
  };

export default Root;