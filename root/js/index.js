$(function() {
  console.log("Ready");
  var attemps = 0;
  $("#error").hide();




  //controls basic authentication

  $("#submit").on("click", function(event) {
    event.preventDefault();

    var nameInput = $("#user-input").val();
    var passInput = $("#password-input").val();
    var failed = 1;



    if (nameInput == "Mike") {
      if (passInput == "rocks") {
        $(location).attr('href', 'pages/home.html');
        failed = 0;
      }
    }

    if (nameInput == "Leo") {
      if (passInput == "rocks") {
        $(location).attr('href', 'pages/home.html');
        failed = 0;
      }
    }

    if (nameInput == "Michael") {
      if (passInput == "rocks") {
        $(location).attr('href', 'pages/home.html');
        failed = 0;
      }
    }

    if (nameInput == "Andrea Wilkins") {
      if (passInput == "Kyla") {
        $(location).attr('href', 'pages/home.html');
        failed = 0;
      }
    }
    if (nameInput == "Kyla McGee") {
      if (passInput == "Andrea") {
        $(location).attr('href', 'pages/home.html');
        failed = 0;
      }
    }

    if (nameInput == "") {
      $(".text-right").css({
        "margin-top": "4%"
      });
      $("#error").show();
      $("#error").text("Wow! Where is your name?");
      failed = 0;
      attemps = 0;
    }

    if (failed === 1) {
      $("#error").show();
      attemps = attemps + 1;
      $(".text-right").css({
        "margin-top": "4%"
      });

      if (attemps === 2) {
        $("#error").text("Oops looks like you forgot your password....")
      }

      if (attemps === 2) {
        $("#error").text("Maybe you should try thinking harder...")
      }

      if (attemps === 3) {
        $("#error").text("Are you sure this is your account???")
      }

      if (attemps === 4) {
        $("#error").text("Have you tried turning it off and on again?")
      }

      if (attemps === 5) {
        $("#error").text("Maybe this isn't meant to be?..")
      }

      if (attemps > 5) {
        $("#error").text("Looks like you would need to reset your password... Please press forgot password. ;)");
        $(".text-right").css({
          "margin-top": "1%"
        });
      }


    }

  }); //

  //forgot/sneak password script

  $("#sneak").on("click", function(event) {
    event.preventDefault();
    $(location).attr('href', 'pages/home.html');
  }); //

  //signup

  $("#palert").hide();
  $("#up-con").hide();


  $("#signup").on("click", function(event) {
    event.preventDefault();

    var pass1 = $("#password-input1").val();

    var nameInput = $("#user-input").val();

    console.log(pass1);









  }); //

  //tab switch
  $(".sign1").on("click", function(event) {
    event.preventDefault();

    console.log("111");

  });
  //


});
