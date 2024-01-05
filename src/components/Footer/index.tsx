import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-black-300 py-9 px-5'>
                <div className='lg:max-w-screen-lg my-0 mx-auto text-sm font-light text-slate-300 justify-between flex gap-12'>
                    <div className="flex flex-col max-w-80">
                        <img src="" alt="" width={50} height={50} />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et nobis dignissimos quam praesentium voluptatibus, ut qui velit? Veniam, quod?</p>
                    </div>
                    <div className='flex flex-col gap-4 items-start justify-start'>
                        <h4 className='text-base font-bold'>Solutions</h4>
                        <a className='hover:text-white' href="#">SOl1</a>
                        <a className='hover:text-white' href="#">SOl1</a>
                        <a className='hover:text-white' href="#">SOl1</a>
                    </div>
                    <div className='flex flex-col gap-4 items-start justify-start'>
                        <h4 className='text-base font-bold'>Quick Links</h4>
                        <a className='hover:text-white' href="#home">Home</a>
                        <a className='hover:text-white' href="#about">About </a>
                        <a className='hover:text-white' href="#features">Features</a>
                        <a className='hover:text-white' href="#contact">Contact</a>
                    </div>
                </div>
            </div>
            <footer className='text-white font-light bg-black-500 text-sm p-4 text-center'>Copyright &copy; 2023-2024 Jode Technologies LLP, All rights reserved.</footer>
        </>
    )
}

export default Footer
