import {ONE_BATCH} from '../actions/batches'



export default (state = [], { type, payload }) => {
  switch (type) {
    case ONE_BATCH:
    return payload

    default:
      return state
  }
}
