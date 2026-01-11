import React from 'react'

export const Education = ({prop}) => {
  return (
    <div className='border border-[var(--card-border)] rounded-lg p-4 hover:border-[var(--border-color)] duration-200 group w-full'>
      <div className='flex min-h-15 gap-2'>
        {prop.image && <img src={`./exp/${prop.image}.jpg`} className='h-15 w-auto rounded-md' alt="" />}
        <div className='flex flex-col md:flex-row w-full md:justify-between'>
          <div className='flex flex-col'>
            <h3 className='text-md md:text-lg text-[var(--head-color)] font-gabarito font-bold duration-200'>{prop.college}</h3>
            <p className='text-[var(--text-color)] text-sm duration-200'>{prop.degree}</p>
          </div>

          <div className='flex items-center'>
            <span className='text-[var(--text-color)] justify-start text-[10px] md:text-sm duration-200 italic'>{prop.duration}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
