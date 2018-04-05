import * as request from 'superagent'
const baseUrl = 'http://localhost:4001'

export const ALL_BATCHES = 'ALL_BATCHES'


export const allBatches = () => (dispatch) => {
  request
    .get(`${baseUrl}/batches/`)
    .then(result => {
      dispatch({
        type: ALL_BATCHES,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const showTeacherQuiz = (id) => (dispatch) => {
  request
  .get(`${apiUrl}/results/quiz/${id}`)
  .then(result => {
    dispatch({
        type: SHOW_TEACHER_QUIZ,
        payload: result.body
    })
  })
.catch(err => console.error(err))
}
