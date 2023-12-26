//PLAY POKER START HERE
// creating variable
let hasBlackJack = false
let isAlive = false
let disabled = false
let gameName = "(-: Let's Play :-)"
let msgName = 'Wanna bet on your luck?'
let message = ''
let sum = 0
let cards = []
const cardName = "Show Cards: "
const sumName = "Card Total:"
let btnStart = 'START GAME'
let btnNew = 'NEW CARD'
let playerName = []
let credits = 120 
const division = '|'
const winner = 'Congratulations!'

//getting the id

const startEl = document.getElementById('start-el')
const newEl = document.getElementById('new-el')
const messageEl = document.getElementById('message-el')
const display = document.getElementById('message-el')
const displaySum = document.getElementById('sum-el')
const cardEl = document.getElementById('card-el')
const resetEl = document.getElementById('reset-el');
const playerEl = document.getElementById('player-el')
const inputEl = document.getElementById('input-el')
const submitEl = document.getElementById('submit-el')
const pokerEl = document.getElementById('poker-el')

const clearEl = document.getElementById('clear-el')
//displaying the text
pokerEl.textContent = `${gameName}`
messageEl.textContent = `${msgName}`
cardEl.textContent = `${cardName}`
startEl.textContent = `${btnStart}`
newEl.textContent = `${btnNew}`
displaySum.textContent = `${sumName}`

const playerData = JSON.parse(localStorage.getItem('playerName'))

//blinker condition
  const blink = document.getElementById('message-el')
  setInterval(function() {
    blink.style.color = 'yellow'
    blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0)
    }, 500)
//conditional or logic
if(playerData) {
    playerName = playerData
    playerEl.textContent = `Player: ${playerName} ${division}
    Credits: ${credits}`
}else if(!playerData) {
    disabled = document.getElementById('start-el').disabled = true
    disabled = document.getElementById('new-el').disabled = true
} else {
    disabled = document.getElementById('start-el').disabled = false
    disabled = document.getElementById('new-el').disabled =  false
}
//submit form
submitEl.addEventListener('click', function(){
  if(!inputEl.value) {
    disabled = document.getElementById('submit-el')
  }else {
    playerName.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("playerName", JSON.stringify(playerName))
    location.reload()
  }
  })
  const getRandomCard = () => {
    let randomNumber = (Math.floor( Math.random()* 13 ) + 1)
    if(randomNumber > 10) {
      return 10
    } else if(randomNumber === 1) {
      return 11
    } else {
      return randomNumber
    }
  }
const startgame = () => {
  isAlive = true
  let fCard = getRandomCard()
  let sCard = getRandomCard()
  cards = [fCard, sCard]
  sum = fCard + sCard
  rendergame()
}
const rendergame = () => {
  cardEl.textContent = `${cardName}`
  for(let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + '-'
}
  displaySum.textContent = `Sum: ${sum}`
  if(sum < 21 || sum == 20) {
    msgName = 'Do you want to draw another card!'
} else if (sum === 21 && credits > 40 ) {
    msgName = "You won! You got blackjact!"
    cardEl.textContent = `${winner} ${playerName}`
    playerEl.textContent = `Player: ${playerName}
    ${division} Credits: ${credits += 40}`
    pokerEl.textContent = '40 was added to your credits!'
    hasBlackJack = true
      setTimeout(() => {
        messageEl.textContent = 'Wanna bet on your luck?'
        cardEl.textContent = `${cardName}`
        displaySum.textContent = `${sumName}`
        pokerEl.textContent = `${gameName}`
      },8000)
      hasBlackJack = false
    display.textContent = message
} else if (sum === 21 && credits < 50) {
    msgName = "You won! You got blackjact!"
    cardEl.textContent = `${winner} ${playerName}`
    playerEl.textContent = `Player: ${playerName} 
    ${division} Credits: ${credits += 100}`
    pokerEl.textContent = '100 was added to your credits!'
    hasBlackJack = true
      setTimeout(() => {
        cardEl.textContent = `${cardName}`
        messageEl.textContent = 'Wanna bet on your luck?'
        displaySum.textContent = `${sumName}`
        pokerEl.textContent = `${gameName}`
      },8000)
      hasBlackJack = false
      display.textContent = message
} else {
    msgName = 'You are out of the game!'
    playerEl.textContent = `Player: ${playerName} 
    ${division} Credits: ${credits -= 10}`
    isAlive = false
  } if(credits === 0) {
    msgName = 'You are out of credits!'
    isAlive = false
  }
  display.textContent = msgName
}

const playerCredits = () => {
  if(credits === 0){
    message = 'You are out of credits!'
    displaySum.textContent = ''
    cardEl.textContent = ''
    disabled = document.getElementById('start-el').disabled = true
    disabled = document.getElementById('new-el').disabled = true
  }
}
const newcard = () => {
  if(isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    cards.push(card)
    sum += card
    rendergame()
  } 
}

if(playerName.length > 0) {
  disabled = document.getElementById('input-el').disabled = true 
  disabled = document.getElementById('submit-el').disabled = true   
}
const handleReset = () => {
  location.reload()
  console.log('Game restarted')
}
clearEl.addEventListener('click', function() {
  localStorage.clear()
  playerName = ''
  disabled = document.getElementById
  ('input-el').disabled = false
  location.reload()
})




















 