import React from 'react'
import Image from "next/image"

function Header() {
  return (
    <div>
      <h1>I am a header.</h1>

      <div className="flex justify-between max-w-6xl">

      <div className="relative h-24 w-24">
         <Image src="https://links.papareact.com/ocw"
         layout="fill"
         objectFit="contain"
         />
      </div>

      </div>
    </div>
  )
}

export default Header
