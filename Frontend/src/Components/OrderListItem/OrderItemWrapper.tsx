import { Link } from 'react-router-dom'
import DeliveryStatus from './DeliveryStatus'
import { order } from './Order'
import OrderItem from './OrderItem'
import OrderNumber from './OrderNumber'

const OrderItemWrapper = () => {
  return (
    <div className="px-9 flex flex-col gap-4 max-w-md md: mx-auto">
      <DeliveryStatus status={order.status} date={order.date} value={order.value} />
      <OrderNumber number={order.number} />
      <p className="font-bold">Items:</p>
      {order.items.map((item) => (
        <OrderItem
          key={item.id}
          name={item.name}
          category={item.category}
          amount={item.amount}
          price={item.price}
          id={item.id}
        />
      ))}
      <Link to="/">
        <p className="font-bold flex justify-end">TRACKING</p>
      </Link>
    </div>
  )
}

export default OrderItemWrapper
