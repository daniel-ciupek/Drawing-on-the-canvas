export default class DrawingPanel {
  constructor() {
    this.picker = document.querySelector(".color-picker");
    this.widthRange = document.querySelector(".line-range");
    this.widthLabel = document.querySelector(".range-value");
  }

  addPanelListeners = (colorCallback, widthCallback) => {
    if (this.picker) {
      this.picker.addEventListener("change", (e) => {
        colorCallback(e.target.value);
      });
    }
    if (this.widthRange) {
      this.widthRange.addEventListener("input", (e) => {
        const width = e.target.value;
        if (this.widthLabel) this.widthLabel.innerHTML = ` ${width}px`;
        widthCallback(width);
      });
    }
  };
}
