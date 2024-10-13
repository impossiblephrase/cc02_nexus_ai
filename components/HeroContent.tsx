"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/components/motion';

const HeroContent = () => {
  return (
        <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full px-20 w-full" 
        >
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>

                {/* <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[8px] px-[14px] border border-purple-950 opacity-[0.9]'>
                    <SparklesIcon className='text-purple-400 mr-[10px] h-5 w-5'/>
                    
                    <h1 className='Welcome-text items-start text-[13px]'> Welcome to Nexus AI </h1>
                </motion.div> */}

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[800px] w-auto h-auto'>
                    <span>
                    Innovating the Future of Business with
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> NEXUS Artificial Intelligence </span>
                    </span>
                </motion.div>
                    
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-lg text-white text shadow-xl my-5 max-w-[600px]'>
                    
                    At Nexus AI, we specialize in transforming data into actionable insights through cutting-edge 
                    artificial intelligence solutions. Our mission is to empower businesses to optimize operations, 
                    improve decision-making, and unlock new opportunities by harnessing the power of AI.
                </motion.p>

                <motion.a
                href='/services'
                variants={slideInFromLeft(0.9)}
                className='px-3 py-5 bg-transparent border-2 text-center cursor-pointer border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition max-w-[250px]'
                >
                Explore our Services
                </motion.a>
            </div>

            {/* <motion.div
            variants={slideInFromRight(0.8)}
            className='w-full h-full flex justify-center items-center'>
                <Image
                    src="/"
                    alt="work icons"
                    height={650}
                    width={650}
                />

            </motion.div> */}
        
        </motion.div>
  )
}

export default HeroContent
