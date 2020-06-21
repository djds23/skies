import Assets from "./Assets.js";

const { Q, R, LEFT, RIGHT, UP, DOWN } = Phaser.KeyCode;

let plane: Phaser.Sprite;
let assets = new Assets();
let cursors: Phaser.CursorKeys

export default class PlayState extends Phaser.State {
  create () {
    const { add, input } = this;
    const { keyboard } = input;
    const { arcade } = this.physics;
    const { stage } = this;
    
    const { centerX, centerY } = this.world;

    arcade.gravity.y = 300;
    stage.setBackgroundColor("#87CEEB");
    
    plane = add.sprite(centerX, centerY, assets.plane.key);
    arcade.enable(plane);
    plane.checkWorldBounds = true;
    plane.body.allowGravity = false;

    add.text(120, 20, '(R) Restart | (Q) Quit', { fill: 'white', font: '24px sans-serif' });

    plane.bringToTop();

    keyboard.addKey(Q).onDown.addOnce(() => { this.state.start('menu'); });
    keyboard.addKey(R).onDown.addOnce(() => { this.state.restart(); });
    cursors = keyboard.createCursorKeys();
  }

  update() {
    const { arcade } = this.physics;
    arcade.moveToPointer(plane, 200, this.input.activePointer);
  }
}
