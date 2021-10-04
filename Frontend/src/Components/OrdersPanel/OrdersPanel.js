import { Link } from 'react-router-dom'
import { NavBar } from '../Navbar/Navbar'
import OrderItemWrapper from '../OrderListItem/OrderItemWrapper'
import { ReactComponent as ChevronBack } from '../../Assets/chevron-back-sharp.svg'

const OrdersPanel = () => {
  return (
    <>
      <div className="flex flex-col justify-beetwen gap-4 mb-8 max-w-md md: mx-auto">
        <NavBar />
      </div>
      <div className="bg-background-grey  flex flex-col gap-4 px-9 max-w-md md: mx-auto">
        <p className="opacity-30 w-auto max-w-md font-bold text-base">welcome,</p>
        <p className="w-auto font-bold text-2xl mb-8">{'mario@mail.com'}</p>
        <div className="flex justify-between font-bold text-2xl">
          <p>Orders</p>
          <ChevronBack className="w-6 transform -rotate-90" />
        </div>
        <OrderItemWrapper />
        <OrderItemWrapper />
        <Link to="/">
          <div className="flex justify-between font-bold text-2xl opacity-30">
            <p>Account settings</p>
            <ChevronBack className="w-6 transform rotate-180" />
          </div>
        </Link>
        <Link to="/">
          <div className="flex justify-between font-bold text-2xl opacity-30">
            <p>Adresses</p>
            <ChevronBack className="w-6 transform rotate-180" />
          </div>
        </Link>
        <div className="font-bold text-2xl text-blue-500 ">
          <Link to="/">
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default OrdersPanel
