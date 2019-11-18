import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    // primary: {
    // },
    // secondary: {
    // },
    // error: {
    // },
    // background: {
    // },
    // text : {
        //add primary secondary etc here
    // },
    // action : {
        //add hover,disabled etc here
    // },
    // status: {
        //your own business colors
    //   },
  },
  spacing : 4,
  typography : {
      fontFamily : 'Roboto',
      //add variants here
  },
  overrides : {
      //Add global css here
  },


});

export default theme;

