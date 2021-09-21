import ItemPreview from '../ItemPreview/ItemPreview'

interface CarouselProps {
  title?: string
}

export const Carousel = ({ title }: CarouselProps) => {
  return (
    <div>
      {title && <p className="text-lg font-semibold py-4">{title}</p>}
      <div className="p-4 pl-8 flex gap-8 overflow-scroll w-full no-scrollbar snap-mandatory">
        {Array.from({ length: 5 }).map((_, index) => (
          <ItemPreview index={index} key={index} />
        ))}
      </div>
    </div>
  )
}
