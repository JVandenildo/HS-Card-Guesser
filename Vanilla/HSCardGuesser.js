const clues = document.querySelector('.clues');
const lastGuesses = document.querySelector('.lastGuesses');
var lastGuessesList = [];

var card = {
    title: "none",
    id: undefined,
    cardClass: undefined,
    rarity: undefined,
    spellSchool: undefined,
    text: undefined,
    type: undefined,
    flavor: undefined,
    cost: undefined,
    mechanics: undefined,
    artist: undefined,
    set: undefined,
    race: undefined,
    attack: undefined,
    durability: undefined,
    armor: undefined,
    health: undefined,

    Tries: 0
}

function cardSpit(){
    resetGame();
    let apiURL = "https://api.hearthstonejson.com/v1/95431/enUS/cards.collectible.json";
    fetch(apiURL)
    .then(response => response.json())
    .then(jsonObj => displayCard(jsonObj))
    .catch(() => alert('API could not be reached at this time. This means your luck won\'t be tested now. Sorry, kiddo.'));
}

function displayCard (cardAPI) {
    let date = new Date();
    let randomNumber = Math.floor(Math.random(date) * 3800);

    let { id, durability, attack, armor, health, artist, mechanics, name, cardClass, classes, rarity, spellSchool, race, text, type, flavor, cost, set } = cardAPI[randomNumber];
    card.title = name;
    card.id = id;
    card.cardClass = `belongs to ${cardClass.toLowerCase()}s.`;
    if(cardClass === undefined){
        card.cardClass = classes;
    }
    card.type = type.toLowerCase();
    card.cost = `costs ${cost} mana.`;
    card.flavor = flavor;
    switch (rarity){
        case "FREE":
            card.rarity = `a core set card.`;

            break;
        
        default:
            card.rarity = `${rarity.toLowerCase()} card.`;

            break;

    }
    switch (spellSchool) {
        case undefined:
            card.spellSchool = `this ${card.type} belongs to no school of magic.`;
            break;
    
        default:
            card.spellSchool = `belongs to ${spellSchool.toLowerCase()} school of magic.`;

            break;
    }
    switch (race) {
        case undefined:
            card.race = `this ${card.type} has no type.`;
            break;
    
        default:
            card.race = `it is ${race.toLowerCase()}.`;

            break;
    }
    card.text = text;
    card.artist = artist;
    card.mechanics = mechanics;
    card.set = set;
    card.attack = attack;
    card.durability =  durability;
    card.health = health;
    card.armor = armor;
    bruce();

    let freeClue = `<div><b style="font-size: 13pt; color: whitesmoke">Free clue:</b> a ${card.type}, art drew by ${card.artist}.</div>`;
    if(card.artist == undefined){
        freeClue = `<div><b style="font-size: 13pt; color: whitesmoke">Free clue:</b> a ${card.type}.</div>`;
    }
    // console.log(card.title);
    
    clues.innerHTML = `<h2>Clues</h2>${freeClue}`;
}

// elements and function to verify user input
const inputGuess = document.querySelector('#inputGuess');
const buttonGuess = document.querySelector('#buttonGuess');
const finalStatement = document.querySelector('.finalStatement');
buttonGuess.addEventListener("click", luckTester);

function luckTester(){
    if(!inputGuess.value){
        alert('Don\'t need no rush, champion!\nGive your guess first.');
    }
    else{
        switch (card.title.toLowerCase()) {
            case "none":
                clues.innerHTML = "I'm a afraid you cannot guess a card that doesn't exist, pal!";
                
                break;
            
            case inputGuess.value.toLowerCase():
                card.Tries++;
                gameWon();
    
                break;
        
            default:
                card.Tries++;
                clueGenerator();
    
                break;
        }
    }
    inputGuess.value = "";

    return true;
}

// function to determine which clue must be given
function clueGenerator(){
    switch (card.type) {
        case "spell":
            const spellClues = [card.spellSchool, card.rarity, card.cost, card.cardClass, card.text, card.flavor];
            
            if(card.Tries - 1 >= spellClues.length){gameOver();}
            else{
                clues.insertAdjacentHTML("beforeend", `<div><b style="font-size: 13pt;">Clue ${card.Tries}:</b> ${spellClues[card.Tries - 1]}</div>`);
                lastGuessesList.push(inputGuess.value);
                lastGuesses.insertAdjacentHTML("beforeend", `<p>${lastGuessesList[lastGuessesList.length - 1]}</p>`);
            }

            break;
    
        case "minion":
            const minionClues = [card.race, card.rarity, card.cost, `${card.attack}/${card.health}.`, card.cardClass, card.text, card.flavor];
            
            if(card.Tries - 1 >= minionClues.length){gameOver();}
            else{
                clues.insertAdjacentHTML("beforeend", `<div><b style="font-size: 13pt; color: whitesmoke">Clue ${card.Tries}:</b> ${minionClues[card.Tries - 1]}</div>`);
                lastGuessesList.push(inputGuess.value);
                lastGuesses.insertAdjacentHTML("beforeend", `<p>${lastGuessesList[lastGuessesList.length - 1]}</p>`);}

            break;

        case "weapon":
            const weaponClues = [`${card.attack}/${card.durability}.`, card.rarity, card.cost, card.text, card.cardClass, card.flavor];
            
            if(card.Tries - 1 >= weaponClues.length){gameOver();}
            else{
                clues.insertAdjacentHTML("beforeend", `<div><b style="font-size: 13pt; color: whitesmoke">Clue ${card.Tries}:</b> ${weaponClues[card.Tries - 1]}</div>`);
                lastGuessesList.push(inputGuess.value);
                lastGuesses.insertAdjacentHTML("beforeend", `<p>${lastGuessesList[lastGuessesList.length - 1]}</p>`);}

            break;

        case "hero":
            var ArmorHP = `${card.armor} armor and ${card.health} health.`;
            if(card.health == undefined){
                ArmorHP = `${card.armor} armor.`;
            }

            const heroClues = [ArmorHP, card.rarity, card.cost, card.text, card.flavor, card.cardClass];
            
            if(card.Tries - 1 >= heroClues.length){gameOver();}
            else{
                clues.insertAdjacentHTML("beforeend", `<div><b style="font-size: 13pt; color: whitesmoke">Clue ${card.Tries}:</b> ${heroClues[card.Tries - 1]}</div>`);
                lastGuessesList.push(inputGuess.value);
                lastGuesses.insertAdjacentHTML("beforeend", `<p>${lastGuessesList[lastGuessesList.length - 1]}</p>`);}

            break;
    

        default:
            clues.innerHTML = `This card exists? Try to spit another one.`;

            break;
    }
}

// function to reset game. I know, name delivers
function resetGame(){
    inputGuess.value = "";
    card.Tries = 0;
    lastGuessesList.length = 0;
    lastGuesses.innerHTML = "<h3>Last Guesses</h3>";
    clues.innerHTML = "";
    finalStatement.innerHTML = "";
    buttonGuess.addEventListener("click", luckTester);

    return true;
}

// function to deliver the points
function gameWon(){
    buttonGuess.removeEventListener("click", luckTester);
    let initialPoints = 100;
    let finalPoints = Math.round(initialPoints/card.Tries);

    switch (card.Tries) {
        case 1:
            finalStatement.innerHTML = `Congratulations, champion!<br>After ${card.Tries} guess, you've earned ${finalPoints} points.`;
            
            break;
    
        default:
            finalStatement.innerHTML = `Congratulations, champion!<br>After ${card.Tries} guesses, you've earned ${finalPoints} points.`;

            break;
    }
}

// function to cover the game over. I know, name delivers
function gameOver(){
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
}

// function to ban some cards, wink ;)
function bruce(){
    switch (card.set) {
        case "HERO_SKINS":
        case "ENCHANTMENT":
        case "HERO_POWER":
            console.log("Banned card.");
            cardSpit();

            break;
    }
}