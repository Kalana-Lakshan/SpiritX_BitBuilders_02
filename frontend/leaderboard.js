const leaderboardData = [
    { rank: 1, username: "spiritx_2025", points: 900 },
    { rank: 2, username: "player2", points: 850 },
    { rank: 3, username: "player3", points: 800 }
];

document.addEventListener("DOMContentLoaded", () => {
    const leaderboardTable = document.querySelector("#leaderboard tbody");
    leaderboardData.forEach(player => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${player.rank}</td><td>${player.username}</td><td>${player.points}</td>`;
        leaderboardTable.appendChild(row);
    });
});