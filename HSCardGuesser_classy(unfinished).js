const clues = document.querySelector('.clues');
const lastGuesses = document.querySelector('.lastGuesses');
var lastGuessesList = [];
const finalStatement = document.querySelector('.finalStatement');
const cardSpitter = document.querySelector('#cardSpitter');
cardSpitter.addEventListener("click", cardSpit);

class card{
	constructor(title, id){
		this.title = title;
		this.id = id;
		this.cardClass = undefined;
		this.rarity = undefined;
		this.spellSchool = undefined;
		this.text = undefined;
		this.type = undefined;
		this.flavor = undefined;
		this.cost = undefined;
		this.mechanics = undefined;
		this.artist = undefined;
		this.set = undefined;
		this.race = undefined;
		this.attack = undefined;
		this.durability = undefined;
		this.armor = undefined;
		this.health = undefined;
	
		this.Tries = 0;
	}

	get modifier(){
		let apiURL = "https://api.hearthstonejson.com/v1/95431/enUS/cards.collectible.json";
		fetch(apiURL)
		.then(response => response.json())
		.then(jsonObj => displayCard(jsonObj))
		.catch(() => alert('API could not be reached at this time. This means your luck won\'t be tested now. Sorry, kiddo.'));
	
		return this.id;
	}

	cardSpit(){
		this.displayCard();
		this.id = id;
		this.cardClass = `belongs to ${cardClass.toLowerCase()}s.`;
		if(cardClass === undefined){
			this.cardClass = classes;
		}
	}

	displayCard (cardAPI) {
		let date = new Date();
		let randomNumber = Math.floor(Math.random(date) * 3800);
	
		return { id, durability, attack, armor, health, artist, mechanics, name, cardClass, classes, rarity, spellSchool, race, text, type, flavor, cost, set } = cardAPI[randomNumber];
	}
}

function cardSpit(){
	let cardSpitted = new card("none", undefined);

	console.log("Before", cardSpitted);
	cardSpitted.cardSpit;
	cardSpitted.displayCard;
	cardSpitted.modifier;
	console.log("After", cardSpitted);

	resetGame();
}

const inputGuess = document.querySelector('#inputGuess');
const buttonGuess = document.querySelector('#buttonGuess');
buttonGuess.addEventListener("click", luckTester);
function luckTester(){
	if(!inputGuess.value){
		console.log("nothing guessed");
	}
	else{
		console.log(inputGuess.value);
	}
	inputGuess.value = "";

	return true;
}

// function to reset game. I know, name delivers
function resetGame(){
    inputGuess.value = "";
    //card.Tries = 0;
    lastGuessesList.length = 0;
    lastGuesses.innerHTML = "<h3>Last Guesses</h3>";
    clues.innerHTML = "";
    finalStatement.innerHTML = "";
    //buttonGuess.addEventListener("click", luckTester);

    return true;
}

// function to cover the game over. I know, name delivers
/*function gameOver(){
    switch (card.Tries) {
        case 15:
            finalStatement.innerHTML = 'Alright, alright...<br>I\'ll give another card. Wait a minute, would you?';
            console.log(`You are insistent, aren't you...? The card was ${card.title}.`);
            setTimeout(cardSpit(), 600000);
            
            break;
    
        default:
            finalStatement.innerHTML = 'I\'m sorry, comrade!<br>Spit another card if you want to try again!';

            break;
    }
}*/

//function to ban some cards, wink ;)
/*function cardBanner(){
    switch (card.set) {
        case "HERO_SKINS":
        case "ENCHANTMENT":
        case "HERO_POWER":
            console.log("Banned card.");
            cardSpit();

            break;
    }
}*/