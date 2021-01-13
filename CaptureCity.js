"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaptureCity = void 0;
const CityRegistry_1 = require("@civ-clone/core-city/CityRegistry");
const Move_1 = require("@civ-clone/base-unit-action-move/Move");
class CaptureCity extends Move_1.default {
    perform(cityRegistry = CityRegistry_1.instance) {
        if (super.perform()) {
            cityRegistry
                .getByTile(this.to())
                .forEach((city) => city.capture(this.unit().player()));
            return true;
        }
        return false;
    }
}
exports.CaptureCity = CaptureCity;
exports.default = CaptureCity;
//# sourceMappingURL=CaptureCity.js.map