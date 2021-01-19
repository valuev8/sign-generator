import React from 'react';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { fonts, colors } from './styles/variables';
import Title from './components/Title/Title';

const App =  () => (
    <React.Fragment>
      <GlobalStyle />
      <div className="app">
        <Title />
      </div>
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
`

export default App;
