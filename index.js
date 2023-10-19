const meme_result = document.getElementById("mymemes");
const btn = document.getElementById("btn");

async function getRandomMeme() {
  //   fetch("https://meme-api.com/gimme/wholesomememes")
  const response = await fetch(`https://meme-api.com/gimme`);

  const data = await response.json();

  meme_result.innerHTML = `<img src="${data.url}"/>`;
  // console.log(data);
}

btn.addEventListener("click", function nextmMeme() {
  getRandomMeme();
});

getRandomMeme();
