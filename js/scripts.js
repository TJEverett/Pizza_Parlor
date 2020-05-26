//Buisness Logic Constructors
function Pizza() {
  this.size = 1; //small(1), medium(2), large(3)
  this.sauce = 2; //none(0), light(1), normal(2)
  this.cheese = 2; //none(0), light(1), normal(2), extra(3)
  this.pineapple = false;
  this.peperoni = false;
  this.mushroom = false;
  this.sausage = false;
  this.bellpepper = false;
  this.anchovies = false;
  this.price = 0;
}


$(document).ready(function(){
  $(".set1").show();
  var pizzaList = [];
  var pizzaCount = 0;

  // set1 buttons
  $("#pizzaStart").on("click", function(){
    var pizza = new Pizza();
    pizzaList[pizzaCount] = pizza;
    $(".set1").hide();
    $(".set2").show();
    console.log(pizzaList);
  });

  // set2 buttons
  $("#pizzaBase").submit(function(event){
    event.preventDefault();
    var size = parseInt($("input:radio[name=size]:checked").val());
    var sauce = parseInt($("input:radio[name=sauce]:checked").val());
    var cheese = parseInt($("input:radio[name=cheese]:checked").val());
    pizzaList[pizzaCount].size = size;
    pizzaList[pizzaCount].sauce = sauce;
    pizzaList[pizzaCount].cheese = cheese;
    $(".set2").hide();
    $(".set3").show();
    console.log(pizzaList);
  });

  // set3 buttons
  $("#pineappleAdd").on("click", function () {
    pizzaList[pizzaCount].pineapple = true;
    $("#pineappleAdd").toggleClass("hidden");
    $("#pineappleRemove").toggleClass("hidden");
  });

  $("#pineappleRemove").on("click", function () {
    pizzaList[pizzaCount].pineapple = false;
    $("#pineappleAdd").toggleClass("hidden");
    $("#pineappleRemove").toggleClass("hidden");
  });

  $("#peperoniAdd").on("click", function () {
    pizzaList[pizzaCount].peperoni = true;
    $("#peperoniAdd").toggleClass("hidden");
    $("#peperoniRemove").toggleClass("hidden");
  });

  $("#peperoniRemove").on("click", function () {
    pizzaList[pizzaCount].peperoni = false;
    $("#peperoniAdd").toggleClass("hidden");
    $("#peperoniRemove").toggleClass("hidden");
  });

  $("#mushroomAdd").on("click", function () {
    pizzaList[pizzaCount].mushroom = true;
    $("#mushroomAdd").toggleClass("hidden");
    $("#mushroomRemove").toggleClass("hidden");
  });

  $("#mushroomRemove").on("click", function () {
    pizzaList[pizzaCount].mushroom = false;
    $("#mushroomAdd").toggleClass("hidden");
    $("#mushroomRemove").toggleClass("hidden");
  });

  $("#sausageAdd").on("click", function () {
    pizzaList[pizzaCount].sausage = true;
    $("#sausageAdd").toggleClass("hidden");
    $("#sausageRemove").toggleClass("hidden");
  });

  $("#sausageRemove").on("click", function () {
    pizzaList[pizzaCount].sausage = false;
    $("#sausageAdd").toggleClass("hidden");
    $("#sausageRemove").toggleClass("hidden");
  });

  $("#bellpepperAdd").on("click", function () {
    pizzaList[pizzaCount].bellpepper = true;
    $("#bellpepperAdd").toggleClass("hidden");
    $("#bellpepperRemove").toggleClass("hidden");
  });

  $("#bellpepperRemove").on("click", function () {
    pizzaList[pizzaCount].bellpepper = false;
    $("#bellpepperAdd").toggleClass("hidden");
    $("#bellpepperRemove").toggleClass("hidden");
  });

  $("#anchoviesAdd").on("click", function () {
    pizzaList[pizzaCount].anchovies = true;
    $("#anchoviesAdd").toggleClass("hidden");
    $("#anchoviesRemove").toggleClass("hidden");
  });

  $("#anchoviesRemove").on("click", function () {
    pizzaList[pizzaCount].anchovies = false;
    $("#anchoviesAdd").toggleClass("hidden");
    $("#anchoviesRemove").toggleClass("hidden");
  });

  $("#pizzaToppings").submit(function(event){
    event.preventDefault();
    pizzaCount += 1
    $(".set3").hide();
    $(".set4").show();
    console.log(pizzaList);
  });
});