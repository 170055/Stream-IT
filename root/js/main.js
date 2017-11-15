var movies = ["Insurgent", "Alien: Covenant", "John Wick", "Harry potter", "Titanic", "Baby driver", "Hunger Games", "Jigsaw", "It", "Blade Runner 2049", "Murder on the Orient Express", "Geostorm", "Happy Death Day", "A Bad Moms Christmas", "Kingsman: The Golden Circle", "Atomic Blonde", " Suburbicon", "Spider-Man Homecoming", "Jungle", "Star Wars", "Flatliners", "The maze runner", "Grease", "Wonder woman", "Dunkirk", "Logan", "Thor", "Insidious", "Kong: Skull island", "Annabelle", "Baywatch", "The mummy", "Bad moms", "Mr Bean", "Justice league", "The lego movie", "Love and other drugs"];
//Movies needs to be added/replaced

var series = ["Star Wars", "Thor: Ragnarok"];
//seris needs to be added/replaced


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

  console.log(counter + " counter");
  console.log(con + " con");
  console.log(i + " I");

  if ($(document).find("title").text() == "Watch List") {

  }

  content = movies[counter]; //move later

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

    console.log("Title:" + title);
    console.log("Genre:" + genre);
    console.log("IMDB:" + imdb);

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

      $("#con" + counter).append("<div class='overlay'> <div class='movie-content'> <div class='play-btn'></div> <div class='more-info'></div> <div class='addwatchlist'></div> </div> </div>");

      //add content

      $("#con" + counter).css("background-image", 'url(' + image + ')');

    } else {

      console.log(genre + " log");



      //genre filter

      if ($("#genre").val() == "all" || genre.indexOf(genresl) != -1) {
        console.log("Genre true");
      } else {
        console.log("Genre false");
        check = false;
      }




      //genre filter

      //year
      if ($("#year").val() == "all" || year >= $("#year").val()) {


      } else {
        check = false;

      }
      //year







      //imdb
      if ($("#imdb").val() == "all" || $("#imdb").val() < imdb) {
        console.log("IMDB True");

      } else {

        console.log("IMDB False");

        check = false;
      }



      //imdb

      console.log(check);


      //userrating ask Mike!!!!
      if ($("#userrating").val() == "all") {
        if (check == true) {
          check = true;
        }
      } else {
        if ($("#userrating").val() <= imdb - 1) {
          check = true;
        } else {
          check = false;
        }
      }
      //userrating ask Mike!!!!




      if (check === true) {

        //add content
        $("#grey-con").append("<div id=" + "con" + counter + " class='datadisplay col-xs-10 col-sm-5 col-md-3 col-lg-3'></div>");

        $("#con" + counter).append("<div class='overlay'> <div class='movie-content'> <div class='play-btn'></div> <div class='more-info'></div> <div class='addwatchlist'></div> </div> </div>");

        //add content

        $("#con" + counter).css("background-image", 'url(' + image + ')');

      } else {
          con= con -1;
          i = i - 1;

      }


    }
  });

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

    if(movies.length < counter ){
      console.log("Max movies");
      i = 8;
    }

  }



};


$(function() {
  $(".datainput").on('change input', function() {
    console.clear();
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

  loop();


});
