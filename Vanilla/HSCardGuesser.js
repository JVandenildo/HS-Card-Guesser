function cardSpit(){
    console.log('Your card, sir!');
}

const inputGuess = document.querySelector('#inputGuess');
const buttonGuess = document.querySelector('#buttonGuess');
buttonGuess.addEventListener("click", luckTester);

function luckTester(){
    console.log('Luck tested.');
}