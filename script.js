// Global variables
let crust = document.getElementById('crust');
let sauce = document.getElementById('sauce');

// toppings array
let toppings = [];

let formButton = document.getElementById('btn');
// event listener

formButton.addEventListener('click', function (event) {
	///all the logic of the function
	event.preventDefault();

	let topping1 = document.getElementById('topping1').value;
	let topping2 = document.getElementById('topping2').value;
	let topping3 = document.getElementById('topping3').value;
	toppings.push(topping1);
	toppings.push(topping2);
	toppings.push(topping3);

	calculateTotal(toppings);
});
function calculateTotal(toppingArray) {
	let total = 0;
	let toppingCost = 2.5;
	let baseCost = 5.5; // cost of crust and sauce

	// order string concatenation
	let orderString = crust.value + 'pizza with' + sauce.value;

	let toppingString = 'Toppings: ';

	// For Loop
	// For Loop to loop through ToppinsArray

	// total = baseCost + cost of all toppings

	// set DOM total += total
	// use DOM: = orderString
	// use DOM: = toppingString
}
