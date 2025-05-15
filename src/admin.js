// const questions = require("../questions.json")
const categoryDivs = document.querySelectorAll("div[id^='category-']");
let game;


let jsonData = {
    "category1": {
        "Question": [
            { "question": "What is 2 + 2?", "answer": "4", "options1": "1" },
            { "question": "What is the capital of France?", "answer": "Paris" },
            { "question": "What color do you get when you mix red and white?", "answer": "Pink" },
            { "question": "What planet is known as the Red Planet?", "answer": "Mars" },
            { "question": "How many continents are there?", "answer": "7" },
            { "question": "What is the largest mammal?", "answer": "Blue Whale" }
        ]
    },
    "category2": {
        "Question": [
            { "question": "What is 5 x 6?", "answer": "30" },
            { "question": "What is the boiling point of water in Celsius?", "answer": "100" },
            { "question": "What gas do plants absorb?", "answer": "Carbon Dioxide" },
            { "question": "What is the square root of 64?", "answer": "8" },
            { "question": "What is the chemical symbol for gold?", "answer": "Au" },
            { "question": "What is the opposite of hot?", "answer": "Cold" }
        ]
    },
    "category3": {
        "Question": [
            { "question": "What is the fastest land animal?", "answer": "Cheetah" },
            { "question": "What is H2O commonly known as?", "answer": "Water" },
            { "question": "How many legs does a spider have?", "answer": "8" },
            { "question": "Which ocean is the largest?", "answer": "Pacific" },
            { "question": "How many hours are in a day?", "answer": "24" },
            { "question": "What shape has three sides?", "answer": "Triangle" }
        ]
    },
    "category4": {
        "Question": [
            { "question": "Who wrote 'Hamlet'?", "answer": "William Shakespeare" },
            { "question": "Which animal is known as the king of the jungle?", "answer": "Lion" },
            { "question": "What instrument has keys, pedals, and strings?", "answer": "Piano" },
            { "question": "Which month has 28 or 29 days?", "answer": "February" },
            { "question": "How many colors are in a rainbow?", "answer": "7" },
            { "question": "What is the smallest prime number?", "answer": "2" }
        ]
    }
};




categoryDivs.forEach(div => {
  div.addEventListener("click", () => {
    console.log(`${div.id} clicked`);
    chooseCategory(div.id)
    
  });
});

function chooseCategory(category){
    let game = new QuizGame(category)
    document.getElementById("category-one").style.display = "none"
    document.getElementById("category-two").style.display = "none"
    document.getElementById("category-three").style.display = "none"
    document.getElementById("category-four").style.display = "none"

    game.play()
    return category
}

class QuizGame{
    constructor(category){
        this.category = category
        this.currentIndex = 0
        this.questions = jsonData["category1"].Question;
        document.getElementById("submit").addEventListener("click", () => {
            this.next();
        });
    }
    
    
    now(){
        alert(jsonData.category1.Question)
    }
    play(){
        console.log(this.questions.length)
        if (this.currentIndex < this.questions.length) {
            document.getElementById("Question").innerHTML = this.questions[this.currentIndex].question;
        } else {
            document.getElementById("Question").innerHTML = "Quiz complete!";
            this.currentIndex = 0
        }
        
    
    }

    next() {
        this.currentIndex++;
        this.play();
    }

    

}