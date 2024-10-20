import express from 'express'
import { createUser } from '../controller/userControllers.js'
import { getUser } from '../controller/userControllers.js'
import { removeUser } from '../controller/userControllers.js'
import { getOneUser } from '../controller/userControllers.js'
import { updateUser } from '../controller/userControllers.js'

const route = express.Router();


route.post('/user', createUser)
route.get('/users', getUser)
route.delete('delete/user/:id', removeUser)
route.get('/user/:id', getOneUser)
route.put('update/user/:id', updateUser)

export default route;