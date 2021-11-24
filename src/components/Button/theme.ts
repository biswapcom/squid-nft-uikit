import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.XL]: {
    height: "48px",
    fontSize: "24px",
    padding: "0 12px",
  },
  [scales.MD]: {
    height: "48px",
    fontSize: "16px",
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
    color: "contrast",
    // boxShadow: "0px 6px 24px rgba(255, 28, 94, 0.32), inset 0px 1px 0.5px #FF4B56, inset 0px -2px 1px #B40034",
    ":hover": {
      backgroundColor: "#FF3A74",
    },
  },
  [variants.SECONDARY]: {
    backgroundColor: "success",
    // boxShadow: "0px 6px 24px rgba(30, 187, 149, 0.32), inset 0px 1px 0.5px #1EBB95, inset 0px -2px 1px #007B5D",
    color: "contrast",
    ":hover": {
      backgroundColor: "#007B5D",
    },
  },
  [variants.TRANSPARENT]: {
    backgroundColor: "transparent",
    color: "contrast",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "dark",
    color: "contrast",
    // boxShadow: "inset 0px 1px 0.5px #212131, inset 0px -2px 1px #0A0A11",
    ":hover": {
      backgroundColor: "#141422",
    },
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "contrast",
    boxShadow: "none",
  },
};
