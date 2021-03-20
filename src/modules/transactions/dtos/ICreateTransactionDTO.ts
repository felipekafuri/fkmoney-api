export interface ICreateTransactionDTO {
  title: string
  category: string
  amount: number
  type: 'deposit' | 'withdraw'
}
