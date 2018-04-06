import * as request from 'superagent'
const baseUrl = 'http://localhost:4001'

export const GET_STUDENT = 'GET_STUDENT'

export const getStudent = (id) => (dispatch) => {
  request
  .get(`${baseUrl}/students/${id}`)

  .then(result => {
    dispatch({
        type: GET_STUDENT,
        payload: result.body.evaluation
    })
  })
.catch(err => console.error(err))
}
