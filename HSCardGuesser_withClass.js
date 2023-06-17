/* thoughts on the user process:
click on generate card
button should:
- fetch api;
- modify all of card attributes?
    - create only 1 class to rule them all?
    - or create 1 class for each type of card?
*/

const lastGuesses = document.querySelector(".lastGuesses");
const cardSpitter = document.querySelector("#cardSpitter");
cardSpitter.addEventListener("click", cardSpit);

function cardSpit() {
	lastGuesses.innerHTML = `Working`;
}
