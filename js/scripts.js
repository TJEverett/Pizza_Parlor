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

Pizza.prototype.priceCheck = function(){
  var modifier = 1;
  var toppings = 0;
  var price = 0;

  if(this.size === 1){
    modifier = 1.00;
    price = 8.00;
  } else if(this.size === 2){
    modifier = 1.50;
    price = 11.00;
  } else {
    modifier = 1.75;
    price = 13.00;
  };

  if(this.cheese === 3){
    price += 2.00;
  };

  if(this.pineapple === true){
    toppings += 1;
  };
  if (this.peperoni === true) {
    toppings += 1;
  };
  if (this.mushroom === true) {
    toppings += 1;
  };
  if (this.sausage === true) {
    toppings += 1;
  };
  if (this.bellpepper === true) {
    toppings += 1;
  };
  if (this.anchovies === true) {
    toppings += 1;
  };

  price = price + (modifier * toppings);
  this.price = price;
  return this.price;
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
    $(".price").text(pizzaList[pizzaCount].priceCheck());
    $(".set2").hide();
    $(".set3").show();
  });

  // set3 buttons
  $("#pineappleAdd").on("click", function () {
    pizzaList[pizzaCount].pineapple = true;
    $(".price").text(pizzaList[pizzaCount].priceCheck());
    $("#pineappleAdd").toggleClass("hidden");
    $("#pineappleRemove").toggleClass("hidden");
  });

  $("#pineappleRemove").on("click", function () {
    pizzaList[pizzaCount].pineapple = false;
    $(".price").text(pizzaList[pizzaCount].priceCheck());
    $("#pineappleAdd").toggleClass("hidden");
    $("#pineappleRemove").toggleClass("hidden");
  });

  $("#peperoniAdd").on("click", function () {
    pizzaList[pizzaCount].peperoni = true;
    $(".price").text(pizzaList[pizzaCount].priceCheck());
    $("#peperoniAdd").toggleClass("hidden");
    $("#peperoniRemove").toggleClass("hidden");
  });

  $("#peperoniRemove").on("click", function () {
    pizzaList[pizzaCount].peperoni = false;
    $(".price").text(pizzaList[pizzaCount].priceCheck());
    $("#peperoniAdd").toggleClass("hidden");
    $("#peperoniRemove").toggleClass("hidden");
  });

  $("#mushroomAdd").on("click", function () {
    pizzaList[pizzaCount].mushroom = true;
    $(".price").text(pizzaList[pizzaCount].priceCheck());
    $("#mushroomAdd").toggleClass("hidden");
    $("#mushroomRemove").toggleClass("hidden");
  });

  $("#mushroomRemove").on("click", function () {
    pizzaList[pizzaCount].mushroom = false;
    $(".price").text(pizzaList[pizzaCount].priceCheck());
    $("#mushroomAdd").toggleClass("hidden");
    $("#mushroomRemove").toggleClass("hidden");
  });

  $("#sausageAdd").on("click", function () {
    pizzaList[pizzaCount].sausage = true;
    $(".price").text(pizzaList[pizzaCount].priceCheck());
    $("#sausageAdd").toggleClass("hidden");
    $("#sausageRemove").toggleClass("hidden");
  });

  $("#sausageRemove").on("click", function () {
    pizzaList[pizzaCount].sausage = false;
    $(".price").text(pizzaList[pizzaCount].priceCheck());
    $("#sausageAdd").toggleClass("hidden");
    $("#sausageRemove").toggleClass("hidden");
  });

  $("#bellpepperAdd").on("click", function () {
    pizzaList[pizzaCount].bellpepper = true;
    $(".price").text(pizzaList[pizzaCount].priceCheck());
    $("#bellpepperAdd").toggleClass("hidden");
    $("#bellpepperRemove").toggleClass("hidden");
  });

  $("#bellpepperRemove").on("click", function () {
    pizzaList[pizzaCount].bellpepper = false;
    $(".price").text(pizzaList[pizzaCount].priceCheck());
    $("#bellpepperAdd").toggleClass("hidden");
    $("#bellpepperRemove").toggleClass("hidden");
  });

  $("#anchoviesAdd").on("click", function () {
    pizzaList[pizzaCount].anchovies = true;
    $(".price").text(pizzaList[pizzaCount].priceCheck());
    $("#anchoviesAdd").toggleClass("hidden");
    $("#anchoviesRemove").toggleClass("hidden");
  });

  $("#anchoviesRemove").on("click", function () {
    pizzaList[pizzaCount].anchovies = false;
    $(".price").text(pizzaList[pizzaCount].priceCheck());
    $("#anchoviesAdd").toggleClass("hidden");
    $("#anchoviesRemove").toggleClass("hidden");
  });

  $("#pizzaToppings").submit(function(event){
    event.preventDefault();
    pizzaCount += 1
    $(".set3").hide();
    $(".set4").show();
  });
});