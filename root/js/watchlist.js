$(function (){
  console.log("Ready");


      // init bootpag
      $('#page-selection').bootpag({
          total: 10
      }).on("page", function(event, /* page number here */ num){
           $("#selector").html(""); 
      });


});
