/* thoughts on the user process:
click on generate card button, this button should:
- fetch api;
- modify all of card attributes?
    - create only 1 class to rule them all?
    - or create 1 class for each type of card?
*/

const lastGuesses = document.querySelector(".lastGuesses");
const cardSpitter = document.querySelector("#cardSpitter");
cardSpitter.addEventListener("click", cardSpit);

class Card {
	constructor(name, id) {
		this._name = name;
		this._id = id;
	}

	cardFetch() {
		let apiURL =
			"https://api.hearthstonejson.com/v1/95431/enUS/cards.collectible.json";

		fetch(apiURL)
			.then(function (response) {
				return response.json();
			})
			.catch(() =>
				alert(
					"API could not be reached at this time. This means your luck won't be tested now.\nSorry, kiddo."
				)
			);
	}

	allInfo() {
		lastGuesses.innerHTML = `<b>Id:</b> ${this._id};<br>
        <b>Name:</b> ${this._name}.`;
	}
}

function cardSpit() {
	const SpittedCard = new Card("Leroy", "EX_001");

	SpittedCard.allInfo();
}
