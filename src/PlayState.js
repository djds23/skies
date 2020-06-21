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
var Assets_js_1 = require("./Assets.js");
var _a = Phaser.KeyCode, Q = _a.Q, R = _a.R, LEFT = _a.LEFT, RIGHT = _a.RIGHT, UP = _a.UP, DOWN = _a.DOWN;
var plane;
var assets = new Assets_js_1["default"]();
var cursors;
var bullets;
var fireRate = 100;
var bulletSpeed = 400;
var nextFire = 0;
var PlayState = /** @class */ (function (_super) {
    __extends(PlayState, _super);
    function PlayState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayState.prototype.create = function () {
        var _this = this;
        var _a = this, add = _a.add, input = _a.input;
        var keyboard = input.keyboard;
        var arcade = this.physics.arcade;
        var _b = this.world, centerX = _b.centerX, centerY = _b.centerY;
        bullets = add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(50, assets.bullet.key);
        bullets.setAll('checkWorldBounds', true);
        bullets.setAll('outOfBoundsKill', true);
        plane = add.sprite(centerX, centerY, assets.plane.key);
        arcade.enable(plane);
        add.text(120, 20, '(R) Restart | (Q) Quit', { fill: 'white', font: '24px sans-serif' });
        plane.bringToTop();
        keyboard.addKey(Q).onDown.addOnce(function () { _this.state.start('menu'); });
        keyboard.addKey(R).onDown.addOnce(function () { _this.state.restart(); });
        cursors = keyboard.createCursorKeys();
    };
    PlayState.prototype.update = function () {
        var arcade = this.physics.arcade;
        var activePointer = this.input.activePointer;
        if (activePointer.isDown) {
            arcade.moveToPointer(plane, 200, activePointer);
        }
        else {
            this.fire();
        }
    };
    PlayState.prototype.fire = function () {
        if (this.time.now > nextFire && bullets.countDead() > 0) {
            nextFire = this.time.now + fireRate;
            var bullet = bullets.getFirstDead();
            bullet.reset(plane.x - 8, plane.y - 8);
            this.physics.arcade.moveToXY(bullet, plane.x, -100, bulletSpeed);
        }
    };
    return PlayState;
}(Phaser.State));
exports["default"] = PlayState;
