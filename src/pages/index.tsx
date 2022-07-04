import type { NextPage } from "next";
import Head from "next/head";
import Greeting from "../components/Greeting/Greeting";
import NavBar from "../components/NavBar/NavBar";

const Home: NextPage = () => {
  return (
    <section>
      <Head>
        <title> Daniel Truong </title>
        <meta property="og:title" content="Daniel Truong" key="title" />
      </Head>
      <NavBar />
      <Greeting/>
    </section>
  );
};

export default Home;
