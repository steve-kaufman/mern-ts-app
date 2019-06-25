import { UserState, LOG_IN, SIGN_UP, UserAction } from './types'

const initialState: UserState = {
  username: '',
  password: ''
}

export function userReducer (
  state = initialState,
  action: UserAction) : UserState {
  switch (action.type) {
    case LOG_IN:
      return {
        username: action.payload.username,
        password: action.payload.password
      }
      break
    case SIGN_UP:
      return {
        username: action.payload.username,
        password: action.payload.password
      }
      break
    default:
      return state
  }
}
