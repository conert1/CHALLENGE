// const questions = require("../questions.json")
let currentUser = { name: "", score: 0 };
fetch('../highScores.json')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('scoreList');
    data.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name}, Age: ${user.score}`;
      list.appendChild(li);

    });
  })



const categoryDivs = document.querySelectorAll("div[id^='category-']");
let game;

let jsondd = {};

categoryDivs.forEach((div) => {
  div.addEventListener("click", () => {
    // jsondd = initial(div.id)
    chooseCategory(div.id);
  });
});



async function chooseCategory(category) {
  if (!jsondd[category]) {
    console.error("Category not loaded!");
    return;
  }

  const game = new QuizGame(category);
  document.getElementById("category-one").style.display = "none";
  document.getElementById("category-two").style.display = "none";
  document.getElementById("category-three").style.display = "none";
  document.getElementById("category-four").style.display = "none";
  document.getElementById("player-name").style.display = "none";

  game.play();
}



(async () => {
  await initial();

  // Now `jsondd` is available and can be used to create the game
  // const game = new QuizGame("category-one");
  // game.play();
})();


async function initial() {
  const resp = await fetch("../questions.json")
  const data = await resp.json()
  // console.log(data[category])
  jsondd = data
}

class QuizGame {
  constructor(category) {
//replaces length will get this value from admin input
    this.numberOfQuestions = 6
    this.category = category;
    this.currentIndex = 0;
    this.score = 0;
    // this.questions = jsonData[this.category].Question;
    
    this.secondQuestions = jsondd[this.category]
    
    this.playing = true;
    this.playerName = document.getElementById("player-name")
    document.getElementById("submit").addEventListener("click", () => {
      this.next();
    });

    this.list = [];
    let number;

    for (let i = 0; i < this.numberOfQuestions; i++) {
      number = Math.floor(Math.random() * this.numberOfQuestions);
      while(this.list.includes(number)){
        number = Math.floor(Math.random() *this.numberOfQuestions)
      }
      this.list.push(number);
    }
  }


  play() {
    // let selectedAnswer
    if (this.currentIndex < this.numberOfQuestions) {
      console.log(this.secondQuestions)
      document.getElementById("Question").innerHTML =
        this.secondQuestions[this.list[this.currentIndex]];

      console.log("current indec" + this.secondQuestions[this.list[this.currentIndex]].answer);
      const quizQuestion = this.secondQuestions[this.list[this.currentIndex]];
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
      document.getElementById("Answer").style.display = "none";
      document.getElementById("submit").style.display = "none";
      
      document.getElementById(
        "stats"
      ).innerHTML = `Quiz complete! your score is ${this.score} congratulations ${this.playerName.value}`;
      this.playing = false;
      this.currentIndex = 0;
      this.highScoreSave(this.playerName.value)
    }

    // we need a function that will display the time counting down
    this.timer();
    this.progressBar(this.currentIndex, this.numberOfQuestions);
    if (this.playing == false) clearTimeout(this.time);
  }

  timer() {
    if (this.time) {
      clearTimeout(this.time);
    }

    this.time = setTimeout(() => {
      document.getElementById("submit").click();
    }, 20000);
  }

  progressBar(index, total) {
    const percent = (index / total) * 100;
    document.getElementById("progress-bar").style.width = percent + "%";
  }

  next() {
    const selectedInput = document.querySelector(
      'input[name="option"]:checked'
    );
    const correctAnswer = this.secondQuestions[this.list[this.currentIndex]].answer;
    if (correctAnswer == selectedInput.value) {
      this.score++;
    }

    console.log(selectedInput.value);
    this.currentIndex++;

    this.play();
  }

  highScoreSave(name){
    let data = [
      { name: "Alice", score: 2 },
      { name: "Bob", score: 1 }
    ];
    
    // New user to add
    const newUser = { name: "Charlie", score: 3 };
    
    // Add to the array
    data.push(newUser);
    
  
  }
}
