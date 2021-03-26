//import { Router } from 'express'
import { routes } from './authController'
import middleware from '../middleware/middleware'

routes.use(middleware)
routes.get('/', (req, res) => {
    return res.send({ ok: true })
})