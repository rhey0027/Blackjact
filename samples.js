//samples with return method
//  let player1 = 104
//  let player2 = 111

// const getWinnerFastTime = () => {
//   if(player1 < player2){
//     return player1
//     // console.log(player1)
//   }else if(player2 < player1) {
//     return player2
//     // console.log(player2)
//   }else {
//     return player1
//     // console.log(player1)
//   }
// }
//  let winnerPlayer = getWinnerFastTime()
// console.log(winnerPlayer)

//samples for math.random()
// let randomNumber = Math.floor( Math.random()* 12 ) + 1
//console.log(randomNumber)//1-12

//---SAME AS ROLLDICCE2() FUNCTION
// let randomNumber = (Math.floor( Math.random()* 6 ) + 1)
// console.log(randomNumber)

// const rollDice2 = () => {
//   let randomNumber = (Math.floor( Math.random()* 6 ) + 1)
//   return randomNumber
// }
// console.log(rollDice2())

//------LOGICAL OPERATORS

let completeCourse = true
let certificate = false

const genCertificate = () => {
  if(completeCourse === true && certificate === true) {
    console.log('Generating certificates...')
  }else if(completeCourse === false || certificate === true) {
    console.log('you did not complete the course')
  }else {
    console.log('better enroll again next year!')
  }
  
}
genCertificate()