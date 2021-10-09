import { Order } from './Order'

type OrderNumberProps = Pick<Order, 'number'>

const OrderNumber = ({ number }: OrderNumberProps) => {
  return <p>nr {number}</p>
}

export default OrderNumber
