import React from 'react'
import Layout from '../../components/Layout'
import ContactInfo from '../../components/ContactInfo'
import Login from "../../components/Login"

const Contact = () => {
  return (
    <>
    <Layout>
      <ContactInfo/>
      <Login/>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096177!2d144.9537353153167!3d-37.81720997975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f5d5fb1b%3A0x5045675218ce720!2sFederation+Square!5e0!3m2!1sen!2sau!4v1614841321740!5m2!1sen!2sau"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-[448px] border-0"
        ></iframe>  
    </Layout>
    </>
  )
}

export default Contact