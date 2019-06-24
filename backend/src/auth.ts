import express from 'express'

export default class Auth {
  public handleLogin (req: express.Request, res: express.Response): void {
    console.log(req.body)
    res.send('login not configured... yet :)')
  }
}
