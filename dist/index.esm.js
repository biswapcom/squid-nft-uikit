import React, { isValidElement, cloneElement, Children, useRef, useEffect, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, ThemeProvider, createGlobalStyle } from 'styled-components';
import { space, variant as variant$1, layout, background, border, position, flexbox, typography } from 'styled-system';
import get from 'lodash/get';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TwitterShareButton, TelegramShareButton } from 'react-share';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get(theme, path, fallback);
}; };

var rotate$2 = keyframes(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$2);
var Svg = styled.svg(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors.".concat(color), color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$K, templateObject_2$n, templateObject_3$b;

var Icon$1D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$1B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$1A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("path", { d: "M8 2C4.6875 2 2 4.6875 2 8C2 11.3125 4.6875 14 8 14C11.3125 14 14 11.3125 14 8C14 4.6875 11.3125 2 8 2ZM7.8125 11.5C7.68889 11.5 7.56805 11.4633 7.46527 11.3947C7.36249 11.326 7.28238 11.2284 7.23508 11.1142C7.18777 11 7.17539 10.8743 7.19951 10.7531C7.22362 10.6318 7.28315 10.5205 7.37056 10.4331C7.45797 10.3456 7.56933 10.2861 7.69057 10.262C7.81181 10.2379 7.93747 10.2503 8.05168 10.2976C8.16588 10.3449 8.26349 10.425 8.33217 10.5278C8.40084 10.6305 8.4375 10.7514 8.4375 10.875C8.4375 11.0408 8.37165 11.1997 8.25444 11.3169C8.13723 11.4342 7.97826 11.5 7.8125 11.5V11.5ZM8.8575 8.3125C8.35094 8.6525 8.28125 8.96406 8.28125 9.25C8.28125 9.36603 8.23516 9.47731 8.15311 9.55936C8.07106 9.64141 7.95978 9.6875 7.84375 9.6875C7.72772 9.6875 7.61644 9.64141 7.53439 9.55936C7.45234 9.47731 7.40625 9.36603 7.40625 9.25C7.40625 8.56531 7.72125 8.02094 8.36938 7.58563C8.97188 7.18125 9.3125 6.925 9.3125 6.36156C9.3125 5.97844 9.09375 5.6875 8.64094 5.47219C8.53438 5.42156 8.29719 5.37219 8.00531 5.37563C7.63906 5.38031 7.35469 5.46781 7.13562 5.64406C6.7225 5.97656 6.6875 6.33844 6.6875 6.34375C6.68473 6.4012 6.67067 6.45755 6.64612 6.50957C6.62158 6.56159 6.58703 6.60826 6.54444 6.64693C6.50186 6.6856 6.45208 6.7155 6.39794 6.73493C6.3438 6.75435 6.28636 6.76293 6.22891 6.76016C6.17145 6.75739 6.11511 6.74333 6.06309 6.71878C6.01107 6.69424 5.96439 6.65968 5.92573 6.6171C5.88706 6.57452 5.85716 6.52473 5.83773 6.47059C5.8183 6.41645 5.80973 6.35902 5.8125 6.30156C5.81594 6.22562 5.86875 5.54156 6.58656 4.96406C6.95875 4.66469 7.43219 4.50906 7.99281 4.50219C8.38969 4.4975 8.7625 4.56469 9.01531 4.68406C9.77187 5.04187 10.1875 5.63844 10.1875 6.36156C10.1875 7.41875 9.48094 7.89344 8.8575 8.3125Z" })));
};

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales$5 = {
    XL: 'xl',
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$3 = {
    PRIMARY: "primary",
    TRANSPARENT: "transparent",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    UNDERLINE: 'underline',
};

var _a$4, _b$1;
var scaleVariants$1 = (_a$4 = {},
    _a$4[scales$5.XL] = {
        height: "48px",
        fontSize: "24px",
        padding: "0 12px",
    },
    _a$4[scales$5.MD] = {
        height: "48px",
        fontSize: "16px",
        padding: "0 24px",
    },
    _a$4[scales$5.SM] = {
        height: "40px",
        fontSize: "14px",
        padding: "0 16px",
    },
    _a$4[scales$5.XS] = {
        height: "32px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a$4);
var styleVariants$2 = (_b$1 = {},
    _b$1[variants$3.PRIMARY] = {
        backgroundColor: "primary",
        color: "contrast",
        boxShadow: "0px 6px 24px rgba(255, 28, 94, 0.32), inset 0px 1px 0.5px #FF4B56, inset 0px -2px 1px #B40034",
        ":hover": {
            backgroundColor: "#FF3A74",
            boxShadow: "inset 0px 1px 0.5px #FF4B56, inset 0px -2px 1px #B40034",
        },
    },
    _b$1[variants$3.SECONDARY] = {
        backgroundColor: "success",
        boxShadow: "0px 6px 24px rgba(30, 187, 149, 0.32), inset 0px 1px 0.5px #1EBB95, inset 0px -2px 1px #007B5D",
        color: "contrast",
        ":hover": {
            backgroundColor: "#007B5D",
            boxShadow: "inset 0px 1px 0.5px #1EBB95, inset 0px -2px 1px #007B5D",
        },
    },
    _b$1[variants$3.TRANSPARENT] = {
        backgroundColor: "transparent",
        color: "contrast",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b$1[variants$3.UNDERLINE] = {
        backgroundColor: "transparent",
        color: "contrast",
        ":disabled": {
            backgroundColor: "transparent",
            color: 'gray'
        },
    },
    _b$1[variants$3.TERTIARY] = {
        backgroundColor: "dark",
        color: "contrast",
        // boxShadow: "inset 0px 1px 0.5px #212131, inset 0px -2px 1px #0A0A11",
        ":hover": {
            backgroundColor: "#46465F",
        },
    },
    _b$1[variants$3.TEXT] = {
        backgroundColor: "transparent",
        color: "contrast",
        boxShadow: "none",
    },
    _b$1);

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading; _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.biswap-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.biswap-button--disabled {\n      opacity: 0.32;\n      cursor: not-allowed;\n    }\n  ";
};
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton$1 = styled.button(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  position: relative;\n  align-items: center;\n  border: 0;\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.3s, opacity 0.3s, box-shadow 0.3s ease;\n\n  &:hover:not(:disabled):not(.biswap-button--disabled):not(.biswap-button--disabled):not(:active):not(.hover-disabled) {\n    //opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.biswap-button--disabled):not(.biswap-button--disabled):not(.hover-disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  \n  &:after {\n    display: ", ";\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    height: 4px;\n    border-radius: 4px;\n    width: calc(100% - ", ");\n    background-color: ", ";\n  }\n"], ["\n  position: relative;\n  align-items: center;\n  border: 0;\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.3s, opacity 0.3s, box-shadow 0.3s ease;\n\n  &:hover:not(:disabled):not(.biswap-button--disabled):not(.biswap-button--disabled):not(:active):not(.hover-disabled) {\n    //opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.biswap-button--disabled):not(.biswap-button--disabled):not(.hover-disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  \n  &:after {\n    display: ", ";\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    height: 4px;\n    border-radius: 4px;\n    width: calc(100% - ", ");\n    background-color: ", ";\n  }\n"])), getOpacity, getDisabledStyles, variant$1({
    prop: "scale",
    variants: scaleVariants$1,
}), variant$1({
    variants: styleVariants$2,
}), layout, space, function (_a) {
    var variant = _a.variant;
    return variant === variants$3.UNDERLINE ? 'block' : 'none';
}, function (_a) {
    var scale = _a.scale;
    return scale === scales$5.XS ? '12px' : scale === scales$5.SM ? '28px' : scale === scales$5.MD ? '16px' : '24px';
}, function (_a) {
    var theme = _a.theme, line = _a.line;
    return line ? theme.colors[line] : theme.colors.primary;
});
var templateObject_1$J;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, line = props.line, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children", "line"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("biswap-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("biswap-button--disabled");
    }
    return (React.createElement(StyledButton$1, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled, line: line }, internalProps, rest),
        React.createElement(React.Fragment, null,
            isValidElement(startIcon) &&
                cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            isValidElement(endIcon) &&
                cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$3.PRIMARY,
    scale: scales$5.MD,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$I;

var Icon$1z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$1x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$1w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$1v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$1u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$1t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$1s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$1r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$1q = function (props) {
    return (React.createElement(Svg, __assign({ width: "24", height: "24", viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M20.6289 15.9989C20.5511 15.9052 20.4747 15.8114 20.3997 15.7209C19.3684 14.4736 18.7445 13.7208 18.7445 10.1897C18.7445 8.36156 18.3072 6.86156 17.4451 5.73656C16.8095 4.90547 15.9503 4.275 14.8178 3.80906C14.8032 3.80096 14.7902 3.79032 14.7794 3.77766C14.372 2.41359 13.2573 1.5 12.0001 1.5C10.743 1.5 9.62873 2.41359 9.22139 3.77625C9.21052 3.78845 9.19768 3.79875 9.18342 3.80672C6.54061 4.89469 5.25623 6.98203 5.25623 10.1883C5.25623 13.7208 4.63326 14.4736 3.60108 15.7195C3.52608 15.81 3.44967 15.9019 3.37186 15.9975C3.17086 16.2399 3.04351 16.5348 3.00488 16.8473C2.96625 17.1598 3.01796 17.4769 3.15389 17.7609C3.44311 18.3703 4.05951 18.7486 4.76311 18.7486H19.2423C19.9426 18.7486 20.5548 18.3708 20.845 17.7642C20.9815 17.4801 21.0337 17.1628 20.9954 16.8499C20.9571 16.537 20.8299 16.2417 20.6289 15.9989ZM12.0001 22.5C12.6775 22.4995 13.3421 22.3156 13.9234 21.9679C14.5047 21.6202 14.9811 21.1217 15.302 20.5252C15.3171 20.4966 15.3246 20.4646 15.3237 20.4322C15.3228 20.3999 15.3135 20.3684 15.2968 20.3407C15.2801 20.313 15.2565 20.2901 15.2284 20.2742C15.2002 20.2583 15.1684 20.25 15.1361 20.25H8.86514C8.83276 20.2499 8.8009 20.2582 8.77267 20.274C8.74444 20.2899 8.7208 20.3128 8.70404 20.3405C8.68728 20.3682 8.67799 20.3997 8.67706 20.4321C8.67613 20.4645 8.6836 20.4965 8.69873 20.5252C9.01961 21.1216 9.49591 21.6201 10.0771 21.9678C10.6584 22.3155 11.3229 22.4994 12.0001 22.5Z" })));
};

var Icon$1p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$1o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React.createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React.createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React.createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React.createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React.createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$1n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React.createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$1m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$1l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$1k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$1j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M17.0024 7C17.0024 6.44772 16.5547 6 16.0024 6C15.4502 6 15.0024 6.44772 15.0024 7L15.0024 17C15.0024 17.5523 15.4502 18 16.0024 18C16.5547 18 17.0024 17.5523 17.0024 17L17.0024 7Z" }),
        React.createElement("path", { d: "M11.1725 12L7.2925 15.88C6.9025 16.27 6.9125 16.91 7.2925 17.3C7.6825 17.69 8.3125 17.69 8.7025 17.3L13.2925 12.71C13.6825 12.32 13.6825 11.69 13.2925 11.3L8.7025 6.70998C8.3125 6.31998 7.6825 6.31998 7.2925 6.70998C6.9025 7.09998 6.9025 7.72998 7.2925 8.11998L11.1725 12Z" })));
};

var Icon$1i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$1h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.2987 5.70997C17.9087 5.31997 17.2787 5.31997 16.8887 5.70997L11.9988 10.59L7.10875 5.69997C6.71875 5.30997 6.08875 5.30997 5.69875 5.69997C5.30875 6.08997 5.30875 6.71997 5.69875 7.10997L10.5888 12L5.69875 16.89C5.30875 17.28 5.30875 17.91 5.69875 18.3C6.08875 18.69 6.71875 18.69 7.10875 18.3L11.9988 13.41L16.8887 18.3C17.2787 18.69 17.9087 18.69 18.2987 18.3C18.6887 17.91 18.6887 17.28 18.2987 16.89L13.4087 12L18.2987 7.10997C18.6787 6.72997 18.6787 6.08997 18.2987 5.70997Z" })));
};

var Icon$1g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$1f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$1e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M15.9375 18.75H7.1875C6.44158 18.75 5.72621 18.4537 5.19876 17.9262C4.67132 17.3988 4.375 16.6834 4.375 15.9375L4.375 7.1875C4.375 6.44158 4.67132 5.72621 5.19876 5.19876C5.72621 4.67132 6.44158 4.375 7.1875 4.375L15.9375 4.375C16.6834 4.375 17.3988 4.67132 17.9262 5.19876C18.4537 5.72621 18.75 6.44158 18.75 7.1875V15.9375C18.75 16.6834 18.4537 17.3988 17.9262 17.9262C17.3988 18.4537 16.6834 18.75 15.9375 18.75Z" }),
        React.createElement("path", { d: "M6.25 3.125L15.4641 3.125C15.2696 2.57705 14.9104 2.10268 14.4356 1.76699C13.9609 1.43129 13.3939 1.2507 12.8125 1.25L4.0625 1.25C3.31658 1.25 2.60121 1.54632 2.07376 2.07376C1.54632 2.60121 1.25 3.31658 1.25 4.0625L1.25 12.8125C1.2507 13.3939 1.43129 13.9609 1.76699 14.4356C2.10268 14.9104 2.57705 15.2696 3.125 15.4641L3.125 6.25C3.125 5.4212 3.45424 4.62634 4.04029 4.04029C4.62634 3.45424 5.4212 3.125 6.25 3.125Z" })));
};

var Icon$1d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$1c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$1b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 40 40", fill: "none" }, props),
        React.createElement("path", { d: "M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z", fill: "#fff" }),
        React.createElement("path", { d: "M35.492 7.524c-1.387.274-2.71.662-3.798.903-2.484.557-4.807 2.46-5.315 5.944-.452 3.113.597 4.452.137 8.073-.806 6.322-6.87 8.5-9.701 9.822-1.638.758-5.613 2.5-8.678 3.83A19.9 19.9 0 0020 40c11.049 0 20-8.952 20-20 0-4.71-1.629-9.04-4.355-12.452a6.31 6.31 0 00-.153-.024z", fill: "url(#logo-color-1)" }),
        React.createElement("path", { d: "M17.75 17.064c1.54-3.33.984-3.338 2.153-6.467 1.476-3.968 6.065-2.839 7.33-2.67 2.09.283 2.638-.46 7.041-1.169.218-.032.428-.064.637-.089C31.25 2.581 25.927 0 20 0 12.04 0 5.17 4.645 1.952 11.379c6.596 1.637 13.717 5.194 15.798 5.685zm-4.371-13.58c.58.089 3.403 3.597 3.935 12.605 0 0-3.629-.871-4.41-2.742-.646-1.54.193-3.565.475-9.863zm22.234 4.024c.008.016.024.024.032.04-.048-.008-.105-.008-.153-.016.04-.016.08-.016.12-.024zM0 20c0-1.597.185-3.145.54-4.63.726.606 1.5 1.275 2.323 2.041 5.21 4.83 13.685 8.645 16.774 5.097.008.008.016.008.016.016-.564.742-2.717 3.089-6.83 2.363l-6.5 9.702A19.943 19.943 0 010 20z", fill: "url(#logo-color-2)" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "logo-color-1", x1: "32.011", y1: "12.762", x2: "27.293", y2: "38.757", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#FF496A" }),
                React.createElement("stop", { offset: "1", stopColor: "#E42648" })),
            React.createElement("linearGradient", { id: "logo-color-2", x1: "9.653", y1: "29.461", x2: "20.086", y2: "0", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { offset: ".002", stopColor: "#1158F1" }),
                React.createElement("stop", { offset: "1", stopColor: "#119BED" })))));
};

var rotate$1 = keyframes(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var Loader = styled(Svg)(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$1);
var Icon$1a = function (props) {
    return (React.createElement(Loader, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};
var templateObject_1$H, templateObject_2$m;

var Icon$19 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React.createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React.createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React.createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React.createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React.createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React.createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React.createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React.createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React.createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React.createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React.createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React.createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.75 4.03409C18.7492 3.29595 18.4556 2.58826 17.9337 2.06632C17.4117 1.54437 16.7041 1.25079 15.9659 1.25L4.03409 1.25C3.29595 1.25079 2.58826 1.54437 2.06632 2.06632C1.54437 2.58826 1.25079 3.29595 1.25 4.03409L1.25 15.9659C1.25079 16.7041 1.54437 17.4117 2.06632 17.9337C2.58826 18.4556 3.29595 18.7492 4.03409 18.75H15.9659C16.7041 18.7492 17.4117 18.4556 17.9337 17.9337C18.4556 17.4117 18.7492 16.7041 18.75 15.9659V4.03409ZM14.66 10.5015L14.6596 6.54524L7.57871 13.6261C7.41608 13.7888 7.19447 13.8785 6.96449 13.8749C6.50585 13.8676 6.1358 13.4975 6.12853 13.0389C6.12487 12.8089 6.21461 12.5873 6.37725 12.4247L13.4581 5.34377L9.50194 5.3434C9.28046 5.33773 9.06995 5.24576 8.91532 5.0871C8.76067 4.92845 8.67413 4.71567 8.67413 4.49411C8.67413 4.27255 8.76067 4.05977 8.91532 3.90111C9.06995 3.74246 9.28046 3.65049 9.50194 3.64482L15.5093 3.64482C15.7345 3.64489 15.9505 3.7344 16.1097 3.89365C16.269 4.05291 16.3585 4.26889 16.3586 4.49411V10.5015C16.3529 10.7229 16.2609 10.9334 16.1023 11.0881C15.9436 11.2427 15.7308 11.3293 15.5093 11.3293C15.2877 11.3293 15.0749 11.2427 14.9163 11.0881C14.7576 10.9334 14.6657 10.7229 14.66 10.5015Z" })));
};

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$15 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$13 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React.createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React.createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ width: "24", height: "24", viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M16.59 9H15V4C15 3.45 14.55 3 14 3H10C9.45 3 9 3.45 9 4V9H7.41C6.52 9 6.07 10.08 6.7 10.71L11.29 15.3C11.68 15.69 12.31 15.69 12.7 15.3L17.29 10.71C17.92 10.08 17.48 9 16.59 9ZM5 19C5 19.55 5.45 20 6 20H18C18.55 20 19 19.55 19 19C19 18.45 18.55 18 18 18H6C5.45 18 5 18.45 5 19Z" })));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M20.9822 5.07062C20.8756 6.63229 18.0143 18.2999 18.0143 18.2999C18.0143 18.2999 17.8366 18.982 17.2146 19C17.0013 19 16.717 18.982 16.3971 18.6769C15.7395 18.1204 14.2467 17.0434 12.8427 16.0562C12.7894 16.11 12.7361 16.1639 12.665 16.2177C12.3451 16.5049 11.8653 16.9178 11.3499 17.4204C11.1544 17.5999 10.9411 17.7973 10.7279 18.0127L10.7101 18.0307C10.5857 18.1563 10.4791 18.2461 10.3902 18.3179C9.69709 18.8923 9.62601 18.4076 9.62601 18.1563L9.99922 14.0457V14.0098L10.017 13.9739C10.0348 13.9201 10.0703 13.9021 10.0703 13.9021C10.0703 13.9021 17.339 7.36825 17.5345 6.66819C17.5523 6.63229 17.4989 6.59639 17.4101 6.63229C16.9302 6.79385 8.55969 12.143 7.63555 12.7354C7.58224 12.7713 7.42229 12.7533 7.42229 12.7533L3.35254 11.4071C3.35254 11.4071 2.8727 11.2096 3.03264 10.7608C3.06819 10.6711 3.1215 10.5813 3.31699 10.4557C4.22336 9.80948 19.987 4.08336 19.987 4.08336C19.987 4.08336 20.4313 3.93976 20.6979 4.02951C20.8223 4.08336 20.8934 4.13721 20.9645 4.31671C20.9822 4.38851 21 4.53212 21 4.69367C21 4.78342 20.9822 4.89112 20.9822 5.07062Z" })));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.4158 8.3528C11.8828 8.88474 10.3235 10.444 10.3235 10.444C10.3235 10.444 10.6654 12.1511 9.80615 13.4062C9.65016 13.6341 9.32911 13.6324 9.13385 13.4372L3.14805 7.45132C2.95278 7.25606 2.95113 6.93494 3.17934 6.77945C4.43557 5.9235 6.14832 6.28183 6.14832 6.28183C6.14832 6.28183 6.98173 5.42057 8.23238 4.16991C9.9052 2.49653 13.2519 3.33322 13.2519 3.33322C13.2519 3.33322 14.0886 6.67997 12.4158 8.3528ZM6.05548 12.1512C4.9632 13.2435 3.32479 13.2435 3.32479 13.2435C3.32479 13.2435 3.32479 11.0589 4.41707 10.5128L6.05548 12.1512ZM10.1112 6.47413C10.5017 6.86465 11.1348 6.86465 11.5254 6.47413C11.9159 6.08361 11.9159 5.45044 11.5254 5.05992C11.1348 4.66939 10.5017 4.66939 10.1112 5.05992C9.72063 5.45044 9.72063 6.08361 10.1112 6.47413Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "16", height: "16" })))));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("path", { d: "M12.7697 3.74169C12.7005 3.70807 12.623 3.69384 12.5459 3.70058C12.4689 3.70732 12.3952 3.73477 12.3333 3.77985C10.8594 4.85278 9.61031 4.33322 8.16413 3.73167C6.69309 3.1198 5.02586 2.42653 3.16668 3.77985C3.16421 3.78164 3.16207 3.78367 3.15968 3.7855C3.15391 3.78989 3.14834 3.79443 3.14282 3.79911C3.13766 3.80349 3.13255 3.80791 3.12767 3.81249C3.12311 3.81675 3.11874 3.82115 3.11439 3.82561C3.10918 3.83094 3.10404 3.83629 3.09918 3.84185C3.0955 3.84607 3.09201 3.85042 3.0885 3.85478C3.08367 3.86078 3.07889 3.8668 3.07446 3.87302C3.07116 3.87761 3.06813 3.88235 3.06503 3.88708C3.06101 3.89326 3.05699 3.89943 3.05333 3.9058C3.0502 3.9112 3.04735 3.91677 3.04448 3.92234C3.04145 3.92823 3.03838 3.93411 3.03566 3.94012C3.03276 3.94649 3.03019 3.95302 3.02762 3.95954C3.02546 3.96506 3.02327 3.97056 3.02136 3.97616C3.019 3.98308 3.01699 3.99014 3.01501 3.99723C3.01343 4.00284 3.01185 4.00841 3.01053 4.01408C3.00895 4.02092 3.00766 4.02786 3.00644 4.03484C3.00532 4.04117 3.00425 4.04749 3.00343 4.05387C3.00265 4.06015 3.00209 4.06647 3.00158 4.07284C3.00102 4.0802 3.00061 4.08757 3.00043 4.09496C3.00038 4.0978 3 4.10054 3 4.10338V12.5956C3 12.7029 3.0439 12.8057 3.12204 12.8816C3.20018 12.9574 3.30616 13 3.41667 13C3.52717 13 3.63315 12.9574 3.71129 12.8816C3.78943 12.8057 3.83333 12.7029 3.83333 12.5956V10.3782C5.23559 9.46014 6.4446 9.96224 7.83587 10.541C8.68293 10.8933 9.595 11.2727 10.5714 11.2726C11.2906 11.2726 12.0447 11.0668 12.8333 10.4928C12.8851 10.4551 12.9271 10.4063 12.956 10.3501C12.9849 10.294 13 10.232 13 10.1693V4.10338C13 4.02828 12.9785 3.95467 12.9378 3.89079C12.8971 3.8269 12.8389 3.77528 12.7697 3.74169Z" })));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("g", { opacity: "0.56" },
            React.createElement("path", { d: "M18.6667 7.625L6 7.625C5.82319 7.625 5.65362 7.55586 5.5286 7.43279C5.40357 7.30972 5.33333 7.1428 5.33333 6.96875C5.33333 6.7947 5.40357 6.62778 5.5286 6.50471C5.65362 6.38164 5.82319 6.3125 6 6.3125L16.6667 6.3125C16.8435 6.3125 17.013 6.24336 17.1381 6.12029C17.2631 5.99722 17.3333 5.8303 17.3333 5.65625C17.3333 5.4822 17.2631 5.31528 17.1381 5.19221C17.013 5.06914 16.8435 5 16.6667 5L6 5C5.46975 5.0006 4.9614 5.20821 4.58646 5.57729C4.21151 5.94638 4.00061 6.44679 4 6.96875L4 17.0312C4.00061 17.5532 4.21151 18.0536 4.58646 18.4227C4.9614 18.7918 5.46975 18.9994 6 19H18.6667C19.0202 18.9996 19.3591 18.8612 19.609 18.6151C19.859 18.3691 19.9996 18.0355 20 17.6875V8.9375C19.9996 8.58953 19.859 8.25592 19.609 8.00986C19.3591 7.76381 19.0202 7.6254 18.6667 7.625ZM16.3333 14.5156C16.1356 14.5156 15.9422 14.4579 15.7778 14.3497C15.6133 14.2416 15.4851 14.0878 15.4095 13.908C15.3338 13.7281 15.314 13.5302 15.3525 13.3392C15.3911 13.1483 15.4864 12.9729 15.6262 12.8352C15.7661 12.6975 15.9443 12.6038 16.1382 12.5658C16.3322 12.5278 16.5333 12.5473 16.716 12.6218C16.8987 12.6963 17.0549 12.8225 17.1648 12.9844C17.2747 13.1462 17.3333 13.3366 17.3333 13.5313C17.3333 13.7923 17.228 14.0427 17.0404 14.2273C16.8529 14.4119 16.5985 14.5156 16.3333 14.5156Z" }))));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" })));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.38031 13.532L4.01253 11.58C3.71703 11.4726 3.46156 11.2772 3.28053 11.0201C3.09949 10.763 3.00159 10.4566 3.00002 10.1422C2.99844 9.82779 3.09327 9.52044 3.27172 9.26156C3.45016 9.00268 3.70367 8.80471 3.99807 8.69431L18.9218 3.09796C19.1983 2.99424 19.4988 2.97234 19.7875 3.03486C20.0761 3.09738 20.3407 3.24168 20.5495 3.45052C20.7584 3.65936 20.9027 3.92392 20.9652 4.21257C21.0277 4.50122 21.0057 4.80176 20.902 5.07829V5.07824L15.3056 20.0019C15.1974 20.2961 15.0011 20.5498 14.7435 20.7284C14.4858 20.907 14.1794 21.0019 13.8659 21H13.8578C13.5429 21.0003 13.2356 20.9032 12.9782 20.7219C12.7207 20.5406 12.5257 20.2841 12.4199 19.9875L10.468 14.6197L4.40017 20.6874C4.25593 20.8317 4.0603 20.9127 3.85631 20.9127C3.65233 20.9127 3.4567 20.8317 3.31246 20.6874C3.16822 20.5432 3.08718 20.3476 3.08718 20.1436C3.08718 19.9396 3.16822 19.744 3.31246 19.5997L9.38031 13.532Z" })));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6.90909 9.06666C6.90909 11.9017 9.18837 14.2 12 14.2C14.8116 14.2 17.0909 11.9017 17.0909 9.06666C17.0909 6.2316 14.8116 3.93333 12 3.93333C9.18837 3.93333 6.90909 6.2316 6.90909 9.06666Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.6021 2.46693C15.2546 1.51168 13.6473 0.999364 12 1C10.3528 0.999362 8.74568 1.51161 7.39813 2.46673C6.05059 3.42185 5.02842 4.77325 4.4713 6.33624C3.91419 7.89924 3.84932 9.59757 4.28556 11.1991C4.7218 12.8007 5.63786 14.2274 6.90856 15.2842V22.2666C6.90856 22.3916 6.94024 22.5146 7.00061 22.6237C7.06097 22.7329 7.14801 22.8247 7.25346 22.8904C7.3589 22.9562 7.47926 22.9936 7.6031 22.9992C7.72694 23.0049 7.85015 22.9785 7.96103 22.9226L12.0001 20.8865L16.0378 22.9225C16.1487 22.9785 16.2719 23.0049 16.3958 22.9993C16.5196 22.9937 16.64 22.9562 16.7455 22.8905C16.8509 22.8248 16.938 22.733 16.9983 22.6238C17.0587 22.5146 17.0904 22.3916 17.0904 22.2666V15.2851C18.3613 14.2284 19.2777 12.8018 19.7142 11.2002C20.1506 9.59852 20.0859 7.90006 19.5289 6.3369C18.9719 4.77375 17.9497 3.42218 16.6021 2.46693ZM15.6365 14.5543C14.5601 15.2796 13.2946 15.6666 12 15.6666C10.2646 15.6647 8.60091 14.9687 7.37383 13.7314C6.14674 12.4941 5.4565 10.8165 5.45455 9.06666C5.45455 7.7613 5.83843 6.48526 6.55765 5.3999C7.27688 4.31453 8.29914 3.4686 9.49516 2.96906C10.6912 2.46952 12.0073 2.33882 13.277 2.59348C14.5466 2.84814 15.7129 3.47673 16.6283 4.39976C17.5437 5.32278 18.1671 6.49879 18.4197 7.77906C18.6722 9.05933 18.5426 10.3864 18.0472 11.5924C17.5518 12.7984 16.7129 13.8291 15.6365 14.5543Z" })));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3.33263 6.25H5.33157V5.5C5.33198 5.10231 5.47251 4.72105 5.72234 4.43984C5.97216 4.15864 6.31089 4.00045 6.6642 4H17.3252C17.6785 4.00045 18.0173 4.15864 18.2671 4.43984C18.5169 4.72105 18.6575 5.10231 18.6579 5.5V6.25H20.6674C21.0207 6.25045 21.3594 6.40864 21.6092 6.68984C21.8591 6.97105 21.9996 7.35231 22 7.75V9.25C21.999 10.2442 21.6477 11.1974 21.0231 11.9004C20.3985 12.6034 19.5517 12.9989 18.6684 13H18.3316C17.5285 15.8066 15.3213 17.9075 12.661 18.2109V20.5H14.66C14.8367 20.5 15.0062 20.579 15.1311 20.7197C15.2561 20.8603 15.3263 21.0511 15.3263 21.25C15.3263 21.4489 15.2561 21.6397 15.1311 21.7803C15.0062 21.921 14.8367 22 14.66 22H9.32946C9.15274 22 8.98326 21.921 8.8583 21.7803C8.73334 21.6397 8.66314 21.4489 8.66314 21.25C8.66314 21.0511 8.73334 20.8603 8.8583 20.7197C8.98326 20.579 9.15274 20.5 9.32946 20.5H11.3284V18.2131C10.0308 18.0654 8.80008 17.4929 7.78839 16.5664C6.77671 15.6399 6.0284 14.4 5.63598 13H5.33157C4.44829 12.9989 3.60148 12.6034 2.97691 11.9004C2.35234 11.1974 2.00101 10.2442 2 9.25V7.75C2.0004 7.35231 2.14094 6.97105 2.39076 6.68984C2.64059 6.40864 2.97932 6.25045 3.33263 6.25ZM18.6684 11.5C19.1984 11.4993 19.7065 11.262 20.0812 10.8402C20.456 10.4184 20.6668 9.84653 20.6674 9.25V7.75H18.6579V10.6652C18.6575 10.9441 18.6436 11.2228 18.6163 11.5H18.6684ZM3.33263 9.25C3.33323 9.84653 3.54403 10.4184 3.91878 10.8402C4.29352 11.262 4.80161 11.4993 5.33157 11.5H5.36423C5.34255 11.2524 5.33167 11.0024 5.33157 10.75V7.75H3.33263V9.25Z" })));
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 8.31935V6.75448C9.10375 6.75448 6.75 9.10616 6.75 11.9999C6.75 12.6905 6.88125 13.3637 7.135 13.9669C7.26625 14.2816 7.17 14.64 6.93375 14.8761C6.4875 15.3219 5.735 15.1646 5.49875 14.5788C5.175 13.7833 5 12.9091 5 11.9999C5 8.13576 8.1325 5.00602 12 5.00602V3.44115C12 3.04775 12.4725 2.85542 12.7438 3.12643L15.185 5.56553C15.36 5.74037 15.36 6.01139 15.185 6.18623L12.7438 8.62533C12.4725 8.90508 12 8.71275 12 8.31935ZM16.865 10.0328C16.7337 9.72686 16.83 9.35968 17.0662 9.12364C17.5125 8.67778 18.265 8.83514 18.5013 9.42088C18.825 10.2164 19 11.0907 19 11.9999C19 15.8639 15.8675 18.9937 12 18.9937V20.5673C12 20.952 11.5275 21.1443 11.2562 20.8733L8.815 18.4342C8.64 18.2593 8.64 17.9883 8.815 17.8135L11.2562 15.3744C11.5275 15.0946 12 15.287 12 15.6804V17.2452C14.8962 17.2452 17.25 14.8936 17.25 11.9999C17.25 11.3092 17.11 10.6448 16.865 10.0328Z" })));
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M0 12.0057L0 5.8403C0 5.41523 0.227073 5.02171 0.597324 4.80513L5.96072 1.66786C6.34124 1.44527 6.81401 1.44397 7.19579 1.66446L12.6357 4.80618C13.0093 5.02192 13.2389 5.41728 13.2389 5.84475V8.06681L10.8636 9.40682V7.30474C10.8636 6.88322 10.6403 6.49245 10.2749 6.27469L7.19233 4.43725C6.81283 4.21104 6.33888 4.20639 5.9549 4.4251L3.01492 6.09972C2.6378 6.31453 2.40543 6.71187 2.40543 7.14192V10.6338C2.40543 11.0551 2.62852 11.4457 2.99357 11.6636L5.95654 13.4316C6.339 13.6599 6.81728 13.6629 7.20263 13.4394L16.7802 7.88594C17.1586 7.66648 17.6274 7.66517 18.0071 7.88251L23.3927 10.965C23.7686 11.1802 24 11.5768 24 12.006V18.2288C24 18.6589 23.7676 19.0562 23.3905 19.271L18.0046 22.3391C17.6261 22.5547 17.1598 22.5535 16.7825 22.336L11.4676 19.272C11.0936 19.0564 10.8636 18.6608 10.8636 18.233L10.8636 16.0175L13.2389 14.6418V16.8496C13.2389 17.2751 13.4664 17.669 13.8373 17.8854L16.7781 19.6015C17.1576 19.823 17.6286 19.8246 18.0096 19.6057L21.007 17.8841C21.382 17.6687 21.6127 17.2726 21.6127 16.8441V13.3907C21.6127 12.9631 21.3829 12.5677 21.0092 12.3519L18.0043 10.6175C17.6262 10.3992 17.1585 10.3983 16.7796 10.6151L7.18666 16.1036C6.80964 16.3193 6.34468 16.3196 5.96737 16.1044L0.608812 13.0476C0.232073 12.8326 0 12.4355 0 12.0057Z" })));
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 0L5.55306 3.6761L7.92329 5.03416L12 2.7161L16.0767 5.03416L18.447 3.6761L12 0ZM16.0767 6.95417L18.447 8.31221V11.0283L14.3702 13.3463L14.3702 17.9825L12 19.3406L9.62982 17.9825L9.62982 13.3463L5.55306 11.0283V8.31221L7.92329 6.95417L12 9.27218L16.0767 6.95417ZM18.447 12.9483V15.6644L16.0767 17.0225V14.3063L18.447 12.9483ZM16.053 18.9424L20.1299 16.6244V11.9883L22.5 10.6303V17.9825L16.053 21.6585V18.9424ZM20.1299 7.3522L17.7596 5.99417L20.1299 4.6361L22.5 5.99417V8.71027L20.1299 10.0683V7.3522ZM9.62982 22.642V19.9259L12 21.2839L14.3702 19.9259V22.642L12 24L9.62982 22.642ZM7.92329 17.0225L5.55306 15.6644V12.9483L7.92329 14.3063V17.0225ZM12 7.3522L9.62982 5.99417L12 4.6361L14.3702 5.99417L12 7.3522ZM6.24042 5.99417L3.8702 7.3522V10.0683L1.5 8.71027L1.5 5.99417L3.8702 4.6361L6.24042 5.99417ZM1.5 10.6303L3.8702 11.9883L3.8702 16.6244L7.94695 18.9424V21.6585L1.5 17.9825L1.5 10.6303Z" })));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20", fill: "none" }, props),
        React.createElement("path", { d: "M7.39371 2.09677C8.40066 0.322581 10.0885 0.0537634 10.8373 0C9.83028 1.77419 10.2176 3.54839 11.8442 5.8871C13.4708 8.22581 15.2523 10.9677 14.1679 15.3226C13.3004 18.8065 9.98524 19.8925 8.4361 20C11 18 10.8134 15.3226 7.11932 13.7903C2.5 16 4.5 19 6.11237 20C0.148152 18.5484 -0.00676221 13.4677 0.922727 10.0806C1.66632 7.37097 3.34971 5.94086 4.09846 5.56452C3.55626 7.33871 4.33084 9.43548 5.64761 9.19355C6.96439 8.95161 6.88692 7.58064 6.80946 6.77419L6.80705 6.74911C6.72741 5.92107 6.50943 3.65483 7.39371 2.09677Z", fill: "#F93B5D" })));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React.createElement("path", { d: "M11.4545 4.90909C11.4545 4.90909 10.6364 8.18182 9 8.18182C7.36364 8.18182 6.54545 4.90909 6.54545 4.90909L11.4545 4.90909Z" }),
        React.createElement("path", { d: "M9 9.81818C10.6364 9.81818 11.4545 13.0909 11.4545 13.0909H6.54545C6.54545 13.0909 7.36364 9.81818 9 9.81818Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 0V0.818182C18 1.72193 17.2674 2.45455 16.3636 2.45455H15.4292C15.1634 4.44627 14.4814 6.05746 13.7994 7.23802C13.3629 7.9933 12.9252 8.57483 12.5928 8.97116L12.5685 9L12.5928 9.02889C12.9252 9.42522 13.3629 10.0067 13.7994 10.7621C14.4814 11.9426 15.1634 13.5538 15.4292 15.5455L16.3636 15.5455C17.2674 15.5455 18 16.2781 18 17.1818V18H0L0 17.1818C0 16.2781 0.732613 15.5455 1.63636 15.5455H2.5708C2.83662 13.5538 3.51857 11.9426 4.20065 10.7621C4.63705 10.0068 5.07481 9.42525 5.4072 9.02891L5.43149 9.00005L5.40722 8.97119C5.07481 8.57488 4.63705 7.99335 4.20065 7.23807C3.51857 6.05751 2.8366 4.44629 2.5708 2.45455H1.63636C0.732613 2.45455 0 1.72193 0 0.818182L0 0L18 0ZM13.7762 2.45455L4.22384 2.45455C4.47523 4.0977 5.04644 5.43099 5.61753 6.41941C5.99931 7.08019 6.37974 7.58431 6.66096 7.91964C6.80144 8.08711 6.91664 8.21188 6.99417 8.29238L7.02486 8.32397C7.04865 8.34826 7.06738 8.36681 7.08044 8.37957L7.09932 8.39777L7.10089 8.39927L7.10209 8.4004C7.26883 8.55518 7.36364 8.77243 7.36364 9.00002C7.36364 9.22764 7.26883 9.44492 7.10209 9.5997L7.10136 9.60038L7.09932 9.6023L7.08046 9.6205L7.06396 9.63676L7.0483 9.65241C7.03317 9.66759 7.01507 9.68605 6.9942 9.70769C6.97824 9.72427 6.96069 9.74273 6.94164 9.76303C6.92533 9.7804 6.90795 9.79913 6.88955 9.81923C6.85452 9.85746 6.81579 9.9006 6.77385 9.94859C6.73844 9.98909 6.70071 10.0331 6.66099 10.0805C6.37974 10.4158 5.99931 10.9199 5.61753 11.5807C5.04644 12.5691 4.47526 13.9024 4.22387 15.5455H13.7761C13.5247 13.9024 12.9536 12.5691 12.3825 11.5807C12.0007 10.9199 11.6203 10.4157 11.339 10.0804C11.1986 9.91294 11.0833 9.78817 11.0058 9.70764C10.9893 9.69057 10.9746 9.67548 10.9617 9.66243L10.9347 9.63541L10.9195 9.62048L10.9007 9.60225L10.8991 9.60075L10.8979 9.59968C10.7312 9.4449 10.6364 9.22759 10.6364 9C10.6364 8.77238 10.7312 8.55508 10.898 8.4003L10.8987 8.39957L10.9007 8.39772L10.9196 8.37952C10.9378 8.36169 10.9671 8.33258 11.0058 8.29233C11.0834 8.21183 11.1986 8.08706 11.339 7.91959C11.6203 7.58429 12.0007 7.08014 12.3825 6.41936C12.9536 5.43094 13.5248 4.09768 13.7762 2.45455Z" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.97828 0H11.2146C11.6079 0.00188312 11.9846 0.145139 12.2627 0.398653C12.5408 0.652167 12.6979 0.995464 12.7 1.35398V6.18372C13.2346 6.20899 13.7383 6.42011 14.1073 6.77362C14.4762 7.12713 14.6825 7.59614 14.6835 8.08407V12.5267C14.6835 12.8034 14.8041 13.0688 15.0188 13.2645C15.2335 13.4602 15.5246 13.5701 15.8282 13.5701C16.1317 13.5701 16.4229 13.4602 16.6376 13.2645C16.8523 13.0688 16.9728 12.8034 16.9728 12.5267V6.05151C15.1999 4.44345 14.8565 4.40443 15.338 2.63628L13.995 0.884071L14.5306 0.458761L17.92 3.51717V12.5323C17.9088 13.0303 17.6839 13.5045 17.2936 13.8531C16.9033 14.2017 16.3786 14.3969 15.8321 14.3969C15.2856 14.3969 14.7609 14.2017 14.3706 13.8531C13.9803 13.5045 13.7554 13.0303 13.7442 12.5323V8.08805C13.742 7.82869 13.6344 7.57927 13.4422 7.38802C13.25 7.19677 12.9868 7.07728 12.7035 7.05266V15.8623H13.7154C13.8417 15.8625 13.9627 15.9083 14.0521 15.9897C14.1416 16.071 14.192 16.1812 14.1924 16.2964V17.5054C14.192 17.6206 14.1416 17.731 14.0522 17.8124C13.9628 17.8939 13.8418 17.9399 13.7154 17.9403H0.480121C0.353812 17.9399 0.23282 17.8938 0.143587 17.8124C0.0543547 17.7309 0.00413632 17.6206 0.00390625 17.5054V16.2964C0.00413723 16.1813 0.0543833 16.0711 0.14364 15.9897C0.232898 15.9083 0.353892 15.8625 0.480121 15.8623H1.49284V1.35717C1.4949 0.99865 1.65207 0.655353 1.9302 0.401839C2.20832 0.148325 2.58495 0.00506903 2.97828 0.00318591V0ZM3.64148 2.16239H10.5505C10.6402 2.1626 10.726 2.19514 10.7894 2.2529C10.8527 2.31066 10.8884 2.38893 10.8887 2.47062V6.39319C10.8882 6.47473 10.8524 6.5528 10.789 6.61039C10.7257 6.66798 10.64 6.70041 10.5505 6.70062H3.64148C3.55217 6.7002 3.46665 6.66768 3.40349 6.61011C3.34034 6.55255 3.30466 6.47459 3.3042 6.39319V2.47062C3.30443 2.38907 3.34001 2.31091 3.40319 2.25318C3.46637 2.19544 3.55202 2.16281 3.64148 2.16239Z" })));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M7 6H19V9H7V6Z" }),
        React.createElement("path", { d: "M3.17317 7.51079C3.07444 7.39497 3.07808 7.22356 3.18164 7.11203L7 3L7 12L3.17317 7.51079Z" }),
        React.createElement("path", { d: "M18 16H5V19H18V16Z" }),
        React.createElement("path", { d: "M20.8221 17.7336C20.9235 17.6203 20.9242 17.449 20.8236 17.335L17 13L17 22L20.8221 17.7336Z" })));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 22 22" }, props),
        React.createElement("path", { d: "M11 1.93936L13.8747 6.71605C14.1539 7.18008 14.6094 7.51101 15.137 7.63321L20.5682 8.89109L16.9137 13.1011C16.5586 13.5101 16.3846 14.0456 16.4315 14.5851L16.9135 20.1392L11.7802 17.9645C11.2815 17.7532 10.7185 17.7532 10.2198 17.9645L5.0865 20.1392L5.56853 14.5851C5.61535 14.0456 5.44137 13.5101 5.08635 13.1011L1.43176 8.89109L6.86298 7.63321C7.39059 7.51101 7.84609 7.18007 8.12534 6.71605L11 1.93936Z", strokeWidth: "2" })));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "none" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z", fill: "#1DC872" })));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("circle", { cx: "12", cy: "12", r: "10", fill: "#1263F1" }),
        React.createElement("path", { d: "M9.75195 21.7462L12.7508 11.25V8.25004L14.7104 2.37146C18.9167 3.55273 22.0008 7.41622 22.0008 12C22.0008 17.5229 17.5237 22 12.0008 22C11.2276 22 10.4748 21.9123 9.75195 21.7462Z", fill: "#F93B5D" }),
        React.createElement("path", { d: "M6 14.3143L15.7714 0L13.2 10.2H18.3429L8.57143 24L11.1429 14.3143H6Z", fill: "white" })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12.6611 2.56833C12.17 3.05943 12.17 3.85564 12.6611 4.34674L16.8107 8.49636C17.3018 8.98745 18.098 8.98745 18.5891 8.49636C19.0802 8.00526 19.0802 7.20904 18.5891 6.71795L14.4395 2.56833C13.9484 2.07724 13.1522 2.07724 12.6611 2.56833Z" }),
        React.createElement("path", { d: "M13.3996 13.6349C12.4394 14.4679 11.498 15.0633 10.7424 15.4697L5.71495 10.4422C6.25474 9.44537 7.08496 8.14449 8.2151 7.01435C9.34524 5.88421 10.6461 5.05399 11.643 4.51419L16.6704 9.54166C16.2641 10.2972 15.6687 11.2386 14.8356 12.1989L20.5825 17.1795C21.2672 17.7729 21.3046 18.8225 20.6639 19.4632C20.0233 20.1039 18.9736 20.0664 18.3802 19.3817L13.3996 13.6349Z" }),
        React.createElement("path", { d: "M3.76909 11.4604C3.27799 11.9515 3.27799 12.7477 3.76909 13.2388L7.9187 17.3884C8.4098 17.8795 9.20601 17.8795 9.69711 17.3884C10.1882 16.8973 10.1882 16.1011 9.69711 15.61L5.54749 11.4604C5.0564 10.9693 4.26018 10.9693 3.76909 11.4604Z" }),
        React.createElement("path", { d: "M4.13741 19.2844C3.4429 19.2844 2.87988 19.8475 2.87988 20.542C2.87988 21.2365 3.4429 21.7995 4.13741 21.7995H13.3592C14.0538 21.7995 14.6168 21.2365 14.6168 20.542C14.6168 19.8475 14.0538 19.2844 13.3592 19.2844H4.13741Z" })));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 20C11.7221 19.9997 11.4507 19.9188 11.2212 19.7679C7.82085 17.545 6.34847 16.0208 5.53635 15.0679C3.80568 13.0367 2.97712 10.9513 3.00048 8.69292C3.02774 6.105 5.18373 4 7.80657 4C9.71378 4 11.0347 5.03458 11.804 5.89625C11.8284 5.92327 11.8585 5.94494 11.8923 5.95979C11.9261 5.97463 11.9628 5.98232 12 5.98232C12.0372 5.98232 12.0739 5.97463 12.1077 5.95979C12.1415 5.94494 12.1716 5.92327 12.196 5.89625C12.9653 5.03375 14.2862 4 16.1934 4C18.8163 4 20.9723 6.105 20.9995 8.69333C21.0229 10.9521 20.1935 13.0375 18.4636 15.0683C17.6515 16.0213 16.1792 17.5454 12.7788 19.7683C12.5492 19.9191 12.2779 19.9998 12 20Z" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.196 5.89625C12.1716 5.92327 12.1415 5.94494 12.1077 5.95979C12.0739 5.97463 12.0372 5.98232 12 5.98232C11.9628 5.98232 11.9261 5.97463 11.8923 5.95979C11.8585 5.94494 11.8284 5.92327 11.804 5.89625C11.0347 5.03458 9.71378 4 7.80657 4C5.18373 4 3.02774 6.105 3.00048 8.69292C2.97712 10.9513 3.80568 13.0367 5.53635 15.0679C6.34847 16.0208 7.82085 17.545 11.2212 19.7679C11.4507 19.9188 11.7221 19.9997 12 20C12.2779 19.9998 12.5492 19.9191 12.7788 19.7683C16.1792 17.5454 17.6515 16.0213 18.4636 15.0683C20.1935 13.0375 21.0229 10.9521 20.9995 8.69333C20.9723 6.105 18.8163 4 16.1934 4C14.2862 4 12.9653 5.03375 12.196 5.89625ZM19.3996 8.70988C19.3816 7.01856 17.9591 5.6 16.1934 5.6C14.9169 5.6 13.9955 6.28248 13.3901 6.96126L13.3842 6.96783C13.2058 7.16565 12.9891 7.32023 12.751 7.42476C12.5131 7.52923 12.2572 7.58232 12 7.58232C11.7428 7.58232 11.4869 7.52923 11.249 7.42476C11.0109 7.32023 10.7942 7.16563 10.6158 6.96782L10.6104 6.96184C10.0043 6.28289 9.08276 5.6 7.80657 5.6C6.04085 5.6 4.61837 7.01865 4.60039 8.70947M19.3996 8.70988C19.4183 10.5151 18.7728 12.2378 17.2456 14.0308C16.548 14.8494 15.2135 16.2544 12.0003 18.3655C8.7864 16.254 7.45186 14.8488 6.75424 14.0302C5.22657 12.2373 4.58179 10.5144 4.60039 8.70947" })));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24", stroke: 'currentColor', fill: 'none' }, props),
        React.createElement("path", { d: "M8.6959 12.5179C8.6959 13.9182 7.56074 15.0533 6.16045 15.0533C4.76016 15.0533 3.625 13.9182 3.625 12.5179C3.625 11.1176 4.76016 9.98242 6.16045 9.98242C7.56074 9.98242 8.6959 11.1176 8.6959 12.5179Z", fill: 'none', strokeWidth: "1.25" }),
        React.createElement("path", { d: "M19.7779 6.16045C19.7779 7.56074 18.6428 8.6959 17.2425 8.6959C15.8422 8.6959 14.707 7.56074 14.707 6.16045C14.707 4.76016 15.8422 3.625 17.2425 3.625C18.6428 3.625 19.7779 4.76016 19.7779 6.16045Z", fill: 'none', strokeWidth: "1.25" }),
        React.createElement("path", { d: "M19.7779 18.8401C19.7779 20.2404 18.6428 21.3756 17.2425 21.3756C15.8422 21.3756 14.707 20.2404 14.707 18.8401C14.707 17.4398 15.8422 16.3047 17.2425 16.3047C18.6428 16.3047 19.7779 17.4398 19.7779 18.8401Z", fill: 'none', strokeWidth: "1.25" }),
        React.createElement("line", { x1: "8.31641", y1: "10.8513", x2: "14.7188", y2: "7.15491", strokeWidth: "1.25" }),
        React.createElement("line", { y1: "-0.625", x2: "7.39281", y2: "-0.625", transform: "matrix(0.866025 0.5 0.5 -0.866025 8.62891 13.6348)", strokeWidth: "1.25" })));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24", stroke: 'currentColor', fill: 'currentColor' }, props),
        React.createElement("path", { d: "M12 5.70173C7.35887 5.76011 2.80536 10.251 1.19995 12.0388C2.82968 13.8875 7.41725 18.3308 12 18.3016C16.5827 18.2724 21.0486 13.8631 22.8 12.0388C21.0729 10.2023 16.641 5.64335 12 5.70173Z", fill: 'none', strokeWidth: "1.25" }),
        React.createElement("path", { d: "M16.5913 12.0757C16.5913 14.6524 14.5025 16.7412 11.9258 16.7412C9.34909 16.7412 7.26025 14.6524 7.26025 12.0757C7.26025 9.49899 9.34909 7.41016 11.9258 7.41016C14.5025 7.41016 16.5913 9.49899 16.5913 12.0757Z", fill: 'none', strokeWidth: "1.25" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.686 11.8942C11.351 11.8942 11.89 11.3551 11.89 10.6901C11.89 10.2819 11.6868 9.92107 11.3761 9.70333C11.5645 9.656 11.7617 9.63086 11.9647 9.63086C13.2947 9.63086 14.3729 10.709 14.3729 12.039C14.3729 13.3689 13.2947 14.4471 11.9647 14.4471C10.6348 14.4471 9.55664 13.3689 9.55664 12.039C9.55664 11.791 9.59412 11.5518 9.66373 11.3266C9.87638 11.6674 10.2547 11.8942 10.686 11.8942Z" })));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 0L12.6872 3.93837C13.0466 4.24034 13.1049 4.79112 12.8174 5.16858C12.5299 5.54604 12.0054 5.60724 11.6461 5.30527L8 2.24171L4.35394 5.30527C3.99455 5.60724 3.47015 5.54604 3.18264 5.16858C2.89513 4.79112 2.9534 4.24034 3.31278 3.93837L8 0Z" }),
        React.createElement("path", { opacity: "0.56", fillRule: "evenodd", clipRule: "evenodd", d: "M8 5.25145L12.6872 9.18983C13.0466 9.49179 13.1049 10.0426 12.8174 10.42C12.5299 10.7975 12.0054 10.8587 11.6461 10.5567L8 7.49316L4.35394 10.5567C3.99455 10.8587 3.47015 10.7975 3.18264 10.42C2.89513 10.0426 2.9534 9.49179 3.31278 9.18983L8 5.25145Z" }),
        React.createElement("path", { opacity: "0.32", fillRule: "evenodd", clipRule: "evenodd", d: "M8 10.5029L12.6872 14.4413C13.0466 14.7432 13.1049 15.294 12.8174 15.6715C12.5299 16.0489 12.0054 16.1101 11.6461 15.8082L8 12.7446L4.35394 15.8082C3.99455 16.1101 3.47015 16.0489 3.18264 15.6715C2.89513 15.294 2.9534 14.7432 3.31278 14.4413L8 10.5029Z" })));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("circle", { cx: "12", cy: "12", r: "10", fill: "#1263F1" }),
        React.createElement("path", { d: "M9.75195 21.7462L12.7508 11.25V8.25004L14.7104 2.37146C18.9167 3.55273 22.0008 7.41622 22.0008 12C22.0008 17.5229 17.5237 22 12.0008 22C11.2276 22 10.4748 21.9123 9.75195 21.7462Z", fill: "#F93B5D" }),
        React.createElement("path", { d: "M6 14.3143L15.7714 0L13.2 10.2H18.3429L8.57143 24L11.1429 14.3143H6Z", fill: "white" })));
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M20.5954 8.13393C20.4671 8.00057 20.3144 7.89482 20.1462 7.82278C19.9779 7.75075 19.7975 7.71387 19.6154 7.71429H16.8461V7C16.8461 5.67392 16.3356 4.40215 15.4267 3.46447C14.5179 2.52678 13.2853 2 12 2C10.7147 2 9.48208 2.52678 8.57325 3.46447C7.66442 4.40215 7.15384 5.67392 7.15384 7V7.71429L4.38461 7.71429C4.01739 7.71429 3.66521 7.8648 3.40554 8.13271C3.14588 8.40061 3 8.76398 3 9.14286L3 18.7857C3 20.5268 4.42788 22 6.11538 22H17.8846C18.7009 22.0003 19.4848 21.671 20.0688 21.0826C20.3627 20.7933 20.5968 20.4456 20.7568 20.0604C20.9168 19.6752 20.9996 19.2606 21 18.8415L21 9.14286C21.0006 8.95544 20.9651 8.76977 20.8956 8.59659C20.8262 8.42341 20.7242 8.26615 20.5954 8.13393ZM8.53846 7C8.53846 6.0528 8.90316 5.14439 9.55232 4.47462C10.2015 3.80485 11.0819 3.42857 12 3.42857C12.9181 3.42857 13.7985 3.80485 14.4477 4.47462C15.0968 5.14439 15.4615 6.0528 15.4615 7V7.71429L8.53846 7.71429V7Z", fill: "white" }),
        React.createElement("path", { d: "M12 20C14.7614 20 17 17.7614 17 15C17 12.2386 14.7614 10 12 10C9.23857 10 7 12.2386 7 15C7 17.7614 9.23857 20 12 20Z", fill: "white" }),
        React.createElement("path", { d: "M15.8729 11.8809C15.5261 11.9494 15.1955 12.0462 14.9233 12.1067C14.3023 12.2458 13.7217 12.7216 13.5947 13.5925C13.4818 14.3708 13.7439 14.7054 13.6289 15.6107C13.4273 17.1913 11.9112 17.7357 11.2035 18.0663C10.7943 18.2558 9.80031 18.6913 9.03418 19.024C9.86482 19.6369 10.889 19.9998 11.9999 19.9998C14.762 19.9998 16.9999 17.7619 16.9999 14.9998C16.9999 13.8224 16.5926 12.7397 15.9112 11.8869C15.8991 11.8849 15.887 11.8829 15.8729 11.8809Z", fill: "url(#paint0_linear_1393_6292)" }),
        React.createElement("path", { d: "M11.4375 14.2661C11.8226 13.4335 11.6835 13.4314 11.9758 12.6492C12.3448 11.6573 13.4919 11.9395 13.8085 11.9819C14.3306 12.0524 14.4677 11.8669 15.5685 11.6895C15.623 11.6814 15.6754 11.6734 15.7278 11.6673C14.8125 10.6452 13.4818 10 12 10C10.0101 10 8.29234 11.1613 7.4879 12.8448C9.13709 13.254 10.9173 14.1431 11.4375 14.2661ZM10.3448 10.871C10.4899 10.8931 11.1956 11.7702 11.3286 14.0222C11.3286 14.0222 10.4214 13.8044 10.2258 13.3367C10.0645 12.9516 10.2742 12.4456 10.3448 10.871ZM15.9032 11.877C15.9052 11.881 15.9093 11.8831 15.9113 11.8871C15.8992 11.8851 15.8851 11.8851 15.873 11.8831C15.8831 11.879 15.8931 11.879 15.9032 11.877ZM7 15C7 14.6008 7.04637 14.2137 7.13508 13.8427C7.31653 13.9939 7.51008 14.1613 7.71573 14.3528C9.01814 15.5605 11.1371 16.5141 11.9093 15.627C11.9113 15.629 11.9133 15.629 11.9133 15.631C11.7722 15.8165 11.2339 16.4032 10.2056 16.2218L8.58064 18.6472C7.60887 17.7359 7 16.4395 7 15Z", fill: "url(#paint1_linear_1393_6292)" }),
        React.createElement("rect", { x: "7.14941", y: "7.71094", width: "1.39342", height: "1.38694", fill: "black" }),
        React.createElement("rect", { x: "15.4531", y: "7.71094", width: "1.39342", height: "1.38694", fill: "black" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear_1393_6292", x1: "15.0026", y1: "13.1904", x2: "13.823", y2: "19.689", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#FF496A" }),
                React.createElement("stop", { offset: "1", stopColor: "#E42648" })),
            React.createElement("linearGradient", { id: "paint1_linear_1393_6292", x1: "9.41335", y1: "17.3653", x2: "12.0214", y2: "10", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { offset: "0.00181229", stopColor: "#1158F1" }),
                React.createElement("stop", { offset: "1", stopColor: "#119BED" })))));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.03639 4.52174C2.43652 3.52195 3.15669 2.25 4.32263 2.25H13.6733C14.8393 2.25 15.5595 3.52196 14.9596 4.52174L11.748 9.87441V13.1261C11.748 13.7717 11.3348 14.345 10.7223 14.5491L8.22233 15.3825C7.25103 15.7062 6.24799 14.9833 6.24799 13.9594V9.8744L3.03639 4.52174ZM13.6733 3.75H4.32263L7.53423 9.10266C7.6741 9.33578 7.74799 9.60254 7.74799 9.8744V13.9594L10.248 13.1261V9.8744C10.248 9.60254 10.3219 9.33578 10.4617 9.10266L13.6733 3.75Z" })));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.1164 20.1442C19.2324 20.2133 19.3649 20.2499 19.5 20.25C19.6247 20.25 19.7475 20.2189 19.8572 20.1594C19.9669 20.1 20.06 20.0142 20.1281 19.9097C21.8128 17.3264 22.5 15.0352 22.5 12C22.5 8.51907 21.5536 6.32298 20.1333 4.09642C20.0803 4.01331 20.0114 3.94147 19.9307 3.88497C19.8499 3.82848 19.7588 3.78845 19.6626 3.76716C19.5663 3.74588 19.4668 3.74375 19.3698 3.76092C19.2727 3.77808 19.18 3.8142 19.0969 3.8672C19.0138 3.9202 18.9419 3.98905 18.8854 4.06982C18.8289 4.15058 18.7889 4.24169 18.7676 4.33793C18.7463 4.43417 18.7442 4.53366 18.7614 4.63072C18.7785 4.72777 18.8147 4.8205 18.8677 4.9036C20.1478 6.90845 21 8.88282 21 12C21 15.1763 20.1492 17.1314 18.8723 19.0903C18.7986 19.2035 18.7567 19.3344 18.7512 19.4693C18.7457 19.6043 18.7767 19.7382 18.841 19.857C18.9053 19.9758 19.0004 20.075 19.1164 20.1442Z" }),
        React.createElement("path", { d: "M10.875 19.5C10.6354 19.5 10.402 19.4231 10.2094 19.2806C10.1987 19.2732 10.1883 19.2652 10.1784 19.2567L5.895 15.75H2.625C2.32663 15.75 2.04048 15.6315 1.8295 15.4205C1.61853 15.2095 1.5 14.9234 1.5 14.625V9.37501C1.5 9.07664 1.61853 8.79049 1.8295 8.57952C2.04048 8.36854 2.32663 8.25001 2.625 8.25001H5.89453L10.1775 4.74329C10.1874 4.73481 10.1977 4.72683 10.2084 4.71939C10.376 4.59616 10.5744 4.52179 10.7817 4.50453C10.9889 4.48728 11.1969 4.52781 11.3825 4.62164C11.5681 4.71546 11.7241 4.85891 11.8331 5.03603C11.9421 5.21316 11.9999 5.41703 12 5.62501V18.375C12 18.6734 11.8815 18.9595 11.6705 19.1705C11.4595 19.3815 11.1734 19.5 10.875 19.5Z" }),
        React.createElement("path", { d: "M15 15.75C14.872 15.75 14.7462 15.7172 14.6344 15.6548C14.5227 15.5924 14.4288 15.5024 14.3617 15.3935C14.2945 15.2845 14.2564 15.1602 14.2509 15.0323C14.2453 14.9045 14.2726 14.7773 14.3302 14.663C14.775 13.7784 15.0005 12.8817 15.0005 12C15.0005 11.0916 14.782 10.2216 14.3325 9.34079C14.2464 9.16412 14.233 8.96069 14.2954 8.77429C14.3577 8.58788 14.4907 8.4334 14.6658 8.34408C14.8409 8.25475 15.0441 8.23773 15.2316 8.29667C15.4191 8.35561 15.5759 8.4858 15.6684 8.65923C16.2277 9.75564 16.5 10.8488 16.5 12C16.5 13.1184 16.2188 14.2411 15.6703 15.337C15.6078 15.4612 15.5121 15.5656 15.3937 15.6386C15.2753 15.7115 15.139 15.7501 15 15.75Z" }),
        React.createElement("path", { d: "M17.25 18C17.1183 18 16.989 17.9654 16.8749 17.8996C16.7609 17.8338 16.6662 17.7391 16.6004 17.6251C16.5345 17.5111 16.4998 17.3817 16.4998 17.2501C16.4998 17.1184 16.5345 16.989 16.6003 16.875C17.4867 15.3324 18 14.0395 18 12C18 9.92954 17.4877 8.64564 16.6022 7.12782C16.5051 6.95618 16.4795 6.7532 16.5309 6.56282C16.5824 6.37244 16.7068 6.20999 16.8771 6.11064C17.0475 6.01128 17.2501 5.98303 17.4411 6.03198C17.6322 6.08093 17.7962 6.20316 17.8978 6.3722C18.8869 8.06767 19.5 9.60048 19.5 12C19.5 14.3639 18.8878 15.9042 17.9002 17.625C17.8343 17.7391 17.7395 17.8339 17.6254 17.8997C17.5112 17.9655 17.3818 18.0001 17.25 18Z" })));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M2.46967 3.21967C2.76256 2.92678 3.23744 2.92678 3.53033 3.21967L20.0303 19.7197C20.3232 20.0126 20.3232 20.4874 20.0303 20.7803C19.7374 21.0732 19.2626 21.0732 18.9697 20.7803L2.46967 4.28033C2.17678 3.98744 2.17678 3.51256 2.46967 3.21967Z" }),
        React.createElement("path", { d: "M11.4061 4.63406C11.219 4.53311 11.007 4.48753 10.7949 4.50264C10.5828 4.51774 10.3794 4.59292 10.2084 4.71937L10.1775 4.74328L8.84063 5.83781C8.80007 5.87099 8.76691 5.9123 8.7433 5.95908C8.71969 6.00586 8.70615 6.05707 8.70354 6.10941C8.70093 6.16174 8.70932 6.21405 8.72817 6.26294C8.74702 6.31183 8.77591 6.35623 8.81297 6.39328L11.3597 8.94C11.4121 8.9925 11.479 9.02826 11.5518 9.04276C11.6245 9.05725 11.7 9.04983 11.7685 9.02142C11.8371 8.99301 11.8957 8.9449 11.9369 8.88318C11.9781 8.82146 12.0001 8.7489 12 8.67468V5.65172C12.0021 5.44427 11.948 5.24013 11.8434 5.06096C11.7389 4.88178 11.5877 4.73426 11.4061 4.63406Z" }),
        React.createElement("path", { d: "M11.7811 15.7167L4.53234 8.46984C4.39176 8.32917 4.20106 8.25009 4.00219 8.25H2.625C2.32663 8.25 2.04048 8.36852 1.8295 8.5795C1.61853 8.79048 1.5 9.07663 1.5 9.375V14.625C1.5 14.9234 1.61853 15.2095 1.8295 15.4205C2.04048 15.6315 2.32663 15.75 2.625 15.75H5.895L10.2075 19.2802C10.3806 19.4086 10.5871 19.4844 10.8022 19.4985C11.0172 19.5125 11.2318 19.4642 11.4202 19.3594C11.5981 19.258 11.7456 19.1108 11.8476 18.9332C11.9495 18.7556 12.0021 18.554 12 18.3492V16.2464C12 16.0478 11.9213 15.8573 11.7811 15.7167Z" }),
        React.createElement("path", { d: "M16.5 12C16.5 10.8487 16.2277 9.75609 15.668 8.65922C15.6236 8.57081 15.5622 8.49205 15.4872 8.42748C15.4123 8.36292 15.3253 8.31381 15.2313 8.283C15.1373 8.25218 15.0381 8.24027 14.9395 8.24794C14.8409 8.25561 14.7448 8.28272 14.6567 8.3277C14.5686 8.37268 14.4902 8.43464 14.4262 8.51002C14.3621 8.5854 14.3136 8.67271 14.2834 8.76692C14.2532 8.86112 14.242 8.96037 14.2503 9.05894C14.2587 9.15751 14.2865 9.25345 14.332 9.34125C14.7816 10.2216 15 11.0916 15 12C15 12.125 14.9952 12.252 14.9855 12.3811C14.9815 12.4349 14.9891 12.4889 15.0079 12.5394C15.0266 12.59 15.0561 12.6359 15.0942 12.6741L15.7673 13.3472C15.816 13.3959 15.8771 13.4303 15.9439 13.4466C16.0108 13.4629 16.0809 13.4605 16.1465 13.4397C16.2121 13.4188 16.2707 13.3803 16.3158 13.3283C16.361 13.2764 16.391 13.213 16.4025 13.1452C16.4671 12.7668 16.4997 12.3838 16.5 12Z" }),
        React.createElement("path", { d: "M19.5 12C19.5 9.60093 18.8869 8.06765 17.8978 6.37218C17.7962 6.20315 17.6322 6.08092 17.4411 6.03197C17.2501 5.98301 17.0475 6.01127 16.8771 6.11062C16.7068 6.20998 16.5824 6.37243 16.5309 6.56281C16.4795 6.75318 16.5051 6.95617 16.6022 7.12781C17.4877 8.64562 18 9.92953 18 12C18 13.117 17.8458 14.01 17.5608 14.843C17.5379 14.9094 17.5341 14.9809 17.5498 15.0493C17.5656 15.1178 17.6002 15.1804 17.6498 15.2302L18.2344 15.8156C18.2786 15.8599 18.3331 15.8924 18.3931 15.9101C18.453 15.9279 18.5165 15.9304 18.5776 15.9174C18.6388 15.9044 18.6957 15.8763 18.7433 15.8357C18.7908 15.7951 18.8275 15.7432 18.8498 15.6848C19.2656 14.6137 19.5 13.4653 19.5 12Z" }),
        React.createElement("path", { d: "M20.1323 4.09641C21.5536 6.32297 22.5 8.51953 22.5 12C22.5 14.2969 22.1063 16.1672 21.1875 18.0605C21.1615 18.1148 21.1228 18.1621 21.0747 18.1983C21.0266 18.2345 20.9704 18.2586 20.911 18.2686C20.8516 18.2785 20.7907 18.274 20.7334 18.2554C20.6761 18.2368 20.6241 18.2047 20.5819 18.1617L20.0231 17.603C19.9691 17.5487 19.933 17.4791 19.9197 17.4037C19.9064 17.3283 19.9165 17.2506 19.9486 17.1811C20.6048 15.7627 21 14.1652 21 12C21 8.88281 20.1478 6.90844 18.8667 4.9036C18.7597 4.73576 18.7237 4.53228 18.7667 4.33792C18.8097 4.14356 18.9281 3.97423 19.0959 3.86719C19.2638 3.76015 19.4673 3.72416 19.6616 3.76715C19.856 3.81014 20.0253 3.92858 20.1323 4.09641Z" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("circle", { cx: "11.999", cy: "12.0001", r: "10", fill: "#1EBB95" }),
        React.createElement("mask", { id: "mask0_110_1525", maskUnits: "userSpaceOnUse", x: "9", y: "2", width: "15", height: "22" },
            React.createElement("path", { d: "M9.5 22L14.5 2H18L22 5L24 11.5L22 18.5L17 23.5L9.5 22Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0_110_1525)" },
            React.createElement("circle", { cx: "11.999", cy: "12.0001", r: "10", fill: "#FF1C5E" })),
        React.createElement("path", { d: "M6.08946 14.1993L14.535 2.27255L13.3031 10.4212L18.5614 10.1963L9.57151 21.7126L11.3478 13.9744L6.08946 14.1993Z", fill: "white" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M20.6663 6.06419L13.5075 1.90404C13.0494 1.6385 12.5293 1.49866 11.9998 1.49866C11.4703 1.49866 10.9501 1.6385 10.492 1.90404L3.33375 6.06419C3.30555 6.08074 3.28217 6.10436 3.26593 6.13273C3.24968 6.1611 3.24114 6.19322 3.24114 6.22591C3.24114 6.2586 3.24968 6.29072 3.26593 6.31909C3.28217 6.34746 3.30555 6.37109 3.33375 6.38763L11.9062 11.4304C11.9351 11.4474 11.9679 11.4564 12.0014 11.4564C12.0349 11.4564 12.0677 11.4474 12.0966 11.4304L20.6672 6.38763C20.6953 6.37101 20.7186 6.34731 20.7348 6.3189C20.751 6.29048 20.7594 6.25833 20.7593 6.22564C20.7592 6.19295 20.7506 6.16086 20.7343 6.13253C20.7179 6.10421 20.6945 6.08065 20.6663 6.06419ZM12 7.12497C11.3789 7.12497 10.875 6.78935 10.875 6.37497C10.875 5.9606 11.3789 5.62497 12 5.62497C12.6211 5.62497 13.125 5.9606 13.125 6.37497C13.125 6.78935 12.6211 7.12497 12 7.12497ZM11.1562 12.6942L2.53125 7.6631C2.50276 7.64665 2.47044 7.63799 2.43755 7.63798C2.40465 7.63797 2.37233 7.64662 2.34383 7.66305C2.31534 7.67948 2.29166 7.70313 2.27519 7.7316C2.25872 7.76008 2.25003 7.79239 2.25 7.82529V15.9778C2.25071 16.3706 2.35424 16.7564 2.55029 17.0967C2.74634 17.4371 3.02808 17.7202 3.3675 17.9179L10.9688 22.4756C10.9972 22.492 11.0296 22.5007 11.0625 22.5007C11.0953 22.5007 11.1277 22.4921 11.1562 22.4756C11.1847 22.4592 11.2083 22.4356 11.2248 22.4071C11.2413 22.3786 11.25 22.3463 11.25 22.3134V12.8564C11.25 12.8235 11.2413 12.7912 11.2248 12.7627C11.2084 12.7343 11.1847 12.7106 11.1562 12.6942ZM4.5 17.25C4.08562 17.25 3.75 16.7461 3.75 16.125C3.75 15.5039 4.08562 15 4.5 15C4.91438 15 5.25 15.5039 5.25 16.125C5.25 16.7461 4.91438 17.25 4.5 17.25ZM9 15.75C8.58563 15.75 8.25 15.2461 8.25 14.625C8.25 14.0039 8.58563 13.5 9 13.5C9.41437 13.5 9.75 14.0039 9.75 14.625C9.75 15.2461 9.41437 15.75 9 15.75ZM21.4688 7.66451L12.8438 12.7293C12.8153 12.7457 12.7917 12.7693 12.7753 12.7977C12.7588 12.8261 12.7501 12.8583 12.75 12.8911V22.3125C12.75 22.3454 12.7587 22.3777 12.7752 22.4062C12.7917 22.4346 12.8153 22.4583 12.8438 22.4747C12.8723 22.4911 12.9047 22.4998 12.9375 22.4998C12.9704 22.4998 13.0028 22.4911 13.0312 22.4747L20.632 17.917C20.9714 17.7194 21.2531 17.4365 21.4493 17.0963C21.6454 16.7561 21.7491 16.3705 21.75 15.9778V7.8281C21.7502 7.79508 21.7417 7.7626 21.7253 7.73392C21.709 7.70525 21.6853 7.68141 21.6568 7.66481C21.6282 7.64821 21.5958 7.63944 21.5628 7.63938C21.5298 7.63933 21.4973 7.648 21.4688 7.66451ZM15 19.875C14.5856 19.875 14.25 19.3711 14.25 18.75C14.25 18.1289 14.5856 17.625 15 17.625C15.4144 17.625 15.75 18.1289 15.75 18.75C15.75 19.3711 15.4144 19.875 15 19.875ZM15 15.75C14.5856 15.75 14.25 15.2461 14.25 14.625C14.25 14.0039 14.5856 13.5 15 13.5C15.4144 13.5 15.75 14.0039 15.75 14.625C15.75 15.2461 15.4144 15.75 15 15.75ZM19.5 17.25C19.0856 17.25 18.75 16.7461 18.75 16.125C18.75 15.5039 19.0856 15 19.5 15C19.9144 15 20.25 15.5039 20.25 16.125C20.25 16.7461 19.9144 17.25 19.5 17.25ZM19.5 13.125C19.0856 13.125 18.75 12.6211 18.75 12C18.75 11.3789 19.0856 10.875 19.5 10.875C19.9144 10.875 20.25 11.3789 20.25 12C20.25 12.6211 19.9144 13.125 19.5 13.125Z", fill: "white" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.1345 7.85614C5.157 7.63937 5.07225 7.42555 4.90725 7.28006L3.22725 5.29612V5H8.44575L12.4792 13.6669L16.0253 5H21V5.29612L19.563 6.64593C19.4392 6.73852 19.3778 6.89062 19.4033 7.04125V16.9595C19.3778 17.1094 19.4392 17.2615 19.563 17.3541L20.9662 18.7039V19H13.9073V18.7039L15.3615 17.321C15.504 17.1814 15.504 17.1402 15.504 16.9264V8.90983L11.4622 18.9677H10.9163L6.21 8.90983V15.6508C6.171 15.9337 6.267 16.2195 6.47025 16.4238L8.361 18.6708V18.9677H3V18.6708L4.89075 16.4238C5.09325 16.2188 5.18325 15.9315 5.1345 15.6508V7.85614V7.85614Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.8252 5.34998C20.6819 5.58331 21.3574 6.26665 21.588 7.13332C22.0164 8.71666 21.9999 12.0167 21.9999 12.0167C21.9999 12.0167 21.9999 15.3 21.588 16.8834C21.3574 17.75 20.6819 18.4334 19.8252 18.6667C18.2602 19.0834 11.9999 19.0834 11.9999 19.0834C11.9999 19.0834 5.75606 19.0834 4.17451 18.65C3.31784 18.4167 2.64238 17.7334 2.41174 16.8667C1.99988 15.3 1.99988 12 1.99988 12C1.99988 12 1.99988 8.71666 2.41174 7.13332C2.64238 6.26665 3.33431 5.56664 4.17451 5.33331C5.73958 4.91664 11.9999 4.91664 11.9999 4.91664C11.9999 4.91664 18.2602 4.91664 19.8252 5.34998ZM10.0064 8.96666L15.2123 12L10.0064 15.0334V8.96666Z" })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 13.125C14.445 13.125 16.605 13.71 18.36 14.475C19.98 15.195 21 16.815 21 18.57V19.5C21 20.325 20.325 21 19.5 21H4.5C3.675 21 3 20.325 3 19.5V18.585C3 16.815 4.02 15.195 5.64 14.49C7.395 13.71 9.555 13.125 12 13.125ZM12 3C14.49 3 16.5 5.01 16.5 7.5C16.5 9.99 14.49 12 12 12C9.51 12 7.5 9.99 7.5 7.5C7.5 5.01 9.51 3 12 3Z" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 33 31" }, props),
        React.createElement("path", { d: "M16.7174 0L20.5377 11.7579H32.9007L22.8989 19.0247L26.7192 30.7826L16.7174 23.5158L6.7155 30.7826L10.5359 19.0247L0.534004 11.7579H12.897L16.7174 0Z" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("path", { d: "M8 1.75C4.55375 1.75 1.75 4.55375 1.75 8C1.75 11.4462 4.55375 14.25 8 14.25C11.4462 14.25 14.25 11.4462 14.25 8C14.25 4.55375 11.4462 1.75 8 1.75ZM8 4.3125C8.1607 4.3125 8.31779 4.36015 8.4514 4.44943C8.58502 4.53871 8.68916 4.6656 8.75065 4.81407C8.81215 4.96253 8.82824 5.1259 8.79689 5.28351C8.76554 5.44112 8.68815 5.58589 8.57452 5.69952C8.46089 5.81315 8.31612 5.89054 8.15851 5.92189C8.0009 5.95324 7.83753 5.93715 7.68907 5.87565C7.5406 5.81416 7.41371 5.71002 7.32443 5.5764C7.23515 5.44279 7.1875 5.2857 7.1875 5.125C7.1875 4.90951 7.2731 4.70285 7.42548 4.55048C7.57785 4.3981 7.78451 4.3125 8 4.3125V4.3125ZM9.5 11.375H6.75C6.61739 11.375 6.49021 11.3223 6.39645 11.2286C6.30268 11.1348 6.25 11.0076 6.25 10.875C6.25 10.7424 6.30268 10.6152 6.39645 10.5214C6.49021 10.4277 6.61739 10.375 6.75 10.375H7.625V7.625H7.125C6.99239 7.625 6.86521 7.57232 6.77145 7.47855C6.67768 7.38479 6.625 7.25761 6.625 7.125C6.625 6.99239 6.67768 6.86521 6.77145 6.77145C6.86521 6.67768 6.99239 6.625 7.125 6.625H8.125C8.25761 6.625 8.38479 6.67768 8.47855 6.77145C8.57232 6.86521 8.625 6.99239 8.625 7.125V10.375H9.5C9.63261 10.375 9.75979 10.4277 9.85355 10.5214C9.94732 10.6152 10 10.7424 10 10.875C10 11.0076 9.94732 11.1348 9.85355 11.2286C9.75979 11.3223 9.63261 11.375 9.5 11.375Z" })));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.00004 20.1667C5.00004 21.45 6.05004 22.5 7.33337 22.5H16.6667C17.95 22.5 19 21.45 19 20.1667V6.16667H5.00004V20.1667ZM8.69837 12.6883C8.48023 12.4702 8.35768 12.1743 8.35768 11.8658C8.35768 11.5573 8.48023 11.2615 8.69837 11.0433C8.91651 10.8252 9.21238 10.7026 9.52087 10.7026C9.82937 10.7026 10.1252 10.8252 10.3434 11.0433L12 12.6883L13.645 11.0433C13.8632 10.8252 14.159 10.7026 14.4675 10.7026C14.776 10.7026 15.0719 10.8252 15.29 11.0433C15.5082 11.2615 15.6307 11.5573 15.6307 11.8658C15.6307 12.1743 15.5082 12.4702 15.29 12.6883L13.645 14.3333L15.29 15.9783C15.3981 16.0863 15.4837 16.2146 15.5422 16.3557C15.6006 16.4968 15.6307 16.6481 15.6307 16.8008C15.6307 16.9536 15.6006 17.1048 15.5422 17.246C15.4837 17.3871 15.3981 17.5153 15.29 17.6233C15.182 17.7313 15.0538 17.817 14.9127 17.8755C14.7715 17.9339 14.6203 17.964 14.4675 17.964C14.3148 17.964 14.1635 17.9339 14.0224 17.8755C13.8813 17.817 13.7531 17.7313 13.645 17.6233L12 15.9783L10.355 17.6233C10.247 17.7313 10.1188 17.817 9.97767 17.8755C9.83655 17.9339 9.68529 17.964 9.53254 17.964C9.37979 17.964 9.22853 17.9339 9.08741 17.8755C8.94628 17.817 8.81805 17.7313 8.71004 17.6233C8.60203 17.5153 8.51635 17.3871 8.45789 17.246C8.39944 17.1048 8.36935 16.9536 8.36935 16.8008C8.36935 16.6481 8.39944 16.4968 8.45789 16.3557C8.51635 16.2146 8.60203 16.0863 8.71004 15.9783L10.355 14.3333L8.69837 12.6883ZM19 2.66667H16.0834L15.255 1.83833C15.045 1.62833 14.7417 1.5 14.4384 1.5H9.56171C9.25837 1.5 8.95504 1.62833 8.74504 1.83833L7.91671 2.66667H5.00004C4.35837 2.66667 3.83337 3.19167 3.83337 3.83333C3.83337 4.475 4.35837 5 5.00004 5H19C19.6417 5 20.1667 4.475 20.1667 3.83333C20.1667 3.19167 19.6417 2.66667 19 2.66667Z" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 31 31" }, props),
        React.createElement("path", { d: "M27.7419 2.38833C27.5502 2.19666 27.3071 2.06449 27.042 2.00773C26.777 1.95097 26.5011 1.97204 26.2477 2.06841L2.80847 10.9401H2.80378C2.53352 11.044 2.30194 11.2289 2.14066 11.4694C1.97939 11.7098 1.89628 11.9943 1.90269 12.2837C1.9091 12.5732 2.00472 12.8537 2.17648 13.0868C2.34824 13.3199 2.58778 13.4943 2.86237 13.5862L2.8864 13.5938L10.9313 17.0292C11.0882 17.0768 11.2549 17.0824 11.4147 17.0455C11.5744 17.0086 11.7217 16.9304 11.8419 16.8188L24.7536 4.78775C24.7921 4.74927 24.8377 4.71875 24.888 4.69793C24.9383 4.67711 24.9921 4.66639 25.0466 4.66639C25.101 4.66639 25.1548 4.67711 25.2051 4.69793C25.2554 4.71875 25.301 4.74927 25.3395 4.78775C25.378 4.82622 25.4085 4.87189 25.4293 4.92216C25.4502 4.97243 25.4609 5.02631 25.4609 5.08071C25.4609 5.13512 25.4502 5.189 25.4293 5.23927C25.4085 5.28954 25.378 5.33521 25.3395 5.37368L13.3079 18.2795C13.1962 18.3997 13.1181 18.547 13.0812 18.7067C13.0443 18.8665 13.0499 19.0332 13.0975 19.1901L16.5341 27.2397C16.5376 27.2514 16.5411 27.262 16.5452 27.2731C16.7327 27.8163 17.2073 28.1995 17.7809 28.2252H17.8395C18.1291 28.2269 18.4125 28.1414 18.6528 27.9798C18.8932 27.8183 19.0794 27.5882 19.1872 27.3194L28.0577 3.88657C28.1554 3.63303 28.1776 3.35659 28.1216 3.0907C28.0655 2.82481 27.9336 2.58085 27.7419 2.38833Z" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 18", fill: "none" }, props),
        React.createElement("g", { filter: "url(#filter0_iiiii_287_4829)" },
            React.createElement("rect", { x: "2", y: "0.746094", width: "14", height: "17.2539", rx: "1.22353", fill: "url(#paint0_linear_287_4829)" }),
            React.createElement("g", { filter: "url(#filter1_d_287_4829)" },
                React.createElement("rect", { x: "3.39917", y: "2.70459", width: "10.9119", height: "13.5233", rx: "0.920174", fill: "white" }),
                React.createElement("g", { filter: "url(#filter2_d_287_4829)" },
                    React.createElement("g", { filter: "url(#filter3_diiiii_287_4829)" },
                        React.createElement("circle", { cx: "5.77725", cy: "5.88601", r: "0.88601", fill: "url(#paint1_linear_287_4829)" })),
                    React.createElement("g", { filter: "url(#filter4_diiiii_287_4829)" },
                        React.createElement("rect", { x: "7.87573", y: "5.46631", width: "4.47668", height: "0.839378", rx: "0.2", fill: "url(#paint2_linear_287_4829)" }))),
                React.createElement("g", { filter: "url(#filter5_d_287_4829)" },
                    React.createElement("g", { filter: "url(#filter6_diiiii_287_4829)" },
                        React.createElement("circle", { cx: "5.77725", cy: "8.65798", r: "0.88601", fill: "url(#paint3_linear_287_4829)" })),
                    React.createElement("g", { filter: "url(#filter7_diiiii_287_4829)" },
                        React.createElement("rect", { x: "7.87573", y: "8.23828", width: "4.47668", height: "0.839378", rx: "0.2", fill: "url(#paint4_linear_287_4829)" }))),
                React.createElement("g", { filter: "url(#filter8_d_287_4829)" },
                    React.createElement("g", { filter: "url(#filter9_diiiii_287_4829)" },
                        React.createElement("circle", { cx: "5.77725", cy: "11.43", r: "0.88601", fill: "url(#paint5_linear_287_4829)" })),
                    React.createElement("g", { filter: "url(#filter10_diiiii_287_4829)" },
                        React.createElement("rect", { x: "7.87573", y: "11.0103", width: "4.47668", height: "0.839378", rx: "0.2", fill: "url(#paint6_linear_287_4829)" }))))),
        React.createElement("g", { filter: "url(#filter11_iiiii_287_4829)" },
            React.createElement("path", { d: "M10.898 3.17098C11.5737 3.17098 12.1426 2.60322 11.8854 1.97837C11.8825 1.9714 11.8796 1.96445 11.8767 1.9575C11.7151 1.57278 11.4782 1.22321 11.1795 0.92876C10.8809 0.634307 10.5263 0.400734 10.1361 0.241377C9.74589 0.0820199 9.32766 -1.82023e-08 8.9053 0C8.48294 1.82023e-08 8.06472 0.08202 7.67451 0.241377C7.2843 0.400734 6.92975 0.634307 6.63109 0.92876C6.33244 1.22321 6.09554 1.57278 5.93391 1.9575C5.93099 1.96445 5.92809 1.9714 5.92523 1.97837C5.66798 2.60322 6.23688 3.17098 6.91261 3.17098L8.9053 3.17098H10.898Z", fill: "url(#paint7_linear_287_4829)" })),
        React.createElement("g", { filter: "url(#filter12_diiiii_287_4829)" },
            React.createElement("rect", { x: "5.68909", y: "2.42493", width: "6.43243", height: "0.839378", rx: "0.2", fill: "url(#paint8_linear_287_4829)" })),
        React.createElement("g", { filter: "url(#filter13_d_287_4829)" },
            React.createElement("ellipse", { cx: "8.90547", cy: "1.21241", rx: "0.472973", ry: "0.466321", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("filter", { id: "filter0_iiiii_287_4829", x: "1.63294", y: "0.379035", width: "14.6118", height: "17.7433", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.92 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.367058", dy: "-0.367058" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.367058" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0455729 0 0 0 0 0.4375 0 0 0 0 0.289554 0 0 0 1 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect1_innerShadow_287_4829", result: "effect2_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "0.244706", dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.41 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect2_innerShadow_287_4829", result: "effect3_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.120069 0 0 0 0 0.554167 0 0 0 0 0.415935 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect3_innerShadow_287_4829", result: "effect4_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0954861 0 0 0 0 0.520833 0 0 0 0 0.462831 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect4_innerShadow_287_4829", result: "effect5_innerShadow_287_4829" })),
            React.createElement("filter", { id: "filter1_d_287_4829", x: "2.29799", y: "2.09283", width: "13.1142", height: "15.7257", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.489411" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.550588" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0126389 0 0 0 0 0.433333 0 0 0 0 0.294504 0 0 0 1 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_287_4829" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_287_4829", result: "shape" })),
            React.createElement("filter", { id: "filter2_d_287_4829", x: "4.79124", y: "4.9", width: "7.86118", height: "2.17197", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "0.1", dy: "0.1" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0.229167 0 0 0 0 0.153246 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_287_4829" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_287_4829", result: "shape" })),
            React.createElement("filter", { id: "filter3_diiiii_287_4829", x: "4.52418", y: "4.63294", width: "2.49903", height: "2.85903", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.36" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.18" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0.55 0 0 0 0 0.338742 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_287_4829" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_287_4829", result: "shape" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.92 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect2_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.367058", dy: "-0.367058" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.367058" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0455729 0 0 0 0 0.4375 0 0 0 0 0.289554 0 0 0 1 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect2_innerShadow_287_4829", result: "effect3_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "0.244706", dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.41 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect3_innerShadow_287_4829", result: "effect4_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.120069 0 0 0 0 0.554167 0 0 0 0 0.415935 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect4_innerShadow_287_4829", result: "effect5_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.5375 0 0 0 0 1 0 0 0 0 0.936932 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect5_innerShadow_287_4829", result: "effect6_innerShadow_287_4829" })),
            React.createElement("filter", { id: "filter4_diiiii_287_4829", x: "7.50867", y: "5.09925", width: "5.20374", height: "1.92641", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.36" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.18" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0.4125 0 0 0 0 0.277723 0 0 0 0.17 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_287_4829" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_287_4829", result: "shape" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.92 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect2_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.367058", dy: "-0.367058" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.367058" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0232639 0 0 0 0 0.558333 0 0 0 0 0.356354 0 0 0 1 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect2_innerShadow_287_4829", result: "effect3_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "0.244706", dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.41 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect3_innerShadow_287_4829", result: "effect4_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.120069 0 0 0 0 0.554167 0 0 0 0 0.415935 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect4_innerShadow_287_4829", result: "effect5_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.5375 0 0 0 0 1 0 0 0 0 0.936932 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect5_innerShadow_287_4829", result: "effect6_innerShadow_287_4829" })),
            React.createElement("filter", { id: "filter5_d_287_4829", x: "4.79124", y: "7.67197", width: "7.86118", height: "2.17197", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "0.1", dy: "0.1" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0.229167 0 0 0 0 0.153246 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_287_4829" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_287_4829", result: "shape" })),
            React.createElement("filter", { id: "filter6_diiiii_287_4829", x: "4.52418", y: "7.40491", width: "2.49903", height: "2.85903", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.36" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.18" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0.55 0 0 0 0 0.338742 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_287_4829" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_287_4829", result: "shape" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.92 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect2_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.367058", dy: "-0.367058" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.367058" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0455729 0 0 0 0 0.4375 0 0 0 0 0.289554 0 0 0 1 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect2_innerShadow_287_4829", result: "effect3_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "0.244706", dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.41 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect3_innerShadow_287_4829", result: "effect4_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.120069 0 0 0 0 0.554167 0 0 0 0 0.415935 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect4_innerShadow_287_4829", result: "effect5_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.5375 0 0 0 0 1 0 0 0 0 0.936932 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect5_innerShadow_287_4829", result: "effect6_innerShadow_287_4829" })),
            React.createElement("filter", { id: "filter7_diiiii_287_4829", x: "7.50867", y: "7.87122", width: "5.20374", height: "1.92641", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.36" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.18" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0.4125 0 0 0 0 0.277723 0 0 0 0.17 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_287_4829" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_287_4829", result: "shape" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.92 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect2_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.367058", dy: "-0.367058" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.367058" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0232639 0 0 0 0 0.558333 0 0 0 0 0.356354 0 0 0 1 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect2_innerShadow_287_4829", result: "effect3_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "0.244706", dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.41 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect3_innerShadow_287_4829", result: "effect4_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.120069 0 0 0 0 0.554167 0 0 0 0 0.415935 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect4_innerShadow_287_4829", result: "effect5_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.5375 0 0 0 0 1 0 0 0 0 0.936932 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect5_innerShadow_287_4829", result: "effect6_innerShadow_287_4829" })),
            React.createElement("filter", { id: "filter8_d_287_4829", x: "4.79124", y: "10.4439", width: "7.86118", height: "2.17197", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "0.1", dy: "0.1" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0.229167 0 0 0 0 0.153246 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_287_4829" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_287_4829", result: "shape" })),
            React.createElement("filter", { id: "filter9_diiiii_287_4829", x: "4.52418", y: "10.1769", width: "2.49903", height: "2.85903", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.36" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.18" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0.55 0 0 0 0 0.338742 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_287_4829" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_287_4829", result: "shape" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.92 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect2_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.367058", dy: "-0.367058" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.367058" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0455729 0 0 0 0 0.4375 0 0 0 0 0.289554 0 0 0 1 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect2_innerShadow_287_4829", result: "effect3_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "0.244706", dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.41 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect3_innerShadow_287_4829", result: "effect4_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.120069 0 0 0 0 0.554167 0 0 0 0 0.415935 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect4_innerShadow_287_4829", result: "effect5_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.5375 0 0 0 0 1 0 0 0 0 0.936932 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect5_innerShadow_287_4829", result: "effect6_innerShadow_287_4829" })),
            React.createElement("filter", { id: "filter10_diiiii_287_4829", x: "7.50867", y: "10.6432", width: "5.20374", height: "1.92641", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.36" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.18" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0.4125 0 0 0 0 0.277723 0 0 0 0.17 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_287_4829" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_287_4829", result: "shape" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.92 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect2_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.367058", dy: "-0.367058" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.367058" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0232639 0 0 0 0 0.558333 0 0 0 0 0.356354 0 0 0 1 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect2_innerShadow_287_4829", result: "effect3_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "0.244706", dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.41 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect3_innerShadow_287_4829", result: "effect4_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.120069 0 0 0 0 0.554167 0 0 0 0 0.415935 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect4_innerShadow_287_4829", result: "effect5_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.5375 0 0 0 0 1 0 0 0 0 0.936932 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect5_innerShadow_287_4829", result: "effect6_innerShadow_287_4829" })),
            React.createElement("filter", { id: "filter11_iiiii_287_4829", x: "5.495", y: "-0.367058", width: "6.69819", height: "3.66043", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.92 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.367058", dy: "-0.367058" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.367058" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0455729 0 0 0 0 0.4375 0 0 0 0 0.289554 0 0 0 1 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect1_innerShadow_287_4829", result: "effect2_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "0.244706", dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.41 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect2_innerShadow_287_4829", result: "effect3_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.120069 0 0 0 0 0.554167 0 0 0 0 0.415935 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect3_innerShadow_287_4829", result: "effect4_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0954861 0 0 0 0 0.520833 0 0 0 0 0.462831 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect4_innerShadow_287_4829", result: "effect5_innerShadow_287_4829" })),
            React.createElement("filter", { id: "filter12_diiiii_287_4829", x: "5.32203", y: "2.05787", width: "7.15943", height: "1.92641", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.36" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.18" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.00704861 0 0 0 0 0.120833 0 0 0 0 0.0836561 0 0 0 0.17 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_287_4829" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_287_4829", result: "shape" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.92 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect2_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.367058", dy: "-0.367058" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.367058" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.0455729 0 0 0 0 0.4375 0 0 0 0 0.289554 0 0 0 1 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect2_innerShadow_287_4829", result: "effect3_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "0.244706", dy: "0.122353" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.122353" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.41 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect3_innerShadow_287_4829", result: "effect4_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.120069 0 0 0 0 0.554167 0 0 0 0 0.415935 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect4_innerShadow_287_4829", result: "effect5_innerShadow_287_4829" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dx: "-0.262379" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.0655947" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.5375 0 0 0 0 1 0 0 0 0 0.936932 0 0 0 0.2 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "effect5_innerShadow_287_4829", result: "effect6_innerShadow_287_4829" })),
            React.createElement("filter", { id: "filter13_d_287_4829", x: "8.3325", y: "0.746094", width: "1.14592", height: "1.13262", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React.createElement("feOffset", { dy: "0.1" }),
                React.createElement("feGaussianBlur", { stdDeviation: "0.05" }),
                React.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" }),
                React.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_287_4829" }),
                React.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_287_4829", result: "shape" })),
            React.createElement("linearGradient", { id: "paint0_linear_287_4829", x1: "9", y1: "0.746094", x2: "9", y2: "18", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#2ABD84" }),
                React.createElement("stop", { offset: "1", stopColor: "#08D793" })),
            React.createElement("linearGradient", { id: "paint1_linear_287_4829", x1: "5.77725", y1: "5", x2: "5.77725", y2: "6.77202", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#2ABD84" }),
                React.createElement("stop", { offset: "1", stopColor: "#08D793" })),
            React.createElement("linearGradient", { id: "paint2_linear_287_4829", x1: "12.5", y1: "6", x2: "8", y2: "6", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#2ABD84" }),
                React.createElement("stop", { offset: "1", stopColor: "#08D793" })),
            React.createElement("linearGradient", { id: "paint3_linear_287_4829", x1: "5.77725", y1: "7.77197", x2: "5.77725", y2: "9.54399", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#2ABD84" }),
                React.createElement("stop", { offset: "1", stopColor: "#08D793" })),
            React.createElement("linearGradient", { id: "paint4_linear_287_4829", x1: "12.5", y1: "8.77197", x2: "8", y2: "8.77197", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#2ABD84" }),
                React.createElement("stop", { offset: "1", stopColor: "#08D793" })),
            React.createElement("linearGradient", { id: "paint5_linear_287_4829", x1: "5.77725", y1: "10.5439", x2: "5.77725", y2: "12.316", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#2ABD84" }),
                React.createElement("stop", { offset: "1", stopColor: "#08D793" })),
            React.createElement("linearGradient", { id: "paint6_linear_287_4829", x1: "12.5", y1: "11.5439", x2: "8", y2: "11.5439", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#2ABD84" }),
                React.createElement("stop", { offset: "1", stopColor: "#08D793" })),
            React.createElement("linearGradient", { id: "paint7_linear_287_4829", x1: "8.9053", y1: "0", x2: "8.9053", y2: "6.34197", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#2ABD84" }),
                React.createElement("stop", { offset: "1", stopColor: "#08D793" })),
            React.createElement("linearGradient", { id: "paint8_linear_287_4829", x1: "8.9053", y1: "2.42493", x2: "8.9053", y2: "3.26431", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#2ABD84" }),
                React.createElement("stop", { offset: "1", stopColor: "#08D793" })))));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.5358 18.4866C19.2402 18.4866 19.8112 17.9156 19.8112 17.2113C19.8112 16.5069 19.2402 15.9359 18.5358 15.9359C17.8315 15.9359 17.2605 16.5069 17.2605 17.2113C17.2605 17.9156 17.8315 18.4866 18.5358 18.4866ZM18.5358 19.8682C20.0032 19.8682 21.1928 18.6786 21.1928 17.2113C21.1928 15.7439 20.0032 14.5543 18.5358 14.5543C17.0685 14.5543 15.8789 15.7439 15.8789 17.2113C15.8789 18.6786 17.0685 19.8682 18.5358 19.8682Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.31384 17.7426C7.48774 17.7426 8.43938 16.791 8.43938 15.6171C8.43938 14.4432 7.48774 13.4915 6.31384 13.4915C5.13993 13.4915 4.18829 14.4432 4.18829 15.6171C4.18829 16.791 5.13993 17.7426 6.31384 17.7426ZM6.31384 19.8681C8.66165 19.8681 10.5649 17.9649 10.5649 15.6171C10.5649 13.2692 8.66165 11.366 6.31384 11.366C3.96602 11.366 2.06274 13.2692 2.06274 15.6171C2.06274 17.9649 3.96602 19.8681 6.31384 19.8681Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.2103 7.49462C13.3866 7.24265 13.6854 7.10558 13.9914 7.13619L18.1624 7.55329C18.9773 7.63478 19.5979 8.32054 19.5979 9.13954V13.2399C19.2782 13.1598 18.9436 13.1173 18.599 13.1173C16.7044 13.1173 15.1099 14.4024 14.6397 16.1485H12.0741C12.0904 15.9729 12.0987 15.7949 12.0987 15.6149C12.0987 13.3921 10.8264 11.4664 8.97021 10.5266V10.4084L10.9711 9.96377C11.3602 9.87731 11.7027 9.64826 11.9313 9.32176L13.2103 7.49462ZM17.1109 15.8073L17.9979 15.2568C17.6555 15.3617 17.3512 15.5539 17.1109 15.8073Z" }),
        React.createElement("path", { d: "M3.12549 8.70906C3.12549 8.41558 3.3634 8 3.65687 8H6.31381C6.90076 8 7.37658 8.65349 7.37658 9.24045V9.77183H3.65687C3.3634 9.77183 3.12549 9.53392 3.12549 9.24045V8.70906Z" }),
        React.createElement("path", { d: "M9.57983 7.32788L12.7196 4.00004L13.4148 4.65599L10.2751 7.98383L9.57983 7.32788Z" }),
        React.createElement("path", { d: "M12.166 5.97961L14.4851 8.16761L13.8287 8.86333L11.5096 6.67533L12.166 5.97961Z" })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.4319 12.8431C16.6324 13.641 14.2935 15.9799 14.2935 15.9799C14.2935 15.9799 14.8442 18.7296 13.37 20.6252C13.2005 20.8432 12.8811 20.8417 12.6858 20.6464L3.35353 11.3141C3.15827 11.1189 3.15678 10.7993 3.375 10.6301C5.2718 9.15946 8.03072 9.73667 8.03072 9.73667C8.03072 9.73667 9.28083 8.44477 11.1568 6.56878C13.666 4.05872 18.6861 5.31375 18.6861 5.31375C18.6861 5.31375 19.9411 10.3339 17.4319 12.8431ZM7.89146 18.5407C6.25305 20.1791 3.79543 20.1791 3.79543 20.1791C3.79543 20.1791 3.79543 16.9023 5.43384 16.0831L7.89146 18.5407ZM13.975 10.0251C14.5608 10.6109 15.5105 10.6109 16.0963 10.0251C16.6821 9.43933 16.6821 8.48958 16.0963 7.90379C15.5105 7.318 14.5608 7.318 13.975 7.90379C13.3892 8.48958 13.3892 9.43933 13.975 10.0251Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "24", height: "24" })))));
};

var Icon$c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.9949 0.1271C15.7004 -0.0405764 15.3393 -0.0405762 15.0449 0.1271L7.52475 4.40914C7.22494 4.57986 7.03979 4.89833 7.03979 5.24334V13.7845C7.03979 14.1295 7.22494 14.448 7.52475 14.6187L15.0449 18.9008C15.3393 19.0684 15.7004 19.0684 15.9949 18.9008L23.515 14.6187C23.8148 14.448 23.9999 14.1295 23.9999 13.7845V5.24334C23.9999 4.89833 23.8148 4.57986 23.515 4.40914L15.9949 0.1271ZM9.87568 8.76056V11.6853H8.77848V6.97803H9.73724L11.9801 9.8993V6.97803H13.0773V11.6853H12.1289L9.87915 8.76056H9.87568ZM15.6329 9.95121V11.6853H14.5357V6.97803H17.855V7.95409H15.6329V9.03399H17.5401V9.95121H15.6329ZM21.089 7.95409V11.6853H19.9988V7.95409H18.68V6.97803H22.4043V7.95409H21.089Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.59476 10.5629C2.38355 10.989 0 12.5649 0 14.4452C0 16.653 3.28694 18.4411 7.33948 18.4411C8.50167 18.4411 9.60076 18.2941 10.5774 18.0324L6.09473 15.4441C5.78535 15.2654 5.59476 14.9353 5.59476 14.5781V10.5629ZM11.8673 18.7772C10.6202 19.3102 9.04821 19.6279 7.33948 19.6279C3.29727 19.6279 0.0187879 17.8593 0 15.6608V17.2247C0 19.4325 3.28506 21.2206 7.33948 21.2206C9.77296 21.2206 11.9293 20.5764 13.2645 19.584L11.8673 18.7772ZM14.0468 20.0357C12.9035 21.4335 10.331 22.4074 7.33948 22.4074C3.29727 22.4074 0.0187879 20.6387 0 18.4402V20.0041C0 22.2119 3.28506 24 7.33948 24C11.1598 24 14.2971 22.4124 14.6466 20.382L14.0468 20.0357Z" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.4545 8.25C14.4545 7.09625 14.0455 6.03187 13.3664 5.195C13.71 5.08125 14.07 5 14.4545 5C16.2627 5 17.7273 6.45438 17.7273 8.25C17.7273 10.0456 16.2627 11.5 14.4545 11.5C14.1027 11.5 13.7673 11.4269 13.4482 11.3294C13.4236 11.3212 13.3991 11.3131 13.3664 11.305C14.0704 10.4403 14.4545 9.36199 14.4545 8.25ZM15.8127 12.4181C16.9336 13.1737 17.7273 14.1975 17.7273 15.5625V18H21V15.5625C21 13.7913 18.0709 12.7431 15.8127 12.4181ZM9.54545 5C11.3536 5 12.8182 6.45438 12.8182 8.25C12.8182 10.0456 11.3536 11.5 9.54545 11.5C7.73727 11.5 6.27273 10.0456 6.27273 8.25C6.27273 6.45438 7.73727 5 9.54545 5ZM9.54545 12.3125C11.73 12.3125 16.0909 13.4012 16.0909 15.5625V18H3V15.5625C3 13.4012 7.36091 12.3125 9.54545 12.3125Z" })));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.6173 4.74263C16.261 4.20784 15.48 4.10541 15.0033 4.5211C13.7386 5.62388 11.3953 7.56262 9.43732 8.59499C7.56606 9.58164 4.91917 10.431 3.38138 10.8828C2.75176 11.0677 2.46818 11.7616 2.80723 12.3134L3.8898 14.0754C4.16495 13.7472 4.57798 13.5386 5.03974 13.5386C5.86817 13.5386 6.53974 14.2101 6.53974 15.0386C6.53974 15.7502 6.04424 16.346 5.37946 16.4999L6.64943 18.5669C6.86213 18.9131 7.2702 19.1087 7.67914 19.0414C9.18679 18.7936 12.9209 18.0137 15.9219 16.0206C18.6184 14.2298 20.1025 12.8081 20.7632 12.099C21.0333 11.8091 21.0443 11.3863 20.8198 11.0495L19.3497 8.84326C19.0746 9.16934 18.6629 9.37647 18.2028 9.37647C17.3744 9.37647 16.7028 8.7049 16.7028 7.87647C16.7028 7.20514 17.1438 6.63682 17.752 6.44541L16.6173 4.74263ZM12.259 15.3765C13.9158 15.3765 15.259 14.0333 15.259 12.3765C15.259 10.7196 13.9158 9.37647 12.259 9.37647C10.6021 9.37647 9.25898 10.7196 9.25898 12.3765C9.25898 14.0333 10.6021 15.3765 12.259 15.3765Z" })));
};

var Box = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), background, border, layout, position, space);
var templateObject_1$G;

var Flex = styled(Box)(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), flexbox);
var templateObject_1$F;

var variants$2 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$2.INFO : _b;
    switch (variant) {
        case variants$2.DANGER:
            return theme.colors.failure;
        case variants$2.WARNING:
            return theme.colors.warning;
        case variants$2.SUCCESS:
            return theme.colors.success;
        case variants$2.INFO:
        default:
            return theme.colors.gray;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$2.INFO; }
    switch (variant) {
        case variants$2.DANGER:
            return Icon$1B;
        case variants$2.WARNING:
            return Icon$1C;
        case variants$2.SUCCESS:
            return Icon$1D;
        case variants$2.INFO:
        default:
            return Icon$1A;
    }
};
// const IconLabel = styled.div<ThemedIconLabel>`
//   /* background-color: ${getThemeColor}; */
//   /* border-radius: 16px 0 0 16px; */
//   /* color: ${({ theme }) => theme.alert.background}; */
//   /* padding: 12px; */
//   svg {
//     fill: ${getThemeColor};
//   }
// `;
var Title = styled.div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 8px;\n  margin-left: 16px;\n  margin-right: 28px;\n\n  svg {\n    margin-right: 8px;\n    fill: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 8px;\n  margin-left: 16px;\n  margin-right: 28px;\n\n  svg {\n    margin-right: 8px;\n    fill: ", ";\n  }\n"])), getThemeColor);
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 16px;\n  padding-left: 16px;\n  padding-right: ", ";\n  padding-top: 16px;\n"], ["\n  flex: 1;\n  padding-bottom: 16px;\n  padding-left: 16px;\n  padding-right: ", ";\n  padding-top: 16px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? "".concat(withHandlerSpacing, "px") : "12px");
});
var CloseHandler = styled.div(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  background-color: #fff;\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  overflow: hidden;\n  background-color: #fff;\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])));
var Description = styled.p(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  color: #6b7d98;\n  font-size: 16px;\n  vertical-align: middle;\n  font-weight: 400;\n  line-height: 1.5;\n  margin: 0;\n"], ["\n  color: #6b7d98;\n  font-size: 16px;\n  vertical-align: middle;\n  font-weight: 400;\n  line-height: 1.5;\n  margin: 0;\n"])));
var Alert = function (_a) {
    var style = _a.style, title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(Details, { style: style, hasHandler: !!onClick },
            React.createElement(Title, { variant: variant, hasDescription: !!children },
                React.createElement(Icon, { color: "currentColor", width: "24px" }),
                React.createElement("span", null, title)),
            typeof children === "string" ? React.createElement(Description, null, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$1h, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$E, templateObject_2$l, templateObject_3$a, templateObject_4$7, templateObject_5$4;

var StyledBanner = styled.div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  padding: 32px;\n  border-radius: 24px;\n  background: ", ";\n  display: flex;\n"], ["\n  padding: 32px;\n  border-radius: 24px;\n  background: ", ";\n  display: flex;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.cardBlue;
});
var StyledBannerBoby = styled.div(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  width: ", ";\n  align-items: ", ";\n  display: flex;\n  flex-direction: column;\n"], ["\n  width: ", ";\n  align-items: ", ";\n  display: flex;\n  flex-direction: column;\n"])), function (_a) {
    var large = _a.large;
    return (large ? "50%" : "100%");
}, function (_a) {
    var large = _a.large;
    return large && "flex-start";
});
var StyledBannerLeft = styled.div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var Banner = function (_a) {
    var large = _a.large, children = _a.children;
    return (React.createElement(StyledBanner, null,
        React.createElement(StyledBannerBoby, { large: large },
            children[0],
            children[1],
            children[2]),
        children[3] && React.createElement(StyledBannerLeft, null, children[3])));
};
Banner.defaultProps = {
    large: false,
};
var templateObject_1$D, templateObject_2$k, templateObject_3$9;

var BannerBody = styled.p(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  color: ", ";\n  margin-bottom: 24px;\n  font-weight: 900;\n  min-height: 64px;\n  font-size: 26px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n"], ["\n  color: ", ";\n  margin-bottom: 24px;\n  font-weight: 900;\n  min-height: 64px;\n  font-size: 26px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.warning;
});
var templateObject_1$C;

var BannerTitle = styled.h2(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  color: ", ";\n  min-height: 32px;\n  margin-bottom: 24px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n"], ["\n  color: ", ";\n  min-height: 32px;\n  margin-bottom: 24px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var templateObject_1$B;

var Separator = styled.div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gray;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum, true), [item], false);
        }
        return __spreadArray(__spreadArray([], accum, true), [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-".concat(index) }, separator),
            item,
        ], false);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$1k, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-".concat(index) }, item)); })));
};
var templateObject_1$A, templateObject_2$j;

var getBackgroundColor = function (_a) {
    _a.theme; var variant = _a.variant;
    return variant === variants$3.TRANSPARENT ? 'transparent' : variant === variants$3.TERTIARY ? "tertiary" : "card";
};
var StyledButtonMenu = styled.div(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 8px;\n  display: ", ";\n\n  & > button,\n  & > a {\n    ", "\n  }\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 8px;\n  display: ", ";\n\n  & > button,\n  & > a {\n    ", "\n  }\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor, function (_a) {
    var autoWidth = _a.autoWidth;
    return autoWidth ? 'flex' : 'inline-flex';
}, function (_a) {
    var autoWidth = _a.autoWidth;
    return autoWidth && 'flex: 1 1 auto;';
});
var templateObject_1$z;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$5.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$3.PRIMARY : _d, onItemClick = _a.onItemClick, _e = _a.autoWidth, autoWidth = _e === void 0 ? false : _e, children = _a.children, line = _a.line;
    return (React.createElement(StyledButtonMenu, { variant: variant, autoWidth: autoWidth }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
            line: line
        });
    })));
};

var InactiveButton = styled(function (_a) {
    var props = __rest(_a, []);
    return React.createElement(Button, __assign({}, props));
})(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$3.PRIMARY : _c, as = _a.as, line = _a.line, props = __rest(_a, ["isActive", "variant", "as", "line"]);
    if (!isActive) {
        return (React.createElement(InactiveButton, __assign({ forwardedAs: as, variant: "tertiary", color: variant === variants$3.PRIMARY ? "light" : variant === variants$3.TERTIARY ? 'tertiary' : variant === variants$3.UNDERLINE ? 'gray' : "primary" }, props)));
    }
    return React.createElement(Button, __assign({ as: as, variant: variant === variants$3.TERTIARY ? 'primary' : variant, line: line }, props));
};
var templateObject_1$y;

var scales$4 = {
    SM: "sm",
    MD: "md",
    XS: 'xs',
};

var getScale$2 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$4.XS:
            return "20px";
        case scales$4.SM:
            return "24px";
        case scales$4.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  // &:hover:not(:disabled):not(:checked) {\n  //   box-shadow: ", ";\n  // }\n  //\n  &:focus {\n    outline: none;\n    box-shadow: none;\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  // &:hover:not(:disabled):not(:checked) {\n  //   box-shadow: ", ";\n  // }\n  //\n  &:focus {\n    outline: none;\n    box-shadow: none;\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$2, getScale$2, function (_a) {
    var scale = _a.scale;
    return scale === 'xs' ? '4px' : '8px';
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
Checkbox.defaultProps = {
    scale: scales$4.MD,
};
var templateObject_1$x;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$1 = styled.div(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container$1, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$w, templateObject_2$i;

var bunnyFall = keyframes(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled.div(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return "".concat(position, "vw");
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return "".concat(duration, "s");
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return "".concat((duration / 10) * 1.3, "s");
}, function (_a) {
    var duration = _a.duration;
    return "".concat((duration / 10) * 1.5, "s");
}, function (_a) {
    var duration = _a.duration;
    return "".concat((duration / 10) * 1.7, "s");
}, function (_a) {
    var duration = _a.duration;
    return "".concat((duration / 10) * 2.7, "s");
}, function (_a) {
    var duration = _a.duration;
    return "".concat((duration / 10) * 3.5, "s");
}, function (_a) {
    var duration = _a.duration;
    return "".concat((duration / 10) * 5.5, "s");
}, function (_a) {
    var duration = _a.duration;
    return "".concat((duration / 10) * 8, "s");
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArray([], Array(count), true).map(function (_, index) { return (React.createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React.createElement(Icon$1b, { width: size, height: size }))); });
    return React.createElement("div", null, bunnies);
};
var templateObject_1$v, templateObject_2$h;

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors.".concat(color), color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.span(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  display: block;\n  color: ", ";\n  font-size: ", ";\n  vertical-align: middle;\n  font-weight: ", ";\n  line-height: ", ";\n  ", "\n  ", "\n  ", "\n"], ["\n  display: block;\n  color: ", ";\n  font-size: ", ";\n  vertical-align: middle;\n  font-weight: ", ";\n  line-height: ", ";\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var lineHeight = _a.lineHeight;
    return lineHeight || "1.5";
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: ".concat(textTransform, ";");
}, space, typography);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$u;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$3;
var style = (_a$3 = {},
    _a$3[sizes.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$3[sizes.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$3[sizes.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$3[sizes.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$3);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.1;\n  color: #fff;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.1;\n  color: #fff;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSize;
}, function (_a) {
    var normal = _a.normal;
    return (normal ? 400 : 600);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var size = _a.size;
    return style[size || sizes.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
    normal: false,
};
var templateObject_1$t;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper$2 = styled.div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, space);
var templateObject_1$s;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"".concat(src, "\")");
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React.createElement(Wrapper$2, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React.createElement(Wrapper$2, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$r, templateObject_2$g;

var scales$3 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBorderColor = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.colors.failure;
    }
    if (isSuccess) {
        return theme.colors.success;
    }
    return theme.colors.dark;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b;
    switch (scale) {
        case scales$3.SM:
            return "32px";
        case scales$3.LG:
            return "48px";
        case scales$3.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled.input(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 8px;\n  border-color: ", ";\n  color: ", ";\n  border-width: ", ";\n  box-shadow: none;\n  border-style: solid;\n  display: block;\n  font-size: 12px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    border-color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 8px;\n  border-color: ", ";\n  color: ", ";\n  border-width: ", ";\n  box-shadow: none;\n  border-style: solid;\n  display: block;\n  font-size: 12px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    border-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, isLight = _a.isLight;
    return (isLight ? 'transparent' : theme.colors.gray);
}, getBorderColor, function (_a) {
    var theme = _a.theme, isLight = _a.isLight;
    return (isLight ? theme.colors.light : theme.colors.light);
}, function (_a) {
    var isLight = _a.isLight;
    return (isLight ? '0px' : '1px');
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.light;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.gray;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
Input$1.defaultProps = {
    scale: scales$3.MD,
    isSuccess: false,
    isWarning: false,
    isLight: false,
};
var templateObject_1$q;

var GridLayout$1 = styled.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$p;

var GridLayout = styled(GridLayout$1)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$o;

var NotificationDotRoot = styled.span(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled.span(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, children = _a.children, props = __rest(_a, ["show", "children"]);
    return (React.createElement(NotificationDotRoot, null,
        Children.map(children, function (child) { return cloneElement(child, props); }),
        React.createElement(Dot, { show: show })));
};
var templateObject_1$n, templateObject_2$f;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  // &:hover:not(:disabled):not(:checked) {\n  //   box-shadow: ", ";\n  // }\n  //\n  // &:focus {\n  //   outline: none;\n  //   box-shadow: ", ";\n  // }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  // &:hover:not(:disabled):not(:checked) {\n  //   box-shadow: ", ";\n  // }\n  //\n  // &:focus {\n  //   outline: none;\n  //   box-shadow: ", ";\n  // }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.card;
}, space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$m;

var variants$1 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    BINANCE: "binance",
    FAILURE: "failure",
};
var scales$1 = {
    MD: "md",
    SM: "sm",
};

var _a$2, _b;
var scaleVariants = (_a$2 = {},
    _a$2[scales$1.MD] = {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px",
    },
    _a$2[scales$1.SM] = {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px",
    },
    _a$2);
var styleVariants$1 = (_b = {},
    _b[variants$1.PRIMARY] = {
        backgroundColor: "primary",
    },
    _b[variants$1.SECONDARY] = {
        backgroundColor: "secondary",
    },
    _b[variants$1.SUCCESS] = {
        backgroundColor: "success",
    },
    _b[variants$1.TEXTDISABLED] = {
        backgroundColor: "textDisabled",
    },
    _b[variants$1.TEXTSUBTLE] = {
        backgroundColor: "textSubtle",
    },
    _b[variants$1.BINANCE] = {
        backgroundColor: "binance",
    },
    _b[variants$1.FAILURE] = {
        backgroundColor: "failure",
    },
    _b);

var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants$1.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants$1[variantKey].backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: ".concat(color, ";\n      background: transparent;\n      border: 2px solid ").concat(color, ";\n    ");
    }
    return "";
};
var StyledTag = styled.div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"])), variant$1({
    prop: "scale",
    variants: scaleVariants,
}), variant$1({
    variants: styleVariants$1,
}), space, getOutlineStyles);
var templateObject_1$l;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales$1.MD,
    outline: false,
};

var StyledLink = styled(Text)(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return React.createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$k;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$17, { color: "success", ml: "4px" })));
};

var variants = {
    ROUND: "round",
    FLAT: "flat",
};

var _a$1;
var styleVariants = (_a$1 = {},
    _a$1[variants.ROUND] = {
        borderRadius: "32px",
    },
    _a$1[variants.FLAT] = {
        borderRadius: 0,
    },
    _a$1);

var Bar = styled.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.gray : "".concat(props.theme.colors.gray, "80")); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gray;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return (variant === variants.FLAT ? "0" : "32px");
}, function (_a) {
    var variant = _a.variant;
    return (variant === variants.FLAT ? "0" : "32px");
}, variant$1({
    variants: styleVariants,
}), space);
var templateObject_1$j, templateObject_2$e;

var ProgressBunnyWrapper = styled.div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$i;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants.ROUND : _b, _c = _a.primaryStep, primaryStep = _c === void 0 ? 0 : _c, _d = _a.secondaryStep, secondaryStep = _d === void 0 ? null : _d, _e = _a.showProgressBunny, showProgressBunny = _e === void 0 ? false : _e;
    return (React.createElement(StyledProgress, { variant: variant },
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: "".concat(stepGuard(primaryStep), "%") } },
            React.createElement(Icon$12, null))),
        React.createElement(Bar, { primary: true, style: { width: "".concat(stepGuard(primaryStep), "%") } }),
        secondaryStep ? React.createElement(Bar, { style: { width: "".concat(stepGuard(secondaryStep), "%") } }) : null));
};

var bunnyHeadMain = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2024%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20y%3D%2218%22%20width%3D%2217%22%20height%3D%2210%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M7.50675%2023.7056C6.14677%2025.0656%207.73758%2027.2292%209.75419%2029.2458C11.7708%2031.2624%2013.9344%2032.8532%2015.2944%2031.4933C16.6543%2030.1333%2015.9641%2027.0691%2013.9475%2025.0525C11.9309%2023.0359%208.86673%2022.3457%207.50675%2023.7056Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M13.507%2021.706C12.1463%2023.0666%2013.7379%2025.2313%2015.7555%2027.2489C17.7731%2029.2665%2019.9378%2030.8581%2021.2984%2029.4974C22.6591%2028.1368%2021.9685%2025.0711%2019.9509%2023.0535C17.9333%2021.0359%2014.8676%2020.3453%2013.507%2021.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.7694%205.63421C11.8457%206.02664%2011.9158%206.4375%2011.9836%206.85716C11.6151%206.85766%2011.2482%206.87522%2010.8839%206.90895C10.6029%206.29464%2010.2694%205.67199%209.88441%205.05277C7.39613%201.05079%205.06199%200.901096%202.98861%202.01265C0.915239%203.12421%200.810677%205.89597%203.28297%208.59188C3.57049%208.90541%203.86254%209.23841%204.15744%209.58036C1.66027%2011.5156%200%2014.291%200%2017.2695C0%2022.8292%205.78518%2024%2012%2024C18.2148%2024%2024%2022.8292%2024%2017.2695C24%2013.8488%2021.8101%2010.6958%2018.6776%208.77602C18.8852%207.81022%2019%206.74856%2019%205.63421C19%201.17171%2017.159%200%2014.888%200C12.6171%200%2011.1155%202.27116%2011.7694%205.63421Z%22%20fill%3D%22url%28%23paint0_linear%29%22%2F%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cpath%20d%3D%22M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%2212%22%20y1%3D%220%22%20x2%3D%2212%22%20y2%3D%2224%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyHeadMax = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2024%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20y%3D%2218%22%20width%3D%2217%22%20height%3D%2210%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M7.50675%2023.7056C6.14677%2025.0656%207.73758%2027.2292%209.75419%2029.2458C11.7708%2031.2624%2013.9344%2032.8532%2015.2944%2031.4933C16.6543%2030.1333%2015.9641%2027.0691%2013.9475%2025.0525C11.9309%2023.0359%208.86673%2022.3457%207.50675%2023.7056Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M13.507%2021.706C12.1463%2023.0666%2013.7379%2025.2313%2015.7555%2027.2489C17.7731%2029.2665%2019.9378%2030.8581%2021.2984%2029.4974C22.6591%2028.1368%2021.9685%2025.0711%2019.9509%2023.0535C17.9333%2021.0359%2014.8676%2020.3453%2013.507%2021.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.146%205.75159C12.2105%206.10896%2012.2703%206.48131%2012.3281%206.86164C12.2189%206.85865%2012.1095%206.85714%2012%206.85714C11.3803%206.85714%2010.7648%206.90539%2010.159%206.99779C9.87904%206.41458%209.55472%205.82246%209.18725%205.23145C6.69897%201.22947%204.53826%200.986793%202.67882%201.98366C0.819381%202.98052%200.856278%205.67644%203.26696%208.40538C3.58076%208.76061%203.90097%209.13983%204.2247%209.52859C1.69013%2011.4659%200%2014.2644%200%2017.2695C0%2022.8292%205.78518%2024%2012%2024C18.2148%2024%2024%2022.8292%2024%2017.2695C24%2013.8658%2021.8318%2010.7272%2018.7243%208.80476C18.9022%207.86044%2019%206.83019%2019%205.75159C19%201.19612%2017.2549%200%2015.1022%200C12.9495%200%2011.5261%202.31847%2012.146%205.75159Z%22%20fill%3D%22url%28%23paint0_linear%29%22%2F%3E%3Cpath%20d%3D%22M9.50467%2015.0634C8.94352%2013.4456%206.79685%2013.4456%206.08131%2015.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M18.8894%2015.0634C18.3283%2013.4456%2016.1816%2013.4456%2015.4661%2015.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M11.4505%2019.0787C11.4505%2020.5097%2013.955%2020.5097%2013.955%2019.0787%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%2212%22%20y1%3D%220%22%20x2%3D%2212%22%20y2%3D%2224%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var SliderContainer = styled(Box)(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  position: relative;\n  height: 48px;\n"], ["\n  position: relative;\n  height: 48px;\n"])));
var SliderLabel = styled.label(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  margin-left: 16px; // offset the bunny butt width\n  left: calc(", "%);\n"], ["\n  position: absolute;\n  bottom: 0;\n  margin-left: 16px; // offset the bunny butt width\n  left: calc(", "%);\n"])), function (_a) {
    var progress = _a.progress;
    return progress;
});
styled.img(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: absolute;\n"], ["\n  position: absolute;\n"])));
var BunnySlider = styled.div(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  position: absolute;\n  left: 14px;\n  width: 100%;\n"], ["\n  position: absolute;\n  left: 14px;\n  width: 100%;\n"])));
var StyledInput = styled.input(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  height: 32px;\n  position: relative;\n  cursor: pointer;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-moz-range-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transition: 0.1s all;\n    transform: translate(-2px, -2px);\n    // custom moz reset\n    background-color: transparent;\n    border: 0;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-ms-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n"], ["\n  height: 32px;\n  position: relative;\n  cursor: pointer;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-moz-range-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transition: 0.1s all;\n    transform: translate(-2px, -2px);\n    // custom moz reset\n    background-color: transparent;\n    border: 0;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-ms-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n"])), function (_a) {
    var isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHeadMain);
}, function (_a) {
    var isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHeadMain);
}, function (_a) {
    var isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHeadMain);
});
var BarBackground = styled.div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  top: 18px;\n  background-color: ", ";\n"], ["\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  top: 18px;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
var BarProgress = styled.div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  position: absolute;\n  width: ", ";\n  height: 10px;\n  top: 18px;\n\n  background: ", ";\n"], ["\n  position: absolute;\n  width: ", ";\n  height: 10px;\n  top: 18px;\n\n  background: ", ";\n"])), function (_a) {
    var progress = _a.progress, isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? "calc(100% - 16px)" : "".concat(progress, "%"));
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var templateObject_1$h, templateObject_2$d, templateObject_3$8, templateObject_4$6, templateObject_5$3, templateObject_6$1, templateObject_7$1;

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 15 32", width: 15, height: 32 }, props),
        React.createElement("path", { d: "M9.58803 20.8649C7.72935 21.3629 8.02539 24.0334 8.76388 26.7895C9.50238 29.5456 10.5812 32.0062 12.4399 31.5082C14.2986 31.0102 15.2334 28.0099 14.4949 25.2538C13.7564 22.4978 11.4467 20.3669 9.58803 20.8649Z", fill: "#0098A1" }),
        React.createElement("path", { d: "M1 24.4516C1 20.8885 3.88849 18 7.45161 18H15V28H4.54839C2.58867 28 1 26.4113 1 24.4516Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M6.11115 17.2246C6.79693 18.4124 5.77784 19.3343 4.52793 20.0559C3.27802 20.7776 1.97011 21.1992 1.28433 20.0114C0.598546 18.8236 1.1635 17.1151 2.41341 16.3935C3.66332 15.6718 5.42537 16.0368 6.11115 17.2246Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M1.64665 23.6601C0.285995 25.0207 1.87759 27.1854 3.89519 29.203C5.91279 31.2206 8.07743 32.8122 9.43808 31.4515C10.7987 30.0909 10.1082 27.0252 8.09058 25.0076C6.07298 22.99 3.0073 22.2994 1.64665 23.6601Z", fill: "#1FC7D4" })));
};

// We need to adjust the offset as the percentage increases, as 100% really is 100% - label width. The number 10 is arbitrary, but seems to work...
var MOVING_SLIDER_LABEL_OFFSET_FACTOR = 10;
var Slider = function (_a) {
    var min = _a.min, max = _a.max, value = _a.value, onValueChanged = _a.onValueChanged, valueLabel = _a.valueLabel, props = __rest(_a, ["min", "max", "value", "onValueChanged", "valueLabel"]);
    var handleChange = function (_a) {
        var target = _a.target;
        onValueChanged(parseInt(target.value, 10));
    };
    var progressPercentage = (value / max) * 100;
    var isCurrentValueMaxValue = value === max;
    var labelOffset = progressPercentage - progressPercentage / MOVING_SLIDER_LABEL_OFFSET_FACTOR;
    return (React.createElement(SliderContainer, __assign({}, props),
        React.createElement(Icon$9, { style: { position: "absolute" } }),
        React.createElement(BunnySlider, null,
            React.createElement(BarBackground, null),
            React.createElement(BarProgress, { isCurrentValueMaxValue: isCurrentValueMaxValue, progress: progressPercentage }),
            React.createElement(StyledInput, { type: "range", min: min, max: max, value: value, onChange: handleChange, isCurrentValueMaxValue: isCurrentValueMaxValue })),
        valueLabel && React.createElement(SliderLabel, { progress: labelOffset }, valueLabel)));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 256 256" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z", fill: "#464649" }),
        React.createElement("path", { d: "M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z", fill: "#606063" }),
        React.createElement("path", { d: "M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z", fill: "#464649" }),
        React.createElement("path", { d: "M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z", fill: "#606063" }),
        React.createElement("path", { d: "M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z", fill: "#979797" }),
        React.createElement("path", { d: "M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z", fill: "#737373" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z", fill: "#606063" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("svg", { width: "128", height: "128", viewBox: "0 0 128 128", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z", fill: "#FEDC90", stroke: "#D1884F", strokeWidth: "2.89134" }),
            React.createElement("path", { d: "M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z", fill: "#D1884F", stroke: "#633001", strokeWidth: "2.89134" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z", fill: "#633001" }))));
};

var rotate = keyframes(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = keyframes(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled(Icon$7)(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate);
var FloatingPanIcon = styled(Icon$8)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container, null,
        React.createElement(RotatingPancakeIcon, { width: "".concat(size * 0.5, "px") }),
        React.createElement(FloatingPanIcon, { width: "".concat(size, "px") })));
};
var templateObject_1$g, templateObject_2$c, templateObject_3$7, templateObject_4$5, templateObject_5$2;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  0% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 0.3;\n  }\n  100% {\n    opacity: 0.6;\n  }\n"], ["\n  0% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 0.3;\n  }\n  100% {\n    opacity: 0.6;\n  }\n"])));
var Root = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  // background-color: ", ";\n  background-color: ", ";\n  opacity: 0.16;\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  // background-color: ", ";\n  background-color: ", ";\n  opacity: 0.16;\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
}, function (_a) {
    _a.theme; var isDark = _a.isDark;
    return (isDark ? "#749BD8" : "#708DB7");
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$f, templateObject_2$b, templateObject_3$6, templateObject_4$4, templateObject_5$1;

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "0",
        handleTop: "-3px",
        checkedLeft: "calc(100% - 16px)",
        toggleHeight: "10px",
        toggleWidth: "32px",
    },
    md: {
        handleHeight: "24px",
        handleWidth: "24px",
        handleLeft: "0",
        handleTop: "-4px",
        checkedLeft: "calc(100% - 24px)",
        toggleHeight: "16px",
        toggleWidth: "40px",
    },
};
var getScale = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$4.MD : _b;
    return scaleKeyValues[scale][property];
}; };
var Handle = styled.div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return (checked ? theme.colors.success : theme.toggle.handleBackground);
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled.input(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n"])), Handle, getScale("checkedLeft"));
var StyledToggle = styled.div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  //background-color: ", ";\n  background-color: #E5EAF2;\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  //background-color: ", ";\n  background-color: #E5EAF2;\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "dark"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$e, templateObject_2$a, templateObject_3$5;

var scales = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked, scale: scale },
        React.createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React.createElement(Handle, { checked: checked, scale: scale })));
};
Toggle.defaultProps = {
    scale: scales.MD,
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data, true);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArray([], action.data, true);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, ".concat(action.columnName, " not found"));
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, ".concat(column.name, " not found"));
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }), true);
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var getBadgeBg = function (_a) {
    var _b = _a.badgeType, badgeType = _b === void 0 ? "light" : _b, theme = _a.theme;
    if (badgeType === "light") {
        return theme.colors.tertiary;
    }
    if (badgeType === "dark") {
        return theme.colors.dark;
    }
    if (badgeType === "new") {
        return theme.colors.success;
    }
    if (badgeType === "hot") {
        return theme.colors.failure;
    }
    if (badgeType === "primary") {
        return theme.colors.primary;
    }
    if (badgeType === "warning") {
        return theme.colors.warning;
    }
    return theme.colors.dark;
};
var getBadgeColor = function (_a) {
    var _b = _a.badgeType, badgeType = _b === void 0 ? "light" : _b, theme = _a.theme;
    if (badgeType === "light" || badgeType === "dark") {
        return theme.colors.light;
    }
    if (badgeType === "new" || badgeType === "primary" || badgeType === "hot" || badgeType === "boost") {
        return theme.colors.contrast;
    }
    if (badgeType === "warning") {
        return theme.colors.background;
    }
    return theme.colors.contrast;
};
var Wrapper$1 = styled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  display: inline-flex;\n  padding: ", ";\n  background: ", ";\n  color: ", ";\n  border-radius: 16px;\n"], ["\n  display: inline-flex;\n  padding: ", ";\n  background: ", ";\n  color: ", ";\n  border-radius: 16px;\n"])), function (_a) {
    var isMenu = _a.isMenu;
    return isMenu ? '2px 8px' : '4px 12px';
}, getBadgeBg, getBadgeColor);
var StyledText$1 = styled(Text)(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n"], ["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n"])), function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "10px";
}, function (_a) {
    var fontWeight = _a.fontWeight;
    return fontWeight || "600";
}, function (_a) {
    var lineHeight = _a.lineHeight;
    return lineHeight || '1.1';
});
var Badge = function (_a) {
    var children = _a.children, badgeType = _a.badgeType, fontSize = _a.fontSize, fontWeight = _a.fontWeight, isMenu = _a.isMenu, lineHeight = _a.lineHeight;
    return (React.createElement(Wrapper$1, { badgeType: badgeType, isMenu: isMenu },
        React.createElement(StyledText$1, { fontSize: fontSize, lineHeight: lineHeight, fontWeight: fontWeight, color: "inherit" }, children)));
};
var templateObject_1$d, templateObject_2$9;

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 768,
    lg: 968,
    xl: 1080,
    xll: 1200,
    xxl: 1400,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return "".concat(breakpoint, "px"); });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: ".concat(breakpointMap.xs, "px)"),
    sm: "@media screen and (min-width: ".concat(breakpointMap.sm, "px)"),
    md: "@media screen and (min-width: ".concat(breakpointMap.md, "px)"),
    lg: "@media screen and (min-width: ".concat(breakpointMap.lg, "px)"),
    xl: "@media screen and (min-width: ".concat(breakpointMap.xl, "px)"),
    xll: "@media screen and (min-width: ".concat(breakpointMap.xll, "px)"),
    xxl: "@media screen and (min-width: ".concat(breakpointMap.xxl, "px)"),
    nav: "@media screen and (min-width: ".concat(breakpointMap.lg, "px)"),
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: ".concat(prevMinWidth, "px)"), _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: ".concat(minWidth, "px) and (max-width: ").concat(breakpoint, "px)"), _b));
    }, {});
})();
var getKey = function (size) { return "is".concat(size.charAt(0).toUpperCase()).concat(size.slice(1)); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(".concat(imgSrc, ")");
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = "".concat(width, "px");
    particle.style.height = "".concat(height, "px");
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(".concat(x, "px, ").concat(y, "px) rotate(0deg)"),
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(".concat(x + destinationX, "px, ").concat(y + destinationY, "px) rotate(").concat(rotation, "deg)"),
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var baseColors = {
    failure: "#FF1C5E",
    primary: "#FF1C5E",
    success: "#1EBB95",
    warning: "#FFC121",
};
var brandColors = {
    binance: "#F0B90B",
    polygon: "#8247E5",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", contrast: "#191326", tertiary: "#151521", card: "#090913", dark: "#2B2B40", gray: "#4A4A60", light: "#7E829D", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
        cardHeader: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
        cardBlue: "linear-gradient(235deg, #336FF5 4.05%, rgba(17, 81, 225, 0.32) 103.52%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#00000D", contrast: "#FFFFFF", tertiary: "#151521", card: "#090913", dark: "#2B2B40", gray: "#4A4A60", light: "#7E829D", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
        cardHeader: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
        cardBlue: "linear-gradient(235deg, #336FF5 4.05%, rgba(17, 81, 225, 0.32) 103.52%)",
    } });

var light$4 = {
    background: lightColors.card,
};
var dark$4 = {
    background: darkColors.card,
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$2 = {
    handleBackground: lightColors.light
};
var dark$2 = {
    handleBackground: darkColors.light,
};

var light$1 = {
    background: darkColors.card,
};
var dark$1 = {
    background: lightColors.card,
};

var light = {
    background: lightColors.card,
    text: lightColors.light,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var dark = {
    background: darkColors.card,
    text: darkColors.light,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$4, colors: darkColors, toggle: dark$2, modal: dark$1, radio: dark$3, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$4, colors: lightColors, toggle: light$2, modal: light$1, radio: light$3, tooltip: light });

var isTouchDevice = function () {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};

var Arrow = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"], ["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, isLight = _a.isLight;
    return isLight ? '#FFFFFF' : theme.tooltip.background;
});
var StyledTooltip = styled.div(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  padding: 8px 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 8px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"], ["\n  padding: 8px 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 8px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"])), function (_a) {
    var theme = _a.theme, isLight = _a.isLight;
    return isLight ? '#FFFFFF' : theme.tooltip.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.text;
}, function (_a) {
    var theme = _a.theme, isLight = _a.isLight;
    return isLight ? 'none' : theme.tooltip.boxShadow;
}, Arrow, Arrow, Arrow, Arrow);
var templateObject_1$c, templateObject_2$8;

var portalRoot = document.getElementById("portal-root");
var useTooltip = function (content, options) {
    var _a = options.placement, placement = _a === void 0 ? "auto" : _a, _b = options.trigger, trigger = _b === void 0 ? "hover" : _b, _c = options.arrowPadding, arrowPadding = _c === void 0 ? 16 : _c, _d = options.tooltipPadding, tooltipPadding = _d === void 0 ? { left: 16, right: 16 } : _d, _e = options.tooltipOffset, tooltipOffset = _e === void 0 ? [0, 10] : _e, _f = options.isLight, isLight = _f === void 0 ? false : _f;
    var _g = useState(null), targetElement = _g[0], setTargetElement = _g[1];
    var _h = useState(null), tooltipElement = _h[0], setTooltipElement = _h[1];
    var _j = useState(null), arrowElement = _j[0], setArrowElement = _j[1];
    var _k = useState(false), visible = _k[0], setVisible = _k[1];
    var isHoveringOverTooltip = useRef(false);
    var hideTimeout = useRef();
    var hideTooltip = useCallback(function (e) {
        var hide = function () {
            e.stopPropagation();
            e.preventDefault();
            setVisible(false);
        };
        if (trigger === "hover") {
            if (hideTimeout.current) {
                window.clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = false;
            }
            if (!isHoveringOverTooltip.current) {
                hideTimeout.current = window.setTimeout(function () {
                    if (!isHoveringOverTooltip.current) {
                        hide();
                    }
                }, 100);
            }
        }
        else {
            hide();
        }
    }, [tooltipElement, trigger]);
    var showTooltip = useCallback(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(true);
        if (trigger === "hover") {
            if (e.target === targetElement) {
                // If we were about to close the tooltip and got back to it
                // then prevent closing it.
                clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = true;
            }
        }
    }, [tooltipElement, targetElement, trigger]);
    var toggleTooltip = useCallback(function (e) {
        e.stopPropagation();
        setVisible(!visible);
    }, [visible]);
    // Trigger = hover
    useEffect(function () {
        if (targetElement === null || trigger !== "hover")
            return undefined;
        if (isTouchDevice()) {
            targetElement.addEventListener("touchstart", showTooltip);
            targetElement.addEventListener("touchend", hideTooltip);
        }
        else {
            targetElement.addEventListener("mouseenter", showTooltip);
            targetElement.addEventListener("mouseleave", hideTooltip);
        }
        return function () {
            targetElement.removeEventListener("touchstart", showTooltip);
            targetElement.removeEventListener("touchend", hideTooltip);
            targetElement.removeEventListener("mouseenter", showTooltip);
            targetElement.removeEventListener("mouseleave", showTooltip);
        };
    }, [trigger, targetElement, hideTooltip, showTooltip]);
    // Keep tooltip open when cursor moves from the targetElement to the tooltip
    useEffect(function () {
        if (tooltipElement === null || trigger !== "hover")
            return undefined;
        tooltipElement.addEventListener("mouseenter", showTooltip);
        tooltipElement.addEventListener("mouseleave", hideTooltip);
        return function () {
            tooltipElement.removeEventListener("mouseenter", showTooltip);
            tooltipElement.removeEventListener("mouseleave", hideTooltip);
        };
    }, [trigger, tooltipElement, hideTooltip, showTooltip]);
    // Trigger = click
    useEffect(function () {
        if (targetElement === null || trigger !== "click")
            return undefined;
        targetElement.addEventListener("click", toggleTooltip);
        return function () { return targetElement.removeEventListener("click", toggleTooltip); };
    }, [trigger, targetElement, visible, toggleTooltip]);
    // Handle click outside
    useEffect(function () {
        if (trigger !== "click")
            return undefined;
        var handleClickOutside = function (_a) {
            var target = _a.target;
            if (target instanceof Node) {
                if (tooltipElement != null &&
                    targetElement != null &&
                    !tooltipElement.contains(target) &&
                    !targetElement.contains(target)) {
                    setVisible(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, [trigger, targetElement, tooltipElement]);
    // Trigger = focus
    useEffect(function () {
        if (targetElement === null || trigger !== "focus")
            return undefined;
        targetElement.addEventListener("focus", showTooltip);
        targetElement.addEventListener("blur", hideTooltip);
        return function () {
            targetElement.removeEventListener("focus", showTooltip);
            targetElement.removeEventListener("blur", hideTooltip);
        };
    }, [trigger, targetElement, showTooltip, hideTooltip]);
    // On small screens Popper.js tries to squeeze the tooltip to available space without overflowing beyound the edge
    // of the screen. While it works fine when the element is in the middle of the screen it does not handle well the
    // cases when the target element is very close to the edge of the screen - no margin is applied between the tooltip
    // and the screen edge.
    // preventOverflow mitigates this behaviour, default 16px paddings on left and right solve the problem for all screen sizes
    // that we support.
    // Note that in the farm page where there are tooltips very close to the edge of the screen this padding works perfectly
    // even on the iPhone 5 screen (320px wide), BUT in the storybook with the contrived example ScreenEdges example
    // iPhone 5 behaves differently overflowing beyound the edge. All paddings are identical so I have no idea why it is,
    // and fixing that seems like a very bad use of time.
    var _l = usePopper(targetElement, tooltipElement, {
        placement: placement,
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement, padding: arrowPadding },
            },
            { name: "offset", options: { offset: tooltipOffset } },
            { name: "preventOverflow", options: { padding: tooltipPadding } },
        ],
    }), styles = _l.styles, attributes = _l.attributes;
    var tooltip = (React.createElement(StyledTooltip, __assign({ isLight: isLight, ref: setTooltipElement, style: styles.popper }, attributes.popper),
        React.createElement(ThemeProvider, { theme: darkTheme }, content),
        React.createElement(Arrow, { isLight: isLight, ref: setArrowElement, style: styles.arrow })));
    var tooltipInPortal = portalRoot ? createPortal(tooltip, portalRoot) : null;
    return {
        targetRef: setTargetElement,
        tooltip: tooltipInPortal !== null && tooltipInPortal !== void 0 ? tooltipInPortal : tooltip,
        tooltipVisible: visible,
    };
};

var StyledModal$1 = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 16px 0 0;  \n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px 16px 0 0;  \n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ModalHeader = styled.div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: 24px 16px;\n\n  ", " {\n    padding: 24px;\n  }\n  \n  .closeModal {\n    width: 24px;\n    height: 24px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 24px 16px;\n\n  ", " {\n    padding: 24px;\n  }\n  \n  .closeModal {\n    width: 24px;\n    height: 24px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ModalTitle = styled(Flex)(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n"])));
var ModalBody$1 = styled.div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  padding: 0 16px 24px;\n  \n  ", " {\n    padding: 0 24px 24px;\n  }\n"], ["\n  padding: 0 16px 24px;\n  \n  ", " {\n    padding: 0 24px 24px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b;
    return (React.createElement(StyledModal$1, null,
        React.createElement(ModalHeader, null,
            React.createElement(ModalTitle, null,
                onBack && (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React.createElement(Icon$1y, { color: "contrast" }))),
                React.createElement(Heading, null, title)),
            !hideCloseButton && (React.createElement(IconButton, { variant: "text", className: "closeModal", scale: "sm", ml: "12px", onClick: onDismiss, "aria-label": "Close the dialog" },
                React.createElement(Icon$1h, { width: "24px", color: "contrast" })))),
        React.createElement(ModalBody$1, null, children)));
};
var templateObject_1$b, templateObject_2$7, templateObject_3$4, templateObject_4$3;

var StyledModal = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-radius: 16px 16px 0 0;  \n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  position: relative;\n  top: 0;\n  left: 0;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-radius: 16px 16px 0 0;  \n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  position: relative;\n  top: 0;\n  left: 0;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var StyledIconButton = styled(IconButton)(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 24px;\n  left: calc(100% - 40px);\n  \n  ", " {\n    top: 32px;\n    left: calc(100% - 56px);\n  }\n"], ["\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 24px;\n  left: calc(100% - 40px);\n  \n  ", " {\n    top: 32px;\n    left: calc(100% - 56px);\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ModalBody = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  padding: ", ";\n\n  ", " {\n    padding: ", ";\n  }\n"], ["\n  padding: ", ";\n\n  ", " {\n    padding: ", ";\n  }\n"])), function (_a) {
    var padding = _a.padding;
    return padding || '0 16px 24px';
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var padding = _a.padding;
    return padding || '0 24px 24px';
});
var Background = styled.img(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var ModalWithBackground = function (_a) {
    var onDismiss = _a.onDismiss, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, backBtnColor = _a.backBtnColor, background = _a.background, p = _a.p;
    return (React.createElement(StyledModal, null,
        !hideCloseButton && (React.createElement(StyledIconButton, { variant: "text", className: "closeModal", scale: "sm", onClick: onDismiss, "aria-label": "Close the dialog" },
            React.createElement(Icon$1h, { width: "24px", color: backBtnColor !== null && backBtnColor !== void 0 ? backBtnColor : "card" }))),
        background && React.createElement(Background, { src: background, alt: 'image' }),
        React.createElement(ModalBody, { padding: p }, children)));
};
var templateObject_1$a, templateObject_2$6, templateObject_3$3, templateObject_4$2;

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(10, 22, 43);\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(10, 22, 43);\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.55 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$9;

var ModalWrapper = styled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n\n  ", " {\n    justify-content: center;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n\n  ", " {\n    justify-content: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$8;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var giftImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANWSURBVHgB7ZTdaxRXGMafc+ZjZ8zudrJht2uT6MYYU5WSgFAKvbFQWqS9EWpbclEQCqWXgfaid70oQqFg/4FC6VXBgk1LrwpFaKsxKiZ+RQ3qBj+iJuvOZndn5+N8eGbUIMSYXe8U32GYM2cO5zfP+z7vAV7GCxuV+fkdtVptvN31dL0Fd8rlvcuue7jRaIw+mluYnS1FrvseQvau53l9aCPIegtuX7lymOr6iOU43cHlq3tR6mvIVusXWnH/JIvVPfzytTKs1Bt6JG/lvhx7+9lBl+a+4Ro9IAlx7VeyDhcCuLsEuViBSSjYwl0QDhi7dqL100S6+MPXzSfto68FuPHtwY/opo3f8/9PbjHfHAUt5h1CCMTvf4P9OwXJBUJKoKe7YKazEKPbkWJNA+0quvHJFyMyxI9CiN2MR7APfAXZ0w31DjF9AQvfHYRUV8QZqFLUOzyMdC4PbexDN/fWru61QKsUNbf2fr7439RuziK0wgh9fgu09sAzWi6LmteAEqb+UF1q4N+rwrYz0Berjty3TyOHDvEngVa5zurf+IcwKCLBIKXE8szZB2qEhOh2QDMbEHKeKArVzzSWa4B6V2mGWxhZ04GrQHZu6zEt3zPtRUoRC1E9fhJhGCIIfHgtD2RoAI0oQD3y0VKp1a0UaMqEDCIwKkptgwofv9Po3fP+WLYnB9swEJ2YgViqwFBj0zThbH8dGcNE1rSRNhREmUIwla26SumOwYG2QXGUPvt0dkOxcEcnGixdhzdzDpTS5La2bUnqoxGS1Cr0Q0ilXrp1aJbV3xEoDs00f42f8abR3LWk8HHom/sTYOJXqUAsAFeplUsusG1zT8egrnx+Qp0IyX7B+Ysr89yyYBVfTcwRR8QYWBBAVmrQhku3OgalhjadNpx0XVlPed6DP3/94RcJa+fww5EEE1yBfIiqC0nlzY5BA/v3u2Ymc0omiwia52dXvhmlvsT6CUxZP/KVItVzQXV5qmNQoqrLnogrHqePla+vzFtDgwkoZqmTD6FSxO/V/yoMDs49Ewii9bM09SNMo5P1M+fKXDVm3LykWFBFtFXfqJoRiabqKb9e/e1pW617ej8ek5OTQ1TQ1zjhpGhZ00fGx+EAjhlS+cHRf+bxMp7ruA9B8HiZzFdvegAAAABJRU5ErkJggg==";

var ActionsContainer = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n"], ["\n  display: flex;\n  justify-content: flex-start;\n"])));
var StyledIcon = styled.img(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  width: 26px;\n  filter: drop-shadow(2px 4px 8px rgba(0, 109, 163, 0.4));\n"], ["\n  width: 26px;\n  filter: drop-shadow(2px 4px 8px rgba(0, 109, 163, 0.4));\n"])));
var ToastAction = function (_a) {
    _a.title; var telegramDescription = _a.telegramDescription, tweeterDescription = _a.tweeterDescription, url = _a.url; _a.thx;
    return (React.createElement(ActionsContainer, null,
        React.createElement(TwitterShareButton, { style: { width: '35%' }, title: tweeterDescription, url: "".concat(url) },
            React.createElement(Button, { scale: "sm", width: '100%', style: { backgroundColor: '#16CDFD', alignItems: "center" } },
                React.createElement(StyledIcon, { src: giftImg, alt: "gift-icon" }),
                React.createElement(Text, { color: '#fff', fontSize: '12px', bold: true }, "Twitter"),
                React.createElement(Icon$S, { mr: "8px", color: "#fff", width: "20px" }))),
        React.createElement(TelegramShareButton, { style: { width: '35%', marginLeft: "10px", alignItems: "center" }, title: telegramDescription, url: "".concat(url) },
            React.createElement(Button, { scale: "sm", width: '100%', style: { backgroundColor: '#26A6E5', alignItems: "center" } },
                React.createElement(Text, { color: '#fff', fontSize: '12px', bold: true }, "Telegram"),
                React.createElement(Icon$T, { mr: "8px", color: "#fff", width: "20px" })))));
};
var templateObject_1$7, templateObject_2$5;

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.INFO] = variants$2.INFO,
    _a[types.SUCCESS] = variants$2.SUCCESS,
    _a[types.DANGER] = variants$2.DANGER,
    _a[types.WARNING] = variants$2.WARNING,
    _a);
var ClearAllButton = styled(Button)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  position: absolute;\n  right: 0;\n  top: ", ";\n"], ["\n  position: absolute;\n  right: 0;\n  top: ", ";\n"])), function (_a) {
    var top = _a.top;
    return "".concat(-top, "px");
});
var StyledToast = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: fixed;\n  max-width: calc(100% - 12px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.1), 0px 20px 36px -8px rgba(14, 14, 44, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 16px;\n\n  ", " {\n    transform: none;\n    left: auto;\n    right: 35px;\n    max-width: 350px;\n  }\n"], ["\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: fixed;\n  max-width: calc(100% - 12px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.1), 0px 20px 36px -8px rgba(14, 14, 44, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 16px;\n\n  ", " {\n    transform: none;\n    left: auto;\n    right: 35px;\n    max-width: 350px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ProgressWrapper = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  background-color: ", "\n  bottom: 0;\n  min-height: 5px;\n"], ["\n  background-color: ", "\n  bottom: 0;\n  min-height: 5px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var ProgressLine = styled.div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 5px;\n  transition: 100ms all;\n  border-radius: 16px;\n"], ["\n  background-color: ", ";\n  height: 5px;\n  transition: 100ms all;\n  border-radius: 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
var AlertWrapper = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 0 16px;\n"], ["\n  padding: 0 16px;\n"])));
var LinkWrapper = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin: 14px 0 11px 0;\n  display: flex;\n  align-items: center;\n"], ["\n  margin: 14px 0 11px 0;\n  display: flex;\n  align-items: center;\n"])));
var LinkStyles = styled.a(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n color: ", ";\n font-size: 14px;\n font-weight: 700;\n line-height: 21px;\n  text-decoration: underline;\n"], ["\n color: ", ";\n font-size: 14px;\n font-weight: 700;\n line-height: 21px;\n  text-decoration: underline;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var SharingText = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n"], ["\n  display: flex;\n  flex-direction: row;\n"])));
var ActionContainer = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n"], ["\n"])));
var Toast = function (_a) {
    var _b = _a.removeButtonPosition, removeButtonPosition = _b === void 0 ? 60 : _b, clearAll = _a.clearAll, toast = _a.toast, style = _a.style, handleMouseEnter = _a.handleMouseEnter, handleMouseLeave = _a.handleMouseLeave, handleRemove = _a.handleRemove, progress = _a.progress, props = __rest(_a, ["removeButtonPosition", "clearAll", "toast", "style", "handleMouseEnter", "handleMouseLeave", "handleRemove", "progress"]);
    var description = toast.description, type = toast.type, title = toast.title, telegramDescription = toast.telegramDescription, tweeterDescription = toast.tweeterDescription, hash = toast.hash, url = toast.url;
    return (React.createElement(CSSTransition, __assign({ timeout: 250, style: style }, props),
        React.createElement(StyledToast, { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            clearAll && (React.createElement(ClearAllButton, { variant: 'text', top: removeButtonPosition, onClick: function () { return clearAll(); } },
                React.createElement(Text, { fontSize: '16px', color: '#1263F1', lineHeight: '19px' }, "Clear All"))),
            React.createElement(Alert, { style: { padding: '16px 0 0 0' }, title: title, variant: alertTypeMap[type], onClick: handleRemove },
                React.createElement(AlertWrapper, null,
                    hash &&
                        React.createElement(LinkWrapper, null,
                            React.createElement(LinkStyles, { target: "_blank", href: "https://bscscan.com/tx/".concat(hash) }, "View on bscscan"),
                            React.createElement(Icon$U, { ml: '7px', width: '18px', height: '18px', color: 'primary' })),
                    description ? React.createElement(Text, { color: "#6B7D98", fontSize: "12px", as: "p", mb: "8px", dangerouslySetInnerHTML: { __html: description } }) : React.createElement(React.Fragment, null),
                    telegramDescription && tweeterDescription && (React.createElement(ActionContainer, null,
                        React.createElement(ToastAction, { telegramDescription: telegramDescription, tweeterDescription: tweeterDescription, title: title, url: url, thx: "https://bscscan.com/tx/".concat(hash) }),
                        React.createElement(Button, { p: "0", scale: "sm", variant: 'text', as: 'a', href: 'https://docs.biswap.org/sharing-season', target: "_blank" },
                            React.createElement(SharingText, null,
                                React.createElement(Text, { fontSize: '10px', pl: '0', fontWeight: '400', lineHeight: '12px', color: '#6b7d98' }, "*Check"),
                                React.createElement(Text, { fontSize: '10px', pl: '0', fontWeight: '400', lineHeight: '12px', color: "#1263F1", ml: "2px" }, "Sharing Season"),
                                React.createElement(Text, { fontSize: '10px', pl: '0', fontWeight: '400', lineHeight: '12px', color: '#6b7d98', ml: "2px" }, "details")))))),
                React.createElement("div", { style: { width: '100%' } },
                    React.createElement(ProgressWrapper, { style: { width: '100%' } }, progress ? React.createElement(ProgressLine, { style: { width: "".concat(100 - progress, "%") } }) : null))))));
};
var templateObject_1$6, templateObject_2$4, templateObject_3$2, templateObject_4$1, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;

var ZINDEX = 1000;
var BOTTOM_POSITION = 35; // Initial position from the bottom
var StyledToastContainer = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var clearAll = _a.clearAll, toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 10000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 8 : _c;
    var _d = useState(100), progress = _d[0], setProgress = _d[1];
    var _e = useState(true), progressRun = _e[0], setProgressRun = _e[1];
    var _f = useState(ttl), currentTime = _f[0], setCurrentTime = _f[1];
    // for update timer for new toast
    var updateTimerRef = useRef(1);
    var timer = useRef();
    var intervalRef = useRef();
    var removeHandler = useRef(onRemove);
    var resetAll = function () {
        setProgress(100);
        setCurrentTime(ttl);
        // clearTimeout(intervalRef.current)
        // clearTimeout(timer.current);
    };
    useEffect(function () {
        if (toasts.length !== updateTimerRef.current) {
            resetAll();
            updateTimerRef.current = toasts.length;
            intervalRef.current = window.setTimeout(function () {
                var timeToRemove = ttl;
                var percent = ttl / 100;
                setCurrentTime(timeToRemove > 0 ? timeToRemove : 0);
                if (progressRun && (timeToRemove - percent) >= 0) {
                    setProgress((timeToRemove - percent) / percent);
                }
            }, 100);
        }
        if (toasts.length && progressRun) {
            intervalRef.current = window.setTimeout(function () {
                var timeToRemove = ttl * progress / 100;
                var percent = ttl / 100;
                setCurrentTime(timeToRemove > 0 ? timeToRemove : 0);
                if (progressRun && (timeToRemove - percent) >= 0) {
                    setProgress((timeToRemove - percent) / percent);
                }
            }, 100);
        }
        return function () {
            return clearTimeout(intervalRef.current);
        };
        // eslint-disable-next-line
    }, [progress, currentTime, progressRun, toasts, updateTimerRef.current]);
    var handleRemove = useCallback(function () {
        var _a;
        removeHandler.current((_a = toasts[0]) === null || _a === void 0 ? void 0 : _a.id);
        setProgress(100);
        setCurrentTime(ttl);
        setProgressRun(true);
        clearTimeout(intervalRef.current);
        clearTimeout(timer.current);
        // eslint-disable-next-line
    }, [toasts, progress, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
        setProgressRun(false);
        if (intervalRef.current) {
            clearTimeout(intervalRef.current);
        }
    };
    var handleMouseLeave = function () {
        setProgressRun(true);
        if (timer.current) {
            clearTimeout(timer.current);
        }
        if (intervalRef.current) {
            clearTimeout(intervalRef.current);
        }
        timer.current = window.setTimeout(function () {
        }, currentTime);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, currentTime);
        return function () {
            clearTimeout(timer.current);
        };
    }, [handleRemove, currentTime]);
    var clearAllHandler = function () {
        if (clearAll) {
            clearAll();
            setProgressRun(true);
        }
    };
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var bottom = BOTTOM_POSITION + index * stackSpacing;
            var removeButtonPosition = stackSpacing * toasts.length + 40;
            if (index === 0)
                return React.createElement(Toast, { handleRemove: handleRemove, handleMouseEnter: handleMouseEnter, handleMouseLeave: handleMouseLeave, progress: progress, key: toast.id, toast: toast, zIndex: zIndex, ttl: ttl, removeButtonPosition: removeButtonPosition, clearAll: toasts.length > 1 ? clearAllHandler : undefined, style: { bottom: "".concat(bottom, "px"), zIndex: zIndex } });
            return (React.createElement(Toast, { key: toast.id, toast: toast, style: { bottom: "".concat(bottom, "px"), zIndex: zIndex } }));
        }))));
};
var templateObject_1$5;

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React.createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React.createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "#F5F5F5" }),
        React.createElement("path", { d: "M56.5504425,41.9387033 L56.5504425,50.4659601 L47.3948342,50.4659601 L47.3948342,85.5971142 L45.0078131,84.7075452 C43.8992633,84.2955753 42.1136272,83.5937969 39.9052997,82.5918134 L38.8675775,82.1177881 L38.8675775,14.6817622 L47.9569067,11.8769231 L56.5504425,14.5267861 L56.5504425,23.7259307 L47.9569067,21.0669705 L47.3948342,21.2411155 L47.3948342,41.9387033 L56.5504425,41.9387033 Z M16,50.4659926 L16,21.7739797 L36.1702794,15.548296 L36.1702794,24.7052039 L24.526282,28.3200122 L24.526282,41.9387358 L36.1702794,41.9387358 L36.1702794,81.3806284 L33.591244,80.0543973 C25.5662786,75.923652 16,68.9585019 16,59.2339983 L16,54.6496962 L24.526282,54.6496962 L24.526282,59.2339983 C24.526282,61.2460878 25.5734263,63.3605199 27.6426978,65.5373324 L27.6426978,50.4659926 L16,50.4659926 Z M59.1389325,15.3302574 L79.8040306,21.7261873 L79.8040306,50.4659601 L67.6710627,50.4659601 L67.6710627,62.9111544 C67.6710627,62.9111544 64.9581695,66.4674811 59.1464051,69.4451657 C59.1464051,67.0682164 59.1389325,15.3302574 59.1389325,15.3302574 Z M71.2780734,41.9387033 L71.2780734,28.2783928 L67.6710627,27.1649695 L67.6710627,41.9387033 L71.2780734,41.9387033 Z M71.2780734,59.8661186 L71.2780734,54.6495662 L79.8040306,54.6495662 L79.8040306,59.8661186 C79.8040306,74.3588162 58.7760221,82.7005566 52.330058,84.9127828 L49.9859233,85.7230769 L49.9859233,76.7068496 L51.1311866,76.2744112 C61.1591444,72.5004032 71.2780734,65.962818 71.2780734,59.8661186 Z", fill: "#000000" })));
};

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.13298 26.6579C3.13253 26.6921 3.1323 26.7263 3.1323 26.7606C3.1323 30.9564 6.53367 34.3577 10.7295 34.3577C14.9253 34.3577 18.3266 30.9564 18.3266 26.7606C18.3266 26.7263 18.3264 26.6921 18.326 26.6579H14.732C14.7329 26.692 14.7333 26.7262 14.7333 26.7606C14.7333 28.9719 12.9407 30.7645 10.7294 30.7645C8.51812 30.7645 6.7255 28.9719 6.7255 26.7606C6.7255 26.7262 6.72593 26.692 6.72679 26.6579H3.13298ZM10.7295 5.71436C15.6624 5.71436 19.6613 9.71326 19.6613 14.6462C19.6613 19.5791 15.6624 23.578 10.7295 23.578C5.79663 23.578 1.79773 19.5791 1.79773 14.6462C1.79773 9.71326 5.79663 5.71436 10.7295 5.71436ZM10.7295 9.3076C13.6779 9.3076 16.0681 11.6977 16.0681 14.6461C16.0681 17.5945 13.6779 19.9847 10.7295 19.9847C7.78111 19.9847 5.39096 17.5945 5.39096 14.6461C5.39096 11.6977 7.78111 9.3076 10.7295 9.3076ZM11.3454 12.9033C12.0632 13.157 12.5775 13.8415 12.5775 14.6462C12.5775 15.6668 11.7501 16.4941 10.7295 16.4941C9.70893 16.4941 8.88157 15.6668 8.88157 14.6462C8.88157 13.8416 9.39577 13.1571 10.1135 12.9034V11.6689H11.3454V12.9033ZM22.7464 16.9552C22.154 15.8735 21.8172 14.6318 21.8172 13.3115C21.8172 9.11573 25.2186 5.71436 29.4144 5.71436C33.6102 5.71436 37.0115 9.11573 37.0115 13.3115C37.0115 14.6319 36.6747 15.8735 36.0823 16.9553C35.1444 16.216 34.0807 15.6291 32.9286 15.232C33.2408 14.6618 33.4183 14.0074 33.4183 13.3115C33.4183 11.1002 31.6257 9.30761 29.4144 9.30761C27.2031 9.30761 25.4105 11.1002 25.4105 13.3115C25.4105 14.0074 25.588 14.6618 25.9002 15.2319C24.7481 15.629 23.6844 16.2159 22.7464 16.9552ZM29.4144 34.3577C34.3473 34.3577 38.3462 30.3588 38.3462 25.4259C38.3462 20.493 34.3473 16.4941 29.4144 16.4941C24.4815 16.4941 20.4826 20.493 20.4826 25.4259C20.4826 30.3588 24.4815 34.3577 29.4144 34.3577ZM29.4144 30.7645C32.3628 30.7645 34.7529 28.3743 34.7529 25.4259C34.7529 22.4775 32.3628 20.0874 29.4144 20.0874C26.466 20.0874 24.0758 22.4775 24.0758 25.4259C24.0758 28.3743 26.466 30.7645 29.4144 30.7645ZM30.0303 27.1688C30.7481 26.9151 31.2624 26.2306 31.2624 25.4259C31.2624 24.4053 30.435 23.578 29.4144 23.578C28.3938 23.578 27.5665 24.4053 27.5665 25.4259C27.5665 26.2305 28.0807 26.915 28.7984 27.1687V28.4032H30.0303V27.1688Z", fill: "#DEAE30" })));
};

var ConnectorNames;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(ConnectorNames || (ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$6,
        connectorId: ConnectorNames.Injected,
        priority: 1,
    },
    {
        title: "TrustWallet",
        icon: Icon$4,
        connectorId: ConnectorNames.Injected,
        priority: 2,
    },
    {
        title: "MathWallet",
        icon: Icon$5,
        connectorId: ConnectorNames.Injected,
        priority: 999,
    },
    // {
    //   title: "TokenPocket",
    //   icon: TokenPocket,
    //   connectorId: ConnectorNames.Injected,
    // },
    {
        title: "Coin98",
        icon: Icon,
        connectorId: ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "WalletConnect",
        icon: Icon$3,
        connectorId: ConnectorNames.WalletConnect,
        priority: 3,
    },
    {
        title: "Binance Chain",
        icon: Icon$2,
        connectorId: ConnectorNames.BSC,
        priority: 999,
    },
    {
        title: "SafePal Wallet",
        icon: Icon$1,
        connectorId: ConnectorNames.Injected,
        priority: 999,
    },
];
var connectorLocalStorageKey = "connectorId";
var walletLocalStorageKey = "wallet";

var StyledButton = styled(Button)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex; \n  flex-direction: column;\n  justify-content: space-around;\n  padding: 16px 0 8px;\n  white-space: nowrap;\n  min-height: 100px;\n"], ["\n  display: flex; \n  flex-direction: column;\n  justify-content: space-around;\n  padding: 16px 0 8px;\n  white-space: nowrap;\n  min-height: 100px;\n"])));
var StyledText = styled(Text)(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  font-weight: bold;\n  color: ", ";\n  line-height: 20px;\n"], ["\n  font-weight: bold;\n  color: ", ";\n  line-height: 20px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React.createElement(StyledButton, { variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            localStorage.setItem(walletLocalStorageKey, walletConfig.title);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, id: "wallet-connect-".concat(title.toLocaleLowerCase()) },
        React.createElement(Icon, { width: "40px" }),
        React.createElement(StyledText, { small: true }, title)));
};
var templateObject_1$4, templateObject_2$3;

var HelpLink = styled(Link)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n  color: ", ";\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
var Wrapper = styled(Flex)(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"], ["\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var WalletCardsWrapper = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: grid;\n  grid-gap: 8px;\n  width: 100%;\n  grid-template-columns: repeat(2, 1fr);\n"], ["\n  display: grid;\n  grid-gap: 8px;\n  width: 100%;\n  grid-template-columns: repeat(2, 1fr);\n"])));
var getPreferredConfig = function (walletConfig) {
    var preferredWalletName = localStorage.getItem(walletLocalStorageKey);
    var sortedConfig = walletConfig.sort(function (a, b) { return a.priority - b.priority; });
    if (!preferredWalletName) {
        return sortedConfig;
    }
    var preferredWallet = sortedConfig.find(function (sortedWalletConfig) { return sortedWalletConfig.title === preferredWalletName; });
    if (!preferredWallet) {
        return sortedConfig;
    }
    return __spreadArray([
        preferredWallet
    ], sortedConfig.filter(function (sortedWalletConfig) { return sortedWalletConfig.title !== preferredWalletName; }), true);
};
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    var sortedConfig = getPreferredConfig(connectors);
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        React.createElement(Wrapper, null,
            React.createElement(WalletCardsWrapper, null, sortedConfig.map(function (entry) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss })); })),
            React.createElement(HelpLink, { href: "https://docs.biswap.org/faq/biswap-platform#how-do-i-connect-my-wallet-to-biswap", external: true },
                React.createElement(Icon$1d, { color: "success", mr: "6px" }),
                "Learn how to connect"))));
};
var templateObject_1$3, templateObject_2$2, templateObject_3$1;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React.createElement(Icon$1e, { width: "20px", color: "success", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$2, templateObject_2$1;

styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
var TransactionWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-radius: 16px;\n  padding: 24px;\n  background-color: #F2F6FC;\n"], ["\n  border-radius: 16px;\n  padding: 24px;\n  background-color: #F2F6FC;\n"])));
var Line = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: ", ";\n  width: 100%;\n  height: 2px;\n"], ["\n  background: ", ";\n  width: 100%;\n  height: 2px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark;
});
var CopyText = styled(Text)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  \n  &:hover {\n    text-decoration: underline;\n    color: ", ";\n  }\n"], ["\n  \n  &:hover {\n    text-decoration: underline;\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
var AccountModal = function (_a) {
    var transactionsForUIKit = _a.transactionsForUIKit, isSwap = _a.isSwap, account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b, login = _a.login, recentTransaction = _a.recentTransaction, chainId = _a.chainId, clearTransaction = _a.clearTransaction;
    useWalletModal(login, logout, account, recentTransaction, chainId).onPresentConnectModal;
    var ClearAndDismiss = function () {
        clearTransaction();
        onDismiss();
    };
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Line, null),
        React.createElement(Text, { fontSize: "14px", fontWeight: '600', color: 'contrast', style: {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginBottom: "16px",
                marginTop: '24px'
            } }, account),
        React.createElement(Flex, null,
            React.createElement(LinkExternal, { mr: '24px', small: true, href: "https://bscscan.com/address/".concat(account) },
                React.createElement(Text, { color: 'success', lineHeight: '20px', small: true, bold: true }, "View on BscScan")),
            React.createElement(CopyToClipboard, { toCopy: account },
                React.createElement(CopyText, { color: 'success', lineHeight: '20px', small: true, bold: true }, "Copy Address"))),
        isSwap && (React.createElement(TransactionWrapper, null,
            React.createElement(Flex, { justifyContent: 'space-between', alignItems: 'center' },
                React.createElement(Text, { fontSize: '14px', fontWeight: '600', lineHeight: '21px', color: '#07162D' }, "Recent transactions"),
                React.createElement(Button, { m: 0, p: 0, scale: 'sm', variant: 'text', onClick: ClearAndDismiss }, "Clear All")),
            React.createElement(React.Fragment, null, transactionsForUIKit()))),
        React.createElement(Flex, null,
            React.createElement(Button, { style: { width: '100%' }, mt: '24px', variant: "primary", onClick: function () {
                    logout();
                    onDismiss();
                } }, "Logout"))));
};
var templateObject_1$1, templateObject_2, templateObject_3, templateObject_4;

var useWalletModal = function (login, logout, account, recentTransaction, chainId, clearTransaction, isSwap, transactionsForUIKit) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { transactionsForUIKit: transactionsForUIKit, isSwap: isSwap, login: login, recentTransaction: recentTransaction, chainId: chainId, account: account || "", logout: logout, clearTransaction: clearTransaction }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var ResetCSS = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'CodecPro', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: rgba(116, 155, 216, 0.32);\n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    border-radius: 10px;\n    background: ", ";\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'CodecPro', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: rgba(116, 155, 216, 0.32);\n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    border-radius: 10px;\n    background: ", ";\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
var templateObject_1;

export { Icon$1z as AddIcon, Alert, Icon$1y as ArrowBackIcon, Icon$1x as ArrowDownIcon, Icon$1w as ArrowDropDownIcon, Icon$1v as ArrowDropUpIcon, Icon$1u as ArrowForwardIcon, Icon$1t as ArrowUpIcon, Icon$K as AutoCompaundIcon, Icon$1s as AutoRenewIcon, Icon$I as BSCIcon, BackgroundImage, Badge, Banner, BannerBody, BannerTitle, GridLayout$1 as BaseLayout, Icon$1q as BellIcon, Icon$1r as BinanceIcon, Icon$1B as BlockIcon, Box, Breadcrumbs, Button, ButtonMenu, ButtonMenuItem, Icon$1o as CalculateIcon, Icon$1p as CardViewIcon, GridLayout as CardsLayout, Checkbox, Icon$C as CheckedIcon, Icon$1D as CheckmarkCircleIcon, Icon$1n as CheckmarkIcon, Icon$1m as ChevronDownIcon, Icon$1l as ChevronLeftIcon, Icon$1j as ChevronRightEndIcon, Icon$1k as ChevronRightIcon, Icon$1i as ChevronUpIcon, Icon$1h as CloseIcon, Icon$1g as CogIcon, Icon$1f as CommunityIcon, ConnectorNames, Icon$f as ContractIcon, Icon$1e as CopyIcon, Icon$L as CupIcon, Icon$h as DeleteIcon, Icon$o as DiceIcon, Icon$V as DownloadIcon, Dropdown, Icon$1C as ErrorIcon, FallingBunnies, Icon$e as FarmIcon, Icon$y as FavoriteEmptyIcon, Icon$z as FavoriteFullIcon, Icon$s as FilterIcon, Icon$H as FireIcon, Icon$Q as FlagIcon, Flex, Icon$F as GasIcon, Icon$l as HamburgerIcon, Icon$A as HammerIcon, Heading, Icon$1d as HelpIcon, Icon$i as HintIcon, Icon$G as HourglassIcon, IconButton, Image, Icon$1A as InfoIcon, Input$1 as Input, Icon$v as LevelIcon, Icon$B as LightningIcon, Link, LinkExternal, Icon$U as LinkIcon, Icon$1c as ListViewIcon, Icon$1a as LoaderIcon, Icon$1b as LogoIcon, Icon$t as MarketBagIcon, Icon$n as MediumIcon, Icon$19 as MetamaskIcon, Icon$18 as MinusIcon, Modal, ModalProvider, ModalWithBackground, Icon$N as MouseIcon, Icon$c as NFTIcon, NotificationDot, Icon$17 as OpenNewIcon, Icon$16 as PlayCircleOutlineIcon, Icon$J as PolygonIcon, Icon$d as PoolIcon, Icon$15 as PrizeIcon, Progress, Icon$12 as ProgressBunny, Radio, Icon$M as RatingIcon, Icon$b as ReferralIcon, Icon$14 as RemoveIcon, ResetCSS, Icon$u as RobiBoostIcon, Icon$R as RocketIcon, Icon$Z as SearchIcon, Icon$g as SendIcon, Icon$x as ShareIcon, Skeleton, Slider, Spinner, Icon$p as SquidEnergyIcon, Icon$D as StarIcon, Icon$j as StarSharpIcon, Svg, Icon$Y as SwapVertIcon, Icon$X as SyncAltIcon, Tag, Icon$T as TelegramIcon, Text, Icon$$ as ThreeDotsIcon, Icon$a as TicketIcon, Icon$_ as TimerIcon, ToastContainer, Toggle, Icon$E as TradeIcon, Icon$S as TwitterIcon, Icon$k as UserIcon, Icon$13 as VerifiedIcon, Icon$w as ViewIcon, Icon$q as VolumeOffIcon, Icon$r as VolumeOnIcon, Icon$11 as WaitIcon, Icon$O as WaitReloadIcon, Icon$P as WalletIcon, Icon$W as WarningIcon, Icon$10 as Won, Icon$m as YouTubeIcon, variants$2 as alertVariants, byTextAscending, byTextDescending, connectorLocalStorageKey, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, types as toastTypes, useKonamiCheatCode, useMatchBreakpoints, useModal, useParticleBurst, useTable, useTooltip, useWalletModal };
