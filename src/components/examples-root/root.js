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
  import KefirTest from "../kefir-test/test";
  import GraphQLTest from "../graphqltest/apolloconnect";
  import ChartHigh from "../highcharts/test";
  import ChartsHighTS from "../highcharts/index.tsx";
  
  const Root = (props) => {
    return (
      <Router>
        <div>
            <table width="100%">
                <tbody>
                    <tr>
                        <td width="10%" valign="top">
                            <nav>
                                <ul>
                                    <li>
                                        <Link to="/">Todo-test</Link>
                                    </li>
                                    <li>
                                        <Link to="/todostable">Todo-stable</Link>
                                    </li>
                                    <li>
                                        <Link to="/clock">Clock</Link>
                                    </li>
                                    <li>
                                        <Link to="/kefirtest">Kefir-test</Link>
                                    </li>
                                    <li>
                                        <Link to="/graphqltest">graphql-test</Link>
                                    </li>
                                    <li>
                                        <Link to="/highcharts">highcharts-test</Link>
                                    </li>
                                    <li>
                                        <Link to="/highchartsts">highcharts-ts-test</Link>
                                    </li>
                                </ul>
                            </nav>
                        </td>
                        <td valign="top">
                            {/* A <Switch> looks through its children <Route>s and
                             renders the first one that matches the current URL. */}
                            <Switch>
                                <Route path="/todostable">
                                    <TodoAppStable />
                                </Route>
                                <Route path="/clock">
                                    <Clock name='Testing for event' />
                                </Route>
                                <Route path="/kefirtest">
                                    <KefirTest />
                                </Route>
                                <Route path="/graphqltest">
                                    <GraphQLTest />
                                </Route>
                                <Route path="/highcharts">
                                    <ChartHigh />
                                </Route>
                                <Route path="/highchartsts">
                                    <ChartsHighTS />
                                </Route>
                                <Route path="/">
                                    <TodoAppTest />
                                </Route>
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