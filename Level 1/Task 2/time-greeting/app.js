// time windows are kind of arbitrary but reasonable:
function getGreetingForHour(h, m) {
  if (h >= 5 && h < 12) return "Good morning";
  if (h >= 12 && h < 17) return "Good afternoon";
  if (h >= 17 && h < 21) return "Good evening";
  return "Good night";
}
const greetBtn = document.getElementById("greetBtn");

greetBtn.addEventListener("click", () => {
  // if user typed a number, use that; otherwise use real local time
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  const greeting = getGreetingForHour(hour, minute);
  // classic alert - intentionally old-school
  alert(`${greeting}! the time is, ${hour}:${minute}.`);
});