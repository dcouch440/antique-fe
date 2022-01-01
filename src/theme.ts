import { createTheme } from '@mui/material/styles';

// until a better option is found, the custom namespace will need to be used.
declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      palette: {
        secondary: {
          transparent: string;
          slightlyLighter: string;
          slightlyDarker: string;
        };
        antiqueWhite: {
          main: string;
          transparent: string;
          lessTransparent: string;
        };
        backgroundColor: string;
      };
      typography: {
        families: {
          cursive: string;
        };
        sizes: {
          xs: number;
          sm: number;
          reg: number;
          lg: number;
        };
        adaptiveText: number;
      };
    };
    topBarHeight: number;
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom: {
      palette: {
        secondary: {
          transparent: string;
          slightlyLighter: string;
          slightlyDarker?: string;
        };
        antiqueWhite: {
          main: string;
          transparent: string;
          lessTransparent: string;
        };
        backgroundColor: string;
      };
      typography: {
        families: {
          cursive: string;
        };
        sizes: {
          xs: number;
          sm: number;
          reg: number;
          lg: number;
        };
        adaptiveText?: number;
      };
    };
    topBarHeight: number;
  }
}

const themeBase = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      dark: 'rgb(94 94 94)',
    },
    secondary: {
      main: '#171717',
      light: '#1d1d1d',
      dark: '#0b0b0b',
    },
  },
  typography: {
    fontFamily: 'sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  spacing: 12,
  custom: {
    palette: {
      secondary: {
        transparent: '#21252983',
        slightlyLighter: '#171717',
        slightlyDarker: '#171717',
      },
      antiqueWhite: {
        main: '#FAEBD7',
        transparent: '#FAEBD723',
        lessTransparent: '#FAEBD753',
      },
      backgroundColor: '#171717',
    },
    typography: {
      sizes: {
        xs: 8,
        sm: 12,
        reg: 14,
        lg: 18,
      },
      families: {
        cursive: 'Pacifico, cursive',
      },
    },
  },
  topBarHeight: 42,
});

const downMedium = themeBase.breakpoints.down('md');
const downSm = themeBase.breakpoints.down('sm');

// for self theme use.
export const theme = createTheme(themeBase, {
  custom: {
    typography: {
      adaptiveText: 14,
      [downMedium]: {
        adaptiveText: 10,
      },
      [downSm]: {
        adaptiveText: 6,
      },
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {},
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          [downSm]: {},
        },
      },
    },
    MuiButton: {
      styleOverrides: {},
    },
  },
});

export const globalSX = {
  transparentBlur: {
    backgroundColor: 'secondary.transparent',
    backdropFilter: 'blur(12px)',
  },
  scrollContainer: {
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none' /* for Chrome, Safari, and Opera */,
    },
  },
  fabDimension: {
    height: [36, 46, 64],
    width: [36, 46, 64],
  },
};
