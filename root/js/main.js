function omdbCall() {


  var counter=0;



  for (var i = 0; i < 8; i++) {
    var movies = ["Star Wars", "Game of Thrones"];
    var movie = movies[counter];
    console.log(counter+" test");



  $.getJSON('https://www.omdbapi.com/?t='+ encodeURI(movie)+ '&apikey=90d22851').then(function(response){
      var image = response.Poster;
      console.log(response);



        console.log(i);

        if(image !== "N/A"){

          $("#con"+1).css("background-image", 'url(' + image + ')');

        }





  });

counter++;



}
}

omdbCall();
