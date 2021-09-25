import { Link } from 'react-router-dom'
import DeliveryStatus from './DeliveryStatus'
import { order } from './Order'
import OrderListItem from './OrderItem'
import OrderNumber from './OrderNumber'

const OrderItemWrapper = () => {
  return (
    <div className="px-9 flex flex-col gap-4 max-w-md md: mx-auto">
      <DeliveryStatus {...order} />
      <OrderNumber {...order} />
      <p className="font-bold">Items:</p>
      <OrderListItem
        items={[]}
        id={0}
        user={0}
        status={''}
        date={''}
        value={0}
        number={0}
        {...order.items}
      />
      <Link to="/">
        <p className="font-bold flex justify-end">TRACKING</p>
      </Link>
    </div>
  )
}

export default OrderItemWrapper
