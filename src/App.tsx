import React from 'react';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { fonts, colors } from './styles/variables';
import Title from './components/Title/Title';
import OptionPicker from './components/OptionPicker/OptionPicker';

import { ThemeProvider } from '@material-ui/core/styles';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: colors.lightYellow,
      main: colors.eggYellow,
      dark: colors.darkYellow,
      contrastText: colors.mainBlack,
    },
    secondary: {
      light: colors.lightGrey,
      main: colors.mainGrey,
      dark: colors.darkGrey,
      contrastText: colors.mainWhite,
    },
  },
});

const App =  () => (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className="app">
          <Title />
          <OptionPicker />
        </div>
      </ThemeProvider>
    </React.Fragment>
  );

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    background: ${colors.mainBlack};
    color: ${colors.mainWhite};
    font-family: ${fonts.primaryFont};
    height: 100%;
  }
  
  html {
    height: 100%;
  }
  
  #root {
    height: 100%;
    width: 100%;
  }
  
  .app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    text-align: center;
  }
  
  * {
    box-sizing: border-box;
  }
  
  .MuiBackdrop-root {
    opacity: 0 !important;
  }
`

export default App;
