import React, { useEffect, useState } from 'react'
import "./style.scss";
import { Modal } from 'antd';

const Navbar = () => {
  const [isSticky, setSticky] = useState<boolean>(false);
  const [navbarStatus, setNavbarStatus] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false);
  const [selectedVendor, setSelectedVendor] = useState<'' | 'app-store' | 'play-store'>('');

  useEffect(() => {
    window.addEventListener('scroll', changNavState);
    return () => {
      window.removeEventListener('scroll', changNavState);
    }
  }, []);

  const scrollTo = (divId: string) => {
    setNavbarStatus(false);
    document.getElementById(divId)?.scrollIntoView();
  }

  const handleAppLinkModal = (vendor: 'app-store' | 'play-store') => {
    setModalState(true);
    setSelectedVendor(vendor);
  }

  const changNavState = () => {
    window.scrollY >= window.innerHeight - 100 ? setSticky(true) : setSticky(false);
  }
  return (
    <>
      <button className={`fixed p-2 lg:hidden top-4 right-4 z-30 ${isSticky && !navbarStatus && 'bg-white rounded-full shadow-md'}`} onClick={() => setNavbarStatus(!navbarStatus)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 transition-all">
          {!navbarStatus ?
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> :
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          }
        </svg>
      </button>

      <div
        className={`
          fixed h-screen lg:h-max top-0 left-0 w-full z-20 transition-all bg-white text-slate-700 shadow-sm
          ${!navbarStatus && '-translate-y-full lg:translate-y-0'}
        `}>
        <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between py-4 px-2 h-full max-w-screen-xl my-0 mx-auto'>
          <a href="#home"><img src="" alt="" width={50} height={50} /></a>
          <ul className='flex flex-col lg:flex-row items-center justify-center gap-5'>
            <li><button className="relative hover:text-primary-500" onClick={() => scrollTo('home')}>Home</button></li>
            <li><button className="relative hover:text-primary-500" onClick={() => scrollTo('about')}>About SocietyGo</button></li>
            <li><button className="relative hover:text-primary-500" onClick={() => scrollTo('features')}>Features</button></li>
            <li><button className="relative hover:text-primary-500" onClick={() => scrollTo('contact')}>Contact</button></li>
            <li><button className="relative hover:text-primary-500">Login</button></li>
            <li className='dropdown'>
              <div className='dropdown__title'>Download the App</div>
              <ul className="dropdown__content shadow-md">
                <li><button onClick={() => handleAppLinkModal('play-store')}><img src="/svg/play-store.svg" alt="" width={24} height={24} /> Play Store</button></li>
                <li><button onClick={() => handleAppLinkModal('app-store')}><img src="/svg/app-store.svg" alt="" width={24} height={24} /> App Store</button></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Modal title={selectedVendor.replace('-', ' ').toUpperCase()} footer={[]} open={modalState} onCancel={() => { setModalState(false); setSelectedVendor('') }}>
        <form className="flex flex-col gap-8 pt-4">
          <label className='w-full'>
            Enter you Mobile Number <br />
            <input className='min-h-10 w-full border p-2 border-slate-300 rounded-md' type="text" required/>
          </label>
          <input className='bg-gradient-primary w-max cursor-pointer my-0 mx-auto text-white p-2 rounded-md' type="submit" value="Send SMS Link" />
        </form>
      </Modal>
    </>
  )
}

export default Navbar
