import React from 'react'
import { ChevronDown, ChevronUp, UnfoldVertical, FoldVertical } from 'lucide-react'
export const Experience = ({prop, setIsHover}) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <div className='border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 duration-200 group' onMouseEnter={()=> setIsHover(true)} onMouseLeave={()=> setIsHover(false)}>
            <div className='flex min-h-15 gap-2'>
              <img src={`./exp/${prop.image}.jpg`} className='h-15 w-auto rounded-md' alt="" />
              <div className='flex flex-col md:flex-row w-full md:justify-between'>
                <div className='flex flex-col'>
                  <h3 className='text-lg text-neutral-200 font-gabarito font-bold duration-200'>{prop.position}</h3>
                  <p className='text-neutral-300 text-sm duration-200'>{prop.organization}</p>
                </div>

                <div className='flex items-center'>
                <span className='text-neutral-300 justify-start text-sm duration-200 italic p-2'>{prop.duration}</span>
                <button 
                  className='p-1.5 text-neutral-300 hover:bg-neutral-800 duration-200 rounded-md cursor-pointer'
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded &&(
                        <FoldVertical size={20} />
                    )}
                    {!isExpanded &&(
                        <UnfoldVertical size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {isExpanded && (
            <ul className='text-neutral-300 text-sm mt-4 space-y-2 list-none duration-200'>
              <li>
                {prop.details.map((detail, index) => (
                  <span key={index}>{detail} <br /></span>
                ))}
              </li>
            </ul>
            )}
          </div>
  )
}
