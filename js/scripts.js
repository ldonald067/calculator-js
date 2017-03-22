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
	});


	$("form#subtract").submit(function(event) {
	event.preventDefault();
  var firstNumber = parseInt($("#sub1").val());
  var secondNumber = parseInt($("#sub2").val());
  var result = subtract(firstNumber, secondNumber);
  $("#output").text(result);
	});


	$("form#multiply").submit(function(event) {
	event.preventDefault();
	var firstNumber = parseInt($("#mult1").val());
	var secondNumber = parseInt($("#mult2").val());
	var result = multiply(firstNumber, secondNumber);
	$("#output").text(result);
	});


	$("form#divide").submit(function(event) {
	event.preventDefault();
	var firstNumber = parseInt($("#div1").val());
	var secondNumber = parseInt($("#div2").val());
	var result = divide(firstNumber, secondNumber);
	$("#output").text(result);

	});
});
