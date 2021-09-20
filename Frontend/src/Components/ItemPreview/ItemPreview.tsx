import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import mouse from '../../Assets/mouse.png'
import { useInView } from 'react-intersection-observer'
import c from 'clsx'

const ItemPreview = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  })

  return (
    <div
      ref={ref}
      className={c(
        'bg-gray-300 rounded-2xl w-2/3 h-64 flex flex-col flex-shrink-0 transform duration-200',
        inView && 'scale-110',
      )}>
      <img className="mx-auto h-2/3 scroll-snap-center" src={mouse} alt="Displaying mouse image" />
      <div className="bg-white flex justify-between items-center justify-center m-1 p-3.5 rounded-xl h-1/3">
        <div>
          <p className="text-sm font-bold">Ninja mouse</p>
          <div className="font-bold text-lg">40€</div>
        </div>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </div>
  )
}
export default ItemPreview
