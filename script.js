// const batuPlayer = document.querySelector(".batuPlayer");
// const guntingPlayer = document.querySelector(".guntingPlayer");
// const kertasPlayer = document.querySelector(".kertasPlayer");
const gameImg = document.querySelector(".gameimage");
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
btnBatu.classList.add("disable")
// game logic
// btn batu
btnBatu.addEventListener("click", function(){
    // whys my disable not working?
    // batuPlayer.disabled = true;
    // guntingPlayer.disabled = true;
    // kertasPlayer.disabled = true;
    btnBatu.classList.add("changeColor");
    versusAnc.classList.add("hide");
    const comPick = Math.floor(Math.random() * 3)+1;
    console.log(comPick)
    if (comPick === 1) {
        btnBatuCom.classList.add("changeColor");
        draw.classList.remove("hide");
    } else if (comPick === 2) {
        btnKertasCom.classList.add("changeColor");
        comWin.classList.remove("hide");
    } else if (comPick === 3) {
        btnGuntingCom.classList.add("changeColor");
        playerWin.classList.remove("hide");
    }
});
// btn gunting
btnGunting.addEventListener("click", function(){
    btnBatu.disabled = "true";
    btnKertas.disabled = "true";
    btnGunting.disabled = "true";
    btnGunting.classList.add("changeColor");
    versusAnc.classList.add("hide");
    const comPick = Math.floor(Math.random() * 3)+1;
    console.log(comPick)
    if (comPick === 1) {
        btnBatuCom.classList.add("changeColor");
        comWin.classList.remove("hide");
    } else if (comPick === 2) {
        btnKertasCom.classList.add("changeColor");
        playerWin.classList.remove("hide");
    } else if (comPick === 3) {
        btnGuntingCom.classList.add("changeColor");
        draw.classList.remove("hide");
    }
});
// btn kertas
btnKertas.addEventListener("click", function(){
    btnBatu.disabled = "true";
    btnKertas.disabled = "true";
    btnGunting.disabled = "true";
    btnKertas.classList.add("changeColor");
    versusAnc.classList.add("hide");
    const comPick = Math.floor(Math.random() * 3)+1;
    console.log(comPick)
    if (comPick === 1) {
        btnBatuCom.classList.add("changeColor");
        playerWin.classList.remove("hide");
    } else if (comPick === 2) {
        btnKertasCom.classList.add("changeColor");
        draw.classList.remove("hide");
    } else if (comPick === 3) {
        btnGuntingCom.classList.add("changeColor");
        comWin.classList.remove("hide");
    }
});

// a really lazy and desperate way to do refresh button
btnRefresh.addEventListener("click", function(){
    btnBatu.classList.remove("changeColor");
    btnKertas.classList.remove("changeColor");
    btnGunting.classList.remove("changeColor");
    btnBatuCom.classList.remove("changeColor");
    btnKertasCom.classList.remove("changeColor");
    btnGuntingCom.classList.remove("changeColor");
    versusAnc.classList.remove("hide");
    playerWin.classList.add("hide");
    comWin.classList.add("hide");
    draw.classList.add("hide");
})