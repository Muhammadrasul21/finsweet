import React from 'react'
import Layout from "../../components/Layout"
import Hero from '../../components/Hero'
import Info from '../../components/Info'
import Supporters from '../../components/Supporters'
const Home = () => {
  return (
    <>
    <Layout>
      <Hero/>
      <Info/>
      <Supporters/>
    </Layout>
    </>
  )
}

export default Home