import { darkColors, lightColors } from "../../theme/colors";
import { TooltipTheme } from "./types";

export const light: TooltipTheme = {
  background: lightColors.card,
  contrast: lightColors.contrast,
  text: lightColors.light,
  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

export const dark: TooltipTheme = {
  background: darkColors.card,
  contrast: darkColors.contrast,
  text: darkColors.light,
  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
