import { LogInData, SignUpData, LOG_IN, SIGN_UP, UserAction } from './types'

export function logIn (logInData: LogInData): UserAction {
  return {
    type: LOG_IN,
    payload: logInData
  }
}

export function signUp (signUpData: SignUpData): UserAction {
  return {
    type: SIGN_UP,
    payload: signUpData
  }
}
