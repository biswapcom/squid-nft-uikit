import { AlertTheme } from "../components/Alert/types";
import { RadioTheme } from "../components/Radio/types";
import { ToggleTheme } from "../components/Toggle/types";
import { TooltipTheme } from "../components/Tooltip/types";
import { ModalTheme } from "../widgets/Modal/types";
import { Colors, Breakpoints, MediaQueries, Spacing, Shadows, Radii, ZIndices } from "./types";
export interface BiswapTheme {
    siteWidth: number;
    isDark: boolean;
    alert: AlertTheme;
    colors: Colors;
    modal: ModalTheme;
    radio: RadioTheme;
    toggle: ToggleTheme;
    tooltip: TooltipTheme;
    breakpoints: Breakpoints;
    mediaQueries: MediaQueries;
    spacing: Spacing;
    shadows: Shadows;
    radii: Radii;
    zIndices: ZIndices;
}
export { default as dark } from "./dark";
export { default as light } from "./light";
export { lightColors } from "./colors";
export { darkColors } from "./colors";
