document.addEventListener('DOMContentLoaded', () => {
    fetchPlayers();
});

function fetchPlayers() {
    fetch('/api/players')
        .then(response => response.json())
        .then(data => {
            const playerList = document.getElementById('player-list');
            data.forEach(player => {
                const playerDiv = document.createElement('div');
                playerDiv.innerHTML = `<p>${player.name} - ${player.university}</p>`;
                playerList.appendChild(playerDiv);
            });
        });
}
