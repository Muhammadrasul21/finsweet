import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import Supporters from "@/components/Supporters";
import Care from "@/components/Care";
import Projects from "@/components/Projects";
const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Info />
        <Supporters />
        <Care />
        <Projects />
      </Layout>
    </>
  );
};

export default Home;
