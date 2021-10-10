import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../Navbar/Navbar'
import { ReactComponent as ChevronBack } from '../../Assets/chevron-back-sharp.svg'
import OrderItemWrapper from '../OrderListItem/OrderItemWrapper'

const OrdersPanel = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false)
  const [isAddressOpen, setisAddressOpen] = useState(false)
  const [isAccountSettingsOpen, setIsAccountSettingsOpen] = useState(false)

  return (
    <div className="flex flex-col justify-beetwen px-9 gap-4 max-w-md md: mx-auto">
      <NavBar />
      <div className="flex justify-start flex-col gap-4">
        <p className="opacity-30 w-auto max-w-md font-bold text-base">welcome,</p>
        <p className="w-auto font-bold text-2xl mb-8">{'mario@mail.com'}</p>
      </div>
      {isOrderOpen ? (
        <div>
          <div
            className="flex justify-between font-bold text-2xl"
            onClick={() => setIsOrderOpen(!isOrderOpen)}>
            <p>Orders</p>
            <ChevronBack className="w-6 transform -rotate-90" />
          </div>
          <div>
            <OrderItemWrapper />
          </div>
        </div>
      ) : (
        <div
          className="flex justify-between font-bold text-2xl opacity-30"
          onClick={() => setIsOrderOpen(!isOrderOpen)}>
          <p>Orders</p>
          <ChevronBack className="w-6 transform rotate-180" />
        </div>
      )}
      {isAccountSettingsOpen ? (
        <>
          <div
            className="flex justify-between font-bold text-2xl"
            onClick={() => setIsAccountSettingsOpen(!isAccountSettingsOpen)}>
            <p>Account settings</p>
            <ChevronBack className="w-6 transform -rotate-90" />
          </div>
          <span>Opened</span>
        </>
      ) : (
        <div
          className="flex justify-between font-bold text-2xl opacity-30"
          onClick={() => setIsAccountSettingsOpen(!isAccountSettingsOpen)}>
          <p>Account settings</p>
          <ChevronBack className="w-6 transform rotate-180" />
        </div>
      )}
      {isAddressOpen ? (
        <>
          <div
            className="flex justify-between font-bold text-2xl"
            onClick={() => setisAddressOpen(!isAddressOpen)}>
            <p>Account settings</p>
            <ChevronBack className="w-6 transform -rotate-90" />
          </div>
          <span>Opened</span>
        </>
      ) : (
        <div
          className="flex justify-between font-bold text-2xl opacity-30"
          onClick={() => setisAddressOpen(!isAddressOpen)}>
          <p>Adresses</p>
          <ChevronBack className="w-6 transform rotate-180" />
        </div>
      )}
      <Link to="/">
        <div className="font-bold text-2xl text-blue-500 ">
          <span>Logout</span>
        </div>
      </Link>
    </div>
  )
}

export default OrdersPanel
