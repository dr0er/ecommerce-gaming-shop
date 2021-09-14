export interface ReviewProps {
  data: {
    customer: string
    rate: string
    added: string
    opinion: string
  }
}

const Review = ({ data }: ReviewProps) => {
  const { customer, rate, added, opinion } = data

  return (
    <div className="flex flex-col border-b-2 gap-4 py-4">
      <div className="flex gap-3 items-center">
        <p>{customer}</p>

        <div className="w-1 h-1 rounded-full bg-gray-600"></div>

        <p>{rate}/5</p>

        <div className="w-1 h-1 rounded-full bg-gray-600"></div>

        <p className="opacity-30 font-semibold">{added}</p>
      </div>

      <div className="font-semibold text-base">{opinion}</div>
    </div>
  )
}

export default Review
