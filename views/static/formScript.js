function OpenGamePage(title, releaseDate, discr, photo,video) {
    fetch(`http://localhost:3000/gamepage?name=${title}&year=${releaseDate}&discr=${discr}&photo=${photo}&video=${video}`,)
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
    vieo = document.getElementById("video").value;
    if (isNaN(title) || isNaN(date) || isNaN(disc) || isNaN(image)) {
        return
    }
    fetch(`http://localhost:3000/sendJson?name=${title}&year=${date}&discr=${disc}&photo=${image}&video=${video}`,)
        .then(response => {
            alert(response.text)
        })
        .catch(error => console.error('Ошибка при получении данных:', error));

}
function OpenAboutUsPage() {
    fetch(`http://localhost:3000/aboutUs`,)
        .then(response => {
            window.location.href = response.url
        })
        .catch(error => console.error('Ошибка при получении данных:', error));
}