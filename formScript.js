
const games = [
    { title: "Game 1", imageUrl: "laffyirl.png", releaseDate: "111" },
    { title: "Game 2", imageUrl: "laffyirl.png", releaseDate: "222" },
    { title: "Game 3", imageUrl: "134.webp", releaseDate: "333" }
];
function OpenGamePage(title, releaseDate, imageUrl) {
    fetch(`http://localhost:3000?name=${title}&year=${releaseDate}&photo=${imageUrl}`,)
        .then(response => {
            window.location.href = response.url
        })
        .catch(error => console.error('Ошибка при получении данных:', error));
}
function addGameToContainer(game) {
    const container = document.getElementById('gamesContainer');
    const gameTile = document.createElement('div');
    gameTile.className = 'game-tile';
    gameTile.innerHTML = `
            <img src="${game.imageUrl}" alt="${game.title}" class="game-image">
            <div class="game-info">
                <p class="game-title">${game.title}</p>
                <p class="game-data">Вес: ${game.releaseDate}</p>
                 <button onclick="OpenGamePage('aboba','aboba','aboba')">Click me</button> 
            </div>
        `;
    container.appendChild(gameTile);
}
games.forEach(game => {
    addGameToContainer(game);
});
function addNewGame(title, imageUrl, releaseDate) {
    const newGame = { title, imageUrl, releaseDate };
    addGameToContainer(newGame);
    games.push(newGame);
}