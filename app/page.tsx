"use client"

import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import FloatingText from "./components/FloatingText";
import ServicesBox from './components/ServicesBox';
import Navigation from './components/Navigation';
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDomainVerification } from "react-icons/md";
import { TbSeo } from "react-icons/tb";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Increased staggerChildren for slower delay between each box
    },
  },
};

export default function Home() {
  return (
    <div id="parallax-page" className="">

      <section className="hero is-fullheight" id='home' style={{ position: "relative", overflow: "hidden" }}> {/* Use is-fullheight for full viewport height */}
        <div className="hero-background">
          <Parallax scale={[1, 1.1]} speed={-15}>
            <div className="image-container">
              <Image
                src="/images/hero-image-1.jpg"
                alt="Hero Image"
                fill
                style={{ objectFit: "cover" }}
                quality={100}
              />
            </div>
          </Parallax>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-head">
          <Navigation />
        </div>

        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered"> {/* Vertically center content */}

              <div className="column is-6"> {/* Adjust column width as needed */}
                <Parallax speed={20}>
                  <FloatingText duration={0.6}>
                    <h1 className="title hero-title">MAK Solutions</h1>
                  </FloatingText>
                  <FloatingText duration={0.8}>
                    <p className="subtitle is-4 hero-subtitle">
                      We help you create a professional and engaging online presence for your business.
                    </p>
                  </FloatingText>
                </Parallax>
                <Parallax speed={18}>
                  <FloatingText duration={1.0}>
                    <a className="button mt-5 is-info is-medium" href='#contact'>Get a quote</a>
                  </FloatingText>
                </Parallax>
              </div>
              <div className="column is-6">
                {/* Optional: Add an image or other content here */}
                {/* <Image src="/images/your-other-image.png" alt="Other Image" width={400} height={300} /> */}
              </div>
            </div>
          </div>
        </div>


        <div className="hero-foot">

        </div>
      </section>


      <section className="section" id='services'>
          <div className="block info-container is-flex is-flex-direction-column is-align-items-center">
            <FloatingText duration={1.0}>
              <h2 className="title is-2 pb-5">Services</h2>
            </FloatingText>
            <motion.div
              className="columns is-multiline"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <ServicesBox
                icon={<CgWebsite className="has-text-primary" size={60} />}
                title="Website development"
                description="We offer mobile first website development services to help you create a professional and engaging online presence for your business. Custom designs, responsive layouts, and user-friendly interfaces to enhance the user experience. Whatever your needs, we can help you build a website that meets your goals and exceeds your expectations."
              />
              <ServicesBox
                icon={<MdOutlineDomainVerification className="has-text-primary" size={60} />}
                title="Hosting & domains"
                description="Our hosting and domain services provide secure, reliable, and scalable solutions to ensure your website is always online and accessible to your customers. We offer a range of hosting plans and domain registration services to meet your needs and budget."
              />
              <ServicesBox
                icon={<TbSeo className='has-text-primary' size={60} />}
                title="Search Engine Optimization"
                description="Our SEO services help improve your website's visibility in search engine results, driving more organic traffic and increasing your online presence. We offer keyword research, on-page optimization, link building, and other strategies to help you rank higher in search results."
              />
              <ServicesBox
                icon={<CgWebsite className="has-text-primary" size={60} />}
                title="Custom E-Commerce Solutions"
                description='We offer custom e-commerce solutions tailored to your business needs, including online stores, shopping carts, and payment gateways to help you sell products and services online. Our e-commerce solutions are designed to be secure, scalable, and easy to manage.'
              />
              </motion.div>
              <motion.div
              className="columns is-multiline"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <ServicesBox
                icon={<CgWebsite className="has-text-primary" size={60} />}
                title="Mobile application development"
                description="We offer mobile application development services to help you reach your customers on the go, with custom apps designed for iOS and Android devices. Our mobile apps are user-friendly, responsive, and optimized for performance."
              />
              <ServicesBox
                icon={<CgWebsite className="has-text-primary" size={60} />}
                title="Front-end development"
                description="Our front-end development services focus on creating interactive and user-friendly interfaces for your website, with custom designs and responsive layouts to enhance the user experience. We use the latest web technologies to build fast, efficient, and visually appealing websites."
              />
              <ServicesBox
                icon={<CgWebsite className="has-text-primary" size={60} />}
                title="Back-end development"
                description="Our back-end development services focus on building robust and scalable server-side applications to power your website, with secure data storage and efficient processing capabilities. We use the latest technologies and frameworks to create reliable and high-performance web applications."
              />
              <ServicesBox
                icon={<CgWebsite className="has-text-primary" size={60} />}
                title="WordPress & Shopify Design & Development"
                description="We offer WordPress and Shopify design and development services to help you create custom websites and online stores that are easy to manage and update. Our WordPress and Shopify solutions are user-friendly, scalable, and optimized for performance."
              />
            </motion.div>
          </div>
        </section>

      <section className="section" id='about'>

        <div className="block info-container is-flex is-flex-direction-column is-align-items-center is-background-white is-py-6">
          <FloatingText duration={1.0}>
            <h2 className="title is-2">About us</h2>
          </FloatingText>
          <p className="subtitle is-4">Section subtitle</p>
        </div>

      </section>

      <section className="section" id='team'>

        <div className="block info-container is-flex is-flex-direction-column is-align-items-center is-background-white is-py-6">
          <FloatingText duration={1.0}>
            <h2 className="title is-2">Team</h2>
          </FloatingText>
          <p className="subtitle is-4">Section subtitle</p>
        </div>

      </section>

      <section className="section" id='contact'>

        <div className="block info-container is-flex is-flex-direction-column is-align-items-center is-background-white is-py-6">
          <FloatingText duration={1.0}>
            <h2 className="title is-2">Contact us</h2>
          </FloatingText>
          <p className="subtitle is-4">Section subtitle</p>
        </div>

      </section>
    </div>
  );
}