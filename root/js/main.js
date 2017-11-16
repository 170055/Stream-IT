var movies = ["Insurgent", "Alien: Covenant", "John Wick", "Harry potter", "Titanic", "Baby driver", "Hunger Games", "Jigsaw", "It", "Blade Runner 2049", "Murder on the Orient Express", "Geostorm", "Happy Death Day", "Spider-Man Homecoming", "Jungle", "Star Wars", "Flatliners", "The maze runner", "Grease", "Dunkirk", "Logan", "Thor", "Insidious", "Kong: Skull island", "Annabelle", "Baywatch", "Okja", "Lady Bird", "Cars 3", "The Foreigner", "Zootopia", "Moana", "Deadpool", "Suicide Squad", "Doctor Strange", "Finding Dory", "Nocturnal Animals", "Elle", "The Secret Life of Pets", "Frozen", "How to Train your Dragon 2", "The Other Women", "Vampire Academy", "Unbroken", "22 Jump Street", "Rio 2", "The Dark Knight", "Iron Man", "Wall-e", "Slumdog Millionaire", "Kung Fu Panda", "Quantum of Solace", "Hancock", "The Incredible Hulk", "Step Brothers", "Mystic River", "School of Rock", "Fury", "Sleepwalkers", "Seven", "Toy Story", "Clueless", "Jumanji", "Heat", "Golden Eye", "Beetlejuice", "Midnight Run", "The Accused", "A nightmare on Elm street", "Mississippi Burning", "Willow", "The Stepford Wives", "Monty Python and the Holy Grail", "Barry Lyndon", "Love and Death", "Rollerball", "Night moves", "Death Race 2000", "The Passenger", "Bite The Bullet", "A Boy and his Dog", "Bonnie and Clyde", "Camelot", "Casino Royale", "Cool Hand Luke", "Hombre", "In Cold Blood", "Wait Until Dark", "The Taming of the Shrew", "Hour of the Gun", "Tobruk", "Playtime", "Vertigo", "On the Waterfront", "Ben-hur", "Rebel without a cause", "All about eve", "Touch of evil"];
//Movies needs to be added/replaced

var series = ["American Horror Story", "Game of Thrones", "The Vampire diaries", "Breaking bad", "Grey's Anatomy", "Teen wolf", "Pretty little liars", "Da Vinci's Demons", "Devious maids", "That 70's Show", "Stranger Things", "13 Reasons why", "The Walking Dead", "The Flash", "House of cards", "Shameless", "iZombie", "The Good Wives", "How I Met Your Mother", "Penny Dreadful", "Arrow", "This us Us", "Lucifer", "Outlander", "Vikings", "The Blacklist", "Criminal Minds", "Mr.Robert", "Blindspot", "Friends", "The Sinner", "The Big Bang Theory", "Dark", "NCIS", "The Good Doctor", "Suits", "Big Mouth", "Once Upon A Time", "Westworlds", "Modern Family", "The Night Of", "Supergirl", "Black Mirror", "Futurama", "Blue Montain State", "Nikita", "True Blood", "Archer", "Raising Hope", "Better Off Ted", "Prison Break", "Mike And Molly", "The Night Shift", "The Flintstones", "The Andy Griffin show", "Batman", "Star Trek:The Original series", "The Addams Family", "My three sons", "Get smart", "The Beverly Hillbillies", "Bewitched", "The Brady Bunch", "The Danny Thomas Show", "Dragnet", "The Munsters", "Gunsmoke", "Hogan's Heroes", "Green Acres", "Angel", "Route 66", "Alf", "The A-Team", "Cheers", "Miami Vice", "Knight Rider", "Full House", "The Cosby Show", "Dynasty", "Malcolm In The Middle", "Buffy The Vampire", "Gilmore Girls", "Survivor", "Freeks and Geeks", "The West Wing", "Oz", "Big Brother", "The Odd Copule", "Adam-12", "Bonanza", "All my children", "Ironside", "Dragnet", "The Flip Wilson Show", "Night Gallery", "60 Minutes", "McCloud", "Doctor who"];
//seris needs to be added/

var watch = ["The Good Doctor", "Game of Thrones","Midnight Run", "The Accused", "A nightmare on Elm street", "Buffy The Vampire", "Gilmore Girls", "Survivor", "Freeks and Geeks" , "Night Gallery", "60 Minutes", "McCloud", "Doctor who" ];
//watchlist array


var counter = 0;
var con = 0;
var move = 0;
var content;

var title = '';
var image = '';
var genre = '';
var imdb = '';
var imdbVote = '';
var year = '';
var rated = '';
var plot = '';
var i = 0;



function main() {
  var check = true;


  if ($(document).find("title").text() == "Series") {
    content = series[counter]; //Load Series array
  }

  if ($(document).find("title").text() == "Movies") {
    content = movies[counter]; //Load Movies array
  }

  if ($(document).find("title").text() == "Watch List") {
    content = watch[counter]; //Load Movies array+

    console.log(content);

    $.ajax({
      url: 'https://www.omdbapi.com/?t=' + encodeURI(content) + '&apikey=90d22851',
      dataType: "json",
      async: false
    }).done(function(response) {

      image = response.Poster;
      title = response.Title;
      genre = response.Genre;
      imdb = response.imdbRating;
      imdbVote = response.imdbVotes;
      year = response.Year;
      rated = response.Rated;
      plot = response.Plot;

    }).then(function() {
      //add content
      $("#grey-con").append("<div id=" + "con" + counter + " class='datadisplay col-xs-10 col-sm-5 col-md-3 col-lg-3'></div>");

      $("#con" + counter).append("<div class='overlay'> <div class='movie-content' > <div class='play-btn'></div> <div class='more-info' data-title='" + title + "'></div> <div class='remove-btn' id='remove' data-title='" + title + "'></div> </div> </div>");

      $("#con" + counter).css("background-image", 'url(' + image + ')');

      //add content
  });
}else{


  $.ajax({
    url: 'https://www.omdbapi.com/?t=' + encodeURI(content) + '&apikey=90d22851',
    dataType: "json",
    async: false
  }).done(function(response) {

    image = response.Poster;
    title = response.Title;
    genre = response.Genre;
    imdb = response.imdbRating;
    imdbVote = response.imdbVotes;
    year = response.Year;
    rated = response.Rated;
    plot = response.Plot;



  }).then(function() {

    var all = true;

    if ($("#imdb").val() !== "all") {
      all = false;
    }
    if ($("#genre").val() !== "all") {
      all = false;
    }
    if ($("#userrating").val() !== "all") {
      all = false;
    }
    if ($("#year").val() !== "all") {
      all = false;
    }

    var genresl = $("#genre").val();


    if (all === true) {

      //add content
      $("#grey-con").append("<div id=" + "con" + counter + " class='datadisplay col-xs-10 col-sm-5 col-md-3 col-lg-3'></div>");

      $("#con" + counter).append("<div class='overlay'> <div class='movie-content' > <div class='play-btn'></div> <div class='more-info' data-title='" + title + "'></div> <div class='addwatchlist' data-title='" + title + "'></div> </div> </div>");

      //add content

      $("#con" + counter).css("background-image", 'url(' + image + ')');

    } else {

      //genre filter

      if ($("#genre").val() == "all" || genre.indexOf(genresl) != -1) {

      } else {
        check = false;
      }


      var yearI = $("#year").val();

      //genre filter

      //year
      if (yearI == "all" || (yearI > year - 10 && yearI < year + 10)) {

      } else {
        check = false;

      }
      //year
      var imdb2 = Math.round(imdb).toFixed();


      //imdb

      if ($("#imdb").val() == "all" || $("#imdb").val() <= imdb2 || $("#imdb").val() == imdb2) {

      } else {

        check = false;
      }



      //imdb



      var urating = Math.floor((Math.random() * 6) + 1);
      //userrating ask Mike!!!!
      if ($("#userrating").val() == "all") {

      } else {
        if ($("#userrating").val() <= urating - 1) {

        } else {
          check = false;
        }
      }
      //userrating ask Mike!!!!




      if (check === true) {

        //add content
        $("#grey-con").append("<div id=" + "con" + counter + " class='datadisplay col-xs-10 col-sm-5 col-md-3 col-lg-3'></div>");

        $("#con" + counter).append("<div class='overlay'> <div class='movie-content' > <div class='play-btn'></div> <div class='more-info'  data-title='" + title + "'></div> <div class='addwatchlist' data-title='" + title + "'></div> </div> </div>");

        //add content

        $("#con" + counter).css("background-image", 'url(' + image + ')');

      } else {
        con = con - 1;
        i = i - 1;

      }


    }
  });
}
}

function clear() {
  i = 0;
  counter = 0;
  con = 0;

  //clear
  $('#grey-con').empty();
}

function loop() {


  clear();


  while (i < 8) {

    main();
    counter++;
    con++;
    i++;

    if ($(document).find("title").text() == "Series") {
      if (series.length < counter) {
        console.log("Max series");
        i = 8;
      }
    }

    if ($(document).find("title").text() == "Movies") {


      if (movies.length < counter) {
        console.log("Max movies");
        i = 8;
      }

    }

    if ($(document).find("title").text() == "Watch List") {
      if (watch.length < counter) {
        console.log("Max content");
        i = 7;
      }
    }


  }



}


$(function() {
  $(".datainput").on('change input', function() {
    clear();
    loop();
  });
});

$(function() {
  // search bar modal
  $("#searchButton").click(function(event) {
    event.preventDefault();
    $('#searchModal').modal('show');
  });



  // details modal
  $(document).on('click', '.more-info', function(event) {

    event.preventDefault();
    $('#detailsModal').modal('show');



    $.ajax({
      url: 'https://www.omdbapi.com/?t=' + encodeURI($(this).data("title")) + '&apikey=90d22851',
      dataType: "json",
      async: false
    }).done(function(response) {

      var title2 = response.Title;


      $('#modaltitle').text(title2);

      $('#modalposter').css("background-image", 'url(' + response.Poster + ')');
      $('#modalgenre').text("Genre: " + response.Genre);
      $('#modalimdb').text("IMDB: " + response.imdbRating);
      $('#modaldirector').text("Director: " + response.Director);
      $('#modalplot').text("Plot: " + response.Plot);
      $('#modalruntime').text("Runtime: " + response.Runtime);

      image = response.Poster;


    }).then(function() {


    });


  });



  loop();


  $("#watch-now").click(function(event) {
    event.preventDefault();

    $('#detailsModal').modal("hide");

    $('#watch-modal').modal('show');

  });

   $("#play-button").click(function(event) {
    event.preventDefault();

    $('#detailsModal').modal("hide");

    $('#watch-modal').modal('show');

  });

  $(document).on('click', '.play-btn', function(event) {

    event.preventDefault();



    $('#watch-modal').modal('show');

  });


$(document).on('click', '.remove-btn', function(event) {

    event.preventDefault();




    $(this).parent().parent().parent().hide();


  });

  $(document).on('click', '.datadisplay', function(event) {

      event.preventDefault();

      





    });

});


//Local Storage


//Local Storage
