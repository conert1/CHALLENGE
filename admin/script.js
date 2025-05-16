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

backBtn.addEventListener("click", () => {
    categoryScreen.classList.remove("hidden");
    optionsScreen.classList.add("hidden");
    });
});

const setNumberOfQuestionsBtn = document.querySelector(".set-btn");
const addQuestionBtn = document.querySelector(".add-btn");
const deleteQuestionButton = document.querySelector(".del-btn");