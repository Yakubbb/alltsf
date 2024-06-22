
fetch(`http://localhost:3000?name=${title}&year=${releaseDate}&discr=${discr}&photo=${photo}`,)
    .then(response => {
        window.location.href = response.url
    })
    .catch(error => console.error('Ошибка при получении данных:', error));
