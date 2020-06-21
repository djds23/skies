export default class BootState extends Phaser.State {
  preload () {
    console.log("booting...")
  }

  create () {
    console.log("entering load...")
    this.state.start('load');
  }
}
