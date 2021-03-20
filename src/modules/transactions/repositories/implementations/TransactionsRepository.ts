import { ICreateTransactionDTO } from '../../dtos/ICreateTransactionDTO'
import { Transaction } from '../../entities/Transaction'
import { ITransactionsRepository } from '../ITransactionsRepository'

class TransactionsRepository implements ITransactionsRepository {
  private transactions: Transaction[]

  private static INSTANCE: TransactionsRepository

  private constructor() {
    this.transactions = []
  }

  public static getInstance(): TransactionsRepository {
    if (!TransactionsRepository.INSTANCE) {
      TransactionsRepository.INSTANCE = new TransactionsRepository()
    }
    return TransactionsRepository.INSTANCE
  }

  public async create({
    type,
    amount,
    title,
    category
  }: ICreateTransactionDTO): Promise<Transaction> {
    const transaction = new Transaction()

    Object.assign(transaction, {
      type,
      amount,
      title,
      category,
      created_at: new Date()
    })

    this.transactions.push(transaction)

    return transaction
  }
}

export { TransactionsRepository }
