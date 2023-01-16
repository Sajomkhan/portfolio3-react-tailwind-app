import React from 'react'

function Contact() {
    return (
        <div name='contact' className="max-w-[1000px] mx-auto h-screen bg-[var(--bg)]">
            <div className='max-w-[800px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <form
                    method='POST'
                    action="https://getform.io/f/671d21c7-d92a-4e43-950e-7e454b54d7ba"
                    className='max-w-[600px] mx-auto p-4 flex flex-col'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-[var(--headline)]'>Contact</p>
                        <p className='py-4 font-bold'>// Submit the form below or shoot me email - myemail@gmail.com.</p>
                    </div>
                    <input className='p-2 rounded-lg' type="text" placeholder='Name' name='name' />
                    <input className='my-4 p-2 rounded-lg' type="email" placeholder='Email' name='email' />
                    <textarea className='p-2 rounded-lg' name="massage" rows="10" placeholder='Massage'></textarea>
                    <button className='border-2 font-bold bg-[var(--btn)] rounded-lg px-3 py-2 my-8 mx-auto hover:bg-[var(--headline)] hover:text-white'>Let's Collaborate</button>
                </form>
            </div>

        </div>
    )
}

export default Contact