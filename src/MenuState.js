"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var MenuState = /** @class */ (function (_super) {
    __extends(MenuState, _super);
    function MenuState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuState.prototype.create = function () {
        var _this = this;
        var _a = this.world, centerX = _a.centerX, centerY = _a.centerY;
        var stage = this.stage;
        stage.setBackgroundColor("#87CEEB");
        this.add.text(centerX, centerY, 'Phaser CE with Parcel\n\n< play >', {
            align: 'center',
            fill: 'white',
            fontSize: 48
        });
        this.input.onUp.addOnce(function () { _this.state.start('play'); });
    };
    return MenuState;
}(Phaser.State));
exports["default"] = MenuState;
