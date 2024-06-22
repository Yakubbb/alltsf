function OpenGamePage(title, releaseDate, discr, photo) {
    fetch(`http://localhost:3000/gamepage?name=${title}&year=${releaseDate}&discr=${discr}&photo=${photo}`,)
        .then(response => {
            window.location.href = response.url
        })
        .catch(error => console.error('Ошибка при получении данных:', error));
}
function OpenAddingPage() {
    fetch(`http://localhost:3000/addGame`,)
        .then(response => {
            window.location.href = response.url
        })
        .catch(error => console.error('Ошибка при получении данных:', error));
}
function addGame() {
    title = document.getElementById("name").value;
    date = document.getElementById("date").value;
    disc = document.getElementById("disc").value;
    image = document.getElementById("image").value;
    if (isNaN(title) || isNaN(date) || isNaN(disc) || isNaN(image)) {
        return
    }
    fetch(`http://localhost:3000/sendJson?name=${title}&year=${date}&discr=${disc}&photo=${image}`,)
        .then(response => {
            alert(response.text)
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
                <p class="game-data">release date: ${game.releaseDate}</p>
                 <button onclick="OpenGamePage('${game.title}','${game.releaseDate}','${game.discr}','${game.imageUrl}')">About</button> 
            </div>
        `;
    container.appendChild(gameTile);
}
function addNewGame(title, imageUrl, releaseDate) {
    const newGame = { title, imageUrl, releaseDate };
    addGameToContainer(newGame);
    games.push(newGame);
}