import { Order, order } from './Order'

const OrderListItem = (props: Order) => {
  return (
    <>
      {order.items.map((item) => (
        <div key={item.id} className="flex justify-between">
          <p className="font-black">{item.name}</p>
          <p className="font-normal opacity-30">{item.category}</p>
          <p className="font-normal opacity-30">x{item.amount}</p>
          <p className="font-black text-blue-400">{item.price}€</p>
        </div>
      ))}
    </>
  )
}

export default OrderListItem
