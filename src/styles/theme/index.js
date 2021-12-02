/**
 * @constant XS
 * @constant SM
 * @constant MD
 * @constant LG
 * @description The query pixel size that will be used while selecting.
 */

const XS = `576px`;
const SM = `800px`;
const MD = `1000px`;
const LG = `1200px`;

/**
 * @description media All use of properties must be used in a cascading style.
 * @example
 * ```
 * - ${theme.media.below.lg} {}
 * - ${theme.media.below.md} {}
 * - ${theme.media.below.sm} {}
 * - ${theme.media.below.xs} {}
 * ```
 */

const media = {
  below: {
    xs: `@media (max-width: ${XS})`,
    sm: `@media (max-width: ${SM})`,
    md: `@media (max-width: ${MD})`,
    lg: `@media (max-width: ${LG})`,
  },
  above: {
    xs: `@media (min-width: ${XS})`,
    sm: `@media (min-width: ${SM})`,
    md: `@media (min-width: ${MD})`,
    lg: `@media (min-width: ${LG})`,
  },
};

const theme = {
  palette: {
    primary: {
      main: '#3A86FF',
    },
    secondary: {
      main: '#D63230',
    },
    white: {
      main: '#ffffff',
      darker: '#fff5f5',
    },
    lightBlack: {
      main: '#212529',
      transparent: '#21252990',
      lighter: '#464c52',
    },
    lightGray: {
      main: '#dddedf',
      darker: '#636363',
    },
    honeyYellow: {
      main: '#F6AE2D',
    },
    transparentWhite: {
      main: '#FFFFFF40',
    },
    backgroundColor: {
      main: '#ffffff',
    },
  },
  typography: {
    weight: {
      bold: 'bold',
    },
    fontSize: {
      reg: '14px',
      md: '18px',
      lg: '24px',
    },
    fontFamily: {
      reg: 'sans-serif',
    },
  },
  spacing: (space) => space * 12 + 'px',
  radius: (radius) => radius * 12 + 'px',
  media,
};

export default theme;
