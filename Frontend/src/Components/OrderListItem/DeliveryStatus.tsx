import { Order } from './Order'

const DeliveryStatus = (props: Order) => {
  return (
    <div className="overflow-hidden flex justify-between mt-4 gap-4 ">
      {props.status ? (
        <>
          <p className="font-bold ">Delivered</p>
          <p className="font-normal">{props.date}</p>
          <p className="font-black text-blue-400">{props.value}€</p>
        </>
      ) : (
        <p className="font-bold ">Order in progress</p>
      )}
    </div>
  )
}

export default DeliveryStatus
