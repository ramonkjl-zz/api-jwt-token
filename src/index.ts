import express from 'express'
import { routes } from './controllers/authController'
import './controllers/projectController'


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', routes)
app.use('/projects', routes)

app.listen(3000, () => console.log("server running"))