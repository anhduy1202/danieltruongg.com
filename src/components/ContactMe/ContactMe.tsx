import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { contactType } from '../../interface/interface';
import Heading1 from '../Heading/Heading';
import { Spacing2 } from '../Spacing/Spacing';
import { textVariants } from '../Greeting/Greeting';

interface contactProps {
    contacts: contactType[];
    isDesktop: boolean;
}

const ContactMe: React.FC<contactProps> = props => {
    const { contacts, isDesktop } = props;
    return (
        <Spacing2>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                className="mt-10"
                viewport={{ once: true }}
                variants={textVariants}
            >
                <Heading1 content="Contact Me" />
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={textVariants}
            ></motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={textVariants}
            >
                <section id="contact" className="flex my-6 justify-center w-screen">
                    {contacts?.map(contact => {
                        return (
                            <div key={contact.id} className="mx-5">
                                <SocialList
                                    isDesktop={isDesktop}
                                    logo={contact.logo}
                                    link={contact.link}
                                />
                            </div>
                        );
                    })}
                </section>
                <Footer />
            </motion.div>
        </Spacing2>
    );
};

interface socialProps {
    logo: string;
    link: string;
    isDesktop: boolean;
}

const SocialList: React.FC<socialProps> = props => {
    const { logo, link, isDesktop } = props;
    return (
        <Link href={link}>
            <a target="_blank" className="cursor-pointer">
                <Image
                    src={logo}
                    width={isDesktop ? 30 : 20}
                    height={isDesktop ? 30 : 20}
                    alt="social icon"
                />
            </a>
        </Link>
    );
};

const Footer: React.FC = () => {
    return (
        <footer className="text-center text-12 my-6 md:text-16">
            <p>
                Designed and made with 💙 by
                <span className="font-semibold"> Daniel Truong </span>
            </p>
            <p className="font-semibold"> @2024 </p>
        </footer>
    );
};

export default ContactMe;
