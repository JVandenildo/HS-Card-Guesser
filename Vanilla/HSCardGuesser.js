var card = {
    title: "none",
    type: "none",
    attack: 6,
    life: 7,
    cost: 6
};

function cardSpit(){
    alert(card.cost);
    let date = new Date();
    let randomLuck = Math.round(Math.random(date) * 10);
    
    card.cost = randomLuck;
    alert(card.cost);

    resetGame();
}

const inputGuess = document.querySelector('#inputGuess');
const buttonGuess = document.querySelector('#buttonGuess');
buttonGuess.addEventListener("click", luckTester);

function luckTester(){
    alert(card.cost);

    resetGame();
}


function resetGame(){
    return inputGuess.value = "";
}