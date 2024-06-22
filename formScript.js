
const games = [
    { title: "Cyberpunk 2077", imageUrl: "https://upload.wikimedia.org/wikipedia/ru/b/bb/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B9_%D0%B8%D0%B3%D1%80%D1%8B_Cyberpunk_2077.jpg", releaseDate: "10 декабря 2020 г.", discr: "Cyberpunk 2077 — компьютерная игра в жанре Action/RPG в открытом мире, разработанная и изданная польской студией CD Projekt. Действие игры происходит в 2077 году в Найт-Сити, вымышленном североамериканском городе из вселенной Cyberpunk, разработанной Майком Пондсмитом." },
    { title: "Grand Theft Auto V", imageUrl: "https://upload.wikimedia.org/wikipedia/ru/thumb/c/c8/GTAV_Official_Cover_Art.jpg/274px-GTAV_Official_Cover_Art.jpg", releaseDate: "17 сентября 2013 г.", discr: "компьютерная игра в жанре action-adventure с открытым миром, разработанная компанией Rockstar North и изданная компанией Rockstar Games." },
    { title: "Far Cry 3", imageUrl: "https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-743337-52.jpg", releaseDate: " 28 ноября 2012 г.", discr: "Far Cry 3 — компьютерная игра в жанре шутера от первого лица с элементами RPG, разработанная Ubisoft Montreal при участии Ubisoft Shanghai и Ubisoft Massive и изданная Ubisoft. Является третьей игрой из одноимённой серии игр." },
    { title: "Baldur’s Gate 3 ", imageUrl: "https://upload.wikimedia.org/wikipedia/ru/d/dc/Baldur%27s_Gate_III_Logo.png", releaseDate: "3 августа 2023 г.", discr: "Baldur’s Gate 3 (в переводе с англ. — «Врата Балдура 3») — компьютерная ролевая игра, разработанная и изданная бельгийской компанией Larian Studios. Baldur’s Gate 3 стала продолжением серии Baldur’s Gate, основанной на настольной ролевой игре Dungeons & Dragons; её действие происходит в той же вымышленной вселенной Forgotten Realms. Игра вышла 3 августа 2023 года для Windows и 6 сентября того же года для PlayStation 5, тогда как релиз для macOS состоялся 22 сентября. Версия для Xbox Series X/S была выпущена 8 декабря 2023 года. " },
    { title: "Arma 3", imageUrl: "https://upload.wikimedia.org/wikipedia/ru/8/8e/ArmA_III.jpeg", releaseDate: "12 сентября 2013 г.", discr: "Arma 3 — компьютерная игра в жанре тактического шутера с ролевыми элементами, третья по счёту из серии игр Arma, разработанная чешской компанией Bohemia Interactive Studio для платформы Windows. Игра вышла 12 сентября 2013 года в Steam" },
    { title: "Дурак Онлайн", imageUrl: "https://cdn.kanobu.ru/games/c2750aef-83df-4400-a918-4352edfa151f.JPG", releaseDate: " 1 января 0000 г.", discr: "Дурак онлайн - это мобильная версия карточной игры Дурак, поддерживающая от двух до шести игроков одновременно. Победителем, как и в традиционной версии, становится тот игрок, который первым избавится от всех карт на руке. В игре есть несколько режимов игры, вроде подкидного и переводного дурака, а также возможность выбрать размер колоды - 24, 36 или 52 карты. " }
];
function OpenGamePage(title, releaseDate, discr,photo) {
    fetch(`http://localhost:3000?name=${title}&year=${releaseDate}&discr=${discr}&photo=${photo}`,)
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
                <p class="game-data">release date: ${game.releaseDate}</p>
                 <button onclick="OpenGamePage('${game.title}','${game.releaseDate}','${game.discr}','${game.imageUrl}')">About</button> 
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