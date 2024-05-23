import React from 'react'
import Logo from "./logo.svg"
import Image from 'next/image'
const Header = () => {
  return (
    <div className='bg-[#731012] py-8 sm:py-12 md:py-16'>
      <div className='container flex items-center justify-between mx-auto px-2'>
        <div><Image src={Logo} width={100} height={100}/></div>
        <div className='flex items-center gap-3'>
            <div className='text-xl font-semibold text-white'>Admin</div>
            <div>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                        <circle cx="29" cy="29" r="29" fill="#D9D9D9"/>
                    </svg>
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
