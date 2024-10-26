import express from 'express'
import { createUser, userLogin, fetchUser, fetchusers, deleteUser } from '../controllers/usersController.js'
const usersRouter = express.Router()

usersRouter.post('/createUser', createUser)
usersRouter.post('/userLogin', userLogin)
usersRouter.get('/fetchUser/:id', fetchUser)
usersRouter.get('/fetchUsers', fetchusers)
usersRouter.delete('/deleteUser/:id', deleteUser)

export default usersRouter