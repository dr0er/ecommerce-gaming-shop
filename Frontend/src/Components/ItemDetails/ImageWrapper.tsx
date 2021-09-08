import { SwipeableHandlers } from 'react-swipeable/dist/types'

export interface ImageWrapperProps {
  swipeable: SwipeableHandlers
  currentImage: number
  createImages: JSX.Element[]
  createImageDots: JSX.Element[]
}

const ImageWrapper = ({
  swipeable,
  currentImage,
  createImages,
  createImageDots,
}: ImageWrapperProps) => {
  return (
    <>
      <div
        {...swipeable}
        className="h-36 my-3 flex transition duration-300 transform"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {createImages}
      </div>

      <div className="flex justify-center gap-3 w-auto">{createImageDots}</div>
    </>
  )
}

export default ImageWrapper
