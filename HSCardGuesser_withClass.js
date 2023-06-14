const clues = document.querySelector(".clues");
const lastGuesses = document.querySelector(".lastGuesses");
var lastGuessesList = [];
const finalStatement = document.querySelector(".finalStatement");
const cardSpitter = document.querySelector("#cardSpitter");
cardSpitter.addEventListener("click", cardSpit);

class Card {
	// constructor(title, id) {
	// 	this._title = title;
	// 	this._id = id;
	// 	this._cardClass = undefined;
	// 	this._rarity = undefined;
	// 	this._spellSchool = undefined;
	// 	this._text = undefined;
	// 	this._type = undefined;
	// 	this._flavor = undefined;
	// 	this._cost = undefined;
	// 	this._mechanics = undefined;
	// 	this._artist = undefined;
	// 	this._set = undefined;
	// 	this._race = undefined;
	// 	this._attack = undefined;
	// 	this._durability = undefined;
	// 	this._armor = undefined;
	// 	this._health = undefined;

	// 	this._Tries = 0;
	// }

	// set _title() {
	// 	// set the object's property, "what happens when setting an property?"
	// 	// has the name of the property
	// }

	// get _title() {
	// 	// access the object's property, "what happens when getting an property?"
	// 	// doesn't receive parameter, return something
	// }

	CardInfo() {
		console.log("Hello there!");
		console.log(this.apiFETCH());
	}

	apiFETCH() {
		let apiURL =
			"https://api.hearthstonejson.com/v1/95431/enUS/cards.collectible.json";
		fetch(apiURL)
			.then((response) => response.json)
			.then((jsonObj) => displayCard(jsonObj))
			.catch(() =>
				alert(
					"API could not be reached at this time.\nThis means your luck won't be tested now.\nSorry, kiddo."
				)
			);
	}

	displayCard(finalCard) {
		let date = new Date();
		let randomNumber = Math.floor(Math.random(date) * 3840);

		return finalCard[randomNumber];
	}
}

function cardSpit() {
	const SpittedCard = new Card();
	SpittedCard.CardInfo();

	return SpittedCard;
}
