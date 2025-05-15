// const questions = require("../questions.json")
const categoryDivs = document.querySelectorAll("div[id^='category-']");
let game;


let jsonData = {
    "category1": {
        "Question": [
            {
                question: "What is 2 x 2?",
                options: ["2", "3", "4", "5"],
                answer: "4"
            },
            {
                question: "What is 3 x 3?",
                options: ["2", "3", "4", "9"],
                answer: "4"
            },
            {
                question: "What is 4 x 4?",
                options: ["2", "3", "4", "16"],
                answer: "4"
            },
            {
                question: "What is 5 x 5?",
                options: ["2", "3", "4", "25"],
                answer: "4"
            },
            {
                question: "What is 6 x 6?",
                options: ["2", "3", "4", "36"],
                answer: "4"
            },
            {
                question: "What is 7 + 7?",
                options: ["2", "3", "4", "49"],
                answer: "4"
            },
        ]
        
    },
    "category2": {
        "Question": [
            {
                question: "What is 2 + 2?",
                options: ["2", "3", "4", "5"],
                answer: "4"
            },
            {
                question: "What is 3 + 3?",
                options: ["2", "3", "4", "6"],
                answer: "4"
            },
            {
                question: "What is 4 + 4?",
                options: ["2", "3", "4", "8"],
                answer: "4"
            },
            {
                question: "What is 5 + 5?",
                options: ["2", "3", "4", "10"],
                answer: "4"
            },
            {
                question: "What is 6 + 6?",
                options: ["2", "3", "4", "12"],
                answer: "4"
            },
            {
                question: "What is 7 + 7?",
                options: ["2", "3", "4", "14"],
                answer: "4"
            },
        ]
    },
    "category3": {
        "Question": [
            {
                question: "What is 2 - 2?",
                options: ["2", "3", "4", "0"],
                answer: "4"
            },
            {
                question: "What is 3 - 3?",
                options: ["2", "3", "4", "0"],
                answer: "4"
            },
            {
                question: "What is 4 - 4?",
                options: ["2", "3", "4", "0"],
                answer: "4"
            },
            {
                question: "What is 5 - 5?",
                options: ["2", "3", "4", "0"],
                answer: "4"
            },
            {
                question: "What is 6 - 6?",
                options: ["2", "3", "4", "0"],
                answer: "4"
            },
            {
                question: "What is 7 - 7?",
                options: ["2", "3", "4", "0"],
                answer: "4"
            },
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
    // console.log(`${div.id} clicked`);
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
        this.questions = jsonData["category2"].Question;
        document.getElementById("submit").addEventListener("click", () => {
            this.next();
        });
    }
    
    
    now(){
        alert(jsonData.category1.Question)
    }
    play(){
        let selectedAnswer
        // console.log("current index = "+this.questions.length)
        if (this.currentIndex < this.questions.length) {
            document.getElementById("Question").innerHTML = this.questions[this.currentIndex].question;
        

            const quizQuestion = this.questions[this.currentIndex];
            let html = `<p>${quizQuestion.question}</p>`;
    
            quizQuestion.options.forEach((option, index) => {
                html += `
        <label>
            <input type="radio" name="option" value="${option}" ${index === 0 ? 'checked' : ''}>
            ${option}
        </label><br>
    `;
                // selectedAnswer = document.querySelector('input[name="option"]:checked');
                // if (selected) {
                //     console.log("You selected:", selected.value);
                // } else {
                //     console.log("No option selected.");
                // }
                // selectedAnswer = index
                // selectedAnswer = document.querySelector('input[name="option"]:checked');
            });

            
            
            // console.log("selected option---------------- "+selectedAnswer)
    
            document.getElementById("Question").innerHTML = html;
            const selectedAnswer = document.querySelector('input[name="option"]:checked');
            this.answerCheck(selectedAnswer?.value);
        // selectedAnswer = selected
        
        } else {
            document.getElementById("Question").style.display = "none"
            document.getElementById("stats").innerHTML = "Quiz complete!";
            this.currentIndex = 0
        }


    this.answerCheck(selectedAnswer)


    }

    nextt(){

    }

    next() {
        const selectedInput = document.querySelector('input[name="option"]:checked');
        // const selectedValue = selectedInput ? selectedInput.value : null;
        const correctAnswer = this.questions[this.currentIndex].answer;

        // if (selectedValue === correctAnswer) {
        //     console.log("✅ Correct!");
        // } else {
        //     console.log(`❌ Wrong. Correct answer is: ${correctAnswer}`);
        // }

        // this.currentIndex++;
        // this.play();
        console.log(selectedInput.value) 
        this.currentIndex++;

        this.play();
    }

    answerCheck(option){
        // console.log("You selected "  + option.value)
    }

}