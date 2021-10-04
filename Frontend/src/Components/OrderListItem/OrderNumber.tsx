import { Order, order } from '../OrderListItem/Order'

type orderNumber = Pick<Order, 'number'>

const OrderNumber = (number: orderNumber) => {
  return <p className="font-normal">nr {order.number}</p>
}

export default OrderNumber
