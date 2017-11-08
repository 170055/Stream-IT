var movies=["Star Wars", "Thor: Ragnarok", "Arrival", "Harry potter", "Titanic", "Baby driver", "insurgent", "La la land", "Jigsaw",  "It", "Blade Runner 2049", "Murder on the Orient Express",  "Geostorm", "Happy Death Day", "A Bad Moms Christmas", "Kingsman: The Golden Circle", "Atomic Blonde", " Suburbicon", "1922", "La la land", "Spider-Man Homecoming", "Jungle", "The Snowman"];
//Movies needs to be added/replaced

for (var i = 0; i < 8; i++) {

  $.getJSON('https://www.omdbapi.com/?t='+ encodeURI(movies[i])+ '&apikey=90d22851').then(function(response){
      console.log(response);
      var title = response.Title;
      var image = response.Poster;
      var genre = response.genre;
      var imdb = response.imdbRating;
      var imdbVote = response.imdbVotes;
      var year = response.Year;
      var rated = response.Rated;
      var plot = response.Plot;





    if(image !== "N/A"){

      $("#con"+ 1).css("background-image", 'url(' + image + ')');

    }


    });






}
