import { Order } from '../OrderListItem/Order'

type OrderNumber = Pick<Order, 'number'>

const OrderNumber = ({ number }: OrderNumber) => {
  return <p className="font-normal">nr {number}</p>
}

export default OrderNumber
