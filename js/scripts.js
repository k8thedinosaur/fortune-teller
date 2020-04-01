var redColor = 0;
var blueColor = 0;
var yellowColor = 0;
var ingredients = [];

$(document).ready(function() {
  $("form#ingredients-form").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=ingredients]:checked").each(function() {
      ingredients = $(this).val();
      $("#ingredient-choices").append(ingredients + "<br>");
    });

    $("input:checkbox[class=red]:checked").each(function() {
      redColor += 1;
    });
    
    $("input:checkbox[class=blue]:checked").each(function() {
      blueColor += 1;
    });
    
    $("input:checkbox[class=yellow]:checked").each(function() {
      yellowColor += 1;
    });
      
    if (redColor == blueColor == yellowColor) {
      $("#brown-potion").show();
    } else if (redColor + blueColor > yellowColor) {
      $("#purple-potion").show();
    } else if (redColor + yellowColor > blueColor) {
      $("#orange-potion").show();
    } else if (yellowColor + blueColor > redColor) {
      $("#green-potion").show();
    };


    console.log("Red: " + redColor);
    console.log("Blue: " + blueColor);
    console.log("Yellow: " + yellowColor);
    console.log(ingredients);
  });
});