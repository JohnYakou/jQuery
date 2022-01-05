// ---------- EX 1 / BON ----------
$(".zone1").on("click", function () {
  $("h1").css("color", "green");
  $("h1").css("font-size", "80");
  $("h1").css("text-align", "center");
});

// AUTRE FACON DE FAIRE
$(".zone1").on("click", function () {
  $("h1").css({ textAlign: "center", fontSize: "80px", color: "green" });
});

// ---------- EX 2 / BON ----------
$(".zone2").on("click", function () {
  $("body").css("background", "blue");
});

// ---------- EX 3 / BON ----------
// e = event / submit = recharge de la page
$(".zone3").on("click", function (event) {
  // permet de ne pas recharger la page
  event.preventDefault();
  $("body").css("background", "red");
});

// ---------- EX 4 / CORRECTION ----------
/* $(".zone4").on("change", function () {
  console.log(e);
  let couleur = $(".zone4").val();
  console.log(couleur);
  // change la couleur sans appuyer sur "valider"
  $(".zone5").on("click", function (e) {
    e.preventDefault();
    $("body").css("background", couleur);
  });
}); */

// UNE AUTRE FACON DE FAIRE
$(".zone5").on("click", function (pageChargement) {
  pageChargement.preventDefault();
  let typecolor = $(".zone4").val();
  console.log(typecolor);
  $("body").css("background", typecolor);
});

// ---------- EX 5 / CORRECTION ----------
$(".zone7").on("click", function (e) {
  e.preventDefault();
  let colorSelect = $(".zone6").find("option:selected").text();
  console.log(colorSelect);
  $("body").css("background", colorSelect);
});

// Ne marche pas ?
/* let colorSelect = $(".zone6").find("option:selected").text();
console.log(colorSelect);
$("body").css("background", colorSelect);

$(".zone6").on("change", function () {
  console.log($(this));
  console.log(colorSelected2);

  $(".zone7").on("click", function (e) {
    e.preventDefault();
    $("body").css("background", colorSelected);
  });
}); */

// ---------- EX 6 ----------
$(".zone8").on("click", function () {
  $(".zone8").css("background", "yellow");
});

/* $(".zone8").on("click", function () {
  $("body").css("background", "yellow");
}); */

// ---------- EX 7 ----------
$(".zone9").on("click", function () {
  console.log($(".zone9"));
  console.log(this);
  $(".zone9").css("background", "yellow");
  $(this).css("background", "green");
});
