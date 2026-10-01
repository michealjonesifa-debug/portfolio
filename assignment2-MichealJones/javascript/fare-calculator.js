// Micheal Jones, sept.4 2026, Assignment 2 Rideshare calculator

// defining constant variables
let baseFare = 3.50;
let rate = 1.50;
let petFee = 1.2;

// defining prompt variables possible check box incoming if i can figure it out
let distance = prompt("The distance you are looking to travel:");
let hasPet = confirm("Press ok if you are bringing a furry friend and cancel if you are not");
// making sure it works before continueing
console.log(typeof hasPet, hasPet);
let tip = prompt("how much would you like to tip in %");

// converting prompts to numbers
distance = Number(distance);
tip = Number(tip);

// writing a if and else statement for the equations. i did have to look up the javascript syntax for this
if(hasPet) {
    let totalFare = (baseFare + (rate*distance))*petFee;
    
// calculating the fare with tip
let fareWithTip = totalFare + (totalFare*tip/100);

// telling the customer the results
let message = `your total fare is ${fareWithTip.toFixed(2)}`;
console.log(message);

// I like putting it in the html
let displayDiv = document.getElementById("results");

displayDiv.textContent = message;
}
else{
    let totalFare = baseFare + (rate*distance)
    
// calculating the fare with tip
let fareWithTip = totalFare + (totalFare*tip/100)

// telling the customer the results
let message = `your total fare is ${fareWithTip.toFixed(2)}`
console.log(message)

// I like putting it in the html
let displayDiv = document.getElementById("results")

displayDiv.textContent = message
};
