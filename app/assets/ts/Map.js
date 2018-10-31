"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var L = require("leaflet");
var Map = /** @class */ (function () {
    function Map() {
        this.cleanIcons();
    }
    Map.prototype.cleanIcons = function () {
        delete L.Icon.Default.prototype._getIconUrl;
    };
    return Map;
}());
exports.Map = Map;
