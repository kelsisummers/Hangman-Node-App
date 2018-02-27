// Needed For User Prompts
var inquirer = require('inquirer');
// Needed To Choose Word And Create Arrays
var LetterMethod = require('./letter.js');

// Creates A New Instance Of LetterMethod 
let word = new LetterMethod();

// Variable To Track # Of Guesses Remaining
var countdown;
// Variable To Track Guessed Letters
var guessedLetters;

// Function Prompts User To Start Game
function startGame() {
    // Resets Guess Count
    countdown = 6;
    // Empties Array That Holds Letters/Underscores
    word.lettersArray = [];
    // Empties Guessed Letters Array
    guessedLetters = [];
    // Asks The User To Start Game
    inquirer.prompt([
    {
        type: "confirm",
        name: 'game',
        message: "The Name Of The Game Is Hangman.\n  The Theme Is Game Of Thrones.\n  Wanna Play?",
    }
    ]).then(function(start){
        // If Yes...
        if (start.game === true) {
            // First Word Is Displayed 
            console.log("\n New Word" + "\n \n" + word.underscoreBuilder() + "\n");
            // playGame() Function Is Called
            playGame();
        // Otherwise, BYE.
        } else {
            console.log("\nGOOD BYE.\n")
        }
    })
};

// Game Functionality
function playGame() {
    // If User Out Of Guesses, GAME OVER.
    if (countdown === 0){
        console.log("GAME OVER. No Guesses Left.\n");
        console.log("Movie Name: " + word.wordChoice.join("") + "\n");
        // startGame() To Reset Game Play
        startGame();
    // If Word Is Complete, Winner.
    } else if (word.lettersArray.join('') === word.wordChoice.join("")) {
        console.log("GAME OVER. You win!\n");
        // startGame() To Reset Game Play
        startGame();
    // If Neither Of Those Conditions Are Met, The Game Continues
    } else {
        // Prompts User To Guess A Letter
        inquirer.prompt([
            {
                type: "input",
                name: "userGuess",
                message: "Guess a letter!"
            }
        ]).then(function(guess){
            // Creates Uppercase Letter Of User Guess
            var uppercase = guess.userGuess.toUpperCase();
            var regex = /[A-Z]/gi 
            var alphabet = guess.userGuess.match(regex);
            // Troubleshooting
            // console.log("Guess", guess.userGuess); 
            // console.log("Alphabet", alphabet)  
            
            // Loops Through Word To Find Match
            for (var i = 0; i < word.wordChoice.length; i++) {
                // If Lower Case Guess Matches, Underscore Changes To Guessed Letter
                if (word.wordChoice[i] === guess.userGuess){
                    word.lettersArray[i] = guess.userGuess;
                // If Upper Case Guess Matches, Underscore Changes To Guessed Letter
                } else if (word.wordChoice[i] === uppercase) {
                    word.lettersArray[i] = uppercase;
                }
            };

            // If Letter Was Already Guessed
            if (guessedLetters.includes(guess.userGuess) || guessedLetters.includes(uppercase)){
                // Try Again...
                console.log("\nYou already guessed that. Try again.\n");
                // Calls Game Function
                playGame();
            // If The User Guesses Wrong
            } else if (word.wordChoice.indexOf(guess.userGuess) < 0 && word.wordChoice.indexOf(uppercase) < 0 && guessedLetters.includes(guess.userGuess) === false && guessedLetters.includes(uppercase) === false && guess.userGuess != " " && alphabet != null){
                // Pushes Incorrect Guess To Array
                guessedLetters.push(uppercase);
                // Pushes Incorrect Upper Case Guess To Array
                guessedLetters.push(guess.userGuess);
                // Decreases Guesses By One
                countdown--;
                // Tells User Guess Was Wrong
                console.log("\nIncorrect! " + countdown + " Guesses Left.\n");
                // Displays Word To User
                console.log (word.lettersArray.join(' ')+ "\n")
                // Calls Game Play Function
                playGame();
            // If User Guesses Something That Is Not A Letter
            } else if (alphabet === null || guess.userGuess === " ") {
                // Tells The User To Try Again
                console.log("\nSorry. Not A Valid Guess. Try Again.\n")
                // Calls The Game Play Function
                playGame();
            // If User Guesses Correctly
            } else {
                // Correct Guess Pushed To Array
                guessedLetters.push(uppercase);
                // Correct Upper Case Pushed To Array
                guessedLetters.push(guess.userGuess);
                // Tells User Guess Was Correct
                console.log("\nCorrect Guess!\n");
                // Displays Word To User
                console.log (word.lettersArray.join(' ')+ "\n");
                // Calls The Game Play Function
                playGame();
            }
        })
    }
};

// Calls startGame() Function To Initiate Game
startGame();