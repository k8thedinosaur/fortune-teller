var redColor = 0;
var blueColor = 0;
var yellowColor = 0;

$(document).ready(function() {
  $("form#ingredients-form").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=ingredients]:checked").each(function() {
      var ingredients = $(this).val();
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
      
    console.log("Red: " + redColor);
    console.log("Blue: " + blueColor);
    console.log("Yellow: " + yellowColor);
  })
});