"use client"

import Image from 'next/image'
import React from 'react'


function Avatar() {
  return (
    <Image
        className='rounded-full'
        src="/images/placeholder.jpg"
        height={30}
        width={30}
        alt="profile placeholder"
    />
  )
}

export default Avatar