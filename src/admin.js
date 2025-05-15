// const questions = require("../questions.json")
const categoryDivs = document.querySelectorAll("div[id^='category-']");

let jsonData = {
    "category1":{
        "Question": "aaaaaaaaaaaaaaaaa",
        "answer": "2"
    },
    "category2":{
        "Question": "aaaaaaaaaaaaaaaaa",
        "answer": "2"
    },
    "category3":{
        "Question": "aaaaaaaaaaaaaaaaa",
        "answer": "2"
    },
    "category4":{
        "Question": "aaaaaaaaaaaaaaaaa",
        "answer": "2"
    }
}



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

    game.now()
    return category
}



class QuizGame{
    constructor(category){
        this.category = category
    }
    now(){
        alert(jsonData.category1.Question)
    }

}