import { TransactionsRepository } from '../../repositories/implementations/TransactionsRepository'
import { CreateTransactionsController } from './CreateTransactionController'
import { CreateTransactionUseCase } from './CreateTransactionUseCase'

const transactionRepository = TransactionsRepository.getInstance()

const createTransactionUseCase = new CreateTransactionUseCase(
  transactionRepository
)

const createTransactionController = new CreateTransactionsController(
  createTransactionUseCase
)

export { createTransactionController }
