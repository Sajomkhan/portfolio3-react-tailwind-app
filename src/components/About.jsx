import React from 'react'

const About = () => {
  return (
    <div name='about' className='max-w-[1000px] mx-auto h-screen bg-[#f1f1e8]'>
      {/* Container */}
      <div className='flex flex-col justify-center h-full'>
        <div className='text-center pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[var(--headline)] '>About</p>
        </div>
        <div className='max-w-[800px] mx-auto w-full px-8 grid sm:grid-cols-2 gap-5'>
          <div>
            <p className='text-3xl font-bold md:text-right text-[var(--headline)]'>Hi, I'm Saiful Ajom Khan [ Take a look around ]</p>
          </div>
          <div>
            <p className='font-bold text-justify'>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small- businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About