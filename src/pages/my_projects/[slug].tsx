import { useRouter } from 'next/router'
import React from 'react'

export default function ProjectPage() {
  const router = useRouter()
  const slug = router.query.slug as string

  return (
    <div>
      <span>id: {slug}</span>
    </div>
  )
}
