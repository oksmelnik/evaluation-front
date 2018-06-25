import {ALL_BATCHES, ADD_BATCH} from '../actions/batches'


export default (state = {}, { type, payload }) => {
  switch (type) {
    case ALL_BATCHES:
    return payload

    case ADD_BATCH:
    return payload

    default:
      return state
  }
}
