/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
let dayRate = 35;
let dayCounter = 0;
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let fullDayButton = document.getElementById("full");
let halfDayButton = document.getElementById("half");
let clearButton = document.getElementById("clear-button");
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function dayClicked() {
  if (this.classList.contains("clicked")) {
    dayCounter += 0;
  } else {
    this.classList.add("clicked");
    dayCounter += 1;
    recalculate();
  }
}
monday.addEventListener("click", dayClicked);
tuesday.addEventListener("click", dayClicked);
wednesday.addEventListener("click", dayClicked);
thursday.addEventListener("click", dayClicked);
friday.addEventListener("click", dayClicked);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearClicked() {
  dayCounter = 0;
  monday.classList.remove("clicked");
  tuesday.classList.remove("clicked");
  wednesday.classList.remove("clicked");
  thursday.classList.remove("clicked");
  friday.classList.remove("clicked");
  recalculate();
}
clearButton.addEventListener("click", clearClicked);
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfDayClicked() {
  dayRate = 20;
  halfDayButton.classList.add("clicked");
  fullDayButton.classList.remove("clicked");
  recalculate();
}
halfDayButton.addEventListener("click", halfDayClicked, recalculate);
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullDayClicked() {
  dayRate = 35;
  fullDayButton.classList.add("clicked");
  halfDayButton.classList.remove("clicked");
  recalculate();
}
fullDayButton.addEventListener("click", fullDayClicked);
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate() {
  let calculatedCost = document.getElementById("calculated-cost");
  let totalCost = dayRate * dayCounter;
  calculatedCost.innerHTML = totalCost;
}
/*Complimentary half day rate*/
