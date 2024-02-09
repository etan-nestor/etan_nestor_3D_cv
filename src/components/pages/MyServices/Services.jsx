import React from 'react'
import ServicesBox from './ServicesBox'

const Services = () => {
    return (
        <div className='h-full page-shadown bg-white p-10'>
            {/* heading */}
            <div className='flex flex-col items-center'>
                <h1 className='inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1'>Services</h1>
                <p className='text-sm text-slate-500 text-center md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum culpa quam odit ipsum distinctio?</p>
            </div>
            {/* services cards */}
            <div>
                <ServicesBox />
            </div>
        </div>
    )
}

export default Services