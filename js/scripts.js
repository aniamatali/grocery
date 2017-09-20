$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var groceries = ["item1", "item2", "item3"];
    var values = [];
    groceries.forEach(function(grocery) {
      var userInput = $("input#" + grocery).val();
      values.push(userInput);
    });
    values.sort();
    values.forEach(function(value) {
      $("ul#grocerylist").append("<li>" +value.toUpperCase()+ "</li>");
    })
    event.preventDefault();

  });
});
