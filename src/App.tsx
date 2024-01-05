import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import InfoStrip from './components/InfoStrip';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Wrapper>
        <Hero />
      </Wrapper>
      <Wrapper className='py-16 px-5'>
        <About />
      </Wrapper>
      <Wrapper className='py-16 px-5 bg-primary-100'>
        <Features />
      </Wrapper>
      <Wrapper className='py-16 px-5 bg-gradient-primary text-white'>
        <InfoStrip />
      </Wrapper>
      <Wrapper className='py-16 px-5'>
        <Contact />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
