"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const React = require("react");
require("./Button.css");
const Button = (_a) => {
    var { bg = 'primary', size = 'medium', backgroundColor, type = 'button', onClick = () => null, label } = _a, props = __rest(_a, ["bg", "size", "backgroundColor", "type", "onClick", "label"]);
    return (React.createElement("button", Object.assign({ type: type, className: ['btn', `btn-${size}`, bg].join(' '), style: { backgroundColor: backgroundColor }, onClick: onClick }, props), label));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map