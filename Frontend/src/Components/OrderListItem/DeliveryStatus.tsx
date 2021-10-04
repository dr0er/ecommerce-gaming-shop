import { Order } from '../OrderListItem/Order'

type deliveryStatus = Pick<Order, 'status' | 'date' | 'value'>

const DeliveryStatus = ({ status, date, value }: deliveryStatus) => {
  return (
    <div className="overflow-hidden flex justify-between mt-4 gap-4 ">
      {status === 'delivered' ? (
        <>
          <p className="font-bold ">Delivered</p>
          <p className="font-normal">{date}</p>
          <p className="font-black text-blue-400">{value}€</p>
        </>
      ) : (
        <p className="font-bold ">Order in progress</p>
      )}
    </div>
  )
}

export default DeliveryStatus
