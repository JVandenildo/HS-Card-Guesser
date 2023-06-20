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
const clues = document.querySelector(".clues");
var SpittedCard;
var lastGuessesList = [];

class Card {
	constructor(title, id) {
		this._title = title;
		this._id = id;
		this._artist;
		this._type;

		this._tries = 0; // important to the game as a whole
	}

	get Tries() {
		// what happens when trying to get this property value?
		// returns something

		this._tries = this._tries + 1;
		console.log(this._tries);

		return this._tries;
	}

	set Tries(Tries) {
		// what happens when trying to set a property to this value?
		// receives an argument

		this._tries = Tries;
	}

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

	get Title() {
		return this._type.toLowerCase();
	}
	set Title(string) {
		this._type = string;
	}

	get Type() {
		return this.type;
	}
	set Type(string) {
		this._type = string;
	}

	get Artist() {
		return this._artist.toLowerCase();
	}
	set Artist(string) {
		this._artist = string;
	}

	get Attack() {
		return this._attack.toLowerCase();
	}
	set Attack(number) {
		this._attack = number;
	}

	get Durability() {
		return this._durability.toLowerCase();
	}
	set Durability(number) {
		this._durability = number;
	}

	get Armor() {
		return this._armor.toLowerCase();
	}
	set Armor(number) {
		this._armor = number;
	}

	get Health() {
		return this._health.toLowerCase();
	}
	set Health(number) {
		this._health = number;
	}

	get Mechanics() {
		return this._mechanics.toLowerCase();
	}
	set Mechanics(string) {
		this._mechanics = string;
	}

	get CardClass() {
		return this._cardClass.toLowerCase();
	}
	set CardClass(string) {
		this._type = string;
	}

	get Classes() {
		return this._classes.toLowerCase();
	}
	set Classes(string) {
		this._classes = string;
	}

	get Rarity() {
		return this._rarity.toLowerCase();
	}
	set Rarity(string) {
		this._rarity = string;
	}

	get SpellSchool() {
		return this._spellSchool.toLowerCase();
	}
	set SpellSchool(string) {
		this._spellSchool = string;
	}

	get Race() {
		return this._race.toLowerCase();
	}
	set Race(string) {
		this._race = string;
	}

	get Text() {
		return this._text.toLowerCase();
	}
	set Text(string) {
		this._text = string;
	}

	get Flavor() {
		return this._flavor.toLowerCase();
	}
	set Flavor(string) {
		this._flavor = string;
	}

	get Cost() {
		return this._cost.toLowerCase();
	}
	set Cost(number) {
		this._cost = number;
	}

	get Id() {
		return this._id.toLowerCase();
	}
	set Id(string) {
		this._type = string;
	}

	get Set() {
		return this._set.toLowerCase();
	}
	set Set(string) {
		this._set = string;
	}

	_cardDestructed(jsonCard) {
		let date = new Date();
		let randomNumber = Math.floor(Math.random(date) * 3845);

		let {
			id,
			durability,
			attack,
			armor,
			health,
			artist,
			mechanics,
			name,
			cardClass,
			classes,
			rarity,
			spellSchool,
			race,
			text,
			type,
			flavor,
			cost,
			set,
		} = jsonCard[randomNumber];
		this.Title = name;
		this.Type = type;
		this.Artist = artist;
		this.Attack = attack;
		this.Durability = durability;
		this.Armor = armor;
		this.Health = health;
		this.Mechanics = mechanics;
		this.CardClass = cardClass;
		this.Classes = classes;
		this.Rarity = rarity;
		this.SpellSchool = spellSchool;
		this.Race = race;
		this.Text = text;
		this.Flavor = flavor;
		this.Cost = cost;
		this.Id = id;
		this.Set = set;

		return starGame();
	}

	freeClue() {
		return `a ${this.Type}, art drew by ${this.Artist}.`;
	}
}

function cardSpit() {
	resetGame();

	SpittedCard = new Card("none", undefined);
	SpittedCard.cardFetch();

	return SpittedCard;
}

// elements and function to verify user input
const inputGuess = document.querySelector("#inputGuess");
const buttonGuess = document.querySelector("#buttonGuess");
const finalStatement = document.querySelector(".finalStatement");
buttonGuess.addEventListener("click", luckTester);

function luckTester() {
	if (!inputGuess.value) {
		alert("Don't need no rush, champion!\nGive your guess first.");
	} else {
		SpittedCard.Tries;
	}
	inputGuess.value = "";

	return true;
}

function resetGame() {
	let SpittedCard = new Card(undefined, undefined);
	inputGuess.value = "";
	// lastGuessesList.length = 0;
	lastGuesses.innerHTML = "<h3>Last Guesses</h3>";
	clues.innerHTML = "";
	finalStatement.innerHTML = "";
	buttonGuess.addEventListener("click", luckTester);

	return true;
}

function starGame() {
	clues.insertAdjacentHTML(
		"beforeend",
		`<h2>Clues</h2>
		<div>
			<b style="font-size: 12pt; color: #fff9ed">Free clue</b>: a ${SpittedCard.Type} drew by ${SpittedCard.Artist}.
		</div>`
	);

	return true;
}
