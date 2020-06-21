export default class MenuState extends Phaser.State {
  create () {
    const { centerX, centerY } = this.world;

    const title = this.add.text(centerX, centerY, 'Phaser CE with Parcel\n\n< play >', {
      align: 'center',
      fill: 'white',
      fontSize: 48
    });

    this.input.onUp.addOnce(() => { this.state.start('play'); });
  }
}
