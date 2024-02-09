import React from 'react'
import PersonImg from '../../../assets/person1.jpg'

const FirstPage = () => {
  return (
    <div className='h-full w-full bg-secondary page-shadown'>
        <main>
            <div className='p-10 space-y-4'>
                {/* image-container */}
                <div>
                    <img src={PersonImg} alt="MyProfile" className='w-[150px] mx-auto'/>
                </div>
                {/* text-container */}
                <div>
                  <div className='space-y-3'>
                    <p className='uppercase'>Hello,</p>
                    <p className='text-4xl md:text-6xl font-bold text-black/80'>I'm Nestor</p>
                    <p className='text-black/75 '>Full Stack Developer</p>
                    <p className='text-black/75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga obcaecati sint illo hic tempora?</p>
                    <a className='inline-block primary-btn' href="mailto:nestor@opennumerique.com">Hire me</a>
                  </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default FirstPage