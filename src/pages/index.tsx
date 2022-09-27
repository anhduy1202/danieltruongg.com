import axios from "axios";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/About/About";
import ContactMe from "../components/ContactMe/ContactMe";
import Experience from "../components/Experience/Experience";
import Greeting from "../components/Greeting/Greeting";
import NavBar from "../components/NavBar/NavBar";
import Projects from "../components/Projects/Projects";

const Home: NextPage = ({
  projectData,
  expData,
  contactData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [windowSize, setWindowSize] = useState<any>({
    width: undefined,
    height: undefined,
  });
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        heigth: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width >= 768) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
  }, [windowSize]);

  return (
    <section>
      <Head>
        <title> Daniel Truong </title>
        <meta property="og:title" content="Daniel Truong" key="title" />
        <meta property="og:url" content="https://www.danieltruongg.com/face" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="100047357746150" />
        <meta
          property="og:description"
          content="Hello, welcome to my portfolio website @2022"
        />
        <meta property="og:image" content="/memoji.png" />
        <link rel="shortcut icon" href="/memoji.ico" />
      </Head>
      <NavBar />
      <Greeting isDesktop={isDesktop} />
      <Projects projects={projectData} isDesktop={isDesktop} />
      <About isDesktop={isDesktop} />
      <Experience experiences={expData} />
      <ContactMe contacts={contactData} isDesktop={isDesktop} />
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const project = await axios.get(`${process.env.APIURL}/api/projects`);
  const exp = await axios.get(`${process.env.APIURL}/api/experience`);
  const contact = await axios.get(`${process.env.APIURL}/api/contact`);
  return {
    props: {
      projectData: project.data,
      expData: exp.data,
      contactData: contact.data,
    },
  };
};

export default Home;
