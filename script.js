// Caching DOM elements and scores
let teams = {
  home: { score: 0, scoreEl: document.getElementById("home-score-el") },
  guest: { score: 0, scoreEl: document.getElementById("guest-score-el") },
};

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

// Event delegation for buttons
document.addEventListener("click", (e) => {
  // Only act if it's a valid scoring button
  if (e.target.matches("button[data-team][data-points]")) {
    increaseScore(e.target.dataset.team, Number(e.target.dataset.points));
  } else if (e.target.id === "new-game-btn") {
    newGame();
  }
});
