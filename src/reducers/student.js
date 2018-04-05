import {GET_STUDENT} from '../actions/students'


export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_STUDENT:
      return payload

    default:
      return state
  }
}
