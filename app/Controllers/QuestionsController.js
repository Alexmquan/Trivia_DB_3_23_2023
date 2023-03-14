import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawQuestion() {
  // console.log('drawing Questions')

  // let question = appState.questions
  // let template = ''
  // question.forEach(q => template = q.QuestionTemplate);
  // setHTML('gameTemplate', template)
  console.log('drawing Questions')

  let question = appState.activeQuestion
  let template = ''
  template = question.QuestionTemplate
  setHTML('gameTemplate', template)
}

function _drawCount() {

  setText('count', appState.count)
}

export class QuestionsController {
  constructor() {
    appState.on('activeQuestion', _drawQuestion)
    this.getQuestions()
  }

  submitAnswer(answer) {
    // let questions = appState.questions

    // questions.forEach(q => {
    //   if (q.correctAnswer = answer) {
    //     questionsService.submitAnswer()
    //     _drawQuestion()
    //   }
    // })

    let question = appState.activeQuestion
    if (question.correctAnswer == answer) {
      console.log('correct answer')
      questionsService.raiseCount()
      console.log(appState.count)
      questionsService.submitAnswer()
      _drawCount()
    } else {
      Pop.toast('Try again', 'error', 'center')
    }
  }



  async getQuestions() {
    try {
      await questionsService.getQuestions()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}