import images from "./assets/*.png" 

class Asset {
  constructor(path) {
    this.path = path;
    this.key = path;
  }
}


export default class Assets {
  porco = new Asset(images.porco);
  marco = new Asset(images.marco);
  bullet = new Asset(images.bullet);
} 