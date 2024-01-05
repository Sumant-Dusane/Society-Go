import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import Slider, { Settings } from "react-slick";
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { Container, ISourceOptions } from '@tsparticles/engine';

const Hero = () => {
  const [particlesInit, setParticlesInit] = useState<boolean>(false);
  var settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const options: ISourceOptions = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fullScreen: false,
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 120,
        enable: true,
        opacity: 0.5,
        width: 2,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 200,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "triangle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }), []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setParticlesInit(true);
    })
  }, [])

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const ParticleCanvas = useCallback(() => {
    return (
      <Particles className='w-full h-full absolute top-0 left-0 bg-cover' id='particles' options={options} particlesLoaded={particlesLoaded} />
    )
  }, [])

  return (
    <div id='home' className='h-screen relative flex flex-col justify-center gap-8 py-8 px-5 bg-gradient-primary'>
      {particlesInit && ParticleCanvas()}
      <div className='text-center max-w-xl mx-auto my-0 text-white'>
        <h1 className='text-6xl font-bold'>SocietyGo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aliquid quod repellat dicta hic distinctio libero magni eaque, qui ab.</p>
      </div>
      <Slider {...settings} className='lg:my-0 lg:mx-32 max-w-full'>
        <img src="/images/slider/slider_1.jpg" alt="Slide 1" />
        <img src="/images/slider/slider_2.jpg" alt="Slide 2" />
        <img src="/images/slider/slider_3.jpg" alt="Slide 3" />
        <img src="/images/slider/slider_4.jpg" alt="Slide 4" />
      </Slider>
    </div>
  )
}

export default Hero
