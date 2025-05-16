document.getElementById("add-question-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const category = document.getElementById("admin-category").value;
  const question = document.getElementById("question").value;
  const answers = [...document.querySelectorAll(".answer")].map(input => input.value);
  const correct = document.getElementById("correct-answer").value;

  const newQuestion = { question, answers, correct };
  let db = JSON.parse(localStorage.getItem("quizDB") || "{}");
  if (!db[category]) db[category] = [];
  db[category].push(newQuestion);
  localStorage.setItem("quizDB", JSON.stringify(db));

  alert("Question added successfully!");
});
