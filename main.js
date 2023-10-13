
function generateID() {
  var count = 0;
  return function () {
    return count++;
  };
}
var id = generateID();
/****************************Movies ******************************/
var movies = []
var makeMovie = (title, genre, director, duration, cast, info, image) => {
  movies.push({
    id: id(),
    title,
    genre,
    director,
    duration,
    cast,
    info,
    image

  })
}

makeMovie("The Shawshank Redemption", "Drama", "Frank Darabont", 142, ["Tim Robbins", "Morgan Freeman"], "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.","./Media/images.jpeg");
makeMovie("The Godfather", "Crime", "Francis Ford Coppola", 175, ["Marlon Brando", "Al Pacino"], "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", "./Media/backgroundimage6.jpg");
makeMovie("The Dark Knight", "Action", "Christopher Nolan", 152, ["Christian Bale", "Heath Ledger"], "When the menace known as The Joker emerges, Batman must confront the chaos he creates.", "./Media/64b37633a8644-the-dark-knight.jpg");
makeMovie("Pulp Fiction", "Crime", "Quentin Tarantino", 154, ["John Travolta", "Uma Thurman"], "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", "./Media/31-facts-about-the-movie-pulp-fiction-1687241336.jpg");
makeMovie("The Lord of the Rings: The Fellowship of the Ring", "Adventure", "Peter Jackson", 178, ["Elijah Wood", "Ian McKellen"], "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring.", "./Media/lotr.jpg");
makeMovie("Forrest Gump", "Drama", "Robert Zemeckis", 142, ["Tom Hanks", "Robin Wright"], "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.", "./Media/forest.jpg");
makeMovie("Inception", "Action", "Christopher Nolan", 148, ["Leonardo DiCaprio", "Joseph Gordon-Levitt"], "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", "./Media/inception.jpg");
makeMovie("Schindler's List", "Biography", "Steven Spielberg", 195, ["Liam Neeson", "Ben Kingsley"], "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.", "./Media/List.jpeg");
makeMovie("The Matrix", "Action", "Lana Wachowski, Lilly Wachowski", 136, ["Keanu Reeves", "Laurence Fishburne"], "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", "./Media/matrix.png");
makeMovie("Titanic", "Drama", "James Cameron", 195, ["Leonardo DiCaprio", "Kate Winslet"], "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.", "./Media/titanic.jpg");
makeMovie("The Silence of the Lambs", "Crime", "Jonathan Demme", 118, ["Jodie Foster", "Anthony Hopkins"], "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.", "./Media/silence-of-the-lambs.jpg");
makeMovie("The Green Mile", "Crime", "Frank Darabont", 189, ["Tom Hanks", "Michael Clarke Duncan"], "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.", "./Media/green-mile.jpg");
makeMovie("The Departed", "Crime", "Martin Scorsese", 151, ["Leonardo DiCaprio", "Matt Damon"], "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.", "./Media/departed.jpg");
makeMovie("Gladiator", "Action", "Ridley Scott", 155, ["Russell Crowe", "Joaquin Phoenix"], "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.", "./Media/backgroundimage5.jpg");
makeMovie("Django Unchained", "Drama", "Quentin Tarantino", 165, ["Jamie Foxx", "Christoph Waltz"], "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.", "./Media/django.jpg");
makeMovie("The Godfather: Part II", "Crime", "Francis Ford Coppola", 202, ["Al Pacino", "Robert De Niro"], "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.", "./Media/godfather.jpg");
makeMovie("The Dark Knight Rises", "Action", "Christopher Nolan", 164, ["Christian Bale", "Tom Hardy"], "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.", "./Media/dark-knight-rises.jpg");
makeMovie("Fight Club", "Drama", "David Fincher", 139, ["Brad Pitt", "Edward Norton"], "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.", "./Media/fight-c.png");
makeMovie("The Lord of the Rings: The Return of the King", "Adventure", "Peter Jackson", 201, ["Elijah Wood", "Viggo Mortensen"], "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.", "./Media/aragorn.0.jpg");
makeMovie("The Social Network", "Biography", "David Fincher", 120, ["Jesse Eisenberg", "Andrew Garfield"], "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.", "./Media/fb.jpg");



/*************************************sign Up and Log In  ***********************************/
function signUp() {
  console.log("test1");
  const username = $('#signUp-userName').val();
  const password = $('#signUp-passWord').val();
  var watchList = []
  var myMovies = []

  if (localStorage.getItem("user")) {
    displayErrorMessage('Username already exists. Choose another one.');
    return;
  }

  localStorage.setItem("user", JSON.stringify({ username, password, watchList, myMovies }));
  displayErrorMessage('');
}

function logIn() {
  console.log("test2");
  const username = $('#logIn-userName').val();
  const password = $('#logIn-passWord').val();



  const userData = localStorage.getItem("user");

  if (userData) {
    const storedPassword = JSON.parse(userData).password;

    if (password === storedPassword) {
      displayErrorMessage('Login successful!');
    }
    else {
      displayErrorMessage('Incorrect password. Please try again.');
    }
  }
  else {
    displayErrorMessage('Username not found. Please sign up.');
  }
}


function displayErrorMessage(message) {
  $('#error-message').text(message);
  console.log(message)
}


$(document).ready(function () {
  $('#signUp').click(signUp);
  $('#logIn').click(logIn);
})


/********** randomize movie  **********/

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var randomMovie = () => {
  $("#movies").empty()
  var randomIndex = getRandomInt(movies.length)
  var randomMovie = movies[randomIndex]
  display(randomMovie, "movies")
}

$('#random-button').click(randomMovie)

/********* display movie ************/
var display = (movie, divId) => {
  var x = movie.id
  $(`#${divId}`).append(`<div class="card" >
    <img src=${movie.image} alt="Movie Image" />
    <div class="card-content">
      <div  class="title">${movie.title}</div>
      <div class="rating">${movie.genre}</div>
      <div class="duration">${movie.duration}</div>
      <a style onclick="addToWatchList('${x}')">Add to My Watchlist</a>
      <div class="more-info">
        <p><strong>Director:</strong>${movie.director}</p>
        <p>
          <strong>Cast:</strong>${(movie.cast).join("-")}
        </p>
        <p>
          <strong >Description:</strong>${movie.info}
        </p>
      </div>
      <div class="more-info-btn" id="${x}">More Info</div>
    </div>
  </div>
</div>`)


}

var newMovie

/**************************** Display all movies********************************/
var displayAll = (list, divId) => {
  $(".movie").empty()
  list.forEach((element, index) => {
    display(element, divId )
  })
}

/****************************Filter by Genre (test) **************************************/

var filter = (genreinput) => {
  var filtered = movies.filter(element => {
    console.log(element.genre);
    return element.genre.toLowerCase() === genreinput.toLowerCase()
  })
  $("#movies").empty()
  displayAll(filtered, "movies")
}

/***************************** Search (test)***************************************/

// $('#search').on("click", () => {
//   console.log("test");
//   var searchInput = $('#searchInput').val()
//   console.log(searchInput);
//   var filtred = movies.filter(element => {
//     var movieString = JSON.stringify(element)
//     console.log(movieString)
//       return movieString.includes(searchInput)
//   })
//   displayAll(filtred) 
// })

$('#search').click(function(e) {
  e.preventDefault()
  console.log("test search")
  var searchInput= $('#searchInput').val()
  console.log(searchInput);
  var filtred = movies.filter((element) => {
    return element.title.toLowerCase() === searchInput.toLowerCase()
  })
  console.log(filtred);
  $("#movies").empty()

  displayAll(filtred, "movies")
})



/***************************** PAGE READY *******************************/
$(document).ready(function () {
  $('#signUp').click(signUp);
  $('#logIn').click(logIn);
  $('#genre').click(function (e) {
    e.preventDefault()
    var input = $('#searchInput').val();
    filter(input)
  })
  displayAll(movies, "movies")
  $('.more-info').hide()
  $(`.more-info-btn`).click(function () {
  //  var id = document.getElementsByClassName("more-info-btn")
    var h=$(`.more-info-btn`).attr('id')
    console.log(h);
    $('.more-info').toggle()
  })
});

/************************** Add to watchList and add to my Movies***************************/

watchlist= []
myMovies=[]



var currentUser = JSON.parse(localStorage.getItem('user'))

function addToWatchList(id) {
  console.log("salem");
  var filtered = movies.filter(function(e){
    return e.id === +id
  })
  console.log(filtered[0]);
  currentUser.watchList.push(filtered[0])
  console.log(currentUser.watchList);
  displayAll(currentUser.watchList , "watchlist")
}

function addToMyLikedMovies (id) {
  console.log("salem");
  var filtered = movies.filter(function(e){
    return e.id === +id
  })
  console.log(filtered[0]);
  currentUser.myMovies.push(filtered[0])
  console.log(currentUser.myMovies);
  displayAll(currentUser.myMovies , "myMovies")
}




localStorage.getItem("user")































// $(document).ready(function(){
//   $(window).scroll(function(){
//       $('.header-bg').css("opacity", 1- $(window).scrollTop()/700)
//   })
// })






































