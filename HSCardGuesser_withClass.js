/* thoughts on the user process:
click on generate card button, this button should:
- fetch api;
- modify all of card attributes?
    - create only 1 class to rule them all?
    - or create 1 child class for each type of card?
*/

const lastGuesses = document.querySelector(".lastGuesses");
const cardSpitter = document.querySelector("#cardSpitter");
cardSpitter.addEventListener("click", cardSpit);

class Card {
	constructor(name, id) {
		this._name = name;
		this._id = id;
		this._Tries = 0; // important to the game as a whole
	}

	get Tries() {
		// what happens when trying to get this property value?
		// returns something

		this._Tries++;

		return this._Tries;
	}

	/* set _Tries(Tries) {
		// what happens when trying to set a property to this value?
		// receives an argument
	} */

	cardFetch() {
		let apiURL =
			"https://api.hearthstonejson.com/v1/95431/enUS/cards.collectible.json";

		fetch(apiURL)
			.then((response) => response.json())
			.then((jsonObj) => this._cardDestructed(jsonObj))
			.catch(() =>
				alert(
					"API could not be reached at this time. This means your luck won't be tested now.\nSorry, kiddo."
				)
			);
	}

	_cardDestructed(jsonCard) {
		let date = new Date();
		let randomNumber = Math.floor(Math.random(date) * 3845);

		let { id, name, type } = jsonCard[randomNumber];

		lastGuesses.innerHTML = `
		<b>Id:</b> ${id};<br>
		<b>Name:</b> ${name}.`;
	}

	allInfo() {
		lastGuesses.innerHTML = `<b>Id:</b> ${this._id};<br>
        <b>Name:</b> ${this._name};<br>
        <b>Tries:</b> ${this._Tries}.`;
	}
}

function cardSpit() {
	const SpittedCard = new Card("none", undefined);

	SpittedCard.cardFetch();

	return SpittedCard;
}
