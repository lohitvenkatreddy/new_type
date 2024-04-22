fetch('https://imdb146.p.rapidapi.com/v1/find/?query=brad', {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d3f19b0ae4mshe1a217861b6acd4p122956jsn76ff19102f76",
    "X-RapidAPI-Host": "imdb146.p.rapidapi.com"
  }
})
.then(response => response.json())
.then(data => {
  const list = data.d;
  list.forEach(item => {
    const name = item.l;
    const poster = item.i && item.i.imageUrl; // Ensure item.i exists before accessing imageUrl
    if (poster) {
      const movie = `<li><img src="${poster}"><h2>${name}</h2></li>`;
      document.querySelector('.movies').innerHTML += movie;
    }
  });
})
.catch(err => {
  console.error(err);
});
