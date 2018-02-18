// WordMethod Creates An Object That Holds Fantasy Movie Word Choices
var WordMethod = function() {
    this.choices = ["Jurassic Park", "Cloud Atlas", "Harry Potter", "Pan's Laybrinth", "The Chronicles of Narnia", "The Neverending Story", "The Hunger Games", "Avatar", "Constantine", "Spirited Away", "Ladyhawke", "The Dark Crystal", "Stardust", "Pirates of the Caribbean", "Matilda", "The Princess Bride"];
}

// Adds A Function To WordMethod To Choose Randomly Choose Movie
WordMethod.prototype.chooseWord = function() {
    return this.choices[Math.floor(Math.random() * this.choices.length)];;
};

// Troubleshooting
// let newWord = new WordMethod();
// console.log(newWord.chooseWord());

// Exports Constructor Function
module.exports = WordMethod;