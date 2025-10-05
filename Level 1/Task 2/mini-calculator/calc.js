// lightweight helper to parse input; returns NaN if empty or invalid
function parseNum(value) {
  // accept commas sometimes (1,234.5) -> just remove commas
  const cleaned = String(value).replace(/,/g, "").trim();
  return cleaned === "" ? NaN : Number(cleaned);
}

const form = document.getElementById("calcForm");
const inputA = document.getElementById("a");
const inputB = document.getElementById("b");
const resultEl = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // don’t reload the page

  const a = parseNum(inputA.value);
  const b = parseNum(inputB.value);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    resultEl.textContent = "Please enter valid numbers in both fields 🙏";
    return;
  }

  const sum = a + b;

  // formatting: keep it simple, but avoid ugly trailing zeros when not needed
  const pretty = Number.isInteger(sum) ? String(sum) : String(+sum.toFixed(6));

  resultEl.textContent = `Result: ${pretty}`;
});
