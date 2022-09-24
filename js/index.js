import { questions } from './question.js'

function revealAnswer() {
  let answer = document.querySelector('.txt')

  answer.classList.toggle('blur')
}

function nextQuestion(next) {
  let question = document.querySelector('.card-question')

  question.innerHTML = ''

  let newQuestion = document.createElement('div')

  newQuestion.classList.add(
    'card-question',
    'animate__animated',
    'animate__backInRight'
  )

  newQuestion.innerHTML = `
  <div class="tt">
  <h1>O que é ${next.title}?</h1>
</div>

<div class="txt blur">
  <p>
   ${next.description}
  </p>
</div>
  `
  question.appendChild(newQuestion)
}

function srcQuestion() {
  let value = Math.floor(Math.random() * questions.length)
  let anyQuestion = questions[value]
  nextQuestion(anyQuestion)
}

srcQuestion()
