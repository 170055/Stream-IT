$(function (){
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
      $("#error").text("Your username is missing.");
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
        $("#error").text("Oops looks like you forgot your password.")
      }

      if (attemps === 3) {
        $("#error").text("Are you sure this is your account?")
      }

      if (attemps === 4) {
        $("#error").text("Have you tried turning it on and off again?")
      }

      if (attemps > 5) {
        $("#error").text("Looks like you will need to reset your password. Please press the forgot password button above.");
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
    var name1 = $("#user-input1").val();
    var check = 1;

    if (pass1 == '') {
      check = 0;
      


    }

    if (name1 == '') {
      check = 0;



    }

    if (check === 1) {
    $(location).attr('href', 'pages/home.html');
    console.log(pass1);

  } else {
    $("#palert").show();
    $("#signup").css({
      "margin-top": "1%"
    });
    $(".text-right").css({
      "margin-top": "5%"
    });
  }
  }); //

  //tab switch
  $("#in").on("click", function(event) {
    event.preventDefault();

    $("#up-con").hide();
    $("#in-con").show();



  });

  $("#up").on("click", function(event) {
    event.preventDefault();

    $("#in-con").hide();
    $("#up-con").show();



  });
  //


});
