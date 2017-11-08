function omdbCall(title, pos) {
  $.getJSON('https://www.omdbapi.com/?t='+ encodeURI(title)+ '&apikey=90d22851').then(function(response){
      console.log(response);
      var image = response.Poster;

        if(image !== "N/A"){

          $("#con"+ pos).css("background-image", 'url(' + image + ')');

        }
  });

}

var movies=["Star Wars", "Thor: Ragnarok", "Arrival", "Harry potter", "Titanic", "Baby driver", "insurgent", "La la land", "Jigsaw",  "It", "Blade Runner 2049", "Murder on the Orient Express",  "Geostorm", "Happy Death Day", "A Bad Moms Christmas", "Kingsman: The Golden Circle", "Atomic Blonde", " Suburbicon", "1922", "La la land", "Spider-Man Homecoming", "Jungle", "The Snowman"]; //Movies needs to be added/replaced

for (var i = 0; i < 8; i++) {


    omdbCall(movies[i+14], i);


}
