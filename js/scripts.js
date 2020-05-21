//Buisness Logic Constructors
function Pizza() {
  this.size = 1; //small(1), medium(2), large(3)
  this.sauce = 2; //none(0), light(1), normal(2)
  this.cheese = 2; //none(0), light(1), normal(2), extra(3)
  this.pineapple = false;
  this.peperoni = false;
  this.mushroom = false;
  this.sausage = false;
  this.bellPepper = false;
  this.price = 0;
}


$(document).ready(function(){
  $(".set1").show();
});