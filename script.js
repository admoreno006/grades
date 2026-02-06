function calculate() {
  let classwork = Number(document.getElementById("classwork").value) || 0;
  let quizzes = Number(document.getElementById("quizzes").value) || 0;
  let journals = Number(document.getElementById("journals").value) || 0;
  let project = Number(document.getElementById("project").value) || 0;
  let final = Number(document.getElementById("final").value) || 0;

  let grade =
    classwork * 0.10 +
    quizzes * 0.20 +
    journals * 0.20 +
    project * 0.20 +
    final * 0.30;

  document.getElementById("result").textContent =
    "Current Grade: " + grade.toFixed(2) + "%";
}
