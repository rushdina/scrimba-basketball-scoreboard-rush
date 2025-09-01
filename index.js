let teams = {
    home: { score: 0, scoreEl: "home-score" },
    guest: { score: 0, scoreEl: "guest-score" }
}

function increaseScore(teamName, points) {
    let team = teams[teamName];
    team.score += points;
    document.getElementById(team.scoreEl).innerText = team.score;
}

function newGame() {
    for (let teamName in teams) {
        teams[teamName].score = 0;
        document.getElementById(teams[teamName].scoreEl).innerText = 0;
    }
}
