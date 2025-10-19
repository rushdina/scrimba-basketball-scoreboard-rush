// Caching DOM elements and scores
let teams = {
  home: { score: 0, scoreEl: document.getElementById("home-score-el") },
  guest: { score: 0, scoreEl: document.getElementById("guest-score-el") },
};

const homeBtns = document.querySelectorAll(".home-btn");
const guestBtns = document.querySelectorAll(".guest-btn");
const newGameBtn = document.getElementById("new-game-btn");

// Increase score
function increaseScore(teamName, points) {
  const team = teams[teamName];
  team.score += points;
  team.scoreEl.textContent = team.score;
}

// Reset score
function newGame() {
  for (let teamName in teams) {
    const team = teams[teamName];
    team.score = 0;
    team.scoreEl.textContent = 0;
  }
}

// Event Listeners
homeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const points = Number(btn.dataset.homePoints);
    increaseScore("home", points);
  });
});

guestBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const points = Number(btn.dataset.guestPoints);
    increaseScore("guest", points);
  });
});

newGameBtn.addEventListener("click", newGame);
