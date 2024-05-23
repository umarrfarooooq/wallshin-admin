import React from 'react'

const MessagePopup = ({onClose, message}) => {
  return (
    <div className='bg-[#EDEDED] p-5 md:p-9 rounded-xl max-h-screen overflow-auto '>
      <div className='flex flex-col gap-4 md:gap-8 container mx-auto px-2 '>
        <div className='text-2xl font-semibold'>MESSAGE</div>
        <div className='text-balance'>
            {message}
        </div>
        <div onClick={onClose} className='w-full cursor-pointer p-3 bg-[#D91E22] rounded-md flex items-center justify-center text-white text-xl font-semibold'>CLOSE</div>
      </div>
    </div>
  )
}

export default MessagePopup
