export interface ImageDotProps {
  active?: boolean
  onClick: () => void
}
const ImageDot = ({ active, onClick }: ImageDotProps) => {
  return (
    <div
      onClick={onClick}
      className={`bg-gray-300 rounded h-2 w-2 transition duration-300 ease-linear  ${
        active && 'w-4 bg-gray-600'
      }`}></div>
  )
}

export default ImageDot
