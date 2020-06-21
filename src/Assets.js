import images from "./assets/*.png" 

class Asset {
  constructor(path) {
    this.path = path;
    this.key = path;
  }
}


export default class Assets {
  plane = new Asset(images.plane);
} 