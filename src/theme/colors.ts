import { Colors } from "./types";

export const baseColors = {
  failure: "#F93B5D",
  primary: "#1263F1",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "#1DC872",
  warning: "#FFDB1C",
  dark: "#102648",
};

export const brandColors = {
  binance: "#F0B90B",
  polygon: "#8247E5",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundContrast: '#07162D',
  backgroundDisabled: "#E9EAEB",
  header: "#071C3C",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputBorder: "#E5EAF2",
  inputSecondary: "#d7caec",
  tertiary: "#E4EFFF",
  text: "#452A7A",
  disabled: "#E9EAEB",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  dropDown: "#F6F6F6",
  footer: "#FFFFFF",
  boost: "#7412F1",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    cardHeader: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
    cardBlue: "linear-gradient(235deg, #336FF5 4.05%, rgba(17, 81, 225, 0.32) 103.52%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  header: "#071C3C",
  background: "#07162D",
  backgroundContrast: '#F9FAFD',
  backgroundDisabled: "#C8D4E6",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#021127",
  inputBorder: "#1C3254",
  inputSecondary: "#0E3382",
  primaryDark: "#0098A1",
  tertiary: "#E4EFFF",
  text: "#708DB7",
  disabled: "#F2F6FC",
  textDisabled: "#C8D4E6",
  textSubtle: "#749BD8",
  borderColor: "#524B63",
  card: "#102648",
  dropDown: "#1C3254",
  footer: "#0C1F3C",
  boost: "#7412F1",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    cardHeader: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
    cardBlue: "linear-gradient(235deg, #336FF5 4.05%, rgba(17, 81, 225, 0.32) 103.52%)",
  },
};
