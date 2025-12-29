import React from 'react'

export const Education = ({prop}) => {
  return (
    <div className='border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 duration-200 group w-full'>
      <div className='flex min-h-15 gap-2'>
        {prop.image && <img src={`./exp/${prop.image}.jpg`} className='h-15 w-auto rounded-md' alt="" />}
        <div className='flex flex-col md:flex-row w-full md:justify-between'>
          <div className='flex flex-col'>
            <h3 className='text-lg text-neutral-200 font-gabarito font-bold duration-200'>{prop.college}</h3>
            <p className='text-neutral-300 text-sm duration-200'>{prop.degree}</p>
          </div>

          <div className='flex items-center'>
            <span className='text-neutral-300 justify-start text-sm duration-200 italic p-2'>{prop.duration}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
