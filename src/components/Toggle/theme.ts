import { darkColors, lightColors } from "../../theme/colors";
import { ToggleTheme } from "./types";

export const light: ToggleTheme = {
  handleBackground: lightColors.light
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.light,
};
