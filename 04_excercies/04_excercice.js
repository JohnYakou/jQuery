// EX 1
$(".zone1").on("click", function () {
  $("h1").css("color", "green");
  $("h1").css("font-size", "80");
  $("h1").css("text-align", "center");
});

// EX 2
$(".zone2").on("click", function () {
  $("body").css("background", "blue");
});

// EX 3
$(".zone3").on("click", function (event) {
  event.preventDefault();
  $("body").css("background", "red");
});

// EX 4
$(".zone3").on("click", function () {
  $("body").css("background");
});

// EX 6
$(".zone8").on("click");
