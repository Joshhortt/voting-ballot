$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age > 18) {
    $('.form-group').show();
  } else if (age === 18) {
    alert(" Go to Polling Place Locator!");
    $('.form-group').show();
  } else {
    $('#under-18').show();
  }
});
