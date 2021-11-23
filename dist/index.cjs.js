'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var reactDom = require('react-dom');
var reactPopper = require('react-popper');
var reactTransitionGroup = require('react-transition-group');
var reactShare = require('react-share');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
    return get__default["default"](theme, path, fallback);
}; };

var rotate$2 = styled.keyframes(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$2);
var Svg = styled__default["default"].svg(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$P, templateObject_2$n, templateObject_3$a;

var Icon$1s = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1r = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$1q = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$1p = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
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
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
    DARK: "dark",
    PRIMARY_DARK: 'primaryDark'
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
        color: "white",
    },
    _b$1[variants$3.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b$1[variants$3.TRANSPARENT] = {
        backgroundColor: "transparent",
        color: "background",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b$1[variants$3.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b$1[variants$3.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "white",
    },
    _b$1[variants$3.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b$1[variants$3.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b$1[variants$3.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b$1[variants$3.DARK] = {
        backgroundColor: "dark",
        color: "text",
        boxShadow: "none",
    },
    _b$1[variants$3.PRIMARY_DARK] = {
        backgroundColor: "inputSecondary",
        color: "contrast",
        boxShadow: "none",
    },
    _b$1);

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.biswap-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.biswap-button--disabled {\n      background-color: " + theme.colors.tertiary + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.text + ";\n      cursor: not-allowed;\n    }\n  ";
};
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton$1 = styled__default["default"].button(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 8px;\n  //box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.biswap-button--disabled):not(.biswap-button--disabled):not(:active):not(.hover-disabled) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.biswap-button--disabled):not(.biswap-button--disabled):not(.hover-disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 8px;\n  //box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.biswap-button--disabled):not(.biswap-button--disabled):not(:active):not(.hover-disabled) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.biswap-button--disabled):not(.biswap-button--disabled):not(.hover-disabled) {\n    opacity: 0.85;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants$1,
}), styledSystem.variant({
    variants: styleVariants$2,
}), styledSystem.layout, styledSystem.space);
var templateObject_1$O;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("biswap-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("biswap-button--disabled");
    }
    return (React__default["default"].createElement(StyledButton$1, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React__default["default"].createElement(React__default["default"].Fragment, null,
            React.isValidElement(startIcon) &&
                React.cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            React.isValidElement(endIcon) &&
                React.cloneElement(endIcon, {
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

var IconButton = styled__default["default"](Button)(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$N;

var Icon$1o = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1n = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$1m = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$1l = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$1k = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$1j = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$1i = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$1h = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$1g = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default["default"].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$1f = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default["default"].createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default["default"].createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default["default"].createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default["default"].createElement("g", { mask: "url(#mask0)" },
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default["default"].createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default["default"].createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default["default"].createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default["default"].createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$1e = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ width: "24", height: "24", viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M20.6289 15.9989C20.5511 15.9052 20.4747 15.8114 20.3997 15.7209C19.3684 14.4736 18.7445 13.7208 18.7445 10.1897C18.7445 8.36156 18.3072 6.86156 17.4451 5.73656C16.8095 4.90547 15.9503 4.275 14.8178 3.80906C14.8032 3.80096 14.7902 3.79032 14.7794 3.77766C14.372 2.41359 13.2573 1.5 12.0001 1.5C10.743 1.5 9.62873 2.41359 9.22139 3.77625C9.21052 3.78845 9.19768 3.79875 9.18342 3.80672C6.54061 4.89469 5.25623 6.98203 5.25623 10.1883C5.25623 13.7208 4.63326 14.4736 3.60108 15.7195C3.52608 15.81 3.44967 15.9019 3.37186 15.9975C3.17086 16.2399 3.04351 16.5348 3.00488 16.8473C2.96625 17.1598 3.01796 17.4769 3.15389 17.7609C3.44311 18.3703 4.05951 18.7486 4.76311 18.7486H19.2423C19.9426 18.7486 20.5548 18.3708 20.845 17.7642C20.9815 17.4801 21.0337 17.1628 20.9954 16.8499C20.9571 16.537 20.8299 16.2417 20.6289 15.9989ZM12.0001 22.5C12.6775 22.4995 13.3421 22.3156 13.9234 21.9679C14.5047 21.6202 14.9811 21.1217 15.302 20.5252C15.3171 20.4966 15.3246 20.4646 15.3237 20.4322C15.3228 20.3999 15.3135 20.3684 15.2968 20.3407C15.2801 20.313 15.2565 20.2901 15.2284 20.2742C15.2002 20.2583 15.1684 20.25 15.1361 20.25H8.86514C8.83276 20.2499 8.8009 20.2582 8.77267 20.274C8.74444 20.2899 8.7208 20.3128 8.70404 20.3405C8.68728 20.3682 8.67799 20.3997 8.67706 20.4321C8.67613 20.4645 8.6836 20.4965 8.69873 20.5252C9.01961 21.1216 9.49591 21.6201 10.0771 21.9678C10.6584 22.3155 11.3229 22.4994 12.0001 22.5Z" })));
};

var Icon$1d = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$1c = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React__default["default"].createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React__default["default"].createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React__default["default"].createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React__default["default"].createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React__default["default"].createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$1b = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React__default["default"].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$1a = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$19 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$18 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$17 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M17.0024 7C17.0024 6.44772 16.5547 6 16.0024 6C15.4502 6 15.0024 6.44772 15.0024 7L15.0024 17C15.0024 17.5523 15.4502 18 16.0024 18C16.5547 18 17.0024 17.5523 17.0024 17L17.0024 7Z" }),
        React__default["default"].createElement("path", { d: "M11.1725 12L7.2925 15.88C6.9025 16.27 6.9125 16.91 7.2925 17.3C7.6825 17.69 8.3125 17.69 8.7025 17.3L13.2925 12.71C13.6825 12.32 13.6825 11.69 13.2925 11.3L8.7025 6.70998C8.3125 6.31998 7.6825 6.31998 7.2925 6.70998C6.9025 7.09998 6.9025 7.72998 7.2925 8.11998L11.1725 12Z" })));
};

var Icon$16 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$15 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M18.2987 5.70997C17.9087 5.31997 17.2787 5.31997 16.8887 5.70997L11.9988 10.59L7.10875 5.69997C6.71875 5.30997 6.08875 5.30997 5.69875 5.69997C5.30875 6.08997 5.30875 6.71997 5.69875 7.10997L10.5888 12L5.69875 16.89C5.30875 17.28 5.30875 17.91 5.69875 18.3C6.08875 18.69 6.71875 18.69 7.10875 18.3L11.9988 13.41L16.8887 18.3C17.2787 18.69 17.9087 18.69 18.2987 18.3C18.6887 17.91 18.6887 17.28 18.2987 16.89L13.4087 12L18.2987 7.10997C18.6787 6.72997 18.6787 6.08997 18.2987 5.70997Z" })));
};

var Icon$14 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$13 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$12 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$11 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$10 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$$ = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 40 40", fill: "none" }, props),
        React__default["default"].createElement("path", { d: "M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z", fill: "#fff" }),
        React__default["default"].createElement("path", { d: "M35.492 7.524c-1.387.274-2.71.662-3.798.903-2.484.557-4.807 2.46-5.315 5.944-.452 3.113.597 4.452.137 8.073-.806 6.322-6.87 8.5-9.701 9.822-1.638.758-5.613 2.5-8.678 3.83A19.9 19.9 0 0020 40c11.049 0 20-8.952 20-20 0-4.71-1.629-9.04-4.355-12.452a6.31 6.31 0 00-.153-.024z", fill: "url(#logo-color-1)" }),
        React__default["default"].createElement("path", { d: "M17.75 17.064c1.54-3.33.984-3.338 2.153-6.467 1.476-3.968 6.065-2.839 7.33-2.67 2.09.283 2.638-.46 7.041-1.169.218-.032.428-.064.637-.089C31.25 2.581 25.927 0 20 0 12.04 0 5.17 4.645 1.952 11.379c6.596 1.637 13.717 5.194 15.798 5.685zm-4.371-13.58c.58.089 3.403 3.597 3.935 12.605 0 0-3.629-.871-4.41-2.742-.646-1.54.193-3.565.475-9.863zm22.234 4.024c.008.016.024.024.032.04-.048-.008-.105-.008-.153-.016.04-.016.08-.016.12-.024zM0 20c0-1.597.185-3.145.54-4.63.726.606 1.5 1.275 2.323 2.041 5.21 4.83 13.685 8.645 16.774 5.097.008.008.016.008.016.016-.564.742-2.717 3.089-6.83 2.363l-6.5 9.702A19.943 19.943 0 010 20z", fill: "url(#logo-color-2)" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "logo-color-1", x1: "32.011", y1: "12.762", x2: "27.293", y2: "38.757", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FF496A" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#E42648" })),
            React__default["default"].createElement("linearGradient", { id: "logo-color-2", x1: "9.653", y1: "29.461", x2: "20.086", y2: "0", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { offset: ".002", stopColor: "#1158F1" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#119BED" })))));
};

var Icon$_ = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default["default"].createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React__default["default"].createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#54DADE" }),
                React__default["default"].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var rotate$1 = styled.keyframes(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var Loader = styled__default["default"](Svg)(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$1);
var Icon$Z = function (props) {
    return (React__default["default"].createElement(Loader, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};
var templateObject_1$M, templateObject_2$m;

var Icon$Y = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React__default["default"].createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React__default["default"].createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React__default["default"].createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React__default["default"].createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React__default["default"].createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React__default["default"].createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React__default["default"].createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React__default["default"].createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React__default["default"].createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React__default["default"].createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default["default"].createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default["default"].createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default["default"].createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default["default"].createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default["default"].createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default["default"].createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default["default"].createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default["default"].createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React__default["default"].createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React__default["default"].createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React__default["default"].createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React__default["default"].createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default["default"].createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default["default"].createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React__default["default"].createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React__default["default"].createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default["default"].createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default["default"].createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default["default"].createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default["default"].createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$X = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$W = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default["default"].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default["default"].createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default["default"].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default["default"].createElement("g", { mask: "url(#A)" },
            React__default["default"].createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default["default"].createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default["default"].createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default["default"].createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$V = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$U = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React__default["default"].createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React__default["default"].createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React__default["default"].createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React__default["default"].createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React__default["default"].createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React__default["default"].createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React__default["default"].createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#9F4A08" }),
                React__default["default"].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$T = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React__default["default"].createElement("circle", { cx: "45", cy: "45", r: "45", fill: "url(#paint0_linear)" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.7703 49.9442C15.7626 50.1122 15.7587 50.2809 15.7587 50.4501C15.7587 51.0897 15.8144 51.7214 15.923 52.3435H15.7587V53.3228C15.7587 53.8008 15.7898 54.2744 15.8508 54.7428C17.0423 63.8844 29.6377 71.0772 45 71.0772C60.3623 71.0772 72.9577 63.8844 74.1492 54.7428C74.2102 54.2744 74.2413 53.8008 74.2413 53.3228V52.3435H74.077C74.1856 51.7214 74.2413 51.0897 74.2413 50.4501C74.2413 50.2809 74.2374 50.1122 74.2297 49.9442C73.7886 40.3727 60.8709 32.6957 45 32.6957C29.1291 32.6957 16.2114 40.3727 15.7703 49.9442ZM13.3688 49.9442C13.5863 44.1042 17.5547 39.1986 23.0781 35.845C28.8037 32.3686 36.5601 30.2964 45 30.2964C53.4399 30.2964 61.1964 32.3686 66.9219 35.845C72.4453 39.1986 76.4137 44.1042 76.6312 49.9442H76.6406V53.3228C76.6406 59.3853 72.6041 64.4779 66.9219 67.9279C61.1964 71.4043 53.4399 73.4765 45 73.4765C36.5601 73.4765 28.8037 71.4043 23.0781 67.9279C17.3959 64.4779 13.3594 59.3853 13.3594 53.3228V49.9442H13.3688Z", fill: "#606063" }),
        React__default["default"].createElement("path", { d: "M74.2412 53.3233C74.2412 63.1287 61.1494 71.0776 44.9999 71.0776C28.8503 71.0776 15.7585 63.1287 15.7585 53.3233V50.5127H74.2412V53.3233Z", fill: "#BEBEBE" }),
        React__default["default"].createElement("path", { d: "M74.2412 50.4502C74.2412 60.2557 61.1494 68.2046 44.9999 68.2046C28.8503 68.2046 15.7585 60.2557 15.7585 50.4502C15.7585 40.6447 28.8503 32.6958 44.9999 32.6958C61.1494 32.6958 74.2412 40.6447 74.2412 50.4502Z", fill: "#FAF9FA" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.2578 45.4345C20.2577 45.4456 20.2577 45.4567 20.2577 45.4679C20.2577 46.2752 20.3747 47.0659 20.5989 47.8338H20.2574V48.8736C20.2574 49.3326 20.2953 49.7861 20.3691 50.2332C21.4839 56.9839 30.8104 62.2532 42.1508 62.2532C53.4912 62.2532 62.8178 56.9839 63.9326 50.2332C64.0064 49.7861 64.0442 49.3326 64.0442 48.8736V47.8338H63.7032C63.9213 47.0868 64.038 46.3183 64.0442 45.5339C64.0444 45.5119 64.0445 45.4899 64.0445 45.4679C64.0445 45.4567 64.0444 45.4456 64.0444 45.4345C64.015 38.0605 54.2243 32.0883 42.1511 32.0883C30.0779 32.0883 20.2872 38.0605 20.2578 45.4345ZM17.8585 45.4345H17.8582V48.8736C17.8582 53.7204 21.0631 57.7199 25.4188 60.3817C29.8156 63.0687 35.7372 64.6525 42.1508 64.6525C48.5644 64.6525 54.4861 63.0687 58.8829 60.3817C63.2385 57.7199 66.4435 53.7204 66.4435 48.8736V45.5428C66.4437 45.5178 66.4438 45.4928 66.4438 45.4679C66.4438 40.621 63.2388 36.6216 58.8832 33.9598C54.4863 31.2728 48.5647 29.689 42.1511 29.689C35.7375 29.689 29.8158 31.2728 25.419 33.9598C21.0734 36.6155 17.8731 40.6027 17.8585 45.4345Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M64.0441 48.8738C64.0441 56.2631 54.2421 62.2534 42.1507 62.2534C30.0593 62.2534 20.2573 56.2631 20.2573 48.8738V45.7346H64.0441V48.8738Z", fill: "#FEDC90" }),
        React__default["default"].createElement("path", { d: "M64.0441 45.4679C64.0441 52.8573 54.2421 58.8475 42.1507 58.8475C30.0593 58.8475 20.2573 52.8573 20.2573 45.4679C20.2573 38.0786 30.0593 32.0884 42.1507 32.0884C54.2421 32.0884 64.0441 38.0786 64.0441 45.4679Z", fill: "#D1884F" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.8557 38.2365C26.8556 38.2476 26.8556 38.2587 26.8556 38.2699C26.8556 39.0772 26.9726 39.8679 27.1968 40.6359H26.8553V41.6756C26.8553 42.1346 26.8932 42.5881 26.967 43.0352C28.0818 49.7859 37.4083 55.0552 48.7487 55.0552C60.0891 55.0552 69.4157 49.7859 70.5305 43.0352C70.6043 42.5881 70.6421 42.1346 70.6421 41.6756V40.6359H70.3011C70.5192 39.8888 70.6359 39.1203 70.6421 38.3359C70.6423 38.3139 70.6424 38.2919 70.6424 38.2699C70.6424 38.2587 70.6423 38.2476 70.6423 38.2365C70.6129 30.8625 60.8222 24.8903 48.749 24.8903C36.6758 24.8903 26.8851 30.8625 26.8557 38.2365ZM24.4564 38.2365H24.4561V41.6756C24.4561 46.5224 27.661 50.5219 32.0167 53.1837C36.4135 55.8707 42.3351 57.4545 48.7487 57.4545C55.1623 57.4545 61.084 55.8707 65.4808 53.1837C69.8364 50.5219 73.0414 46.5224 73.0414 41.6756V38.3448C73.0416 38.3198 73.0417 38.2948 73.0417 38.2699C73.0417 33.4231 69.8367 29.4236 65.4811 26.7618C61.0842 24.0748 55.1626 22.491 48.749 22.491C42.3354 22.491 36.4137 24.0748 32.0169 26.7618C27.6713 29.4175 24.471 33.4047 24.4564 38.2365Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M70.6422 41.6758C70.6422 49.0651 60.8402 55.0554 48.7488 55.0554C36.6575 55.0554 26.8555 49.0651 26.8555 41.6758V38.5366H70.6422V41.6758Z", fill: "#FEDC90" }),
        React__default["default"].createElement("path", { d: "M70.6422 38.2699C70.6422 45.6593 60.8402 51.6495 48.7488 51.6495C36.6575 51.6495 26.8555 45.6593 26.8555 38.2699C26.8555 30.8806 36.6575 24.8904 48.7488 24.8904C60.8402 24.8904 70.6422 30.8806 70.6422 38.2699Z", fill: "#D1884F" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.2578 31.0385C20.2577 31.0496 20.2577 31.0607 20.2577 31.0719C20.2577 31.8792 20.3747 32.6699 20.5989 33.4379H20.2574V34.4776C20.2574 34.9366 20.2953 35.3901 20.3691 35.8372C21.4839 42.5879 30.8104 47.8572 42.1508 47.8572C53.4912 47.8572 62.8178 42.5879 63.9326 35.8372C64.0064 35.3901 64.0442 34.9366 64.0442 34.4776V33.4379H63.7032C63.9213 32.6908 64.038 31.9223 64.0442 31.1379C64.0444 31.1159 64.0445 31.0939 64.0445 31.0719C64.0445 31.0607 64.0444 31.0496 64.0444 31.0385C64.015 23.6645 54.2243 17.6923 42.1511 17.6923C30.0779 17.6923 20.2872 23.6645 20.2578 31.0385ZM17.8585 31.0385H17.8582V34.4776C17.8582 39.3244 21.0631 43.3239 25.4188 45.9857C29.8156 48.6727 35.7372 50.2565 42.1508 50.2565C48.5644 50.2565 54.4861 48.6727 58.8829 45.9857C63.2385 43.3239 66.4435 39.3244 66.4435 34.4776V31.1468C66.4437 31.1218 66.4438 31.0968 66.4438 31.0719C66.4438 26.2251 63.2388 22.2256 58.8832 19.5638C54.4863 16.8768 48.5647 15.293 42.1511 15.293C35.7375 15.293 29.8158 16.8768 25.419 19.5638C21.0734 22.2195 17.8731 26.2067 17.8585 31.0385Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M64.0441 34.4778C64.0441 41.8671 54.2421 47.8574 42.1507 47.8574C30.0593 47.8574 20.2573 41.8671 20.2573 34.4778V31.3386H64.0441V34.4778Z", fill: "#FEDC90" }),
        React__default["default"].createElement("path", { d: "M64.0441 31.0719C64.0441 38.4613 54.2421 44.4515 42.1507 44.4515C30.0593 44.4515 20.2573 38.4613 20.2573 31.0719C20.2573 23.6826 30.0593 17.6924 42.1507 17.6924C54.2421 17.6924 64.0441 23.6826 64.0441 31.0719Z", fill: "#D1884F" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.4361 31.9044C25.4361 34.3714 27.2287 36.5809 30.0567 38.0676L28.0973 41.4614L28.0977 41.4617H28.0973V50.0509C28.0973 51.1867 29.018 52.1075 30.1538 52.1075C31.2896 52.1075 32.2104 51.1867 32.2104 50.0509V43.22L34.3184 39.5686C35.6663 39.8545 37.1133 40.0097 38.6192 40.0097C45.9 40.0097 51.8022 36.3808 51.8022 31.9044C51.8022 27.428 45.9 23.7991 38.6192 23.7991C31.3383 23.7991 25.4361 27.428 25.4361 31.9044Z", fill: "url(#paint1_linear)" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0569 38.0676C29.7437 37.9029 29.4431 37.7294 29.1563 37.5476C26.8538 36.0883 25.4363 34.0982 25.4363 31.9045C25.4363 27.428 31.3386 23.7991 38.6194 23.7991C45.9002 23.7991 51.8025 27.428 51.8025 31.9045C51.8025 36.3809 45.9002 40.0098 38.6194 40.0098C37.1135 40.0098 35.6666 39.8545 34.3187 39.5687L32.2106 43.22V50.0509C32.2106 51.1868 31.2899 52.1075 30.1541 52.1075C29.0183 52.1075 28.0975 51.1868 28.0975 50.0509V41.4617L30.0569 38.0676ZM25.9981 41.4978V50.0509C25.9981 52.3462 27.8588 54.2069 30.1541 54.2069C32.4493 54.2069 34.31 52.3462 34.31 50.0509V43.7826L35.4034 41.8887C36.4418 42.0334 37.5181 42.1092 38.6194 42.1092C42.584 42.1092 46.2738 41.1254 49.0408 39.4242C51.7735 37.7441 53.9019 35.1446 53.9019 31.9045C53.9019 28.6643 51.7735 26.0648 49.0408 24.3847C46.2738 22.6835 42.584 21.6997 38.6194 21.6997C34.6548 21.6997 30.965 22.6835 28.198 24.3847C25.4652 26.0648 23.3369 28.6643 23.3369 31.9045C23.3369 34.7481 24.9657 37.0898 27.2286 38.7677L26.2939 40.3867C26.2048 40.5358 26.1337 40.697 26.0835 40.8672C26.0221 41.0746 25.9943 41.2873 25.9981 41.4978Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M29.5544 28.4894C29.5544 30.8083 32.5084 32.6882 36.1524 32.6882C39.7964 32.6882 42.7505 30.8083 42.7505 28.4894C42.7505 26.1704 39.7964 24.2905 36.1524 24.2905C32.5084 24.2905 29.5544 26.1704 29.5544 28.4894Z", fill: "#9E7200" }),
        React__default["default"].createElement("path", { d: "M29.5547 26.6899H42.7508V28.4894H29.5547V26.6899Z", fill: "#9E7200" }),
        React__default["default"].createElement("path", { d: "M29.5544 26.6898C29.5544 29.0088 32.5084 30.8887 36.1524 30.8887C39.7964 30.8887 42.7505 29.0088 42.7505 26.6898C42.7505 24.3709 39.7964 22.491 36.1524 22.491C32.5084 22.491 29.5544 24.3709 29.5544 26.6898Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M33.6489 26.1838L35.5086 25.0003C35.9016 24.7502 36.4038 24.7502 36.7968 25.0003L38.6565 26.1838C39.0269 26.4195 39.0269 26.9602 38.6565 27.1959L36.7968 28.3794C36.4038 28.6295 35.9016 28.6295 35.5086 28.3794L33.6489 27.1959C33.2785 26.9602 33.2785 26.4195 33.6489 26.1838Z", fill: "#9E7200" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.3599 21.9496C31.9392 20.9446 33.9929 20.3916 36.1525 20.3916C38.3121 20.3916 40.3658 20.9446 41.9451 21.9496C43.4996 22.9389 44.8499 24.5636 44.8499 26.6899V28.4894C44.8499 30.6156 43.4996 32.2404 41.9451 33.2296C40.3658 34.2347 38.3121 34.7876 36.1525 34.7876C33.9929 34.7876 31.9392 34.2347 30.3599 33.2296C28.8054 32.2404 27.4551 30.6156 27.4551 28.4894V26.6899C27.4551 24.5636 28.8054 22.9389 30.3599 21.9496ZM36.1525 22.491C32.5085 22.491 29.5545 24.3709 29.5545 26.6899V28.4894C29.5545 30.8083 32.5085 32.6882 36.1525 32.6882C39.7965 32.6882 42.7505 30.8083 42.7505 28.4894V26.6899C42.7505 24.3709 39.7965 22.491 36.1525 22.491Z", fill: "#633001" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear", x1: "45", y1: "0", x2: "45", y2: "90", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#54DADE" }),
                React__default["default"].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })),
            React__default["default"].createElement("linearGradient", { id: "paint1_linear", x1: "38.7618", y1: "24.0704", x2: "38.7618", y2: "51.8948", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#9F4A08" }),
                React__default["default"].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$S = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$R = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default["default"].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$Q = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default["default"].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$P = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$O = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default["default"].createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default["default"].createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default["default"].createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default["default"].createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default["default"].createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$N = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$M = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0)" },
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React__default["default"].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React__default["default"].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React__default["default"].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React__default["default"].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React__default["default"].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React__default["default"].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React__default["default"].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React__default["default"].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React__default["default"].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React__default["default"].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#53DEE9" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default["default"].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#53DEE9" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default["default"].createElement("clipPath", { id: "clip0" },
                React__default["default"].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$L = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default["default"].createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React__default["default"].createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React__default["default"].createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React__default["default"].createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$K = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ width: "24", height: "24", viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" })));
};

var Icon$J = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default["default"].createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React__default["default"].createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React__default["default"].createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React__default["default"].createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React__default["default"].createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React__default["default"].createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React__default["default"].createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React__default["default"].createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#54DADE" }),
                React__default["default"].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$I = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$H = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$G = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default["default"].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$F = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$E = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$D = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M16.59 9H15V4C15 3.45 14.55 3 14 3H10C9.45 3 9 3.45 9 4V9H7.41C6.52 9 6.07 10.08 6.7 10.71L11.29 15.3C11.68 15.69 12.31 15.69 12.7 15.3L17.29 10.71C17.92 10.08 17.48 9 16.59 9ZM5 19C5 19.55 5.45 20 6 20H18C18.55 20 19 19.55 19 19C19 18.45 18.55 18 18 18H6C5.45 18 5 18.45 5 19Z" })));
};

var Icon$C = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$B = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M20.9822 5.07062C20.8756 6.63229 18.0143 18.2999 18.0143 18.2999C18.0143 18.2999 17.8366 18.982 17.2146 19C17.0013 19 16.717 18.982 16.3971 18.6769C15.7395 18.1204 14.2467 17.0434 12.8427 16.0562C12.7894 16.11 12.7361 16.1639 12.665 16.2177C12.3451 16.5049 11.8653 16.9178 11.3499 17.4204C11.1544 17.5999 10.9411 17.7973 10.7279 18.0127L10.7101 18.0307C10.5857 18.1563 10.4791 18.2461 10.3902 18.3179C9.69709 18.8923 9.62601 18.4076 9.62601 18.1563L9.99922 14.0457V14.0098L10.017 13.9739C10.0348 13.9201 10.0703 13.9021 10.0703 13.9021C10.0703 13.9021 17.339 7.36825 17.5345 6.66819C17.5523 6.63229 17.4989 6.59639 17.4101 6.63229C16.9302 6.79385 8.55969 12.143 7.63555 12.7354C7.58224 12.7713 7.42229 12.7533 7.42229 12.7533L3.35254 11.4071C3.35254 11.4071 2.8727 11.2096 3.03264 10.7608C3.06819 10.6711 3.1215 10.5813 3.31699 10.4557C4.22336 9.80948 19.987 4.08336 19.987 4.08336C19.987 4.08336 20.4313 3.93976 20.6979 4.02951C20.8223 4.08336 20.8934 4.13721 20.9645 4.31671C20.9822 4.38851 21 4.53212 21 4.69367C21 4.78342 20.9822 4.89112 20.9822 5.07062Z" })));
};

var Icon$A = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$z = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0)" },
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.4158 8.3528C11.8828 8.88474 10.3235 10.444 10.3235 10.444C10.3235 10.444 10.6654 12.1511 9.80615 13.4062C9.65016 13.6341 9.32911 13.6324 9.13385 13.4372L3.14805 7.45132C2.95278 7.25606 2.95113 6.93494 3.17934 6.77945C4.43557 5.9235 6.14832 6.28183 6.14832 6.28183C6.14832 6.28183 6.98173 5.42057 8.23238 4.16991C9.9052 2.49653 13.2519 3.33322 13.2519 3.33322C13.2519 3.33322 14.0886 6.67997 12.4158 8.3528ZM6.05548 12.1512C4.9632 13.2435 3.32479 13.2435 3.32479 13.2435C3.32479 13.2435 3.32479 11.0589 4.41707 10.5128L6.05548 12.1512ZM10.1112 6.47413C10.5017 6.86465 11.1348 6.86465 11.5254 6.47413C11.9159 6.08361 11.9159 5.45044 11.5254 5.05992C11.1348 4.66939 10.5017 4.66939 10.1112 5.05992C9.72063 5.45044 9.72063 6.08361 10.1112 6.47413Z" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "clip0" },
                React__default["default"].createElement("rect", { width: "16", height: "16" })))));
};

var Icon$y = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default["default"].createElement("path", { d: "M12.7697 3.74169C12.7005 3.70807 12.623 3.69384 12.5459 3.70058C12.4689 3.70732 12.3952 3.73477 12.3333 3.77985C10.8594 4.85278 9.61031 4.33322 8.16413 3.73167C6.69309 3.1198 5.02586 2.42653 3.16668 3.77985C3.16421 3.78164 3.16207 3.78367 3.15968 3.7855C3.15391 3.78989 3.14834 3.79443 3.14282 3.79911C3.13766 3.80349 3.13255 3.80791 3.12767 3.81249C3.12311 3.81675 3.11874 3.82115 3.11439 3.82561C3.10918 3.83094 3.10404 3.83629 3.09918 3.84185C3.0955 3.84607 3.09201 3.85042 3.0885 3.85478C3.08367 3.86078 3.07889 3.8668 3.07446 3.87302C3.07116 3.87761 3.06813 3.88235 3.06503 3.88708C3.06101 3.89326 3.05699 3.89943 3.05333 3.9058C3.0502 3.9112 3.04735 3.91677 3.04448 3.92234C3.04145 3.92823 3.03838 3.93411 3.03566 3.94012C3.03276 3.94649 3.03019 3.95302 3.02762 3.95954C3.02546 3.96506 3.02327 3.97056 3.02136 3.97616C3.019 3.98308 3.01699 3.99014 3.01501 3.99723C3.01343 4.00284 3.01185 4.00841 3.01053 4.01408C3.00895 4.02092 3.00766 4.02786 3.00644 4.03484C3.00532 4.04117 3.00425 4.04749 3.00343 4.05387C3.00265 4.06015 3.00209 4.06647 3.00158 4.07284C3.00102 4.0802 3.00061 4.08757 3.00043 4.09496C3.00038 4.0978 3 4.10054 3 4.10338V12.5956C3 12.7029 3.0439 12.8057 3.12204 12.8816C3.20018 12.9574 3.30616 13 3.41667 13C3.52717 13 3.63315 12.9574 3.71129 12.8816C3.78943 12.8057 3.83333 12.7029 3.83333 12.5956V10.3782C5.23559 9.46014 6.4446 9.96224 7.83587 10.541C8.68293 10.8933 9.595 11.2727 10.5714 11.2726C11.2906 11.2726 12.0447 11.0668 12.8333 10.4928C12.8851 10.4551 12.9271 10.4063 12.956 10.3501C12.9849 10.294 13 10.232 13 10.1693V4.10338C13 4.02828 12.9785 3.95467 12.9378 3.89079C12.8971 3.8269 12.8389 3.77528 12.7697 3.74169Z" })));
};

var Icon$x = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("g", { opacity: "0.56" },
            React__default["default"].createElement("path", { d: "M18.6667 7.625L6 7.625C5.82319 7.625 5.65362 7.55586 5.5286 7.43279C5.40357 7.30972 5.33333 7.1428 5.33333 6.96875C5.33333 6.7947 5.40357 6.62778 5.5286 6.50471C5.65362 6.38164 5.82319 6.3125 6 6.3125L16.6667 6.3125C16.8435 6.3125 17.013 6.24336 17.1381 6.12029C17.2631 5.99722 17.3333 5.8303 17.3333 5.65625C17.3333 5.4822 17.2631 5.31528 17.1381 5.19221C17.013 5.06914 16.8435 5 16.6667 5L6 5C5.46975 5.0006 4.9614 5.20821 4.58646 5.57729C4.21151 5.94638 4.00061 6.44679 4 6.96875L4 17.0312C4.00061 17.5532 4.21151 18.0536 4.58646 18.4227C4.9614 18.7918 5.46975 18.9994 6 19H18.6667C19.0202 18.9996 19.3591 18.8612 19.609 18.6151C19.859 18.3691 19.9996 18.0355 20 17.6875V8.9375C19.9996 8.58953 19.859 8.25592 19.609 8.00986C19.3591 7.76381 19.0202 7.6254 18.6667 7.625ZM16.3333 14.5156C16.1356 14.5156 15.9422 14.4579 15.7778 14.3497C15.6133 14.2416 15.4851 14.0878 15.4095 13.908C15.3338 13.7281 15.314 13.5302 15.3525 13.3392C15.3911 13.1483 15.4864 12.9729 15.6262 12.8352C15.7661 12.6975 15.9443 12.6038 16.1382 12.5658C16.3322 12.5278 16.5333 12.5473 16.716 12.6218C16.8987 12.6963 17.0549 12.8225 17.1648 12.9844C17.2747 13.1462 17.3333 13.3366 17.3333 13.5313C17.3333 13.7923 17.228 14.0427 17.0404 14.2273C16.8529 14.4119 16.5985 14.5156 16.3333 14.5156Z" }))));
};

var Icon$w = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" })));
};

var Icon$v = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M9.38031 13.532L4.01253 11.58C3.71703 11.4726 3.46156 11.2772 3.28053 11.0201C3.09949 10.763 3.00159 10.4566 3.00002 10.1422C2.99844 9.82779 3.09327 9.52044 3.27172 9.26156C3.45016 9.00268 3.70367 8.80471 3.99807 8.69431L18.9218 3.09796C19.1983 2.99424 19.4988 2.97234 19.7875 3.03486C20.0761 3.09738 20.3407 3.24168 20.5495 3.45052C20.7584 3.65936 20.9027 3.92392 20.9652 4.21257C21.0277 4.50122 21.0057 4.80176 20.902 5.07829V5.07824L15.3056 20.0019C15.1974 20.2961 15.0011 20.5498 14.7435 20.7284C14.4858 20.907 14.1794 21.0019 13.8659 21H13.8578C13.5429 21.0003 13.2356 20.9032 12.9782 20.7219C12.7207 20.5406 12.5257 20.2841 12.4199 19.9875L10.468 14.6197L4.40017 20.6874C4.25593 20.8317 4.0603 20.9127 3.85631 20.9127C3.65233 20.9127 3.4567 20.8317 3.31246 20.6874C3.16822 20.5432 3.08718 20.3476 3.08718 20.1436C3.08718 19.9396 3.16822 19.744 3.31246 19.5997L9.38031 13.532Z" })));
};

var Icon$u = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M6.90909 9.06666C6.90909 11.9017 9.18837 14.2 12 14.2C14.8116 14.2 17.0909 11.9017 17.0909 9.06666C17.0909 6.2316 14.8116 3.93333 12 3.93333C9.18837 3.93333 6.90909 6.2316 6.90909 9.06666Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.6021 2.46693C15.2546 1.51168 13.6473 0.999364 12 1C10.3528 0.999362 8.74568 1.51161 7.39813 2.46673C6.05059 3.42185 5.02842 4.77325 4.4713 6.33624C3.91419 7.89924 3.84932 9.59757 4.28556 11.1991C4.7218 12.8007 5.63786 14.2274 6.90856 15.2842V22.2666C6.90856 22.3916 6.94024 22.5146 7.00061 22.6237C7.06097 22.7329 7.14801 22.8247 7.25346 22.8904C7.3589 22.9562 7.47926 22.9936 7.6031 22.9992C7.72694 23.0049 7.85015 22.9785 7.96103 22.9226L12.0001 20.8865L16.0378 22.9225C16.1487 22.9785 16.2719 23.0049 16.3958 22.9993C16.5196 22.9937 16.64 22.9562 16.7455 22.8905C16.8509 22.8248 16.938 22.733 16.9983 22.6238C17.0587 22.5146 17.0904 22.3916 17.0904 22.2666V15.2851C18.3613 14.2284 19.2777 12.8018 19.7142 11.2002C20.1506 9.59852 20.0859 7.90006 19.5289 6.3369C18.9719 4.77375 17.9497 3.42218 16.6021 2.46693ZM15.6365 14.5543C14.5601 15.2796 13.2946 15.6666 12 15.6666C10.2646 15.6647 8.60091 14.9687 7.37383 13.7314C6.14674 12.4941 5.4565 10.8165 5.45455 9.06666C5.45455 7.7613 5.83843 6.48526 6.55765 5.3999C7.27688 4.31453 8.29914 3.4686 9.49516 2.96906C10.6912 2.46952 12.0073 2.33882 13.277 2.59348C14.5466 2.84814 15.7129 3.47673 16.6283 4.39976C17.5437 5.32278 18.1671 6.49879 18.4197 7.77906C18.6722 9.05933 18.5426 10.3864 18.0472 11.5924C17.5518 12.7984 16.7129 13.8291 15.6365 14.5543Z" })));
};

var Icon$t = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M3.33263 6.25H5.33157V5.5C5.33198 5.10231 5.47251 4.72105 5.72234 4.43984C5.97216 4.15864 6.31089 4.00045 6.6642 4H17.3252C17.6785 4.00045 18.0173 4.15864 18.2671 4.43984C18.5169 4.72105 18.6575 5.10231 18.6579 5.5V6.25H20.6674C21.0207 6.25045 21.3594 6.40864 21.6092 6.68984C21.8591 6.97105 21.9996 7.35231 22 7.75V9.25C21.999 10.2442 21.6477 11.1974 21.0231 11.9004C20.3985 12.6034 19.5517 12.9989 18.6684 13H18.3316C17.5285 15.8066 15.3213 17.9075 12.661 18.2109V20.5H14.66C14.8367 20.5 15.0062 20.579 15.1311 20.7197C15.2561 20.8603 15.3263 21.0511 15.3263 21.25C15.3263 21.4489 15.2561 21.6397 15.1311 21.7803C15.0062 21.921 14.8367 22 14.66 22H9.32946C9.15274 22 8.98326 21.921 8.8583 21.7803C8.73334 21.6397 8.66314 21.4489 8.66314 21.25C8.66314 21.0511 8.73334 20.8603 8.8583 20.7197C8.98326 20.579 9.15274 20.5 9.32946 20.5H11.3284V18.2131C10.0308 18.0654 8.80008 17.4929 7.78839 16.5664C6.77671 15.6399 6.0284 14.4 5.63598 13H5.33157C4.44829 12.9989 3.60148 12.6034 2.97691 11.9004C2.35234 11.1974 2.00101 10.2442 2 9.25V7.75C2.0004 7.35231 2.14094 6.97105 2.39076 6.68984C2.64059 6.40864 2.97932 6.25045 3.33263 6.25ZM18.6684 11.5C19.1984 11.4993 19.7065 11.262 20.0812 10.8402C20.456 10.4184 20.6668 9.84653 20.6674 9.25V7.75H18.6579V10.6652C18.6575 10.9441 18.6436 11.2228 18.6163 11.5H18.6684ZM3.33263 9.25C3.33323 9.84653 3.54403 10.4184 3.91878 10.8402C4.29352 11.262 4.80161 11.4993 5.33157 11.5H5.36423C5.34255 11.2524 5.33167 11.0024 5.33157 10.75V7.75H3.33263V9.25Z" })));
};

var Icon$s = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 8.31935V6.75448C9.10375 6.75448 6.75 9.10616 6.75 11.9999C6.75 12.6905 6.88125 13.3637 7.135 13.9669C7.26625 14.2816 7.17 14.64 6.93375 14.8761C6.4875 15.3219 5.735 15.1646 5.49875 14.5788C5.175 13.7833 5 12.9091 5 11.9999C5 8.13576 8.1325 5.00602 12 5.00602V3.44115C12 3.04775 12.4725 2.85542 12.7438 3.12643L15.185 5.56553C15.36 5.74037 15.36 6.01139 15.185 6.18623L12.7438 8.62533C12.4725 8.90508 12 8.71275 12 8.31935ZM16.865 10.0328C16.7337 9.72686 16.83 9.35968 17.0662 9.12364C17.5125 8.67778 18.265 8.83514 18.5013 9.42088C18.825 10.2164 19 11.0907 19 11.9999C19 15.8639 15.8675 18.9937 12 18.9937V20.5673C12 20.952 11.5275 21.1443 11.2562 20.8733L8.815 18.4342C8.64 18.2593 8.64 17.9883 8.815 17.8135L11.2562 15.3744C11.5275 15.0946 12 15.287 12 15.6804V17.2452C14.8962 17.2452 17.25 14.8936 17.25 11.9999C17.25 11.3092 17.11 10.6448 16.865 10.0328Z" })));
};

var Icon$r = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M0 12.0057L0 5.8403C0 5.41523 0.227073 5.02171 0.597324 4.80513L5.96072 1.66786C6.34124 1.44527 6.81401 1.44397 7.19579 1.66446L12.6357 4.80618C13.0093 5.02192 13.2389 5.41728 13.2389 5.84475V8.06681L10.8636 9.40682V7.30474C10.8636 6.88322 10.6403 6.49245 10.2749 6.27469L7.19233 4.43725C6.81283 4.21104 6.33888 4.20639 5.9549 4.4251L3.01492 6.09972C2.6378 6.31453 2.40543 6.71187 2.40543 7.14192V10.6338C2.40543 11.0551 2.62852 11.4457 2.99357 11.6636L5.95654 13.4316C6.339 13.6599 6.81728 13.6629 7.20263 13.4394L16.7802 7.88594C17.1586 7.66648 17.6274 7.66517 18.0071 7.88251L23.3927 10.965C23.7686 11.1802 24 11.5768 24 12.006V18.2288C24 18.6589 23.7676 19.0562 23.3905 19.271L18.0046 22.3391C17.6261 22.5547 17.1598 22.5535 16.7825 22.336L11.4676 19.272C11.0936 19.0564 10.8636 18.6608 10.8636 18.233L10.8636 16.0175L13.2389 14.6418V16.8496C13.2389 17.2751 13.4664 17.669 13.8373 17.8854L16.7781 19.6015C17.1576 19.823 17.6286 19.8246 18.0096 19.6057L21.007 17.8841C21.382 17.6687 21.6127 17.2726 21.6127 16.8441V13.3907C21.6127 12.9631 21.3829 12.5677 21.0092 12.3519L18.0043 10.6175C17.6262 10.3992 17.1585 10.3983 16.7796 10.6151L7.18666 16.1036C6.80964 16.3193 6.34468 16.3196 5.96737 16.1044L0.608812 13.0476C0.232073 12.8326 0 12.4355 0 12.0057Z" })));
};

var Icon$q = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 0L5.55306 3.6761L7.92329 5.03416L12 2.7161L16.0767 5.03416L18.447 3.6761L12 0ZM16.0767 6.95417L18.447 8.31221V11.0283L14.3702 13.3463L14.3702 17.9825L12 19.3406L9.62982 17.9825L9.62982 13.3463L5.55306 11.0283V8.31221L7.92329 6.95417L12 9.27218L16.0767 6.95417ZM18.447 12.9483V15.6644L16.0767 17.0225V14.3063L18.447 12.9483ZM16.053 18.9424L20.1299 16.6244V11.9883L22.5 10.6303V17.9825L16.053 21.6585V18.9424ZM20.1299 7.3522L17.7596 5.99417L20.1299 4.6361L22.5 5.99417V8.71027L20.1299 10.0683V7.3522ZM9.62982 22.642V19.9259L12 21.2839L14.3702 19.9259V22.642L12 24L9.62982 22.642ZM7.92329 17.0225L5.55306 15.6644V12.9483L7.92329 14.3063V17.0225ZM12 7.3522L9.62982 5.99417L12 4.6361L14.3702 5.99417L12 7.3522ZM6.24042 5.99417L3.8702 7.3522V10.0683L1.5 8.71027L1.5 5.99417L3.8702 4.6361L6.24042 5.99417ZM1.5 10.6303L3.8702 11.9883L3.8702 16.6244L7.94695 18.9424V21.6585L1.5 17.9825L1.5 10.6303Z" })));
};

var Icon$p = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 20 20", fill: "none" }, props),
        React__default["default"].createElement("path", { d: "M7.39371 2.09677C8.40066 0.322581 10.0885 0.0537634 10.8373 0C9.83028 1.77419 10.2176 3.54839 11.8442 5.8871C13.4708 8.22581 15.2523 10.9677 14.1679 15.3226C13.3004 18.8065 9.98524 19.8925 8.4361 20C11 18 10.8134 15.3226 7.11932 13.7903C2.5 16 4.5 19 6.11237 20C0.148152 18.5484 -0.00676221 13.4677 0.922727 10.0806C1.66632 7.37097 3.34971 5.94086 4.09846 5.56452C3.55626 7.33871 4.33084 9.43548 5.64761 9.19355C6.96439 8.95161 6.88692 7.58064 6.80946 6.77419L6.80705 6.74911C6.72741 5.92107 6.50943 3.65483 7.39371 2.09677Z", fill: "#F93B5D" })));
};

var Icon$o = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React__default["default"].createElement("path", { d: "M11.4545 4.90909C11.4545 4.90909 10.6364 8.18182 9 8.18182C7.36364 8.18182 6.54545 4.90909 6.54545 4.90909L11.4545 4.90909Z" }),
        React__default["default"].createElement("path", { d: "M9 9.81818C10.6364 9.81818 11.4545 13.0909 11.4545 13.0909H6.54545C6.54545 13.0909 7.36364 9.81818 9 9.81818Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 0V0.818182C18 1.72193 17.2674 2.45455 16.3636 2.45455H15.4292C15.1634 4.44627 14.4814 6.05746 13.7994 7.23802C13.3629 7.9933 12.9252 8.57483 12.5928 8.97116L12.5685 9L12.5928 9.02889C12.9252 9.42522 13.3629 10.0067 13.7994 10.7621C14.4814 11.9426 15.1634 13.5538 15.4292 15.5455L16.3636 15.5455C17.2674 15.5455 18 16.2781 18 17.1818V18H0L0 17.1818C0 16.2781 0.732613 15.5455 1.63636 15.5455H2.5708C2.83662 13.5538 3.51857 11.9426 4.20065 10.7621C4.63705 10.0068 5.07481 9.42525 5.4072 9.02891L5.43149 9.00005L5.40722 8.97119C5.07481 8.57488 4.63705 7.99335 4.20065 7.23807C3.51857 6.05751 2.8366 4.44629 2.5708 2.45455H1.63636C0.732613 2.45455 0 1.72193 0 0.818182L0 0L18 0ZM13.7762 2.45455L4.22384 2.45455C4.47523 4.0977 5.04644 5.43099 5.61753 6.41941C5.99931 7.08019 6.37974 7.58431 6.66096 7.91964C6.80144 8.08711 6.91664 8.21188 6.99417 8.29238L7.02486 8.32397C7.04865 8.34826 7.06738 8.36681 7.08044 8.37957L7.09932 8.39777L7.10089 8.39927L7.10209 8.4004C7.26883 8.55518 7.36364 8.77243 7.36364 9.00002C7.36364 9.22764 7.26883 9.44492 7.10209 9.5997L7.10136 9.60038L7.09932 9.6023L7.08046 9.6205L7.06396 9.63676L7.0483 9.65241C7.03317 9.66759 7.01507 9.68605 6.9942 9.70769C6.97824 9.72427 6.96069 9.74273 6.94164 9.76303C6.92533 9.7804 6.90795 9.79913 6.88955 9.81923C6.85452 9.85746 6.81579 9.9006 6.77385 9.94859C6.73844 9.98909 6.70071 10.0331 6.66099 10.0805C6.37974 10.4158 5.99931 10.9199 5.61753 11.5807C5.04644 12.5691 4.47526 13.9024 4.22387 15.5455H13.7761C13.5247 13.9024 12.9536 12.5691 12.3825 11.5807C12.0007 10.9199 11.6203 10.4157 11.339 10.0804C11.1986 9.91294 11.0833 9.78817 11.0058 9.70764C10.9893 9.69057 10.9746 9.67548 10.9617 9.66243L10.9347 9.63541L10.9195 9.62048L10.9007 9.60225L10.8991 9.60075L10.8979 9.59968C10.7312 9.4449 10.6364 9.22759 10.6364 9C10.6364 8.77238 10.7312 8.55508 10.898 8.4003L10.8987 8.39957L10.9007 8.39772L10.9196 8.37952C10.9378 8.36169 10.9671 8.33258 11.0058 8.29233C11.0834 8.21183 11.1986 8.08706 11.339 7.91959C11.6203 7.58429 12.0007 7.08014 12.3825 6.41936C12.9536 5.43094 13.5248 4.09768 13.7762 2.45455Z" })));
};

var Icon$n = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.97828 0H11.2146C11.6079 0.00188312 11.9846 0.145139 12.2627 0.398653C12.5408 0.652167 12.6979 0.995464 12.7 1.35398V6.18372C13.2346 6.20899 13.7383 6.42011 14.1073 6.77362C14.4762 7.12713 14.6825 7.59614 14.6835 8.08407V12.5267C14.6835 12.8034 14.8041 13.0688 15.0188 13.2645C15.2335 13.4602 15.5246 13.5701 15.8282 13.5701C16.1317 13.5701 16.4229 13.4602 16.6376 13.2645C16.8523 13.0688 16.9728 12.8034 16.9728 12.5267V6.05151C15.1999 4.44345 14.8565 4.40443 15.338 2.63628L13.995 0.884071L14.5306 0.458761L17.92 3.51717V12.5323C17.9088 13.0303 17.6839 13.5045 17.2936 13.8531C16.9033 14.2017 16.3786 14.3969 15.8321 14.3969C15.2856 14.3969 14.7609 14.2017 14.3706 13.8531C13.9803 13.5045 13.7554 13.0303 13.7442 12.5323V8.08805C13.742 7.82869 13.6344 7.57927 13.4422 7.38802C13.25 7.19677 12.9868 7.07728 12.7035 7.05266V15.8623H13.7154C13.8417 15.8625 13.9627 15.9083 14.0521 15.9897C14.1416 16.071 14.192 16.1812 14.1924 16.2964V17.5054C14.192 17.6206 14.1416 17.731 14.0522 17.8124C13.9628 17.8939 13.8418 17.9399 13.7154 17.9403H0.480121C0.353812 17.9399 0.23282 17.8938 0.143587 17.8124C0.0543547 17.7309 0.00413632 17.6206 0.00390625 17.5054V16.2964C0.00413723 16.1813 0.0543833 16.0711 0.14364 15.9897C0.232898 15.9083 0.353892 15.8625 0.480121 15.8623H1.49284V1.35717C1.4949 0.99865 1.65207 0.655353 1.9302 0.401839C2.20832 0.148325 2.58495 0.00506903 2.97828 0.00318591V0ZM3.64148 2.16239H10.5505C10.6402 2.1626 10.726 2.19514 10.7894 2.2529C10.8527 2.31066 10.8884 2.38893 10.8887 2.47062V6.39319C10.8882 6.47473 10.8524 6.5528 10.789 6.61039C10.7257 6.66798 10.64 6.70041 10.5505 6.70062H3.64148C3.55217 6.7002 3.46665 6.66768 3.40349 6.61011C3.34034 6.55255 3.30466 6.47459 3.3042 6.39319V2.47062C3.30443 2.38907 3.34001 2.31091 3.40319 2.25318C3.46637 2.19544 3.55202 2.16281 3.64148 2.16239Z" })));
};

var Icon$m = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M7 6H19V9H7V6Z" }),
        React__default["default"].createElement("path", { d: "M3.17317 7.51079C3.07444 7.39497 3.07808 7.22356 3.18164 7.11203L7 3L7 12L3.17317 7.51079Z" }),
        React__default["default"].createElement("path", { d: "M18 16H5V19H18V16Z" }),
        React__default["default"].createElement("path", { d: "M20.8221 17.7336C20.9235 17.6203 20.9242 17.449 20.8236 17.335L17 13L17 22L20.8221 17.7336Z" })));
};

var Icon$l = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 22 22" }, props),
        React__default["default"].createElement("path", { d: "M11 1.93936L13.8747 6.71605C14.1539 7.18008 14.6094 7.51101 15.137 7.63321L20.5682 8.89109L16.9137 13.1011C16.5586 13.5101 16.3846 14.0456 16.4315 14.5851L16.9135 20.1392L11.7802 17.9645C11.2815 17.7532 10.7185 17.7532 10.2198 17.9645L5.0865 20.1392L5.56853 14.5851C5.61535 14.0456 5.44137 13.5101 5.08635 13.1011L1.43176 8.89109L6.86298 7.63321C7.39059 7.51101 7.84609 7.18007 8.12534 6.71605L11 1.93936Z", strokeWidth: "2" })));
};

var Icon$k = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "none" }, props),
        React__default["default"].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z", fill: "#1DC872" })));
};

var Icon$j = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("circle", { cx: "12", cy: "12", r: "10", fill: "#1263F1" }),
        React__default["default"].createElement("path", { d: "M9.75195 21.7462L12.7508 11.25V8.25004L14.7104 2.37146C18.9167 3.55273 22.0008 7.41622 22.0008 12C22.0008 17.5229 17.5237 22 12.0008 22C11.2276 22 10.4748 21.9123 9.75195 21.7462Z", fill: "#F93B5D" }),
        React__default["default"].createElement("path", { d: "M6 14.3143L15.7714 0L13.2 10.2H18.3429L8.57143 24L11.1429 14.3143H6Z", fill: "white" })));
};

var Icon$i = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12.6611 2.56833C12.17 3.05943 12.17 3.85564 12.6611 4.34674L16.8107 8.49636C17.3018 8.98745 18.098 8.98745 18.5891 8.49636C19.0802 8.00526 19.0802 7.20904 18.5891 6.71795L14.4395 2.56833C13.9484 2.07724 13.1522 2.07724 12.6611 2.56833Z" }),
        React__default["default"].createElement("path", { d: "M13.3996 13.6349C12.4394 14.4679 11.498 15.0633 10.7424 15.4697L5.71495 10.4422C6.25474 9.44537 7.08496 8.14449 8.2151 7.01435C9.34524 5.88421 10.6461 5.05399 11.643 4.51419L16.6704 9.54166C16.2641 10.2972 15.6687 11.2386 14.8356 12.1989L20.5825 17.1795C21.2672 17.7729 21.3046 18.8225 20.6639 19.4632C20.0233 20.1039 18.9736 20.0664 18.3802 19.3817L13.3996 13.6349Z" }),
        React__default["default"].createElement("path", { d: "M3.76909 11.4604C3.27799 11.9515 3.27799 12.7477 3.76909 13.2388L7.9187 17.3884C8.4098 17.8795 9.20601 17.8795 9.69711 17.3884C10.1882 16.8973 10.1882 16.1011 9.69711 15.61L5.54749 11.4604C5.0564 10.9693 4.26018 10.9693 3.76909 11.4604Z" }),
        React__default["default"].createElement("path", { d: "M4.13741 19.2844C3.4429 19.2844 2.87988 19.8475 2.87988 20.542C2.87988 21.2365 3.4429 21.7995 4.13741 21.7995H13.3592C14.0538 21.7995 14.6168 21.2365 14.6168 20.542C14.6168 19.8475 14.0538 19.2844 13.3592 19.2844H4.13741Z" })));
};

var Icon$h = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 20C11.7221 19.9997 11.4507 19.9188 11.2212 19.7679C7.82085 17.545 6.34847 16.0208 5.53635 15.0679C3.80568 13.0367 2.97712 10.9513 3.00048 8.69292C3.02774 6.105 5.18373 4 7.80657 4C9.71378 4 11.0347 5.03458 11.804 5.89625C11.8284 5.92327 11.8585 5.94494 11.8923 5.95979C11.9261 5.97463 11.9628 5.98232 12 5.98232C12.0372 5.98232 12.0739 5.97463 12.1077 5.95979C12.1415 5.94494 12.1716 5.92327 12.196 5.89625C12.9653 5.03375 14.2862 4 16.1934 4C18.8163 4 20.9723 6.105 20.9995 8.69333C21.0229 10.9521 20.1935 13.0375 18.4636 15.0683C17.6515 16.0213 16.1792 17.5454 12.7788 19.7683C12.5492 19.9191 12.2779 19.9998 12 20Z" })));
};

var Icon$g = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.196 5.89625C12.1716 5.92327 12.1415 5.94494 12.1077 5.95979C12.0739 5.97463 12.0372 5.98232 12 5.98232C11.9628 5.98232 11.9261 5.97463 11.8923 5.95979C11.8585 5.94494 11.8284 5.92327 11.804 5.89625C11.0347 5.03458 9.71378 4 7.80657 4C5.18373 4 3.02774 6.105 3.00048 8.69292C2.97712 10.9513 3.80568 13.0367 5.53635 15.0679C6.34847 16.0208 7.82085 17.545 11.2212 19.7679C11.4507 19.9188 11.7221 19.9997 12 20C12.2779 19.9998 12.5492 19.9191 12.7788 19.7683C16.1792 17.5454 17.6515 16.0213 18.4636 15.0683C20.1935 13.0375 21.0229 10.9521 20.9995 8.69333C20.9723 6.105 18.8163 4 16.1934 4C14.2862 4 12.9653 5.03375 12.196 5.89625ZM19.3996 8.70988C19.3816 7.01856 17.9591 5.6 16.1934 5.6C14.9169 5.6 13.9955 6.28248 13.3901 6.96126L13.3842 6.96783C13.2058 7.16565 12.9891 7.32023 12.751 7.42476C12.5131 7.52923 12.2572 7.58232 12 7.58232C11.7428 7.58232 11.4869 7.52923 11.249 7.42476C11.0109 7.32023 10.7942 7.16563 10.6158 6.96782L10.6104 6.96184C10.0043 6.28289 9.08276 5.6 7.80657 5.6C6.04085 5.6 4.61837 7.01865 4.60039 8.70947M19.3996 8.70988C19.4183 10.5151 18.7728 12.2378 17.2456 14.0308C16.548 14.8494 15.2135 16.2544 12.0003 18.3655C8.7864 16.254 7.45186 14.8488 6.75424 14.0302C5.22657 12.2373 4.58179 10.5144 4.60039 8.70947" })));
};

var Icon$f = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", stroke: 'currentColor', fill: 'none' }, props),
        React__default["default"].createElement("path", { d: "M8.6959 12.5179C8.6959 13.9182 7.56074 15.0533 6.16045 15.0533C4.76016 15.0533 3.625 13.9182 3.625 12.5179C3.625 11.1176 4.76016 9.98242 6.16045 9.98242C7.56074 9.98242 8.6959 11.1176 8.6959 12.5179Z", fill: 'none', strokeWidth: "1.25" }),
        React__default["default"].createElement("path", { d: "M19.7779 6.16045C19.7779 7.56074 18.6428 8.6959 17.2425 8.6959C15.8422 8.6959 14.707 7.56074 14.707 6.16045C14.707 4.76016 15.8422 3.625 17.2425 3.625C18.6428 3.625 19.7779 4.76016 19.7779 6.16045Z", fill: 'none', strokeWidth: "1.25" }),
        React__default["default"].createElement("path", { d: "M19.7779 18.8401C19.7779 20.2404 18.6428 21.3756 17.2425 21.3756C15.8422 21.3756 14.707 20.2404 14.707 18.8401C14.707 17.4398 15.8422 16.3047 17.2425 16.3047C18.6428 16.3047 19.7779 17.4398 19.7779 18.8401Z", fill: 'none', strokeWidth: "1.25" }),
        React__default["default"].createElement("line", { x1: "8.31641", y1: "10.8513", x2: "14.7188", y2: "7.15491", strokeWidth: "1.25" }),
        React__default["default"].createElement("line", { y1: "-0.625", x2: "7.39281", y2: "-0.625", transform: "matrix(0.866025 0.5 0.5 -0.866025 8.62891 13.6348)", strokeWidth: "1.25" })));
};

var Icon$e = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", stroke: 'currentColor', fill: 'currentColor' }, props),
        React__default["default"].createElement("path", { d: "M12 5.70173C7.35887 5.76011 2.80536 10.251 1.19995 12.0388C2.82968 13.8875 7.41725 18.3308 12 18.3016C16.5827 18.2724 21.0486 13.8631 22.8 12.0388C21.0729 10.2023 16.641 5.64335 12 5.70173Z", fill: 'none', strokeWidth: "1.25" }),
        React__default["default"].createElement("path", { d: "M16.5913 12.0757C16.5913 14.6524 14.5025 16.7412 11.9258 16.7412C9.34909 16.7412 7.26025 14.6524 7.26025 12.0757C7.26025 9.49899 9.34909 7.41016 11.9258 7.41016C14.5025 7.41016 16.5913 9.49899 16.5913 12.0757Z", fill: 'none', strokeWidth: "1.25" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.686 11.8942C11.351 11.8942 11.89 11.3551 11.89 10.6901C11.89 10.2819 11.6868 9.92107 11.3761 9.70333C11.5645 9.656 11.7617 9.63086 11.9647 9.63086C13.2947 9.63086 14.3729 10.709 14.3729 12.039C14.3729 13.3689 13.2947 14.4471 11.9647 14.4471C10.6348 14.4471 9.55664 13.3689 9.55664 12.039C9.55664 11.791 9.59412 11.5518 9.66373 11.3266C9.87638 11.6674 10.2547 11.8942 10.686 11.8942Z" })));
};

var Icon$d = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 0L12.6872 3.93837C13.0466 4.24034 13.1049 4.79112 12.8174 5.16858C12.5299 5.54604 12.0054 5.60724 11.6461 5.30527L8 2.24171L4.35394 5.30527C3.99455 5.60724 3.47015 5.54604 3.18264 5.16858C2.89513 4.79112 2.9534 4.24034 3.31278 3.93837L8 0Z" }),
        React__default["default"].createElement("path", { opacity: "0.56", fillRule: "evenodd", clipRule: "evenodd", d: "M8 5.25145L12.6872 9.18983C13.0466 9.49179 13.1049 10.0426 12.8174 10.42C12.5299 10.7975 12.0054 10.8587 11.6461 10.5567L8 7.49316L4.35394 10.5567C3.99455 10.8587 3.47015 10.7975 3.18264 10.42C2.89513 10.0426 2.9534 9.49179 3.31278 9.18983L8 5.25145Z" }),
        React__default["default"].createElement("path", { opacity: "0.32", fillRule: "evenodd", clipRule: "evenodd", d: "M8 10.5029L12.6872 14.4413C13.0466 14.7432 13.1049 15.294 12.8174 15.6715C12.5299 16.0489 12.0054 16.1101 11.6461 15.8082L8 12.7446L4.35394 15.8082C3.99455 16.1101 3.47015 16.0489 3.18264 15.6715C2.89513 15.294 2.9534 14.7432 3.31278 14.4413L8 10.5029Z" })));
};

var Icon$c = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("circle", { cx: "12", cy: "12", r: "10", fill: "#1263F1" }),
        React__default["default"].createElement("path", { d: "M9.75195 21.7462L12.7508 11.25V8.25004L14.7104 2.37146C18.9167 3.55273 22.0008 7.41622 22.0008 12C22.0008 17.5229 17.5237 22 12.0008 22C11.2276 22 10.4748 21.9123 9.75195 21.7462Z", fill: "#F93B5D" }),
        React__default["default"].createElement("path", { d: "M6 14.3143L15.7714 0L13.2 10.2H18.3429L8.57143 24L11.1429 14.3143H6Z", fill: "white" })));
};

var Icon$b = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M20.5954 8.13393C20.4671 8.00057 20.3144 7.89482 20.1462 7.82278C19.9779 7.75075 19.7975 7.71387 19.6154 7.71429H16.8461V7C16.8461 5.67392 16.3356 4.40215 15.4267 3.46447C14.5179 2.52678 13.2853 2 12 2C10.7147 2 9.48208 2.52678 8.57325 3.46447C7.66442 4.40215 7.15384 5.67392 7.15384 7V7.71429L4.38461 7.71429C4.01739 7.71429 3.66521 7.8648 3.40554 8.13271C3.14588 8.40061 3 8.76398 3 9.14286L3 18.7857C3 20.5268 4.42788 22 6.11538 22H17.8846C18.7009 22.0003 19.4848 21.671 20.0688 21.0826C20.3627 20.7933 20.5968 20.4456 20.7568 20.0604C20.9168 19.6752 20.9996 19.2606 21 18.8415L21 9.14286C21.0006 8.95544 20.9651 8.76977 20.8956 8.59659C20.8262 8.42341 20.7242 8.26615 20.5954 8.13393ZM8.53846 7C8.53846 6.0528 8.90316 5.14439 9.55232 4.47462C10.2015 3.80485 11.0819 3.42857 12 3.42857C12.9181 3.42857 13.7985 3.80485 14.4477 4.47462C15.0968 5.14439 15.4615 6.0528 15.4615 7V7.71429L8.53846 7.71429V7Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M12 20C14.7614 20 17 17.7614 17 15C17 12.2386 14.7614 10 12 10C9.23857 10 7 12.2386 7 15C7 17.7614 9.23857 20 12 20Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M15.8729 11.8809C15.5261 11.9494 15.1955 12.0462 14.9233 12.1067C14.3023 12.2458 13.7217 12.7216 13.5947 13.5925C13.4818 14.3708 13.7439 14.7054 13.6289 15.6107C13.4273 17.1913 11.9112 17.7357 11.2035 18.0663C10.7943 18.2558 9.80031 18.6913 9.03418 19.024C9.86482 19.6369 10.889 19.9998 11.9999 19.9998C14.762 19.9998 16.9999 17.7619 16.9999 14.9998C16.9999 13.8224 16.5926 12.7397 15.9112 11.8869C15.8991 11.8849 15.887 11.8829 15.8729 11.8809Z", fill: "url(#paint0_linear_1393_6292)" }),
        React__default["default"].createElement("path", { d: "M11.4375 14.2661C11.8226 13.4335 11.6835 13.4314 11.9758 12.6492C12.3448 11.6573 13.4919 11.9395 13.8085 11.9819C14.3306 12.0524 14.4677 11.8669 15.5685 11.6895C15.623 11.6814 15.6754 11.6734 15.7278 11.6673C14.8125 10.6452 13.4818 10 12 10C10.0101 10 8.29234 11.1613 7.4879 12.8448C9.13709 13.254 10.9173 14.1431 11.4375 14.2661ZM10.3448 10.871C10.4899 10.8931 11.1956 11.7702 11.3286 14.0222C11.3286 14.0222 10.4214 13.8044 10.2258 13.3367C10.0645 12.9516 10.2742 12.4456 10.3448 10.871ZM15.9032 11.877C15.9052 11.881 15.9093 11.8831 15.9113 11.8871C15.8992 11.8851 15.8851 11.8851 15.873 11.8831C15.8831 11.879 15.8931 11.879 15.9032 11.877ZM7 15C7 14.6008 7.04637 14.2137 7.13508 13.8427C7.31653 13.9939 7.51008 14.1613 7.71573 14.3528C9.01814 15.5605 11.1371 16.5141 11.9093 15.627C11.9113 15.629 11.9133 15.629 11.9133 15.631C11.7722 15.8165 11.2339 16.4032 10.2056 16.2218L8.58064 18.6472C7.60887 17.7359 7 16.4395 7 15Z", fill: "url(#paint1_linear_1393_6292)" }),
        React__default["default"].createElement("rect", { x: "7.14941", y: "7.71094", width: "1.39342", height: "1.38694", fill: "black" }),
        React__default["default"].createElement("rect", { x: "15.4531", y: "7.71094", width: "1.39342", height: "1.38694", fill: "black" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear_1393_6292", x1: "15.0026", y1: "13.1904", x2: "13.823", y2: "19.689", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FF496A" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#E42648" })),
            React__default["default"].createElement("linearGradient", { id: "paint1_linear_1393_6292", x1: "9.41335", y1: "17.3653", x2: "12.0214", y2: "10", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { offset: "0.00181229", stopColor: "#1158F1" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#119BED" })))));
};

var Icon$a = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.03639 4.52174C2.43652 3.52195 3.15669 2.25 4.32263 2.25H13.6733C14.8393 2.25 15.5595 3.52196 14.9596 4.52174L11.748 9.87441V13.1261C11.748 13.7717 11.3348 14.345 10.7223 14.5491L8.22233 15.3825C7.25103 15.7062 6.24799 14.9833 6.24799 13.9594V9.8744L3.03639 4.52174ZM13.6733 3.75H4.32263L7.53423 9.10266C7.6741 9.33578 7.74799 9.60254 7.74799 9.8744V13.9594L10.248 13.1261V9.8744C10.248 9.60254 10.3219 9.33578 10.4617 9.10266L13.6733 3.75Z" })));
};

var Box = styled__default["default"].div(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styledSystem.background, styledSystem.border, styledSystem.layout, styledSystem.position, styledSystem.space);
var templateObject_1$L;

var Flex = styled__default["default"](Box)(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), styledSystem.flexbox);
var templateObject_1$K;

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
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$2.INFO; }
    switch (variant) {
        case variants$2.DANGER:
            return Icon$1q;
        case variants$2.WARNING:
            return Icon$1r;
        case variants$2.SUCCESS:
            return Icon$1s;
        case variants$2.INFO:
        default:
            return Icon$1p;
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
var Title = styled__default["default"].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 8px;\n  margin-left: 16px;\n  margin-right: 28px;\n\n  svg {\n    margin-right: 8px;\n    fill: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  font-size: 16px;\n  margin-bottom: 8px;\n  margin-left: 16px;\n  margin-right: 28px;\n\n  svg {\n    margin-right: 8px;\n    fill: ", ";\n  }\n"])), getThemeColor);
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default["default"].div(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 16px;\n  padding-left: 16px;\n  padding-right: ", ";\n  padding-top: 16px;\n"], ["\n  flex: 1;\n  padding-bottom: 16px;\n  padding-left: 16px;\n  padding-right: ", ";\n  padding-top: 16px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled__default["default"].div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default["default"](Flex)(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  background-color: #fff;\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  overflow: hidden;\n  background-color: #fff;\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])));
var Description = styled__default["default"].p(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  color: #6b7d98;\n  font-size: 16px;\n  vertical-align: middle;\n  font-weight: 400;\n  line-height: 1.5;\n  margin: 0;\n"], ["\n  color: #6b7d98;\n  font-size: 16px;\n  vertical-align: middle;\n  font-weight: 400;\n  line-height: 1.5;\n  margin: 0;\n"])));
var Alert = function (_a) {
    var style = _a.style, title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default["default"].createElement(StyledAlert, null,
        React__default["default"].createElement(Details, { style: style, hasHandler: !!onClick },
            React__default["default"].createElement(Title, { variant: variant, hasDescription: !!children },
                React__default["default"].createElement(Icon, { color: "currentColor", width: "24px" }),
                React__default["default"].createElement("span", null, title)),
            typeof children === "string" ? React__default["default"].createElement(Description, null, children) : children),
        onClick && (React__default["default"].createElement(CloseHandler, null,
            React__default["default"].createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React__default["default"].createElement(Icon$15, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$J, templateObject_2$l, templateObject_3$9, templateObject_4$6, templateObject_5$4;

var StyledBanner = styled__default["default"].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  padding: 32px;\n  border-radius: 24px;\n  background: ", ";\n  display: flex;\n"], ["\n  padding: 32px;\n  border-radius: 24px;\n  background: ", ";\n  display: flex;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.cardBlue;
});
var StyledBannerBoby = styled__default["default"].div(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  width: ", ";\n  align-items: ", ";\n  display: flex;\n  flex-direction: column;\n"], ["\n  width: ", ";\n  align-items: ", ";\n  display: flex;\n  flex-direction: column;\n"])), function (_a) {
    var large = _a.large;
    return (large ? "50%" : "100%");
}, function (_a) {
    var large = _a.large;
    return large && "flex-start";
});
var StyledBannerLeft = styled__default["default"].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));
var Banner = function (_a) {
    var large = _a.large, children = _a.children;
    return (React__default["default"].createElement(StyledBanner, null,
        React__default["default"].createElement(StyledBannerBoby, { large: large },
            children[0],
            children[1],
            children[2]),
        children[3] && React__default["default"].createElement(StyledBannerLeft, null, children[3])));
};
Banner.defaultProps = {
    large: false,
};
var templateObject_1$I, templateObject_2$k, templateObject_3$8;

var BannerBody = styled__default["default"].p(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  color: ", ";\n  margin-bottom: 24px;\n  font-weight: 900;\n  min-height: 64px;\n  font-size: 26px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n"], ["\n  color: ", ";\n  margin-bottom: 24px;\n  font-weight: 900;\n  min-height: 64px;\n  font-size: 26px;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.warning;
});
var templateObject_1$H;

var BannerTitle = styled__default["default"].h2(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  color: ", ";\n  min-height: 32px;\n  margin-bottom: 24px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n"], ["\n  color: ", ";\n  min-height: 32px;\n  margin-bottom: 24px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var templateObject_1$G;

var Separator = styled__default["default"].div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default["default"].ul(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum, true), [item], false);
        }
        return __spreadArray(__spreadArray([], accum, true), [
            React__default["default"].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ], false);
    }, []);
};
var DefaultSeparator = React__default["default"].createElement(Icon$18, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default["default"].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default["default"].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$F, templateObject_2$j;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return variant === variants$3.TRANSPARENT ? 'transparent' : theme.colors[variant === variants$3.SUBTLE || variant === variants$3.TERTIARY ? "tertiary" : "card"];
};
var StyledButtonMenu = styled__default["default"].div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 8px;\n  display: ", ";\n\n  & > button,\n  & > a {\n    ", "\n  }\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 8px;\n  display: ", ";\n\n  & > button,\n  & > a {\n    ", "\n  }\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor, function (_a) {
    var autoWidth = _a.autoWidth;
    return autoWidth ? 'flex' : 'inline-flex';
}, function (_a) {
    var autoWidth = _a.autoWidth;
    return autoWidth && 'flex: 1 1 auto;';
});
var templateObject_1$E;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$5.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$3.PRIMARY : _d, onItemClick = _a.onItemClick, _e = _a.autoWidth, autoWidth = _e === void 0 ? false : _e, children = _a.children;
    return (React__default["default"].createElement(StyledButtonMenu, { variant: variant, autoWidth: autoWidth }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default["default"](Button)(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$3.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return (React__default["default"].createElement(InactiveButton, __assign({ forwardedAs: as, variant: "tertiary", color: variant === variants$3.PRIMARY ? "text" : variant === variants$3.TRANSPARENT ? "backgroundDisabled" : variant === variants$3.TERTIARY ? 'primary' : "primary" }, props)));
    }
    return React__default["default"].createElement(Button, __assign({ as: as, variant: variant === variants$3.TERTIARY ? 'primary' : variant }, props));
};
var templateObject_1$D;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled__default["default"].div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$C;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default["default"].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default["default"].div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$B;

var CardHeader = styled__default["default"].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$A;

var CardFooter = styled__default["default"].div(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$z;

var StyledCardRibbon = styled__default["default"].div(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React__default["default"].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default["default"].createElement("div", { title: text }, text)));
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
var Checkbox = styled__default["default"].input.attrs({ type: "checkbox" })(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  // &:hover:not(:disabled):not(:checked) {\n  //   box-shadow: ", ";\n  // }\n  //\n  &:focus {\n    outline: none;\n    box-shadow: none;\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  // &:hover:not(:disabled):not(:checked) {\n  //   box-shadow: ", ";\n  // }\n  //\n  &:focus {\n    outline: none;\n    box-shadow: none;\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$2, getScale$2, function (_a) {
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
var DropdownContent = styled__default["default"].div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
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
var Container$1 = styled__default["default"].div(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default["default"].createElement(Container$1, null,
        target,
        React__default["default"].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$w, templateObject_2$i;

var bunnyFall = styled.keyframes(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled__default["default"].div(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArray([], Array(count), true).map(function (_, index) { return (React__default["default"].createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React__default["default"].createElement(Icon$$, { width: size, height: size }))); });
    return React__default["default"].createElement("div", null, bunnies);
};
var templateObject_1$v, templateObject_2$h;

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default["default"].span(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  display: block;\n  color: ", ";\n  font-size: ", ";\n  vertical-align: middle;\n  font-weight: ", ";\n  line-height: ", ";\n  ", "\n  ", "\n  ", "\n"], ["\n  display: block;\n  color: ", ";\n  font-size: ", ";\n  vertical-align: middle;\n  font-weight: ", ";\n  line-height: ", ";\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var lineHeight = _a.lineHeight;
    return lineHeight || "1.5";
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space, styledSystem.typography);
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
var Heading = styled__default["default"](Text).attrs({ bold: true })(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.1;\n  color: #07162d;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.1;\n  color: #07162d;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
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

var Wrapper$2 = styled__default["default"].div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
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
}, styledSystem.space);
var templateObject_1$s;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default["default"].createElement(Wrapper$2, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default["default"].img(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default["default"].div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
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
    return (React__default["default"].createElement(Wrapper$2, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default["default"].createElement(StyledImage, { src: src, alt: alt }) : React__default["default"].createElement(Placeholder, null)));
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
    return theme.colors.inputBorder;
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
var Input$1 = styled__default["default"].input(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 8px;\n  border-color: ", ";\n  color: ", ";\n  border-width: ", ";\n  box-shadow: none;\n  border-style: solid;\n  display: block;\n  font-size: 12px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    border-color: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 8px;\n  border-color: ", ";\n  color: ", ";\n  border-width: ", ";\n  box-shadow: none;\n  border-style: solid;\n  display: block;\n  font-size: 12px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    border-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, isLight = _a.isLight;
    return (isLight ? 'transparent' : theme.colors.input);
}, getBorderColor, function (_a) {
    var theme = _a.theme, isLight = _a.isLight;
    return (isLight ? theme.colors.textSubtle : theme.colors.text);
}, function (_a) {
    var isLight = _a.isLight;
    return (isLight ? '0px' : '1px');
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
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

var GridLayout$1 = styled__default["default"].div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
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

var GridLayout = styled__default["default"](GridLayout$1)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$o;

var NotificationDotRoot = styled__default["default"].span(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled__default["default"].span(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, children = _a.children, props = __rest(_a, ["show", "children"]);
    return (React__default["default"].createElement(NotificationDotRoot, null,
        React.Children.map(children, function (child) { return React.cloneElement(child, props); }),
        React__default["default"].createElement(Dot, { show: show })));
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
var Radio = styled__default["default"].input.attrs({ type: "radio" })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  // &:hover:not(:disabled):not(:checked) {\n  //   box-shadow: ", ";\n  // }\n  //\n  // &:focus {\n  //   outline: none;\n  //   box-shadow: ", ";\n  // }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  // &:hover:not(:disabled):not(:checked) {\n  //   box-shadow: ", ";\n  // }\n  //\n  // &:focus {\n  //   outline: none;\n  //   box-shadow: ", ";\n  // }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
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
}, styledSystem.space);
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
        return "\n      color: " + color + ";\n      background: transparent;\n      border: 2px solid " + color + ";\n    ";
    }
    return "";
};
var StyledTag = styled__default["default"].div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"])), styledSystem.variant({
    prop: "scale",
    variants: scaleVariants,
}), styledSystem.variant({
    variants: styleVariants$1,
}), styledSystem.space, getOutlineStyles);
var templateObject_1$l;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default["default"].createElement(StyledTag, __assign({}, props),
        React__default["default"].isValidElement(startIcon) &&
            React__default["default"].cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React__default["default"].isValidElement(endIcon) &&
            React__default["default"].cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales$1.MD,
    outline: false,
};

var StyledLink = styled__default["default"](Text)(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return React__default["default"].createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$k;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default["default"].createElement(Link, __assign({ external: true }, props),
        children,
        React__default["default"].createElement(Icon$V, { color: "primary", ml: "4px" })));
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

var Bar = styled__default["default"].div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default["default"].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return (variant === variants.FLAT ? "0" : "32px");
}, function (_a) {
    var variant = _a.variant;
    return (variant === variants.FLAT ? "0" : "32px");
}, styledSystem.variant({
    variants: styleVariants,
}), styledSystem.space);
var templateObject_1$j, templateObject_2$e;

var ProgressBunnyWrapper = styled__default["default"].div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
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
    return (React__default["default"].createElement(StyledProgress, { variant: variant },
        showProgressBunny && (React__default["default"].createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default["default"].createElement(Icon$O, null))),
        React__default["default"].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default["default"].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var bunnyHeadMain = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2024%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20y%3D%2218%22%20width%3D%2217%22%20height%3D%2210%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M7.50675%2023.7056C6.14677%2025.0656%207.73758%2027.2292%209.75419%2029.2458C11.7708%2031.2624%2013.9344%2032.8532%2015.2944%2031.4933C16.6543%2030.1333%2015.9641%2027.0691%2013.9475%2025.0525C11.9309%2023.0359%208.86673%2022.3457%207.50675%2023.7056Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M13.507%2021.706C12.1463%2023.0666%2013.7379%2025.2313%2015.7555%2027.2489C17.7731%2029.2665%2019.9378%2030.8581%2021.2984%2029.4974C22.6591%2028.1368%2021.9685%2025.0711%2019.9509%2023.0535C17.9333%2021.0359%2014.8676%2020.3453%2013.507%2021.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.7694%205.63421C11.8457%206.02664%2011.9158%206.4375%2011.9836%206.85716C11.6151%206.85766%2011.2482%206.87522%2010.8839%206.90895C10.6029%206.29464%2010.2694%205.67199%209.88441%205.05277C7.39613%201.05079%205.06199%200.901096%202.98861%202.01265C0.915239%203.12421%200.810677%205.89597%203.28297%208.59188C3.57049%208.90541%203.86254%209.23841%204.15744%209.58036C1.66027%2011.5156%200%2014.291%200%2017.2695C0%2022.8292%205.78518%2024%2012%2024C18.2148%2024%2024%2022.8292%2024%2017.2695C24%2013.8488%2021.8101%2010.6958%2018.6776%208.77602C18.8852%207.81022%2019%206.74856%2019%205.63421C19%201.17171%2017.159%200%2014.888%200C12.6171%200%2011.1155%202.27116%2011.7694%205.63421Z%22%20fill%3D%22url%28%23paint0_linear%29%22%2F%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cpath%20d%3D%22M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%2212%22%20y1%3D%220%22%20x2%3D%2212%22%20y2%3D%2224%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyHeadMax = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2024%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20y%3D%2218%22%20width%3D%2217%22%20height%3D%2210%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M7.50675%2023.7056C6.14677%2025.0656%207.73758%2027.2292%209.75419%2029.2458C11.7708%2031.2624%2013.9344%2032.8532%2015.2944%2031.4933C16.6543%2030.1333%2015.9641%2027.0691%2013.9475%2025.0525C11.9309%2023.0359%208.86673%2022.3457%207.50675%2023.7056Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M13.507%2021.706C12.1463%2023.0666%2013.7379%2025.2313%2015.7555%2027.2489C17.7731%2029.2665%2019.9378%2030.8581%2021.2984%2029.4974C22.6591%2028.1368%2021.9685%2025.0711%2019.9509%2023.0535C17.9333%2021.0359%2014.8676%2020.3453%2013.507%2021.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.146%205.75159C12.2105%206.10896%2012.2703%206.48131%2012.3281%206.86164C12.2189%206.85865%2012.1095%206.85714%2012%206.85714C11.3803%206.85714%2010.7648%206.90539%2010.159%206.99779C9.87904%206.41458%209.55472%205.82246%209.18725%205.23145C6.69897%201.22947%204.53826%200.986793%202.67882%201.98366C0.819381%202.98052%200.856278%205.67644%203.26696%208.40538C3.58076%208.76061%203.90097%209.13983%204.2247%209.52859C1.69013%2011.4659%200%2014.2644%200%2017.2695C0%2022.8292%205.78518%2024%2012%2024C18.2148%2024%2024%2022.8292%2024%2017.2695C24%2013.8658%2021.8318%2010.7272%2018.7243%208.80476C18.9022%207.86044%2019%206.83019%2019%205.75159C19%201.19612%2017.2549%200%2015.1022%200C12.9495%200%2011.5261%202.31847%2012.146%205.75159Z%22%20fill%3D%22url%28%23paint0_linear%29%22%2F%3E%3Cpath%20d%3D%22M9.50467%2015.0634C8.94352%2013.4456%206.79685%2013.4456%206.08131%2015.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M18.8894%2015.0634C18.3283%2013.4456%2016.1816%2013.4456%2015.4661%2015.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M11.4505%2019.0787C11.4505%2020.5097%2013.955%2020.5097%2013.955%2019.0787%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%2212%22%20y1%3D%220%22%20x2%3D%2212%22%20y2%3D%2224%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var SliderContainer = styled__default["default"](Box)(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  position: relative;\n  height: 48px;\n"], ["\n  position: relative;\n  height: 48px;\n"])));
var SliderLabel = styled__default["default"].label(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  margin-left: 16px; // offset the bunny butt width\n  left: calc(", "%);\n"], ["\n  position: absolute;\n  bottom: 0;\n  margin-left: 16px; // offset the bunny butt width\n  left: calc(", "%);\n"])), function (_a) {
    var progress = _a.progress;
    return progress;
});
styled__default["default"].img(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  position: absolute;\n"], ["\n  position: absolute;\n"])));
var BunnySlider = styled__default["default"].div(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  position: absolute;\n  left: 14px;\n  width: 100%;\n"], ["\n  position: absolute;\n  left: 14px;\n  width: 100%;\n"])));
var StyledInput = styled__default["default"].input(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  height: 32px;\n  position: relative;\n  cursor: pointer;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-moz-range-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transition: 0.1s all;\n    transform: translate(-2px, -2px);\n    // custom moz reset\n    background-color: transparent;\n    border: 0;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-ms-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n"], ["\n  height: 32px;\n  position: relative;\n  cursor: pointer;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-moz-range-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transition: 0.1s all;\n    transform: translate(-2px, -2px);\n    // custom moz reset\n    background-color: transparent;\n    border: 0;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n  ::-ms-thumb {\n    -webkit-appearance: none;\n    background-image: url(", ");\n    width: 24px;\n    height: 32px;\n    cursor: pointer;\n    transform: translate(-2px, -2px);\n    transition: 0.1s all;\n\n    :hover {\n      transform: scale(1.1) translate(-3px, -3px);\n    }\n  }\n"])), function (_a) {
    var isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHeadMain);
}, function (_a) {
    var isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHeadMain);
}, function (_a) {
    var isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? bunnyHeadMax : bunnyHeadMain);
});
var BarBackground = styled__default["default"].div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  top: 18px;\n  background-color: ", ";\n"], ["\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  top: 18px;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
});
var BarProgress = styled__default["default"].div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  position: absolute;\n  width: ", ";\n  height: 10px;\n  top: 18px;\n\n  background: ", ";\n"], ["\n  position: absolute;\n  width: ", ";\n  height: 10px;\n  top: 18px;\n\n  background: ", ";\n"])), function (_a) {
    var progress = _a.progress, isCurrentValueMaxValue = _a.isCurrentValueMaxValue;
    return (isCurrentValueMaxValue ? "calc(100% - 16px)" : progress + "%");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var templateObject_1$h, templateObject_2$d, templateObject_3$7, templateObject_4$5, templateObject_5$3, templateObject_6$1, templateObject_7$1;

var Icon$9 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 15 32", width: 15, height: 32 }, props),
        React__default["default"].createElement("path", { d: "M9.58803 20.8649C7.72935 21.3629 8.02539 24.0334 8.76388 26.7895C9.50238 29.5456 10.5812 32.0062 12.4399 31.5082C14.2986 31.0102 15.2334 28.0099 14.4949 25.2538C13.7564 22.4978 11.4467 20.3669 9.58803 20.8649Z", fill: "#0098A1" }),
        React__default["default"].createElement("path", { d: "M1 24.4516C1 20.8885 3.88849 18 7.45161 18H15V28H4.54839C2.58867 28 1 26.4113 1 24.4516Z", fill: "#1FC7D4" }),
        React__default["default"].createElement("path", { d: "M6.11115 17.2246C6.79693 18.4124 5.77784 19.3343 4.52793 20.0559C3.27802 20.7776 1.97011 21.1992 1.28433 20.0114C0.598546 18.8236 1.1635 17.1151 2.41341 16.3935C3.66332 15.6718 5.42537 16.0368 6.11115 17.2246Z", fill: "#53DEE9" }),
        React__default["default"].createElement("path", { d: "M1.64665 23.6601C0.285995 25.0207 1.87759 27.1854 3.89519 29.203C5.91279 31.2206 8.07743 32.8122 9.43808 31.4515C10.7987 30.0909 10.1082 27.0252 8.09058 25.0076C6.07298 22.99 3.0073 22.2994 1.64665 23.6601Z", fill: "#1FC7D4" })));
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
    return (React__default["default"].createElement(SliderContainer, __assign({}, props),
        React__default["default"].createElement(Icon$9, { style: { position: "absolute" } }),
        React__default["default"].createElement(BunnySlider, null,
            React__default["default"].createElement(BarBackground, null),
            React__default["default"].createElement(BarProgress, { isCurrentValueMaxValue: isCurrentValueMaxValue, progress: progressPercentage }),
            React__default["default"].createElement(StyledInput, { type: "range", min: min, max: max, value: value, onChange: handleChange, isCurrentValueMaxValue: isCurrentValueMaxValue })),
        valueLabel && React__default["default"].createElement(SliderLabel, { progress: labelOffset }, valueLabel)));
};

var Icon$8 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 256 256" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z", fill: "#464649" }),
        React__default["default"].createElement("path", { d: "M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z", fill: "#606063" }),
        React__default["default"].createElement("path", { d: "M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z", fill: "#464649" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z", fill: "#464649" }),
        React__default["default"].createElement("path", { d: "M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z", fill: "#606063" }),
        React__default["default"].createElement("path", { d: "M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z", fill: "#464649" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z", fill: "#464649" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z", fill: "#979797" }),
        React__default["default"].createElement("path", { d: "M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z", fill: "#464649" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z", fill: "#737373" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z", fill: "#606063" })));
};

var Icon$7 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React__default["default"].createElement("svg", { width: "128", height: "128", viewBox: "0 0 128 128", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default["default"].createElement("path", { d: "M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z", fill: "#FEDC90", stroke: "#D1884F", strokeWidth: "2.89134" }),
            React__default["default"].createElement("path", { d: "M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z", fill: "#D1884F", stroke: "#633001", strokeWidth: "2.89134" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z", fill: "#633001" }))));
};

var rotate = styled.keyframes(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = styled.keyframes(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container = styled__default["default"].div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled__default["default"](Icon$7)(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate);
var FloatingPanIcon = styled__default["default"](Icon$8)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default["default"].createElement(Container, null,
        React__default["default"].createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" }),
        React__default["default"].createElement(FloatingPanIcon, { width: size + "px" })));
};
var templateObject_1$g, templateObject_2$c, templateObject_3$6, templateObject_4$4, templateObject_5$2;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  0% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 0.3;\n  }\n  100% {\n    opacity: 0.6;\n  }\n"], ["\n  0% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 0.3;\n  }\n  100% {\n    opacity: 0.6;\n  }\n"])));
var Root = styled__default["default"].div(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  // background-color: ", ";\n  background-color: ", ";\n  opacity: 0.16;\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  // background-color: ", ";\n  background-color: ", ";\n  opacity: 0.16;\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    _a.theme; var isDark = _a.isDark;
    return (isDark ? "#749BD8" : "#708DB7");
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default["default"](Root)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default["default"](Root)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default["default"].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default["default"].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$f, templateObject_2$b, templateObject_3$5, templateObject_4$3, templateObject_5$1;

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
var Handle = styled__default["default"].div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return (checked ? theme.colors.success : theme.toggle.handleBackground);
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled__default["default"].input(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n"])), Handle, getScale("checkedLeft"));
var StyledToggle = styled__default["default"].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  //background-color: ", ";\n  background-color: #E5EAF2;\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  //background-color: ", ";\n  background-color: #E5EAF2;\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$e, templateObject_2$a, templateObject_3$4;

var scales = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React__default["default"].createElement(StyledToggle, { checked: isChecked, scale: scale },
        React__default["default"].createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React__default["default"].createElement(Handle, { checked: checked, scale: scale })));
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
                throw new Error("Invalid column, " + action.columnName + " not found");
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
                throw new Error("Invalid row data, " + column.name + " not found");
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
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
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
    var _a = React.useReducer(reducer, {
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
            nextPage: noop__default["default"],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default["default"],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }), true);
    }, [state.columns]);
    React.useEffect(function () {
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
        return theme.colors.dropDown;
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
    if (badgeType === "boost") {
        return theme.colors.boost;
    }
    return theme.colors.inputBorder;
};
var getBadgeColor = function (_a) {
    var _b = _a.badgeType, badgeType = _b === void 0 ? "light" : _b, theme = _a.theme;
    if (badgeType === "light" || badgeType === "dark") {
        return theme.colors.text;
    }
    if (badgeType === "new" || badgeType === "primary" || badgeType === "hot" || badgeType === "boost") {
        return theme.colors.contrast;
    }
    if (badgeType === "warning") {
        return theme.colors.background;
    }
    return theme.colors.contrast;
};
var Wrapper$1 = styled__default["default"].div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  display: inline-flex;\n  padding: ", ";\n  background: ", ";\n  color: ", ";\n  border-radius: 16px;\n"], ["\n  display: inline-flex;\n  padding: ", ";\n  background: ", ";\n  color: ", ";\n  border-radius: 16px;\n"])), function (_a) {
    var isMenu = _a.isMenu;
    return isMenu ? '2px 8px' : '4px 12px';
}, getBadgeBg, getBadgeColor);
var StyledText$1 = styled__default["default"](Text)(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n"], ["\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: ", ";\n"])), function (_a) {
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
    return (React__default["default"].createElement(Wrapper$1, { badgeType: badgeType, isMenu: isMenu },
        React__default["default"].createElement(StyledText$1, { fontSize: fontSize, lineHeight: lineHeight, fontWeight: fontWeight, color: "inherit" }, children)));
};
var templateObject_1$d, templateObject_2$9;

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
    xll: 1200,
    xxl: 1400,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    xll: "@media screen and (min-width: " + breakpointMap.xll + "px)",
    xxl: "@media screen and (min-width: " + breakpointMap.xxl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
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
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
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
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
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
    var makeListener = React.useCallback(function () {
        return debounce__default["default"](function (event) {
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
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    React.useEffect(function () {
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
    failure: "#F93B5D",
    primary: "#1263F1",
    primaryBright: "#53DEE9",
    primaryDark: "#0098A1",
    secondary: "#7645D9",
    success: "#1DC872",
    warning: "#FFDB1C",
    dark: "#102648",
};
var brandColors = {
    binance: "#F0B90B",
    polygon: "#8247E5",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundContrast: '#07162D', backgroundDisabled: "#E9EAEB", header: "#071C3C", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#eeeaf4", inputBorder: "#E5EAF2", inputSecondary: "#d7caec", tertiary: "#E4EFFF", text: "#452A7A", disabled: "#E9EAEB", textDisabled: "#BDC2C4", textSubtle: "#8f80ba", borderColor: "#E9EAEB", card: "#FFFFFF", dropDown: "#F6F6F6", footer: "#FFFFFF", boost: "#7412F1", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
        cardHeader: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
        cardBlue: "linear-gradient(235deg, #336FF5 4.05%, rgba(17, 81, 225, 0.32) 103.52%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#9A6AFF", header: "#071C3C", background: "#07162D", backgroundContrast: '#F9FAFD', backgroundDisabled: "#C8D4E6", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#021127", inputBorder: "#1C3254", inputSecondary: "#0E3382", primaryDark: "#0098A1", tertiary: "#E4EFFF", text: "#708DB7", disabled: "#F2F6FC", textDisabled: "#C8D4E6", textSubtle: "#749BD8", borderColor: "#524B63", card: "#102648", dropDown: "#1C3254", footer: "#0C1F3C", boost: "#7412F1", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
        cardHeader: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
        cardBlue: "linear-gradient(235deg, #336FF5 4.05%, rgba(17, 81, 225, 0.32) 103.52%)",
    } });

var light$5 = {
    background: lightColors.card,
};
var dark$5 = {
    background: darkColors.card,
};

var light$4 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$4 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$2 = {
    handleBackground: lightColors.text,
};
var dark$2 = {
    handleBackground: darkColors.text,
};

var light$1 = {
    background: darkColors.card,
};
var dark$1 = {
    background: lightColors.card,
};

var light = {
    background: lightColors.card,
    text: lightColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var dark = {
    background: darkColors.card,
    text: darkColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$5, colors: darkColors, card: dark$4, toggle: dark$2, modal: dark$1, radio: dark$3, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$5, colors: lightColors, card: light$4, toggle: light$2, modal: light$1, radio: light$3, tooltip: light });

var isTouchDevice = function () {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};

var Arrow = styled__default["default"].div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"], ["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
});
var StyledTooltip = styled__default["default"].div(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  padding: 8px 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 8px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"], ["\n  padding: 8px 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 8px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.boxShadow;
}, Arrow, Arrow, Arrow, Arrow);
var templateObject_1$c, templateObject_2$8;

var portalRoot = document.getElementById("portal-root");
var useTooltip = function (content, options) {
    var _a = options.placement, placement = _a === void 0 ? "auto" : _a, _b = options.trigger, trigger = _b === void 0 ? "hover" : _b, _c = options.arrowPadding, arrowPadding = _c === void 0 ? 16 : _c, _d = options.tooltipPadding, tooltipPadding = _d === void 0 ? { left: 16, right: 16 } : _d, _e = options.tooltipOffset, tooltipOffset = _e === void 0 ? [0, 10] : _e;
    var _f = React.useState(null), targetElement = _f[0], setTargetElement = _f[1];
    var _g = React.useState(null), tooltipElement = _g[0], setTooltipElement = _g[1];
    var _h = React.useState(null), arrowElement = _h[0], setArrowElement = _h[1];
    var _j = React.useState(false), visible = _j[0], setVisible = _j[1];
    var isHoveringOverTooltip = React.useRef(false);
    var hideTimeout = React.useRef();
    var hideTooltip = React.useCallback(function (e) {
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
    var showTooltip = React.useCallback(function (e) {
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
    var toggleTooltip = React.useCallback(function (e) {
        e.stopPropagation();
        setVisible(!visible);
    }, [visible]);
    // Trigger = hover
    React.useEffect(function () {
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
    React.useEffect(function () {
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
    React.useEffect(function () {
        if (targetElement === null || trigger !== "click")
            return undefined;
        targetElement.addEventListener("click", toggleTooltip);
        return function () { return targetElement.removeEventListener("click", toggleTooltip); };
    }, [trigger, targetElement, visible, toggleTooltip]);
    // Handle click outside
    React.useEffect(function () {
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
    React.useEffect(function () {
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
    var _k = reactPopper.usePopper(targetElement, tooltipElement, {
        placement: placement,
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement, padding: arrowPadding },
            },
            { name: "offset", options: { offset: tooltipOffset } },
            { name: "preventOverflow", options: { padding: tooltipPadding } },
        ],
    }), styles = _k.styles, attributes = _k.attributes;
    var tooltip = (React__default["default"].createElement(StyledTooltip, __assign({ ref: setTooltipElement, style: styles.popper }, attributes.popper),
        React__default["default"].createElement(styled.ThemeProvider, { theme: darkTheme }, content),
        React__default["default"].createElement(Arrow, { ref: setArrowElement, style: styles.arrow })));
    var tooltipInPortal = portalRoot ? reactDom.createPortal(tooltip, portalRoot) : null;
    return {
        targetRef: setTargetElement,
        tooltip: tooltipInPortal !== null && tooltipInPortal !== void 0 ? tooltipInPortal : tooltip,
        tooltipVisible: visible,
    };
};

var StyledModal$1 = styled__default["default"].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background-color: #fff;\n  border-radius: 16px 16px 0 0;  \n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"], ["\n  background-color: #fff;\n  border-radius: 16px 16px 0 0;  \n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ModalHeader = styled__default["default"].div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: 24px 16px;\n\n  ", " {\n    padding: 32px 32px 24px;\n  }\n  \n  .closeModal {\n    width: 24px;\n    height: 24px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 24px 16px;\n\n  ", " {\n    padding: 32px 32px 24px;\n  }\n  \n  .closeModal {\n    width: 24px;\n    height: 24px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ModalTitle = styled__default["default"](Flex)(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var ModalBody$1 = styled__default["default"].div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  padding: 0 16px 24px;\n  \n  ", " {\n    padding: 0 32px 32px;\n  }\n"], ["\n  padding: 0 16px 24px;\n  \n  ", " {\n    padding: 0 32px 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b;
    return (React__default["default"].createElement(StyledModal$1, null,
        React__default["default"].createElement(ModalHeader, null,
            React__default["default"].createElement(ModalTitle, null,
                onBack && (React__default["default"].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React__default["default"].createElement(Icon$1n, { color: "primary" }))),
                React__default["default"].createElement(Heading, null, title)),
            !hideCloseButton && (React__default["default"].createElement(IconButton, { variant: "text", className: "closeModal", scale: "sm", ml: "12px", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default["default"].createElement(Icon$15, { width: "24px", color: "card" })))),
        React__default["default"].createElement(ModalBody$1, null, children)));
};
var templateObject_1$b, templateObject_2$7, templateObject_3$3, templateObject_4$2;

var StyledModal = styled__default["default"].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-radius: 16px 16px 0 0;  \n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  position: relative;\n  top: 0;\n  left: 0;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-radius: 16px 16px 0 0;  \n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  position: relative;\n  top: 0;\n  left: 0;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var StyledIconButton = styled__default["default"](IconButton)(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 24px;\n  left: calc(100% - 40px);\n  \n  ", " {\n    top: 32px;\n    left: calc(100% - 56px);\n  }\n"], ["\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 24px;\n  left: calc(100% - 40px);\n  \n  ", " {\n    top: 32px;\n    left: calc(100% - 56px);\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ModalBody = styled__default["default"].div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  padding: 0 16px 24px;\n  \n  ", " {\n    padding: 0 32px 32px;\n  }\n"], ["\n  padding: 0 16px 24px;\n  \n  ", " {\n    padding: 0 32px 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Background = styled__default["default"].img(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var ModalWithBackground = function (_a) {
    var onDismiss = _a.onDismiss, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, backBtnColor = _a.backBtnColor, background = _a.background;
    return (React__default["default"].createElement(StyledModal, null,
        !hideCloseButton && (React__default["default"].createElement(StyledIconButton, { variant: "text", className: "closeModal", scale: "sm", onClick: onDismiss, "aria-label": "Close the dialog" },
            React__default["default"].createElement(Icon$15, { width: "24px", color: backBtnColor !== null && backBtnColor !== void 0 ? backBtnColor : "card" }))),
        React__default["default"].createElement(Background, { src: background, alt: 'image' }),
        React__default["default"].createElement(ModalBody, null, children)));
};
var templateObject_1$a, templateObject_2$6, templateObject_3$2, templateObject_4$1;

var Overlay = styled__default["default"].div.attrs({ role: "presentation" })(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(10, 22, 43);\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(10, 22, 43);\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
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

var ModalWrapper = styled__default["default"].div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n\n  ", " {\n    justify-content: center;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n\n  ", " {\n    justify-content: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
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
    return (React__default["default"].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default["default"].createElement(ModalWrapper, null,
            React__default["default"].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default["default"].isValidElement(modalNode) &&
                React__default["default"].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$8;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var giftImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANWSURBVHgB7ZTdaxRXGMafc+ZjZ8zudrJht2uT6MYYU5WSgFAKvbFQWqS9EWpbclEQCqWXgfaid70oQqFg/4FC6VXBgk1LrwpFaKsxKiZ+RQ3qBj+iJuvOZndn5+N8eGbUIMSYXe8U32GYM2cO5zfP+z7vAV7GCxuV+fkdtVptvN31dL0Fd8rlvcuue7jRaIw+mluYnS1FrvseQvau53l9aCPIegtuX7lymOr6iOU43cHlq3tR6mvIVusXWnH/JIvVPfzytTKs1Bt6JG/lvhx7+9lBl+a+4Ro9IAlx7VeyDhcCuLsEuViBSSjYwl0QDhi7dqL100S6+MPXzSfto68FuPHtwY/opo3f8/9PbjHfHAUt5h1CCMTvf4P9OwXJBUJKoKe7YKazEKPbkWJNA+0quvHJFyMyxI9CiN2MR7APfAXZ0w31DjF9AQvfHYRUV8QZqFLUOzyMdC4PbexDN/fWru61QKsUNbf2fr7439RuziK0wgh9fgu09sAzWi6LmteAEqb+UF1q4N+rwrYz0Berjty3TyOHDvEngVa5zurf+IcwKCLBIKXE8szZB2qEhOh2QDMbEHKeKArVzzSWa4B6V2mGWxhZ04GrQHZu6zEt3zPtRUoRC1E9fhJhGCIIfHgtD2RoAI0oQD3y0VKp1a0UaMqEDCIwKkptgwofv9Po3fP+WLYnB9swEJ2YgViqwFBj0zThbH8dGcNE1rSRNhREmUIwla26SumOwYG2QXGUPvt0dkOxcEcnGixdhzdzDpTS5La2bUnqoxGS1Cr0Q0ilXrp1aJbV3xEoDs00f42f8abR3LWk8HHom/sTYOJXqUAsAFeplUsusG1zT8egrnx+Qp0IyX7B+Ysr89yyYBVfTcwRR8QYWBBAVmrQhku3OgalhjadNpx0XVlPed6DP3/94RcJa+fww5EEE1yBfIiqC0nlzY5BA/v3u2Ymc0omiwia52dXvhmlvsT6CUxZP/KVItVzQXV5qmNQoqrLnogrHqePla+vzFtDgwkoZqmTD6FSxO/V/yoMDs49Ewii9bM09SNMo5P1M+fKXDVm3LykWFBFtFXfqJoRiabqKb9e/e1pW617ej8ek5OTQ1TQ1zjhpGhZ00fGx+EAjhlS+cHRf+bxMp7ruA9B8HiZzFdvegAAAABJRU5ErkJggg==";

var ActionsContainer = styled__default["default"].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n"], ["\n  display: flex;\n  justify-content: flex-start;\n"])));
var StyledIcon = styled__default["default"].img(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  width: 26px;\n  filter: drop-shadow(2px 4px 8px rgba(0, 109, 163, 0.4));\n"], ["\n  width: 26px;\n  filter: drop-shadow(2px 4px 8px rgba(0, 109, 163, 0.4));\n"])));
var ToastAction = function (_a) {
    _a.title; var telegramDescription = _a.telegramDescription, tweeterDescription = _a.tweeterDescription, url = _a.url; _a.thx;
    return (React__default["default"].createElement(ActionsContainer, null,
        React__default["default"].createElement(reactShare.TwitterShareButton, { style: { width: '35%' }, title: tweeterDescription, url: "" + url },
            React__default["default"].createElement(Button, { scale: "sm", width: '100%', style: { backgroundColor: '#16CDFD', alignItems: "center" } },
                React__default["default"].createElement(StyledIcon, { src: giftImg, alt: "gift-icon" }),
                React__default["default"].createElement(Text, { color: '#fff', fontSize: '12px', bold: true }, "Twitter"),
                React__default["default"].createElement(Icon$A, { mr: "8px", color: "#fff", width: "20px" }))),
        React__default["default"].createElement(reactShare.TelegramShareButton, { style: { width: '35%', marginLeft: "10px", alignItems: "center" }, title: telegramDescription, url: "" + url },
            React__default["default"].createElement(Button, { scale: "sm", width: '100%', style: { backgroundColor: '#26A6E5', alignItems: "center" } },
                React__default["default"].createElement(Text, { color: '#fff', fontSize: '12px', bold: true }, "Telegram"),
                React__default["default"].createElement(Icon$B, { mr: "8px", color: "#fff", width: "20px" })))));
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
var ClearAllButton = styled__default["default"](Button)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  position: absolute;\n  right: 0;\n  top: ", ";\n"], ["\n  position: absolute;\n  right: 0;\n  top: ", ";\n"])), function (_a) {
    var top = _a.top;
    return -top + "px";
});
var StyledToast = styled__default["default"].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: fixed;\n  max-width: calc(100% - 12px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.1), 0px 20px 36px -8px rgba(14, 14, 44, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 16px;\n\n  ", " {\n    transform: none;\n    left: auto;\n    right: 35px;\n    max-width: 350px;\n  }\n"], ["\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: fixed;\n  max-width: calc(100% - 12px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.1), 0px 20px 36px -8px rgba(14, 14, 44, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 16px;\n\n  ", " {\n    transform: none;\n    left: auto;\n    right: 35px;\n    max-width: 350px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ProgressWrapper = styled__default["default"].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  background-color: ", "\n  bottom: 0;\n  min-height: 5px;\n"], ["\n  background-color: ", "\n  bottom: 0;\n  min-height: 5px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var ProgressLine = styled__default["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 5px;\n  transition: 100ms all;\n  border-radius: 16px;\n"], ["\n  background-color: ", ";\n  height: 5px;\n  transition: 100ms all;\n  border-radius: 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
var AlertWrapper = styled__default["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 0 16px;\n"], ["\n  padding: 0 16px;\n"])));
var LinkWrapper = styled__default["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin: 14px 0 11px 0;\n  display: flex;\n  align-items: center;\n"], ["\n  margin: 14px 0 11px 0;\n  display: flex;\n  align-items: center;\n"])));
var LinkStyles = styled__default["default"].a(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n color: ", ";\n font-size: 14px;\n font-weight: 700;\n line-height: 21px;\n  text-decoration: underline;\n"], ["\n color: ", ";\n font-size: 14px;\n font-weight: 700;\n line-height: 21px;\n  text-decoration: underline;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var SharingText = styled__default["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n"], ["\n  display: flex;\n  flex-direction: row;\n"])));
var ActionContainer = styled__default["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n"], ["\n"])));
var Toast = function (_a) {
    var _b = _a.removeButtonPosition, removeButtonPosition = _b === void 0 ? 60 : _b, clearAll = _a.clearAll, toast = _a.toast, style = _a.style, handleMouseEnter = _a.handleMouseEnter, handleMouseLeave = _a.handleMouseLeave, handleRemove = _a.handleRemove, progress = _a.progress, props = __rest(_a, ["removeButtonPosition", "clearAll", "toast", "style", "handleMouseEnter", "handleMouseLeave", "handleRemove", "progress"]);
    var description = toast.description, type = toast.type, title = toast.title, telegramDescription = toast.telegramDescription, tweeterDescription = toast.tweeterDescription, hash = toast.hash, url = toast.url;
    return (React__default["default"].createElement(reactTransitionGroup.CSSTransition, __assign({ timeout: 250, style: style }, props),
        React__default["default"].createElement(StyledToast, { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            clearAll && (React__default["default"].createElement(ClearAllButton, { variant: 'text', top: removeButtonPosition, onClick: function () { return clearAll(); } },
                React__default["default"].createElement(Text, { fontSize: '16px', color: '#1263F1', lineHeight: '19px' }, "Clear All"))),
            React__default["default"].createElement(Alert, { style: { padding: '16px 0 0 0' }, title: title, variant: alertTypeMap[type], onClick: handleRemove },
                React__default["default"].createElement(AlertWrapper, null,
                    hash &&
                        React__default["default"].createElement(LinkWrapper, null,
                            React__default["default"].createElement(LinkStyles, { target: "_blank", href: "https://bscscan.com/tx/" + hash }, "View on bscscan"),
                            React__default["default"].createElement(Icon$C, { ml: '7px', width: '18px', height: '18px', color: 'primary' })),
                    description ? React__default["default"].createElement(Text, { color: "#6B7D98", fontSize: "12px", as: "p", mb: "8px", dangerouslySetInnerHTML: { __html: description } }) : React__default["default"].createElement(React__default["default"].Fragment, null),
                    telegramDescription && tweeterDescription && (React__default["default"].createElement(ActionContainer, null,
                        React__default["default"].createElement(ToastAction, { telegramDescription: telegramDescription, tweeterDescription: tweeterDescription, title: title, url: url, thx: "https://bscscan.com/tx/" + hash }),
                        React__default["default"].createElement(Button, { p: "0", scale: "sm", variant: 'text', as: 'a', href: 'https://docs.biswap.org/sharing-season', target: "_blank" },
                            React__default["default"].createElement(SharingText, null,
                                React__default["default"].createElement(Text, { fontSize: '10px', pl: '0', fontWeight: '400', lineHeight: '12px', color: '#6b7d98' }, "*Check"),
                                React__default["default"].createElement(Text, { fontSize: '10px', pl: '0', fontWeight: '400', lineHeight: '12px', color: "#1263F1", ml: "2px" }, "Sharing Season"),
                                React__default["default"].createElement(Text, { fontSize: '10px', pl: '0', fontWeight: '400', lineHeight: '12px', color: '#6b7d98', ml: "2px" }, "details")))))),
                React__default["default"].createElement("div", { style: { width: '100%' } },
                    React__default["default"].createElement(ProgressWrapper, { style: { width: '100%' } }, progress ? React__default["default"].createElement(ProgressLine, { style: { width: 100 - progress + "%" } }) : null))))));
};
var templateObject_1$6, templateObject_2$4, templateObject_3$1, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;

var ZINDEX = 1000;
var BOTTOM_POSITION = 35; // Initial position from the bottom
var StyledToastContainer = styled__default["default"].div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var clearAll = _a.clearAll, toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 10000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 8 : _c;
    var _d = React.useState(100), progress = _d[0], setProgress = _d[1];
    var _e = React.useState(true), progressRun = _e[0], setProgressRun = _e[1];
    var _f = React.useState(ttl), currentTime = _f[0], setCurrentTime = _f[1];
    // for update timer for new toast
    var updateTimerRef = React.useRef(1);
    var timer = React.useRef();
    var intervalRef = React.useRef();
    var removeHandler = React.useRef(onRemove);
    var resetAll = function () {
        setProgress(100);
        setCurrentTime(ttl);
        // clearTimeout(intervalRef.current)
        // clearTimeout(timer.current);
    };
    React.useEffect(function () {
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
    var handleRemove = React.useCallback(function () {
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
    React.useEffect(function () {
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
    return (React__default["default"].createElement(StyledToastContainer, null,
        React__default["default"].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var bottom = BOTTOM_POSITION + index * stackSpacing;
            var removeButtonPosition = stackSpacing * toasts.length + 40;
            if (index === 0)
                return React__default["default"].createElement(Toast, { handleRemove: handleRemove, handleMouseEnter: handleMouseEnter, handleMouseLeave: handleMouseLeave, progress: progress, key: toast.id, toast: toast, zIndex: zIndex, ttl: ttl, removeButtonPosition: removeButtonPosition, clearAll: toasts.length > 1 ? clearAllHandler : undefined, style: { bottom: bottom + "px", zIndex: zIndex } });
            return (React__default["default"].createElement(Toast, { key: toast.id, toast: toast, style: { bottom: bottom + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$5;

var Icon$6 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default["default"].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default["default"].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default["default"].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default["default"].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default["default"].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default["default"].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default["default"].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default["default"].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default["default"].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default["default"].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default["default"].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default["default"].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default["default"].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default["default"].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default["default"].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default["default"].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default["default"].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default["default"].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default["default"].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default["default"].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default["default"].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default["default"].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$5 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$4 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0)" },
            React__default["default"].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React__default["default"].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "clip0" },
                React__default["default"].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$3 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default["default"].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$2 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default["default"].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React__default["default"].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var Icon$1 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "#F5F5F5" }),
        React__default["default"].createElement("path", { d: "M56.5504425,41.9387033 L56.5504425,50.4659601 L47.3948342,50.4659601 L47.3948342,85.5971142 L45.0078131,84.7075452 C43.8992633,84.2955753 42.1136272,83.5937969 39.9052997,82.5918134 L38.8675775,82.1177881 L38.8675775,14.6817622 L47.9569067,11.8769231 L56.5504425,14.5267861 L56.5504425,23.7259307 L47.9569067,21.0669705 L47.3948342,21.2411155 L47.3948342,41.9387033 L56.5504425,41.9387033 Z M16,50.4659926 L16,21.7739797 L36.1702794,15.548296 L36.1702794,24.7052039 L24.526282,28.3200122 L24.526282,41.9387358 L36.1702794,41.9387358 L36.1702794,81.3806284 L33.591244,80.0543973 C25.5662786,75.923652 16,68.9585019 16,59.2339983 L16,54.6496962 L24.526282,54.6496962 L24.526282,59.2339983 C24.526282,61.2460878 25.5734263,63.3605199 27.6426978,65.5373324 L27.6426978,50.4659926 L16,50.4659926 Z M59.1389325,15.3302574 L79.8040306,21.7261873 L79.8040306,50.4659601 L67.6710627,50.4659601 L67.6710627,62.9111544 C67.6710627,62.9111544 64.9581695,66.4674811 59.1464051,69.4451657 C59.1464051,67.0682164 59.1389325,15.3302574 59.1389325,15.3302574 Z M71.2780734,41.9387033 L71.2780734,28.2783928 L67.6710627,27.1649695 L67.6710627,41.9387033 L71.2780734,41.9387033 Z M71.2780734,59.8661186 L71.2780734,54.6495662 L79.8040306,54.6495662 L79.8040306,59.8661186 C79.8040306,74.3588162 58.7760221,82.7005566 52.330058,84.9127828 L49.9859233,85.7230769 L49.9859233,76.7068496 L51.1311866,76.2744112 C61.1591444,72.5004032 71.2780734,65.962818 71.2780734,59.8661186 Z", fill: "#000000" })));
};

var Icon = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.13298 26.6579C3.13253 26.6921 3.1323 26.7263 3.1323 26.7606C3.1323 30.9564 6.53367 34.3577 10.7295 34.3577C14.9253 34.3577 18.3266 30.9564 18.3266 26.7606C18.3266 26.7263 18.3264 26.6921 18.326 26.6579H14.732C14.7329 26.692 14.7333 26.7262 14.7333 26.7606C14.7333 28.9719 12.9407 30.7645 10.7294 30.7645C8.51812 30.7645 6.7255 28.9719 6.7255 26.7606C6.7255 26.7262 6.72593 26.692 6.72679 26.6579H3.13298ZM10.7295 5.71436C15.6624 5.71436 19.6613 9.71326 19.6613 14.6462C19.6613 19.5791 15.6624 23.578 10.7295 23.578C5.79663 23.578 1.79773 19.5791 1.79773 14.6462C1.79773 9.71326 5.79663 5.71436 10.7295 5.71436ZM10.7295 9.3076C13.6779 9.3076 16.0681 11.6977 16.0681 14.6461C16.0681 17.5945 13.6779 19.9847 10.7295 19.9847C7.78111 19.9847 5.39096 17.5945 5.39096 14.6461C5.39096 11.6977 7.78111 9.3076 10.7295 9.3076ZM11.3454 12.9033C12.0632 13.157 12.5775 13.8415 12.5775 14.6462C12.5775 15.6668 11.7501 16.4941 10.7295 16.4941C9.70893 16.4941 8.88157 15.6668 8.88157 14.6462C8.88157 13.8416 9.39577 13.1571 10.1135 12.9034V11.6689H11.3454V12.9033ZM22.7464 16.9552C22.154 15.8735 21.8172 14.6318 21.8172 13.3115C21.8172 9.11573 25.2186 5.71436 29.4144 5.71436C33.6102 5.71436 37.0115 9.11573 37.0115 13.3115C37.0115 14.6319 36.6747 15.8735 36.0823 16.9553C35.1444 16.216 34.0807 15.6291 32.9286 15.232C33.2408 14.6618 33.4183 14.0074 33.4183 13.3115C33.4183 11.1002 31.6257 9.30761 29.4144 9.30761C27.2031 9.30761 25.4105 11.1002 25.4105 13.3115C25.4105 14.0074 25.588 14.6618 25.9002 15.2319C24.7481 15.629 23.6844 16.2159 22.7464 16.9552ZM29.4144 34.3577C34.3473 34.3577 38.3462 30.3588 38.3462 25.4259C38.3462 20.493 34.3473 16.4941 29.4144 16.4941C24.4815 16.4941 20.4826 20.493 20.4826 25.4259C20.4826 30.3588 24.4815 34.3577 29.4144 34.3577ZM29.4144 30.7645C32.3628 30.7645 34.7529 28.3743 34.7529 25.4259C34.7529 22.4775 32.3628 20.0874 29.4144 20.0874C26.466 20.0874 24.0758 22.4775 24.0758 25.4259C24.0758 28.3743 26.466 30.7645 29.4144 30.7645ZM30.0303 27.1688C30.7481 26.9151 31.2624 26.2306 31.2624 25.4259C31.2624 24.4053 30.435 23.578 29.4144 23.578C28.3938 23.578 27.5665 24.4053 27.5665 25.4259C27.5665 26.2305 28.0807 26.915 28.7984 27.1687V28.4032H30.0303V27.1688Z", fill: "#DEAE30" })));
};

exports.ConnectorNames = void 0;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(exports.ConnectorNames || (exports.ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$6,
        connectorId: exports.ConnectorNames.Injected,
        priority: 1,
    },
    {
        title: "TrustWallet",
        icon: Icon$4,
        connectorId: exports.ConnectorNames.Injected,
        priority: 2,
    },
    {
        title: "MathWallet",
        icon: Icon$5,
        connectorId: exports.ConnectorNames.Injected,
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
        connectorId: exports.ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "WalletConnect",
        icon: Icon$3,
        connectorId: exports.ConnectorNames.WalletConnect,
        priority: 3,
    },
    {
        title: "Binance Chain",
        icon: Icon$2,
        connectorId: exports.ConnectorNames.BSC,
        priority: 999,
    },
    {
        title: "SafePal Wallet",
        icon: Icon$1,
        connectorId: exports.ConnectorNames.Injected,
        priority: 999,
    },
];
var connectorLocalStorageKey = "connectorId";
var walletLocalStorageKey = "wallet";

var StyledButton = styled__default["default"](Button)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex; \n  flex-direction: column;\n  justify-content: space-around;\n  padding: 8px 0 0;\n  white-space: nowrap;\n  min-height: 91px;\n"], ["\n  display: flex; \n  flex-direction: column;\n  justify-content: space-around;\n  padding: 8px 0 0;\n  white-space: nowrap;\n  min-height: 91px;\n"])));
var StyledText = styled__default["default"](Text)(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  font-weight: bold;\n  color: ", ";\n"], ["\n  font-weight: bold;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default["default"].createElement(StyledButton, { variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            localStorage.setItem(walletLocalStorageKey, walletConfig.title);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default["default"].createElement(Icon, { width: "32px" }),
        React__default["default"].createElement(StyledText, null, title)));
};
var templateObject_1$4, templateObject_2$3;

var HelpLink = styled__default["default"](Link)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var Wrapper = styled__default["default"].div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n"], ["\n"])));
var WalletCardsWrapper = styled__default["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: grid;\n  grid-gap: 16px;\n  width: 100%;\n  grid-template-columns: repeat(2, 1fr);\n"], ["\n  display: grid;\n  grid-gap: 16px;\n  width: 100%;\n  grid-template-columns: repeat(2, 1fr);\n"])));
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
    return (React__default["default"].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        React__default["default"].createElement(Wrapper, null,
            React__default["default"].createElement(WalletCardsWrapper, null, sortedConfig.map(function (entry) { return (React__default["default"].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss })); })),
            React__default["default"].createElement(HelpLink, { href: "https://docs.biswap.org/faq/biswap-platform#how-do-i-connect-my-wallet-to-biswap", external: true },
                React__default["default"].createElement(Icon$11, { color: "primary", mr: "6px" }),
                "Learn how to connect"))));
};
var templateObject_1$3, templateObject_2$2, templateObject_3;

var StyleButton = styled__default["default"](Text).attrs({ role: "button" })(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default["default"].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default["default"].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default["default"].createElement(Icon$12, { width: "20px", color: "primary", ml: "4px" }),
        React__default["default"].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$2, templateObject_2$1;

var ConnectedWrapper = styled__default["default"].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
var TransactionWrapper = styled__default["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-radius: 16px;\n  padding: 24px;\n  background-color: #F2F6FC;\n"], ["\n  border-radius: 16px;\n  padding: 24px;\n  background-color: #F2F6FC;\n"])));
var AccountModal = function (_a) {
    var transactionsForUIKit = _a.transactionsForUIKit, isSwap = _a.isSwap, account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b, login = _a.login, recentTransaction = _a.recentTransaction, chainId = _a.chainId, clearTransaction = _a.clearTransaction;
    var onPresentConnectModal = useWalletModal(login, logout, account, recentTransaction, chainId).onPresentConnectModal;
    var changeWalletHandler = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onDismiss()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, logout()];
                case 2:
                    _a.sent();
                    onPresentConnectModal();
                    return [2 /*return*/];
            }
        });
    }); };
    var ClearAndDismiss = function () {
        clearTransaction();
        onDismiss();
    };
    return (React__default["default"].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default["default"].createElement(ConnectedWrapper, null,
            React__default["default"].createElement(Text, { fontSize: '14px', fontWeight: '400', lineHeight: '21px', color: '#1DC872' }, "Connected"),
            React__default["default"].createElement(Button, { onClick: changeWalletHandler, scale: 'sm', variant: 'primary' }, "Change")),
        React__default["default"].createElement(Text, { fontSize: "14px", fontWeight: '600', color: '#07162D', style: {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginBottom: "8px",
                marginTop: '16px'
            } }, account),
        React__default["default"].createElement(Flex, { mb: "32px" },
            React__default["default"].createElement(CopyToClipboard, { toCopy: account }, "Copy Address"),
            React__default["default"].createElement(LinkExternal, { ml: '26px', small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan")),
        isSwap && (React__default["default"].createElement(TransactionWrapper, null,
            React__default["default"].createElement(Flex, { justifyContent: 'space-between', alignItems: 'center' },
                React__default["default"].createElement(Text, { fontSize: '14px', fontWeight: '600', lineHeight: '21px', color: '#07162D' }, "Recent transactions"),
                React__default["default"].createElement(Button, { m: 0, p: 0, scale: 'sm', variant: 'text', onClick: ClearAndDismiss }, "Clear All")),
            React__default["default"].createElement(React__default["default"].Fragment, null, transactionsForUIKit()))),
        React__default["default"].createElement(Flex, null,
            React__default["default"].createElement(Button, { style: { width: '100%' }, mt: '24px', variant: "secondary", onClick: function () {
                    logout();
                    onDismiss();
                } }, "Logout"))));
};
var templateObject_1$1, templateObject_2;

var useWalletModal = function (login, logout, account, recentTransaction, chainId, clearTransaction, isSwap, transactionsForUIKit) {
    var onPresentConnectModal = useModal(React__default["default"].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default["default"].createElement(AccountModal, { transactionsForUIKit: transactionsForUIKit, isSwap: isSwap, login: login, recentTransaction: recentTransaction, chainId: chainId, account: account || "", logout: logout, clearTransaction: clearTransaction }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var ResetCSS = styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'CodecPro', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: rgba(116, 155, 216, 0.32);\n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    border-radius: 10px;\n    background: ", ";\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'CodecPro', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: rgba(116, 155, 216, 0.32);\n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    border-radius: 10px;\n    background: ", ";\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
var templateObject_1;

exports.AddIcon = Icon$1o;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$1n;
exports.ArrowDownIcon = Icon$1m;
exports.ArrowDropDownIcon = Icon$1l;
exports.ArrowDropUpIcon = Icon$1k;
exports.ArrowForwardIcon = Icon$1j;
exports.ArrowUpIcon = Icon$1i;
exports.AutoCompaundIcon = Icon$s;
exports.AutoRenewIcon = Icon$1h;
exports.BSCIcon = Icon$q;
exports.BackgroundImage = BackgroundImage;
exports.Badge = Badge;
exports.Banner = Banner;
exports.BannerBody = BannerBody;
exports.BannerTitle = BannerTitle;
exports.BaseLayout = GridLayout$1;
exports.BellIcon = Icon$1e;
exports.BinanceIcon = Icon$1g;
exports.BlockIcon = Icon$1q;
exports.Box = Box;
exports.Breadcrumbs = Breadcrumbs;
exports.BunnyPlaceholderIcon = Icon$1f;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$1c;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$1d;
exports.CardsLayout = GridLayout;
exports.Checkbox = Checkbox;
exports.CheckedIcon = Icon$k;
exports.CheckmarkCircleIcon = Icon$1s;
exports.CheckmarkIcon = Icon$1b;
exports.ChevronDownIcon = Icon$1a;
exports.ChevronLeftIcon = Icon$19;
exports.ChevronRightEndIcon = Icon$17;
exports.ChevronRightIcon = Icon$18;
exports.ChevronUpIcon = Icon$16;
exports.CloseIcon = Icon$15;
exports.CogIcon = Icon$14;
exports.CommunityIcon = Icon$13;
exports.CopyIcon = Icon$12;
exports.CupIcon = Icon$t;
exports.DownloadIcon = Icon$D;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1r;
exports.FallingBunnies = FallingBunnies;
exports.FavoriteEmptyIcon = Icon$g;
exports.FavoriteFullIcon = Icon$h;
exports.FilterIcon = Icon$a;
exports.FireIcon = Icon$p;
exports.FlagIcon = Icon$y;
exports.Flex = Flex;
exports.GasIcon = Icon$n;
exports.HammerIcon = Icon$i;
exports.Heading = Heading;
exports.HelpIcon = Icon$11;
exports.HourglassIcon = Icon$o;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$1p;
exports.Input = Input$1;
exports.LevelIcon = Icon$d;
exports.LightningIcon = Icon$j;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.LinkIcon = Icon$C;
exports.ListViewIcon = Icon$10;
exports.LoaderIcon = Icon$Z;
exports.LogoIcon = Icon$$;
exports.LogoRoundIcon = Icon$_;
exports.MarketBagIcon = Icon$b;
exports.MetamaskIcon = Icon$Y;
exports.MinusIcon = Icon$X;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.ModalWithBackground = ModalWithBackground;
exports.MouseIcon = Icon$v;
exports.NoProfileAvatarIcon = Icon$W;
exports.NotificationDot = NotificationDot;
exports.OpenNewIcon = Icon$V;
exports.PancakeRoundIcon = Icon$T;
exports.PancakesIcon = Icon$U;
exports.PlayCircleOutlineIcon = Icon$S;
exports.PolygonIcon = Icon$r;
exports.PrizeIcon = Icon$R;
exports.Progress = Progress;
exports.ProgressBunny = Icon$O;
exports.Radio = Radio;
exports.RatingIcon = Icon$u;
exports.RemoveIcon = Icon$Q;
exports.ResetCSS = ResetCSS;
exports.RobiBoostIcon = Icon$c;
exports.RocketIcon = Icon$z;
exports.SearchIcon = Icon$H;
exports.ShareIcon = Icon$f;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.Spinner = Spinner;
exports.StarIcon = Icon$l;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$G;
exports.SyncAltIcon = Icon$F;
exports.Tag = Tag;
exports.TelegramIcon = Icon$B;
exports.Text = Text;
exports.ThreeDotsIcon = Icon$K;
exports.Ticket = Icon$L;
exports.TicketRound = Icon$J;
exports.TimerIcon = Icon$I;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.TradeIcon = Icon$m;
exports.TwitterIcon = Icon$A;
exports.VerifiedIcon = Icon$P;
exports.ViewIcon = Icon$e;
exports.WaitIcon = Icon$N;
exports.WaitReloadIcon = Icon$w;
exports.WalletIcon = Icon$x;
exports.WarningIcon = Icon$E;
exports.Won = Icon$M;
exports.alertVariants = variants$2;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.connectorLocalStorageKey = connectorLocalStorageKey;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.toastTypes = types;
exports.useKonamiCheatCode = useKonamiCheatCode;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useTooltip = useTooltip;
exports.useWalletModal = useWalletModal;
