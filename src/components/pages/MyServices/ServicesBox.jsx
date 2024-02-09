import React from 'react';
import { MdOutlinePhoneAndroid } from "react-icons/md"; 
import {AiFillLayout} from "react-icons/ai"


const ServicesData = [
    {
    name:"UX Designer",
    description:"lorem esump prosta martini",
    icon:<AiFillLayout className="text-4xl" />,
    bgColor:"bg-blue-500/70",
    },
    {
    name:"UX Designer",
    description:"lorem esump prosta martini",
    icon:<MdOutlinePhoneAndroid className="text-4xl" />,
    bgColor:"bg-green-500/70",
    },
    {
    name:"UX Designer",
    description:"lorem esump prosta martini",
    icon:<AiFillLayout className="text-4xl" />,
    bgColor:"bg-yellow-500/70",
    },
    {
    name:"UX Designer",
    description:"lorem esump prosta martini",
    icon:<AiFillLayout className="text-4xl" />,
    bgColor:"bg-red-500/70",
    },
]

const ServicesBox = () => {
    return (
        <div className='h-full mt-10 text-white'>
            <div className='grid grid-cols-2 gap-6'>
                {
                    ServicesData.map(({name,description,icon,bgColor})=>(
                        <div className={`p-3 ${bgColor} min-h-[180px] rounded-xl cursor-pointer`}>
                            <div className='p-3 space-y-4'>
                                {icon}
                                <h1>{name}</h1>
                                <p>{description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ServicesBox