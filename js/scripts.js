// Business (or back-end) logic:

var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2 ){
  return number1 / number2;
};

//user interface (or front-end) logic:

$(document).ready(function() {
	$("form#add").submit(function(event) {
	event.preventDefault();
  var firstNumber = parseInt($("#add1").val());
  var secondNumber = parseInt($("#add2").val());
  var result = add(firstNumber, secondNumber);
  $("#output").text(result);

// $(document).ready(function() {
//   var number1 = parseInt($("#add1").val());
//   var number2 = parseInt($("#add2").val());
//   alert(add(number1, number2));

	});
});
