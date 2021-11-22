API_KEY = "fe3d5322ad053d9d838750816d0f9d0a";
const banner = document.getElementById("home-banner");
const Action = document.getElementById("action");
const Science = document.getElementById("science");
const Animation = document.getElementById("animation");
const Comedy = document.getElementById("comedy");
const Documentary = document.getElementById("documentary");
const Crime = document.getElementById("crime");
const movie_title = document.getElementById("movie-title");
const movie_description = document.getElementById("movie-description");

TRENDING_REQ = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
ACTION_REQ = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;
SCIENCE_REQ = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`;
ANIMATION_REQ = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`;
COMEDY_REQ = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`;
DOCUMENTARY_REQ = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`;
CRIME_REQ = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`;

//Banner movie
fetch(TRENDING_REQ)
  .then((response) => response.json())
  .then((data) => {
    randomMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];
    banner.style.backgroundImage = `url('https://image.tmdb.org/t/p/w1280/${randomMovie.backdrop_path}')`;
    banner.classList.add("home");
    movie_title.innerText = randomMovie.original_title;
    movie_description.innerText = randomMovie.overview;
  });

fetch(ACTION_REQ)
  .then((response) => response.json())
  .then((data) => {
    let html = "";
    data.results.forEach((movie) => {
      html += `
                <img src="https://image.tmdb.org/t/p/w1280/${movie.poster_path}" alt="">
            `;
      /*
      banner.style.background = `url('https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}')`;
      movie_title.innerText = movie.original_title;
      movie_description.innerText = movie.overview;
      */
    });
    Action.innerHTML = html;
  });

fetch(SCIENCE_REQ)
  .then((response) => response.json())
  .then((data) => {
    let html = "";
    data.results.forEach((movie) => {
      html += `
                <img src="https://image.tmdb.org/t/p/w1280/${movie.poster_path}" alt="">
            `;
    });
    Science.innerHTML = html;
  });

fetch(ANIMATION_REQ)
  .then((response) => response.json())
  .then((data) => {
    let html = "";
    data.results.forEach((movie) => {
      html += `
                <img src="https://image.tmdb.org/t/p/w1280/${movie.poster_path}" alt="">
            `;
    });
    Animation.innerHTML = html;
  });

fetch(COMEDY_REQ)
  .then((response) => response.json())
  .then((data) => {
    let html = "";
    data.results.forEach((movie) => {
      html += `
                <img src="https://image.tmdb.org/t/p/w1280/${movie.poster_path}" alt="">
            `;
    });
    Comedy.innerHTML = html;
  });

fetch(DOCUMENTARY_REQ)
  .then((response) => response.json())
  .then((data) => {
    let html = "";
    data.results.forEach((movie) => {
      html += `
                <img src="https://image.tmdb.org/t/p/w1280/${movie.poster_path}" alt="">
            `;
    });
    Documentary.innerHTML = html;
  });

fetch(CRIME_REQ)
  .then((response) => response.json())
  .then((data) => {
    let html = "";
    data.results.forEach((movie) => {
      html += `
                <img src="https://image.tmdb.org/t/p/w1280/${movie.poster_path}" alt="">
            `;
    });
    Crime.innerHTML = html;
  });
