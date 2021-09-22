import { useSelector } from 'react-redux'
import { RootState } from '../../Store/store'
import { Product } from './CartScreenSlice'

const Summary = () => {
  const { myProducts } = useSelector((state: RootState) => state.cartScreen)

  const shippingPrice = 5

  const handleSubtotal = () => {
    let price = 0
    myProducts.forEach((product: Product) => {
      price += product.price * product.amount
    })
    return price
  }

  const handleBagTotal = () => {
    let price = handleSubtotal()
    return (price += shippingPrice)
  }

  const productsAmount = () => {
    let amount = 0
    myProducts.forEach((product) => {
      amount += product.amount
    })
    return amount
  }

  return (
    <div className="flex flex-col mt-16 gap-6">
      <div className="flex justify-between">
        <p className="opacity-30 font-bold">Subtotal</p>
        <h2 className="text-grey-light font-extrabold text-xl">{handleSubtotal()}€</h2>
      </div>
      <div className="flex justify-between">
        <p className="opacity-30 font-bold">Shipping</p>
        <h2 className="text-grey-light font-extrabold text-xl">5€</h2>
      </div>
      <div className="flex justify-between">
        <p className="opacity-30 font-bold">Bag total</p>
        <div className="flex gap-5 align-middle">
          <span className="font-medium">({productsAmount()} items)</span>
          <h2 className="text-grey-light font-extrabold text-xl">{handleBagTotal()}€</h2>
        </div>
      </div>
    </div>
  )
}

export default Summary
