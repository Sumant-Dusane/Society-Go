import React from 'react';

const About = () => {
  return (
    <div className="lg:max-w-screen-xl my-0 mx-auto">
      <h2 id="about" className="text-4xl font-bold mb-24 text-center">About Society Go</h2>
      <div className="text-2xl font-bold">SocietyGo&reg; for Societies</div>
      <p>SocietyGo&reg; is a Smart Society application for managing various requirements
        of Societies and communities transacting in a single ecosystem. SocietyGo&reg; empowers societies and members with
        apartment management, merchant integration, payment gateway and property management solution in a single platform.
      </p>

      <div className="flex flex-col lg:flex-row gap-10 justify-center mt-16">
        <ul className='flex flex-col gap-5'>
          <h6 className='font-bold mb-4'>The solution Provides below modules to the end users</h6>
          <li className='flex items-center gap-4'>
            <span className='w-max block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></span>
            Society Administration
          </li>
          <li className='flex items-center gap-4'>
            <span className='w-max block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></span>
            Maintenance Management
          </li>
          <li className='flex items-center gap-4'>
            <span className='w-max block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></span>
            Vendors Relation
          </li>
          <li className='flex items-center gap-4'>
            <span className='w-max block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></span>
            Tenant Management
          </li>
          <li className='flex items-center gap-4'>
            <span className='w-max block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></span>
            Security Solution
          </li>
          <li className='flex items-center gap-4'>
            <span className='w-max block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></span>
            Accounting and reporting
          </li>
        </ul>
        <ul className='flex flex-col gap-5'>
          <h6 className='font-bold mb-4'>The application has been built with highly secured banking platform and delivers comprehensive solution to,</h6>
          <li className='flex items-center gap-4'>
            <span className='block w-max'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></span>
            Society Operators: Chairman, Treasurer, Secretary, Facility Management company, Managing Committee
          </li>
          <li className='flex items-center gap-4'>
            <span className='block w-max'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></span>
            Merchant Service Providers: Doorstep vendors, Local merchants, Property agents
          </li>
          <li className='flex items-center gap-4'>
            <span className='block w-max'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg></span>
            Society Members: Owners, tenants, families and other members
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
