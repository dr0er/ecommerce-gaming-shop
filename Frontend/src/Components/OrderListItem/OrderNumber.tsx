import { Order } from './Order'

const OrderNumber = (props: Order) => {
  return <p className="font-normal">nr {props.number}</p>
}

export default OrderNumber
