import { Transaction } from '../../entities/Transaction'
import { ITransactionsRepository } from '../../repositories/ITransactionsRepository'

interface IRequestDTO {
  title: string
  category: string
  amount: number
  type: 'deposit' | 'withdraw'
}

class CreateTransactionUseCase {
  constructor(private transactionRepository: ITransactionsRepository) {}

  public async execute({
    title,
    amount,
    category,
    type
  }: IRequestDTO): Promise<Transaction> {
    const transaction = await this.transactionRepository.create({
      title,
      amount,
      category,
      type
    })

    return transaction
  }
}

export { CreateTransactionUseCase }
