// Helper function: writes any HTML into the #out div
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* 
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet () {
  // TODO: Write your code here
  const name = prompt("What is your actual name?");
  if (!name) {
    render("<div> Do you not have a name?!?!?!?!?!?!?!</div>");
    return;
  } else {
    render(`<div>Hello, ${name}! Nice to meet you!</div>`);
  }
}


/* 
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function timeOfDay () {
  // TODO: Write your code here
  const h = new Date().getHours();
  let msg = '';
  if (h < 12) {
    msg = 'Good Morning!';
  } else if (h < 18 && h >= 12) {
    msg = 'Good Afternoon!';
  } else {
    msg = 'Good Evening';
  }
  render(`<div>${msg}</div>`)
}

/* 
  Function 4 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween () {
  // TODO: Write your code here
  const min = parseInt(prompt("Enter a minimum number"));
  const max = parseInt(prompt("Enter a maximum number"));
  if (isNaN(min) || isNaN(max)) {
    render(`<div>Please use actual numbers.</div>`);
    return;
  } if (min >= max) {
    render(`<div>Please make sure minimum is less than maximum</div>`);
    return;
  }
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  render(randomNumber);



}

/* 
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput () {
  // TODO: Write your code here
  render("Output Cleared.")
}

// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
// document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnClear').addEventListener('click', clearOutput)
document.getElementById('btnTitle').addEventListener('click', changeTitle)
document.getElementById('btnOutputText').addEventListener('click', changeOutputTextColor)
document.getElementById('btnBGColor').addEventListener('click', changeBGColor)
document.getElementById('btnDouble').addEventListener('click', doubleNumber)

/* 
  ------------------------------------------
  Student Challenge Section 
  ------------------------------------------
  Add 4 new functions here, each with its own button in index.html:
  
  1) Change the page title text to something new.
  2) Each time you press the button, the output text color cycles through a few choices (red, green, orange, etc.).
  3) Press the button to change the background color of the output box to a random color.
  4) Ask the user for a number and display that number doubled.
  
  Write each function below, and don’t forget to connect each one 
  to a new button in index.html using addEventListener.
*/

// changes page title
function changeTitle() {
  const title = prompt("What do you want to change the title to?");
  if (!title) {
    render("<div>Please type something here</div>");
    return;
  } else {
    document.getElementById("title").innerHTML = title;
  }
  

}
function changeOutputTextColor() {
  const colors = ["red", "orange", "yelow", "green", "blue", "purple"];
  
}
function changeBGColor() {

}

function doubleNumber() {
  
}