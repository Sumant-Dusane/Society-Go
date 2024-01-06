import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Container, ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import Particles, { initParticlesEngine } from '@tsparticles/react';

const CustomParticles = () => {
    const [particlesInit, setParticlesInit] = useState<boolean>(false);
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
                value: 300,
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
        <>
            {particlesInit && ParticleCanvas()}
        </>
    )
}

export default memo(CustomParticles);
