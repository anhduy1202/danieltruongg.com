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

console.log(process.env.APIURL);

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
  const res = await Promise.all([project, exp, contact]);
  return {
    props: {
      projectData: res[0].data,
      expData: res[1].data,
      contactData: res[2].data,
    },
  };
};

export default Home;
