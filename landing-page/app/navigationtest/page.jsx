"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

const NavigationTestPage = () => {

  const router = useRouter()

  const handleClick = () => {
    console.log('clicked')
    router.push('/')
  }

  return (
    <div>
      <button onClick={() => handleClick()}>
        To home page
      </button>
    </div>
  )
}

export default NavigationTestPage;