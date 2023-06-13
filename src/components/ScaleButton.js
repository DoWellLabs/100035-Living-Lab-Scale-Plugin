import React from 'react'

const ScaleButton = ({title, color, value}) => {
  return (
    <div className='flex flex-col justify-center items-center space-y-4'>
        <div style={{backgroundColor: color}} className='flex justify-center items-center w-[90px] h-[90px] bg-[#fe] mt-6'><p className='text-white text-[20px]'>{title}</p></div>
        <input type='radio' id={value} name='scale' value={value} className='w-4 h-4'/>
    </div>
  )
}

export default ScaleButton