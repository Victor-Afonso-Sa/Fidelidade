"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Tooltip = exports.Button = exports.DivWithScroll = exports.Row = exports.CoinValue = exports.Title = exports.SubTitle = exports.Backdrop = exports.CirclePrimaryBtnOutline = exports.DisabledBtn = exports.SuccessBtnOutline = exports.SecondaryBtnOutline = exports.PrimaryBtnOutline = exports.SuccessBtn = exports.SecondaryBtn = exports.PrimaryBtn = exports.GlobalStyle = void 0;
var styled_components_1 = require("styled-components");
var styled_components_2 = require("styled-components");
exports.GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n}\n\nbody {\n    background-color: #fff;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    /* display: flex;\n    justify-content: center;\n    align-items: center; */\n    /* overflow: hidden; */\n    min-height: 100vh;\n  }\n\n  code {\n    font-family: 'Roboto', sans-serif;\n  }\n  "], ["\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n}\n\nbody {\n    background-color: #fff;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    /* display: flex;\n    justify-content: center;\n    align-items: center; */\n    /* overflow: hidden; */\n    min-height: 100vh;\n  }\n\n  code {\n    font-family: 'Roboto', sans-serif;\n  }\n  "])));
exports.PrimaryBtn = styled_components_2["default"].button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  color: #fff;\n  padding: 0.5em 0.7em;\n  font-weight: 600;\n  border-radius: 4px;\n  border: 0;\n"], ["\n  background-color: ", ";\n  color: #fff;\n  padding: 0.5em 0.7em;\n  font-weight: 600;\n  border-radius: 4px;\n  border: 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary;
});
exports.SecondaryBtn = styled_components_2["default"].button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  color: #fff;\n  padding: 0.5em 0.7em;\n  font-weight: 600;\n  border-radius: 4px;\n  border: 0;\n"], ["\n  background-color: ", ";\n  color: #fff;\n  padding: 0.5em 0.7em;\n  font-weight: 600;\n  border-radius: 4px;\n  border: 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.secondary;
});
exports.SuccessBtn = styled_components_2["default"].button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  color: #fff;\n  padding: 0.5em 0.7em;\n  font-weight: 600;\n  border-radius: 4px;\n  border: 0;\n"], ["\n  background-color: ", ";\n  color: #fff;\n  padding: 0.5em 0.7em;\n  font-weight: 600;\n  border-radius: 4px;\n  border: 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.success;
});
exports.PrimaryBtnOutline = styled_components_2["default"].button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: #fff;\n  color: ", ";\n  padding: 0.5em 0.7em;\n  font-weight: 600;\n  border-radius: 4px;\n  border: 2px solid ", ";\n"], ["\n  background-color: #fff;\n  color: ", ";\n  padding: 0.5em 0.7em;\n  font-weight: 600;\n  border-radius: 4px;\n  border: 2px solid ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary;
});
exports.SecondaryBtnOutline = styled_components_2["default"].button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  padding: 0.5em 0.5em;\n  font-weight: 600;\n  border-radius: 4px;\n  border: 2px solid ", ";\n"], ["\n  background-color: transparent;\n  color: ", ";\n  padding: 0.5em 0.5em;\n  font-weight: 600;\n  border-radius: 4px;\n  border: 2px solid ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.secondary;
}, function (_a) {
    var theme = _a.theme;
    return theme.secondary;
});
exports.SuccessBtnOutline = styled_components_2["default"].button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  padding: 0.5em 0.5em;\n  font-weight: 600;\n  border-radius: 4px;\n  border: 2px solid ", ";\n"], ["\n  background-color: transparent;\n  color: ", ";\n  padding: 0.5em 0.5em;\n  font-weight: 600;\n  border-radius: 4px;\n  border: 2px solid ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.success;
});
exports.DisabledBtn = styled_components_2["default"].button(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  padding: 0.5em 0.5em;\n  font-weight: 600;\n  border-radius: 4px;\n  border: 0;\n  margin-left: 8px !important;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  padding: 0.5em 0.5em;\n  font-weight: 600;\n  border-radius: 4px;\n  border: 0;\n  margin-left: 8px !important;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.gray;
});
exports.CirclePrimaryBtnOutline = styled_components_2["default"].button(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  background-color: #fff;\n  color: ", ";\n  padding: 0.5em;\n  font-weight: 600;\n  border: 2px solid ", ";\n  border-radius: 50%;\n"], ["\n  background-color: #fff;\n  color: ", ";\n  padding: 0.5em;\n  font-weight: 600;\n  border: 2px solid ", ";\n  border-radius: 50%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary;
});
exports.Backdrop = styled_components_2["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  height: 100%;\n"])));
exports.SubTitle = styled_components_2["default"].h6(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  font-weight: bold;\n  color: ", ";\n"], ["\n  font-weight: bold;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary;
});
exports.Title = styled_components_2["default"].h2(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  font-weight: bold;\n  color: ", ";\n"], ["\n  font-weight: bold;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary;
});
exports.CoinValue = styled_components_2["default"].span(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  font-size: 32px;\n  color: #fff;\n  font-weight: 1000;\n  line-height: 56px;\n  text-align: center;\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  font-variant: small-caps;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: ", ";\n"], ["\n  font-size: 32px;\n  color: #fff;\n  font-weight: 1000;\n  line-height: 56px;\n  text-align: center;\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  font-variant: small-caps;\n  -webkit-text-stroke-width: 2px;\n  -webkit-text-stroke-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary;
});
exports.Row = styled_components_2["default"].div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
exports.DivWithScroll = function (name) {
    return styled_components_2["default"].div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    @media (max-width: 720px) {\n      & {\n        width: 100%;\n      }\n      ", "::-webkit-scrollbar {\n        display: none;\n      }\n    }\n    ", "::-webkit-scrollbar {\n      width: 10px;\n    }\n\n    ", "::-webkit-scrollbar-track {\n      background: ", ";\n      border-radius: 10px;\n      padding: 1px;\n    }\n\n    ", "::-webkit-scrollbar-thumb {\n      background: ", ";\n      border-radius: 10px;\n    }\n  "], ["\n    @media (max-width: 720px) {\n      & {\n        width: 100%;\n      }\n      ", "::-webkit-scrollbar {\n        display: none;\n      }\n    }\n    ", "::-webkit-scrollbar {\n      width: 10px;\n    }\n\n    ", "::-webkit-scrollbar-track {\n      background: ", ";\n      border-radius: 10px;\n      padding: 1px;\n    }\n\n    ", "::-webkit-scrollbar-thumb {\n      background: ", ";\n      border-radius: 10px;\n    }\n  "])), name, name, name, function (_a) {
        var theme = _a.theme;
        return theme.background;
    }, name, function (_a) {
        var theme = _a.theme;
        return theme.primary;
    });
};
exports.Button = styled_components_2["default"].button(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  padding: 0.5em 0.7em;\n  border-radius: 4px;\n  border: 2px solid ", ";\n"], ["\n  background-color: ",
    ";\n  color: ", ";\n  padding: 0.5em 0.7em;\n  border-radius: 4px;\n  border: 2px solid ", ";\n"])), function (_a) {
    var styled = _a.styled, outline = _a.outline, theme = _a.theme;
    return outline ? "white" : theme[styled];
}, function (_a) {
    var styled = _a.styled, outline = _a.outline, theme = _a.theme;
    return (outline ? theme[styled] : "white");
}, function (_a) {
    var styled = _a.styled, outline = _a.outline, theme = _a.theme;
    return theme[styled];
});
exports.Tooltip = function (component) { return "\n  " + component + "::before{\n    content: attr(data-tooltip);\n    position: absolute;\n    top: 100%;\n    width: max-content;\n    max-width: 250px;\n    margin-top 8px;\n    padding: 6px;\n    background: #0d1117;\n    border-radius: 5px;\n    color: #cccfd3;\n    opacity: 0;\n    display: none;\n  }\n   " + component + ":hover::before{\n    top: 100;\n    opacity: 1;\n    display: inline;\n  }\n"; };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
