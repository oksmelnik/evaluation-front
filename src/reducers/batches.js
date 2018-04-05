import {ALL_BATCHES} from '../actions/batches'


export default (state = {}, { type, payload }) => {
  switch (type) {
    case ALL_BATCHES:
      return payload

    default:
      return state
  }
}
