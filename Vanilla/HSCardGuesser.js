var card = {
    title: "none",
    type: "none",
    attack: "none",
    life: "none",
    cost: "none",

    tries: 0
};
function cardSpit(){
    resetGame();

    let date = new Date();
    let randomLuck = Math.round(Math.random(date) * 10);

    card.title = randomLuck.toString();
}

const inputGuess = document.querySelector('#inputGuess');
const buttonGuess = document.querySelector('#buttonGuess');
buttonGuess.addEventListener("click", luckTester);

var lastGuessesList = [];
const lastGuesses = document.querySelector('.lastGuesses');
function luckTester(){
    switch (card.title) {
        case "none":
            alert("You need to spit the card first!");
            
            break;
        
        case inputGuess.value:
            card.tries++;
            alert(`Acertou com ${card.tries} tentativas.`);

            break;
    
        default:
            card.tries++;
            lastGuessesList.push(inputGuess.value);
            lastGuesses.insertAdjacentHTML("beforeend", `<p>${lastGuessesList[lastGuessesList.length - 1]}</p>`);
            alert(`Your card ${card.title}. Tries: ${card.tries}.`);

            break;
    }

    inputGuess.value = "";
}


function resetGame(){
    inputGuess.value = "";
    card.tries = 0;
    card.title = "none";
    lastGuessesList.length = 0;
    lastGuesses.innerHTML = "<h3>Last Guesses</h3>";
}