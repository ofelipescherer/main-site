import { Icon } from 'types/Global'

export default function ChevronUp({ color }: Icon) {
  return (
    <svg width={15} height={15} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.135 8.842a.5.5 0 0 0 .707.023L7.5 5.435l3.658 3.43a.5.5 0 0 0 .684-.73l-4-3.75a.5.5 0 0 0-.684 0l-4 3.75a.5.5 0 0 0-.023.707Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  )
}
