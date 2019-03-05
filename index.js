let players = [
  { name: 'Bernard', email: 'bernard@example.com' },
  { name: 'Youchi', email: 'youchi@example.com' },
  { name: 'Yenting', email: 'yenting@example.com' },
  { name: 'Angela', email: 'angela@example.com' },
  { name: 'Yvonne', email: 'yvonne@example.com' },
  { name: 'Ellen', email: 'ellen@example.com' },
  { name: 'Walter', email: 'walter@example.com' },
  { name: 'Kevin', email: 'kevin@example.com' },
  { name: 'Tim', email: 'tim@example.com' },
  { name: 'Russell', email: 'russell@example.com' }
]

// FUNCTIONS /////////////////////////////////////

let list = []

function drawWinner(players, prize) {
  // write your code here
  while (true) {
    let random = Math.floor(Math.random() * players.length)
    let winner = players[random]

    if (!list.includes(winner)) {
      announceMsg(winner, prize)
      list.push(winner)
      break
    }
  }
}

function announceMsg(winner, prize) {
  console.log(`${winner.number} | ${encodeName(winner.name)} | ${encodeEmail(winner.email)} | ${prize}`)
}

// add more functions here
function encodeName(name) {
  let hideName = name.slice(0, 2)

  for (let i = 0; i <= name.length - 2; i++) {
    hideName = hideName + '*'
  }
  return hideName
}

function encodeEmail(email) {
  let output = ''
  let indexEmail = email.indexOf('@')
  let topEmail = email.slice(0, indexEmail)
  let endEmail = email.slice(indexEmail)

  if (topEmail.length % 2 === 0) {
    topEmail = topEmail.slice(0, 3)
  } else {
    topEmail = topEmail.slice(0, 2)
  }

  output = topEmail + '...' + endEmail
  return output
}
// EXECUTING /////////////////////////////////////

// each player gets a lottery ticket
// write your code here
function getLotteryTicket() {
  for (let lotteryTicket of players) {
    let number = ''
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let randomLetters = ''
    let randomNumber = ''

    for (let i = 0; i < 2; i++) {
      let character = Math.floor(Math.random() * 25)
      randomLetters = randomLetters + letters[character]
    }

    for (let i = 0; i < 4; i++) {
      randomNumber = randomNumber + Math.floor(Math.random() * 9)
    }

    number = randomLetters + randomNumber
    lotteryTicket['number'] = number
  }
}
// draw 3 winners and announce the results
getLotteryTicket()
drawWinner(players, '頭獎')
drawWinner(players, '貮獎')
drawWinner(players, '叁獎')

// the rest of players get participation award
// write your code here

let participationAward = players.length - list.length
for (let i = 0; i < participationAward; i++) {
  drawWinner(players, '參加獎')
}