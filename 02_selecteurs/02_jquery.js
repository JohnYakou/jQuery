// console.log("jquery est ici !");
// $(document).ready(function () {});
// une autre façon d'écrire la fonction d'attente de chargement de la page
$(function () {
  // ------------------------- SELECTION BALISE -------------------------
  // ici tout mon code jquery
  //   $ permet d'attraper un élément
  let maBaliseSpan = $("span");
  console.log(maBaliseSpan);
  $(maBaliseSpan).css("color", "purple");
  maBaliseSpan.css("background", "red");

  // ------------------------- SELECTION PAR ID -------------------------
  let monID = $("#masection");
  console.log(monID);
  $(monID).css("color", "red");

  // -------------------------SELECTION CLASS -------------------------
  let maClass = $(".voiture"); // je sélectionne les éléments .voiture
  console.log(maClass);
  $(maClass).css("color", "blue");

  $(maClass).first().css("color", "green"); // sélectionne le premier élément .voiture
  $(maClass).last().css("color", "yellow"); // sélectionne le dernier élément .voiture
  $(maClass).eq(2).css("color", "green"); // sélectionne voiture 3, car on commence par 0

  // -------------------------SELECTION MULTIPLE -------------------------
  let mesElements = $("h1, article, aside"); // je sélectionne h1, article et aside
  console.log(mesElements);

  $(mesElements).css("color", "orange");

  // ------------------------- SELECTION DES PARENTS OU ANCÊTRES -------------------------
  $("li").parent().css("border", "2px solid red");
  $("li").parents("div").css("border", "2px solid black");

  // ------------------------- SELECTION DES PARENTS OU ANCÊTRES -------------------------
  $(".conteneur").children().css("font-weight", "700"); // on sélectionne tous les enfants du conteneur
  $(".conteneur").children("#enfants").css("color", "blue");
  $(".conteneur").find(".find").css("border", "2px solid pink");

  // ------------------------- SELECTION DES ELEMENTS FRERES -------------------------
  $("li:first-child").siblings().css("text-align", "right");
});
