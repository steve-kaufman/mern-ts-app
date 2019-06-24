import express from 'express'
import Auth from './auth'

const port = 3000

const app = express()

const auth = new Auth()

app.use(express.static('../frontend/dist'))

app.post('/login', auth.handleLogin)

app.listen(port, (): void => {
  console.log(`Listening on port ${port}`)
})
