$(function(){
    console.log("Ready");

      $("#submit").on("click", function(event){
          event.preventDefault();

          var nameInput = $("#user-input").val();
          var passInput = $("#password-input").val();


          if ( nameInput == "Mike"){
            if (passInput == "rocks"){
              $(location).attr('href', 'pages/home.html');
            }
          } else {
            console.log("Username or Password wrong");
          }


      });

});
