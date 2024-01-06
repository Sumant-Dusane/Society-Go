import React from 'react'
import Wrapper from '../Wrapper'

const Contact = () => {
    return (
        <div className='lg:max-w-screen-xl my-0 mx-auto flex flex-wrap gap-9'>
            <form id='contact' className="flex flex-col gap-8 items-start text-slate-500 bg-black-200 shadow-md rounded-md p-9 w-full lg:w-96 order-2 lg:order-1">
                <div className='flex flex-col items-start w-full'>
                    <label>Full Name <span className='text-primary-500'>*</span></label>
                    <input className='w-full min-h-8 p-2 rounded-md' type="text" required />
                </div>
                <div className='flex flex-col items-start w-full'>
                    <label>Email <span className='text-primary-500'>*</span></label>
                    <input className='w-full min-h-8 p-2 rounded-md' type="email" required />
                </div>
                <div className='flex flex-col items-start w-full'>
                    <label>Phone Number <span className='text-primary-500'>*</span></label>
                    <input className='w-full min-h-8 p-2 rounded-md' type="text" required />
                </div>
                <div className='flex flex-col items-start w-full mt-4'>
                    <label>Enter your Message</label>
                    <textarea className='w-full rounded-md p-4' placeholder="Message"></textarea>
                </div>
                <input className="bg-gradient-primary shadow-sm hover:shadow-md text-white p-2 rounded-md w-full cursor-pointer" type="submit" value="SUBMIT" />
            </form>
            <div className='flex flex-col items-start gap-8 order-1 lg:order-2'>
                <Wrapper slideDirection="left"><h5 className='font-bold text-4xl'>Lets discuss on something <span className='text-primary-500'>cool</span> together 👋</h5></Wrapper>
                <div className='flex flex-col gap-4 items-start'>
                    <a href="mailto:info@jodetx.com">info&#64;societygo.com</a>
                    <a href='tel:9004866217'>+(91) 90048 66217</a>
                    <div>BUILDING NO 404, ROOM NO 403, TUKARAM KR TALAVALI GAON, GHANSOLI, NAVI MUMBAI, THANE-400701. </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5088663446536!2d72.99329662616985!3d19.129190150298697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1bd4bbad75b%3A0x96aa23285129da53!2sTALAVALI%20GAON!5e0!3m2!1sen!2sin!4v1704447389578!5m2!1sen!2sin"
                    width="100%" height="350" allowFullScreen={false} loading="lazy" className='border-none rounded-md'
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    )
}

export default Contact
