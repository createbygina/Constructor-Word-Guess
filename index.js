var Word = require("./word.js");
var inquirer = require('inquirer');


wordOptions = [""];
var select = 0;
var wordChoice = "";
var genWord = "";
var count = 0;

function start() {
  if (wordOptions.length < 2) {
    wordOptions = ["THE SIMPSONS", "FAMILY GUY", "AMERICAN DAD", "RICK AND MORTY", "SOUTH PARK", "BIG MOUTH", "KING OF THE HILL", "BOBS BURGERS"];
  }
  select = Math.floor(Math.random() * wordOptions.length);
  wordChoice = wordOptions[select];
  genWord = new Word(wordChoice);
  genWord.createWord();
  if (select > -1) {
    wordOptions.splice(select, 1);
  }
  console.log("\nGuess Animated TV Shows!\n")
  promptUser();
}

function promptUser() {
  if (count < 8) {
    console.log(genWord.displayWord());
    inquirer.prompt([{
      type: "input",
      name: "letter",
      message: "\nEnter a letter. "
    }]).then(function (data) {
      checkAnswer(data);
    });
  } else {
    console.log("\nSorry, you didn't guess the word correctly.\n");
    console.log(wordChoice.rainbow);
    wordChoice = "";
    genWord = "";
    select = 0;
    count = 0;
    playAgain();
  }
}

function checkAnswer(data) {
  if ((data.letter.length === 1) && /^[a-zA-Z]+$/.test(data.letter)) {
    var checkable = data.letter.toUpperCase();
    var temp = genWord.displayWord();
    genWord.guessCheck(checkable);
    if (temp === genWord.displayWord()) {
      console.log("\nSorry, wrong letter!\n");
      count++;
      console.log(((8 - count) + " guesses remaining"));
      promptUser();
    } else {
      correctGuess();
    }
  } else {
    console.log("\nGuess one letter at a time.\n");
    promptUser();
  }
}

function correctGuess() {
  console.log("\nYou guessed correctly.\n");
  if (wordChoice.replace(/ /g, "") == (genWord.displayWord()).replace(/ /g, "")) {
    console.log('\nYay, you win!\n');
    wordChoice = "";
    genWord = "";
    select = 0;
    count = 0;
    playAgain();
  } else {
    // playAgain();
    promptUser();

  }
}

function playAgain() {
  inquirer.prompt([{
    type: "confirm",
    name: "playAgain",
    message: "Play again?"

  }]).then(function (response) {
    if (response.playAgain) {
      start();
    } else {
      console.log("Goodbye!")
    }
  })
}

start();
