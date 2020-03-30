var totalMinutes = 0
var totalSeconds = 0
var status = 'start'

document.getElementById('startBtn').addEventListener('click', event => { document.getElementById('minutes').textCounter = 2: 00 })

function startTimer() {
  setTime() => {
    document.getElementById('minutes').textContent = counter
    if (counter === 0) {
      counter = 2: 00
    }
  }, 1000)
}

const questions = [
  {
    question: 'What do you use for an array?'
    choices: {
      a. '()',
      b. '""',
      c. '[]',
      d. '<>'
    },
    correctAnswer: 'c'
  },
  {
    question: 'Which is a boolean?'
    choices: {
      a. '28',
      b. '[]',
      c. 'Javascript',
      d. 'True'
    },
    correctAnswer: 'd'
  },
  {
    question: 'Where do you put a style CDN?'
    choices: {
      a. 'In the head tag',
      b. 'In the body tag',
      c. 'In the title tag',
      d. 'At the bottom of the body tag'
    },
    correctAnswer: 'a'
  }
]