const playerBtns = document.querySelectorAll('[data-selection]')
const btnBatu = document.querySelector(".batu");
const btnKertas = document.querySelector(".kertas");
const btnGunting = document.querySelector(".gunting");
const btnBatuCom = document.querySelector(".batu-com");
const btnKertasCom = document.querySelector(".kertas-com");
const btnGuntingCom = document.querySelector(".gunting-com");
const btnRefresh = document.querySelector(".refreshbtn");
const versusAnc = document.querySelector(".vs-font");
const playerWin = document.querySelector(".player-win");
const comWin = document.querySelector(".com-win");
const draw = document.querySelector(".draw");


// starting conditions
playerWin.classList.add("hide");
comWin.classList.add("hide");
draw.classList.add("hide");

// determining value of each button click
const playerChoice = playerBtns.forEach(playerBtn => {
    playerBtn.addEventListener('click', e => {
        const selectionName = playerBtn.dataset.selection
        makeSelection(selectionName)
    })
})

function makeSelection(selection) {
    console.log(selection)
}

// random generate value of com pick
const computerOptions = ["batu", "gunting", "kertas",];

playerBtns.forEach(playerBtn => {
    playerBtn.addEventListener('click', function() {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        console.log(computerChoice)
    // game logic
    })
})

// VS and option bg
const playerButtons = [btnBatu, btnKertas, btnGunting,];

playerButtons.forEach(playerButton => {
    playerButton.addEventListener ('click', function() {
        versusAnc.classList.add("hide");
        playerButton.classList.add("changeColor");
    })
})

// game logic
const gameResult = (playerChoice,computerChoice) => {
    if(playerChoice === computerChoice){
        draw.classList.remove("hide");
    }}