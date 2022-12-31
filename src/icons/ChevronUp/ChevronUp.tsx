import { Icon } from 'types/Global'

export default function ChevronUp({ color }: Icon) {
  return (
    <svg width={15} height={15} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.135 6.158a.5.5 0 0 1 .707-.023L7.5 9.565l3.658-3.43a.5.5 0 0 1 .684.73l-4 3.75a.5.5 0 0 1-.684 0l-4-3.75a.5.5 0 0 1-.023-.707Z"
        fill={color}
      />
    </svg>
  )
}
