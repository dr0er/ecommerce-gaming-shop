interface IOrderProps {
  id: number
  name: string
  category: string
  amount: number
  price: number
}
const OrderItem = (props: IOrderProps) => {
  return (
    <div className="flex justify-between">
      <p className="font-black">{props.name}</p>
      <p className="font-normal opacity-30">{props.category}</p>
      <p className="font-normal opacity-30">x{props.amount}</p>
      <p className="font-black text-blue-400">{props.price}€</p>
    </div>
  )
}

export default OrderItem
