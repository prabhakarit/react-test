import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import theme from './utils/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import GridcountComp2 from './components/gridcountComp2/';  

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <GridcountComp2 rows={5} columns={4} />
        </ThemeProvider>
      </CssBaseline>
    </React.StrictMode>

  );
};

export default App;