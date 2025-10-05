// I could do a fancy random color, but toggling feels more predictable for a demo
const btn = document.getElementById("colorBtn");

// mild defensive check (habit)
if (btn) {
  btn.addEventListener("click", () => {
    // toggle a class - easy win
    btn.classList.toggle("alt");

    // tiny UX touch: change the label a bit
    if (btn.classList.contains("alt")) {
      btn.textContent = "Nice! Click again?";
    } else {
      btn.textContent = "Click me";
    }
  });
} else {
  // if this prints, something's off with the HTML id
  console.warn('Button with id="colorBtn" not found 🤔');
}
