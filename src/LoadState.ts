import Assets from "./Assets.js";

export default class LoadState extends Phaser.State {
  preload () {
    const assets = new Assets();
    this.load.image(assets.porco.key, assets.porco.path);
    this.load.image(assets.marco.key, assets.marco.path);
    this.load.image(assets.bullet.key, assets.bullet.path);
  }

  loadUpdate () {
    console.debug('progress', this.load.progress);
  }

  loadRender () {
    this.game.debug.loader(this.load, 20, 20);
  }

  create () {
    this.state.start('menu');
  }
}
