$(document).ready(function() {
  $("form#ingredients-form").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=ingredients]:checked").each(function() {
      var ingredients = $(this).val();
      $("#ingredient-choices").append(ingredients + "<br>");
    });

  })
});