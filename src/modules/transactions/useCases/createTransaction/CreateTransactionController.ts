import { Response, Request } from 'express'
import { CreateTransactionUseCase } from './CreateTransactionUseCase'

class CreateTransactionsController {
  constructor(private createTransactionsUseCase: CreateTransactionUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { title, category, amount, type } = request.body

      const transaction = await this.createTransactionsUseCase.execute({
        title,
        category,
        amount,
        type
      })

      return response.status(201).json(transaction)
    } catch (error) {
      return response.status(400).send()
    }
  }
}

export { CreateTransactionsController }
