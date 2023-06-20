import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './modules/users/user.routes'
const app: Application = express()

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

class ApiError extends Error {
  statusCode: number
  constructor(statusCode: number, message: string | undefined, stack = '') {
    super(message)
    this.statusCode = statusCode
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

app.get('/', async (req: Request, res: Response) => {
  // res.send('Hello World!')
  throw new ApiError(400, 'Internal Server Error')
})
// user Router
app.use('/api/v1/user', userRouter)

export default app
