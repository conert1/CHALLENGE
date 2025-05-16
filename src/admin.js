// const questions = require("../questions.json")
const categoryDivs = document.querySelectorAll("div[id^='category-']");
let game;

let jsonData = {
  "category-one": { // JavaScript Fundamentals
    Question: [
      {
        question: "Which of the following best describes JavaScript?",
        options: ["A server-side programming language.", "A programming language used for web development.", 
                  "A markup language used to design websites.", "A database management system."],
        answer: "A programming language used for web development",
      },
      {
        question: "What is 3 x 3?",
        options: ["2", "3", "4", "9"],
        answer: "9",
      },
      {
        question: "What is 4 x 4?",
        options: ["2", "3", "4", "16"],
        answer: "16",
      },
      {
        question: "What is 5 x 5?",
        options: ["2", "3", "4", "25"],
        answer: "25",
      },
      {
        question: "What is 6 x 6?",
        options: ["2", "3", "4", "36"],
        answer: "36",
      },
      {
        question: "What is 7 x 7?",
        options: ["2", "3", "4", "49"],
        answer: "49",
      },
    ],
  },
  "category-two": { // Backend Concepts
    Question: [
      {
        question: "What is 2 + 2?",
        options: ["2", "3", "4", "5"],
        answer: "4",
      },
      {
        question: "What is 3 + 3?",
        options: ["2", "3", "4", "6"],
        answer: "6",
      },
      {
        question: "What is 4 + 4?",
        options: ["2", "3", "4", "8"],
        answer: "8",
      },
      {
        question: "What is 5 + 5?",
        options: ["2", "3", "4", "10"],
        answer: "10",
      },
      {
        question: "What is 6 + 6?",
        options: ["2", "3", "4", "12"],
        answer: "12",
      },
      {
        question: "What is 7 + 7?",
        options: ["2", "3", "4", "14"],
        answer: "14",
      },
    ],
  },
  "category-three": { // Relational Databases
    Question: [
      {
        question: "What is 2 - 2?",
        options: ["2", "3", "4", "0"],
        answer: "0",
      },
      {
        question: "What is 3 - 3?",
        options: ["2", "3", "4", "0"],
        answer: "0",
      },
      {
        question: "What is 4 - 4?",
        options: ["2", "3", "4", "0"],
        answer: "0",
      },
      {
        question: "What is 5 - 5?",
        options: ["2", "3", "4", "0"],
        answer: "0",
      },
      {
        question: "What is 6 - 6?",
        options: ["2", "3", "4", "0"],
        answer: "0",
      },
      {
        question: "What is 7 - 7?",
        options: ["2", "3", "4", "0"],
        answer: "0",
      },
    ],
  },
  category4: { // Artificial Intelligence
    Question: [
      { question: "Who wrote 'Hamlet'?", answer: "William Shakespeare" },
      {
        question: "Which animal is known as the king of the jungle?",
        answer: "Lion",
      },
      {
        question: "What instrument has keys, pedals, and strings?",
        answer: "Piano",
      },
      { question: "Which month has 28 or 29 days?", answer: "February" },
      { question: "How many colors are in a rainbow?", answer: "7" },
      { question: "What is the smallest prime number?", answer: "2" },
    ],
  },
};

categoryDivs.forEach((div) => {
  div.addEventListener("click", () => {
    chooseCategory(div.id);
  });
});

function chooseCategory(category) {
  let game = new QuizGame(category);
  document.getElementById("category-one").style.display = "none";
  document.getElementById("category-two").style.display = "none";
  document.getElementById("category-three").style.display = "none";
  document.getElementById("category-four").style.display = "none";
//   document.getElementById("player-name").style.display = "none"

  game.play();
  return category;
}

class QuizGame {
  constructor(category) {
    this.category = category;
    this.currentIndex = 0;
    this.score = 0;
    this.questions = jsonData[this.category].Question;
    this.playing = true;
    this.playerName = document.getElementById("player-name")
    document.getElementById("submit").addEventListener("click", () => {
      this.next();
    });

    this.list = [];
    let number;
    // get distinct numbers here the numbers are repeating therefore the questions
    for (let i = 0; i < this.questions.length; i++) {
      number = Math.floor(Math.random() * this.questions.length);

      this.list.push(number);
      console.log(number);
    }
  }

  play() {
    // let selectedAnswer
    if (this.currentIndex < this.questions.length) {
      document.getElementById("Question").innerHTML =
        this.questions[this.list[this.currentIndex]].question;

      console.log("current indec" + this.list[this.currentIndex]);
      const quizQuestion = this.questions[this.list[this.currentIndex]];
      let html = `<p>${quizQuestion.question}</p>`;

      quizQuestion.options.forEach((option, index) => {
        html += `
        <label>
            <input type="radio" name="option" value="${option}" ${
          index === 0 ? "checked" : ""
        }>
            ${option}
        </label><br>
    `;
      });

      document.getElementById("Question").innerHTML = html;
      // const selectedAnswer = document.querySelector('input[name="option"]:checked');
    } else {
      document.getElementById("Question").style.display = "none";
      document.getElementById(
        "stats"
      ).innerHTML = `Quiz complete! your was ${this.score} congratulations ${this.playerName.value}`;
      this.playing = false;
      this.currentIndex = 0;
      this.highScoreSave(this.playerName.value)
    }

    // we need a function that will display the time counting down
    this.timer();
    this.progressBar(this.currentIndex, this.questions.length);
    if (this.playing == false) clearTimeout(this.time);
  }

  timer() {
    if (this.time) {
      clearTimeout(this.time);
    }

    this.time = setTimeout(() => {
      document.getElementById("submit").click();
    }, 3000);
  }

  progressBar(index, total) {
    const percent = (index / total) * 100;
    document.getElementById("progress-bar").style.width = percent + "%";
  }

  next() {
    const selectedInput = document.querySelector(
      'input[name="option"]:checked'
    );
    // const correctAnswer = this.questions[this.currentIndex].answer;

    const correctAnswer = this.questions[this.list[this.currentIndex]].answer;
    if (correctAnswer == selectedInput.value) {
      this.score++;
    }

    console.log(selectedInput.value);
    this.currentIndex++;

    this.play();
  }

  highScoreSave(name){
    //
  }
}
