import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center justify-between w-[160px] h-[35px] " >
        <Image className="mr-2" src="./Estatery_logo.svg" width={26} height={10}  alt="Website Logo"  />
        <h3 className="font-bold  text-3xl text-gray-900 mt-1"> 
         Estatery
        </h3>
    </div>
  )
}

export default Logo