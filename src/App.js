import React, {Fragment} from "react";
import { ThemeProvider } from '@material-ui/styles';
import theme from './utils/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
/**
 * Load components start
 */
import Root from './components/examples-root/root';
//import Welcome from './components/components-example/components-ex1';
//import ComposedComponents from './components/components-example/components-ex2';
//import Clock from './components/clock/clock';
/**
 * Load components stop
 */

const App = props => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Fragment>
          <Root />
        </Fragment>
      </ThemeProvider>
    </React.StrictMode>

  );
};

export default App;