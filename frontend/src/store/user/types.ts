export interface UserState {
  username: string
  password: string
}

export interface LogInData {
  username: string
  password: string
}

export interface SignUpData {
  username: string
  password: string
}

export const LOG_IN = 'LOG_IN'
export const SIGN_UP = 'SIGN_UP'

interface LogInAction {
  type: typeof LOG_IN
  payload: LogInData
}

interface SignUpAction {
  type: typeof SIGN_UP
  payload: SignUpData
}

export type UserAction = LogInAction | SignUpAction
