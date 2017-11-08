var movies = ["Star Wars", "Thor: Ragnarok", "Arrival", "Harry potter", "Titanic", "Baby driver", "insurgent", "La la land", "Jigsaw", "It", "Blade Runner 2049", "Murder on the Orient Express", "Geostorm", "Happy Death Day", "A Bad Moms Christmas", "Kingsman: The Golden Circle", "Atomic Blonde", " Suburbicon", "1922", "La la land", "Spider-Man Homecoming", "Jungle", "The Snowman"];
//Movies needs to be added/replaced

function main() {
  for (var i = 0; i < 8; i++) {
    $("#con"+ i).css("background-image", 'url(' + '/' + ')');

  }

  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(movies[1]) + '&apikey=90d22851').then(function(response) {



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


    //genre filter
    if ($("#genre").val() == "all") {
      if(check == true){
        check = true;
      }
    }else {
      check = false;

      if (genre.indexOf(genresl) != -1) {
        console.log(genresl + " found");

        check = true;

      }else {
        check = false;
      }

    }

    //genre filter

    console.log(check+ " 1");

    if ($("#imdb").val() == "all") {
      if(check == true){
        check = true;
      }
    }else {
      check = false;
    }

    if ($("#userrating").val() == "all") {
      if(check == true){
        check = true;
      }
    }else {
      check = false;
    }

    if ($("#year").val() == "all") {
      if(check == true){
        check = true;
      }
    }else {
      check = false;
    }

















    if(check === true){
    if(image !== "N/A"){

     $("#con"+ 1).css("background-image", 'url(' + image + ')');

    }
}

  });




  //}

}

$(function() {

  $(".datainput").on('change input', function() {
    main();
  });

});


main();
