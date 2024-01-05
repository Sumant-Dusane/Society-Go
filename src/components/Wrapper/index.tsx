import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const Wrapper = ({ className, children, slideDirection='up' }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start('visible');
        }
    }, [isInView]);

    const revealAnimation = (): any => {
        if(slideDirection === 'up') {
            return {
                hidden: { opacity: 0, y: 75 },
                visible: {opacity: 1, y: 0}
            }
        }
        if(slideDirection === 'down') {
            return {
                hidden: { opacity: 0, y: -75 },
                visible: {opacity: 1, y: 0}
            }
        }
        if(slideDirection === 'left') {
            return {
                hidden: { opacity: 0, x: 175 },
                visible: {opacity: 1, x: 0}
            }
        }
        if(slideDirection === 'right') {
            return {
                hidden: { opacity: 0, x: -175 },
                visible: {opacity: 1, x: 0}
            }
        }
    }

    return (
        <section ref={ref} className='relative overflow-hidden'>
        <motion.div className={className}
            variants={revealAnimation()}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
        >
            {children}
        </motion.div>
        </section>
    )
}

export default Wrapper
