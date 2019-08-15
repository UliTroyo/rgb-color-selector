'use strict';

const ColorSelector = function() {
  this.redSlider = document.querySelector('[name=red]');
  this.greenSlider = document.querySelector('[name=green]');
  this.blueSlider = document.querySelector('[name=blue]');

  this.output = document.querySelector('.rgb-color');
  this.thumbStyle = document.querySelector('[data=thumb-style]');

  this.red = 1 * this.redSlider.value;
  this.green = 1 * this.greenSlider.value;
  this.blue = 1 * this.blueSlider.value;

  this.redBg = document.querySelector('#red>.sliders__bg');
  this.greenBg = document.querySelector('#green>.sliders__bg');
  this.blueBg = document.querySelector('#blue>.sliders__bg');

  this.redOut = document.querySelector('#red>span');
  this.greenOut = document.querySelector('#green>span');
  this.blueOut = document.querySelector('#blue>span');
};

ColorSelector.prototype.init = function() {
  this.redSlider.oninput = this.handleRed.bind(this);
  this.greenSlider.oninput = this.handleGreen.bind(this);
  this.blueSlider.oninput = this.handleBlue.bind(this);

  this.updateRed();
  this.updateGreen();
  this.updateBlue();

  this.redOut.textContent = ('0' + this.red.toString(16).toUpperCase()).slice(
    -2
  );
  this.greenOut.textContent = (
    '0' + this.green.toString(16).toUpperCase()
  ).slice(-2);
  this.blueOut.textContent = ('0' + this.blue.toString(16).toUpperCase()).slice(
    -2
  );

  this.updateThumbs();
  this.updateScreen();
};

ColorSelector.prototype.updateScreen = function() {
  this.output.style.background = `rgb(${this.red},${this.green},${this.blue})`;
};

ColorSelector.prototype.updateRed = function() {
  const green = this.green;
  const blue = this.blue;
  this.redBg.style.background = `linear-gradient(to right, rgb(0,${green},${blue}), rgb(255,${green},${blue}))`;
};

ColorSelector.prototype.updateGreen = function() {
  const red = this.red;
  const blue = this.blue;
  this.greenBg.style.background = `linear-gradient(to right, rgb(${red},0,${blue}), rgb(${red},255,${blue}))`;
};

ColorSelector.prototype.updateBlue = function() {
  const red = this.red;
  const green = this.green;
  this.blueBg.style.background = `linear-gradient(to right, rgb(${red},${green},0), rgb(${red},${green},255))`;
};

ColorSelector.prototype.updateThumbs = function() {
  const red = this.red;
  const green = this.green;
  const blue = this.blue;
  const rgb = `-thumb{background: rgb(${red},${green},${blue});}`;
  this.thumbStyle.innerHTML =
    '[name=red]::-webkit-slider' +
    rgb +
    '[name=red]::-moz-range' +
    rgb +
    '[name=red]::-ms' +
    rgb +
    '[name=green]::-webkit-slider' +
    rgb +
    '[name=green]::-moz-range' +
    rgb +
    '[name=green]::-ms' +
    rgb +
    '[name=blue]::-webkit-slider' +
    rgb +
    '[name=blue]::-moz-range' +
    rgb +
    '[name=blue]::-ms' +
    rgb;
};

ColorSelector.prototype.handleRed = function(e) {
  this.red = 1 * e.target.value;
  this.redOut.textContent = ('0' + this.red.toString(16).toUpperCase()).slice(
    -2
  );
  this.updateThumbs();
  this.updateGreen();
  this.updateBlue();
  this.updateScreen();
};

ColorSelector.prototype.handleGreen = function(e) {
  this.green = 1 * e.target.value;
  this.greenOut.textContent = (
    '0' + this.green.toString(16).toUpperCase()
  ).slice(-2);
  this.updateThumbs();
  this.updateRed();
  this.updateBlue();
  this.updateScreen();
};

ColorSelector.prototype.handleBlue = function(e) {
  this.blue = 1 * e.target.value;
  this.blueOut.textContent = ('0' + this.blue.toString(16).toUpperCase()).slice(
    -2
  );
  this.updateThumbs();
  this.updateRed();
  this.updateGreen();
  this.updateScreen();
};

const colorSelector = new ColorSelector(
  document.querySelector('main.container')
);
colorSelector.init();
