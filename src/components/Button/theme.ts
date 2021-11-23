import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.XL]: {
    height: "48px",
    fontSize: "24px",
    padding: "0 12px",
  },
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "40px",
    fontSize: "14px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "32px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primary",
    color: "white",
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    color: "primary",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TRANSPARENT]: {
    backgroundColor: "transparent",
    color: "background",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "white",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
  [variants.DARK]: {
    backgroundColor: "dark",
    color: "text",
    boxShadow: "none",
  },
  [variants.PRIMARY_DARK]: {
    backgroundColor: "inputSecondary",
    color: "contrast",
    boxShadow: "none",
  },
};
