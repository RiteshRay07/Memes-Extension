
fetch('https://meme-api.herokuapp.com/gimme')           //api for the get request
    .then(response => response.json())
    .then(data => console.log(data));



