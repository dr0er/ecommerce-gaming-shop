import { Item } from './Order'

type OrderItemProps = Pick<Item, 'id' | 'name' | 'category' | 'amount' | 'price'>

const OrderItem = ({ name, category, amount, price }: OrderItemProps) => {
  return (
    <div className="flex justify-between">
      <p className="font-black">{name}</p>
      <p className="font-normal opacity-30">{category}</p>
      <p className="font-normal opacity-30">x{amount}</p>
      <p className="font-black text-blue-400">{price}€</p>
    </div>
  )
}

export default OrderItem
