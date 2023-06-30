let player={
  Name:"brc0d3s",
  Chips:170
}

let cards = []

let sum =0

let hasBlackJack = false
let isAlive = false;
let message = "";


let messageEl=document.querySelector(".message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")

playerEl.textContent=player.Name+ ": $" +player.Chips

function getRandomnCard(){
  let randomNumber=Math.floor(Math.random()*13)+1
  if(randomNumber>10){
    return 10
  }else if(randomNumber===1){
    return 11
  }else{
    return randomNumber
  }
}


function startGame(){
  isAlive=true
  let firstCard = getRandomnCard();
  let secondCard = getRandomnCard();
  cards=[firstCard,secondCard]
  sum=firstCard+secondCard
  renderGame()
}



function renderGame() {

  sumEl.textContent="Sum: "+sum;
  cardsEl.textContent="Cards: " 

  for(let i=0;i<cards.length;i++){
      cardsEl.textContent+=cards[i] + " "
  }


  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "you've blackjacked";
    hasBlackJack = true;
  } else {
    message = "You're out of the game";
    isAlive = false;
  }

  messageEl.textContent=message;
}


function newCard(){
  if(isAlive===true && hasBlackJack===false){
    let ncard=getRandomnCard();
    cards.push(ncard)
    sum+=ncard;
    renderGame();
  }
}