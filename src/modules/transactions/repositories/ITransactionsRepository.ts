import { ICreateTransactionDTO } from '../dtos/ICreateTransactionDTO'
import { Transaction } from '../entities/Transaction'

interface ITransactionsRepository {
  create(data: ICreateTransactionDTO): Promise<Transaction>
}

export { ITransactionsRepository }
