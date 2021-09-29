export interface OrderItemProps {
  orderItem: {
    id: number
    name: string
    category: string
    amount: number
    price: number
  }
}
const OrderListItem = ({ orderItem }: OrderItemProps) => {
  const { id, name, category, amount, price } = orderItem

  return (
    <div key={id} className="flex justify-between">
      <p className="font-black">{name}</p>
      <p className="font-normal opacity-30">{category}</p>
      <p className="font-normal opacity-30">x{amount}</p>
      <p className="font-black text-blue-400">{price}€</p>
    </div>
  )
}

export default OrderListItem
