import { Router } from 'express'
import { createTransactionController } from '../modules/transactions/useCases/createTransaction'

const routes = Router()

routes.use('/transactions', (request, response) => {
  createTransactionController.handle(request, response)
})

export { routes }
