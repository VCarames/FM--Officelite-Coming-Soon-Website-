function calculateCountdown() {
  const targetDate = new Date("November 4, 2023 00:00:00").getTime();

  const now = new Date().getTime();

  const timeRemaining = targetDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.querySelector(".number--days").textContent = days
    .toString()
    .padStart(2, "0");
  document.querySelector(".number--hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.querySelector(".number--minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.querySelector(".number--seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
}

setInterval(calculateCountdown, 1000);
