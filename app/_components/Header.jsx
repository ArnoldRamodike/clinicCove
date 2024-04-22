import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
         <Image src='/logo.svg' alt="logo" width={180} height={180}/>
    </div>
  )
}

export default Header