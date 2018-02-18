// Uses WordMethod To Create LetterMethod Functions
var WordMethod = require('./word.js');

// Creates An Object That Holds lettersArray And Randomly Chosen Word Array
var LetterMethod = function() {
    this.lettersArray = [];
    this.wordChoice;
}

// Creates New Instance of WordMethod
let newWord = new WordMethod();

// Adds A Function To LetterMethod That Creates An Array From Random Word
LetterMethod.prototype.wordArray = function() {
    this.wordChoice = newWord.chooseWord().split('');
    return this.wordChoice;
    // Troubleshooting
    // console.log("wordChoice: ", this.wordChoice);
};

// Adds A Function To LetterMethod That Creates An Array Of Underscores From The Random Word
LetterMethod.prototype.underscoreBuilder = function(){
    // Calls wordArray Function To Create Array From A Random Word
    this.wordArray();
        
    // Loops Over wordChoice Array
    for (var i = 0; i < this.wordChoice.length; i++) {
        // Pushes A Blank Space For A Blank Space
        if (this.wordChoice[i] === " "){
            this.lettersArray.push(" ")
        // Pushes An Underscore For Each Letter
        } else {
            this.lettersArray.push("_");
        }
    }
    return this.lettersArray.join(" ");
    // Troubleshooting
    // console.log("wordArray: ",  this.wordChoice);
    // console.log("lettersArray: ", this.lettersArray.join(" "))
};

// Exports Constructor Function
module.exports = LetterMethod;