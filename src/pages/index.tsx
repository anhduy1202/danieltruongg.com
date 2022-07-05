import axios from "axios";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Greeting from "../components/Greeting/Greeting";
import NavBar from "../components/NavBar/NavBar";
import Projects from "../components/Projects/Projects";

const Home: NextPage = ({
  projectData,
  expData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <section>
      <Head>
        <title> Daniel Truong </title>
        <meta property="og:title" content="Daniel Truong" key="title" />
      </Head>
      <NavBar />
      <Greeting />
      <Projects projects={projectData} />
      <About />
      <Experience experiences={expData} />
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get("http://localhost:3000/api/projects");
  const resExp = await axios.get("http://localhost:3000/api/experience");

  return {
    props: {
      projectData: res.data,
      expData: resExp.data,
    },
  };
};

export default Home;
