import { v4 } from 'uuid'

class Transaction {
  id?: string

  title: string

  category: string

  amount: number

  type: string

  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = v4()
    }
  }
}

export { Transaction }
