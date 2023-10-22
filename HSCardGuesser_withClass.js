const lastGuesses = document.querySelector(".lastGuesses");
const cardSpitter = document.querySelector("#cardSpitter");
cardSpitter.addEventListener("click", cardSpit);
const clues = document.querySelector(".clues");
const artContainer = document.querySelector("#artContainer");
var SpittedCard;

// elements and function to verify user input
const inputGuess = document.querySelector("#inputGuess");
const buttonGuess = document.querySelector("#buttonGuess");
const finalStatement = document.querySelector(".finalStatement");
buttonGuess.addEventListener("click", luckTester);
const GuessOptions = document.querySelector(".GuessOptions");
const guessName = document.querySelector(".guessName");

class Card {
	/**
	 *
	 * @param {string} title
	 * @param {string} id
	 */
	constructor(title, id) {
		this._title = title;
		this._id = id;
		this._artist;
		this._type;
		this._allNames = [];

		this._tries = 0; // important to the game as a whole
		this._cluesList = []; // important to the game
		this._artAPI =
			"https://art.hearthstonejson.com/v1/render/latest/enUS/512x/"; // display the card's art
	}

	/**
	 * @returns {string}
	 */
	get ArtCard() {
		this.ArtCard = this._id;

		return this._artAPI;
	}
	/**
	 * @param {string} string
	 */
	set ArtCard(string) {
		this._artAPI = `${this._artAPI}${string}.png`;
	}

	get Tries() {
		// what happens when trying to get this property value?
		// returns something

		if (this._tries <= this.CluesList.length + 1) {
			return this._tries;
		} else {
			gameOver();

			return false;
		}
	}
	/**
	 * @param {number} number
	 */
	set Tries(number) {
		// what happens when trying to set a property to this value?
		// receives an argument

		if (this._tries <= this.CluesList.length + 1) {
			this._tries = this._tries + number;
		} else {
			gameOver();
		}
	}

	get CluesList() {
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

				this.CluesList = _spellClues;

				break;
			case "minion":
				const _minionClues = [
					this.Flavor,
					this.Race,
					this.Rarity,
					this.Cost,
					`${this.Attack}/${this.Health}`,
					this.CardClass,
					this.Text,
				];

				this.CluesList = _minionClues;

				break;
			case "weapon":
				const _weaponClues = [
					this.Flavor,
					`${this.Attack}/${this.Durability}`,
					this.Rarity,
					this.Cost,
					this.Cost,
					this.CardClass,
				];

				this.CluesList = _weaponClues;

				break;
			case "hero":
				let ArmorHP = `${this.Armor} armor and ${this.Health} health`;
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

				this.CluesList = _heroClues;

				break;
		}
		return this._cluesList;
	}
	/**
	 * @param {Object[]} array
	 * @param {string} array[]
	 */
	set CluesList(array) {
		this._cluesList = array;
	}

	/**
	 * @returns {Object[]}
	 */
	get allNames() {
		console.log(this._allNames);

		return this._allNames;
	}
	/**
	 * @param {Object[]} array
	 * @param {string} array[]
	 */
	set allNames(array) {
		this._allNames = this._allNames.push(array);
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

	/**
	 * @returns {string}
	 */
	get Title() {
		return this._title.toLowerCase();
	}
	/**
	 * @param {string} string
	 */
	set Title(string) {
		this._title = string;
	}

	/**
	 * @returns {string}
	 */
	get Type() {
		return this._type;
	}
	/**
	 * @param {string} string
	 */
	set Type(string) {
		this._type = string.toLowerCase();
	}

	/**
	 * @returns {string}
	 */
	get Artist() {
		if (this._artist === undefined) {
			return `don't know who`;
		} else {
			return this._artist;
		}
	}
	/**
	 * @param {string} string
	 */
	set Artist(string) {
		this._artist = string;
	}

	/**
	 * @returns {number}
	 */
	get Attack() {
		return this._attack;
	}
	/**
	 * @param {number} number
	 */
	set Attack(number) {
		this._attack = number;
	}

	/**
	 * @returns {number}
	 */
	get Durability() {
		return this._durability;
	}
	/**
	 * @param {number} number
	 */
	set Durability(number) {
		this._durability = number;
	}

	/**
	 * @returns {number}
	 */
	get Armor() {
		return this._armor;
	}

	/**
	 * @param {number} number
	 */
	set Armor(number) {
		this._armor = number;
	}

	/**
	 * @returns {number}
	 */
	get Health() {
		return this._health;
	}
	/**
	 * @param {number} number
	 */
	set Health(number) {
		this._health = number;
	}

	/**
	 * @returns {string}
	 */
	get Mechanics() {
		return this._mechanics;
	}
	/**
	 * @param {string} string
	 */
	set Mechanics(string) {
		this._mechanics = string;
	}

	get CardClass() {
		if (this._cardClass == undefined) {
			return this.Classes;
		} else {
			return `belongs to ${this._cardClass.toLowerCase()}s`;
		}
	}
	/**
	 * @param {string} string
	 */
	set CardClass(string) {
		this._cardClass = string;
	}

	/**
	 * @returns {string}
	 */
	get Classes() {
		return this._classes.toLowerCase();
	}
	/**
	 * @param {string} string
	 */
	set Classes(string) {
		this._classes = string;
	}

	/**
	 * @returns {string}
	 */
	get Rarity() {
		switch (this._rarity) {
			case "FREE":
				return ` a core set card`;

			default:
				return `${this._rarity.toLowerCase()} card`;
		}
	}
	/**
	 * @param {string} string
	 */
	set Rarity(string) {
		this._rarity = string;
	}

	/**
	 * @returns {string}
	 */
	get SpellSchool() {
		switch (this._spellSchool) {
			case undefined:
				return `this ${this.Type} belongs to no school of magic`;

			default:
				return `belongs to ${this._spellSchool.toLowerCase()} school of magic`;
		}
	}
	/**
	 * @param {string} string
	 */
	set SpellSchool(string) {
		this._spellSchool = string;
	}

	/**
	 * @returns {string}
	 */
	get Race() {
		switch (this._race) {
			case undefined:
				return `this ${this.Type} has no type`;

			default:
				return this._race.toLowerCase();
		}
	}
	/**
	 * @param {string} string
	 */
	set Race(string) {
		this._race = string;
	}

	/**
	 * @returns {string}
	 */
	get Text() {
		return `'${this._text}'`;
	}
	/**
	 * @param {string} string
	 */
	set Text(string) {
		this._text = string;
	}

	/**
	 * @returns {string}
	 */
	get Flavor() {
		if (this._flavor == undefined) {
			return `no flavor`;
		} else {
			return `'${this._flavor}'`;
		}
	}
	/**
	 * @param {string} string
	 */
	set Flavor(string) {
		this._flavor = string;
	}

	/**
	 * @returns {string}
	 */
	get Cost() {
		return `costs ${this._cost} mana`;
	}
	/**
	 * @param {number} number
	 */
	set Cost(number) {
		this._cost = number;
	}
	/**
	 * @returns {string}
	 */
	get Id() {
		return this._id;
	}
	/**
	 * @param {string} string
	 */
	set Id(string) {
		this._id = string;
	}
	/**
	 * @returns {string}
	 */
	get Set() {
		return this._set;
	}
	/**
	 * @param {string} string
	 */
	set Set(string) {
		this._set = string;
	}

	_cardDestructed(jsonCard) {
		let date = new Date();
		let randomNumber = Math.floor(Math.random(date) * 3845);

		for (let i in jsonCard) {
			let { name } = jsonCard[i];
			this._allNames.push(name);
		}

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

		return true;
	}

	getInfo() {
		console.clear();
		console.log(
			`Tries: ${this.Tries};\nMax tries: ${this.CluesList.length};\nTitle: ${
				this.Title
			};\nFirst card (list): ${this._allNames[0]};\nLast card (list): ${
				this._allNames[this._allNames.length - 1]
			}.\n${this._allNames.length}`
		);

		return true;
	}
}

function cardSpit() {
	SpittedCard = new Card("none", undefined);
	SpittedCard.cardFetch();
	SpittedCard.cardBanner();

	return SpittedCard;
}

function startGame() {
	inputGuess.value = "";
	lastGuesses.innerHTML = "<h3>Last Guesses</h3>";
	clues.innerHTML = "";
	finalStatement.innerHTML = "";
	buttonGuess.addEventListener("click", luckTester);

	clues.insertAdjacentHTML(
		"beforeend",
		`<h2>Clues</h2>
		<div>
			<b class="clueHeader">Free clue</b>: ${SpittedCard.freeClue()}
		</div>`
	);

	return true;
}

function luckTester() {
	if (!inputGuess.value || !SpittedCard) {
		alert(
			"Don't need no rush, champion!\nSpit a card and give your guess first."
		);
	} else {
		SpittedCard.Tries = 1;
		SpittedCard.getInfo();

		switch (SpittedCard.Title) {
			case inputGuess.value.toLowerCase(): // verify if it is the card's name
				gameWon();

				break;

			default: // all other possibilities I didn't see coming
				if (SpittedCard.Tries == SpittedCard.CluesList.length + 1) {
					gameOver();
				} else {
					clueGenerator();
					lastGuesses.insertAdjacentHTML(
						"beforeend",
						`<b>${SpittedCard.Tries}:</b> ${inputGuess.value}<br>`
					);
				}

				break;
		}
	}
	inputGuess.value = "";

	return true;
}

// function to determine which clue must be given
function clueGenerator() {
	switch (SpittedCard.Type) {
		case "spell":
			clues.insertAdjacentHTML(
				"beforeend",
				`<div><b class="clueHeader">Clue ${SpittedCard.Tries}:</b> ${
					SpittedCard.CluesList[SpittedCard.Tries - 1]
				}.</div>`
			);

			break;
		case "minion":
			clues.insertAdjacentHTML(
				"beforeend",
				`<div><b class="clueHeader">Clue ${SpittedCard.Tries}:</b> ${
					SpittedCard.CluesList[SpittedCard.Tries - 1]
				}.</div>`
			);

			break;
		case "weapon":
			clues.insertAdjacentHTML(
				"beforeend",
				`<div><b class="clueHeader">Clue ${SpittedCard.Tries}:</b> ${
					SpittedCard.CluesList[SpittedCard.Tries - 1]
				}.</div>`
			);

			break;
		case "hero":
			clues.insertAdjacentHTML(
				"beforeend",
				`<div><b class="clueHeader">Clue ${SpittedCard.Tries}:</b> ${
					SpittedCard.ClueList[SpittedCard.Tries - 1]
				}.</div>`
			);

			break;
		default:
			clues.innerHTML = `<div>This card exists?<br>Try to spit another one.</div>`;

			break;
	}

	return true;
}

// function to deliver the points
function gameWon() {
	buttonGuess.removeEventListener("click", luckTester);
	artContainer.innerHTML = `<img src="${SpittedCard.ArtCard}"/>`;

	const initialPoints = 100;
	let finalPoints;

	switch (SpittedCard.Tries) {
		case 1:
			finalPoints = Math.round(initialPoints / 1);
			finalStatement.innerHTML = `Congratulations, champion!<br>After ${SpittedCard.Tries} guess, you've earned ${finalPoints} points.`;

			break;
		case 2:
			finalPoints = Math.round(initialPoints / 1);
			finalStatement.innerHTML = `Congratulations, champion!<br>After ${SpittedCard.Tries} guesses, you've earned ${finalPoints} points.`;

			break;

		default:
			finalPoints = Math.round(initialPoints / (SpittedCard.Tries - 1));
			finalStatement.innerHTML = `Congratulations, champion!<br>
			After ${SpittedCard.Tries} guesses, you've earned ${finalPoints} points.`;

			break;
	}
}

function gameOver() {
	buttonGuess.removeEventListener("click", luckTester);
	artContainer.innerHTML = `<img src="${SpittedCard.ArtCard}"/>`;

	finalStatement.innerHTML =
		"I'm sorry, comrade!<br>Spit another card if you want to try again.";

	return true;
}

function CardSearch() {
	switch (inputGuess.value) {
		case "":
			GuessOptions.classList.remove("show");

			break;
		default:
			GuessOptions.innerHTML = "";
			GuessOptions.classList.add("show");

			const titles = SpittedCard.allNames.filter((title) =>
				title.toLowerCase().includes(inputGuess.value.toLowerCase())
			);

			for (let i in titles) {
				GuessOptions.insertAdjacentHTML(
					"beforeend",
					`<div class="guessName" onclick="guessSelection('${titles[i]}')">${titles[i]}</div>`
				);
			}

			break;
	}
}

/**
 *
 * @param {string} guess
 * @returns {void}
 */
function guessSelection(guess) {
	inputGuess.value = guess;

	return console.log(guess);
}
