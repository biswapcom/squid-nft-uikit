export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xll: string;
  xxl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
  cardHeader: string;
  cardBlue: string;
};

export type Colors = {
  primary: string;
  success: string;
  failure: string;
  warning: string;
  contrast: string;
  background: string;
  tertiary: string;
  card: string;
  dark: string;
  gray: string;
  light: string;
  grizzly: string

  // Gradients
  gradients: Gradients;

  // Brand colors
  binance: string;
  polygon: string;
  telegram: string;
  twitter: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
