import { generateId } from "../Utils/generateId.js"


export class Question {
  constructor(data) {
    this.id = generateId()
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswer = data.incorrect_answers
  }

  get QuestionTemplate() {
    return `
    <div class="row">
    <div class="col-12">
      <h4>${this.question}</h4>
    </div>
    <div class="col-6">
      <div class="p-3 m-3 bg-dark text-light elevation-2"  onclick="app.questionsController.submitAnswer('${this.correctAnswer}')">
        <p>Answer A: ${this.correctAnswer}</p>
      </div>
    </div>
    <div class="col-6">
      <div class="p-3 m-3 bg-dark text-light elevation-2" onclick="app.questionsController.submitAnswer('${this.incorrectAnswer[0]}')">
        <p>Answer B: ${this.incorrectAnswer[0]}</p>
      </div>
    </div>
    <div class="col-6">
      <div class="p-3 m-3 bg-dark text-light elevation-2" onclick="app.questionsController.submitAnswer('${this.incorrectAnswer[1]}')">
        <p>Answer C: ${this.incorrectAnswer[1]}</p>
      </div>
    </div>
    <div class="col-6">
      <div class="p-3 m-3 bg-dark text-light elevation-2" onclick="app.questionsController.submitAnswer('${this.incorrectAnswer[2]}')">
        <p>Answer D: ${this.incorrectAnswer[2]}</p>
      </div>
    </div>
  </div>
    `
  }

  // get randomAnswers() {
  //   let answers = this.incorrectAnswer.map(i => i += this.correctAnswer)
  //   console.log(answers)

  //   for (i = 0; i < answers.length; i++) {
  //     let temp = ''
  //     if ()
  //       answers[i] = answers[Math.floor(Math.random() * answers.length)]
  //   }





}
