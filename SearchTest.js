// elements and function to verify user input
var cardName = [];
const inputGuess = document.querySelector("#inputGuess");
const GuessOptions = document.querySelector(".GuessOptions");
const guessName = document.querySelector(".guessName");

function guessSelection(guess) {
	inputGuess.value = guess;

	return console.log(guess);
}

function CardSearch() {
	switch (inputGuess.value) {
		case "":
			GuessOptions.classList.remove("show");

			break;
		default:
			GuessOptions.innerHTML = "";
			GuessOptions.classList.add("show");

			const titles = cardName.filter((title) =>
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

const apiURL =
	"https://api.hearthstonejson.com/v1/95431/enUS/cards.collectible.json";
fetch(apiURL)
	.then((response) => response.json())
	.then((jsonObj) => getNames(jsonObj))
	.catch(() =>
		alert(
			"API could not be reached at this time. This means your luck won't be tested now.\nSorry, kiddo."
		)
	);

function getNames(cardAPI) {
	for (let i in cardAPI) {
		let { name } = cardAPI[i];
		cardName.push(name);
	}
	console.log(cardName[0], cardName[cardName.length - 1]);

	return cardName;
}
