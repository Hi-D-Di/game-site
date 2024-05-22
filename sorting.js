var reply_click_start = function() /*things that happen once the start button is clicked*/
{
   this.style.display='none'; /*hides the start button*/
   document.getElementById('GameplayDiv').style.display='block'; /*shows these divs*/
   document.getElementById('RandomNumberBox').style.display='block';
   document.getElementById('Responses').style.display='block';
   document.getElementById('Score').style.display='block';
   document.getElementById("RandomNumberBox").innerHTML = prompt; /*sets up the prompt and shows it in the HTML*/
   answer=isEven(prompt); /*determines the correct answer*/
}
document.getElementById('StartDiv').onclick = reply_click_start; /*tells the code when the start button has been clicked*/
function getRandom() {
    return Math.floor(Math.random() * Math.floor(100)) + 1; /*gets the random number for the prompt*/
   }
const isEven = num => num % 2 === 0; /*is the prompt even*/
let prompt = getRandom(); /* sets the random number as a variable so it doesn't change while we evaluate it*/
let answer;
const DisableEven = document.getElementById("EvenResponse");
const DisableOdd = document.getElementById("OddResponse");
var reply_click_even = function () /*what happens when they click the even button*/
   {
    if (answer===true) {
      score += 1;
      document.getElementById("ScoreNumber").innerHTML = score; /*sets up the prompt and shows it in the HTML*/
      document.getElementById("Feedback").innerHTML = 'That is correct!';/*sets the feedback*/
      var element = document.querySelector("#EvenResponse");/*grabs the even button*/
      element.classList.replace("Response", "Correct");/*changes the class on the even button*/
      document.getElementById('Again').style.display='block';/*shows the try another button*/
      DisableEven.setAttribute("disabled", "");
      DisableOdd.setAttribute("disabled", "");
    } else {      document.getElementById("Feedback").innerHTML = 'That is not correct, try again.';/*sets incorrect feedback*/
   };
   document.getElementById('Feedback').style.display='block';/*shows the feedback block*/
   }
document.getElementById('EvenResponse').onclick = reply_click_even; /*tells the code when the even button has been clicked*/
var reply_click_odd = function () /*what happens when they click the odd button*/
   {
    if (answer===false) {
      score += 1;
      document.getElementById("ScoreNumber").innerHTML = score; /*sets up the prompt and shows it in the HTML*/
      document.getElementById("Feedback").innerHTML = 'That is correct!';/*sets the feedback*/
      var element = document.querySelector("#OddResponse"); /*grabs the odd button*/
      element.classList.replace("Response", "Correct"); /*changes the class on the odd button*/
      document.getElementById('Again').style.display='block';/*shows the try another button*/
      DisableOdd.setAttribute("disabled", "");
      DisableEven.setAttribute("disabled", "");
   } else {      document.getElementById("Feedback").innerHTML = 'That is not correct, try again.';/*sets incorrect feedback*/
};
document.getElementById('Feedback').style.display='block';/*shows the feedback block*/
   }
document.getElementById('OddResponse').onclick = reply_click_odd; /*tells the code when the odd button has been clicked*/
var reply_click_new = function () /*things that happen once the try another button is clicked*/
{
   document.getElementById('Feedback').style.display='none';
   document.getElementById('Again').style.display='none';
   prompt = getRandom();
   document.getElementById("RandomNumberBox").innerHTML = prompt; /*sets up the prompt and shows it in the HTML*/
   answer=isEven(prompt); /*determines the correct answer*/
   DisableEven.removeAttribute("disabled", "");
   DisableOdd.removeAttribute("disabled", "");
   var element = document.querySelector("#OddResponse"); /*grabs the odd button*/
   element.classList.replace("Correct", "Response"); /*changes the class on the odd button*/
   element.classList.replace("Incorrect", "Response"); /*changes the class on the odd button*/
   var element = document.querySelector("#EvenResponse"); /*grabs the odd button*/
   element.classList.replace("Correct", "Response"); /*changes the class on the odd button*/
   element.classList.replace("Incorrect", "Response"); /*changes the class on the odd button*/
}
document.getElementById('AgainButton').onclick = reply_click_new; /*tells the code when the start button has been clicked*/
let score=0;
function changeClass() {
   var element = document.querySelector("#myDiv");
   element.classList.replace("oldClass", "newClass");
 }
