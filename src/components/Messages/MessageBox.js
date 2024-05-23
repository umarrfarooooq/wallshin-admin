import React, { useState } from 'react'
import OpenMsg from './OpenMsg'

const MessageBox = ({ message, formatDate, onHandleDelete, onHandleMarkDone}) => {
  
  return (
    <div>
      <div className='relative grid grid-cols-2 md:grid-cols-4 gap-2 bg-white py-4 px-8 rounded-xl'>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-semibold'>Costumer Name</div>
            <div className='text-base font-semibold'>{message.name}</div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-semibold'>Date</div>
            <div className='text-base font-semibold'>{formatDate(message.date)}</div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-semibold'>Email</div>
            <div className='text-base font-semibold'>{message.email}</div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-semibold'>Phone #</div>
            <div className='text-base font-semibold'>{message.phone}</div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-1'>
          <div className='text-xs font-semibold'>Message</div>
          <div className='text-sm'>
            {message.message.length > 20 ? `${message.message.substring(0, 70)}...` : message.message}
          </div>
        </div>
          <OpenMsg message={message.message}/>
        </div>
        <div className='flex flex-col justify-center gap-2'>
        {!message.isDone && <div className='flex flex-col gap-1'>
            <button onClick={() => onHandleMarkDone(message._id)} className='py-2 px-3 rounded-md bg-[#61BB46] text-white w-full md:w-1/2 flex items-center justify-center ml-auto'>Mark Done</button>
          </div>}
          
          <div className='flex flex-col gap-1'>
            <button onClick={() => onHandleDelete(message._id)} className='py-2 px-3 rounded-md disabled:bg-slate-400 disabled:text-slate-800 disabled:cursor-not-allowed bg-[#D91E22] text-white w-full md:w-1/2 flex items-center justify-center ml-auto'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageBox
