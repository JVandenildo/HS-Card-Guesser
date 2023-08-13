// elements and function to verify user input
var cardName = [];
const inputGuess = document.querySelector("#inputGuess");

function CardSearch() {
	let GuessOptions = document.querySelector(".GuessOptions");
	GuessOptions.classList.toggle("show");

	for (let i = 0; i < cardName.length; i++) {
		if (!cardName[i].includes(inputGuess.value)) {
			GuessOptions.innerHTML = "Nothing yet...";
		} else {
			GuessOptions.innerHTML = `${cardName[i]}<br>`;
		}
	}

	return true;
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

	return cardName;
}
