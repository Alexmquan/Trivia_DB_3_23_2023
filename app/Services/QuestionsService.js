import { appState } from "../AppState.js"
import { Question } from "../Models/Question.js"

class QuestionsService {
  async getQuestions() {
    let response = await axios.get('https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple')
    console.log('axios', response)
    appState.questions = response.data.results.map(questions => new Question(questions))
    console.log('AppState', appState.questions)

    appState.activeQuestion = appState.questions[Math.floor(Math.random() * appState.questions.length)]
  }

  submitAnswer() {
    appState.activeQuestion = appState.questions[Math.floor(Math.random() * appState.questions.length)]
    //removing used array
    // removeArray = appState.questions.find(q => q == appState.activeQuestion)


    // console.log(removeArray)
    // console.log(appState.activeQuestion)

  }

  raiseCount() {
    if (appState.count < 10) {
      appState.count++
    } else appState.count = 0

  }
}

export const questionsService = new QuestionsService()
