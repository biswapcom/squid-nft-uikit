import { Colors } from "./types";

export const baseColors = {
  failure: "#FF1C5E",
  primary: "#FF1C5E",
  success: "#1EBB95",
  warning: "#FFC121",
};

export const brandColors = {
  binance: "#F0B90B",
  polygon: "#8247E5",
  telegram: "#239FDB",
  twitter: "#1DA1F2",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  contrast: "#191326",
  tertiary: "#151521",
  card: "#090913",
  dark: "#2B2B40",
  gray: "#4A4A60",
  light: "#7E829D",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    cardHeader: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
    cardBlue: "linear-gradient(235deg, #336FF5 4.05%, rgba(17, 81, 225, 0.32) 103.52%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#00000D",
  contrast: "#FFFFFF",
  tertiary: "#151521",
  card: "#090913",
  dark: "#2B2B40",
  gray: "#4A4A60",
  light: "#7E829D",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    cardHeader: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
    cardBlue: "linear-gradient(235deg, #336FF5 4.05%, rgba(17, 81, 225, 0.32) 103.52%)",
  },
};
