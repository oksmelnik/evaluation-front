import * as request from 'superagent'
const baseUrl = 'http://localhost:4001'

export const ALL_BATCHES = 'ALL_BATCHES'
export const ONE_BATCH = 'ONE_BATCHE'


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

export const oneBatch = (id) => (dispatch) => {
  request
  .get(`${baseUrl}/batches/${id}`)
  .then(result => {
    dispatch({
        type: ONE_BATCH,
        payload: result.body
    })
  })
.catch(err => console.error(err))
}
