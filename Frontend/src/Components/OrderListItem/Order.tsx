export interface Order {
  id: number
  user: number
  status: string
  date: string
  value: number
  number: number
  items: {
    id: number
    name: string
    category: string
    amount: number
    price: number
  }[]
}

export const order: Order = {
  id: 1,
  user: 1,
  status: 'delivered',
  date: '2021-03-02',
  value: 203,
  number: 321325123213,
  items: [
    {
      id: 0,
      name: 'Zowie S1',
      category: 'Mouse',
      amount: 2,
      price: 79,
    },
    {
      id: 1,
      name: 'Ninja Mouse',
      category: 'Mouse',
      amount: 1,
      price: 40,
    },
    {
      id: 1,
      name: 'Ninja Mouse',
      category: 'Mouse',
      amount: 1,
      price: 40,
    },
  ],
}
