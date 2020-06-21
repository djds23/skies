import Assets from "./Assets.js";

const { Q, R, LEFT, RIGHT, UP, DOWN } = Phaser.KeyCode;

let porco: Phaser.Sprite;
let marco: Phaser.Sprite
let assets = new Assets();
let cursors: Phaser.CursorKeys
let bullets: Phaser.Group
const fireRate = 100;
const bulletSpeed = 400;
let nextFire = 0;

export default class PlayState extends Phaser.State {
  create () {
    const { add, input } = this;
    const { keyboard } = input;
    const { arcade } = this.physics;

    const { centerX, centerY } = this.world;

    bullets = add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;

    bullets.createMultiple(50, assets.bullet.key);
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);
    
    porco = add.sprite(centerX, centerY, assets.porco.key);
    porco.scale.setTo(1.5, 1.5);
    arcade.enable(porco);

    marco = add.sprite(0, 0, assets.marco.key);
    marco.scale.setTo(1.5, 1.5);
    marco.rotation = Math.PI

    marco.checkWorldBounds = true;
    marco.outOfBoundsKill = true;

    add.text(120, 20, '(R) Restart | (Q) Quit', { fill: 'white', font: '24px sans-serif' });

    porco.bringToTop();

    keyboard.addKey(Q).onDown.addOnce(() => { this.state.start('menu'); });
    keyboard.addKey(R).onDown.addOnce(() => { this.state.restart(); });
    cursors = keyboard.createCursorKeys();
  }

  marcoStartingPosition(): number {
    return Phaser.Math.random(0, this.stage.width);
  }

  update() {
    const { arcade } = this.physics;
    const { activePointer } = this.input;
    if (activePointer.isDown) {
      arcade.moveToPointer(porco, 200, activePointer);
    } else {
      this.fire();
    }
  }

  fire() {
    if (this.time.now > nextFire && bullets.countDead() > 0) {
        nextFire = this.time.now + fireRate;
        let bullet = bullets.getFirstDead();
        bullet.reset(porco.x, porco.y - 16);
        this.physics.arcade.moveToXY(bullet, porco.x, -100, bulletSpeed);
    }
  }
}
