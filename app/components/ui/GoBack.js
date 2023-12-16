'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const GoBack = ({ ...args }) => {
  const router = useRouter()
  return (
    <button onClick={() => router?.back()} {...args}>
      Volver
    </button>
  )
}

export default GoBack