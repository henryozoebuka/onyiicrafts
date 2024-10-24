import express from 'express'
import { createUser, userLogin } from '../controllers/usersController.js'
const usersRouter = express.Router()

usersRouter.post('/createUser', createUser)
usersRouter.post('/userLogin', userLogin)

export default usersRouter