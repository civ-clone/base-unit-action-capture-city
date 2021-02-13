"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _city;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptureCity = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Move_1 = require("@civ-clone/base-unit-action-move/Move");
class CaptureCity extends Move_1.default {
    constructor(from, to, unit, city, ruleRegistry = RuleRegistry_1.instance) {
        super(from, to, unit, ruleRegistry);
        _city.set(this, void 0);
        __classPrivateFieldSet(this, _city, city);
    }
    perform() {
        if (super.perform()) {
            __classPrivateFieldGet(this, _city).capture(this.unit().player());
            return true;
        }
        return false;
    }
}
exports.CaptureCity = CaptureCity;
_city = new WeakMap();
exports.default = CaptureCity;
//# sourceMappingURL=CaptureCity.js.map