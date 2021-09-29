import { Link } from 'react-router-dom'
import DeliveryStatus from './DeliveryStatus'
import { order } from './Order'
import OrderListItem from './OrderItem'
import OrderNumber from './OrderNumber'

const OrderItemWrapper = () => {
  return (
    <div className="px-9 flex flex-col gap-4 max-w-md md: mx-auto">
      <DeliveryStatus
        deliveryStatus={{
          status: true,
          date: '20.10.2021',
          value: 203,
        }}
      />
      <OrderNumber number={order.number} />
      <p className="font-bold">Items:</p>
      {order.items.map((item) => (
        <OrderListItem key={item.id} orderItem={item} />
      ))}
      <Link to="/">
        <p className="font-bold flex justify-end">TRACKING</p>
      </Link>
    </div>
  )
}

export default OrderItemWrapper
