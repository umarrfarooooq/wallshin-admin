import React from 'react'

const ApplicationBox = ({ applicationData, formatDate, onHandleDelete, loading }) => {
  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 bg-white py-4 px-8 rounded-xl'>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-semibold'>Costumer Name</div>
            <div className='text-base font-semibold'>{applicationData.name}</div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-semibold'>Date</div>
            <div className='text-base font-semibold'>{formatDate(applicationData.timestamp)}</div>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-semibold'>Email</div>
            <div className='text-base font-semibold'>{applicationData.email}</div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='text-xs font-semibold'>Phone #</div>
            <div className='text-base font-semibold'>{applicationData.phone}</div>
          </div>
        </div>
        <div className='flex flex-col gap-2 justify-center'>
          <div className='flex flex-col gap-1 '>
            <a target='_blank' href={`${process.env.NEXT_PUBLIC_API_URL}${applicationData.cv}`} download={`${process.env.NEXT_PUBLIC_API_URL}${applicationData.cv}`} className='py-2 px-3 cursor-pointer rounded-md bg-[#61BB46] text-white w-max'>Download CV</a>
          </div>
        </div>
        <div className='flex flex-col justify-center gap-2'>
          <div className='flex flex-col gap-1'>
            <a className='py-2 px-3 rounded-md bg-[#61BB46] text-white w-full md:w-1/2 flex items-center justify-center ml-auto'>Mark Done</a>
          </div>
          <div className='flex flex-col gap-1'>
            <button disabled={loading} onClick={() => onHandleDelete(applicationData._id)} className='py-2 px-3 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:text-gray-800  rounded-md bg-[#D91E22] text-white w-full md:w-1/2 flex items-center justify-center ml-auto'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationBox
