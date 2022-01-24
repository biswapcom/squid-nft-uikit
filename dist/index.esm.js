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

var Icon$23 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$22 = function (props) {
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
            backgroundColor: "#2ED5AC",
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

var IconButton = styled(Button)(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  padding: 0;\n  width: 24px;\n"], ["\n  padding: 0;\n  width: 24px;\n"])));
var templateObject_1$I;

var Icon$21 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$20 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$1$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$1_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$1Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$1Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$1X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$1W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$1V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$1U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$1T = function (props) {
    return (React.createElement(Svg, __assign({ width: "24", height: "24", viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M20.6289 15.9989C20.5511 15.9052 20.4747 15.8114 20.3997 15.7209C19.3684 14.4736 18.7445 13.7208 18.7445 10.1897C18.7445 8.36156 18.3072 6.86156 17.4451 5.73656C16.8095 4.90547 15.9503 4.275 14.8178 3.80906C14.8032 3.80096 14.7902 3.79032 14.7794 3.77766C14.372 2.41359 13.2573 1.5 12.0001 1.5C10.743 1.5 9.62873 2.41359 9.22139 3.77625C9.21052 3.78845 9.19768 3.79875 9.18342 3.80672C6.54061 4.89469 5.25623 6.98203 5.25623 10.1883C5.25623 13.7208 4.63326 14.4736 3.60108 15.7195C3.52608 15.81 3.44967 15.9019 3.37186 15.9975C3.17086 16.2399 3.04351 16.5348 3.00488 16.8473C2.96625 17.1598 3.01796 17.4769 3.15389 17.7609C3.44311 18.3703 4.05951 18.7486 4.76311 18.7486H19.2423C19.9426 18.7486 20.5548 18.3708 20.845 17.7642C20.9815 17.4801 21.0337 17.1628 20.9954 16.8499C20.9571 16.537 20.8299 16.2417 20.6289 15.9989ZM12.0001 22.5C12.6775 22.4995 13.3421 22.3156 13.9234 21.9679C14.5047 21.6202 14.9811 21.1217 15.302 20.5252C15.3171 20.4966 15.3246 20.4646 15.3237 20.4322C15.3228 20.3999 15.3135 20.3684 15.2968 20.3407C15.2801 20.313 15.2565 20.2901 15.2284 20.2742C15.2002 20.2583 15.1684 20.25 15.1361 20.25H8.86514C8.83276 20.2499 8.8009 20.2582 8.77267 20.274C8.74444 20.2899 8.7208 20.3128 8.70404 20.3405C8.68728 20.3682 8.67799 20.3997 8.67706 20.4321C8.67613 20.4645 8.6836 20.4965 8.69873 20.5252C9.01961 21.1216 9.49591 21.6201 10.0771 21.9678C10.6584 22.3155 11.3229 22.4994 12.0001 22.5Z" })));
};

var Icon$1S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$1R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React.createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React.createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React.createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React.createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React.createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$1Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React.createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$1P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$1N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$1M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$1L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M17.0024 7C17.0024 6.44772 16.5547 6 16.0024 6C15.4502 6 15.0024 6.44772 15.0024 7L15.0024 17C15.0024 17.5523 15.4502 18 16.0024 18C16.5547 18 17.0024 17.5523 17.0024 17L17.0024 7Z" }),
        React.createElement("path", { d: "M11.1725 12L7.2925 15.88C6.9025 16.27 6.9125 16.91 7.2925 17.3C7.6825 17.69 8.3125 17.69 8.7025 17.3L13.2925 12.71C13.6825 12.32 13.6825 11.69 13.2925 11.3L8.7025 6.70998C8.3125 6.31998 7.6825 6.31998 7.2925 6.70998C6.9025 7.09998 6.9025 7.72998 7.2925 8.11998L11.1725 12Z" })));
};

var Icon$1K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$1J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.71C17.91 5.32 17.28 5.32 16.89 5.71L12 10.59L7.10997 5.7C6.71997 5.31 6.08997 5.31 5.69997 5.7C5.30997 6.09 5.30997 6.72 5.69997 7.11L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71Z" })));
};

var Icon$1I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$1H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$1G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M15.9375 18.75H7.1875C6.44158 18.75 5.72621 18.4537 5.19876 17.9262C4.67132 17.3988 4.375 16.6834 4.375 15.9375L4.375 7.1875C4.375 6.44158 4.67132 5.72621 5.19876 5.19876C5.72621 4.67132 6.44158 4.375 7.1875 4.375L15.9375 4.375C16.6834 4.375 17.3988 4.67132 17.9262 5.19876C18.4537 5.72621 18.75 6.44158 18.75 7.1875V15.9375C18.75 16.6834 18.4537 17.3988 17.9262 17.9262C17.3988 18.4537 16.6834 18.75 15.9375 18.75Z" }),
        React.createElement("path", { d: "M6.25 3.125L15.4641 3.125C15.2696 2.57705 14.9104 2.10268 14.4356 1.76699C13.9609 1.43129 13.3939 1.2507 12.8125 1.25L4.0625 1.25C3.31658 1.25 2.60121 1.54632 2.07376 2.07376C1.54632 2.60121 1.25 3.31658 1.25 4.0625L1.25 12.8125C1.2507 13.3939 1.43129 13.9609 1.76699 14.4356C2.10268 14.9104 2.57705 15.2696 3.125 15.4641L3.125 6.25C3.125 5.4212 3.45424 4.62634 4.04029 4.04029C4.62634 3.45424 5.4212 3.125 6.25 3.125Z" })));
};

var Icon$1F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$1E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$1D = function (props) {
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
var Icon$1C = function (props) {
    return (React.createElement(Loader, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};
var templateObject_1$H, templateObject_2$m;

var Icon$1B = function (props) {
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

var Icon$1A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.75 4.03409C18.7492 3.29595 18.4556 2.58826 17.9337 2.06632C17.4117 1.54437 16.7041 1.25079 15.9659 1.25L4.03409 1.25C3.29595 1.25079 2.58826 1.54437 2.06632 2.06632C1.54437 2.58826 1.25079 3.29595 1.25 4.03409L1.25 15.9659C1.25079 16.7041 1.54437 17.4117 2.06632 17.9337C2.58826 18.4556 3.29595 18.7492 4.03409 18.75H15.9659C16.7041 18.7492 17.4117 18.4556 17.9337 17.9337C18.4556 17.4117 18.7492 16.7041 18.75 15.9659V4.03409ZM14.66 10.5015L14.6596 6.54524L7.57871 13.6261C7.41608 13.7888 7.19447 13.8785 6.96449 13.8749C6.50585 13.8676 6.1358 13.4975 6.12853 13.0389C6.12487 12.8089 6.21461 12.5873 6.37725 12.4247L13.4581 5.34377L9.50194 5.3434C9.28046 5.33773 9.06995 5.24576 8.91532 5.0871C8.76067 4.92845 8.67413 4.71567 8.67413 4.49411C8.67413 4.27255 8.76067 4.05977 8.91532 3.90111C9.06995 3.74246 9.28046 3.65049 9.50194 3.64482L15.5093 3.64482C15.7345 3.64489 15.9505 3.7344 16.1097 3.89365C16.269 4.05291 16.3585 4.26889 16.3586 4.49411V10.5015C16.3529 10.7229 16.2609 10.9334 16.1023 11.0881C15.9436 11.2427 15.7308 11.3293 15.5093 11.3293C15.2877 11.3293 15.0749 11.2427 14.9163 11.0881C14.7576 10.9334 14.6657 10.7229 14.66 10.5015Z" })));
};

var Icon$1y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$1x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$1w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$1v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$1u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$1t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$1s = function (props) {
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

var Icon$1r = function (props) {
    return (React.createElement(Svg, __assign({ width: "24", height: "24", viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" })));
};

var Icon$1q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$1p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$1o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$1n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$1m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$1l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M16.59 9H15V4C15 3.45 14.55 3 14 3H10C9.45 3 9 3.45 9 4V9H7.41C6.52 9 6.07 10.08 6.7 10.71L11.29 15.3C11.68 15.69 12.31 15.69 12.7 15.3L17.29 10.71C17.92 10.08 17.48 9 16.59 9ZM5 19C5 19.55 5.45 20 6 20H18C18.55 20 19 19.55 19 19C19 18.45 18.55 18 18 18H6C5.45 18 5 18.45 5 19Z" })));
};

var Icon$1k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$1j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M20.9822 5.07062C20.8756 6.63229 18.0143 18.2999 18.0143 18.2999C18.0143 18.2999 17.8366 18.982 17.2146 19C17.0013 19 16.717 18.982 16.3971 18.6769C15.7395 18.1204 14.2467 17.0434 12.8427 16.0562C12.7894 16.11 12.7361 16.1639 12.665 16.2177C12.3451 16.5049 11.8653 16.9178 11.3499 17.4204C11.1544 17.5999 10.9411 17.7973 10.7279 18.0127L10.7101 18.0307C10.5857 18.1563 10.4791 18.2461 10.3902 18.3179C9.69709 18.8923 9.62601 18.4076 9.62601 18.1563L9.99922 14.0457V14.0098L10.017 13.9739C10.0348 13.9201 10.0703 13.9021 10.0703 13.9021C10.0703 13.9021 17.339 7.36825 17.5345 6.66819C17.5523 6.63229 17.4989 6.59639 17.4101 6.63229C16.9302 6.79385 8.55969 12.143 7.63555 12.7354C7.58224 12.7713 7.42229 12.7533 7.42229 12.7533L3.35254 11.4071C3.35254 11.4071 2.8727 11.2096 3.03264 10.7608C3.06819 10.6711 3.1215 10.5813 3.31699 10.4557C4.22336 9.80948 19.987 4.08336 19.987 4.08336C19.987 4.08336 20.4313 3.93976 20.6979 4.02951C20.8223 4.08336 20.8934 4.13721 20.9645 4.31671C20.9822 4.38851 21 4.53212 21 4.69367C21 4.78342 20.9822 4.89112 20.9822 5.07062Z" })));
};

var Icon$1i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$1h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.4158 8.3528C11.8828 8.88474 10.3235 10.444 10.3235 10.444C10.3235 10.444 10.6654 12.1511 9.80615 13.4062C9.65016 13.6341 9.32911 13.6324 9.13385 13.4372L3.14805 7.45132C2.95278 7.25606 2.95113 6.93494 3.17934 6.77945C4.43557 5.9235 6.14832 6.28183 6.14832 6.28183C6.14832 6.28183 6.98173 5.42057 8.23238 4.16991C9.9052 2.49653 13.2519 3.33322 13.2519 3.33322C13.2519 3.33322 14.0886 6.67997 12.4158 8.3528ZM6.05548 12.1512C4.9632 13.2435 3.32479 13.2435 3.32479 13.2435C3.32479 13.2435 3.32479 11.0589 4.41707 10.5128L6.05548 12.1512ZM10.1112 6.47413C10.5017 6.86465 11.1348 6.86465 11.5254 6.47413C11.9159 6.08361 11.9159 5.45044 11.5254 5.05992C11.1348 4.66939 10.5017 4.66939 10.1112 5.05992C9.72063 5.45044 9.72063 6.08361 10.1112 6.47413Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "16", height: "16" })))));
};

var Icon$1g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("path", { d: "M12.7697 3.74169C12.7005 3.70807 12.623 3.69384 12.5459 3.70058C12.4689 3.70732 12.3952 3.73477 12.3333 3.77985C10.8594 4.85278 9.61031 4.33322 8.16413 3.73167C6.69309 3.1198 5.02586 2.42653 3.16668 3.77985C3.16421 3.78164 3.16207 3.78367 3.15968 3.7855C3.15391 3.78989 3.14834 3.79443 3.14282 3.79911C3.13766 3.80349 3.13255 3.80791 3.12767 3.81249C3.12311 3.81675 3.11874 3.82115 3.11439 3.82561C3.10918 3.83094 3.10404 3.83629 3.09918 3.84185C3.0955 3.84607 3.09201 3.85042 3.0885 3.85478C3.08367 3.86078 3.07889 3.8668 3.07446 3.87302C3.07116 3.87761 3.06813 3.88235 3.06503 3.88708C3.06101 3.89326 3.05699 3.89943 3.05333 3.9058C3.0502 3.9112 3.04735 3.91677 3.04448 3.92234C3.04145 3.92823 3.03838 3.93411 3.03566 3.94012C3.03276 3.94649 3.03019 3.95302 3.02762 3.95954C3.02546 3.96506 3.02327 3.97056 3.02136 3.97616C3.019 3.98308 3.01699 3.99014 3.01501 3.99723C3.01343 4.00284 3.01185 4.00841 3.01053 4.01408C3.00895 4.02092 3.00766 4.02786 3.00644 4.03484C3.00532 4.04117 3.00425 4.04749 3.00343 4.05387C3.00265 4.06015 3.00209 4.06647 3.00158 4.07284C3.00102 4.0802 3.00061 4.08757 3.00043 4.09496C3.00038 4.0978 3 4.10054 3 4.10338V12.5956C3 12.7029 3.0439 12.8057 3.12204 12.8816C3.20018 12.9574 3.30616 13 3.41667 13C3.52717 13 3.63315 12.9574 3.71129 12.8816C3.78943 12.8057 3.83333 12.7029 3.83333 12.5956V10.3782C5.23559 9.46014 6.4446 9.96224 7.83587 10.541C8.68293 10.8933 9.595 11.2727 10.5714 11.2726C11.2906 11.2726 12.0447 11.0668 12.8333 10.4928C12.8851 10.4551 12.9271 10.4063 12.956 10.3501C12.9849 10.294 13 10.232 13 10.1693V4.10338C13 4.02828 12.9785 3.95467 12.9378 3.89079C12.8971 3.8269 12.8389 3.77528 12.7697 3.74169Z" })));
};

var Icon$1f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("g", { opacity: "0.56" },
            React.createElement("path", { d: "M18.6667 7.625L6 7.625C5.82319 7.625 5.65362 7.55586 5.5286 7.43279C5.40357 7.30972 5.33333 7.1428 5.33333 6.96875C5.33333 6.7947 5.40357 6.62778 5.5286 6.50471C5.65362 6.38164 5.82319 6.3125 6 6.3125L16.6667 6.3125C16.8435 6.3125 17.013 6.24336 17.1381 6.12029C17.2631 5.99722 17.3333 5.8303 17.3333 5.65625C17.3333 5.4822 17.2631 5.31528 17.1381 5.19221C17.013 5.06914 16.8435 5 16.6667 5L6 5C5.46975 5.0006 4.9614 5.20821 4.58646 5.57729C4.21151 5.94638 4.00061 6.44679 4 6.96875L4 17.0312C4.00061 17.5532 4.21151 18.0536 4.58646 18.4227C4.9614 18.7918 5.46975 18.9994 6 19H18.6667C19.0202 18.9996 19.3591 18.8612 19.609 18.6151C19.859 18.3691 19.9996 18.0355 20 17.6875V8.9375C19.9996 8.58953 19.859 8.25592 19.609 8.00986C19.3591 7.76381 19.0202 7.6254 18.6667 7.625ZM16.3333 14.5156C16.1356 14.5156 15.9422 14.4579 15.7778 14.3497C15.6133 14.2416 15.4851 14.0878 15.4095 13.908C15.3338 13.7281 15.314 13.5302 15.3525 13.3392C15.3911 13.1483 15.4864 12.9729 15.6262 12.8352C15.7661 12.6975 15.9443 12.6038 16.1382 12.5658C16.3322 12.5278 16.5333 12.5473 16.716 12.6218C16.8987 12.6963 17.0549 12.8225 17.1648 12.9844C17.2747 13.1462 17.3333 13.3366 17.3333 13.5313C17.3333 13.7923 17.228 14.0427 17.0404 14.2273C16.8529 14.4119 16.5985 14.5156 16.3333 14.5156Z" }))));
};

var Icon$1e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" })));
};

var Icon$1d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.38031 13.532L4.01253 11.58C3.71703 11.4726 3.46156 11.2772 3.28053 11.0201C3.09949 10.763 3.00159 10.4566 3.00002 10.1422C2.99844 9.82779 3.09327 9.52044 3.27172 9.26156C3.45016 9.00268 3.70367 8.80471 3.99807 8.69431L18.9218 3.09796C19.1983 2.99424 19.4988 2.97234 19.7875 3.03486C20.0761 3.09738 20.3407 3.24168 20.5495 3.45052C20.7584 3.65936 20.9027 3.92392 20.9652 4.21257C21.0277 4.50122 21.0057 4.80176 20.902 5.07829V5.07824L15.3056 20.0019C15.1974 20.2961 15.0011 20.5498 14.7435 20.7284C14.4858 20.907 14.1794 21.0019 13.8659 21H13.8578C13.5429 21.0003 13.2356 20.9032 12.9782 20.7219C12.7207 20.5406 12.5257 20.2841 12.4199 19.9875L10.468 14.6197L4.40017 20.6874C4.25593 20.8317 4.0603 20.9127 3.85631 20.9127C3.65233 20.9127 3.4567 20.8317 3.31246 20.6874C3.16822 20.5432 3.08718 20.3476 3.08718 20.1436C3.08718 19.9396 3.16822 19.744 3.31246 19.5997L9.38031 13.532Z" })));
};

var Icon$1c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6.90909 9.06666C6.90909 11.9017 9.18837 14.2 12 14.2C14.8116 14.2 17.0909 11.9017 17.0909 9.06666C17.0909 6.2316 14.8116 3.93333 12 3.93333C9.18837 3.93333 6.90909 6.2316 6.90909 9.06666Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.6021 2.46693C15.2546 1.51168 13.6473 0.999364 12 1C10.3528 0.999362 8.74568 1.51161 7.39813 2.46673C6.05059 3.42185 5.02842 4.77325 4.4713 6.33624C3.91419 7.89924 3.84932 9.59757 4.28556 11.1991C4.7218 12.8007 5.63786 14.2274 6.90856 15.2842V22.2666C6.90856 22.3916 6.94024 22.5146 7.00061 22.6237C7.06097 22.7329 7.14801 22.8247 7.25346 22.8904C7.3589 22.9562 7.47926 22.9936 7.6031 22.9992C7.72694 23.0049 7.85015 22.9785 7.96103 22.9226L12.0001 20.8865L16.0378 22.9225C16.1487 22.9785 16.2719 23.0049 16.3958 22.9993C16.5196 22.9937 16.64 22.9562 16.7455 22.8905C16.8509 22.8248 16.938 22.733 16.9983 22.6238C17.0587 22.5146 17.0904 22.3916 17.0904 22.2666V15.2851C18.3613 14.2284 19.2777 12.8018 19.7142 11.2002C20.1506 9.59852 20.0859 7.90006 19.5289 6.3369C18.9719 4.77375 17.9497 3.42218 16.6021 2.46693ZM15.6365 14.5543C14.5601 15.2796 13.2946 15.6666 12 15.6666C10.2646 15.6647 8.60091 14.9687 7.37383 13.7314C6.14674 12.4941 5.4565 10.8165 5.45455 9.06666C5.45455 7.7613 5.83843 6.48526 6.55765 5.3999C7.27688 4.31453 8.29914 3.4686 9.49516 2.96906C10.6912 2.46952 12.0073 2.33882 13.277 2.59348C14.5466 2.84814 15.7129 3.47673 16.6283 4.39976C17.5437 5.32278 18.1671 6.49879 18.4197 7.77906C18.6722 9.05933 18.5426 10.3864 18.0472 11.5924C17.5518 12.7984 16.7129 13.8291 15.6365 14.5543Z" })));
};

var Icon$1b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3.33263 6.25H5.33157V5.5C5.33198 5.10231 5.47251 4.72105 5.72234 4.43984C5.97216 4.15864 6.31089 4.00045 6.6642 4H17.3252C17.6785 4.00045 18.0173 4.15864 18.2671 4.43984C18.5169 4.72105 18.6575 5.10231 18.6579 5.5V6.25H20.6674C21.0207 6.25045 21.3594 6.40864 21.6092 6.68984C21.8591 6.97105 21.9996 7.35231 22 7.75V9.25C21.999 10.2442 21.6477 11.1974 21.0231 11.9004C20.3985 12.6034 19.5517 12.9989 18.6684 13H18.3316C17.5285 15.8066 15.3213 17.9075 12.661 18.2109V20.5H14.66C14.8367 20.5 15.0062 20.579 15.1311 20.7197C15.2561 20.8603 15.3263 21.0511 15.3263 21.25C15.3263 21.4489 15.2561 21.6397 15.1311 21.7803C15.0062 21.921 14.8367 22 14.66 22H9.32946C9.15274 22 8.98326 21.921 8.8583 21.7803C8.73334 21.6397 8.66314 21.4489 8.66314 21.25C8.66314 21.0511 8.73334 20.8603 8.8583 20.7197C8.98326 20.579 9.15274 20.5 9.32946 20.5H11.3284V18.2131C10.0308 18.0654 8.80008 17.4929 7.78839 16.5664C6.77671 15.6399 6.0284 14.4 5.63598 13H5.33157C4.44829 12.9989 3.60148 12.6034 2.97691 11.9004C2.35234 11.1974 2.00101 10.2442 2 9.25V7.75C2.0004 7.35231 2.14094 6.97105 2.39076 6.68984C2.64059 6.40864 2.97932 6.25045 3.33263 6.25ZM18.6684 11.5C19.1984 11.4993 19.7065 11.262 20.0812 10.8402C20.456 10.4184 20.6668 9.84653 20.6674 9.25V7.75H18.6579V10.6652C18.6575 10.9441 18.6436 11.2228 18.6163 11.5H18.6684ZM3.33263 9.25C3.33323 9.84653 3.54403 10.4184 3.91878 10.8402C4.29352 11.262 4.80161 11.4993 5.33157 11.5H5.36423C5.34255 11.2524 5.33167 11.0024 5.33157 10.75V7.75H3.33263V9.25Z" })));
};

var Icon$1a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 8.31935V6.75448C9.10375 6.75448 6.75 9.10616 6.75 11.9999C6.75 12.6905 6.88125 13.3637 7.135 13.9669C7.26625 14.2816 7.17 14.64 6.93375 14.8761C6.4875 15.3219 5.735 15.1646 5.49875 14.5788C5.175 13.7833 5 12.9091 5 11.9999C5 8.13576 8.1325 5.00602 12 5.00602V3.44115C12 3.04775 12.4725 2.85542 12.7438 3.12643L15.185 5.56553C15.36 5.74037 15.36 6.01139 15.185 6.18623L12.7438 8.62533C12.4725 8.90508 12 8.71275 12 8.31935ZM16.865 10.0328C16.7337 9.72686 16.83 9.35968 17.0662 9.12364C17.5125 8.67778 18.265 8.83514 18.5013 9.42088C18.825 10.2164 19 11.0907 19 11.9999C19 15.8639 15.8675 18.9937 12 18.9937V20.5673C12 20.952 11.5275 21.1443 11.2562 20.8733L8.815 18.4342C8.64 18.2593 8.64 17.9883 8.815 17.8135L11.2562 15.3744C11.5275 15.0946 12 15.287 12 15.6804V17.2452C14.8962 17.2452 17.25 14.8936 17.25 11.9999C17.25 11.3092 17.11 10.6448 16.865 10.0328Z" })));
};

var Icon$19 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M0 12.0057L0 5.8403C0 5.41523 0.227073 5.02171 0.597324 4.80513L5.96072 1.66786C6.34124 1.44527 6.81401 1.44397 7.19579 1.66446L12.6357 4.80618C13.0093 5.02192 13.2389 5.41728 13.2389 5.84475V8.06681L10.8636 9.40682V7.30474C10.8636 6.88322 10.6403 6.49245 10.2749 6.27469L7.19233 4.43725C6.81283 4.21104 6.33888 4.20639 5.9549 4.4251L3.01492 6.09972C2.6378 6.31453 2.40543 6.71187 2.40543 7.14192V10.6338C2.40543 11.0551 2.62852 11.4457 2.99357 11.6636L5.95654 13.4316C6.339 13.6599 6.81728 13.6629 7.20263 13.4394L16.7802 7.88594C17.1586 7.66648 17.6274 7.66517 18.0071 7.88251L23.3927 10.965C23.7686 11.1802 24 11.5768 24 12.006V18.2288C24 18.6589 23.7676 19.0562 23.3905 19.271L18.0046 22.3391C17.6261 22.5547 17.1598 22.5535 16.7825 22.336L11.4676 19.272C11.0936 19.0564 10.8636 18.6608 10.8636 18.233L10.8636 16.0175L13.2389 14.6418V16.8496C13.2389 17.2751 13.4664 17.669 13.8373 17.8854L16.7781 19.6015C17.1576 19.823 17.6286 19.8246 18.0096 19.6057L21.007 17.8841C21.382 17.6687 21.6127 17.2726 21.6127 16.8441V13.3907C21.6127 12.9631 21.3829 12.5677 21.0092 12.3519L18.0043 10.6175C17.6262 10.3992 17.1585 10.3983 16.7796 10.6151L7.18666 16.1036C6.80964 16.3193 6.34468 16.3196 5.96737 16.1044L0.608812 13.0476C0.232073 12.8326 0 12.4355 0 12.0057Z" })));
};

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 0L5.55306 3.6761L7.92329 5.03416L12 2.7161L16.0767 5.03416L18.447 3.6761L12 0ZM16.0767 6.95417L18.447 8.31221V11.0283L14.3702 13.3463L14.3702 17.9825L12 19.3406L9.62982 17.9825L9.62982 13.3463L5.55306 11.0283V8.31221L7.92329 6.95417L12 9.27218L16.0767 6.95417ZM18.447 12.9483V15.6644L16.0767 17.0225V14.3063L18.447 12.9483ZM16.053 18.9424L20.1299 16.6244V11.9883L22.5 10.6303V17.9825L16.053 21.6585V18.9424ZM20.1299 7.3522L17.7596 5.99417L20.1299 4.6361L22.5 5.99417V8.71027L20.1299 10.0683V7.3522ZM9.62982 22.642V19.9259L12 21.2839L14.3702 19.9259V22.642L12 24L9.62982 22.642ZM7.92329 17.0225L5.55306 15.6644V12.9483L7.92329 14.3063V17.0225ZM12 7.3522L9.62982 5.99417L12 4.6361L14.3702 5.99417L12 7.3522ZM6.24042 5.99417L3.8702 7.3522V10.0683L1.5 8.71027L1.5 5.99417L3.8702 4.6361L6.24042 5.99417ZM1.5 10.6303L3.8702 11.9883L3.8702 16.6244L7.94695 18.9424V21.6585L1.5 17.9825L1.5 10.6303Z" })));
};

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20", fill: "none" }, props),
        React.createElement("path", { d: "M7.39371 2.09677C8.40066 0.322581 10.0885 0.0537634 10.8373 0C9.83028 1.77419 10.2176 3.54839 11.8442 5.8871C13.4708 8.22581 15.2523 10.9677 14.1679 15.3226C13.3004 18.8065 9.98524 19.8925 8.4361 20C11 18 10.8134 15.3226 7.11932 13.7903C2.5 16 4.5 19 6.11237 20C0.148152 18.5484 -0.00676221 13.4677 0.922727 10.0806C1.66632 7.37097 3.34971 5.94086 4.09846 5.56452C3.55626 7.33871 4.33084 9.43548 5.64761 9.19355C6.96439 8.95161 6.88692 7.58064 6.80946 6.77419L6.80705 6.74911C6.72741 5.92107 6.50943 3.65483 7.39371 2.09677Z", fill: "#F93B5D" })));
};

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React.createElement("path", { d: "M11.4545 4.90909C11.4545 4.90909 10.6364 8.18182 9 8.18182C7.36364 8.18182 6.54545 4.90909 6.54545 4.90909L11.4545 4.90909Z" }),
        React.createElement("path", { d: "M9 9.81818C10.6364 9.81818 11.4545 13.0909 11.4545 13.0909H6.54545C6.54545 13.0909 7.36364 9.81818 9 9.81818Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 0V0.818182C18 1.72193 17.2674 2.45455 16.3636 2.45455H15.4292C15.1634 4.44627 14.4814 6.05746 13.7994 7.23802C13.3629 7.9933 12.9252 8.57483 12.5928 8.97116L12.5685 9L12.5928 9.02889C12.9252 9.42522 13.3629 10.0067 13.7994 10.7621C14.4814 11.9426 15.1634 13.5538 15.4292 15.5455L16.3636 15.5455C17.2674 15.5455 18 16.2781 18 17.1818V18H0L0 17.1818C0 16.2781 0.732613 15.5455 1.63636 15.5455H2.5708C2.83662 13.5538 3.51857 11.9426 4.20065 10.7621C4.63705 10.0068 5.07481 9.42525 5.4072 9.02891L5.43149 9.00005L5.40722 8.97119C5.07481 8.57488 4.63705 7.99335 4.20065 7.23807C3.51857 6.05751 2.8366 4.44629 2.5708 2.45455H1.63636C0.732613 2.45455 0 1.72193 0 0.818182L0 0L18 0ZM13.7762 2.45455L4.22384 2.45455C4.47523 4.0977 5.04644 5.43099 5.61753 6.41941C5.99931 7.08019 6.37974 7.58431 6.66096 7.91964C6.80144 8.08711 6.91664 8.21188 6.99417 8.29238L7.02486 8.32397C7.04865 8.34826 7.06738 8.36681 7.08044 8.37957L7.09932 8.39777L7.10089 8.39927L7.10209 8.4004C7.26883 8.55518 7.36364 8.77243 7.36364 9.00002C7.36364 9.22764 7.26883 9.44492 7.10209 9.5997L7.10136 9.60038L7.09932 9.6023L7.08046 9.6205L7.06396 9.63676L7.0483 9.65241C7.03317 9.66759 7.01507 9.68605 6.9942 9.70769C6.97824 9.72427 6.96069 9.74273 6.94164 9.76303C6.92533 9.7804 6.90795 9.79913 6.88955 9.81923C6.85452 9.85746 6.81579 9.9006 6.77385 9.94859C6.73844 9.98909 6.70071 10.0331 6.66099 10.0805C6.37974 10.4158 5.99931 10.9199 5.61753 11.5807C5.04644 12.5691 4.47526 13.9024 4.22387 15.5455H13.7761C13.5247 13.9024 12.9536 12.5691 12.3825 11.5807C12.0007 10.9199 11.6203 10.4157 11.339 10.0804C11.1986 9.91294 11.0833 9.78817 11.0058 9.70764C10.9893 9.69057 10.9746 9.67548 10.9617 9.66243L10.9347 9.63541L10.9195 9.62048L10.9007 9.60225L10.8991 9.60075L10.8979 9.59968C10.7312 9.4449 10.6364 9.22759 10.6364 9C10.6364 8.77238 10.7312 8.55508 10.898 8.4003L10.8987 8.39957L10.9007 8.39772L10.9196 8.37952C10.9378 8.36169 10.9671 8.33258 11.0058 8.29233C11.0834 8.21183 11.1986 8.08706 11.339 7.91959C11.6203 7.58429 12.0007 7.08014 12.3825 6.41936C12.9536 5.43094 13.5248 4.09768 13.7762 2.45455Z" })));
};

var Icon$15 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.97828 0H11.2146C11.6079 0.00188312 11.9846 0.145139 12.2627 0.398653C12.5408 0.652167 12.6979 0.995464 12.7 1.35398V6.18372C13.2346 6.20899 13.7383 6.42011 14.1073 6.77362C14.4762 7.12713 14.6825 7.59614 14.6835 8.08407V12.5267C14.6835 12.8034 14.8041 13.0688 15.0188 13.2645C15.2335 13.4602 15.5246 13.5701 15.8282 13.5701C16.1317 13.5701 16.4229 13.4602 16.6376 13.2645C16.8523 13.0688 16.9728 12.8034 16.9728 12.5267V6.05151C15.1999 4.44345 14.8565 4.40443 15.338 2.63628L13.995 0.884071L14.5306 0.458761L17.92 3.51717V12.5323C17.9088 13.0303 17.6839 13.5045 17.2936 13.8531C16.9033 14.2017 16.3786 14.3969 15.8321 14.3969C15.2856 14.3969 14.7609 14.2017 14.3706 13.8531C13.9803 13.5045 13.7554 13.0303 13.7442 12.5323V8.08805C13.742 7.82869 13.6344 7.57927 13.4422 7.38802C13.25 7.19677 12.9868 7.07728 12.7035 7.05266V15.8623H13.7154C13.8417 15.8625 13.9627 15.9083 14.0521 15.9897C14.1416 16.071 14.192 16.1812 14.1924 16.2964V17.5054C14.192 17.6206 14.1416 17.731 14.0522 17.8124C13.9628 17.8939 13.8418 17.9399 13.7154 17.9403H0.480121C0.353812 17.9399 0.23282 17.8938 0.143587 17.8124C0.0543547 17.7309 0.00413632 17.6206 0.00390625 17.5054V16.2964C0.00413723 16.1813 0.0543833 16.0711 0.14364 15.9897C0.232898 15.9083 0.353892 15.8625 0.480121 15.8623H1.49284V1.35717C1.4949 0.99865 1.65207 0.655353 1.9302 0.401839C2.20832 0.148325 2.58495 0.00506903 2.97828 0.00318591V0ZM3.64148 2.16239H10.5505C10.6402 2.1626 10.726 2.19514 10.7894 2.2529C10.8527 2.31066 10.8884 2.38893 10.8887 2.47062V6.39319C10.8882 6.47473 10.8524 6.5528 10.789 6.61039C10.7257 6.66798 10.64 6.70041 10.5505 6.70062H3.64148C3.55217 6.7002 3.46665 6.66768 3.40349 6.61011C3.34034 6.55255 3.30466 6.47459 3.3042 6.39319V2.47062C3.30443 2.38907 3.34001 2.31091 3.40319 2.25318C3.46637 2.19544 3.55202 2.16281 3.64148 2.16239Z" })));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M7 6H19V9H7V6Z" }),
        React.createElement("path", { d: "M3.17317 7.51079C3.07444 7.39497 3.07808 7.22356 3.18164 7.11203L7 3L7 12L3.17317 7.51079Z" }),
        React.createElement("path", { d: "M18 16H5V19H18V16Z" }),
        React.createElement("path", { d: "M20.8221 17.7336C20.9235 17.6203 20.9242 17.449 20.8236 17.335L17 13L17 22L20.8221 17.7336Z" })));
};

var Icon$13 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 22 22" }, props),
        React.createElement("path", { d: "M11 1.93936L13.8747 6.71605C14.1539 7.18008 14.6094 7.51101 15.137 7.63321L20.5682 8.89109L16.9137 13.1011C16.5586 13.5101 16.3846 14.0456 16.4315 14.5851L16.9135 20.1392L11.7802 17.9645C11.2815 17.7532 10.7185 17.7532 10.2198 17.9645L5.0865 20.1392L5.56853 14.5851C5.61535 14.0456 5.44137 13.5101 5.08635 13.1011L1.43176 8.89109L6.86298 7.63321C7.39059 7.51101 7.84609 7.18007 8.12534 6.71605L11 1.93936Z", strokeWidth: "2" })));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "none" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z", fill: "#1DC872" })));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("circle", { cx: "12", cy: "12", r: "10", fill: "#1263F1" }),
        React.createElement("path", { d: "M9.75195 21.7462L12.7508 11.25V8.25004L14.7104 2.37146C18.9167 3.55273 22.0008 7.41622 22.0008 12C22.0008 17.5229 17.5237 22 12.0008 22C11.2276 22 10.4748 21.9123 9.75195 21.7462Z", fill: "#F93B5D" }),
        React.createElement("path", { d: "M6 14.3143L15.7714 0L13.2 10.2H18.3429L8.57143 24L11.1429 14.3143H6Z", fill: "white" })));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12.6611 2.56833C12.17 3.05943 12.17 3.85564 12.6611 4.34674L16.8107 8.49636C17.3018 8.98745 18.098 8.98745 18.5891 8.49636C19.0802 8.00526 19.0802 7.20904 18.5891 6.71795L14.4395 2.56833C13.9484 2.07724 13.1522 2.07724 12.6611 2.56833Z" }),
        React.createElement("path", { d: "M13.3996 13.6349C12.4394 14.4679 11.498 15.0633 10.7424 15.4697L5.71495 10.4422C6.25474 9.44537 7.08496 8.14449 8.2151 7.01435C9.34524 5.88421 10.6461 5.05399 11.643 4.51419L16.6704 9.54166C16.2641 10.2972 15.6687 11.2386 14.8356 12.1989L20.5825 17.1795C21.2672 17.7729 21.3046 18.8225 20.6639 19.4632C20.0233 20.1039 18.9736 20.0664 18.3802 19.3817L13.3996 13.6349Z" }),
        React.createElement("path", { d: "M3.76909 11.4604C3.27799 11.9515 3.27799 12.7477 3.76909 13.2388L7.9187 17.3884C8.4098 17.8795 9.20601 17.8795 9.69711 17.3884C10.1882 16.8973 10.1882 16.1011 9.69711 15.61L5.54749 11.4604C5.0564 10.9693 4.26018 10.9693 3.76909 11.4604Z" }),
        React.createElement("path", { d: "M4.13741 19.2844C3.4429 19.2844 2.87988 19.8475 2.87988 20.542C2.87988 21.2365 3.4429 21.7995 4.13741 21.7995H13.3592C14.0538 21.7995 14.6168 21.2365 14.6168 20.542C14.6168 19.8475 14.0538 19.2844 13.3592 19.2844H4.13741Z" })));
};

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 20C11.7221 19.9997 11.4507 19.9188 11.2212 19.7679C7.82085 17.545 6.34847 16.0208 5.53635 15.0679C3.80568 13.0367 2.97712 10.9513 3.00048 8.69292C3.02774 6.105 5.18373 4 7.80657 4C9.71378 4 11.0347 5.03458 11.804 5.89625C11.8284 5.92327 11.8585 5.94494 11.8923 5.95979C11.9261 5.97463 11.9628 5.98232 12 5.98232C12.0372 5.98232 12.0739 5.97463 12.1077 5.95979C12.1415 5.94494 12.1716 5.92327 12.196 5.89625C12.9653 5.03375 14.2862 4 16.1934 4C18.8163 4 20.9723 6.105 20.9995 8.69333C21.0229 10.9521 20.1935 13.0375 18.4636 15.0683C17.6515 16.0213 16.1792 17.5454 12.7788 19.7683C12.5492 19.9191 12.2779 19.9998 12 20Z" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.196 5.89625C12.1716 5.92327 12.1415 5.94494 12.1077 5.95979C12.0739 5.97463 12.0372 5.98232 12 5.98232C11.9628 5.98232 11.9261 5.97463 11.8923 5.95979C11.8585 5.94494 11.8284 5.92327 11.804 5.89625C11.0347 5.03458 9.71378 4 7.80657 4C5.18373 4 3.02774 6.105 3.00048 8.69292C2.97712 10.9513 3.80568 13.0367 5.53635 15.0679C6.34847 16.0208 7.82085 17.545 11.2212 19.7679C11.4507 19.9188 11.7221 19.9997 12 20C12.2779 19.9998 12.5492 19.9191 12.7788 19.7683C16.1792 17.5454 17.6515 16.0213 18.4636 15.0683C20.1935 13.0375 21.0229 10.9521 20.9995 8.69333C20.9723 6.105 18.8163 4 16.1934 4C14.2862 4 12.9653 5.03375 12.196 5.89625ZM19.3996 8.70988C19.3816 7.01856 17.9591 5.6 16.1934 5.6C14.9169 5.6 13.9955 6.28248 13.3901 6.96126L13.3842 6.96783C13.2058 7.16565 12.9891 7.32023 12.751 7.42476C12.5131 7.52923 12.2572 7.58232 12 7.58232C11.7428 7.58232 11.4869 7.52923 11.249 7.42476C11.0109 7.32023 10.7942 7.16563 10.6158 6.96782L10.6104 6.96184C10.0043 6.28289 9.08276 5.6 7.80657 5.6C6.04085 5.6 4.61837 7.01865 4.60039 8.70947M19.3996 8.70988C19.4183 10.5151 18.7728 12.2378 17.2456 14.0308C16.548 14.8494 15.2135 16.2544 12.0003 18.3655C8.7864 16.254 7.45186 14.8488 6.75424 14.0302C5.22657 12.2373 4.58179 10.5144 4.60039 8.70947" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M14.9977 13.1247C14.6609 13.1246 14.3277 13.1927 14.0181 13.3249C13.7084 13.4572 13.4288 13.6509 13.1961 13.8942L7.41484 10.6415C7.52683 10.2209 7.52683 9.77842 7.41484 9.35788L13.1961 6.10515C13.6171 6.54161 14.1827 6.80961 14.7871 6.85893C15.3915 6.90825 15.9932 6.73552 16.4794 6.37309C16.9655 6.01066 17.3029 5.4834 17.4282 4.89009C17.5536 4.29678 17.4583 3.67813 17.1602 3.15004C16.8622 2.62194 16.3818 2.22064 15.8091 2.0213C15.2364 1.82197 14.6106 1.83829 14.0491 2.0672C13.4875 2.29611 13.0287 2.7219 12.7586 3.26481C12.4885 3.80773 12.4256 4.4305 12.5816 5.01648L6.80039 8.26921C6.45505 7.90915 6.00989 7.66064 5.52216 7.55566C5.03443 7.45067 4.52644 7.49402 4.06355 7.68012C3.60066 7.86622 3.20404 8.18655 2.9247 8.59992C2.64536 9.01329 2.49609 9.50078 2.49609 9.99968C2.49609 10.4986 2.64536 10.9861 2.9247 11.3994C3.20404 11.8128 3.60066 12.1331 4.06355 12.3192C4.52644 12.5053 5.03443 12.5487 5.52216 12.4437C6.00989 12.3387 6.45505 12.0902 6.80039 11.7301L12.5816 14.9829C12.4476 15.4875 12.4749 16.0215 12.6598 16.5098C12.8446 16.9981 13.1777 17.4163 13.6124 17.7056C14.047 17.995 14.5613 18.141 15.0831 18.1232C15.605 18.1054 16.1081 17.9247 16.522 17.6063C16.9359 17.288 17.2397 16.8481 17.3908 16.3483C17.542 15.8485 17.5328 15.314 17.3647 14.8197C17.1966 14.3253 16.8779 13.8961 16.4534 13.5921C16.0288 13.2881 15.5198 13.1246 14.9977 13.1247Z" })));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24", stroke: 'currentColor', fill: 'currentColor' }, props),
        React.createElement("path", { d: "M12 5.70173C7.35887 5.76011 2.80536 10.251 1.19995 12.0388C2.82968 13.8875 7.41725 18.3308 12 18.3016C16.5827 18.2724 21.0486 13.8631 22.8 12.0388C21.0729 10.2023 16.641 5.64335 12 5.70173Z", fill: 'none', strokeWidth: "1.25" }),
        React.createElement("path", { d: "M16.5913 12.0757C16.5913 14.6524 14.5025 16.7412 11.9258 16.7412C9.34909 16.7412 7.26025 14.6524 7.26025 12.0757C7.26025 9.49899 9.34909 7.41016 11.9258 7.41016C14.5025 7.41016 16.5913 9.49899 16.5913 12.0757Z", fill: 'none', strokeWidth: "1.25" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.686 11.8942C11.351 11.8942 11.89 11.3551 11.89 10.6901C11.89 10.2819 11.6868 9.92107 11.3761 9.70333C11.5645 9.656 11.7617 9.63086 11.9647 9.63086C13.2947 9.63086 14.3729 10.709 14.3729 12.039C14.3729 13.3689 13.2947 14.4471 11.9647 14.4471C10.6348 14.4471 9.55664 13.3689 9.55664 12.039C9.55664 11.791 9.59412 11.5518 9.66373 11.3266C9.87638 11.6674 10.2547 11.8942 10.686 11.8942Z" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 0L12.6872 3.93837C13.0466 4.24034 13.1049 4.79112 12.8174 5.16858C12.5299 5.54604 12.0054 5.60724 11.6461 5.30527L8 2.24171L4.35394 5.30527C3.99455 5.60724 3.47015 5.54604 3.18264 5.16858C2.89513 4.79112 2.9534 4.24034 3.31278 3.93837L8 0Z" }),
        React.createElement("path", { opacity: "0.56", fillRule: "evenodd", clipRule: "evenodd", d: "M8 5.25145L12.6872 9.18983C13.0466 9.49179 13.1049 10.0426 12.8174 10.42C12.5299 10.7975 12.0054 10.8587 11.6461 10.5567L8 7.49316L4.35394 10.5567C3.99455 10.8587 3.47015 10.7975 3.18264 10.42C2.89513 10.0426 2.9534 9.49179 3.31278 9.18983L8 5.25145Z" }),
        React.createElement("path", { opacity: "0.32", fillRule: "evenodd", clipRule: "evenodd", d: "M8 10.5029L12.6872 14.4413C13.0466 14.7432 13.1049 15.294 12.8174 15.6715C12.5299 16.0489 12.0054 16.1101 11.6461 15.8082L8 12.7446L4.35394 15.8082C3.99455 16.1101 3.47015 16.0489 3.18264 15.6715C2.89513 15.294 2.9534 14.7432 3.31278 14.4413L8 10.5029Z" })));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("circle", { cx: "12", cy: "12", r: "10", fill: "#1263F1" }),
        React.createElement("path", { d: "M9.75195 21.7462L12.7508 11.25V8.25004L14.7104 2.37146C18.9167 3.55273 22.0008 7.41622 22.0008 12C22.0008 17.5229 17.5237 22 12.0008 22C11.2276 22 10.4748 21.9123 9.75195 21.7462Z", fill: "#F93B5D" }),
        React.createElement("path", { d: "M6 14.3143L15.7714 0L13.2 10.2H18.3429L8.57143 24L11.1429 14.3143H6Z", fill: "white" })));
};

var Icon$V = function (props) {
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

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.03639 4.52174C2.43652 3.52195 3.15669 2.25 4.32263 2.25H13.6733C14.8393 2.25 15.5595 3.52196 14.9596 4.52174L11.748 9.87441V13.1261C11.748 13.7717 11.3348 14.345 10.7223 14.5491L8.22233 15.3825C7.25103 15.7062 6.24799 14.9833 6.24799 13.9594V9.8744L3.03639 4.52174ZM13.6733 3.75H4.32263L7.53423 9.10266C7.6741 9.33578 7.74799 9.60254 7.74799 9.8744V13.9594L10.248 13.1261V9.8744C10.248 9.60254 10.3219 9.33578 10.4617 9.10266L13.6733 3.75Z" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.1164 20.1442C19.2324 20.2133 19.3649 20.2499 19.5 20.25C19.6247 20.25 19.7475 20.2189 19.8572 20.1594C19.9669 20.1 20.06 20.0142 20.1281 19.9097C21.8128 17.3264 22.5 15.0352 22.5 12C22.5 8.51907 21.5536 6.32298 20.1333 4.09642C20.0803 4.01331 20.0114 3.94147 19.9307 3.88497C19.8499 3.82848 19.7588 3.78845 19.6626 3.76716C19.5663 3.74588 19.4668 3.74375 19.3698 3.76092C19.2727 3.77808 19.18 3.8142 19.0969 3.8672C19.0138 3.9202 18.9419 3.98905 18.8854 4.06982C18.8289 4.15058 18.7889 4.24169 18.7676 4.33793C18.7463 4.43417 18.7442 4.53366 18.7614 4.63072C18.7785 4.72777 18.8147 4.8205 18.8677 4.9036C20.1478 6.90845 21 8.88282 21 12C21 15.1763 20.1492 17.1314 18.8723 19.0903C18.7986 19.2035 18.7567 19.3344 18.7512 19.4693C18.7457 19.6043 18.7767 19.7382 18.841 19.857C18.9053 19.9758 19.0004 20.075 19.1164 20.1442Z" }),
        React.createElement("path", { d: "M10.875 19.5C10.6354 19.5 10.402 19.4231 10.2094 19.2806C10.1987 19.2732 10.1883 19.2652 10.1784 19.2567L5.895 15.75H2.625C2.32663 15.75 2.04048 15.6315 1.8295 15.4205C1.61853 15.2095 1.5 14.9234 1.5 14.625V9.37501C1.5 9.07664 1.61853 8.79049 1.8295 8.57952C2.04048 8.36854 2.32663 8.25001 2.625 8.25001H5.89453L10.1775 4.74329C10.1874 4.73481 10.1977 4.72683 10.2084 4.71939C10.376 4.59616 10.5744 4.52179 10.7817 4.50453C10.9889 4.48728 11.1969 4.52781 11.3825 4.62164C11.5681 4.71546 11.7241 4.85891 11.8331 5.03603C11.9421 5.21316 11.9999 5.41703 12 5.62501V18.375C12 18.6734 11.8815 18.9595 11.6705 19.1705C11.4595 19.3815 11.1734 19.5 10.875 19.5Z" }),
        React.createElement("path", { d: "M15 15.75C14.872 15.75 14.7462 15.7172 14.6344 15.6548C14.5227 15.5924 14.4288 15.5024 14.3617 15.3935C14.2945 15.2845 14.2564 15.1602 14.2509 15.0323C14.2453 14.9045 14.2726 14.7773 14.3302 14.663C14.775 13.7784 15.0005 12.8817 15.0005 12C15.0005 11.0916 14.782 10.2216 14.3325 9.34079C14.2464 9.16412 14.233 8.96069 14.2954 8.77429C14.3577 8.58788 14.4907 8.4334 14.6658 8.34408C14.8409 8.25475 15.0441 8.23773 15.2316 8.29667C15.4191 8.35561 15.5759 8.4858 15.6684 8.65923C16.2277 9.75564 16.5 10.8488 16.5 12C16.5 13.1184 16.2188 14.2411 15.6703 15.337C15.6078 15.4612 15.5121 15.5656 15.3937 15.6386C15.2753 15.7115 15.139 15.7501 15 15.75Z" }),
        React.createElement("path", { d: "M17.25 18C17.1183 18 16.989 17.9654 16.8749 17.8996C16.7609 17.8338 16.6662 17.7391 16.6004 17.6251C16.5345 17.5111 16.4998 17.3817 16.4998 17.2501C16.4998 17.1184 16.5345 16.989 16.6003 16.875C17.4867 15.3324 18 14.0395 18 12C18 9.92954 17.4877 8.64564 16.6022 7.12782C16.5051 6.95618 16.4795 6.7532 16.5309 6.56282C16.5824 6.37244 16.7068 6.20999 16.8771 6.11064C17.0475 6.01128 17.2501 5.98303 17.4411 6.03198C17.6322 6.08093 17.7962 6.20316 17.8978 6.3722C18.8869 8.06767 19.5 9.60048 19.5 12C19.5 14.3639 18.8878 15.9042 17.9002 17.625C17.8343 17.7391 17.7395 17.8339 17.6254 17.8997C17.5112 17.9655 17.3818 18.0001 17.25 18Z" })));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M2.46967 3.21967C2.76256 2.92678 3.23744 2.92678 3.53033 3.21967L20.0303 19.7197C20.3232 20.0126 20.3232 20.4874 20.0303 20.7803C19.7374 21.0732 19.2626 21.0732 18.9697 20.7803L2.46967 4.28033C2.17678 3.98744 2.17678 3.51256 2.46967 3.21967Z" }),
        React.createElement("path", { d: "M11.4061 4.63406C11.219 4.53311 11.007 4.48753 10.7949 4.50264C10.5828 4.51774 10.3794 4.59292 10.2084 4.71937L10.1775 4.74328L8.84063 5.83781C8.80007 5.87099 8.76691 5.9123 8.7433 5.95908C8.71969 6.00586 8.70615 6.05707 8.70354 6.10941C8.70093 6.16174 8.70932 6.21405 8.72817 6.26294C8.74702 6.31183 8.77591 6.35623 8.81297 6.39328L11.3597 8.94C11.4121 8.9925 11.479 9.02826 11.5518 9.04276C11.6245 9.05725 11.7 9.04983 11.7685 9.02142C11.8371 8.99301 11.8957 8.9449 11.9369 8.88318C11.9781 8.82146 12.0001 8.7489 12 8.67468V5.65172C12.0021 5.44427 11.948 5.24013 11.8434 5.06096C11.7389 4.88178 11.5877 4.73426 11.4061 4.63406Z" }),
        React.createElement("path", { d: "M11.7811 15.7167L4.53234 8.46984C4.39176 8.32917 4.20106 8.25009 4.00219 8.25H2.625C2.32663 8.25 2.04048 8.36852 1.8295 8.5795C1.61853 8.79048 1.5 9.07663 1.5 9.375V14.625C1.5 14.9234 1.61853 15.2095 1.8295 15.4205C2.04048 15.6315 2.32663 15.75 2.625 15.75H5.895L10.2075 19.2802C10.3806 19.4086 10.5871 19.4844 10.8022 19.4985C11.0172 19.5125 11.2318 19.4642 11.4202 19.3594C11.5981 19.258 11.7456 19.1108 11.8476 18.9332C11.9495 18.7556 12.0021 18.554 12 18.3492V16.2464C12 16.0478 11.9213 15.8573 11.7811 15.7167Z" }),
        React.createElement("path", { d: "M16.5 12C16.5 10.8487 16.2277 9.75609 15.668 8.65922C15.6236 8.57081 15.5622 8.49205 15.4872 8.42748C15.4123 8.36292 15.3253 8.31381 15.2313 8.283C15.1373 8.25218 15.0381 8.24027 14.9395 8.24794C14.8409 8.25561 14.7448 8.28272 14.6567 8.3277C14.5686 8.37268 14.4902 8.43464 14.4262 8.51002C14.3621 8.5854 14.3136 8.67271 14.2834 8.76692C14.2532 8.86112 14.242 8.96037 14.2503 9.05894C14.2587 9.15751 14.2865 9.25345 14.332 9.34125C14.7816 10.2216 15 11.0916 15 12C15 12.125 14.9952 12.252 14.9855 12.3811C14.9815 12.4349 14.9891 12.4889 15.0079 12.5394C15.0266 12.59 15.0561 12.6359 15.0942 12.6741L15.7673 13.3472C15.816 13.3959 15.8771 13.4303 15.9439 13.4466C16.0108 13.4629 16.0809 13.4605 16.1465 13.4397C16.2121 13.4188 16.2707 13.3803 16.3158 13.3283C16.361 13.2764 16.391 13.213 16.4025 13.1452C16.4671 12.7668 16.4997 12.3838 16.5 12Z" }),
        React.createElement("path", { d: "M19.5 12C19.5 9.60093 18.8869 8.06765 17.8978 6.37218C17.7962 6.20315 17.6322 6.08092 17.4411 6.03197C17.2501 5.98301 17.0475 6.01127 16.8771 6.11062C16.7068 6.20998 16.5824 6.37243 16.5309 6.56281C16.4795 6.75318 16.5051 6.95617 16.6022 7.12781C17.4877 8.64562 18 9.92953 18 12C18 13.117 17.8458 14.01 17.5608 14.843C17.5379 14.9094 17.5341 14.9809 17.5498 15.0493C17.5656 15.1178 17.6002 15.1804 17.6498 15.2302L18.2344 15.8156C18.2786 15.8599 18.3331 15.8924 18.3931 15.9101C18.453 15.9279 18.5165 15.9304 18.5776 15.9174C18.6388 15.9044 18.6957 15.8763 18.7433 15.8357C18.7908 15.7951 18.8275 15.7432 18.8498 15.6848C19.2656 14.6137 19.5 13.4653 19.5 12Z" }),
        React.createElement("path", { d: "M20.1323 4.09641C21.5536 6.32297 22.5 8.51953 22.5 12C22.5 14.2969 22.1063 16.1672 21.1875 18.0605C21.1615 18.1148 21.1228 18.1621 21.0747 18.1983C21.0266 18.2345 20.9704 18.2586 20.911 18.2686C20.8516 18.2785 20.7907 18.274 20.7334 18.2554C20.6761 18.2368 20.6241 18.2047 20.5819 18.1617L20.0231 17.603C19.9691 17.5487 19.933 17.4791 19.9197 17.4037C19.9064 17.3283 19.9165 17.2506 19.9486 17.1811C20.6048 15.7627 21 14.1652 21 12C21 8.88281 20.1478 6.90844 18.8667 4.9036C18.7597 4.73576 18.7237 4.53228 18.7667 4.33792C18.8097 4.14356 18.9281 3.97423 19.0959 3.86719C19.2638 3.76015 19.4673 3.72416 19.6616 3.76715C19.856 3.81014 20.0253 3.92858 20.1323 4.09641Z" })));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("circle", { cx: "11.999", cy: "12.0001", r: "10", fill: "#1EBB95" }),
        React.createElement("mask", { id: "mask0_110_1525", maskUnits: "userSpaceOnUse", x: "9", y: "2", width: "15", height: "22" },
            React.createElement("path", { d: "M9.5 22L14.5 2H18L22 5L24 11.5L22 18.5L17 23.5L9.5 22Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0_110_1525)" },
            React.createElement("circle", { cx: "11.999", cy: "12.0001", r: "10", fill: "#FF1C5E" })),
        React.createElement("path", { d: "M6.08946 14.1993L14.535 2.27255L13.3031 10.4212L18.5614 10.1963L9.57151 21.7126L11.3478 13.9744L6.08946 14.1993Z", fill: "white" })));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M20.6663 6.06419L13.5075 1.90404C13.0494 1.6385 12.5293 1.49866 11.9998 1.49866C11.4703 1.49866 10.9501 1.6385 10.492 1.90404L3.33375 6.06419C3.30555 6.08074 3.28217 6.10436 3.26593 6.13273C3.24968 6.1611 3.24114 6.19322 3.24114 6.22591C3.24114 6.2586 3.24968 6.29072 3.26593 6.31909C3.28217 6.34746 3.30555 6.37109 3.33375 6.38763L11.9062 11.4304C11.9351 11.4474 11.9679 11.4564 12.0014 11.4564C12.0349 11.4564 12.0677 11.4474 12.0966 11.4304L20.6672 6.38763C20.6953 6.37101 20.7186 6.34731 20.7348 6.3189C20.751 6.29048 20.7594 6.25833 20.7593 6.22564C20.7592 6.19295 20.7506 6.16086 20.7343 6.13253C20.7179 6.10421 20.6945 6.08065 20.6663 6.06419ZM12 7.12497C11.3789 7.12497 10.875 6.78935 10.875 6.37497C10.875 5.9606 11.3789 5.62497 12 5.62497C12.6211 5.62497 13.125 5.9606 13.125 6.37497C13.125 6.78935 12.6211 7.12497 12 7.12497ZM11.1562 12.6942L2.53125 7.6631C2.50276 7.64665 2.47044 7.63799 2.43755 7.63798C2.40465 7.63797 2.37233 7.64662 2.34383 7.66305C2.31534 7.67948 2.29166 7.70313 2.27519 7.7316C2.25872 7.76008 2.25003 7.79239 2.25 7.82529V15.9778C2.25071 16.3706 2.35424 16.7564 2.55029 17.0967C2.74634 17.4371 3.02808 17.7202 3.3675 17.9179L10.9688 22.4756C10.9972 22.492 11.0296 22.5007 11.0625 22.5007C11.0953 22.5007 11.1277 22.4921 11.1562 22.4756C11.1847 22.4592 11.2083 22.4356 11.2248 22.4071C11.2413 22.3786 11.25 22.3463 11.25 22.3134V12.8564C11.25 12.8235 11.2413 12.7912 11.2248 12.7627C11.2084 12.7343 11.1847 12.7106 11.1562 12.6942ZM4.5 17.25C4.08562 17.25 3.75 16.7461 3.75 16.125C3.75 15.5039 4.08562 15 4.5 15C4.91438 15 5.25 15.5039 5.25 16.125C5.25 16.7461 4.91438 17.25 4.5 17.25ZM9 15.75C8.58563 15.75 8.25 15.2461 8.25 14.625C8.25 14.0039 8.58563 13.5 9 13.5C9.41437 13.5 9.75 14.0039 9.75 14.625C9.75 15.2461 9.41437 15.75 9 15.75ZM21.4688 7.66451L12.8438 12.7293C12.8153 12.7457 12.7917 12.7693 12.7753 12.7977C12.7588 12.8261 12.7501 12.8583 12.75 12.8911V22.3125C12.75 22.3454 12.7587 22.3777 12.7752 22.4062C12.7917 22.4346 12.8153 22.4583 12.8438 22.4747C12.8723 22.4911 12.9047 22.4998 12.9375 22.4998C12.9704 22.4998 13.0028 22.4911 13.0312 22.4747L20.632 17.917C20.9714 17.7194 21.2531 17.4365 21.4493 17.0963C21.6454 16.7561 21.7491 16.3705 21.75 15.9778V7.8281C21.7502 7.79508 21.7417 7.7626 21.7253 7.73392C21.709 7.70525 21.6853 7.68141 21.6568 7.66481C21.6282 7.64821 21.5958 7.63944 21.5628 7.63938C21.5298 7.63933 21.4973 7.648 21.4688 7.66451ZM15 19.875C14.5856 19.875 14.25 19.3711 14.25 18.75C14.25 18.1289 14.5856 17.625 15 17.625C15.4144 17.625 15.75 18.1289 15.75 18.75C15.75 19.3711 15.4144 19.875 15 19.875ZM15 15.75C14.5856 15.75 14.25 15.2461 14.25 14.625C14.25 14.0039 14.5856 13.5 15 13.5C15.4144 13.5 15.75 14.0039 15.75 14.625C15.75 15.2461 15.4144 15.75 15 15.75ZM19.5 17.25C19.0856 17.25 18.75 16.7461 18.75 16.125C18.75 15.5039 19.0856 15 19.5 15C19.9144 15 20.25 15.5039 20.25 16.125C20.25 16.7461 19.9144 17.25 19.5 17.25ZM19.5 13.125C19.0856 13.125 18.75 12.6211 18.75 12C18.75 11.3789 19.0856 10.875 19.5 10.875C19.9144 10.875 20.25 11.3789 20.25 12C20.25 12.6211 19.9144 13.125 19.5 13.125Z", fill: "white" })));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.1345 7.85614C5.157 7.63937 5.07225 7.42555 4.90725 7.28006L3.22725 5.29612V5H8.44575L12.4792 13.6669L16.0253 5H21V5.29612L19.563 6.64593C19.4392 6.73852 19.3778 6.89062 19.4033 7.04125V16.9595C19.3778 17.1094 19.4392 17.2615 19.563 17.3541L20.9662 18.7039V19H13.9073V18.7039L15.3615 17.321C15.504 17.1814 15.504 17.1402 15.504 16.9264V8.90983L11.4622 18.9677H10.9163L6.21 8.90983V15.6508C6.171 15.9337 6.267 16.2195 6.47025 16.4238L8.361 18.6708V18.9677H3V18.6708L4.89075 16.4238C5.09325 16.2188 5.18325 15.9315 5.1345 15.6508V7.85614V7.85614Z" })));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.8252 5.34998C20.6819 5.58331 21.3574 6.26665 21.588 7.13332C22.0164 8.71666 21.9999 12.0167 21.9999 12.0167C21.9999 12.0167 21.9999 15.3 21.588 16.8834C21.3574 17.75 20.6819 18.4334 19.8252 18.6667C18.2602 19.0834 11.9999 19.0834 11.9999 19.0834C11.9999 19.0834 5.75606 19.0834 4.17451 18.65C3.31784 18.4167 2.64238 17.7334 2.41174 16.8667C1.99988 15.3 1.99988 12 1.99988 12C1.99988 12 1.99988 8.71666 2.41174 7.13332C2.64238 6.26665 3.33431 5.56664 4.17451 5.33331C5.73958 4.91664 11.9999 4.91664 11.9999 4.91664C11.9999 4.91664 18.2602 4.91664 19.8252 5.34998ZM10.0064 8.96666L15.2123 12L10.0064 15.0334V8.96666Z" })));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 13.125C14.445 13.125 16.605 13.71 18.36 14.475C19.98 15.195 21 16.815 21 18.57V19.5C21 20.325 20.325 21 19.5 21H4.5C3.675 21 3 20.325 3 19.5V18.585C3 16.815 4.02 15.195 5.64 14.49C7.395 13.71 9.555 13.125 12 13.125ZM12 3C14.49 3 16.5 5.01 16.5 7.5C16.5 9.99 14.49 12 12 12C9.51 12 7.5 9.99 7.5 7.5C7.5 5.01 9.51 3 12 3Z" })));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("path", { d: "M8 1.75C4.55375 1.75 1.75 4.55375 1.75 8C1.75 11.4462 4.55375 14.25 8 14.25C11.4462 14.25 14.25 11.4462 14.25 8C14.25 4.55375 11.4462 1.75 8 1.75ZM8 4.3125C8.1607 4.3125 8.31779 4.36015 8.4514 4.44943C8.58502 4.53871 8.68916 4.6656 8.75065 4.81407C8.81215 4.96253 8.82824 5.1259 8.79689 5.28351C8.76554 5.44112 8.68815 5.58589 8.57452 5.69952C8.46089 5.81315 8.31612 5.89054 8.15851 5.92189C8.0009 5.95324 7.83753 5.93715 7.68907 5.87565C7.5406 5.81416 7.41371 5.71002 7.32443 5.5764C7.23515 5.44279 7.1875 5.2857 7.1875 5.125C7.1875 4.90951 7.2731 4.70285 7.42548 4.55048C7.57785 4.3981 7.78451 4.3125 8 4.3125V4.3125ZM9.5 11.375H6.75C6.61739 11.375 6.49021 11.3223 6.39645 11.2286C6.30268 11.1348 6.25 11.0076 6.25 10.875C6.25 10.7424 6.30268 10.6152 6.39645 10.5214C6.49021 10.4277 6.61739 10.375 6.75 10.375H7.625V7.625H7.125C6.99239 7.625 6.86521 7.57232 6.77145 7.47855C6.67768 7.38479 6.625 7.25761 6.625 7.125C6.625 6.99239 6.67768 6.86521 6.77145 6.77145C6.86521 6.67768 6.99239 6.625 7.125 6.625H8.125C8.25761 6.625 8.38479 6.67768 8.47855 6.77145C8.57232 6.86521 8.625 6.99239 8.625 7.125V10.375H9.5C9.63261 10.375 9.75979 10.4277 9.85355 10.5214C9.94732 10.6152 10 10.7424 10 10.875C10 11.0076 9.94732 11.1348 9.85355 11.2286C9.75979 11.3223 9.63261 11.375 9.5 11.375Z" })));
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.00004 20.1667C5.00004 21.45 6.05004 22.5 7.33337 22.5H16.6667C17.95 22.5 19 21.45 19 20.1667V6.16667H5.00004V20.1667ZM8.69837 12.6883C8.48023 12.4702 8.35768 12.1743 8.35768 11.8658C8.35768 11.5573 8.48023 11.2615 8.69837 11.0433C8.91651 10.8252 9.21238 10.7026 9.52087 10.7026C9.82937 10.7026 10.1252 10.8252 10.3434 11.0433L12 12.6883L13.645 11.0433C13.8632 10.8252 14.159 10.7026 14.4675 10.7026C14.776 10.7026 15.0719 10.8252 15.29 11.0433C15.5082 11.2615 15.6307 11.5573 15.6307 11.8658C15.6307 12.1743 15.5082 12.4702 15.29 12.6883L13.645 14.3333L15.29 15.9783C15.3981 16.0863 15.4837 16.2146 15.5422 16.3557C15.6006 16.4968 15.6307 16.6481 15.6307 16.8008C15.6307 16.9536 15.6006 17.1048 15.5422 17.246C15.4837 17.3871 15.3981 17.5153 15.29 17.6233C15.182 17.7313 15.0538 17.817 14.9127 17.8755C14.7715 17.9339 14.6203 17.964 14.4675 17.964C14.3148 17.964 14.1635 17.9339 14.0224 17.8755C13.8813 17.817 13.7531 17.7313 13.645 17.6233L12 15.9783L10.355 17.6233C10.247 17.7313 10.1188 17.817 9.97767 17.8755C9.83655 17.9339 9.68529 17.964 9.53254 17.964C9.37979 17.964 9.22853 17.9339 9.08741 17.8755C8.94628 17.817 8.81805 17.7313 8.71004 17.6233C8.60203 17.5153 8.51635 17.3871 8.45789 17.246C8.39944 17.1048 8.36935 16.9536 8.36935 16.8008C8.36935 16.6481 8.39944 16.4968 8.45789 16.3557C8.51635 16.2146 8.60203 16.0863 8.71004 15.9783L10.355 14.3333L8.69837 12.6883ZM19 2.66667H16.0834L15.255 1.83833C15.045 1.62833 14.7417 1.5 14.4384 1.5H9.56171C9.25837 1.5 8.95504 1.62833 8.74504 1.83833L7.91671 2.66667H5.00004C4.35837 2.66667 3.83337 3.19167 3.83337 3.83333C3.83337 4.475 4.35837 5 5.00004 5H19C19.6417 5 20.1667 4.475 20.1667 3.83333C20.1667 3.19167 19.6417 2.66667 19 2.66667Z" })));
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 31 31" }, props),
        React.createElement("path", { d: "M27.7419 2.38833C27.5502 2.19666 27.3071 2.06449 27.042 2.00773C26.777 1.95097 26.5011 1.97204 26.2477 2.06841L2.80847 10.9401H2.80378C2.53352 11.044 2.30194 11.2289 2.14066 11.4694C1.97939 11.7098 1.89628 11.9943 1.90269 12.2837C1.9091 12.5732 2.00472 12.8537 2.17648 13.0868C2.34824 13.3199 2.58778 13.4943 2.86237 13.5862L2.8864 13.5938L10.9313 17.0292C11.0882 17.0768 11.2549 17.0824 11.4147 17.0455C11.5744 17.0086 11.7217 16.9304 11.8419 16.8188L24.7536 4.78775C24.7921 4.74927 24.8377 4.71875 24.888 4.69793C24.9383 4.67711 24.9921 4.66639 25.0466 4.66639C25.101 4.66639 25.1548 4.67711 25.2051 4.69793C25.2554 4.71875 25.301 4.74927 25.3395 4.78775C25.378 4.82622 25.4085 4.87189 25.4293 4.92216C25.4502 4.97243 25.4609 5.02631 25.4609 5.08071C25.4609 5.13512 25.4502 5.189 25.4293 5.23927C25.4085 5.28954 25.378 5.33521 25.3395 5.37368L13.3079 18.2795C13.1962 18.3997 13.1181 18.547 13.0812 18.7067C13.0443 18.8665 13.0499 19.0332 13.0975 19.1901L16.5341 27.2397C16.5376 27.2514 16.5411 27.262 16.5452 27.2731C16.7327 27.8163 17.2073 28.1995 17.7809 28.2252H17.8395C18.1291 28.2269 18.4125 28.1414 18.6528 27.9798C18.8932 27.8183 19.0794 27.5882 19.1872 27.3194L28.0577 3.88657C28.1554 3.63303 28.1776 3.35659 28.1216 3.0907C28.0655 2.82481 27.9336 2.58085 27.7419 2.38833Z" })));
};

var Icon$I = function (props) {
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

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.25 12C2.25 6.62391 6.62391 2.25 12 2.25C17.3761 2.25 21.75 6.62391 21.75 12C21.75 17.3761 17.3761 21.75 12 21.75C6.62391 21.75 2.25 17.3761 2.25 12ZM14.9827 7.36258L14.7941 7.55032L16.8686 9.62479L17.0567 9.43581C17.2093 9.28164 17.2949 9.07353 17.2949 8.85666C17.2949 8.63979 17.2093 8.43167 17.0567 8.27751L16.146 7.36258C15.9916 7.20866 15.7825 7.12222 15.5644 7.12222C15.3463 7.12222 15.1371 7.20866 14.9827 7.36258ZM8.28536 14.0278L14.0853 8.25573L16.1629 10.3334L10.3887 16.1322C10.2889 16.2323 10.165 16.3051 10.029 16.3435L7.7545 17.1075C7.69274 17.1258 7.62718 17.1271 7.56474 17.1112C7.5023 17.0954 7.44529 17.063 7.39974 17.0174C7.35419 16.9719 7.32178 16.9149 7.30592 16.8525C7.29007 16.7901 7.29137 16.7246 7.30968 16.6628L8.07393 14.3874C8.11237 14.2514 8.18518 14.1276 8.28536 14.0278Z" })));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 1.875C5.51289 1.875 1.875 5.51289 1.875 10C1.875 14.4871 5.51289 18.125 10 18.125C14.4871 18.125 18.125 14.4871 18.125 10C18.125 5.51289 14.4871 1.875 10 1.875ZM13.75 11.25H10C9.83424 11.25 9.67527 11.1842 9.55806 11.0669C9.44085 10.9497 9.375 10.7908 9.375 10.625V5C9.375 4.83424 9.44085 4.67527 9.55806 4.55806C9.67527 4.44085 9.83424 4.375 10 4.375C10.1658 4.375 10.3247 4.44085 10.4419 4.55806C10.5592 4.67527 10.625 4.83424 10.625 5V10H13.75C13.9158 10 14.0747 10.0658 14.1919 10.1831C14.3092 10.3003 14.375 10.4592 14.375 10.625C14.375 10.7908 14.3092 10.9497 14.1919 11.0669C14.0747 11.1842 13.9158 11.25 13.75 11.25Z" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 1.875C5.51992 1.875 1.875 5.51992 1.875 10C1.875 14.4801 5.51992 18.125 10 18.125C14.4801 18.125 18.125 14.4801 18.125 10C18.125 5.51992 14.4801 1.875 10 1.875ZM13.125 10.625H10.625V13.125C10.625 13.2908 10.5592 13.4497 10.4419 13.5669C10.3247 13.6842 10.1658 13.75 10 13.75C9.83424 13.75 9.67527 13.6842 9.55806 13.5669C9.44085 13.4497 9.375 13.2908 9.375 13.125V10.625H6.875C6.70924 10.625 6.55027 10.5592 6.43306 10.4419C6.31585 10.3247 6.25 10.1658 6.25 10C6.25 9.83424 6.31585 9.67527 6.43306 9.55806C6.55027 9.44085 6.70924 9.375 6.875 9.375H9.375V6.875C9.375 6.70924 9.44085 6.55027 9.55806 6.43306C9.67527 6.31585 9.83424 6.25 10 6.25C10.1658 6.25 10.3247 6.31585 10.4419 6.43306C10.5592 6.55027 10.625 6.70924 10.625 6.875V9.375H13.125C13.2908 9.375 13.4497 9.44085 13.5669 9.55806C13.6842 9.67527 13.75 9.83424 13.75 10C13.75 10.1658 13.6842 10.3247 13.5669 10.4419C13.4497 10.5592 13.2908 10.625 13.125 10.625Z" })));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 33 31" }, props),
        React.createElement("path", { d: "M16.7174 0L20.5377 11.7579H32.9007L22.8989 19.0247L26.7192 30.7826L16.7174 23.5158L6.7155 30.7826L10.5359 19.0247L0.534004 11.7579H12.897L16.7174 0Z" })));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 0.25C4.62391 0.25 0.25 4.62391 0.25 10C0.25 15.3761 4.62391 19.75 10 19.75C15.3761 19.75 19.75 15.3761 19.75 10C19.75 4.62391 15.3761 0.25 10 0.25ZM15.0742 6.73234L8.77422 14.2323C8.70511 14.3147 8.61912 14.3812 8.52207 14.4273C8.42502 14.4735 8.31918 14.4983 8.21172 14.5H8.19906C8.09394 14.5 7.99 14.4778 7.89398 14.435C7.79797 14.3922 7.71202 14.3297 7.64172 14.2516L4.94172 11.2516C4.87315 11.1788 4.81981 11.0931 4.78483 10.9995C4.74986 10.9059 4.73395 10.8062 4.73805 10.7063C4.74215 10.6064 4.76617 10.5084 4.8087 10.4179C4.85124 10.3275 4.91142 10.2464 4.98572 10.1796C5.06002 10.1127 5.14694 10.0614 5.24136 10.0286C5.33579 9.99578 5.43581 9.98219 5.53556 9.98861C5.63531 9.99502 5.73277 10.0213 5.82222 10.0659C5.91166 10.1106 5.99128 10.1726 6.05641 10.2484L8.17938 12.6072L13.9258 5.76766C14.0547 5.61863 14.237 5.52631 14.4335 5.51066C14.6299 5.49501 14.8246 5.55728 14.9754 5.68402C15.1263 5.81075 15.2212 5.99176 15.2397 6.18793C15.2582 6.3841 15.1988 6.57966 15.0742 6.73234Z", fill: "#1EBB95" })));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 0.25C4.62391 0.25 0.25 4.62391 0.25 10C0.25 15.3761 4.62391 19.75 10 19.75C15.3761 19.75 19.75 15.3761 19.75 10C19.75 4.62391 15.3761 0.25 10 0.25ZM13.5302 12.4698C13.6027 12.5388 13.6608 12.6216 13.7008 12.7133C13.7409 12.805 13.7622 12.9039 13.7635 13.004C13.7648 13.1041 13.746 13.2034 13.7083 13.2961C13.6706 13.3889 13.6147 13.4731 13.5439 13.5439C13.4731 13.6147 13.3889 13.6706 13.2961 13.7083C13.2034 13.746 13.1041 13.7648 13.004 13.7635C12.9039 13.7622 12.805 13.7409 12.7133 13.7008C12.6216 13.6608 12.5388 13.6027 12.4698 13.5302L10 11.0608L7.53016 13.5302C7.38836 13.6649 7.19955 13.7389 7.00398 13.7364C6.8084 13.7339 6.62155 13.6551 6.48325 13.5168C6.34495 13.3785 6.26614 13.1916 6.26364 12.996C6.26114 12.8005 6.33513 12.6116 6.46984 12.4698L8.93922 10L6.46984 7.53016C6.33513 7.38836 6.26114 7.19955 6.26364 7.00398C6.26614 6.8084 6.34495 6.62155 6.48325 6.48325C6.62155 6.34495 6.8084 6.26614 7.00398 6.26364C7.19955 6.26114 7.38836 6.33513 7.53016 6.46984L10 8.93922L12.4698 6.46984C12.6116 6.33513 12.8005 6.26114 12.996 6.26364C13.1916 6.26614 13.3785 6.34495 13.5168 6.48325C13.6551 6.62155 13.7339 6.8084 13.7364 7.00398C13.7389 7.19955 13.6649 7.38836 13.5302 7.53016L11.0608 10L13.5302 12.4698Z", fill: "#FF1C5E" })));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M7.23445 20.6251C6.94665 20.6245 6.66394 20.5491 6.41414 20.4062C5.85164 20.0874 5.50195 19.4687 5.50195 18.797V5.20321C5.50195 4.52961 5.85164 3.91274 6.41414 3.59399C6.66989 3.44701 6.96043 3.37142 7.25539 3.37513C7.55034 3.37884 7.83889 3.46171 8.09086 3.61508L19.7088 10.5695C19.951 10.7213 20.1506 10.9321 20.2889 11.1822C20.4273 11.4322 20.4999 11.7134 20.4999 11.9991C20.4999 12.2849 20.4273 12.566 20.2889 12.8161C20.1506 13.0662 19.951 13.277 19.7088 13.4288L8.08898 20.3851C7.83112 20.541 7.53577 20.6239 7.23445 20.6251Z" })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10.0013 18.3326C14.6037 18.3326 18.3346 14.6017 18.3346 9.99933C18.3346 5.39697 14.6037 1.66602 10.0013 1.66602C5.39893 1.66602 1.66797 5.39697 1.66797 9.99933C1.66797 14.6017 5.39893 18.3326 10.0013 18.3326Z", fill: "white" }),
        React.createElement("path", { d: "M16.4564 4.80078C15.8785 4.91503 15.3274 5.07632 14.8738 5.17712C13.8388 5.40898 12.8711 6.20199 12.6594 7.6536C12.4712 8.95064 12.908 9.50843 12.7165 11.0172C12.3805 13.6516 9.85362 14.5588 8.67418 15.1099C7.99206 15.4258 6.33547 16.1516 5.05859 16.706C6.443 17.7275 8.14999 18.3323 10.0015 18.3323C14.605 18.3323 18.3348 14.6025 18.3348 9.99902C18.3348 8.03666 17.656 6.23223 16.5203 4.81086C16.5001 4.8075 16.48 4.80414 16.4564 4.80078Z", fill: "url(#paint0_linear_2072_6785)" }),
        React.createElement("path", { d: "M9.06379 8.77622C9.70559 7.38845 9.47374 7.38509 9.96097 6.08133C10.5759 4.42811 12.4878 4.89854 13.0154 4.9691C13.8857 5.08671 14.1142 4.77757 15.9489 4.48187C16.0396 4.46843 16.127 4.45499 16.2143 4.44491C14.6888 2.74128 12.471 1.66602 10.0013 1.66602C6.68476 1.66602 3.82186 3.6015 2.48114 6.40727C5.22979 7.08939 8.19686 8.57124 9.06379 8.77622ZM7.24256 3.11763C7.48449 3.15459 8.66057 4.61628 8.88234 8.36963C8.88234 8.36963 7.37025 8.00673 7.04431 7.22716C6.77549 6.58536 7.12495 5.74195 7.24256 3.11763ZM16.5067 4.79437C16.51 4.80109 16.5167 4.80445 16.5201 4.81117C16.4999 4.80781 16.4764 4.80781 16.4563 4.80445C16.4731 4.79773 16.4899 4.79773 16.5067 4.79437ZM1.66797 9.99933C1.66797 9.33401 1.74525 8.68885 1.8931 8.07057C2.19552 8.32259 2.5181 8.60148 2.86084 8.9207C5.03154 10.9335 8.56312 12.5228 9.85008 11.0444C9.85344 11.0477 9.8568 11.0477 9.8568 11.0511C9.62159 11.3602 8.72441 12.338 7.0107 12.0356L4.30237 16.0779C2.68275 14.5591 1.66797 12.3985 1.66797 9.99933Z", fill: "url(#paint1_linear_2072_6785)" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear_2072_6785", x1: "15.006", y1: "6.98339", x2: "13.04", y2: "17.8143", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#FF496A" }),
                React.createElement("stop", { offset: "1", stopColor: "#E42648" })),
            React.createElement("linearGradient", { id: "paint1_linear_2072_6785", x1: "5.69021", y1: "13.9415", x2: "10.037", y2: "1.66601", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { offset: "0.00181229", stopColor: "#1158F1" }),
                React.createElement("stop", { offset: "1", stopColor: "#119BED" })))));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M2 17.832V19.5C2 20.8789 5.35938 22 9.5 22C13.6406 22 17 20.8789 17 19.5V17.832C15.3867 18.9688 12.4375 19.5 9.5 19.5C6.5625 19.5 3.61328 18.9688 2 17.832ZM14.5 7C18.6406 7 22 5.87891 22 4.5C22 3.12109 18.6406 2 14.5 2C10.3594 2 7 3.12109 7 4.5C7 5.87891 10.3594 7 14.5 7ZM2 13.7344V15.75C2 17.1289 5.35938 18.25 9.5 18.25C13.6406 18.25 17 17.1289 17 15.75V13.7344C15.3867 15.0625 12.4336 15.75 9.5 15.75C6.56641 15.75 3.61328 15.0625 2 13.7344ZM18.25 14.1641C20.4883 13.7305 22 12.9258 22 12V10.332C21.0938 10.9727 19.7617 11.4102 18.25 11.6797V14.1641ZM9.5 8.25C5.35938 8.25 2 9.64844 2 11.375C2 13.1016 5.35938 14.5 9.5 14.5C13.6406 14.5 17 13.1016 17 11.375C17 9.64844 13.6406 8.25 9.5 8.25ZM18.0664 10.4492C20.4102 10.0273 22 9.19922 22 8.25V6.58203C20.6133 7.5625 18.2305 8.08984 15.7227 8.21484C16.875 8.77344 17.7227 9.52344 18.0664 10.4492Z" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.5358 18.4866C19.2402 18.4866 19.8112 17.9156 19.8112 17.2113C19.8112 16.5069 19.2402 15.9359 18.5358 15.9359C17.8315 15.9359 17.2605 16.5069 17.2605 17.2113C17.2605 17.9156 17.8315 18.4866 18.5358 18.4866ZM18.5358 19.8682C20.0032 19.8682 21.1928 18.6786 21.1928 17.2113C21.1928 15.7439 20.0032 14.5543 18.5358 14.5543C17.0685 14.5543 15.8789 15.7439 15.8789 17.2113C15.8789 18.6786 17.0685 19.8682 18.5358 19.8682Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.31384 17.7426C7.48774 17.7426 8.43938 16.791 8.43938 15.6171C8.43938 14.4432 7.48774 13.4915 6.31384 13.4915C5.13993 13.4915 4.18829 14.4432 4.18829 15.6171C4.18829 16.791 5.13993 17.7426 6.31384 17.7426ZM6.31384 19.8681C8.66165 19.8681 10.5649 17.9649 10.5649 15.6171C10.5649 13.2692 8.66165 11.366 6.31384 11.366C3.96602 11.366 2.06274 13.2692 2.06274 15.6171C2.06274 17.9649 3.96602 19.8681 6.31384 19.8681Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.2103 7.49462C13.3866 7.24265 13.6854 7.10558 13.9914 7.13619L18.1624 7.55329C18.9773 7.63478 19.5979 8.32054 19.5979 9.13954V13.2399C19.2782 13.1598 18.9436 13.1173 18.599 13.1173C16.7044 13.1173 15.1099 14.4024 14.6397 16.1485H12.0741C12.0904 15.9729 12.0987 15.7949 12.0987 15.6149C12.0987 13.3921 10.8264 11.4664 8.97021 10.5266V10.4084L10.9711 9.96377C11.3602 9.87731 11.7027 9.64826 11.9313 9.32176L13.2103 7.49462ZM17.1109 15.8073L17.9979 15.2568C17.6555 15.3617 17.3512 15.5539 17.1109 15.8073Z" }),
        React.createElement("path", { d: "M3.12549 8.70906C3.12549 8.41558 3.3634 8 3.65687 8H6.31381C6.90076 8 7.37658 8.65349 7.37658 9.24045V9.77183H3.65687C3.3634 9.77183 3.12549 9.53392 3.12549 9.24045V8.70906Z" }),
        React.createElement("path", { d: "M9.57983 7.32788L12.7196 4.00004L13.4148 4.65599L10.2751 7.98383L9.57983 7.32788Z" }),
        React.createElement("path", { d: "M12.166 5.97961L14.4851 8.16761L13.8287 8.86333L11.5096 6.67533L12.166 5.97961Z" })));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.4319 12.8431C16.6324 13.641 14.2935 15.9799 14.2935 15.9799C14.2935 15.9799 14.8442 18.7296 13.37 20.6252C13.2005 20.8432 12.8811 20.8417 12.6858 20.6464L3.35353 11.3141C3.15827 11.1189 3.15678 10.7993 3.375 10.6301C5.2718 9.15946 8.03072 9.73667 8.03072 9.73667C8.03072 9.73667 9.28083 8.44477 11.1568 6.56878C13.666 4.05872 18.6861 5.31375 18.6861 5.31375C18.6861 5.31375 19.9411 10.3339 17.4319 12.8431ZM7.89146 18.5407C6.25305 20.1791 3.79543 20.1791 3.79543 20.1791C3.79543 20.1791 3.79543 16.9023 5.43384 16.0831L7.89146 18.5407ZM13.975 10.0251C14.5608 10.6109 15.5105 10.6109 16.0963 10.0251C16.6821 9.43933 16.6821 8.48958 16.0963 7.90379C15.5105 7.318 14.5608 7.318 13.975 7.90379C13.3892 8.48958 13.3892 9.43933 13.975 10.0251Z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "24", height: "24" })))));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.9949 0.1271C15.7004 -0.0405764 15.3393 -0.0405762 15.0449 0.1271L7.52475 4.40914C7.22494 4.57986 7.03979 4.89833 7.03979 5.24334V13.7845C7.03979 14.1295 7.22494 14.448 7.52475 14.6187L15.0449 18.9008C15.3393 19.0684 15.7004 19.0684 15.9949 18.9008L23.515 14.6187C23.8148 14.448 23.9999 14.1295 23.9999 13.7845V5.24334C23.9999 4.89833 23.8148 4.57986 23.515 4.40914L15.9949 0.1271ZM9.87568 8.76056V11.6853H8.77848V6.97803H9.73724L11.9801 9.8993V6.97803H13.0773V11.6853H12.1289L9.87915 8.76056H9.87568ZM15.6329 9.95121V11.6853H14.5357V6.97803H17.855V7.95409H15.6329V9.03399H17.5401V9.95121H15.6329ZM21.089 7.95409V11.6853H19.9988V7.95409H18.68V6.97803H22.4043V7.95409H21.089Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.59476 10.5629C2.38355 10.989 0 12.5649 0 14.4452C0 16.653 3.28694 18.4411 7.33948 18.4411C8.50167 18.4411 9.60076 18.2941 10.5774 18.0324L6.09473 15.4441C5.78535 15.2654 5.59476 14.9353 5.59476 14.5781V10.5629ZM11.8673 18.7772C10.6202 19.3102 9.04821 19.6279 7.33948 19.6279C3.29727 19.6279 0.0187879 17.8593 0 15.6608V17.2247C0 19.4325 3.28506 21.2206 7.33948 21.2206C9.77296 21.2206 11.9293 20.5764 13.2645 19.584L11.8673 18.7772ZM14.0468 20.0357C12.9035 21.4335 10.331 22.4074 7.33948 22.4074C3.29727 22.4074 0.0187879 20.6387 0 18.4402V20.0041C0 22.2119 3.28506 24 7.33948 24C11.1598 24 14.2971 22.4124 14.6466 20.382L14.0468 20.0357Z" })));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.4545 8.25C14.4545 7.09625 14.0455 6.03187 13.3664 5.195C13.71 5.08125 14.07 5 14.4545 5C16.2627 5 17.7273 6.45438 17.7273 8.25C17.7273 10.0456 16.2627 11.5 14.4545 11.5C14.1027 11.5 13.7673 11.4269 13.4482 11.3294C13.4236 11.3212 13.3991 11.3131 13.3664 11.305C14.0704 10.4403 14.4545 9.36199 14.4545 8.25ZM15.8127 12.4181C16.9336 13.1737 17.7273 14.1975 17.7273 15.5625V18H21V15.5625C21 13.7913 18.0709 12.7431 15.8127 12.4181ZM9.54545 5C11.3536 5 12.8182 6.45438 12.8182 8.25C12.8182 10.0456 11.3536 11.5 9.54545 11.5C7.73727 11.5 6.27273 10.0456 6.27273 8.25C6.27273 6.45438 7.73727 5 9.54545 5ZM9.54545 12.3125C11.73 12.3125 16.0909 13.4012 16.0909 15.5625V18H3V15.5625C3 13.4012 7.36091 12.3125 9.54545 12.3125Z" })));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.6173 4.74263C16.261 4.20784 15.48 4.10541 15.0033 4.5211C13.7386 5.62388 11.3953 7.56262 9.43732 8.59499C7.56606 9.58164 4.91917 10.431 3.38138 10.8828C2.75176 11.0677 2.46818 11.7616 2.80723 12.3134L3.8898 14.0754C4.16495 13.7472 4.57798 13.5386 5.03974 13.5386C5.86817 13.5386 6.53974 14.2101 6.53974 15.0386C6.53974 15.7502 6.04424 16.346 5.37946 16.4999L6.64943 18.5669C6.86213 18.9131 7.2702 19.1087 7.67914 19.0414C9.18679 18.7936 12.9209 18.0137 15.9219 16.0206C18.6184 14.2298 20.1025 12.8081 20.7632 12.099C21.0333 11.8091 21.0443 11.3863 20.8198 11.0495L19.3497 8.84326C19.0746 9.16934 18.6629 9.37647 18.2028 9.37647C17.3744 9.37647 16.7028 8.7049 16.7028 7.87647C16.7028 7.20514 17.1438 6.63682 17.752 6.44541L16.6173 4.74263ZM12.259 15.3765C13.9158 15.3765 15.259 14.0333 15.259 12.3765C15.259 10.7196 13.9158 9.37647 12.259 9.37647C10.6021 9.37647 9.25898 10.7196 9.25898 12.3765C9.25898 14.0333 10.6021 15.3765 12.259 15.3765Z" })));
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.8254 5.34984C20.682 5.58317 21.3575 6.26651 21.5881 7.13318C22.0165 8.71652 22 12.0165 22 12.0165C22 12.0165 22 15.2999 21.5881 16.8832C21.3575 17.7499 20.682 18.4332 19.8254 18.6666C18.2603 19.0832 12 19.0832 12 19.0832C12 19.0832 5.75618 19.0832 4.17463 18.6499C3.31796 18.4166 2.6425 17.7332 2.41186 16.8666C2 15.2999 2 11.9999 2 11.9999C2 11.9999 2 8.71652 2.41186 7.13318C2.6425 6.26651 3.33443 5.56651 4.17463 5.33317C5.7397 4.9165 12 4.9165 12 4.9165C12 4.9165 18.2603 4.9165 19.8254 5.34984ZM10.0065 8.96652L15.2124 11.9999L10.0065 15.0332V8.96652Z" })));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.1345 7.85614C5.157 7.63937 5.07225 7.42555 4.90725 7.28006L3.22725 5.29612V5H8.44575L12.4792 13.6669L16.0253 5H21V5.29612L19.563 6.64593C19.4392 6.73852 19.3778 6.89062 19.4032 7.04125V16.9595C19.3778 17.1094 19.4392 17.2615 19.563 17.3541L20.9662 18.7039V19H13.9073V18.7039L15.3615 17.321C15.504 17.1814 15.504 17.1402 15.504 16.9264V8.90983L11.4622 18.9677H10.9163L6.21 8.90983V15.6508C6.171 15.9337 6.267 16.2195 6.47025 16.4238L8.361 18.6708V18.9677H3V18.6708L4.89075 16.4238C5.09325 16.2188 5.18325 15.9315 5.1345 15.6508V7.85614Z" })));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M20.9822 5.07062C20.8756 6.63229 18.0143 18.2999 18.0143 18.2999C18.0143 18.2999 17.8366 18.982 17.2146 19C17.0013 19 16.717 18.982 16.3971 18.6769C15.7395 18.1204 14.2467 17.0434 12.8427 16.0562C12.7894 16.11 12.7361 16.1639 12.665 16.2177C12.3451 16.5049 11.8653 16.9178 11.3499 17.4204C11.1544 17.5999 10.9411 17.7973 10.7279 18.0127L10.7101 18.0307C10.5857 18.1563 10.4791 18.2461 10.3902 18.3179C9.69709 18.8923 9.62601 18.4076 9.62601 18.1563L9.99922 14.0457V14.0098L10.017 13.9739C10.0348 13.9201 10.0703 13.9021 10.0703 13.9021C10.0703 13.9021 17.339 7.36825 17.5345 6.66819C17.5523 6.63229 17.4989 6.59639 17.4101 6.63229C16.9302 6.79385 8.55969 12.143 7.63555 12.7354C7.58224 12.7713 7.42229 12.7533 7.42229 12.7533L3.35254 11.4071C3.35254 11.4071 2.8727 11.2096 3.03264 10.7608C3.06819 10.6711 3.1215 10.5813 3.31699 10.4557C4.22336 9.80948 19.987 4.08336 19.987 4.08336C19.987 4.08336 20.4313 3.93976 20.6979 4.02951C20.8223 4.08336 20.8934 4.13721 20.9645 4.31671C20.9822 4.38851 21 4.53212 21 4.69367C21 4.78342 20.9822 4.89112 20.9822 5.07062Z" })));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M9.99199 1.66666C5.39199 1.66666 1.66699 5.4 1.66699 10C1.66699 14.6 5.39199 18.3333 9.99199 18.3333C14.6003 18.3333 18.3337 14.6 18.3337 10C18.3337 5.4 14.6003 1.66666 9.99199 1.66666ZM15.767 6.66666H13.3087C13.042 5.625 12.6587 4.625 12.1587 3.7C13.692 4.225 14.967 5.29166 15.767 6.66666ZM10.0003 3.36666C10.692 4.36666 11.2337 5.475 11.592 6.66666H8.40866C8.76699 5.475 9.30866 4.36666 10.0003 3.36666ZM3.55033 11.6667C3.41699 11.1333 3.33366 10.575 3.33366 10C3.33366 9.425 3.41699 8.86666 3.55033 8.33333H6.36699C6.30033 8.88333 6.25033 9.43333 6.25033 10C6.25033 10.5667 6.30033 11.1167 6.36699 11.6667H3.55033ZM4.23366 13.3333H6.69199C6.95866 14.375 7.34199 15.375 7.84199 16.3C6.30866 15.775 5.03366 14.7167 4.23366 13.3333ZM6.69199 6.66666H4.23366C5.03366 5.28333 6.30866 4.225 7.84199 3.7C7.34199 4.625 6.95866 5.625 6.69199 6.66666ZM10.0003 16.6333C9.30866 15.6333 8.76699 14.525 8.40866 13.3333H11.592C11.2337 14.525 10.692 15.6333 10.0003 16.6333ZM11.9503 11.6667H8.05033C7.97533 11.1167 7.91699 10.5667 7.91699 10C7.91699 9.43333 7.97533 8.875 8.05033 8.33333H11.9503C12.0253 8.875 12.0837 9.43333 12.0837 10C12.0837 10.5667 12.0253 11.1167 11.9503 11.6667ZM12.1587 16.3C12.6587 15.375 13.042 14.375 13.3087 13.3333H15.767C14.967 14.7083 13.692 15.775 12.1587 16.3ZM13.6337 11.6667C13.7003 11.1167 13.7503 10.5667 13.7503 10C13.7503 9.43333 13.7003 8.88333 13.6337 8.33333H16.4503C16.5837 8.86666 16.667 9.425 16.667 10C16.667 10.575 16.5837 11.1333 16.4503 11.6667H13.6337Z", fill: "#749BD8" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ width: "32", height: "32", viewBox: "0 0 32 32", fill: "none" }, props),
        React.createElement("path", { d: "M0 8C0 3.58172 3.58172 0 8 0H24C28.4183 0 32 3.58172 32 8V24C32 28.4183 28.4183 32 24 32H8C3.58172 32 0 28.4183 0 24V8Z", fill: "#0E3382" }),
        React.createElement("path", { d: "M16 17.125C18.445 17.125 20.605 17.71 22.36 18.475C23.98 19.195 25 20.815 25 22.57V23.5C25 24.325 24.325 25 23.5 25H8.5C7.675 25 7 24.325 7 23.5V22.585C7 20.815 8.02 19.195 9.64 18.49C11.395 17.71 13.555 17.125 16 17.125ZM16 7C18.49 7 20.5 9.01 20.5 11.5C20.5 13.99 18.49 16 16 16C13.51 16 11.5 13.99 11.5 11.5C11.5 9.01 13.51 7 16 7Z", fill: "#749BD8" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 14 14" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { d: "M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z", fill: "#F0F0F0" }),
            React.createElement("path", { d: "M6.69566 7.00001H14C14 6.3682 13.9158 5.75614 13.7589 5.1739H6.69566V7.00001Z", fill: "#D80027" }),
            React.createElement("path", { d: "M6.69566 3.34783H12.9726C12.5441 2.6486 11.9962 2.03055 11.3574 1.52174H6.69566V3.34783Z", fill: "#D80027" }),
            React.createElement("path", { d: "M7 14C8.64743 14 10.1616 13.4306 11.3574 12.4783H2.64261C3.83835 13.4306 5.35257 14 7 14Z", fill: "#D80027" }),
            React.createElement("path", { d: "M1.02742 10.6522H12.9726C13.3166 10.0908 13.5834 9.47724 13.7589 8.82607H0.24115C0.416615 9.47724 0.683408 10.0908 1.02742 10.6522Z", fill: "#D80027" }),
            React.createElement("path", { d: "M3.24253 1.09315H3.88043L3.28707 1.52422L3.51373 2.22173L2.92039 1.79066L2.32706 2.22173L2.52284 1.61916C2.00041 2.05434 1.54252 2.56419 1.16517 3.13228H1.36957L0.991867 3.40668C0.933023 3.50484 0.876586 3.60456 0.8225 3.70576L1.00286 4.26087L0.666367 4.01639C0.582723 4.1936 0.506215 4.37481 0.437445 4.55979L0.636152 5.17141H1.36957L0.776207 5.60249L1.00286 6.3L0.409527 5.86893L0.0541133 6.12716C0.0185391 6.41312 0 6.70439 0 7H7C7 3.13403 7 2.67827 7 0C5.61717 0 4.32811 0.401133 3.24253 1.09315ZM3.51373 6.3L2.92039 5.86893L2.32706 6.3L2.55371 5.60249L1.96036 5.17141H2.69377L2.92039 4.4739L3.14702 5.17141H3.88043L3.28707 5.60249L3.51373 6.3ZM3.28707 3.56336L3.51373 4.26087L2.92039 3.82979L2.32706 4.26087L2.55371 3.56336L1.96036 3.13228H2.69377L2.92039 2.43477L3.14702 3.13228H3.88043L3.28707 3.56336ZM6.02459 6.3L5.43126 5.86893L4.83793 6.3L5.06458 5.60249L4.47122 5.17141H5.20464L5.43126 4.4739L5.65789 5.17141H6.3913L5.79794 5.60249L6.02459 6.3ZM5.79794 3.56336L6.02459 4.26087L5.43126 3.82979L4.83793 4.26087L5.06458 3.56336L4.47122 3.13228H5.20464L5.43126 2.43477L5.65789 3.13228H6.3913L5.79794 3.56336ZM5.79794 1.52422L6.02459 2.22173L5.43126 1.79066L4.83793 2.22173L5.06458 1.52422L4.47122 1.09315H5.20464L5.43126 0.395637L5.65789 1.09315H6.3913L5.79794 1.52422Z", fill: "#0052B4" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "14", height: "14", fill: "white" })))));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({}, props, { viewBox: "0 0 24 24" }),
        React.createElement("g", { clipPath: "url(#clipID)" },
            React.createElement("rect", { width: "24", height: "24", rx: "12", fill: "white" }),
            React.createElement("path", { d: "M-6 0H30V24H-6V0Z", fill: "white" }),
            React.createElement("path", { d: "M-6 0H30V12H-6V0Z", fill: "#FF0000" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clipID" },
                React.createElement("rect", { width: "24", height: "24", rx: "12", fill: "white" })))));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 14 14" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("rect", { width: "14", height: "14", rx: "7", fill: "white" }),
            React.createElement("path", { d: "M14 10H0V15H14V10Z", fill: "#D52B1E" }),
            React.createElement("path", { d: "M18 4H-5V10H18V4Z", fill: "#0039A6" }),
            React.createElement("path", { d: "M20 -1H-3V4H20V-1Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "14", height: "14", rx: "7", fill: "white" })))));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 14 14" }, props),
        React.createElement("mask", { id: "mask0vn", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "14", height: "14" },
            React.createElement("circle", { cx: "7", cy: "7", r: "7", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0vn)" },
            React.createElement("path", { d: "M17 0H-3V14H17V0Z", fill: "#DA251D" }),
            React.createElement("path", { d: "M7 2.44922L4.21804 11L11.5 5.7198H2.5L9.78196 11L7 2.44922Z", fill: "#FFFF00" }))));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 14 14" }, props),
        React.createElement("mask", { id: "maskBD", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "14", height: "14" },
            React.createElement("path", { d: "M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#maskBD)" },
            React.createElement("path", { d: "M-3.13574 0V4.63246V4.73505V9.26495V9.36754V14H18.7883V9.36754V9.26495V4.73505V4.63246V0H-3.13574Z", fill: "#2B5034" }),
            React.createElement("path", { d: "M5.54361 9.46399C7.44568 9.46399 8.98761 7.84685 8.98761 5.85199C8.98761 3.85713 7.44568 2.23999 5.54361 2.23999C3.64154 2.23999 2.09961 3.85713 2.09961 5.85199C2.09961 7.84685 3.64154 9.46399 5.54361 9.46399Z", fill: "#DB0032" }))));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 14 14" }, props),
        React.createElement("mask", { id: "maskBD", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "14", height: "14" },
            React.createElement("path", { d: "M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#maskBD)" },
            React.createElement("path", { d: "M4.69028 -0.839966H0V14H4.69028V-0.839966Z", fill: "#002395" }),
            React.createElement("path", { d: "M9.38564 -0.839966H4.69043V14H9.38564V-0.839966Z", fill: "#EEEEEE" }),
            React.createElement("path", { d: "M14.0002 -0.839966H9.38574V14H14.0002V-0.839966Z", fill: "#ED2939" }))));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 14 14" }, props),
        React.createElement("mask", { id: "maskPT", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "14", height: "14" },
            React.createElement("path", { d: "M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#maskPT)" },
            React.createElement("path", { d: "M5.30957 14V-0.196045H20.3341V14H5.30957Z", fill: "#FC0D1B" }),
            React.createElement("path", { d: "M-9.66016 14V-0.196045H5.36439V14H-9.66016Z", fill: "#009B3A" }),
            React.createElement("path", { d: "M3.34033 7.28661C3.34033 7.28661 2.34874 7.08473 2.25391 7.02417V7.3539C2.25391 7.3539 3.11935 7.60948 3.33397 7.58257L3.34033 7.28661Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.29562 7.5997C3.03447 7.5997 2.28053 7.37777 2.24862 7.36842L2.23828 7.36534V6.99829L2.2597 7.01207C2.33356 7.05885 2.9993 7.20297 3.3414 7.27261L3.35322 7.27493L3.34628 7.59676L3.33415 7.59824C3.32136 7.59953 3.30848 7.60003 3.29562 7.5997ZM2.2665 7.34238C2.3597 7.36957 3.05454 7.56954 3.29562 7.56954C3.30374 7.56954 3.31156 7.56954 3.3185 7.56954L3.32441 7.29979C3.21319 7.27697 2.42839 7.11519 2.2665 7.04833V7.34238Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.23438 6.95691C2.23438 6.95691 2.68918 7.11169 3.33971 7.21935V7.28666C3.33971 7.28666 2.35432 7.10497 2.24664 7.05785L2.23438 6.95691Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.35384 7.30452L3.33729 7.30144C3.29697 7.29399 2.34909 7.11902 2.24156 7.07178L2.23402 7.06857L2.21777 6.93542L2.23904 6.94259C2.24362 6.94422 2.7005 7.09825 3.3423 7.20445L3.35429 7.20649L3.35384 7.30452ZM2.25987 7.04689C2.38646 7.09357 3.19889 7.24513 3.32561 7.26868V7.23239C2.96198 7.17267 2.60299 7.08783 2.25131 6.97843L2.25987 7.04689Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.23926 7.31775C2.25816 7.33122 2.82804 7.49726 3.3384 7.54948L3.33204 7.62832C3.33204 7.62832 2.38579 7.46741 2.25373 7.39427L2.23926 7.31775Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.34559 7.64572L3.33083 7.64326C3.29197 7.63665 2.38058 7.48232 2.2475 7.40758L2.24144 7.4042L2.21973 7.28528L2.24794 7.30547C2.27054 7.31776 2.83008 7.48248 3.34102 7.5347L3.35491 7.53616L3.34559 7.64572ZM2.2664 7.38401C2.4054 7.45219 3.20038 7.59042 3.32005 7.61092L3.32389 7.56293C2.87911 7.51569 2.37852 7.38065 2.25857 7.34044L2.2664 7.38401Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.08691 9.24731C3.98277 9.41305 4.32222 9.47025 4.95843 9.53843L5.16863 9.61465C5.16863 9.61465 4.44113 9.63688 3.14997 9.3503L3.08691 9.24731Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.12942 9.63001C4.94448 9.63001 4.25481 9.611 3.14741 9.36511L3.14167 9.36379L3.05762 9.22656L3.08968 9.23241C4.00402 9.40167 4.33977 9.45698 4.95999 9.52353L5.24775 9.62724L5.16932 9.62973C5.16932 9.62973 5.15588 9.63001 5.12942 9.63001ZM3.15895 9.33744C4.18347 9.56449 4.84774 9.59667 5.08364 9.60078L4.95409 9.5538C4.34329 9.4887 4.00799 9.43385 3.11684 9.26929L3.15895 9.33744Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.87695 8.94714C2.87695 8.94714 3.8105 9.14421 4.43708 9.21135L4.98362 9.54284C4.98362 9.54284 3.50768 9.39055 3.06189 9.25114L2.87695 8.94714Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.04779 9.56467L4.98194 9.55792C4.96715 9.55646 3.49948 9.40389 3.05752 9.26624L3.05251 9.26476L2.8457 8.92554L2.87849 8.9324C2.88779 8.93444 3.81868 9.13019 4.43745 9.19571L4.44308 9.19761L5.04779 9.56467ZM3.07038 9.23903C3.46109 9.35853 4.62743 9.48946 4.9184 9.52093L4.4323 9.22615C3.87806 9.16645 3.07701 9.00408 2.90627 8.96869L3.07038 9.23903Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.80859 8.87085C2.80859 8.87085 3.74228 9.06805 4.3689 9.1352L4.38144 9.22488C4.38144 9.22488 3.30061 9.09936 2.85496 8.96053L2.80859 8.87085Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.3988 9.24199L4.38063 9.23994C4.36968 9.23863 3.29345 9.11268 2.8515 8.97517L2.84604 8.97341L2.78223 8.8501L2.81176 8.85637C2.82109 8.85827 3.75195 9.05402 4.37072 9.11971L4.38167 9.12103L4.3988 9.24199ZM2.8651 8.94796C3.27603 9.07435 4.22229 9.19066 4.3654 9.20791L4.35714 9.14939C3.79997 9.08869 2.9995 8.92601 2.8357 8.89238L2.8651 8.94796Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.62936 5.37122C2.62936 5.37122 2.44265 5.74219 2.44044 5.78592C2.43822 5.82969 3.12582 6.31476 3.12582 6.31476C3.12582 6.31476 3.50161 6.2687 3.50618 6.25624C3.51077 6.24381 3.50161 5.94334 3.4994 5.93119C3.49716 5.91906 2.62936 5.37122 2.62936 5.37122Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.12197 6.33024L3.11769 6.32716C2.8007 6.10377 2.42343 5.82831 2.42579 5.78516C2.42816 5.74199 2.58503 5.42645 2.61649 5.36399L2.62358 5.3501L2.63614 5.35813C3.50927 5.90979 3.51103 5.91973 3.51265 5.92866C3.51265 5.93085 3.52581 6.24363 3.51887 6.2622C3.51503 6.27231 3.5112 6.28269 3.12698 6.32979L3.12197 6.33024ZM2.63451 5.39207C2.56258 5.53543 2.45548 5.75781 2.45401 5.78707C2.47114 5.8245 2.87529 6.12029 3.12891 6.29907C3.25595 6.28342 3.45388 6.25679 3.49289 6.24596C3.49434 6.20662 3.48815 5.97884 3.48535 5.93877C3.43764 5.90217 2.9608 5.59835 2.63451 5.39207Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.41504 5.87319C2.41504 5.87319 2.86144 6.28076 3.02538 6.37058L3.17311 6.32934C3.17311 6.32934 2.6016 5.93874 2.44665 5.77637L2.41504 5.87319Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.02453 6.38636L3.01965 6.38387C2.85613 6.29432 2.42497 5.90112 2.40665 5.88457L2.39941 5.87785L2.44181 5.74866L2.45761 5.76535C2.60961 5.92495 3.17609 6.31261 3.18141 6.31641L3.2086 6.33501L3.02453 6.38636ZM2.43235 5.86847C2.49041 5.921 2.87548 6.268 3.02794 6.35447L3.13961 6.3233C3.02735 6.24591 2.60651 5.95261 2.45377 5.80309L2.43235 5.86847Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.29102 8.76424L2.44139 9.01207C2.44139 9.01207 2.76369 8.64211 3.71246 8.53151L3.56134 8.26453C3.56134 8.26453 2.85661 8.28368 2.29102 8.76424Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M2.43967 9.0364L2.27246 8.76093L2.28251 8.75245C2.84545 8.27438 3.55491 8.24979 3.562 8.24951H3.57026L3.73616 8.54413L3.71429 8.54662C2.78296 8.65532 2.45518 9.01884 2.45193 9.02251L2.43967 9.0364ZM2.31013 8.76751L2.4441 8.9884C2.51353 8.92008 2.85326 8.62107 3.68976 8.51971L3.55519 8.28053C3.47545 8.28431 2.83184 8.33127 2.31072 8.76751H2.31013Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.22656 8.7194L2.27088 8.79561C2.27088 8.79561 2.66039 8.41439 3.5799 8.30278L3.53337 8.23035C3.53337 8.23035 2.78506 8.27702 2.22656 8.7194Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M2.26872 8.81894L2.20801 8.71551L2.21849 8.70734C2.77404 8.26729 3.52546 8.21566 3.53313 8.21521H3.54111L3.60537 8.31542L3.58202 8.31836C2.67788 8.42807 2.28526 8.80343 2.28142 8.80724L2.26872 8.81894ZM2.24582 8.72313L2.27536 8.77286C2.34922 8.70835 2.74805 8.39368 3.55573 8.29011L3.52619 8.2452C3.44569 8.25253 2.76282 8.3201 2.24582 8.72313Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.39453 9.00453L2.43574 9.07299C2.43574 9.07299 2.79202 8.69936 3.74079 8.58876L3.70134 8.51562C3.70134 8.51562 2.95348 8.54679 2.39453 9.00453Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M2.43441 9.09678L2.37695 9.00093L2.38715 8.99245C2.94284 8.5372 3.69456 8.50153 3.70178 8.50122H3.71021L3.76487 8.60157L3.74331 8.60392C2.81004 8.71276 2.45007 9.08037 2.44653 9.08404L2.43441 9.09678ZM2.41462 9.00796L2.43988 9.0501C2.51167 8.9847 2.88819 8.67765 3.71892 8.57626L3.6947 8.53238C3.61123 8.53706 2.9303 8.59281 2.41462 9.00796Z", fill: "#603913" }),
            React.createElement("path", { d: "M1.875 6.76195V7.07149C1.875 7.07149 2.30455 6.79574 3.34047 6.58039V6.28418C3.34047 6.28418 2.70884 6.34474 1.875 6.76195Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M1.86035 7.09802V6.75233L1.86847 6.74838C2.69493 6.33483 3.33231 6.26987 3.33867 6.26928L3.35343 6.26782V6.59273L3.34206 6.59508C2.32121 6.80718 1.88546 7.08164 1.88118 7.08427L1.86035 7.09802ZM1.88856 6.77148V7.0458C1.98738 6.98918 2.43259 6.75468 3.32582 6.56801V6.30103C3.22432 6.3136 2.63525 6.39948 1.88856 6.77148Z", fill: "#603913" }),
            React.createElement("path", { d: "M1.84863 6.72803V6.82267C1.84863 6.82267 2.42471 6.41569 3.33331 6.30408V6.21045C3.33331 6.21045 2.44303 6.32441 1.84863 6.72803Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M1.83496 6.85015V6.72026L1.84146 6.71572C2.43128 6.31487 3.32273 6.19668 3.33174 6.19551L3.34753 6.1936V6.3175L3.33485 6.31899C2.44088 6.42883 1.86229 6.831 1.85653 6.83522L1.83496 6.85015ZM1.86332 6.73619V6.79471C1.97691 6.72157 2.52301 6.39067 3.31948 6.29001V6.22726C3.1979 6.24496 2.40425 6.3718 1.86332 6.73619Z", fill: "#603913" }),
            React.createElement("path", { d: "M1.84961 7.07702V7.17124C1.84961 7.17124 2.42347 6.75519 3.32673 6.66772L3.33295 6.56006C3.33295 6.56006 2.44327 6.67343 1.84961 7.07702Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M1.83594 7.19956V7.06878L1.84244 7.06441C2.4321 6.66342 3.32297 6.54624 3.33181 6.54479L3.34867 6.5426L3.34055 6.68112L3.32843 6.68229C2.43964 6.76831 1.86371 7.17968 1.85795 7.18332L1.83594 7.19956ZM1.86415 7.08532V7.14384C1.97789 7.0685 2.52162 6.73351 3.31381 6.65407L3.31837 6.57741C3.19282 6.59541 2.4036 6.72194 1.86415 7.08605V7.08532Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.13379 5.54563C2.13379 5.54563 2.13379 5.42741 2.15521 5.37782C2.17663 5.32824 2.1911 5.32062 2.1911 5.32062C2.1911 5.32062 2.54561 5.27484 3.32598 5.70582L3.31534 5.79724C3.31534 5.79724 2.47752 5.40064 2.17677 5.4084L2.13379 5.54563Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.32738 5.81935L3.31008 5.811C3.30182 5.8072 2.48999 5.42452 2.18747 5.42334L2.12012 5.63779V5.54565C2.12012 5.54066 2.12012 5.42348 2.14301 5.37154C2.16591 5.31963 2.18083 5.30952 2.18526 5.3072L2.18984 5.30571C2.20136 5.30445 2.21296 5.30392 2.22455 5.30412C2.31953 5.30412 2.68054 5.3322 3.3324 5.69237L3.3411 5.69718L3.32738 5.81935ZM2.186 5.39321C2.47212 5.39321 3.18069 5.71782 3.30417 5.77547L3.31128 5.71432C2.66991 5.36174 2.31761 5.33397 2.22455 5.33397C2.21067 5.33397 2.20136 5.33397 2.19678 5.33497C2.1847 5.34959 2.17517 5.36611 2.16857 5.38383C2.1639 5.39579 2.16049 5.40819 2.15838 5.42085L2.16694 5.39335L2.186 5.39321Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.46001 4.85931L2.21289 5.32831C2.21289 5.32831 2.85028 5.42368 3.33714 5.74024L3.31925 5.07289C3.31925 5.07289 2.64968 4.84788 2.46001 4.85931Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.35174 5.7674L3.32959 5.75276C2.85085 5.44162 2.21717 5.34404 2.21082 5.34314L2.19043 5.34009L2.45129 4.8446H2.45897C2.464 4.8446 2.46916 4.8446 2.47478 4.8446C2.68157 4.8446 3.29725 5.05057 3.32337 5.0592L3.33298 5.06242L3.35174 5.7674ZM2.23504 5.31668C2.34612 5.33598 2.8903 5.44072 3.32206 5.71297L3.30523 5.08392C3.22487 5.05729 2.664 4.87386 2.47478 4.87386H2.46887L2.23504 5.31668Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.44562 4.7677C2.44562 4.7677 2.39511 4.84786 2.39186 4.86251C2.38861 4.87712 2.38477 5.00732 2.38477 5.00732L2.45995 4.8587C2.45995 4.8587 2.73189 4.87334 3.30841 5.0913L3.31566 5.00352C3.31566 5.00352 2.81076 4.79828 2.44562 4.7677Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.32116 5.1124L3.30402 5.10596C2.79308 4.91332 2.51951 4.8798 2.46826 4.87499L2.36914 5.07101L2.37092 5.00737C2.37092 4.98556 2.37475 4.87571 2.37845 4.85933C2.38214 4.84293 2.41877 4.78399 2.43414 4.75926L2.43872 4.75195L2.44699 4.75268C2.81007 4.78295 3.31598 4.98791 3.32099 4.98995L3.3309 4.99404L3.32116 5.1124ZM2.45201 4.84368H2.46087C2.46368 4.84368 2.73621 4.86124 3.29635 5.07071L3.30091 5.01367C3.22898 4.98514 2.78392 4.81266 2.45304 4.78295C2.43562 4.80972 2.41988 4.83752 2.40592 4.86619C2.40459 4.87205 2.40282 4.90439 2.40134 4.94345L2.45201 4.84368Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.5957 7.28661C7.5957 7.28661 8.58729 7.08473 8.68199 7.02417V7.3539C8.68199 7.3539 7.81668 7.60948 7.60206 7.58257L7.5957 7.28661Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.63868 7.59967C7.62577 7.59978 7.61289 7.59905 7.60012 7.59749L7.588 7.59603L7.58105 7.2742L7.59287 7.27185C7.93497 7.20221 8.60146 7.05812 8.67457 7.01131L8.69598 6.99756V7.36534L8.68565 7.36839C8.65373 7.37777 7.89997 7.59967 7.63868 7.59967ZM7.61578 7.56881C7.83174 7.58346 8.57147 7.37046 8.66793 7.34235V7.04759C8.50545 7.11446 7.72125 7.27624 7.61001 7.29906L7.61578 7.56881Z", fill: "#603913" }),
            React.createElement("path", { d: "M8.70103 6.95691C8.70103 6.95691 8.24623 7.11169 7.5957 7.21935V7.28666C7.5957 7.28666 8.5811 7.10497 8.68876 7.05785L8.70103 6.95691Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.58203 7.30452V7.20649L7.59402 7.20445C8.23597 7.09825 8.69268 6.94422 8.69727 6.94259L8.71855 6.93542L8.70184 7.06857L8.6943 7.07178C8.58678 7.11902 7.6389 7.29399 7.59858 7.30144L7.58203 7.30452ZM7.60967 7.23239V7.26882C7.7364 7.24527 8.54882 7.09329 8.6754 7.04706L8.68397 6.97843C8.33229 7.08783 7.9733 7.17267 7.60967 7.23239Z", fill: "#603913" }),
            React.createElement("path", { d: "M8.6968 7.31775C8.67773 7.33122 8.10784 7.49726 7.59766 7.54948L7.60387 7.62832C7.60387 7.62832 8.55024 7.46741 8.68215 7.39427L8.6968 7.31775Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.5906 7.6458L7.58203 7.53596L7.59589 7.53448C8.10639 7.48226 8.66594 7.31753 8.68898 7.30482L8.71718 7.28491L8.69489 7.4043L8.68884 7.40766C8.5559 7.48184 7.64422 7.63673 7.6055 7.64334L7.5906 7.6458ZM7.61244 7.56301L7.6163 7.611C7.73595 7.5905 8.53106 7.45227 8.66992 7.38412L8.67776 7.34021C8.55856 7.38118 8.06741 7.51488 7.61244 7.56301Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.84845 9.24731C6.95257 9.41305 6.61312 9.47025 5.97694 9.53843L5.7666 9.61465C5.7666 9.61465 6.49424 9.63688 7.78537 9.3503L7.84845 9.24731Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.80775 9.63C5.78132 9.63 5.76788 9.63 5.76788 9.63L5.68945 9.62751L5.97393 9.52511C6.59744 9.45783 6.93318 9.40253 7.84752 9.23327L7.87958 9.22742L7.79553 9.36465L7.78976 9.36596C6.68163 9.61099 5.99196 9.63 5.80775 9.63ZM7.82033 9.2681C6.92921 9.43266 6.59433 9.48754 5.97998 9.55351L5.85208 9.59959C6.08753 9.59621 6.75194 9.56403 7.77721 9.33625L7.82033 9.2681Z", fill: "#603913" }),
            React.createElement("path", { d: "M8.05881 8.94714C8.05881 8.94714 7.12529 9.14421 6.49868 9.21135L5.95215 9.54284C5.95215 9.54284 7.42825 9.39055 7.87404 9.25173L8.05881 8.94714Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.8877 9.5647L6.49745 9.19647C7.11622 9.13022 8.04695 8.93447 8.05627 8.93316L8.08906 8.92627L7.88225 9.26552L7.87724 9.267C7.43529 9.40465 5.96747 9.55722 5.95268 9.55868L5.8877 9.5647ZM6.50322 9.22618L6.01708 9.52093C6.30809 9.48949 7.47443 9.35856 7.86511 9.23906L8.02922 8.96872C7.85848 9.00411 7.05742 9.16648 6.50322 9.22618Z", fill: "#603913" }),
            React.createElement("path", { d: "M8.1267 8.87085C8.1267 8.87085 7.19301 9.06805 6.5664 9.1352L6.55371 9.22488C6.55371 9.22488 7.63451 9.09936 8.08033 8.96053L8.1267 8.87085Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.53613 9.24191L6.55313 9.12151L6.56405 9.1202C7.18282 9.05392 8.11371 8.85817 8.12301 8.85686L8.15255 8.85059L8.0889 8.9739L8.08328 8.97566C7.64146 9.11317 6.56508 9.23897 6.5543 9.24043L6.53613 9.24191ZM6.57794 9.14901L6.56968 9.20753C6.71295 9.19025 7.65905 9.0738 8.06998 8.94758L8.09952 8.89169C7.93558 8.92563 7.13511 9.08831 6.57794 9.1487V9.14901Z", fill: "#603913" }),
            React.createElement("path", { d: "M8.30568 5.37122C8.30568 5.37122 8.49253 5.74219 8.49474 5.78592C8.49698 5.82969 7.80921 6.31476 7.80921 6.31476C7.80921 6.31476 7.4336 6.2687 7.429 6.25624C7.42441 6.24381 7.4336 5.94334 7.43581 5.93119C7.43802 5.91906 8.30568 5.37122 8.30568 5.37122Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.81328 6.33016H7.80827C7.42423 6.28306 7.42022 6.27267 7.41639 6.26256C7.40885 6.24238 7.42201 5.93138 7.42243 5.92903C7.42406 5.9201 7.42613 5.9103 8.29897 5.3585L8.31168 5.35046L8.31877 5.36435C8.35021 5.42682 8.50709 5.74062 8.50944 5.78553C8.51182 5.83044 8.13441 6.10414 7.81757 6.32752L7.81328 6.33016ZM7.44268 6.24604C7.48196 6.25685 7.67902 6.28348 7.80634 6.29899C8.05996 6.11993 8.46397 5.82414 8.4817 5.78304C8.47976 5.75817 8.37267 5.53538 8.30073 5.39202C7.97445 5.59826 7.49747 5.90212 7.44976 5.93883C7.44696 5.9773 7.44105 6.20141 7.44268 6.24604Z", fill: "#603913" }),
            React.createElement("path", { d: "M8.51976 5.87319C8.51976 5.87319 8.07339 6.28076 7.90942 6.37058L7.76172 6.32934C7.76172 6.32934 8.3332 5.93874 8.48815 5.77637L8.51976 5.87319Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.91158 6.38636L7.72754 6.33501L7.7547 6.31641C7.76047 6.31261 8.3268 5.92495 8.4785 5.76535L8.49446 5.74866L8.53685 5.87785L8.52963 5.88457C8.51129 5.90126 8.08011 6.29418 7.91645 6.38387L7.91158 6.38636ZM7.7965 6.3233L7.9082 6.35447C8.06077 6.268 8.44571 5.921 8.50376 5.86847L8.4822 5.80309C8.32962 5.95261 7.90878 6.24591 7.7965 6.3233Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.47694 3.15222C3.50334 3.15222 1.90332 4.8565 1.90332 6.95865C1.90332 9.06084 3.50334 10.7649 5.47694 10.7649C7.45052 10.7649 9.0507 9.06098 9.0507 6.95865C9.0507 4.85633 7.45066 3.15222 5.47694 3.15222ZM5.47694 10.353C3.71678 10.353 2.29003 8.83334 2.29003 6.9591C2.29003 5.08484 3.71678 3.56519 5.47694 3.56519C7.23708 3.56519 8.66399 5.08484 8.66399 6.9591C8.66399 8.83334 7.23708 10.353 5.47694 10.353Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.47744 10.78C3.49926 10.78 1.88965 9.06583 1.88965 6.95869C1.88965 4.85155 3.49971 3.13733 5.47744 3.13733C7.45516 3.13733 9.06538 4.85155 9.06538 6.95869C9.06538 9.06583 7.45592 10.78 5.47744 10.78ZM5.47744 3.16732C3.51478 3.16732 1.91756 4.86809 1.91756 6.95869C1.91756 9.04931 3.51433 10.7499 5.47744 10.7499C7.44054 10.7499 9.03733 9.04917 9.03733 6.95869C9.03733 4.86823 7.44026 3.16732 5.47744 3.16732ZM5.47744 10.3681C3.71243 10.3681 2.27695 8.83866 2.27695 6.95869C2.27695 5.07874 3.71302 3.54915 5.47802 3.54915C7.24306 3.54915 8.67926 5.0786 8.67926 6.95869C8.67926 8.8388 7.24261 10.3681 5.47744 10.3681ZM5.47744 3.57928C3.72794 3.57928 2.30457 5.09526 2.30457 6.95855C2.30457 8.82183 3.72794 10.3378 5.47744 10.3378C7.22696 10.3378 8.65045 8.82183 8.65045 6.95855C8.65045 5.09526 7.2271 3.57928 5.47744 3.57928Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.47722 3.2533C3.55695 3.2533 1.99902 4.91207 1.99902 6.95806C1.99902 9.00405 3.55636 10.6632 5.47722 10.6632C7.39808 10.6632 8.95555 9.00463 8.95555 6.95865C8.95555 4.91266 7.39822 3.2533 5.47722 3.2533ZM5.47722 10.4339C3.67511 10.4339 2.2138 8.87765 2.2138 6.95806C2.2138 5.03846 3.67497 3.48222 5.47722 3.48222C7.27947 3.48222 8.74065 5.03829 8.74065 6.95806C8.74065 8.87779 7.27961 10.4345 5.47722 10.4345V10.4339Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.47757 10.6783C3.55198 10.6783 1.98535 9.00961 1.98535 6.95864C1.98535 4.90767 3.55198 3.23865 5.47757 3.23865C7.40316 3.23865 8.96995 4.90753 8.96995 6.95864C8.96995 9.00975 7.40271 10.6783 5.47757 10.6783ZM5.47757 3.26894C3.5675 3.26894 2.01356 4.92419 2.01356 6.95864C2.01356 8.99307 3.5675 10.6482 5.47757 10.6482C7.38765 10.6482 8.94173 8.99307 8.94173 6.95864C8.94173 4.92419 7.38795 3.26894 5.47757 3.26894ZM5.47757 10.4495C3.67045 10.4495 2.20013 8.88423 2.20013 6.95864C2.20013 5.03303 3.67045 3.46774 5.47757 3.46774C7.28469 3.46774 8.75517 5.03303 8.75517 6.95864C8.75517 8.88423 7.28455 10.4495 5.47757 10.4495ZM5.47757 3.49787C3.68596 3.49787 2.2279 5.0503 2.2279 6.95864C2.2279 8.86698 3.68552 10.4194 5.47757 10.4194C7.26963 10.4194 8.72725 8.86681 8.72725 6.95864C8.72725 5.05044 7.26977 3.49787 5.47757 3.49787Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.29102 8.76424L2.44139 9.01207C2.44139 9.01207 2.76369 8.64211 3.71246 8.53151L3.56134 8.26453C3.56134 8.26453 2.85661 8.28368 2.29102 8.76424Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M2.43967 9.0364L2.27246 8.76093L2.28251 8.75245C2.84545 8.27438 3.55491 8.24979 3.562 8.24951H3.57026L3.73616 8.54413L3.71429 8.54662C2.78296 8.65532 2.45518 9.01884 2.45193 9.02251L2.43967 9.0364ZM2.31013 8.76751L2.4441 8.9884C2.51353 8.92008 2.85326 8.62107 3.68976 8.51971L3.55519 8.28053C3.47545 8.28431 2.83184 8.33127 2.31072 8.76751H2.31013Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.22656 8.7194L2.27088 8.79561C2.27088 8.79561 2.66039 8.41439 3.5799 8.30278L3.53337 8.23035C3.53337 8.23035 2.78506 8.27702 2.22656 8.7194Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M2.26872 8.81894L2.20801 8.71551L2.21849 8.70734C2.77404 8.26729 3.52546 8.21566 3.53313 8.21521H3.54111L3.60537 8.31542L3.58202 8.31836C2.67788 8.42807 2.28526 8.80343 2.28142 8.80724L2.26872 8.81894ZM2.24582 8.72313L2.27536 8.77286C2.34922 8.70835 2.74805 8.39368 3.55573 8.29011L3.52619 8.2452C3.44569 8.25253 2.76282 8.3201 2.24582 8.72313Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.39453 9.00453L2.43574 9.07299C2.43574 9.07299 2.79202 8.69936 3.74079 8.58876L3.70134 8.51562C3.70134 8.51562 2.95348 8.54679 2.39453 9.00453Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M2.43441 9.09678L2.37695 9.00093L2.38715 8.99245C2.94284 8.5372 3.69456 8.50153 3.70178 8.50122H3.71021L3.76487 8.60157L3.74331 8.60392C2.81004 8.71276 2.45007 9.08037 2.44653 9.08404L2.43441 9.09678ZM2.41462 9.00796L2.43988 9.0501C2.51167 8.9847 2.88819 8.67765 3.71892 8.57626L3.6947 8.53238C3.61123 8.53706 2.9303 8.59281 2.41462 9.00796Z", fill: "#603913" }),
            React.createElement("path", { d: "M1.875 6.76195V7.07149C1.875 7.07149 2.30455 6.79574 3.34047 6.58039V6.28418C3.34047 6.28418 2.70884 6.34474 1.875 6.76195Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M1.86035 7.09802V6.75233L1.86847 6.74838C2.69493 6.33483 3.33231 6.26987 3.33867 6.26928L3.35343 6.26782V6.59273L3.34206 6.59508C2.32121 6.80718 1.88546 7.08164 1.88118 7.08427L1.86035 7.09802ZM1.88856 6.77148V7.0458C1.98738 6.98918 2.43259 6.75468 3.32582 6.56801V6.30103C3.22432 6.3136 2.63525 6.39948 1.88856 6.77148Z", fill: "#603913" }),
            React.createElement("path", { d: "M1.84863 6.72803V6.82267C1.84863 6.82267 2.42471 6.41569 3.33331 6.30408V6.21045C3.33331 6.21045 2.44303 6.32441 1.84863 6.72803Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M1.83496 6.85015V6.72026L1.84146 6.71572C2.43128 6.31487 3.32273 6.19668 3.33174 6.19551L3.34753 6.1936V6.3175L3.33485 6.31899C2.44088 6.42883 1.86229 6.831 1.85653 6.83522L1.83496 6.85015ZM1.86332 6.73619V6.79471C1.97691 6.72157 2.52301 6.39067 3.31948 6.29001V6.22726C3.1979 6.24496 2.40425 6.3718 1.86332 6.73619Z", fill: "#603913" }),
            React.createElement("path", { d: "M1.84961 7.07702V7.17124C1.84961 7.17124 2.42347 6.75519 3.32673 6.66772L3.33295 6.56006C3.33295 6.56006 2.44327 6.67343 1.84961 7.07702Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M1.83594 7.19956V7.06878L1.84244 7.06441C2.4321 6.66342 3.32297 6.54624 3.33181 6.54479L3.34867 6.5426L3.34055 6.68112L3.32843 6.68229C2.43964 6.76831 1.86371 7.17968 1.85795 7.18332L1.83594 7.19956ZM1.86415 7.08532V7.14384C1.97789 7.0685 2.52162 6.73351 3.31381 6.65407L3.31837 6.57741C3.19282 6.59541 2.4036 6.72194 1.86415 7.08605V7.08532Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.13379 5.54563C2.13379 5.54563 2.13379 5.42741 2.15521 5.37782C2.17663 5.32824 2.1911 5.32062 2.1911 5.32062C2.1911 5.32062 2.54561 5.27484 3.32598 5.70582L3.31534 5.79724C3.31534 5.79724 2.47752 5.40064 2.17677 5.4084L2.13379 5.54563Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.32738 5.81935L3.31008 5.811C3.30182 5.8072 2.48999 5.42452 2.18747 5.42334L2.12012 5.63779V5.54565C2.12012 5.54066 2.12012 5.42348 2.14301 5.37154C2.16591 5.31963 2.18083 5.30952 2.18526 5.3072L2.18984 5.30571C2.20136 5.30445 2.21296 5.30392 2.22455 5.30412C2.31953 5.30412 2.68054 5.3322 3.3324 5.69237L3.3411 5.69718L3.32738 5.81935ZM2.186 5.39321C2.47212 5.39321 3.18069 5.71782 3.30417 5.77547L3.31128 5.71432C2.66991 5.36174 2.31761 5.33397 2.22455 5.33397C2.21067 5.33397 2.20136 5.33397 2.19678 5.33497C2.1847 5.34959 2.17517 5.36611 2.16857 5.38383C2.1639 5.39579 2.16049 5.40819 2.15838 5.42085L2.16694 5.39335L2.186 5.39321Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.46001 4.85931L2.21289 5.32831C2.21289 5.32831 2.85028 5.42368 3.33714 5.74024L3.31925 5.07289C3.31925 5.07289 2.64968 4.84788 2.46001 4.85931Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.35174 5.7674L3.32959 5.75276C2.85085 5.44162 2.21717 5.34404 2.21082 5.34314L2.19043 5.34009L2.45129 4.8446H2.45897C2.464 4.8446 2.46916 4.8446 2.47478 4.8446C2.68157 4.8446 3.29725 5.05057 3.32337 5.0592L3.33298 5.06242L3.35174 5.7674ZM2.23504 5.31668C2.34612 5.33598 2.8903 5.44072 3.32206 5.71297L3.30523 5.08392C3.22487 5.05729 2.664 4.87386 2.47478 4.87386H2.46887L2.23504 5.31668Z", fill: "#603913" }),
            React.createElement("path", { d: "M2.44562 4.7677C2.44562 4.7677 2.39511 4.84786 2.39186 4.86251C2.38861 4.87712 2.38477 5.00732 2.38477 5.00732L2.45995 4.8587C2.45995 4.8587 2.73189 4.87334 3.30841 5.0913L3.31566 5.00352C3.31566 5.00352 2.81076 4.79828 2.44562 4.7677Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.32116 5.1124L3.30402 5.10596C2.79308 4.91332 2.51951 4.8798 2.46826 4.87499L2.36914 5.07101L2.37092 5.00737C2.37092 4.98556 2.37475 4.87571 2.37845 4.85933C2.38214 4.84293 2.41877 4.78399 2.43414 4.75926L2.43872 4.75195L2.44699 4.75268C2.81007 4.78295 3.31598 4.98791 3.32099 4.98995L3.3309 4.99404L3.32116 5.1124ZM2.45201 4.84368H2.46087C2.46368 4.84368 2.73621 4.86124 3.29635 5.07071L3.30091 5.01367C3.22898 4.98514 2.78392 4.81266 2.45304 4.78295C2.43562 4.80972 2.41988 4.83752 2.40592 4.86619C2.40459 4.87205 2.40282 4.90439 2.40134 4.94345L2.45201 4.84368Z", fill: "#603913" }),
            React.createElement("path", { d: "M8.64335 8.76153L8.49299 9.01022C8.49299 9.01022 8.17068 8.6404 7.22266 8.52966L7.37302 8.26282C7.37302 8.26282 8.07747 8.2811 8.64335 8.76153Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M8.49584 9.03393L8.48344 9.01932C8.48019 9.01579 8.1524 8.65226 7.22123 8.54357L7.19922 8.54108L7.36523 8.24646H7.37338C7.3806 8.24646 8.09007 8.27118 8.65301 8.74926L8.66289 8.75774L8.49584 9.03393ZM7.24617 8.51666C8.08253 8.61906 8.4233 8.91748 8.49125 8.98566L8.62523 8.76491C8.10396 8.32839 7.46052 8.28216 7.38091 8.27748L7.24617 8.51666Z", fill: "#603913" }),
            React.createElement("path", { d: "M8.70784 8.71678L8.66352 8.79317C8.66352 8.79317 8.27432 8.41178 7.35449 8.30031L7.40103 8.22717C7.40103 8.22717 8.14933 8.27441 8.70784 8.71678Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M8.66643 8.8164L8.65403 8.80411C8.65005 8.80033 8.25654 8.42465 7.35326 8.31523L7.33008 8.31229L7.39434 8.21252H7.40232C7.40985 8.21252 8.16126 8.2646 8.71694 8.70465L8.7273 8.71283L8.66643 8.8164ZM7.37972 8.28815C8.1871 8.39058 8.58579 8.70583 8.66024 8.7709L8.68978 8.72117C8.17276 8.31814 7.49004 8.25072 7.40895 8.244L7.37972 8.28815Z", fill: "#603913" }),
            React.createElement("path", { d: "M8.54058 9.00244L8.49936 9.07118C8.49936 9.07118 8.14309 8.69741 7.19434 8.58684L7.23376 8.5144C7.23376 8.5144 7.9815 8.54425 8.54058 9.00244Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M8.50051 9.09425L8.48811 9.08137C8.48455 9.07757 8.12324 8.70981 7.19148 8.60126L7.16992 8.59876L7.22441 8.49841H7.23284C7.24037 8.49841 7.99223 8.53439 8.54749 8.98965L8.55783 8.99799L8.50051 9.09425ZM7.21539 8.57376C7.69576 8.63228 8.01911 8.7594 8.20685 8.85639C8.37275 8.94196 8.46313 9.01832 8.4946 9.04657L8.51972 9.00474C8.00418 8.58897 7.32322 8.53383 7.23964 8.52854L7.21539 8.57376Z", fill: "#603913" }),
            React.createElement("path", { d: "M9.06061 6.75928V7.06868C9.06061 7.06868 8.63106 6.7935 7.59473 6.57759V6.28149C7.59473 6.28149 8.22677 6.34206 9.06061 6.75928Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M9.07471 7.0953L9.05329 7.08156C9.04901 7.07892 8.61327 6.80464 7.59256 6.59237L7.58105 6.59005V6.26514L7.59584 6.26659C7.60217 6.26659 8.23942 6.33214 9.06587 6.7457L9.07399 6.74965L9.07471 7.0953ZM7.60956 6.56518C8.50265 6.75197 8.94785 6.98647 9.04666 7.04325V6.7688C8.29967 6.39651 7.71089 6.31092 7.60956 6.29834V6.56518Z", fill: "#603913" }),
            React.createElement("path", { d: "M9.08607 6.72538V6.81957C9.08607 6.81957 8.51 6.41262 7.60156 6.30098V6.20752C7.60156 6.20752 8.49241 6.32176 9.08607 6.72538Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M9.09978 6.84781L9.07777 6.83229C9.07215 6.82821 8.49341 6.4259 7.59946 6.31617L7.58691 6.31457V6.19067L7.60271 6.19272C7.61172 6.19389 8.50375 6.31194 9.09298 6.71293L9.09948 6.7173L9.09978 6.84781ZM7.61528 6.28781C8.41174 6.38844 8.95782 6.71892 9.07142 6.79265V6.73413C8.53049 6.36957 7.73683 6.24275 7.61542 6.22503L7.61528 6.28781Z", fill: "#603913" }),
            React.createElement("path", { d: "M9.08503 7.07436V7.16856C9.08503 7.16856 8.51117 6.7525 7.60789 6.66503L7.60156 6.55737C7.60156 6.55737 8.49138 6.67074 9.08503 7.07436Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M9.09867 7.1971L9.07666 7.181C9.07089 7.17692 8.49496 6.76613 7.60618 6.67997L7.59406 6.6788L7.58594 6.54028L7.60277 6.54247C7.61164 6.54364 8.50249 6.66082 9.09217 7.06164L9.09867 7.06618V7.1971ZM7.62153 6.65116C8.41373 6.73088 8.95746 7.06573 9.0712 7.14108V7.08256C8.53175 6.71917 7.74179 6.59278 7.6171 6.57464L7.62153 6.65116Z", fill: "#603913" }),
            React.createElement("path", { d: "M8.80096 5.54304C8.80096 5.54304 8.80096 5.42485 8.77912 5.37523C8.75725 5.32565 8.74246 5.31806 8.74246 5.31806C8.74246 5.31806 8.37998 5.27225 7.58203 5.70323L7.59298 5.79482C7.59298 5.79482 8.4497 5.39822 8.75708 5.40581L8.80096 5.54304Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.58116 5.81645L7.56641 5.69459L7.57525 5.68978C8.24233 5.32961 8.61117 5.30167 8.70836 5.30167C8.72014 5.3015 8.73193 5.30198 8.74366 5.30312L8.74826 5.30458C8.75268 5.30693 8.76909 5.3185 8.79138 5.36881C8.81369 5.41913 8.81473 5.53807 8.81473 5.54303V5.63389L8.74677 5.42075C8.4376 5.42176 7.60687 5.80475 7.59861 5.80856L7.58116 5.81645ZM7.59712 5.71187L7.60437 5.77302C7.72917 5.7161 8.45504 5.3906 8.74781 5.3906H8.76702L8.77735 5.4228C8.77514 5.40863 8.77133 5.39474 8.76598 5.38138C8.75909 5.36346 8.7491 5.34689 8.73644 5.33238C8.73171 5.33238 8.72166 5.33135 8.70808 5.33135C8.61383 5.33166 8.25283 5.35988 7.59712 5.71187Z", fill: "#603913" }),
            React.createElement("path", { d: "M8.46707 4.85662L8.71966 5.32562C8.71966 5.32562 8.0681 5.42099 7.57031 5.73756L7.58848 5.07018C7.58848 5.07018 8.27359 4.8452 8.46707 4.85662Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.55566 5.76453L7.57501 5.05898L7.58462 5.05576C7.61211 5.04683 8.27459 4.83061 8.4681 4.84159H8.47577L8.7427 5.33708L8.72186 5.34016C8.71537 5.34117 8.06736 5.43875 7.57784 5.74977L7.55566 5.76453ZM7.60265 5.08135L7.58537 5.7104C8.02718 5.43774 8.58419 5.33285 8.6975 5.31367L8.45894 4.87099C8.27386 4.86573 7.68536 5.05459 7.60265 5.08194V5.08135Z", fill: "#603913" }),
            React.createElement("path", { d: "M8.48231 4.76514C8.48231 4.76514 8.53358 4.8453 8.53727 4.86053C8.54097 4.87574 8.54464 5.00549 8.54464 5.00549L8.46769 4.85672C8.46769 4.85672 8.18954 4.87134 7.60017 5.08932L7.59277 5.00154C7.59277 5.00154 8.1089 4.79571 8.48231 4.76514Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.58787 5.10969L7.57812 4.99151L7.58815 4.98739C7.59333 4.98535 8.11046 4.78041 8.48152 4.75012L8.48964 4.74939L8.49423 4.75656C8.51005 4.78128 8.5474 4.84067 8.55124 4.85677C8.5551 4.87287 8.55804 4.97381 8.55894 5.00495L8.5607 5.06727L8.45996 4.87242C8.40841 4.8771 8.12863 4.91031 7.605 5.10342L7.58787 5.10969ZM7.60811 5.01169L7.61282 5.06873C8.18581 4.85912 8.46455 4.84171 8.46721 4.84157H8.47606L8.52864 4.94307C8.52702 4.90345 8.52525 4.86993 8.52377 4.86467C8.50952 4.83585 8.49339 4.80799 8.47547 4.78128C8.13765 4.81054 7.68136 4.9833 7.60811 5.01169Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.6662 3.13196H5.25586V4.64197H5.6662V3.13196Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.67977 4.65767H5.24121V3.11694H5.67977V4.65767ZM5.26941 4.62752H5.65141V3.1471H5.26941V4.62752Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.34407 3.08118H5.25293V4.66402H5.34407V3.08118Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.35876 4.67903H5.23926V3.06604H5.35876V4.67903ZM5.26762 4.64891H5.33054V3.0962H5.26762V4.64891Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.67122 3.08118H5.58008V4.66402H5.67122V3.08118Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.68493 4.67903H5.56543V3.06604H5.68493V4.67903ZM5.59365 4.64891H5.65657V3.0962H5.59365V4.64891Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.6662 9.29639H5.25586V10.8064H5.6662V9.29639Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.67977 10.8214H5.24121V9.28125H5.67977V10.8214ZM5.26941 10.7912H5.65141V9.31138H5.26941V10.7912Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.34407 9.24524H5.25293V10.8282H5.34407V9.24524Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.35876 10.8432H5.23926V9.23022H5.35876V10.8432ZM5.26762 10.8132H5.33054V9.26038H5.26762V10.8132Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.67122 9.24524H5.58008V10.8282H5.67122V9.24524Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.68493 10.8432H5.56543V9.23022H5.68493V10.8432ZM5.59365 10.8132H5.65657V9.26038H5.59365V10.8132Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.30273 4.32275H7.58978V7.73917C7.58978 7.73917 7.47871 8.33078 7.22525 8.66592C6.49126 9.67092 5.4549 9.67092 5.4549 9.67092C5.4549 9.67092 4.32667 9.6838 3.70969 8.66592C3.4011 8.24446 3.32726 7.72543 3.32726 7.72543L3.30273 4.32275Z", fill: "white" }),
            React.createElement("path", { d: "M5.45324 9.67809C5.40685 9.67809 4.30787 9.66683 3.70372 8.67045C3.39827 8.25295 3.32099 7.73231 3.31967 7.72705L3.2959 4.31531H7.5967V7.73845C7.59535 7.74575 7.48221 8.3372 7.23124 8.66959C6.50347 9.66597 5.46579 9.67736 5.45531 9.67736L5.45324 9.67809ZM3.30979 4.33037L3.33429 7.72587C3.33429 7.72996 3.41171 8.24681 3.71525 8.66211C4.31555 9.65205 5.40699 9.66347 5.45324 9.66347H5.45531C5.46565 9.66347 6.49666 9.65177 7.22001 8.66138C7.46907 8.33166 7.58147 7.74388 7.58267 7.73803V4.33037H3.30979Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.39258 4.42102H7.50163V7.69554C7.50163 7.69554 7.39515 8.26257 7.15275 8.58353C6.4492 9.54684 5.45595 9.54684 5.45595 9.54684C5.45595 9.54684 4.37398 9.55941 3.78281 8.5844C3.48739 8.18036 3.41621 7.68297 3.41621 7.68297L3.39258 4.42102Z", fill: "#FB1221" }),
            React.createElement("path", { d: "M5.45273 9.55419C5.40841 9.55419 4.3548 9.54336 3.77559 8.58867C3.48268 8.18844 3.40885 7.68928 3.40809 7.68433L3.38477 4.41345H7.50785V7.69544C7.50667 7.70261 7.39826 8.26947 7.15749 8.5878C6.45998 9.54291 5.46514 9.5533 5.45525 9.5533L5.45273 9.55419ZM3.39952 4.42852L3.42315 7.6827C3.42315 7.68665 3.49702 8.18186 3.78816 8.5796C4.36292 9.52902 5.40841 9.5391 5.45273 9.5391H5.45467C5.46469 9.5391 6.45275 9.52798 7.14598 8.57887C7.38468 8.26289 7.49237 7.69953 7.49337 7.69382V4.42852H3.39952Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.21973 5.31165H6.68266V7.46456C6.68266 7.46456 6.61885 7.8373 6.4735 8.04839C6.05179 8.68169 5.45651 8.6817 5.45651 8.6817C5.45651 8.6817 4.80806 8.68987 4.45369 8.04884C4.27643 7.78332 4.23389 7.45622 4.23389 7.45622L4.21973 5.31165Z", fill: "white" }),
            React.createElement("path", { d: "M5.4552 8.68947C5.42846 8.68947 4.79521 8.68213 4.44751 8.05294C4.27099 7.78935 4.22667 7.46077 4.22667 7.45741L4.21191 5.30432H6.68949V7.46472C6.68874 7.46984 6.62361 7.84303 6.47899 8.05294C6.06022 8.68199 5.46245 8.68947 5.45637 8.68947H5.4552ZM4.22667 5.31941L4.24145 7.45637C4.24145 7.45859 4.28575 7.78378 4.45991 8.04463C4.80409 8.66721 5.42935 8.67438 5.45579 8.67438V8.68185L5.45682 8.67438C5.46287 8.67438 6.05359 8.66679 6.46821 8.04418C6.6109 7.83689 6.67502 7.46707 6.67605 7.46326V5.31941H4.22667Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.73819 4.88208H5.1748V5.19733H5.73819V4.88208Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.74536 5.20495H5.16797V4.87463H5.74536V5.20495ZM5.182 5.19033H5.73119V4.8897H5.182V5.19033Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.33852 4.67871H5.17383V4.9024H5.33852V4.67871Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.34588 4.91001H5.16699V4.67114H5.34588V4.91001ZM5.18105 4.89539H5.33172V4.68693H5.18105V4.89539Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.77549 5.177H5.13574V5.25831H5.77549V5.177Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.78268 5.26594H5.12891V5.16968H5.78268V5.26594ZM5.14307 5.2513H5.76865V5.18429H5.14293L5.14307 5.2513Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.53875 4.59229H5.37402V4.90241H5.53875V4.59229Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.54608 4.9101H5.36719V4.58459H5.54608V4.9101ZM5.38136 4.89548H5.53188V4.59924H5.38136V4.89548Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.73406 4.69397H5.56934V4.90243H5.73406V4.69397Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.74139 4.90997H5.5625V4.68689H5.74139V4.90997ZM5.5767 4.89535H5.72722V4.70151H5.5767V4.89535Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.77549 4.84644H5.13574V4.90994H5.77549V4.84644Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.78268 4.91758H5.12891V4.83887H5.78268V4.91758ZM5.14307 4.90293H5.76865V4.85438H5.14293L5.14307 4.90293Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.61333 5.15286C5.61333 5.05953 5.54227 4.98376 5.45455 4.98376C5.36679 4.98376 5.2959 5.05953 5.2959 5.15286C5.29609 5.16095 5.29685 5.16901 5.29811 5.17699H5.61095C5.61235 5.16901 5.61314 5.16095 5.61333 5.15286Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.6163 5.18427H5.29133L5.29002 5.17492C5.28893 5.1675 5.28828 5.16002 5.28809 5.15252C5.28809 5.05511 5.36195 4.97595 5.45382 4.97595C5.54571 4.97595 5.61972 5.05511 5.61972 5.15252C5.61961 5.16033 5.61885 5.16812 5.61751 5.17579L5.6163 5.18427ZM5.3036 5.16966H5.60421C5.60502 5.16411 5.60544 5.15854 5.60552 5.15297C5.60552 5.06387 5.53743 4.99205 5.45382 4.99205C5.37024 4.99205 5.30228 5.06446 5.30228 5.15297C5.30237 5.15854 5.30281 5.16411 5.3036 5.16966Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.57504 5.15288C5.57504 5.08193 5.52114 5.02441 5.4545 5.02441C5.38788 5.02441 5.33398 5.08193 5.33398 5.15288C5.33401 5.16097 5.3348 5.16903 5.33634 5.17701H5.57268C5.57414 5.16903 5.57492 5.16097 5.57504 5.15288Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.57803 5.18424H5.32973L5.32869 5.17811C5.3271 5.16965 5.32626 5.16108 5.32617 5.15251C5.32617 5.07761 5.38349 5.0166 5.4538 5.0166C5.5241 5.0166 5.58142 5.07761 5.58142 5.15251C5.58139 5.16108 5.58061 5.16965 5.57907 5.17811L5.57803 5.18424ZM5.34168 5.16962H5.56636C5.56706 5.16408 5.56739 5.15851 5.56739 5.15293C5.56739 5.08624 5.51657 5.03211 5.45394 5.03211C5.39133 5.03211 5.34051 5.08624 5.34051 5.15293C5.34051 5.15851 5.34084 5.16408 5.34154 5.16962H5.34168Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.3626 4.68384V4.61129H5.3143V4.56946H5.27485V4.60939H5.24088V4.56946H5.20409V4.60939H5.15137V4.68283L5.3626 4.68384Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.36898 4.69126L5.14355 4.69025V4.60247H5.19645V4.56238H5.24727V4.60247H5.26706V4.56238H5.32068V4.60438H5.36898V4.69126ZM5.15716 4.67533L5.3542 4.6762V4.61885H5.3059V4.57688H5.28123V4.61695H5.23307V4.57688H5.21047V4.61695H5.15716V4.67533Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.56182 4.58936V4.51695H5.51338V4.47498H5.47409V4.51504H5.43996V4.47498H5.40334V4.51504H5.35059V4.58849L5.56182 4.58936Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.56901 4.59697L5.34375 4.59597V4.50819H5.39647V4.46753H5.44729V4.5076H5.46737V4.46753H5.52085V4.5095H5.56915L5.56901 4.59697ZM5.35778 4.58104L5.55498 4.58191V4.52457H5.50651V4.48215H5.48215V4.52224H5.43399V4.48215H5.4114V4.52224H5.35851L5.35778 4.58104Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.75811 4.68948V4.61693H5.70981V4.57507H5.67038V4.61517H5.63639V4.57507H5.59977V4.61517H5.54688V4.68845L5.75811 4.68948Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.76432 4.69698L5.53906 4.69611V4.6076H5.59179V4.5675H5.64261V4.6076H5.66254V4.5675H5.71602V4.6095H5.76432V4.69698ZM5.55309 4.68104L5.75029 4.68191V4.62457H5.70183V4.5826H5.67674V4.62266H5.62844V4.5826H5.60598V4.62266H5.55309V4.68104Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.27102 4.71997H5.24414V4.79809H5.27102V4.71997Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.27835 4.80583H5.2373V4.71265H5.27835V4.80583ZM5.25147 4.79119H5.26418V4.72813H5.25147V4.79119Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.48779 4.65527H5.42871V4.71816H5.48779V4.65527Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.49403 4.72566H5.4209V4.64771H5.49403V4.72566ZM5.43493 4.71104H5.47998V4.66322H5.43493V4.71104Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.6699 4.71997H5.6377V4.79809H5.6699V4.71997Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M5.67656 4.80583H5.62988V4.71265H5.67611L5.67656 4.80583ZM5.64436 4.79119H5.66253V4.72813H5.64467L5.64436 4.79119Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.07703 4.88208H3.51367V5.19733H4.07703V4.88208Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.08325 5.20495H3.50586V4.87463H4.08325V5.20495ZM3.52003 5.19033H4.06922V4.8897H3.52003V5.19033Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.67739 4.67871H3.5127V4.9024H3.67739V4.67871Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.68475 4.91001H3.50586V4.67114H3.68475V4.91001ZM3.52006 4.89539H3.67058V4.68693H3.52006V4.89539Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.11324 5.177H3.47363V5.25831H4.11324V5.177Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.12157 5.26594H3.46777V5.16968H4.12157V5.26594ZM3.4818 5.2513H4.10738V5.18429H3.4818V5.2513Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.87759 4.59229H3.71289V4.90241H3.87759V4.59229Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.88478 4.9101H3.70605V4.58459H3.88478V4.9101ZM3.72008 4.89548H3.87061V4.59924H3.72008V4.89548Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.0729 4.69397H3.9082V4.90243H4.0729V4.69397Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.08062 4.90997H3.90234V4.68689H4.08121L4.08062 4.90997ZM3.91592 4.89535H4.06645V4.70151H3.91592V4.89535Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.11324 4.84644H3.47363V4.90994H4.11324V4.84644Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.12157 4.91758H3.46777V4.83887H4.12157V4.91758ZM3.4818 4.90293H4.10738V4.85438H3.4818V4.90293Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.9522 5.15286C3.9522 5.05953 3.88117 4.98376 3.79341 4.98376C3.70569 4.98376 3.63477 5.05953 3.63477 5.15286C3.63496 5.16095 3.63575 5.16901 3.63715 5.17699H3.94999C3.95125 5.16901 3.95201 5.16095 3.9522 5.15286Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.95517 5.18427H3.6302L3.62889 5.17492C3.62779 5.1675 3.62715 5.16002 3.62695 5.15252C3.62695 5.05511 3.70082 4.97595 3.79269 4.97595C3.88458 4.97595 3.95859 5.05511 3.95859 5.15252C3.95845 5.16033 3.95775 5.16809 3.95651 5.17579L3.95517 5.18427ZM3.64247 5.16966H3.94307C3.94389 5.16411 3.94431 5.15854 3.94439 5.15297C3.94439 5.06387 3.87629 4.99205 3.79269 4.99205C3.70911 4.99205 3.64115 5.06446 3.64115 5.15297C3.64123 5.15854 3.64168 5.16411 3.64247 5.16966Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.91376 5.15288C3.91376 5.08193 3.85984 5.02441 3.79322 5.02441C3.72661 5.02441 3.67285 5.08193 3.67285 5.15288C3.67282 5.16097 3.67358 5.16903 3.67506 5.17701H3.91138C3.91287 5.16903 3.91365 5.16097 3.91376 5.15288Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.91712 5.18424H3.6694L3.66837 5.17811C3.66683 5.16965 3.66604 5.16108 3.66602 5.15251C3.66602 5.07761 3.72319 5.0166 3.7935 5.0166C3.86381 5.0166 3.92112 5.07761 3.92112 5.15251C3.9211 5.16108 3.92028 5.16965 3.91874 5.17811L3.91712 5.18424ZM3.6808 5.16962H3.90547C3.9062 5.16408 3.90659 5.15851 3.90665 5.15293C3.90665 5.08624 3.85569 5.03211 3.79305 5.03211C3.73042 5.03211 3.6796 5.08624 3.6796 5.15293C3.67965 5.15851 3.68004 5.16408 3.6808 5.16962Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.70147 4.68384V4.61129H3.65317V4.56946H3.61374V4.60939H3.57975V4.56946H3.54313V4.60939H3.49023V4.68283L3.70147 4.68384Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.70782 4.69126L3.48242 4.69025V4.60247H3.53531V4.56238H3.5861V4.60247H3.60635V4.56238H3.65983V4.60438H3.70813L3.70782 4.69126ZM3.49659 4.67533L3.69365 4.6762V4.61885H3.64535V4.57688H3.6201V4.61695H3.57194V4.57688H3.54948V4.61695H3.49659V4.67533Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.90069 4.58936V4.51695H3.85239V4.47498H3.81293V4.51504H3.77897V4.47498H3.74218V4.51504H3.68945V4.58849L3.90069 4.58936Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.90802 4.59697L3.68262 4.59597V4.50819H3.73548V4.46753H3.7863V4.5076H3.8061V4.46753H3.85958V4.5095H3.90802V4.59697ZM3.69679 4.58104L3.89385 4.58191V4.52457H3.84555V4.48215H3.82029V4.52224H3.77213V4.48215H3.74954V4.52224H3.69679V4.58104Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.096 4.68948V4.61693H4.04753V4.57507H4.00825V4.61517H3.97411V4.57507H3.93749V4.61517H3.88477V4.68845L4.096 4.68948Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.10333 4.69698L3.87793 4.69611V4.6076H3.93124V4.5675H3.98206V4.6076H4.002V4.5675H4.05548V4.6095H4.10392L4.10333 4.69698ZM3.89196 4.68104L4.08916 4.68191V4.62457H4.04086V4.5826H4.01561V4.62266H3.96745V4.5826H3.94485V4.62266H3.89196V4.68104Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.60891 4.71997H3.58203V4.79809H3.60891V4.71997Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.61624 4.80583H3.5752V4.71265H3.61624V4.80583ZM3.58936 4.79119H3.60207V4.72813H3.58936V4.79119Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.82568 4.65527H3.7666V4.71816H3.82568V4.65527Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.83363 4.72566H3.75977V4.64771H3.83363V4.72566ZM3.77452 4.71104H3.81884V4.66322H3.77452V4.71104Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.00876 4.71997H3.97656V4.79809H4.00876V4.71997Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.01609 4.80583H3.96973V4.71265H4.01609V4.80583ZM3.98375 4.79119H4.00193V4.72813H3.98375V4.79119Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.07703 6.65918H3.51367V6.97443H4.07703V6.65918Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.08325 6.98193H3.50586V6.65161H4.08325V6.98193ZM3.52003 6.96731H4.06922V6.66668H3.52003V6.96731Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.67739 6.45581H3.5127V6.67947H3.67739V6.45581Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.68475 6.687H3.50586V6.44824H3.68475V6.687ZM3.52006 6.67235H3.67058V6.46333H3.52006V6.67235Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.11324 6.9541H3.47363V7.03544H4.11324V6.9541Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.12157 7.04282H3.46777V6.94641H4.12157V7.04282ZM3.4818 7.0282H4.10738V6.96192H3.4818V7.0282Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.87759 6.36938H3.71289V6.67954H3.87759V6.36938Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.88478 6.68701H3.70605V6.36182H3.88478V6.68701ZM3.72008 6.67239H3.87061V6.37688H3.72008V6.67239Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.0729 6.47107H3.9082V6.67953H4.0729V6.47107Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.08062 6.68701H3.90234V6.46362H4.08121L4.08062 6.68701ZM3.91592 6.67236H4.06645V6.47855H3.91592V6.67236Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.11324 6.62366H3.47363V6.68713H4.11324V6.62366Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.12157 6.69466H3.46777V6.61609H4.12157V6.69466ZM3.4818 6.68001H4.10738V6.63115H3.4818V6.68001Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.9522 6.92982C3.9522 6.83649 3.88117 6.76086 3.79341 6.76086C3.70569 6.76086 3.63477 6.83649 3.63477 6.92982C3.63496 6.93796 3.63575 6.94608 3.63715 6.95412H3.94999C3.95125 6.94606 3.95201 6.93796 3.9522 6.92982Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.95517 6.96157H3.6302L3.62903 6.95236C3.62779 6.94491 3.62709 6.93738 3.62695 6.92985C3.62695 6.83255 3.70082 6.75342 3.79269 6.75342C3.88458 6.75342 3.95859 6.83255 3.95859 6.92985C3.95839 6.93769 3.95766 6.9455 3.95637 6.95325L3.95517 6.96157ZM3.64247 6.94695H3.94307C3.94389 6.94144 3.94433 6.93587 3.94439 6.93027C3.94439 6.84134 3.87629 6.76935 3.79269 6.76935C3.70911 6.76935 3.64115 6.84251 3.64115 6.93027C3.64123 6.9357 3.64168 6.94113 3.64247 6.94651V6.94695Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.91376 6.92981C3.91376 6.859 3.85983 6.80151 3.79322 6.80151C3.72661 6.80151 3.67285 6.859 3.67285 6.92981C3.67282 6.93796 3.67355 6.94608 3.67506 6.95409H3.91138C3.91287 6.94608 3.91365 6.93796 3.91376 6.92981Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.91712 6.96158H3.6694L3.66837 6.95545C3.66683 6.94699 3.66604 6.93843 3.66602 6.92983C3.66602 6.85493 3.72319 6.79395 3.7935 6.79395C3.86381 6.79395 3.92112 6.85493 3.92112 6.92983C3.9211 6.93843 3.92031 6.94699 3.91874 6.95545L3.91712 6.96158ZM3.6808 6.94697H3.90547C3.9062 6.94142 3.90659 6.93585 3.90665 6.93028C3.90665 6.86372 3.85569 6.80943 3.79305 6.80943C3.73042 6.80943 3.6796 6.86372 3.6796 6.93028C3.67968 6.93571 3.68007 6.94114 3.6808 6.94652V6.94697Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.70147 6.46082V6.38841H3.65317V6.34644H3.61374V6.3865H3.57975V6.34644H3.54313V6.3865H3.49023V6.45995L3.70147 6.46082Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.70782 6.46848L3.48242 6.46745V6.3797H3.53531V6.3396H3.5861V6.3797H3.60635V6.3396H3.65983V6.38157H3.70813L3.70782 6.46848ZM3.49659 6.45238L3.69365 6.45342V6.39594H3.64535V6.35466H3.6201V6.3949H3.57194V6.35466H3.54948V6.3949H3.49659V6.45238Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.90069 6.36646V6.29405H3.85239V6.25208H3.81293V6.29214H3.77897V6.25208H3.74218V6.29214H3.68945V6.36559L3.90069 6.36646Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.90802 6.3741L3.68262 6.37309V6.28459H3.73548V6.24463H3.7863V6.28459H3.8061V6.24463H3.85958V6.28649H3.90802V6.3741ZM3.69679 6.35817L3.89385 6.3589V6.30155H3.84555V6.25955H3.82029V6.29965H3.77213V6.25955H3.74954V6.29965H3.69679V6.35817Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.096 6.46655V6.39415H4.04753V6.35217H4.00825V6.39224H3.97411V6.35217H3.93749V6.39224H3.88477V6.46569L4.096 6.46655Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.10333 6.4741L3.87793 6.47306V6.38531H3.93124V6.34521H3.98206V6.38531H4.002V6.34521H4.05548V6.38721H4.10392L4.10333 6.4741ZM3.89196 6.45817L4.08916 6.45904V6.40169H4.04086V6.35969H4.01561V6.39979H3.96745V6.35969H3.94485V6.39979H3.89196V6.45817Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.60891 6.49719H3.58203V6.57545H3.60891V6.49719Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.61624 6.58283H3.5752V6.4895H3.61624V6.58283ZM3.58936 6.56821H3.60207V6.50501H3.58936V6.56821Z", fill: "#603913" }),
            React.createElement("path", { d: "M3.82568 6.43225H3.7666V6.49514H3.82568V6.43225Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.83363 6.50264H3.75977V6.42468H3.83363V6.50264ZM3.77452 6.48802H3.81884V6.44017H3.77452V6.48802Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.00876 6.49719H3.97656V6.57545H4.00876V6.49719Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.01609 6.58283H3.96973V6.4895H4.01609V6.58283ZM3.98375 6.56821H4.00193V6.50501H3.98375V6.56821Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.37781 4.88208H6.81445V5.19733H7.37781V4.88208Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.38503 5.20495H6.80762V4.87463H7.38503V5.20495ZM6.82181 5.19033H7.37101V4.8897H6.82181V5.19033Z", fill: "#603913" }),
            React.createElement("path", { d: "M6.97915 4.67871H6.81445V4.9024H6.97915V4.67871Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.98553 4.91001H6.80664V4.67114H6.98553V4.91001ZM6.82081 4.89539H6.97134V4.68693H6.82081V4.89539Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.415 5.177H6.77539V5.25831H7.415V5.177Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.42247 5.26594H6.76855V5.16968H7.42247V5.26594ZM6.78272 5.2513H7.4083V5.18429H6.78244L6.78272 5.2513Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.17837 4.59229H7.01367V4.90241H7.17837V4.59229Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.18573 4.9101H7.00684V4.58459H7.18573V4.9101ZM7.021 4.89548H7.17168V4.59924H7.021V4.89548Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.37368 4.69397H7.20898V4.90243H7.37368V4.69397Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.38104 4.90997H7.20215V4.68689H7.38104V4.90997ZM7.21634 4.89535H7.36687V4.70151H7.21634V4.89535Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.415 4.84644H6.77539V4.90994H7.415V4.84644Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.42247 4.91758H6.76855V4.83887H7.42247V4.91758ZM6.78272 4.90293H7.4083V4.85438H6.78244L6.78272 4.90293Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.25299 5.15286C7.25299 5.05953 7.18195 4.98376 7.0942 4.98376C7.00644 4.98376 6.93555 5.05953 6.93555 5.15286C6.93577 5.16095 6.9365 5.16901 6.93776 5.17699H7.25077C7.25203 5.16901 7.25279 5.16095 7.25299 5.15286Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.25595 5.18427H6.93098L6.93009 5.17783C6.92874 5.16946 6.92796 5.161 6.92773 5.15252C6.92773 5.05511 7.00157 4.97595 7.09347 4.97595C7.18533 4.97595 7.25934 5.05511 7.25934 5.15252C7.2592 5.16033 7.2585 5.16809 7.25727 5.17579L7.25595 5.18427ZM6.94308 5.16966H7.24369C7.2445 5.16411 7.24495 5.15854 7.245 5.15297C7.245 5.06387 7.17707 4.99205 7.09333 4.99205C7.00955 4.99205 6.94176 5.06446 6.94176 5.15297C6.94185 5.15854 6.94229 5.16411 6.94308 5.16966Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.21507 5.15288C7.21507 5.08193 7.16103 5.02441 7.09439 5.02441C7.02778 5.02441 6.97461 5.08193 6.97461 5.15288C6.97464 5.16097 6.97545 5.16903 6.97696 5.17701H7.2133C7.21465 5.16903 7.21524 5.16094 7.21507 5.15288Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.21849 5.18424H6.97018L6.96915 5.17811C6.96761 5.16965 6.96682 5.16108 6.9668 5.15251C6.9668 5.07761 7.02397 5.0166 7.09428 5.0166C7.16459 5.0166 7.2219 5.07761 7.2219 5.15251C7.22188 5.16108 7.22106 5.16965 7.21952 5.17811L7.21849 5.18424ZM6.98217 5.16962H7.20684C7.20757 5.16408 7.20796 5.15851 7.20802 5.15293C7.20802 5.08624 7.15706 5.03211 7.09442 5.03211C7.03178 5.03211 6.98113 5.08624 6.98113 5.15293C6.98108 5.15851 6.98136 5.16408 6.982 5.16962H6.98217Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.00127 4.68384V4.61129H6.95297V4.56946H6.91366V4.60939H6.87955V4.56946H6.8429V4.60939H6.79004V4.68283L7.00127 4.68384Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.00863 4.69126L6.7832 4.69025V4.60247H6.83609V4.56238H6.88691V4.60247H6.90685V4.56238H6.96033V4.60438H7.00863V4.69126ZM6.7974 4.67533L6.9946 4.6762V4.61885H6.94613V4.57688H6.92088V4.61695H6.87289V4.57688H6.85026V4.61695H6.7974V4.67533Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.20244 4.58936V4.51695H7.15414V4.47498H7.11469V4.51504H7.08072V4.47498H7.04393V4.51504H6.99121V4.58849L7.20244 4.58936Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.2088 4.59697L6.9834 4.59597V4.50819H7.03626V4.46753H7.08708V4.5076H7.10688V4.46753H7.1605V4.5095H7.2088V4.59697ZM6.99757 4.58104L7.19463 4.58191V4.52457H7.14633V4.48215H7.12166V4.52224H7.07291V4.48215H7.05032V4.52224H6.99757V4.58104Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.39661 4.68948V4.61693H7.34848V4.57507H7.30903V4.61517H7.27506V4.57507H7.23827V4.61517H7.18555V4.68845L7.39661 4.68948Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.40414 4.69698L7.17871 4.69611V4.6076H7.23146V4.5675H7.28225V4.6076H7.30222V4.5675H7.35567V4.6095H7.40414V4.69698ZM7.19291 4.68104L7.38994 4.68191V4.62457H7.34164V4.5826H7.31639V4.62266H7.26823V4.5826H7.24563V4.62266H7.19291V4.68104Z", fill: "#603913" }),
            React.createElement("path", { d: "M6.91067 4.71997H6.88379V4.79809H6.91067V4.71997Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.91786 4.80583H6.87695V4.71265H6.91786V4.80583ZM6.89098 4.79119H6.90383V4.72813H6.89098V4.79119Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.12744 4.65527H7.06836V4.71816H7.12744V4.65527Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.13441 4.72566H7.06055V4.64771H7.13441V4.72566ZM7.07533 4.71104H7.11963V4.66322H7.07533V4.71104Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.30954 4.71997H7.27734V4.79809H7.30954V4.71997Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.31649 4.80583H7.26953V4.71265H7.3159L7.31649 4.80583ZM7.28429 4.79119H7.30232V4.72813H7.28429V4.79119Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.37781 6.65918H6.81445V6.97443H7.37781V6.65918Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.38503 6.98193H6.80762V6.65161H7.38503V6.98193ZM6.82181 6.96731H7.37101V6.66668H6.82181V6.96731Z", fill: "#603913" }),
            React.createElement("path", { d: "M6.97915 6.45581H6.81445V6.67947H6.97915V6.45581Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.98553 6.687H6.80664V6.44824H6.98553V6.687ZM6.82081 6.67235H6.97134V6.46333H6.82081V6.67235Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.415 6.9541H6.77539V7.03544H7.415V6.9541Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.42247 7.04282H6.76855V6.94641H7.42247V7.04282ZM6.78244 7.02748H7.408V6.9612H6.78244V7.02748Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.17837 6.36938H7.01367V6.67954H7.17837V6.36938Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.18573 6.68701H7.00684V6.36182H7.18573V6.68701ZM7.021 6.67239H7.17168V6.37688H7.021V6.67239Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.37368 6.47107H7.20898V6.67953H7.37368V6.47107Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.38104 6.68701H7.20215V6.46362H7.38104V6.68701ZM7.21634 6.67236H7.36687V6.47855H7.21634V6.67236Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.415 6.62366H6.77539V6.68713H7.415V6.62366Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.42247 6.69466H6.76855V6.61609H7.42247V6.69466ZM6.78272 6.68001H7.4083V6.63115H6.78244L6.78272 6.68001Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.25299 6.92982C7.25299 6.83649 7.18195 6.76086 7.0942 6.76086C7.00644 6.76086 6.93555 6.83649 6.93555 6.92982C6.93577 6.93796 6.9365 6.94606 6.93776 6.95412H7.25077C7.25203 6.94606 7.25279 6.93796 7.25299 6.92982Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.25595 6.96157H6.93098L6.93009 6.95516C6.92874 6.94676 6.92793 6.93833 6.92773 6.92985C6.92773 6.83255 7.00157 6.75342 7.09347 6.75342C7.18533 6.75342 7.25934 6.83255 7.25934 6.92985C7.25923 6.93769 7.2585 6.9455 7.25713 6.95325L7.25595 6.96157ZM6.94308 6.94695H7.24369C7.2445 6.94144 7.24495 6.93587 7.245 6.93027C7.245 6.84134 7.17707 6.76935 7.09333 6.76935C7.00955 6.76935 6.94176 6.84251 6.94176 6.93027C6.94185 6.9357 6.94229 6.94113 6.94308 6.94651V6.94695Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.21485 6.92981C7.21485 6.859 7.16079 6.80151 7.09417 6.80151C7.02756 6.80151 6.97363 6.859 6.97363 6.92981C6.97366 6.93796 6.97444 6.94608 6.97598 6.95409H7.21233C7.21393 6.94611 7.21477 6.93796 7.21485 6.92981Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.21849 6.96158H6.97018L6.96915 6.95545C6.96761 6.94699 6.96682 6.93843 6.9668 6.92983C6.9668 6.85493 7.02397 6.79395 7.09428 6.79395C7.16459 6.79395 7.2219 6.85493 7.2219 6.92983C7.22188 6.93843 7.22109 6.94699 7.21952 6.95545L7.21849 6.96158ZM6.98217 6.94697H7.20684C7.20757 6.94142 7.20796 6.93585 7.20802 6.93028C7.20802 6.86372 7.15706 6.80943 7.09442 6.80943C7.03178 6.80943 6.98113 6.86372 6.98113 6.93028C6.98108 6.93571 6.98138 6.94111 6.982 6.94652L6.98217 6.94697Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.00127 6.46082V6.38841H6.95297V6.34644H6.91366V6.3865H6.87955V6.34644H6.8429V6.3865H6.79004V6.45995L7.00127 6.46082Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.00863 6.46848L6.7832 6.46745V6.3797H6.83609V6.3396H6.88691V6.3797H6.90685V6.3396H6.96033V6.38157H7.00863V6.46848ZM6.7974 6.45238L6.9946 6.45342V6.39594H6.94613V6.35466H6.92088V6.3949H6.87289V6.35466H6.85026V6.3949H6.7974V6.45238Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.20244 6.36646V6.29405H7.15414V6.25208H7.11469V6.29214H7.08072V6.25208H7.04393V6.29214H6.99121V6.36559L7.20244 6.36646Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.2088 6.3741L6.9834 6.37309V6.28459H7.03626V6.24463H7.08708V6.28459H7.10688V6.24463H7.1605V6.28649H7.2088V6.3741ZM6.99757 6.35817L7.19463 6.3589V6.30155H7.14633V6.25955H7.12166V6.29965H7.07291V6.25955H7.05032V6.29965H6.99757V6.35817Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.39661 6.46655V6.39415H7.34848V6.35217H7.30903V6.39224H7.27506V6.35217H7.23827V6.39224H7.18555V6.46569L7.39661 6.46655Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.40414 6.4741L7.17871 6.47306V6.38531H7.23146V6.34521H7.28225V6.38531H7.30222V6.34521H7.35567V6.38721H7.40414V6.4741ZM7.19291 6.45817L7.38994 6.45904V6.40169H7.34164V6.35969H7.31639V6.39979H7.26823V6.35969H7.24563V6.39979H7.19291V6.45817Z", fill: "#603913" }),
            React.createElement("path", { d: "M6.91067 6.49719H6.88379V6.57545H6.91067V6.49719Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.91786 6.58283H6.87695V6.4895H6.91786V6.58283ZM6.89098 6.56821H6.90383V6.50501H6.89098V6.56821Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.12744 6.43225H7.06836V6.49514H7.12744V6.43225Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.13441 6.50264H7.06055V6.42468H7.13441V6.50264ZM7.07533 6.48802H7.11963V6.44017H7.07533V6.48802Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.30954 6.49719H7.27734V6.57545H7.30954V6.49719Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.31649 6.58283H7.26953V6.4895H7.3159L7.31649 6.58283ZM7.28429 6.56821H7.30232V6.50501H7.28429V6.56821Z", fill: "#603913" }),
            React.createElement("path", { d: "M6.69607 8.94394L6.29785 8.51972L6.50701 8.29675L6.9054 8.72101L6.69607 8.94394Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.69638 8.95465L6.69134 8.94936L6.28809 8.51973L6.5073 8.28564L6.51231 8.29108L6.91529 8.72102L6.91025 8.72642L6.69638 8.95465ZM6.30802 8.51973L6.69638 8.93329L6.89563 8.72102L6.5073 8.30746L6.30802 8.51973Z", fill: "#603913" }),
            React.createElement("path", { d: "M6.60956 8.43457L6.49316 8.31051L6.64162 8.15222L6.75818 8.27629L6.60956 8.43457Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.60985 8.44513L6.4834 8.31056L6.64191 8.14172L6.76835 8.27632L6.60985 8.44513ZM6.50336 8.31056L6.60985 8.42394L6.74842 8.27632L6.64191 8.16295L6.50336 8.31056Z", fill: "#603913" }),
            React.createElement("path", { d: "M6.68178 9.01493L6.22949 8.53319L6.28356 8.47571L6.73584 8.95745L6.68178 9.01493Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.6817 9.02555L6.67666 9.02015L6.21875 8.53315L6.28273 8.46497L6.28774 8.47023L6.74565 8.95737L6.6817 9.02555ZM6.23944 8.53315L6.6817 9.00419L6.726 8.95737L6.28287 8.48619L6.23944 8.53315Z", fill: "#603913" }),
            React.createElement("path", { d: "M6.7513 8.58516L6.63477 8.46126L6.84082 8.24182L6.95721 8.36589L6.7513 8.58516Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.75145 8.5959L6.74644 8.59047L6.625 8.46116L6.84169 8.2312L6.968 8.36577L6.75145 8.5959ZM6.64494 8.46116L6.75145 8.57453L6.94731 8.36577L6.84096 8.25254L6.64494 8.46116Z", fill: "#603913" }),
            React.createElement("path", { d: "M6.88886 8.73245L6.77246 8.60839L6.91086 8.46094L7.02726 8.58498L6.88886 8.73245Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.88914 8.74291L6.88413 8.73764L6.7627 8.60834L6.91115 8.4502L7.0376 8.58493L7.03259 8.59033L6.88914 8.74291ZM6.78263 8.60834L6.88914 8.72171L7.01766 8.58493L6.91115 8.47156L6.78263 8.60834Z", fill: "#603913" }),
            React.createElement("path", { d: "M6.91339 8.76847L6.46094 8.28673L6.50319 8.24182L6.95547 8.72356L6.91339 8.76847Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.91334 8.77919L6.90833 8.77392L6.45117 8.28678L6.50331 8.2312L6.50832 8.2366L6.96623 8.72361L6.91334 8.77919ZM6.47111 8.28678L6.91334 8.75796L6.94554 8.72361L6.50331 8.25254L6.47111 8.28678Z", fill: "#603913" }),
            React.createElement("path", { d: "M6.63759 8.81804C6.66755 8.78525 6.68415 8.74263 6.68415 8.69842C6.68415 8.65423 6.66755 8.61162 6.63759 8.57883C6.62345 8.56326 6.60614 8.55077 6.58682 8.54223C6.5675 8.53372 6.54656 8.5293 6.52542 8.5293C6.50425 8.5293 6.48331 8.53372 6.46399 8.54223C6.44467 8.55077 6.42736 8.56326 6.41322 8.57883C6.40787 8.58468 6.40295 8.5909 6.39844 8.59742L6.62003 8.8331C6.62627 8.82856 6.63215 8.82352 6.63759 8.81804Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.6185 8.84343L6.61421 8.83876L6.38867 8.5984L6.39382 8.59109C6.39791 8.58496 6.40245 8.57914 6.40743 8.57368C6.42219 8.55738 6.44025 8.54433 6.46046 8.5354C6.48065 8.52647 6.50252 8.52185 6.52464 8.52185C6.54673 8.52185 6.5686 8.52647 6.58882 8.5354C6.609 8.54433 6.62706 8.55738 6.64185 8.57368C6.67307 8.60789 6.69037 8.65239 6.69037 8.69853C6.69037 8.74468 6.67307 8.78917 6.64185 8.82338C6.63653 8.82865 6.63084 8.83355 6.62485 8.83803L6.6185 8.84343ZM6.40726 8.59709L6.61939 8.82352C6.62362 8.82019 6.62762 8.81658 6.63135 8.81272C6.65994 8.78144 6.67578 8.74073 6.67578 8.69853C6.67578 8.65634 6.65994 8.61565 6.63135 8.58435C6.61785 8.56942 6.60133 8.55749 6.58288 8.54932C6.5644 8.54117 6.54441 8.53694 6.52419 8.53694C6.50398 8.53694 6.48396 8.54117 6.4655 8.54932C6.44702 8.55749 6.4305 8.56942 6.41701 8.58435C6.41345 8.58835 6.4102 8.59261 6.40726 8.59709Z", fill: "#603913" }),
            React.createElement("path", { d: "M6.61019 8.78935C6.63287 8.76445 6.64544 8.73211 6.64544 8.69857C6.64544 8.66503 6.63287 8.63269 6.61019 8.60779C6.59941 8.59595 6.58625 8.58649 6.57155 8.58002C6.55688 8.57352 6.54098 8.57019 6.52488 8.57019C6.50878 8.57019 6.49287 8.57352 6.47817 8.58002C6.4635 8.58649 6.45034 8.59595 6.43956 8.60779C6.43404 8.61356 6.42912 8.61983 6.4248 8.62653L6.59202 8.80472C6.59854 8.80018 6.60465 8.79503 6.61019 8.78935Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.59152 8.8143L6.41602 8.62749L6.41926 8.62236C6.42358 8.61531 6.42853 8.60864 6.43405 8.60246C6.44542 8.58988 6.45933 8.57983 6.4749 8.57294C6.49047 8.56606 6.50732 8.5625 6.52438 8.5625C6.54143 8.5625 6.55828 8.56606 6.57382 8.57294C6.58939 8.57983 6.60334 8.58988 6.6147 8.60246C6.63867 8.62883 6.65192 8.66305 6.65192 8.69849C6.65192 8.73397 6.63867 8.76819 6.6147 8.79453C6.60896 8.80055 6.60266 8.80604 6.59594 8.81091L6.59152 8.8143ZM6.43433 8.62572L6.59314 8.79484C6.59732 8.79145 6.60132 8.78784 6.6051 8.78401C6.62641 8.76054 6.63822 8.73008 6.63822 8.69849C6.63822 8.66694 6.62641 8.63648 6.6051 8.61301C6.59499 8.60184 6.58262 8.59291 6.56878 8.58678C6.55495 8.58067 6.53997 8.57751 6.52482 8.57751C6.50968 8.57751 6.4947 8.58067 6.48086 8.58678C6.46703 8.59291 6.45466 8.60184 6.44452 8.61301C6.4408 8.61696 6.43738 8.62122 6.43433 8.62572Z", fill: "#603913" }),
            React.createElement("path", { d: "M6.77081 8.2975L6.81897 8.24614L6.78483 8.20988L6.81261 8.18018L6.78483 8.1505L6.75809 8.17886L6.73401 8.15313L6.76075 8.12488L6.73477 8.09724L6.70817 8.12546L6.67079 8.08582L6.62207 8.13762L6.77081 8.2975Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.77092 8.30812L6.6123 8.13754L6.67138 8.07507L6.70874 8.11486L6.73534 8.08647L6.77123 8.1248L6.74463 8.15305L6.75869 8.16767L6.78498 8.1393L6.82278 8.17968L6.79487 8.20891L6.829 8.2452L6.77092 8.30812ZM6.63224 8.13768L6.77092 8.28661L6.80903 8.24607L6.77493 8.20981L6.80271 8.18055L6.78498 8.16154L6.75824 8.18976L6.72425 8.15347L6.75085 8.12525L6.73489 8.10828L6.70832 8.13664L6.67094 8.09672L6.63224 8.13768Z", fill: "#603913" }),
            React.createElement("path", { d: "M6.9749 8.38134L7.02306 8.33013L6.98879 8.29387L7.01671 8.26416L6.98879 8.23448L6.96222 8.2627L6.93828 8.23711L6.96471 8.20886L6.93887 8.18122L6.9123 8.20945L6.87492 8.1698L6.82617 8.2216L6.9749 8.38134Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.976 8.3921L6.81738 8.22152L6.87646 8.15906L6.91382 8.19887L6.94042 8.17048L6.97631 8.20867L6.94971 8.23704L6.9645 8.25168L6.99093 8.22329L7.0289 8.26366L7.00098 8.29292L7.03408 8.32949L6.976 8.3921ZM6.83732 8.22169L6.976 8.37059L7.01411 8.33008L6.98001 8.29379L7.00792 8.26453L6.98989 8.24552L6.96346 8.27377L6.92933 8.23748L6.95593 8.20909L6.93997 8.19227L6.9134 8.22052L6.87602 8.18073L6.83732 8.22169Z", fill: "#603913" }),
            React.createElement("path", { d: "M7.04717 8.59939L7.09517 8.54807L7.06106 8.51164L7.08898 8.48193L7.06106 8.45239L7.03446 8.48062L7.01038 8.45502L7.03698 8.42677L7.01097 8.39914L6.98454 8.4275L6.94716 8.38757L6.89844 8.43951L7.04717 8.59939Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M7.04648 8.60998L7.04147 8.60472L6.8877 8.43954L6.94677 8.37708L6.98415 8.41672L7.01059 8.3885L7.04665 8.4268L7.02005 8.45505L7.03483 8.46967L7.0614 8.44131L7.09923 8.48168L7.07146 8.51094L7.10556 8.54737L7.04648 8.60998ZM6.90763 8.43954L7.04648 8.58876L7.08459 8.5481L7.05032 8.51167L7.07826 8.48241L7.06037 8.46323L7.0338 8.49162L6.99981 8.45533L7.0264 8.42711L7.01031 8.41L6.98385 8.43837L6.94649 8.39858L6.90763 8.43954Z", fill: "#603913" }),
            React.createElement("path", { d: "M6.63026 8.30925L6.61133 8.28907L6.66332 8.23376L6.68225 8.25395L6.63026 8.30925Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.63013 8.32L6.60059 8.28911L6.66261 8.22314L6.69215 8.254L6.63013 8.32ZM6.62125 8.28911L6.63013 8.29863L6.67207 8.25476L6.66319 8.24524L6.62125 8.28911Z", fill: "#603913" }),
            React.createElement("path", { d: "M6.83659 8.41583L6.79492 8.37137L6.83659 8.3269L6.87839 8.37137L6.83659 8.41583Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.83684 8.42648L6.78516 8.37132L6.83684 8.31616L6.8887 8.37132L6.83684 8.42648ZM6.80509 8.37132L6.83684 8.40526L6.86876 8.37132L6.83684 8.33753L6.80509 8.37132Z", fill: "#603913" }),
            React.createElement("path", { d: "M6.91241 8.60995L6.88965 8.58565L6.9415 8.53052L6.96424 8.55465L6.91241 8.60995Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M6.91253 8.62055L6.87988 8.5856L6.94176 8.51978L6.97455 8.55458L6.91253 8.62055ZM6.89982 8.5856L6.91253 8.59935L6.95461 8.55458L6.94176 8.54097L6.89982 8.5856Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.63196 8.50019L4.23374 8.92442L4.02441 8.70148L4.4228 8.27722L4.63196 8.50019Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.234 8.93516L4.22899 8.92973L4.01465 8.70139L4.01966 8.69612L4.42292 8.2666L4.64227 8.50068L4.6374 8.50595L4.234 8.93516ZM4.03475 8.70108L4.234 8.91349L4.62233 8.49979L4.42292 8.28752L4.03475 8.70108Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.1535 8.59261L4.0371 8.71651L3.88867 8.55839L4.00507 8.43433L4.1535 8.59261Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.03741 8.72711L4.03237 8.72185L3.87891 8.5583L4.00535 8.42371L4.16386 8.59283L4.03741 8.72711ZM3.89884 8.5583L4.03741 8.70589L4.1439 8.59252L4.00535 8.44493L3.89884 8.5583Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.69874 8.51549L4.24645 8.99723L4.19238 8.93972L4.64467 8.45801L4.69874 8.51549Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.2466 9.00785L4.18262 8.93967L4.64498 8.44727L4.70893 8.51545L4.70406 8.52071L4.2466 9.00785ZM4.20227 8.93967L4.2466 8.98666L4.68883 8.51545L4.64453 8.46849L4.20227 8.93967Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.29496 8.44185L4.17857 8.56592L3.97266 8.34648L4.08905 8.22241L4.29496 8.44185Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.17886 8.57647L4.17384 8.57121L3.96289 8.34665L4.08934 8.21191L4.3053 8.44188L4.17886 8.57647ZM3.98283 8.34665L4.17886 8.55511L4.28537 8.44188L4.08934 8.23314L3.98283 8.34665Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.43368 8.29482L4.31711 8.41872L4.17871 8.27141L4.29528 8.14734L4.43368 8.29482Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.31665 8.42933L4.16895 8.27133L4.29539 8.1366L4.44309 8.29474L4.31665 8.42933ZM4.18829 8.27105L4.31665 8.40783L4.42316 8.29446L4.29481 8.15751L4.18829 8.27105Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.46803 8.26916L4.01574 8.75101L3.97363 8.7061L4.42594 8.22424L4.46803 8.26916Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.01503 8.76152L3.96289 8.70608L3.9679 8.70065L4.42582 8.2135L4.47795 8.26911L4.47308 8.27451L4.01503 8.76152ZM3.98283 8.70608L4.01503 8.74029L4.45816 8.26911L4.42596 8.23487L3.98283 8.70608Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.51309 8.56349C4.49892 8.54792 4.48162 8.53549 4.4623 8.52695C4.44298 8.51843 4.42206 8.51404 4.40089 8.51404C4.37975 8.51404 4.35881 8.51843 4.33949 8.52695C4.32017 8.53549 4.30286 8.54792 4.2887 8.56349C4.25876 8.59625 4.24219 8.63883 4.24219 8.68302C4.24219 8.7272 4.25876 8.76979 4.2887 8.80252C4.29416 8.80821 4.30009 8.81339 4.30642 8.81803L4.52801 8.58236C4.52356 8.57569 4.51858 8.56937 4.51309 8.56349Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.30818 8.82701L4.30168 8.82189C4.29572 8.81741 4.29009 8.81253 4.28485 8.80727C4.2536 8.77303 4.23633 8.72853 4.23633 8.68239C4.23633 8.63627 4.2536 8.59178 4.28485 8.55754C4.29961 8.54124 4.31767 8.52819 4.33788 8.51929C4.35807 8.51036 4.37994 8.50574 4.40206 8.50574C4.42418 8.50574 4.44605 8.51036 4.46624 8.51929C4.48642 8.52819 4.50448 8.54124 4.51927 8.55754C4.52467 8.56333 4.52963 8.56955 4.53402 8.57613L4.53758 8.58139L4.53419 8.58711L4.30818 8.82701ZM4.40212 8.52052C4.3819 8.52061 4.36191 8.52486 4.34346 8.53301C4.32498 8.54119 4.30846 8.55306 4.29488 8.56793C4.26629 8.59923 4.25047 8.63991 4.25047 8.68211C4.25047 8.72431 4.26629 8.76502 4.29488 8.79629C4.29854 8.80024 4.30255 8.80385 4.30686 8.8071L4.51941 8.58067C4.51636 8.57619 4.513 8.57193 4.50936 8.56793C4.49575 8.5532 4.47917 8.54141 4.46072 8.53335C4.44227 8.52531 4.4223 8.52114 4.40212 8.52111V8.52052Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.48705 8.5918C4.47633 8.57996 4.46317 8.57049 4.44849 8.56403C4.43379 8.55753 4.41792 8.5542 4.40182 8.5542C4.38575 8.5542 4.36987 8.55753 4.35517 8.56403C4.3405 8.57049 4.32734 8.57996 4.31661 8.5918C4.29385 8.61667 4.28125 8.64904 4.28125 8.68258C4.28125 8.71612 4.29385 8.74849 4.31661 8.77336C4.32199 8.77876 4.32787 8.78366 4.33417 8.78797L4.50139 8.60995C4.49719 8.60348 4.4924 8.5974 4.48705 8.5918Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.33526 8.79839L4.33053 8.79486C4.32367 8.79019 4.31737 8.78475 4.31177 8.77865C4.28771 8.75227 4.27441 8.71803 4.27441 8.68253C4.27441 8.64702 4.28771 8.61278 4.31177 8.5864C4.32316 8.57394 4.33708 8.56394 4.35262 8.55711C4.36813 8.55028 4.38496 8.54675 4.40195 8.54675C4.41895 8.54675 4.43575 8.55028 4.45126 8.55711C4.4668 8.56394 4.48072 8.57394 4.49211 8.5864C4.49763 8.59264 4.50259 8.59934 4.5069 8.60645L4.51015 8.61157L4.506 8.61597L4.33526 8.79839ZM4.40201 8.56168C4.38689 8.56176 4.37191 8.56495 4.35808 8.57106C4.34425 8.57713 4.33184 8.58601 4.32165 8.5971C4.30029 8.62051 4.28844 8.65097 4.28844 8.68253C4.28844 8.71408 4.30029 8.74455 4.32165 8.76795C4.32523 8.77199 4.32918 8.77565 4.33347 8.77893L4.49301 8.60981C4.48987 8.60538 4.48646 8.60113 4.48282 8.5971C4.4726 8.58593 4.46011 8.57699 4.44619 8.57092C4.43228 8.56481 4.41724 8.56168 4.40201 8.56168Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.02483 8.42035L3.97667 8.36914L3.94257 8.40557L3.91479 8.37589L3.88688 8.40557L3.91348 8.43382L3.8894 8.45941L3.8628 8.43119L3.83695 8.45883L3.86352 8.48705L3.82617 8.52684L3.87492 8.57878L4.02483 8.42035Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.87451 8.58935L3.81543 8.52688L3.85281 8.4871L3.82621 8.45887L3.86211 8.42054L3.88871 8.4489L3.90346 8.43429L3.87672 8.40606L3.91469 8.36569L3.94247 8.39492L3.9766 8.35852L4.03478 8.4204L3.87451 8.58935ZM3.83567 8.52688L3.87451 8.56813L4.01454 8.4204L3.97629 8.37986L3.94216 8.41614L3.91441 8.38688L3.89652 8.4059L3.92312 8.43415L3.88899 8.47041L3.86241 8.44218L3.84645 8.45915L3.87305 8.48738L3.83567 8.52688Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.1041 8.20292L4.05594 8.15173L4.02184 8.18799L3.99406 8.15831L3.96615 8.18799L3.99272 8.21639L3.96864 8.24198L3.94207 8.21361L3.91605 8.24125L3.94265 8.26964L3.90527 8.30943L3.95402 8.36137L4.1041 8.20292Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M3.95361 8.37197L3.89453 8.30951L3.93188 8.26972L3.90531 8.24147L3.94121 8.20316L3.96778 8.23153L3.98256 8.21691L3.95596 8.18852L3.99379 8.14828L4.02171 8.17754L4.05581 8.14111L4.11402 8.20299L3.95361 8.37197ZM3.91492 8.30951L3.95361 8.35075L4.09364 8.20299L4.05553 8.16234L4.0214 8.19877L3.99348 8.16951L3.97548 8.18807L4.00205 8.21646L3.96809 8.25275L3.94149 8.22436L3.9257 8.24177L3.95227 8.27L3.91492 8.30951Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.30803 8.12667L4.25987 8.07532L4.22577 8.11175L4.19786 8.08218L4.17008 8.11175L4.19668 8.14011L4.1726 8.16573L4.146 8.13748L4.12002 8.16497L4.14673 8.19337L4.10938 8.23315L4.15812 8.28495L4.30803 8.12667Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.15869 8.29558L4.09961 8.23311L4.13699 8.19332L4.11039 8.16493L4.14629 8.1266L4.17289 8.15499L4.18764 8.14034L4.1609 8.11198L4.19887 8.07174L4.22665 8.101L4.26078 8.06458L4.31896 8.12646L4.15869 8.29558ZM4.11985 8.23311L4.15869 8.27435L4.29872 8.1266L4.26047 8.08594L4.22695 8.12237L4.19918 8.09311L4.18129 8.11212L4.20789 8.14051L4.17375 8.17677L4.14718 8.14841L4.13122 8.16537L4.15782 8.19374L4.11985 8.23311Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.03574 8.57018L4.01667 8.5905L3.96484 8.5352L3.98388 8.51501L4.03574 8.57018Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.01699 8.6011L3.95508 8.53513L3.98462 8.50427L4.04636 8.5701L4.01699 8.6011ZM3.97546 8.53513L4.01727 8.57973L4.02628 8.5701L3.98448 8.5262L3.97546 8.53513Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.13634 8.35049L4.09454 8.39513L4.05273 8.35049L4.09454 8.30603L4.13634 8.35049Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.09368 8.40561L4.04199 8.35045L4.09368 8.29529L4.14553 8.35045L4.09368 8.40561ZM4.06193 8.35045L4.09368 8.38438L4.12543 8.35045L4.09368 8.31665L4.06193 8.35045Z", fill: "#603913" }),
            React.createElement("path", { d: "M4.31887 8.26953L4.29614 8.29381L4.24414 8.23865L4.26704 8.21423L4.31887 8.26953Z", fill: "#FEDF00" }),
            React.createElement("path", { d: "M4.29625 8.30451L4.23438 8.23868L4.26716 8.20374L4.32904 8.26956L4.29625 8.30451ZM4.25431 8.23868L4.29625 8.28258L4.30897 8.26898L4.26716 8.22507L4.25431 8.23868Z", fill: "#603913" }),
            React.createElement("path", { d: "M5.17285 6.59485H5.75144V7.10073C5.75144 7.10073 5.73666 7.18851 5.70225 7.23779C5.6033 7.38658 5.46341 7.38658 5.46341 7.38658C5.41432 7.38445 5.36667 7.36961 5.32517 7.34351C5.2837 7.31745 5.24988 7.28105 5.22706 7.23795C5.20057 7.19542 5.18299 7.14805 5.17537 7.09868L5.17285 6.59485Z", fill: "#063796" }),
            React.createElement("path", { d: "M5.52491 6.94598C5.52413 6.95676 5.52021 6.96707 5.5136 6.97566C5.50696 6.98423 5.49798 6.99073 5.4877 6.99434C5.47742 6.99792 5.46631 6.99845 5.45572 6.99588C5.44511 6.9933 5.43554 6.98773 5.42809 6.97984C5.42067 6.97191 5.41574 6.96203 5.41389 6.95139C5.41205 6.94075 5.41339 6.9298 5.41773 6.91992C5.4221 6.91 5.42926 6.90158 5.43839 6.89567C5.44752 6.88976 5.45816 6.8866 5.46908 6.8866C5.48442 6.88718 5.49893 6.89374 5.50937 6.90488C5.51984 6.916 5.52544 6.93078 5.52491 6.94598Z", fill: "white" }),
            React.createElement("path", { d: "M5.36767 6.78597C5.36688 6.79675 5.36291 6.80702 5.3563 6.81559C5.34966 6.82416 5.34065 6.83063 5.33037 6.83421C5.3201 6.83777 5.30898 6.8383 5.2984 6.8357C5.28784 6.83312 5.27824 6.82752 5.27084 6.81962C5.26342 6.8117 5.2585 6.80182 5.25665 6.79118C5.25483 6.78056 5.25617 6.76962 5.26054 6.75973C5.26488 6.74982 5.27205 6.74142 5.28118 6.73551C5.2903 6.72958 5.30094 6.72644 5.31184 6.72644C5.32721 6.727 5.34174 6.73361 5.35221 6.74475C5.36268 6.75592 5.36823 6.77076 5.36767 6.78597Z", fill: "white" }),
            React.createElement("path", { d: "M5.36767 7.10826C5.36688 7.11902 5.36291 7.12932 5.3563 7.13789C5.34966 7.14643 5.34065 7.1529 5.33037 7.15648C5.3201 7.16004 5.30898 7.16057 5.2984 7.15797C5.28784 7.15539 5.27824 7.14979 5.27084 7.14189C5.26342 7.13397 5.2585 7.12411 5.25665 7.11347C5.25483 7.10283 5.25617 7.09188 5.26054 7.082C5.26488 7.07212 5.27205 7.06369 5.28118 7.05778C5.2903 7.05187 5.30094 7.04871 5.31184 7.04871C5.32721 7.04929 5.34174 7.05587 5.35221 7.06705C5.36268 7.07819 5.36823 7.09303 5.36767 7.10826Z", fill: "white" }),
            React.createElement("path", { d: "M5.67433 6.78597C5.67351 6.79672 5.66957 6.80702 5.66293 6.81559C5.65632 6.82416 5.64733 6.8306 5.63706 6.83418C5.62678 6.83777 5.61567 6.8383 5.60511 6.83572C5.59453 6.83315 5.58495 6.82755 5.57753 6.81965C5.57011 6.81178 5.56516 6.8019 5.56331 6.79129C5.56146 6.78065 5.5628 6.76973 5.56712 6.75982C5.57146 6.74993 5.57862 6.7415 5.5877 6.73557C5.5968 6.72963 5.60744 6.72647 5.61833 6.72644C5.63373 6.727 5.64826 6.73361 5.65876 6.74475C5.66923 6.75592 5.67483 6.77074 5.67433 6.78597Z", fill: "white" }),
            React.createElement("path", { d: "M5.67433 7.10826C5.67351 7.11902 5.66957 7.12929 5.66293 7.13786C5.65632 7.14643 5.64733 7.1529 5.63706 7.15646C5.62678 7.16004 5.61567 7.16057 5.60511 7.158C5.59453 7.15542 5.58495 7.14985 5.57753 7.14195C5.57011 7.13405 5.56516 7.12417 5.56331 7.11356C5.56146 7.10292 5.5628 7.092 5.56712 7.08211C5.57146 7.0722 5.57862 7.06377 5.5877 7.05783C5.5968 7.05193 5.60744 7.04873 5.61833 7.04871C5.63373 7.04929 5.64826 7.05587 5.65876 7.06702C5.66923 7.07819 5.67483 7.093 5.67433 7.10826Z", fill: "white" }),
            React.createElement("path", { d: "M5.9082 6.59485H6.48696V7.10073C6.48696 7.10073 6.47218 7.18851 6.43777 7.23779C6.33879 7.38658 6.1989 7.38658 6.1989 7.38658C6.14982 7.38445 6.10216 7.36961 6.06069 7.34351C6.01922 7.31745 5.98537 7.28105 5.96258 7.23795C5.93609 7.19542 5.91851 7.14805 5.91086 7.09868L5.9082 6.59485Z", fill: "#063796" }),
            React.createElement("path", { d: "M6.25929 6.94598C6.2585 6.95676 6.25458 6.96707 6.24795 6.97566C6.24134 6.98423 6.23235 6.99073 6.22208 6.99434C6.2118 6.99792 6.20068 6.99845 6.19007 6.99588C6.17949 6.9933 6.16991 6.98773 6.16246 6.97984C6.15504 6.97191 6.15012 6.96203 6.14827 6.95139C6.14642 6.94075 6.14776 6.9298 6.1521 6.91992C6.15647 6.91 6.16364 6.90158 6.17277 6.89567C6.18187 6.88976 6.19254 6.8866 6.20346 6.8866C6.2188 6.88718 6.23328 6.89374 6.24375 6.90488C6.25422 6.916 6.25979 6.93078 6.25929 6.94598Z", fill: "white" }),
            React.createElement("path", { d: "M6.10304 6.78597C6.10223 6.79675 6.09828 6.80702 6.09164 6.81559C6.08501 6.82416 6.07602 6.83063 6.06572 6.83421C6.05544 6.83777 6.04432 6.8383 6.03377 6.8357C6.02318 6.83312 6.01358 6.82752 6.00619 6.81962C5.99877 6.8117 5.99384 6.80182 5.99202 6.79118C5.99017 6.78056 5.99151 6.76962 5.99588 6.75973C6.00022 6.74982 6.00742 6.74142 6.01652 6.73551C6.02565 6.72958 6.03629 6.72644 6.04718 6.72644C6.06258 6.727 6.07708 6.73361 6.08756 6.74475C6.09803 6.75592 6.1036 6.77076 6.10304 6.78597Z", fill: "white" }),
            React.createElement("path", { d: "M6.10304 7.10826C6.10223 7.11902 6.09828 7.12932 6.09164 7.13789C6.08501 7.14643 6.07602 7.1529 6.06572 7.15648C6.05544 7.16004 6.04432 7.16057 6.03377 7.15797C6.02318 7.15539 6.01358 7.14979 6.00619 7.14189C5.99877 7.13397 5.99384 7.12411 5.99202 7.11347C5.99017 7.10283 5.99151 7.09188 5.99588 7.082C6.00022 7.07212 6.00742 7.06369 6.01652 7.05778C6.02565 7.05187 6.03629 7.04871 6.04718 7.04871C6.06258 7.04929 6.07708 7.05587 6.08756 7.06705C6.09803 7.07819 6.1036 7.09303 6.10304 7.10826Z", fill: "white" }),
            React.createElement("path", { d: "M6.40966 6.78597C6.40885 6.79672 6.4049 6.80702 6.39829 6.81559C6.39165 6.82416 6.38267 6.8306 6.37239 6.83418C6.36211 6.83777 6.35103 6.8383 6.34044 6.83572C6.32986 6.83315 6.32028 6.82755 6.31286 6.81965C6.30544 6.81178 6.30051 6.8019 6.29866 6.79129C6.29682 6.78065 6.29813 6.76973 6.30247 6.75982C6.30678 6.74993 6.31395 6.7415 6.32305 6.73557C6.33215 6.72963 6.34279 6.72647 6.35369 6.72644C6.36906 6.727 6.38359 6.73361 6.39409 6.74475C6.40459 6.75592 6.41019 6.77074 6.40966 6.78597Z", fill: "white" }),
            React.createElement("path", { d: "M6.40966 7.10826C6.40885 7.11902 6.4049 7.12929 6.39829 7.13786C6.39165 7.14643 6.38267 7.1529 6.37239 7.15646C6.36211 7.16004 6.35103 7.16057 6.34044 7.158C6.32986 7.15542 6.32028 7.14985 6.31286 7.14195C6.30544 7.13405 6.30051 7.12417 6.29866 7.11356C6.29682 7.10292 6.29813 7.092 6.30247 7.08211C6.30678 7.0722 6.31395 7.06377 6.32305 7.05783C6.33215 7.05193 6.34279 7.04873 6.35369 7.04871C6.36906 7.04929 6.38359 7.05587 6.39409 7.06702C6.40459 7.07819 6.41019 7.093 6.40966 7.10826Z", fill: "white" }),
            React.createElement("path", { d: "M5.17285 5.61353H5.75144V6.1194C5.75144 6.1194 5.73666 6.20715 5.70225 6.25646C5.6033 6.40523 5.46341 6.40523 5.46341 6.40523C5.41432 6.40313 5.36667 6.38829 5.32517 6.36219C5.2837 6.33612 5.24988 6.29969 5.22706 6.2566C5.2006 6.21407 5.18302 6.16672 5.17537 6.11733L5.17285 5.61353Z", fill: "#063796" }),
            React.createElement("path", { d: "M5.52491 5.96492C5.5241 5.97567 5.52012 5.98598 5.51352 5.99455C5.50688 6.00311 5.49786 6.00958 5.48759 6.01314C5.47731 6.01672 5.4662 6.01725 5.45561 6.01465C5.44506 6.01205 5.43545 6.00647 5.42806 5.99855C5.42064 5.99065 5.41571 5.98077 5.41389 5.97013C5.41204 5.95949 5.41339 5.94857 5.41776 5.93869C5.4221 5.92878 5.42929 5.92038 5.43839 5.91444C5.44752 5.90853 5.45816 5.9054 5.46905 5.9054C5.48442 5.90596 5.49896 5.91256 5.50943 5.92371C5.5199 5.93488 5.52547 5.94969 5.52491 5.96492Z", fill: "white" }),
            React.createElement("path", { d: "M5.36767 5.80477C5.36688 5.81552 5.36291 5.82582 5.3563 5.83439C5.34966 5.84296 5.34065 5.84943 5.33037 5.85298C5.3201 5.85657 5.30898 5.85707 5.2984 5.8545C5.28784 5.85189 5.27824 5.84632 5.27084 5.8384C5.26342 5.8305 5.2585 5.82062 5.25665 5.80998C5.25483 5.79934 5.25617 5.78842 5.26054 5.7785C5.26488 5.76862 5.27205 5.76019 5.28118 5.75428C5.2903 5.74838 5.30094 5.74524 5.31184 5.74524C5.32721 5.7458 5.34174 5.75238 5.35221 5.76355C5.36268 5.77472 5.36823 5.78954 5.36767 5.80477Z", fill: "white" }),
            React.createElement("path", { d: "M5.36766 6.12694C5.36688 6.13769 5.36291 6.14799 5.3563 6.15656C5.34966 6.16513 5.34065 6.17157 5.33037 6.17515C5.32009 6.17874 5.30898 6.17924 5.29839 6.17667C5.28784 6.17406 5.27824 6.16846 5.27084 6.16057C5.26342 6.15267 5.2585 6.14279 5.25665 6.13215C5.25483 6.12151 5.25617 6.11056 5.26054 6.10067C5.26488 6.09079 5.27205 6.08236 5.28118 6.07645C5.2903 6.07055 5.30094 6.06738 5.31183 6.06738C5.32721 6.068 5.34171 6.07461 5.35215 6.08575C5.36262 6.09692 5.3682 6.11171 5.36766 6.12694Z", fill: "white" }),
            React.createElement("path", { d: "M5.67433 5.80477C5.67351 5.81552 5.66957 5.82582 5.66293 5.83436C5.65632 5.84293 5.64733 5.8494 5.63706 5.85298C5.62678 5.85654 5.61567 5.85707 5.60511 5.8545C5.59453 5.85192 5.58495 5.84635 5.57753 5.83845C5.57011 5.83056 5.56516 5.8207 5.56331 5.81006C5.56146 5.79945 5.5628 5.7885 5.56712 5.77862C5.57146 5.76873 5.57862 5.7603 5.5877 5.75437C5.5968 5.74843 5.60744 5.74527 5.61833 5.74524C5.63373 5.7458 5.64826 5.75238 5.65876 5.76355C5.66923 5.7747 5.67483 5.78954 5.67433 5.80477Z", fill: "white" }),
            React.createElement("path", { d: "M5.67433 6.12694C5.67351 6.13769 5.66957 6.14797 5.66293 6.15654C5.65632 6.1651 5.64733 6.17157 5.63706 6.17516C5.62678 6.17871 5.61567 6.17924 5.60511 6.17667C5.59453 6.17409 5.58495 6.16852 5.57753 6.16062C5.57011 6.15273 5.56516 6.14287 5.56331 6.13223C5.56146 6.12159 5.5628 6.11067 5.56712 6.10079C5.57146 6.09088 5.57862 6.08245 5.5877 6.07651C5.5968 6.0706 5.60744 6.06741 5.61833 6.06738C5.63373 6.06797 5.64826 6.07455 5.65876 6.08572C5.66923 6.09687 5.67483 6.11168 5.67433 6.12694Z", fill: "white" }),
            React.createElement("path", { d: "M5.17285 7.59668H5.75144V8.10239C5.75144 8.10239 5.73666 8.19017 5.70225 8.23945C5.6033 8.3881 5.46341 8.3881 5.46341 8.3881C5.41432 8.38597 5.36667 8.37113 5.32517 8.34504C5.2837 8.31897 5.24988 8.28257 5.22706 8.23945C5.20057 8.19695 5.18299 8.14957 5.17537 8.1002L5.17285 7.59668Z", fill: "#063796" }),
            React.createElement("path", { d: "M5.52491 7.94784C5.5241 7.95862 5.52013 7.96889 5.51352 7.97746C5.50688 7.98603 5.49787 7.9925 5.48759 7.99608C5.47731 7.99964 5.4662 8.00017 5.45561 7.99756C5.44506 7.99499 5.43545 7.98939 5.42806 7.98149C5.42064 7.97357 5.41571 7.96368 5.41389 7.95307C5.41204 7.94243 5.41339 7.93148 5.41776 7.9216C5.4221 7.91171 5.42929 7.90329 5.43839 7.89738C5.44752 7.89147 5.45816 7.88831 5.46905 7.88831C5.48443 7.88892 5.49893 7.89553 5.50937 7.90667C5.51985 7.91782 5.52542 7.93263 5.52491 7.94784Z", fill: "white" }),
            React.createElement("path", { d: "M5.36767 7.78817C5.36688 7.79895 5.36291 7.80923 5.3563 7.81779C5.34966 7.82636 5.34065 7.83283 5.33037 7.83641C5.3201 7.83997 5.30898 7.8405 5.2984 7.8379C5.28784 7.83532 5.27824 7.82972 5.27084 7.8218C5.26342 7.8139 5.2585 7.80402 5.25665 7.79338C5.25483 7.78274 5.25617 7.77182 5.26054 7.76193C5.26488 7.75202 5.27205 7.74362 5.28118 7.73771C5.2903 7.73177 5.30094 7.72864 5.31184 7.72864C5.32721 7.7292 5.34174 7.73581 5.35221 7.74695C5.36268 7.75812 5.36823 7.77294 5.36767 7.78817Z", fill: "white" }),
            React.createElement("path", { d: "M5.36767 8.1101C5.36688 8.12085 5.36291 8.13115 5.3563 8.13972C5.34966 8.14829 5.34065 8.15476 5.33037 8.15832C5.3201 8.1619 5.30898 8.1624 5.2984 8.15983C5.28784 8.15722 5.27824 8.15165 5.27084 8.14373C5.26342 8.13583 5.2585 8.12595 5.25665 8.11531C5.25483 8.10466 5.25617 8.09374 5.26054 8.08383C5.26488 8.07395 5.27205 8.06552 5.28118 8.05961C5.2903 8.0537 5.30094 8.05057 5.31184 8.05054C5.32721 8.05113 5.34174 8.05771 5.35221 8.06888C5.36268 8.08005 5.36823 8.09486 5.36767 8.1101Z", fill: "white" }),
            React.createElement("path", { d: "M5.67433 7.78816C5.67351 7.79892 5.66957 7.80922 5.66293 7.81779C5.65632 7.82633 5.64733 7.8328 5.63706 7.83638C5.62678 7.83996 5.61567 7.8405 5.60511 7.83792C5.59453 7.83532 5.58495 7.82974 5.57753 7.82185C5.57011 7.81395 5.56516 7.8041 5.56331 7.79348C5.56146 7.78284 5.5628 7.77192 5.56712 7.76201C5.57146 7.75213 5.57862 7.7437 5.5877 7.73777C5.5968 7.73183 5.60744 7.72867 5.61833 7.72864C5.63373 7.7292 5.64826 7.73581 5.65876 7.74695C5.66923 7.75812 5.67483 7.77293 5.67433 7.78816Z", fill: "white" }),
            React.createElement("path", { d: "M5.67433 8.11009C5.67351 8.12084 5.66957 8.13112 5.66293 8.13969C5.65632 8.14825 5.64733 8.15472 5.63706 8.15831C5.62678 8.16186 5.61567 8.1624 5.60511 8.15982C5.59453 8.15724 5.58495 8.15167 5.57753 8.14378C5.57011 8.13588 5.56516 8.12602 5.56331 8.11538C5.56146 8.10477 5.5628 8.09382 5.56712 8.08394C5.57146 8.07406 5.57862 8.0656 5.5877 8.05969C5.5968 8.05376 5.60744 8.05059 5.61833 8.05054C5.63373 8.05113 5.64826 8.0577 5.65876 8.06888C5.66923 8.08002 5.67483 8.09486 5.67433 8.11009Z", fill: "white" }),
            React.createElement("path", { d: "M4.4043 6.61011H4.98275V7.11526C4.98275 7.11526 4.96797 7.20301 4.93369 7.25232C4.83457 7.40108 4.69471 7.40108 4.69471 7.40108C4.64574 7.39884 4.59823 7.38395 4.5569 7.35788C4.51557 7.33181 4.48186 7.29547 4.45909 7.25246C4.43272 7.20993 4.41519 7.16255 4.40755 7.11319L4.4043 6.61011Z", fill: "#063796" }),
            React.createElement("path", { d: "M4.76026 6.94598C4.75948 6.95676 4.75556 6.96707 4.74895 6.97566C4.74234 6.98423 4.73333 6.99073 4.72305 6.99434C4.71278 6.99792 4.70166 6.99845 4.69108 6.99588C4.68049 6.9933 4.67089 6.98773 4.66347 6.97984C4.65602 6.97191 4.65109 6.96203 4.64924 6.95139C4.6474 6.94075 4.64874 6.9298 4.65311 6.91992C4.65745 6.91 4.66462 6.90158 4.67374 6.89567C4.68287 6.88976 4.69354 6.8866 4.70443 6.8866C4.71978 6.88718 4.73428 6.89374 4.74475 6.90488C4.7552 6.916 4.7608 6.93078 4.76026 6.94598Z", fill: "white" }),
            React.createElement("path", { d: "M4.60399 6.78597C4.60318 6.79672 4.59923 6.80702 4.59263 6.81559C4.58599 6.82416 4.577 6.8306 4.56672 6.83418C4.55645 6.83777 4.54533 6.8383 4.53478 6.83572C4.52419 6.83315 4.51462 6.82755 4.5072 6.81965C4.49978 6.81178 4.49485 6.8019 4.493 6.79129C4.49115 6.78065 4.49247 6.76973 4.49681 6.75982C4.50112 6.74993 4.50829 6.7415 4.51739 6.73557C4.52649 6.72963 4.53713 6.72647 4.54802 6.72644C4.56339 6.727 4.57793 6.73361 4.58843 6.74475C4.59893 6.75592 4.60453 6.77074 4.60399 6.78597Z", fill: "white" }),
            React.createElement("path", { d: "M4.60399 7.10826C4.60318 7.11902 4.59923 7.12929 4.59263 7.13786C4.58599 7.14643 4.577 7.1529 4.56672 7.15646C4.55645 7.16004 4.54533 7.16057 4.53478 7.158C4.52419 7.15542 4.51462 7.14985 4.5072 7.14195C4.49978 7.13405 4.49485 7.12417 4.493 7.11356C4.49115 7.10292 4.49247 7.092 4.49681 7.08211C4.50112 7.0722 4.50829 7.06377 4.51739 7.05783C4.52649 7.05193 4.53713 7.04873 4.54802 7.04871C4.56339 7.04929 4.57793 7.05587 4.58843 7.06702C4.59893 7.07819 4.60453 7.093 4.60399 7.10826Z", fill: "white" }),
            React.createElement("path", { d: "M4.91063 6.78597C4.90982 6.79672 4.90587 6.80702 4.89926 6.81559C4.89263 6.82416 4.88364 6.8306 4.87336 6.83418C4.86309 6.83777 4.85197 6.8383 4.84142 6.83572C4.83083 6.83315 4.82126 6.82755 4.81384 6.81965C4.80642 6.81178 4.80146 6.8019 4.79964 6.79129C4.79779 6.78065 4.79911 6.76973 4.80345 6.75982C4.80776 6.74993 4.81493 6.7415 4.82403 6.73557C4.8331 6.72963 4.84377 6.72647 4.85466 6.72644C4.87003 6.727 4.88456 6.73361 4.89506 6.74475C4.90553 6.75592 4.91113 6.77074 4.91063 6.78597Z", fill: "white" }),
            React.createElement("path", { d: "M4.91063 7.10826C4.90982 7.11902 4.90587 7.12929 4.89926 7.13786C4.89263 7.14643 4.88364 7.1529 4.87336 7.15646C4.86309 7.16004 4.85197 7.16057 4.84142 7.158C4.83083 7.15542 4.82126 7.14985 4.81384 7.14195C4.80642 7.13405 4.80146 7.12417 4.79964 7.11356C4.79779 7.10292 4.79911 7.092 4.80345 7.08211C4.80776 7.0722 4.81493 7.06377 4.82403 7.05783C4.8331 7.05193 4.84377 7.04873 4.85466 7.04871C4.87003 7.04929 4.88456 7.05587 4.89506 7.06702C4.90553 7.07819 4.91113 7.093 4.91063 7.10826Z", fill: "white" }))));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 15 15", fill: "none" }, props),
        React.createElement("mask", { id: "mask0_12568_69596", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "15", height: "15" },
            React.createElement("circle", { cx: "7.80957", cy: "7.90454", r: "7", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0_12568_69596)" },
            React.createElement("path", { d: "M19.4759 0.904541H-3.85742V14.9045H19.4759V0.904541Z", fill: "black" }),
            React.createElement("path", { d: "M19.4759 5.57129H-3.85742V14.9046H19.4759V5.57129Z", fill: "#DD0000" }),
            React.createElement("path", { d: "M19.4759 10.2378H-3.85742V14.9044H19.4759V10.2378Z", fill: "#FFCE00" }))));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 15 15", fill: "none" }, props),
        React.createElement("mask", { id: "mask0_12568_69587", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "15", height: "15" },
            React.createElement("circle", { cx: "7.96289", cy: "7.90454", r: "7", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0_12568_69587)" },
            React.createElement("path", { d: "M22.4114 -1.1394H-1.64062V18.3766H22.4114V-1.1394Z", fill: "#EE1C25" }),
            React.createElement("path", { d: "M5.14796 3.573L6.22922 6.90078L3.39844 4.8441H6.89748L4.0667 6.90078L5.14796 3.573Z", fill: "#FFFF00" }),
            React.createElement("path", { d: "M8.45366 3.00872L8.35127 4.17057L7.75119 3.17043L8.82453 3.62684L7.68791 3.88849L8.45366 3.00872Z", fill: "#FFFF00" }),
            React.createElement("path", { d: "M9.87969 4.37244L9.33446 5.4035L9.16952 4.24888L9.98163 5.08603L8.83255 4.88611L9.87969 4.37244Z", fill: "#FFFF00" }),
            React.createElement("path", { d: "M10.0164 6.42843L9.09798 7.14738L9.4184 6.02591L9.81836 7.12154L8.85079 6.47025L10.0164 6.42843Z", fill: "#FFFF00" }),
            React.createElement("path", { d: "M8.43044 7.29169L8.37631 8.45678L7.73528 7.48239L8.82662 7.8939L7.70183 8.20246L8.43044 7.29169Z", fill: "#FFFF00" }))));
};

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    YoutubeIcon: Icon$t,
    MediumIcon: Icon$s,
    TelegramIcon: Icon$r,
    TwitterIcon: Icon$q,
    WorldIcon: Icon$p,
    HumanIcon: Icon$o,
    HamburgerIcon: Icon$n,
    HamburgerCloseIcon: Icon$m,
    USAIcon: Icon$l,
    IDIcon: Icon$k,
    RUIcon: Icon$j,
    VNIcon: Icon$i,
    BDIcon: Icon$h,
    FRIcon: Icon$g,
    PTIcon: Icon$f,
    DEIcon: Icon$e,
    CNIcon: Icon$d
});

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
            return Icon$C;
        case variants$2.WARNING:
            return Icon$23;
        case variants$2.SUCCESS:
            return Icon$D;
        case variants$2.INFO:
        default:
            return Icon$22;
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
var Title = styled.div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 8px;\n  margin-left: 16px;\n  margin-right: 28px;\n  margin-bottom: 12px;\n  //white-space: nowrap;\n\n  svg {\n    margin-right: 8px;\n    fill: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 8px;\n  margin-left: 16px;\n  margin-right: 28px;\n  margin-bottom: 12px;\n  //white-space: nowrap;\n\n  svg {\n    margin-right: 8px;\n    fill: ", ";\n  }\n"])), getThemeColor);
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 16px;\n  padding-left: 16px;\n  padding-right: ", ";\n  padding-top: 16px;\n"], ["\n  flex: 1;\n  padding-bottom: 16px;\n  padding-left: 16px;\n  padding-right: ", ";\n  padding-top: 16px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? "".concat(withHandlerSpacing, "px") : "12px");
});
var CloseHandler = styled.div(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 0 32px -8px rgba(0, 0, 13, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  \n  &:nth-child(n + 1) {\n    width: ", ";\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 0 32px -8px rgba(0, 0, 13, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  \n  &:nth-child(n + 1) {\n    width: ", ";\n  }\n"])), function (_a) {
    var index = _a.index;
    return "calc(100% - ".concat(index * 5, "%)");
});
var Description = styled.p(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  color: #6b7d98;\n  font-size: 16px;\n  vertical-align: middle;\n  font-weight: 400;\n  line-height: 1.5;\n  margin: 0;\n"], ["\n  color: #6b7d98;\n  font-size: 16px;\n  vertical-align: middle;\n  font-weight: 400;\n  line-height: 1.5;\n  margin: 0;\n"])));
var Alert = function (_a) {
    var style = _a.style, title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick, index = _a.index;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, { index: index },
        React.createElement(Details, { style: style, hasHandler: !!onClick },
            React.createElement(Title, { variant: variant, hasDescription: !!children },
                React.createElement(Icon, { color: "currentColor", mr: '10px', width: "24px" }),
                React.createElement("span", null, title)),
            typeof children === "string" ? React.createElement(Description, null, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$1J, { width: "20px", color: "background" }))))));
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
var DefaultSeparator = React.createElement(Icon$1M, { color: "currentColor", width: "24px" });
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
})(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  transition: color .3s ease;\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n    color: ", ";\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  transition: color .3s ease;\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
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
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border:  ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n    fill: ", ";\n  }\n\n  // &:hover:not(:disabled):not(:checked) {\n  //   box-shadow: ", ";\n  // }\n  //\n  &:focus {\n    outline: none;\n    box-shadow: none;\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border:  ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n    fill: ", ";\n  }\n\n  // &:hover:not(:disabled):not(:checked) {\n  //   box-shadow: ", ";\n  // }\n  //\n  &:focus {\n    outline: none;\n    box-shadow: none;\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$2, getScale$2, function (_a) {
    var theme = _a.theme, isBorder = _a.isBorder;
    return isBorder ? "1px solid ".concat(theme.colors.success) : 'none';
}, function (_a) {
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
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme, isBorder = _a.isBorder;
    return isBorder ? theme.colors.card : theme.colors.success;
}, function (_a) {
    var theme = _a.theme, isBorder = _a.isBorder;
    return isBorder ? theme.colors.success : theme.colors.contrast;
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
        React.createElement(Icon$1D, { width: size, height: size }))); });
    return React.createElement("div", null, bunnies);
};
var templateObject_1$v, templateObject_2$h;

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors.".concat(color), color)(theme);
};
var getFontSize$1 = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.span(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  display: block;\n  color: ", ";\n  font-size: ", ";\n  vertical-align: middle;\n  font-weight: ", ";\n  line-height: ", ";\n  ", "\n  ", "\n  ", "\n"], ["\n  display: block;\n  color: ", ";\n  font-size: ", ";\n  vertical-align: middle;\n  font-weight: ", ";\n  line-height: ", ";\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize$1, function (_a) {
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
var getFontSize = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b;
    switch (scale) {
        case scales$3.SM:
            return "12px";
        case scales$3.LG:
            return "14px";
        case scales$3.MD:
        default:
            return "16px";
    }
};
var Input$1 = styled.input(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 8px;\n  border-color: ", ";\n  color: ", ";\n  border-width: ", ";\n  box-shadow: none;\n  border-style: solid;\n  display: block;\n  font-size: ", ";\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  transition: border-color .3s ease;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    border-color: ", ";\n  }\n  &:hover:not(:disabled) {\n    border-color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 8px;\n  border-color: ", ";\n  color: ", ";\n  border-width: ", ";\n  box-shadow: none;\n  border-style: solid;\n  display: block;\n  font-size: ", ";\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  transition: border-color .3s ease;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    border-color: ", ";\n  }\n  &:hover:not(:disabled) {\n    border-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, isLight = _a.isLight;
    return (isLight ? 'transparent' : theme.colors.card);
}, getBorderColor, function (_a) {
    var theme = _a.theme, isLight = _a.isLight;
    return (isLight ? theme.colors.light : theme.colors.contrast);
}, function (_a) {
    var isLight = _a.isLight;
    return (isLight ? '0px' : '1px');
}, getFontSize, getHeight, function (_a) {
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
    return theme.colors.gray;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.light;
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
        React.createElement(Icon$1z, { color: "success", ml: "4px" })));
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
            React.createElement(Icon$1u, null))),
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

var Icon$c = function (props) {
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
        React.createElement(Icon$c, { style: { position: "absolute" } }),
        React.createElement(BunnySlider, null,
            React.createElement(BarBackground, null),
            React.createElement(BarProgress, { isCurrentValueMaxValue: isCurrentValueMaxValue, progress: progressPercentage }),
            React.createElement(StyledInput, { type: "range", min: min, max: max, value: value, onChange: handleChange, isCurrentValueMaxValue: isCurrentValueMaxValue })),
        valueLabel && React.createElement(SliderLabel, { progress: labelOffset }, valueLabel)));
};

var Icon$b = function (props) {
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

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("svg", { width: "128", height: "128", viewBox: "0 0 128 128", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z", fill: "#FEDC90", stroke: "#D1884F", strokeWidth: "2.89134" }),
            React.createElement("path", { d: "M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z", fill: "#D1884F", stroke: "#633001", strokeWidth: "2.89134" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z", fill: "#633001" }))));
};

var rotate = keyframes(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = keyframes(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled(Icon$a)(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate);
var FloatingPanIcon = styled(Icon$b)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
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
    telegram: "#239FDB",
    twitter: "#1DA1F2",
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

var StyledModal$1 = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 16px 0 0;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px 16px 0 0;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme, background = _a.background;
    return background || theme.colors.tertiary;
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
var ModalTitle = styled(Flex)(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  padding-left: 36px;\n"], ["\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  padding-left: 36px;\n"])));
var ModalBody$1 = styled.div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  padding: 0 16px 24px;\n  \n  ", " {\n    padding: 0 24px 24px;\n  }\n"], ["\n  padding: 0 16px 24px;\n  \n  ", " {\n    padding: 0 24px 24px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, background = _a.background;
    return (React.createElement(StyledModal$1, { background: background },
        React.createElement(ModalHeader, null,
            React.createElement(ModalTitle, null,
                onBack && (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React.createElement(Icon$20, { color: "contrast" }))),
                React.createElement(Heading, null, title)),
            !hideCloseButton && (React.createElement(IconButton, { variant: "text", className: "closeModal", scale: "sm", ml: "12px", onClick: onDismiss, "aria-label": "Close the dialog" },
                React.createElement(Icon$1J, { width: "24px", color: "contrast" })))),
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
            React.createElement(Icon$1J, { width: "24px", color: backBtnColor !== null && backBtnColor !== void 0 ? backBtnColor : "card" }))),
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
    var bodyStyle = document.body.style;
    var handlePresent = function (node) {
        bodyStyle.overflow = 'hidden';
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        bodyStyle.overflow = 'auto';
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
                React.createElement(Icon$1i, { mr: "8px", color: "#fff", width: "20px" }))),
        React.createElement(TelegramShareButton, { style: { width: '35%', marginLeft: "10px", alignItems: "center" }, title: telegramDescription, url: "".concat(url) },
            React.createElement(Button, { scale: "sm", width: '100%', style: { backgroundColor: '#26A6E5', alignItems: "center" } },
                React.createElement(Text, { color: '#fff', fontSize: '12px', bold: true }, "Telegram"),
                React.createElement(Icon$1j, { mr: "8px", color: "#fff", width: "20px" })))));
};
var templateObject_1$7, templateObject_2$5;

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React.createElement("path", { d: "M17.75 3.03409C17.7492 2.29595 17.4556 1.58826 16.9337 1.06632C16.4117 0.544367 15.7041 0.250788 14.9659 0.25H3.03409C2.29595 0.250788 1.58826 0.544367 1.06632 1.06632C0.544367 1.58826 0.250788 2.29595 0.25 3.03409V14.9659C0.250788 15.7041 0.544367 16.4117 1.06632 16.9337C1.58826 17.4556 2.29595 17.7492 3.03409 17.75H14.9659C15.7041 17.7492 16.4117 17.4556 16.9337 16.9337C17.4556 16.4117 17.7492 15.7041 17.75 14.9659V3.03409ZM13.66 9.50145L13.6596 5.54524L6.57871 12.6261C6.41608 12.7888 6.19447 12.8785 5.96449 12.8749C5.50585 12.8676 5.1358 12.4975 5.12853 12.0389C5.12487 11.8089 5.21461 11.5873 5.37725 11.4247L12.4581 4.34377L8.50194 4.3434C8.28046 4.33773 8.06995 4.24576 7.91532 4.0871C7.76067 3.92845 7.67413 3.71567 7.67413 3.49411C7.67413 3.27255 7.76067 3.05977 7.91532 2.90111C8.06995 2.74246 8.28046 2.65049 8.50194 2.64482H14.5093C14.7345 2.64489 14.9505 2.7344 15.1097 2.89365C15.269 3.05291 15.3585 3.26889 15.3586 3.49411V9.50145C15.3529 9.72294 15.2609 9.93343 15.1023 10.0881C14.9436 10.2427 14.7308 10.3293 14.5093 10.3293C14.2877 10.3293 14.0749 10.2427 13.9163 10.0881C13.7576 9.93343 13.6657 9.72294 13.66 9.50145Z", fill: "#1EBB95" })));
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.INFO] = variants$2.INFO,
    _a[types.SUCCESS] = variants$2.SUCCESS,
    _a[types.DANGER] = variants$2.DANGER,
    _a[types.WARNING] = variants$2.WARNING,
    _a);
var ClearAllButton = styled.button(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border: none;\n  border-radius: 8px 8px 0 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border: none;\n  border-radius: 8px 8px 0 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var StyledToast = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: fixed;\n  max-width: calc(100% - 12px);\n  transition: all 250ms ease-in;\n  width: 100%;\n  \n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  box-shadow: 0 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 16px;\n\n  ", " {\n    transform: none;\n    left: auto;\n    right: 35px;\n    max-width: 270px;\n  }\n"], ["\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: fixed;\n  max-width: calc(100% - 12px);\n  transition: all 250ms ease-in;\n  width: 100%;\n  \n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  box-shadow: 0 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border-radius: 16px;\n\n  ", " {\n    transform: none;\n    left: auto;\n    right: 35px;\n    max-width: 270px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ProgressWrapper = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  background-color: ", "\n  bottom: 0;\n  min-height: 2px;\n"], ["\n  background-color: ", "\n  bottom: 0;\n  min-height: 2px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var ProgressLine = styled.div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 2px;\n  transition: 100ms all;\n  border-radius: 16px;\n"], ["\n  background-color: ", ";\n  height: 2px;\n  transition: 100ms all;\n  border-radius: 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
var AlertWrapper = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 0 16px;\n"], ["\n  padding: 0 16px;\n"])));
var LinkWrapper = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin: 8px 0;\n  display: flex;\n  align-items: center;\n"], ["\n  margin: 8px 0;\n  display: flex;\n  align-items: center;\n"])));
var LinkStyles = styled.a(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n color: #1EBB95;\n font-size: 14px;\n font-weight: 700;\n line-height: 20px;\n"], ["\n color: #1EBB95;\n font-size: 14px;\n font-weight: 700;\n line-height: 20px;\n"])));
var SharingText = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n"], ["\n  display: flex;\n  flex-direction: row;\n"])));
var ActionContainer = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n"], ["\n"])));
var Toast = function (_a) {
    _a.removeButtonPosition; var clearAll = _a.clearAll, toast = _a.toast, style = _a.style, handleMouseEnter = _a.handleMouseEnter, handleMouseLeave = _a.handleMouseLeave, handleRemove = _a.handleRemove, progress = _a.progress, index = _a.index, props = __rest(_a, ["removeButtonPosition", "clearAll", "toast", "style", "handleMouseEnter", "handleMouseLeave", "handleRemove", "progress", "index"]);
    var description = toast.description, type = toast.type, title = toast.title, telegramDescription = toast.telegramDescription, tweeterDescription = toast.tweeterDescription, hash = toast.hash, url = toast.url;
    return (React.createElement(CSSTransition, __assign({ timeout: 250, style: style }, props),
        React.createElement(StyledToast, { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            clearAll && (React.createElement(ClearAllButton, { onClick: function () { return clearAll(); } },
                React.createElement(Text, { fontSize: '10px', color: 'contrast' }, "Clear All"),
                React.createElement(Icon$1J, { color: 'contrast', ml: '8px', width: '10px' }))),
            React.createElement(Alert, { index: index, style: { padding: '16px 0 0 0' }, title: title, variant: alertTypeMap[type], onClick: handleRemove },
                React.createElement(AlertWrapper, null,
                    description ? React.createElement(Text, { color: "#6B7D98", fontSize: "12px", as: "p", dangerouslySetInnerHTML: { __html: description } }) : React.createElement(React.Fragment, null),
                    hash &&
                        React.createElement(LinkWrapper, null,
                            React.createElement(LinkStyles, { target: "_blank", href: "https://bscscan.com/tx/".concat(hash) }, "View on BscScan"),
                            React.createElement(Icon$9, { ml: '7px', width: '18px', height: '18px', color: '#1EBB95' })),
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
var BOTTOM_POSITION = 120; // Initial position from the bottom
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
            var bottom = BOTTOM_POSITION + (index * stackSpacing);
            if (index === 0)
                return React.createElement(Toast, { handleMouseEnter: handleMouseEnter, handleMouseLeave: handleMouseLeave, progress: progress, ttl: ttl, handleRemove: handleRemove, index: index, key: toast.id, toast: toast, style: { bottom: "".concat(bottom, "px"), zIndex: zIndex } });
            if (index === toasts.length - 1)
                return React.createElement(Toast, { key: toast.id, toast: toast, zIndex: zIndex, clearAll: toasts.length > 1 ? clearAllHandler : undefined, style: { bottom: "".concat(bottom, "px"), zIndex: zIndex, }, index: index });
            return (React.createElement(Toast, { index: index, key: toast.id, toast: toast, style: { bottom: "".concat(bottom, "px"), zIndex: zIndex, display: 'flex', justifyContent: 'center' } }));
        }))));
};
var templateObject_1$5;

var Icon$8 = function (props) {
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

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React.createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React.createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$3 = function (props) {
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

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "#F5F5F5" }),
        React.createElement("path", { d: "M56.5504425,41.9387033 L56.5504425,50.4659601 L47.3948342,50.4659601 L47.3948342,85.5971142 L45.0078131,84.7075452 C43.8992633,84.2955753 42.1136272,83.5937969 39.9052997,82.5918134 L38.8675775,82.1177881 L38.8675775,14.6817622 L47.9569067,11.8769231 L56.5504425,14.5267861 L56.5504425,23.7259307 L47.9569067,21.0669705 L47.3948342,21.2411155 L47.3948342,41.9387033 L56.5504425,41.9387033 Z M16,50.4659926 L16,21.7739797 L36.1702794,15.548296 L36.1702794,24.7052039 L24.526282,28.3200122 L24.526282,41.9387358 L36.1702794,41.9387358 L36.1702794,81.3806284 L33.591244,80.0543973 C25.5662786,75.923652 16,68.9585019 16,59.2339983 L16,54.6496962 L24.526282,54.6496962 L24.526282,59.2339983 C24.526282,61.2460878 25.5734263,63.3605199 27.6426978,65.5373324 L27.6426978,50.4659926 L16,50.4659926 Z M59.1389325,15.3302574 L79.8040306,21.7261873 L79.8040306,50.4659601 L67.6710627,50.4659601 L67.6710627,62.9111544 C67.6710627,62.9111544 64.9581695,66.4674811 59.1464051,69.4451657 C59.1464051,67.0682164 59.1389325,15.3302574 59.1389325,15.3302574 Z M71.2780734,41.9387033 L71.2780734,28.2783928 L67.6710627,27.1649695 L67.6710627,41.9387033 L71.2780734,41.9387033 Z M71.2780734,59.8661186 L71.2780734,54.6495662 L79.8040306,54.6495662 L79.8040306,59.8661186 C79.8040306,74.3588162 58.7760221,82.7005566 52.330058,84.9127828 L49.9859233,85.7230769 L49.9859233,76.7068496 L51.1311866,76.2744112 C61.1591444,72.5004032 71.2780734,65.962818 71.2780734,59.8661186 Z", fill: "#000000" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.13298 26.6579C3.13253 26.6921 3.1323 26.7263 3.1323 26.7606C3.1323 30.9564 6.53367 34.3577 10.7295 34.3577C14.9253 34.3577 18.3266 30.9564 18.3266 26.7606C18.3266 26.7263 18.3264 26.6921 18.326 26.6579H14.732C14.7329 26.692 14.7333 26.7262 14.7333 26.7606C14.7333 28.9719 12.9407 30.7645 10.7294 30.7645C8.51812 30.7645 6.7255 28.9719 6.7255 26.7606C6.7255 26.7262 6.72593 26.692 6.72679 26.6579H3.13298ZM10.7295 5.71436C15.6624 5.71436 19.6613 9.71326 19.6613 14.6462C19.6613 19.5791 15.6624 23.578 10.7295 23.578C5.79663 23.578 1.79773 19.5791 1.79773 14.6462C1.79773 9.71326 5.79663 5.71436 10.7295 5.71436ZM10.7295 9.3076C13.6779 9.3076 16.0681 11.6977 16.0681 14.6461C16.0681 17.5945 13.6779 19.9847 10.7295 19.9847C7.78111 19.9847 5.39096 17.5945 5.39096 14.6461C5.39096 11.6977 7.78111 9.3076 10.7295 9.3076ZM11.3454 12.9033C12.0632 13.157 12.5775 13.8415 12.5775 14.6462C12.5775 15.6668 11.7501 16.4941 10.7295 16.4941C9.70893 16.4941 8.88157 15.6668 8.88157 14.6462C8.88157 13.8416 9.39577 13.1571 10.1135 12.9034V11.6689H11.3454V12.9033ZM22.7464 16.9552C22.154 15.8735 21.8172 14.6318 21.8172 13.3115C21.8172 9.11573 25.2186 5.71436 29.4144 5.71436C33.6102 5.71436 37.0115 9.11573 37.0115 13.3115C37.0115 14.6319 36.6747 15.8735 36.0823 16.9553C35.1444 16.216 34.0807 15.6291 32.9286 15.232C33.2408 14.6618 33.4183 14.0074 33.4183 13.3115C33.4183 11.1002 31.6257 9.30761 29.4144 9.30761C27.2031 9.30761 25.4105 11.1002 25.4105 13.3115C25.4105 14.0074 25.588 14.6618 25.9002 15.2319C24.7481 15.629 23.6844 16.2159 22.7464 16.9552ZM29.4144 34.3577C34.3473 34.3577 38.3462 30.3588 38.3462 25.4259C38.3462 20.493 34.3473 16.4941 29.4144 16.4941C24.4815 16.4941 20.4826 20.493 20.4826 25.4259C20.4826 30.3588 24.4815 34.3577 29.4144 34.3577ZM29.4144 30.7645C32.3628 30.7645 34.7529 28.3743 34.7529 25.4259C34.7529 22.4775 32.3628 20.0874 29.4144 20.0874C26.466 20.0874 24.0758 22.4775 24.0758 25.4259C24.0758 28.3743 26.466 30.7645 29.4144 30.7645ZM30.0303 27.1688C30.7481 26.9151 31.2624 26.2306 31.2624 25.4259C31.2624 24.4053 30.435 23.578 29.4144 23.578C28.3938 23.578 27.5665 24.4053 27.5665 25.4259C27.5665 26.2305 28.0807 26.915 28.7984 27.1687V28.4032H30.0303V27.1688Z", fill: "#DEAE30" })));
};

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M0 21.5327C0 9.64052 9.64052 0 21.5327 0H74.4673C86.3595 0 96 9.64052 96 21.5327V74.4673C96 86.3595 86.3595 96 74.4673 96H21.5327C9.64052 96 0 86.3595 0 74.4673V21.5327Z", fill: "#0A59FF" }),
        React.createElement("path", { d: "M81.8692 48C81.8692 66.7054 66.7054 81.8692 48 81.8692C29.2946 81.8692 14.1309 66.7054 14.1309 48C14.1309 29.2946 29.2946 14.1309 48 14.1309C66.7054 14.1309 81.8692 29.2946 81.8692 48Z", fill: "white" }),
        React.createElement("path", { d: "M37.0094 39.7009C37.0094 38.2143 38.2145 37.0093 39.701 37.0093H56.2991C57.7856 37.0093 58.9907 38.2143 58.9907 39.7009V56.299C58.9907 57.7855 57.7856 58.9906 56.2991 58.9906H39.701C38.2145 58.9906 37.0094 57.7855 37.0094 56.299V39.7009Z", fill: "#0A59FF" })));
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
        icon: Icon$8,
        connectorId: ConnectorNames.Injected,
        priority: 1,
    },
    {
        title: "TrustWallet",
        icon: Icon$5,
        connectorId: ConnectorNames.Injected,
        priority: 2,
    },
    {
        title: "MathWallet",
        icon: Icon$7,
        connectorId: ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "TokenPocket",
        icon: Icon$6,
        connectorId: ConnectorNames.Injected,
        priority: 4
    },
    {
        title: "Coin98",
        icon: Icon$1,
        connectorId: ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "WalletConnect",
        icon: Icon$4,
        connectorId: ConnectorNames.WalletConnect,
        priority: 3,
    },
    {
        title: "Binance Chain",
        icon: Icon$3,
        connectorId: ConnectorNames.BSC,
        priority: 999,
    },
    {
        title: "SafePal Wallet",
        icon: Icon$2,
        connectorId: ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "Coinbase",
        icon: Icon,
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
var Wrapper = styled(Flex)(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 64px;\n  \n  ", " {\n    padding-bottom: 0;\n  }\n"], ["\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 64px;\n  \n  ", " {\n    padding-bottom: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
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
                React.createElement(Icon$1F, { color: "success", mr: "6px" }),
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
        React.createElement(Icon$1G, { width: "20px", color: "success", ml: "4px" }),
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
    var _c = useMatchBreakpoints(), isXs = _c.isXs, isSm = _c.isSm;
    var isMobile = isXs || isSm;
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
        React.createElement(Flex, { mb: isMobile ? '64px' : '0' },
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

export { Icon$F as AddFilledIcon, Icon$21 as AddIcon, Alert, Icon$20 as ArrowBackIcon, Icon$1$ as ArrowDownIcon, Icon$1_ as ArrowDropDownIcon, Icon$1Z as ArrowDropUpIcon, Icon$1Y as ArrowForwardIcon, Icon$1X as ArrowUpIcon, Icon$1a as AutoCompaundIcon, Icon$1W as AutoRenewIcon, Icon$18 as BSCIcon, BackgroundImage, Badge, Banner, BannerBody, BannerTitle, GridLayout$1 as BaseLayout, Icon$1T as BellIcon, Icon$1V as BinanceIcon, Icon$1U as BlockIcon, Box, Breadcrumbs, Icon$A as BswIcon, Button, ButtonMenu, ButtonMenuItem, Icon$1R as CalculateIcon, Icon$1S as CardViewIcon, GridLayout as CardsLayout, Checkbox, Icon$12 as CheckedIcon, Icon$1P as CheckmarkCircleIcon, Icon$1Q as CheckmarkIcon, Icon$1O as ChevronDownIcon, Icon$1N as ChevronLeftIcon, Icon$1L as ChevronRightEndIcon, Icon$1M as ChevronRightIcon, Icon$1K as ChevronUpIcon, Icon$1J as CloseIcon, Icon$1I as CogIcon, Icon$1H as CommunityIcon, ConnectorNames, Icon$I as ContractIcon, Icon$1G as CopyIcon, Icon$1b as CupIcon, Icon$K as DeleteIcon, Icon$Q as DiceIcon, Icon$1l as DownloadIcon, Dropdown, Icon$23 as ErrorIcon, Icon$C as FailIcon, FallingBunnies, Icon$y as FarmIcon, Icon$_ as FavoriteEmptyIcon, Icon$$ as FavoriteFullIcon, Icon$U as FilterIcon, Icon$17 as FireIcon, Icon$1g as FlagIcon, Flex, Icon$15 as GasIcon, Icon$N as HamburgerIcon, Icon$10 as HammerIcon, Heading, Icon$1F as HelpIcon, Icon$L as HintIcon, Icon$16 as HourglassIcon, IconButton, Image, Icon$22 as InfoIcon, Input$1 as Input, Icon$X as LevelIcon, Icon$11 as LightningIcon, Link, LinkExternal, Icon$1k as LinkIcon, Icon$1E as ListViewIcon, Icon$1C as LoaderIcon, Icon$1D as LogoIcon, Icon$V as MarketBagIcon, Icon$P as MediumIcon, Icon$1B as MetamaskIcon, Icon$1A as MinusIcon, Modal, ModalProvider, ModalWithBackground, Icon$1d as MouseIcon, Icon$w as NFTIcon, NotificationDot, Icon$1z as OpenNewIcon, Icon$H as PencilIcon, Icon$1y as PlayCircleOutlineIcon, Icon$B as PlayIcon, Icon$19 as PolygonIcon, Icon$x as PoolIcon, Icon$1x as PrizeIcon, Progress, Icon$1u as ProgressBunny, Radio, Icon$1c as RatingIcon, Icon$v as ReferralIcon, Icon$1w as RemoveIcon, ResetCSS, Icon$z as RewardIcon, Icon$W as RobiBoostIcon, Icon$1h as RocketIcon, Icon$1p as SearchIcon, Icon$J as SendIcon, Icon$Z as ShareIcon, Skeleton, Slider, index as SocialIcons, Spinner, Icon$R as SquidEnergyIcon, Icon$13 as StarIcon, Icon$E as StarSharpIcon, Icon$D as SuccessIcon, Svg, Icon$1o as SwapVertIcon, Icon$1n as SyncAltIcon, Tag, Icon$1j as TelegramIcon, Text, Icon$1r as ThreeDotsIcon, Icon$u as TicketIcon, Icon$1q as TimerIcon, Icon$G as TimerNewIcon, ToastContainer, Toggle, Icon$14 as TradeIcon, Icon$1i as TwitterIcon, Icon$M as UserIcon, Icon$1v as VerifiedIcon, Icon$Y as ViewIcon, Icon$S as VolumeOffIcon, Icon$T as VolumeOnIcon, Icon$1t as WaitIcon, Icon$1e as WaitReloadIcon, Icon$1f as WalletIcon, Icon$1m as WarningIcon, Icon$1s as Won, Icon$O as YouTubeIcon, variants$2 as alertVariants, byTextAscending, byTextDescending, connectorLocalStorageKey, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, types as toastTypes, useKonamiCheatCode, useMatchBreakpoints, useModal, useParticleBurst, useTable, useTooltip, useWalletModal };
