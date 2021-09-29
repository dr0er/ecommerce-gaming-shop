interface orderNumberProps {
  number: number
}
const OrderNumber = ({ number }: orderNumberProps) => {
  return <p className="font-normal">nr {number}</p>
}

export default OrderNumber
