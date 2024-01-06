import React from 'react'
import CustomParticles from '../CustomParticles'

const Footer = () => {
    return (
        <>
            <div className='bg-gradient-primary py-9 px-5'>
                <div className='lg:max-w-screen-lg my-0 mx-auto text-sm font-normal text-white justify-between flex gap-12'>
                    <div className="flex flex-col max-w-80">
                        <img src="" alt="" width={50} height={50} />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et nobis dignissimos quam praesentium voluptatibus, ut qui velit? Veniam, quod?</p>
                    </div>
                    <div className='flex flex-col gap-4 items-start justify-start'>
                        <h4 className='text-base font-bold'>Useful Links</h4>
                        <a className='hover:text-white' href="#">Terms of service</a>
                        <a className='hover:text-white' href="#">Privacy Policy</a>
                    </div>
                    <div className='flex flex-col gap-4 items-start justify-start'>
                        <h4 className='text-base font-bold'>Company</h4>
                        <a className='hover:text-white' href="#about">About SocietyGo</a>
                        <a className='hover:text-white' href="#features">Features</a>
                        <a className='hover:text-white' href="#contact">Contact</a>
                    </div>
                </div>
            </div>
            <footer className='text-white font-normal bg-gradient-primary shadow-inner text-sm p-4 text-center'>Copyright &copy; 2023-2024 Jode Technologies LLP, All rights reserved.</footer>
        </>
    )
}

export default Footer
