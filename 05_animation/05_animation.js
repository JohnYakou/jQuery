// console.log("coucou animation");

$(function () {
  // ----------- EFFET DE FONDU JQUERY
  //   $("#b1").click(function () === $("#b1").on("click", function())
  $("#b1").click(function () {
    // le temps en milliseconde
    $("#h1Fondu").fadeOut(2000);
  });

  $("#b2").click(function () {
    $("#h1Fondu").fadeIn(2000);
  });

  //   Toggle fait Out et In
  $("#b3").click(function () {
    $("#h1Fondu").fadeToggle(2000);
  });

  $("#b4").click(function () {
    // 0.3 => fondu jusqu'à un niveau d'opacité
    $("#h1Fondu").fadeTo(100, 0.3);
  });

  //   ------------- EFFET DE SLIDE (GLISSEMENT) ----------------
  $("#b1Slide").click(function () {
    $("#h1Slide").slideUp(500);
  });

  $("#b2Slide").click(function () {
    $("#h1Slide").slideDown(500);
  });

  // Toggle fait Up et Down
  $("#b3Slide").click(function () {
    $("#h1Slide").slideToggle(500);
  });

  //   ------------------- SHOW() & HIDE() -----------------
  //   Cacher le titre
  $("#b1Hide").click(function () {
    $("#h1HideShow").hide(500, "linear", function () {
      alert("Titre bien caché !");
    });
  });

  // Rendre le titre visible
  $("#b2Show").click(function () {
    $("#h1HideShow").show(500, "linear", function () {
      alert("Titre bien visible !");
    });
  });

  // ------------------ TOGGLE() -----------------
  $("#b1Toggle").click(function () {
    $("#h1Toggle").toggle();
  });

  $("#b2Toggle").click(function () {
    $("#h2Toggle").toggle(500, function () {
      alert("Etat de visibilité changé !");
    });
  });

  // --------------- ANIMATE() => ANIMATION -------------------
  $("#b1Animate").click(function () {
    $("#h1Animate").animate({ width: "-=20%" }, 1000);
  });

  $("#b2Animate").click(function () {
    $("#h1Animate").animate({ height: "toggle" });
  });
});
