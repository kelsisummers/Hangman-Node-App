// WordMethod Creates An Object That Holds Fantasy Movie Word Choices
var WordMethod = function() {
    this.choices = ["Sansa", "Jon Snow", "Direwolf", "Stark", "Littlefinger", "Arya", "Drogon", "Rhaegal", "Viserion", "The White Walkers", "Lady Catelyn Stark", "The Night's Watch", "Godswood", "Weirwood", "The Children of the Forest", "Brandon the Builder", "The Three Eyed Raven", "The Faceless Men", "Needle", "Daenerys Targaryen"];
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