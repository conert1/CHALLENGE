document.addEventListener("DOMContentLoaded", () => {
const categoryScreen = document.getElementById("category-screen");
const optionsScreen = document.getElementById("options-screen");
const categoryTitle = document.getElementById("category-title");
const backBtn = document.getElementById("back-btn");

document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        categoryTitle.textContent = category;
        categoryScreen.classList.add("hidden");
        optionsScreen.classList.remove("hidden");
    });
});

const setNumberOfQuestionsBtn = document.querySelector(".set-btn");
const addQuestionBtn = document.querySelector(".add-btn");
const deleteQuestionButton = document.querySelector(".del-btn");
const setQuestionsScreen = document.getElementById("set-questions-screen");
const optionButtons = document.querySelector(".option-buttons");

setNumberOfQuestionsBtn.addEventListener("click", () => {
    setQuestionsScreen.classList.remove("hidden");
    optionButtons.classList.add("hidden");
});

backBtn.addEventListener("click", () => {
    categoryScreen.classList.remove("hidden");
    optionsScreen.classList.add("hidden");
    setQuestionsScreen.classList.add("hidden");
    optionButtons.classList.remove("hidden");
    confirmationMsg.textContent = "";
    });
});

let numberOfQuestions;
const confirmationMsg = document.getElementById("confirm-msg");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("number-form");
    const numberInput = document.getElementById("number-of-questions");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        numberOfQuestions = parseInt(numberInput.value);

        confirmationMsg.textContent = `Number ${numberOfQuestions} has been saved successfully!`;

        form.reset();
    });
});