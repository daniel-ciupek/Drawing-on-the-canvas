export default class Panel {
  constructor() {
    console.log("DrawingPanel initialized");
  }
};

class DrawingPanel {
constructor() {
    this.picker = document.querySelector(".color-picker");
    this.widthRange = document.querySelector(".line-range");
    this.widthLabel = document.querySelector(".range-value");

}
}

const drawingPanel = new DrawingPanel();