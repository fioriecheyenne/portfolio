var title = $("#title");
var works = $(".works");
var about = $(".about");
var driftc = $(".driftcontent");
var drift = $("#drift");
var giphy = $("#budgeti");
var giphin = $(".budgetbuddyinfo");
var triviain = $(".triviainfo");
var trivia = $("#triviai");
var home = $(".fa-home");
var topLnav = $(".links");
var contact = $(".contactform");
var atMe = $("#at");
var atMe2 = $("#at2");
var descrip = $(".projectinfo");

var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.body.style.backgroundColor = "yellow";
    $("#button").on("click", function() {
      title.fadeToggle(900);
      trianglesSm();
      showWorks();
    });

    function showWorks() {
      works.fadeToggle(5000);
      $(".descript-head").show();
    }

    function trianglesSm() {
      $(".splitleft").fadeToggle(3000);

      $(".splitright").fadeToggle(3000);

      $(".links").fadeToggle("5000");
      $(".links").css({
        position: "absolute",
        bottom: "0",
        left: "0",
        "margin-bottom": "5px",
        "margin-left": "10px",
        "font-size": "1.8em",
        "letter-spacing": "10px"
      });
    }
    drift.on("click", function() {
      giphin.hide();
      triviain.hide();
      driftc.show();
      descrip.show();
    });
    giphy.on("click", function() {
      giphin.show();
      driftc.hide();
      triviain.hide();
      descrip.show();
    });

    //show da trivia descrip
    trivia.on("click", function() {
      triviain.show();
      driftc.hide();
      giphin.hide();
      descrip.show();
    });

    //do the things when ya click the home button
    home.on("click", function() {
      contact.hide();
      $(".descript-head").hide();
      title.fadeToggle(4000);
      topLnav.fadeOut(1000);
      descrip.hide();

      works.hide();
    });

    //back to upside-down triangle display
    function triangles2Sm() {
      $(".splitleft").css({
        transform: "skewY(10deg)",
        transition: "transform 2s",
        "transform-origin": "bottom left"
      });
      $(".splitright").css({
        transform: "skewY(-10deg)",
        transition: "transform 2s",
        "transform-origin": "bottom right"
      });
    }
    atMe.on("click", function() {
      contact.fadeToggle(3000);
      title.hide();
      works.hide();
      triangles3();
      descrip.hide();
      $(".descript-head").hide();
    });

    function triangles3() {
      $(".splitleft").css({
        transform: "skewY(20deg)",
        transition: "transform 2s",
        "transform-origin": "center"
      });
      $(".splitright").css({
        display: "none"
        // ,
        // "transition": "transform 1s",
        // "transform-origin": "center"
      });
    }

    function hideContact() {
      contact.hide();
    }
  } else {
    //see projects page
    $("#button").on("click", function() {
      title.fadeToggle(900);
      triangles();
      showWorks();
    });

    //show the project things
    function showWorks() {
      works.fadeToggle(5000);
    }
    //hide the project things
    function hideWorks() {
      works.hide();
    }

    //upright triangle display
    function triangles() {
      $(".splitleft").css({
        transform: "skewY(315deg)",
        transition: "transform 2s",
        "transform-origin": "bottom left"
      });
      $(".splitright").css({
        transform: "skewY(-315deg)",
        transition: "transform 2s",
        "transform-origin": "bottom right"
      });

      //top left nav
      $(".links").fadeToggle("5000");
      $(".links").css({
        position: "absolute",
        top: "0",
        left: "0",
        "margin-top": "0px",
        "margin-left": "10px",
        "font-size": "2em",
        "letter-spacing": "10px"
      });
    }

    // show drift descrip
    drift.on("click", function() {
      giphin.hide();
      triviain.hide();
      driftc.show();
      descrip.show();
    });

    // show the giphy descrip
    giphy.on("click", function() {
      giphin.show();
      driftc.hide();
      triviain.hide();
      descrip.show();
    });

    //show da trivia descrip
    trivia.on("click", function() {
      triviain.show();
      driftc.hide();
      giphin.hide();
      descrip.show();
    });

    //do the things when ya click the home button
    home.on("click", function() {
      contact.hide();
      $(".splitright").css({
        display: "block"
      });
      //   giphin.hide();
      //   driftc.hide();
      //   triviain.hide();
      title.fadeToggle(4000);
      topLnav.fadeOut(1000);
      descrip.hide();
      triangles2();
      works.hide();
    });

    //back to upside-down triangle display
    function triangles2() {
      $(".splitleft").css({
        transform: "skewY(50deg)",
        transition: "transform 2s",
        "transform-origin": "bottom left"
      });
      $(".splitright").css({
        transform: "skewY(-50deg)",
        transition: "transform 2s",
        "transform-origin": "bottom right"
      });
    }
    atMe.on("click", function() {
      contact.fadeToggle(3000);
      title.hide();
      works.hide();
      triangles3();
      descrip.hide();
    });

    atMe2.on("click", function() {});

    function triangles3() {
      $(".splitleft").css({
        transform: "skewY(20deg)",
        transition: "transform 2s",
        "transform-origin": "center"
      });
      $(".splitright").css({
        display: "none"
        // ,
        // "transition": "transform 1s",
        // "transform-origin": "center"
      });
    }

    function hideContact() {
      contact.hide();
    }
    // slashy bar in center from top left to bottome right
    //   $(".splitleft").css({
    // "transform": "skewY(20deg)",
    //     "transition": "transform 2s",
    //         "transform-origin": "center"
    //     })
  }
}
