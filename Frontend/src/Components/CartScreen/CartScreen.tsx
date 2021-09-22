import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ninjaImage from '../../Assets/ninja.png'
import zowieImage from '../../Assets/zowie.png'
import { RootState } from '../../Store/store'
import CartItem from './CartItem'
import { Product, setProducts } from './CartScreenSlice'
import Summary from './Summary'

export interface CartScreenProps {
  myProducts: Array<Product>
  createCartList: JSX.Element[]
}

const CartScreen = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      setProducts([
        {
          id: 1,
          name: 'Ninja mouse',
          category: 'Gaming mouse',
          price: 40,
          image: ninjaImage,
          amount: 1,
        },
        {
          id: 2,
          name: 'Zowie S1',
          category: 'Gaming mouse',
          price: 79,
          image: zowieImage,
          amount: 2,
        },
      ]),
    )
  }, [dispatch])

  const { myProducts } = useSelector((state: RootState) => state.cartScreen)

  const cartList = myProducts.map((product) => (
    <CartItem
      id={product.id}
      image={product.image}
      name={product.name}
      category={product.category}
      price={product.price}
      amount={product.amount}
      key={product.id}
    />
  ))

  return (
    <div className="flex flex-col text-grey-light px-6 max-w-sm bg-background-grey min-h-screen sm: mx-auto">
      <p className="text-3xl font-extrabold py-5">My cart</p>

      <div className="flex flex-col gap-8">{cartList}</div>

      <Summary />

      {/* Checkout button */}

      <div className="bg-grey-light px-3 text-sm mt-12 py-3 font-bold text-red-50 flex justify-center rounded-2xl cursor-pointer">
        Procced To Checkout
      </div>
    </div>
  )
}

export default CartScreen
