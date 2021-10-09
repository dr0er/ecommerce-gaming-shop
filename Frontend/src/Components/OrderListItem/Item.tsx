import { OrderItem } from './Order'

//type OrderItemProps = Pick<Order['items'], 'id' | 'name' | 'category' | 'amount' | 'price'>
type OrderItemProps = Pick<OrderItem, 'id' | 'name' | 'category' | 'amount' | 'price'>

//type Order1 = Pick<OrderItemProps, 'name' | 'category' | 'amount' | 'price'>[]

const Item = ({ id, name, category, amount, price }: OrderItemProps) => {
  return (
    <div key={id} className="flex justify-between">
      <p className="font-black">{name}</p>
      <p className="font-normal opacity-30">{category}</p>
      <p className="font-normal opacity-30">x{amount}</p>
      <p className="font-black text-blue-400">{price}€</p>
    </div>
  )
}

export default Item
