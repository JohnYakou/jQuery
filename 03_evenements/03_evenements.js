// console.log("Bonjour");

// ------------------------- EVENEMENT MOUSEOVER
$(function () {
  // Ici mon code jQuery
  //   --------------------- EVEMENT MOUSEOVER ------------------
  $(".zone1").on("mouseover", function () {
    $(this).css("background", "IndianRed"); // this = .zone1
    // $(".zone1").css("background", "red");
    $("#info").text("Je suis dans la zone 1.");
  });

  //   ---------------------- EVENEMENT MOUSEMOVE -----------------
  $(".zone2").on("mousemove", function (event) {
    $(this).text("pageX : " + event.pageX + ", pageY : " + event.pageY);
    $("#info").text("Je suis dans la zone 2.");
  });

  //   ---------------------- EVENEMENT MOUSEOUT ----------------
  $(".zone3").on("mouseout", function () {
    $(this).css("background", "IndianRed");
    $("#info").text("Je suis sortie de la zone 3.");
  });

  //   ------------------ EVENEMENT MOUSEENTER & MOUSELEAVE ----------------
  $(".zone4").on("mouseenter", function () {
    $(this).css("background", "IndianRed");
    $("#info").text("Je suis entré dans la zone 4.");
  });

  $(".zone4").on("mouseleave", function () {
    $(this).css("background", "khaki");
    $("#info").text("Je suis sortie de la zone 4.");
  });

  //   ------------------ EVENEMENT MOUSEEUP & MOUSEDOWN ----------------

  // au relachement du bouton de la souris
  $(".zone5").on("mouseup", function () {
    $(this).css("background", "IndianRed");
    $("#info").text("Je suis entré dans la zone 5.");
  });

  $(".zone5").on("mousedown", function () {
    // lorsque le bouton de la souris est enfoncé
    $(this).css("background", "green");
    $("#info").text("Je suis entré dans la zone 5.");
  });

  $(".zone6").on("mouseup", function () {
    $(this).css("background", "khaki");
    $("#info").text("Je suis sortie de la zone 6.");
  });

  $(".zone6").on("mousedown", function () {
    $(this).css("background", "red");
    $("#info").text("Je suis sortie de la zone 6.");
  });

  //   ------------------ EVENEMENT ONCLICK ----------------

  $(".zone7").on("click", function () {
    //   au relachement du bouton de la souris
    $(this).css("background", "IndianRed");
    $("#info").text("Je suis entré dans la zone 7.");
  });

  //   ------------------ EVENEMENT DBLCLICK === DOUBLE CLICK ----------------

  $(".zone8").on("dblclick", function () {
    //   au relachement du bouton de la souris
    $(this).css("background", "IndianRed");
    $("#info").text("Je suis entré dans la zone 8.");
  });

  //   ------------------ EVENEMENT CLICK DROIT ----------------

  $(".zone9").contextmenu(function () {
    $(this).css("background", "IndianRed");
    $("#info").text("Je suis entré dans la zone 9.");
  });

  //----------------------------- EVENEMENT BLUR (flou, en anglais) ----------
  // Lorsque nous allons clicker ailleurs après avoir clické sur l'élément | Je clique à l'intérieur, puis à l'extérieur
  $(".zone10").on("blur", function () {
    $(this).css("background", "IndianRed");
    $("#info").text("Je suis entré dans la zone 10.");
  });

  //   ------------------ EVENEMENT CHANGE ------------------
  //   Lorsque nous allons changer l'option d'un élément select
  //   La couleur change lorsque je choisis un élément proposé
  $(".zone11").on("change", function () {
    $(this).css("background", "IndianRed");
    $("#info").text("Je suis dans la zone 11.");
  });

  //   ------------------ EVENEMENT KEYDOWN ------------------
  //   La couleur change lorsque j'écrit quelque chose
  $(".zone12").on("keydown", function () {
    $(this).css("background", "IndianRed");
    $("#info").text("Je suis dans la zone 12.");
  });

  //   ------------------ EVENEMENT KEYUP ------------------
  //   La couleur change lorsque j'arrete d'écrire
  $(".zone12").on("keyup", function () {
    $(this).css("background", "HotPink");
    $("#info").text("Je suis dans la zone 12.");
  });

  //   ------------------ EVENEMENT AU SCROLL ------------------
  $(window).on("scroll", function () {
    $("#info").css("background", "LightGreen");
    $("#info").text("Je scroll");
  });
});
