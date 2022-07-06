import Image from "next/image";
import Link from "next/link";
import React from "react";
import { contactType } from "../../interface/interface";
import Heading1, { Heading2 } from "../Heading/Heading";
import { Spacing2 } from "../Spacing/Spacing";

interface contactProps {
  contacts: contactType[];
}

const ContactMe: React.FC<contactProps> = (props) => {
  const { contacts } = props;
  return (
    <Spacing2>
      <Heading1 content="Contact Me" />
      <Heading2 content="Currently active looking for Summer 2023 Software Engineer internship" />
      <section id="contact" className="flex my-6 justify-center w-screen">
        {contacts.map((contact) => {
          return (
            <div key={contact.id} className="mx-5">
              <SocialList logo={contact.logo} link={contact.link} />
            </div>
          );
        })}
      </section>
      <Footer />
    </Spacing2>
  );
};

interface socialProps {
  logo: string;
  link: string;
}

const SocialList: React.FC<socialProps> = (props) => {
  const { logo, link } = props;
  return (
    <Link href={link}>
      <a target="_blank" className="cursor-pointer">
        <Image src={logo} width={20} height={20} alt="social icon" />
      </a>
    </Link>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-12 my-6">
      <p> Designed and made with 💙 by <span className="font-semibold">  Daniel Truong </span></p>
      <p className="font-semibold"> @2022 </p>
    </footer>
  );
};

export default ContactMe;
