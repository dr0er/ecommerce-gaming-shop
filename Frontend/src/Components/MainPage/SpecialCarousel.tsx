import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { Carousel } from './Carousel'
import { Dispatch, SetStateAction, useRef, useState } from 'react'
import c from 'clsx'

const headerItems = ['Mouse', 'Keyboard', 'Chair', 'Headphones']

export const SpecialCarousel = () => {
  const [activeItem, setActiveItem] = useState(headerItems[0])

  return (
    <div>
      <ul className="flex flex-row gap-6 pb-6 font-semibold text-xl overflow-hidden">
        {headerItems.map((item, index) => (
          <HeaderItem
            item={item}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            key={index}
          />
        ))}
      </ul>
      <Carousel />
      <div className="flex flex-row gap-2 justify-center items-center pt-6 font-semibold text-xl">
        <p>Show more</p>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  )
}

interface HeaderItemProps {
  item: string
  activeItem: string
  setActiveItem: Dispatch<SetStateAction<string>>
}

const HeaderItem = ({ item, activeItem, setActiveItem }: HeaderItemProps) => {
  const isActive = item === activeItem
  const itemRef = useRef<HTMLLIElement | null>(null)

  const onClick = () => {
    setActiveItem(item)
    itemRef.current?.scrollIntoView({
      block: 'nearest',
      inline: 'center',
    })
  }

  return (
    <div className="flex flex-col items-center justify-items-center">
      <li ref={itemRef} onClick={onClick} className={c(isActive ? 'text-black' : 'text-gray-500')}>
        {item}
      </li>
      {isActive ? <span className="w-1 h-1 rounded-full bg-black" /> : null}
    </div>
  )
}
