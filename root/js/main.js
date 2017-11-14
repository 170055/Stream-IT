var movies = ["Insurgent", "Get out", "John Wick", "Harry potter",
 "Titanic", "Baby driver", "Divergent",  "Jigsaw", "It", "Blade Runner 2049", "Murder on the Orient Express", "Geostorm", "Happy Death Day", "A Bad Moms Christmas", "Kingsman: The Golden Circle", "Atomic Blonde", " Suburbicon",  "Spider-Man Homecoming", "Jungle","Star Wars" , "Flatliners", "The maze runner", "Grease", "Wonder woman",
  "Dunkirk", "Logan", "Thor", "Insidious", "Kong: Skull island", "Annabelle", "Baywatch", "The mummy", "Bad moms", "Mr Bean", "Justice league", "The lego movie", "Love and other drugs"];
//Movies needs to be added/replaced

var series = ["Star Wars", "Thor: Ragnarok"];
//seris needs to be added/replaced


var counter = 0;
var move = 0;



function main() {
  //clear
  for (var i = 0; i < 8; i++) {
    $("#con"+ i).css("background-image", 'url(' + '/' + ')');

  }

for (var i = 0; i < 8; i++) {


  (function(i) {

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(movies[i + move]) + '&apikey=90d22851').then(function(response) {


    console.log(counter);
    console.log(move +" move");

    var title = response.Title;
    var image = response.Poster;
    var genre = response.Genre;
    var imdb = response.imdbRating;
    var imdbVote = response.imdbVotes;
    var year = response.Year;
    var rated = response.Rated;
    var plot = response.Plot;


    var check = true;

    var genresl = $("#genre").val();
    console.log(response);
    //year
    if ($("#year").val() == "all") {
      if(check == true){
        check = true;
      }
    }else {
      if (year >= $("#year").val()){

        check = true;
      }else {
        check = false;
      }
    }
    //year

    //genre filter
    if ($("#genre").val() == "all") {
      if(check == true){
        check = true;
      }
    }else {
      if (genre.indexOf(genresl) != -1) {
        check = true;
      }else {
        check = false;
      }


    }

    //genre filter




    console.log(check+ " 1");
    //imdb

    if ($("#imdb").val() == "all") {
      if(check == true){
        check = true;
      }
    }else {
      if ($("#imdb").val() <= imdb-1){
        check = false;
      }else {
        if (check == false) {
          check = false;
        }else {
          check = true;
        }
      }
    }
    console.log(imdb);
    //imdb
    console.log(check+ " 2");

    //userrating ask Mike!!!!
    if ($("#userrating").val() == "all") {
      if(check == true){
        check = true;
      }
    }else {
      if ($("#userrating").val() <= imdb-1){
        check = true;
      }else {
        check = false;
      }
    }
    //userrating ask Mike!!!!
    console.log(check+ " 3");
    console.log(check+ " 4");
    if(check === true){
     $("#con"+ counter).css("background-image", 'url(' + image + ')');
     console.log("works");
     counter++;
}else {
  i = i-1;
  move++;
}
  console.log(i+move+ " data");
  console.log(move +" move");
  console.log(movies.length + " movies");
  console.log(i +" i");
  console.log(counter + " counter");
  });
})(i);
}
}
$(function() {
  $(".datainput").on('change input', function() {
    counter=0;
    move=0;
    main();
  });

});


main();
