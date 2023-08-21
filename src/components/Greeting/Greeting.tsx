/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Heading1 from '../Heading/Heading';
import { motion, Variants } from 'framer-motion';

interface greetingProps {
    isDesktop: boolean;
}

export const textVariants: Variants = {
    offscreen: {
        x: -200,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            bounce: 0.2,
            duration: 1.2,
        },
    },
};

const Greeting: React.FC<greetingProps> = props => {
    const { isDesktop } = props;

    return (
        <section className="font-bold mt-[9em] text-center">
            <div className="md:flex md:justify-center md:items-center">
                <motion.div
                    className="md:flex md:flex-col"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                >
                    <motion.div className="text-34 md:text-42" variants={textVariants}>
                        Xin chao,
                    </motion.div>
                    <motion.div className="text-34 md:text-42" variants={textVariants}>
                        I'm <Heading1 content="Daniel Truong" />
                    </motion.div>
                </motion.div>
                {isDesktop && (
                    <motion.div
                        className="mt-9 md:absolute md:right-[28%] md:top-[22%]"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={textVariants}
                        viewport={{ once: true }}
                    >
                        <Image
                            width={120}
                            height={120}
                            src="/memoji.png"
                            alt="A 3D Picture of Daniel Truong"
                        />
                    </motion.div>
                )}
            </div>
            <motion.div
                className="text-14 mt-3 md:text-20"
                initial="offscreen"
                whileInView="onscreen"
                variants={textVariants}
            >
                CSUF'24 | Software Engineer | Graphic Designer
            </motion.div>
            {!isDesktop && (
                <motion.div
                    className="mt-9"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={textVariants}
                >
                    <Image
                        width={115}
                        height={115}
                        src="/memoji.png"
                        alt="A 3D Picture of Daniel Truong"
                    />
                </motion.div>
            )}
            <motion.div
                className="flex justify-center mt-10"
                initial="offscreen"
                whileInView="onscreen"
                variants={textVariants}
            >
                <Link href="https://drive.google.com/file/d/1CxMQwor3zM3IaPOpYkodab0y4-NEm_y3/view?usp=sharing">
                    <a
                        target="_blank"
                        className="text-dark-700 bg-blue-400 p-2 rounded-[8px] cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300 md:text-20"
                    >
                        My resume
                    </a>
                </Link>
            </motion.div>
        </section>
    );
};

export default Greeting;
