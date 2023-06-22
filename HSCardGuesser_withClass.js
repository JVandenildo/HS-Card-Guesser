const lastGuesses = document.querySelector(".lastGuesses");
const cardSpitter = document.querySelector("#cardSpitter");
cardSpitter.addEventListener("click", cardSpit);
const clues = document.querySelector(".clues");
var SpittedCard;

class Card {
	constructor(title, id) {
		this._title = title;
		this._id = id;
		this._artist;
		this._type;

		this._tries = 0; // important to the game as a whole
		this._lastGuessesList = []; // also very important to the game
	}

	get Tries() {
		// what happens when trying to get this property value?
		// returns something

		if (this._tries <= this.LastGuessesList.length) {
			this.Tries = 1;

			console.log(`Tries: ${this._tries}`);

			return this._tries;
		} else {
			finalStatement.innerHTML = `Sorry, kiddo! Game is over.<br>Try spit another card.`;

			return true;
		}
	}
	set Tries(number) {
		// what happens when trying to set a property to this value?
		// receives an argument

		this._tries = this._tries + number;
	}

	get LastGuessesList() {
		switch (this.Type) {
			case "spell":
				const _spellClues = [
					this.Flavor,
					this.SpellSchool,
					this.Rarity,
					this.Cost,
					this.CardClass,
					this.Text,
				];

				this.LastGuessesList = _spellClues;

				break;
			case "minion":
				const _minionClues = [
					this.Flavor,
					this.Race,
					this.Rarity,
					this.Cost,
					`${this.Attack}/${this.Health}.`,
					this.CardClass,
					this.Text,
				];

				this.LastGuessesList = _minionClues;

				break;
			case "weapon":
				const _weaponClues = [
					this.Flavor,
					`${this.Attack}/${this.Durability}.`,
					this.Rarity,
					this.Cost,
					this.Cost,
					this.CardClass,
				];

				this.LastGuessesList = _weaponClues;

				break;
			case "hero":
				let ArmorHP = `${this.Armor} armor and ${this.Health} health.`;
				if (this.Health === undefined) {
					ArmorHP = `${this.Armor} armor.`;
				}

				const _heroClues = [
					this.Flavor,
					ArmorHP,
					this.Rarity,
					this.Cost,
					this.Text,
					this.CardClass,
				];

				this.LastGuessesList = _heroClues;

				break;
		}
		return this._lastGuessesList;
	}
	set LastGuessesList(array) {
		this._lastGuessesList = array;
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
		return this._title.toLowerCase();
	}
	set Title(string) {
		this._title = string;
	}

	get Type() {
		return this._type.toLowerCase();
	}
	set Type(string) {
		this._type = string;
	}

	get Artist() {
		if (this._artist === undefined) {
			return `don't know who`;
		} else {
			return this._artist;
		}
	}
	set Artist(string) {
		this._artist = string;
	}

	get Attack() {
		return this._attack;
	}
	set Attack(number) {
		this._attack = number;
	}

	get Durability() {
		return this._durability;
	}
	set Durability(number) {
		this._durability = number;
	}

	get Armor() {
		return this._armor;
	}
	set Armor(number) {
		this._armor = number;
	}

	get Health() {
		return this._health;
	}
	set Health(number) {
		this._health = number;
	}

	get Mechanics() {
		return this._mechanics;
	}
	set Mechanics(string) {
		this._mechanics = string;
	}

	get CardClass() {
		if (this._cardClass == undefined) {
			return this.Classes;
		} else {
			return `belongs to ${this._cardClass.toLowerCase()}s.`;
		}
	}
	set CardClass(string) {
		this._cardClass = string;
	}

	get Classes() {
		return this._classes.toLowerCase();
	}
	set Classes(string) {
		this._classes = string;
	}

	get Rarity() {
		switch (this._rarity) {
			case "FREE":
				return ` a core set card.`;

			default:
				return this._rarity.toLowerCase();
		}
	}
	set Rarity(string) {
		this._rarity = string;
	}

	get SpellSchool() {
		switch (this._spellSchool) {
			case undefined:
				return `this ${this.Type} belongs to no school of magic`;

			default:
				return `belongs to ${this._spellSchool.toLowerCase()} school of magic`;
		}
	}
	set SpellSchool(string) {
		this._spellSchool = string;
	}

	get Race() {
		switch (this._race) {
			case undefined:
				return `this ${this.Type} has no type`;

			default:
				return this._race.toLowerCase();
		}
	}
	set Race(string) {
		this._race = string;
	}

	get Text() {
		return this._text;
	}
	set Text(string) {
		this._text = string;
	}

	get Flavor() {
		if (this._flavor == undefined) {
			return `no flavor`;
		} else {
			return this._flavor.toLowerCase();
		}
	}
	set Flavor(string) {
		this._flavor = string;
	}

	get Cost() {
		return this._cost;
	}
	set Cost(number) {
		this._cost = number;
	}

	get Id() {
		return this._id;
	}
	set Id(string) {
		this._id = string;
	}

	get Set() {
		return this._set;
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

		return startGame();
	}

	freeClue() {
		return `a ${this.Type}, art drew by ${this.Artist}!`;
	}

	// function to ban some cards, wink ;)
	cardBanner() {
		switch (this.Set) {
			case "HERO_SKINS":
			case "ENCHANTMENT":
			case "HERO_POWER":
				console.log("Banned card.");
				cardSpit();

				break;
		}
	}
}

function cardSpit() {
	resetGame();

	SpittedCard = new Card("none", undefined);
	SpittedCard.cardFetch();
	SpittedCard.cardBanner();

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
		switch (SpittedCard.Title) {
			// this first case should verify if the card was spitted
			case false:
				clues.innerHTML =
					"I'm a afraid you cannot guess a card that doesn't exist, pal!";

				break;
			case inputGuess.value.toLowerCase():
				SpittedCard.Tries;
				gameWon();

				break;

			default:
				SpittedCard.Tries;
				clueGenerator();

				break;
		}
	}
	inputGuess.value = "";

	return true;
}

function resetGame() {
	let SpittedCard = new Card(undefined, undefined);
	inputGuess.value = "";
	lastGuesses.innerHTML = "<h3>Last Guesses</h3>";
	clues.innerHTML = "";
	finalStatement.innerHTML = "";
	// buttonGuess.addEventListener("click", luckTester);

	return true;
}

function startGame() {
	clues.insertAdjacentHTML(
		"beforeend",
		`<h2>Clues</h2>
		<div>
			<b style="font-size: 12pt; color: #fff9ed">Free clue</b>: ${SpittedCard.freeClue()}
		</div>`
	);

	return true;
}

// function to determine which clue must be given
function clueGenerator() {
	switch (SpittedCard.Type) {
		case "spell":
			console.log(`Type: ${SpittedCard.Type}.`);

			break;
		case "minion":
			console.log(`Type: ${SpittedCard.Type}.`);

			break;
		case "weapon":
			console.log(`Type: ${SpittedCard.Type}.`);

			break;
		case "hero":
			console.log(`Type: ${SpittedCard.Type}.`);

			break;
		default:
			clues.innerHTML = `This card exists?<br>Try to spit another one.`;

			break;
	}

	return true;
}

// function to deliver the points
function gameWon() {
	// buttonGuess.removeEventListener("click", luckTester);
	let initialPoints = 100;
	let finalPoints;

	switch (SpittedCard.Tries - 1) {
		case 1:
			finalPoints = Math.round(initialPoints / 1);
			finalStatement.innerHTML = `Congratulations, champion!<br>After ${SpittedCard.Tries} guess, you've earned ${finalPoints} points.`;

			break;
		case 2:
			finalPoints = Math.round(initialPoints / 1);
			finalStatement.innerHTML = `Congratulations, champion!<br>After ${SpittedCard.Tries} guesses, you've earned ${finalPoints} points.`;

			break;

		default:
			finalPoints = Math.round(initialPoints / (SpittedCard.Tries - 2));
			finalStatement.innerHTML = `Congratulations, champion!<br>After ${SpittedCard.Tries} guesses, you've earned ${finalPoints} points.`;

			break;
	}
}
