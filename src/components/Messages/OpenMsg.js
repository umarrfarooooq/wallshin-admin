"use client"
import React, { useState } from 'react'
import MessagePopup from './MessagePopup'
import Backdrop from '../UI/Backdrop'

const OpenMsg = ({ message }) => {
    const [openBox, setOpenBox] = useState(false)

    const handleOpenBox = () => {
        setOpenBox(!openBox)
    }

  return (
    <>
        {openBox && <Backdrop showBackdrop={true}/>}
        {openBox && <aside className='absolute sm:top-0 sm:right-0 max-w-[29rem] z-50'>
        <MessagePopup onClose={handleOpenBox} message={message} />
        </aside>} 
        <div className='flex flex-col gap-1'>
            <div className='py-2 px-3 rounded-md bg-[#61BB46] text-white w-max cursor-pointer' onClick={handleOpenBox}>View Full</div>
        </div>
    </>
  )
}

export default OpenMsg
