const fields = [
  "cwEarned", "cwTotal",
  "qEarned", "qTotal",
  "jEarned", "jTotal",
  "pEarned", "pTotal",
  "fEarned", "fTotal"
];

// Load saved data
window.onload = () => {
  fields.forEach(id => {
    const saved = localStorage.getItem(id);
    if (saved !== null) {
      document.getElementById(id).value = saved;
    }
  });
};

// Save data automatically
document.addEventListener("input", (e) => {
  if (fields.includes(e.target.id)) {
    localStorage.setItem(e.target.id, e.target.value);
  }
});

function percent(earned, total) {
  if (total === 0) return 0;
  return (earned / total) * 100;
}

function calculate() {
  const cw = percent(Number(cwEarned.value), Number(cwTotal.value));
  const q  = percent(Number(qEarned.value), Number(qTotal.value));
  const j  = percent(Number(jEarned.value), Number(jTotal.value));
  const p  = percent(Number(pEarned.value), Number(pTotal.value));
  const f  = percent(Number(fEarned.value), Number(fTotal.value));

  const grade =
    cw * 0.10 +
    q  * 0.20 +
    j  * 0.20 +
    p  * 0.20 +
    f  * 0.30;

  document.getElementById("result").textContent =
    `Current Grade: ${grade.toFixed(2)}%`;
}
