var Letter = require('./letter.js');

function Word(arr) {
  this.arr = arr;
  this.wordOne = [];
  this.createWord = function () {
    for (var i = 0; i < arr.length; i++) {
      var word = new Letter(arr[i]);
      this.wordOne.push(word);
    }
  }
  this.displayWord = function () {
    var display = [];

    for (var i = 0; i < this.wordOne.length; i++) {
      display.push(this.wordOne[i].display());
    }

    return display.join(" ");

  }
  this.guessCheck = function (guesses) {
    for (var i = 0; i < this.wordOne.length; i++) {
      this.wordOne[i].check(guesses);
    }
  }
}



module.exports = Word;
