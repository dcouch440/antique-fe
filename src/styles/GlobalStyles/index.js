import { createGlobalStyle } from 'styled-components';
import { theme } from 'styles';

/**
 * @description Invoke within App.js to use classes across application.
 * @example
 * ```
 *  function App() {
 *    return (
 *      <>
 *        <GlobalStyles />
 *      </>
 *    )
 *  }
 * ```
 */

const GlobalStyles = createGlobalStyle`
	* {
    box-sizing: border-box;
	}
  body,
  html,
  #root {
    width: 100%;
    height: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.fontSize.reg};
    font-weight: ${theme.typography.weight.reg};
    background-color: ${theme.palette.backgroundColor.main};
    color: ${theme.palette.lightBlack.main};
	}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  .flex {
    display: flex;
  }
  .fill {
    width: 100%;
    height: 100%;
  }
  .flex-center-all-row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .flex-center-all-column {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .justify-center {
    justify-content: center;
  }
  .align-center {
    align-items: center;
  }
  .blur-background {
    background-color: #ffffff10;
    backdrop-filter: blur(10px);
  }
  .page-container {
    width: 80%;
    min-height: 100%;
    margin: 0 auto;
    ${theme.media.below.lg} {
      width: 85%;
    }
    ${theme.media.below.md} {
      width: 90%;
    }
    ${theme.media.below.sm} {
      width: 95%;
    }
  }
`;

export default GlobalStyles;
