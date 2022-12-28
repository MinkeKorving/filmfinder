console.log(movies);

// clear the browser
function resetDom(element) {
  element.textContent = "";
}
const movieGrid = document.getElementById("allmovies");
const radioBtns = document.getElementsByName("filter");
let moviesSearch = [];

function filterMovies(wordInMovie) {
  return movies.filter((movie) => {
    return movie.title.includes(wordInMovie);
  });
}

function filterNewMovies() {
  return movies.filter((movie) => {
    return movie.year >= "2014";
  });
}

// get the ul by id for all movies
const ul = document.querySelector("#allmovies");

// convert each movie into a complete <li> to add to the ul, including url and image
const addMoviesToDom = (movies) => {
  movies.map((movie) => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let img = document.createElement("img");
    ul.appendChild(li);
    li.appendChild(a);
    a.appendChild(img);
    img.src = movie.poster;
    a.href = "https://www.imdb.com/title/" + movie.imdbID;
  });
};
addMoviesToDom(movies);

// create addEventListener for each radio button
radioBtns.forEach((radioButton) => {
  radioButton.addEventListener("change", handleOnChangeEvent);
});

//create the handleOnChangeEvent function for each radio button
function handleOnChangeEvent(event) {
  switch (event.target.value) {
    case "new":
      resetDom(movieGrid);
      addMoviesToDom(filterNewMovies("2014"));
      break;
    case "avengers":
      resetDom(movieGrid);
      addMoviesToDom(filterMovies("Avengers"));
      break;
    case "xmen":
      resetDom(movieGrid);
      addMoviesToDom(filterMovies("X-Men"));
      break;
    case "princess":
      resetDom(movieGrid);
      addMoviesToDom(filterMovies("Princess"));
      break;
    case "batman":
      resetDom(movieGrid);
      addMoviesToDom(filterMovies("Batman"));
      break;
    case "all":
      resetDom(movieGrid);
      addMoviesToDom(movies);
      break;
  }
}

// Bonus: searchBar functionality
const searchBar = document.getElementById("searchBar");
console.log(searchBar);
searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredMovies = moviesSearch.filter((movie) => {
    return movie.title.toLowerCase().includes(searchString);
  });
  addMoviesToDom(filteredMovies);
});
