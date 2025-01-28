import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Supporters from "@/components/Supporters";
import Care from "@/components/Care";
import Projects from "@/components/Projects";
import Donation from "@/components/donation";
import Contribute from "@/components/Contribute";
import News from "@/components/News";
import Events from "@/components/Events";
const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Info />
        <Supporters />
        <Care />
        <Projects />
        <Donation />
        <Contribute />
        <News />
        <Events />
      </Layout>
    </>
  );
};

export default Home;
