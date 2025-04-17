"use client"

import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

import FloatingText from "./components/FloatingText";
import ServicesBox from './components/ServicesBox';
import Navigation from './components/Navigation';
import ContactForm from './components/ContactForm';
import CalendlyForm from './components/CalendlyWidget';
import Footer from './components/Footer';
import FAQSection from './components/FAQSection';
import PricingSection from './components/PricingSection';

import { CgWebsite } from "react-icons/cg";
import { TbSeo } from "react-icons/tb";
import { PiHandshake, PiFire, PiLink, PiCoffee, PiChartLineUp } from "react-icons/pi";


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
                priority
              />
            </div>
          </Parallax>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-head">
          <Navigation />
        </div>

        <div className="hero-body ">
          <div className="container">
            <div className="columns is-vcentered">

              <div className="column is-full ">
                <Parallax speed={20}>
                  <FloatingText duration={0.6}>
                    <h1 className="title is-1 hero-title is-responsive is-family-secondary">We build your vision. While you enjoy a coffee.</h1>
                  </FloatingText>
                  <FloatingText duration={0.8}>
                    <p className="subtitle is-5 hero-subtitle is-family-secondary">
                      Custom software solutions tailored to your business needs. <br />We don&apos;t just build websites, we create robust applications, mobile experiences, and innovative software that allows your company to growth.</p>
                  </FloatingText>
                </Parallax>
                <Parallax speed={18}>
                  <FloatingText duration={1.0}>
                    <a className="button mt-5 is-info is-medium" href='#contact'>Get a free consultation</a>
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

      <section className="section" id='about'>

        <div className="content block is-flex is-flex-direction-column  is-background-white is-py-6">
          <FloatingText duration={1.0}>
            <h2 className="title is-3 pb-2 has-text-centered">About us</h2>
          </FloatingText>

          <h3 className='subtitle has-text-link-on-scheme is-5'>Hey there!</h3>

          <p>We&apos;re the team behind Devkalm, and we&apos;re genuinely excited you&apos;re checking us out. We&apos;re not your typical, ordinary web folks. Sure, we build awesome websites – and we&apos;re big fans of WordPress and Shopify for getting things done efficiently. But what really gets our gears turning is taking those wild, ambitious software ideas you have brewing and actually building them. Think of us as your digital architects, ready to construct anything you can imagine.</p>
          <p>Maybe you&apos;ve been there – that moment when you have a brilliant idea for an app or a custom piece of software, but you&apos;re not sure where to even begin. That&apos;s exactly where Devkalm comes in.</p>
          <p>We started this because we saw a gap: a need for developers who could handle the full spectrum, from simple websites to complex applications, all with a focus on doing it right – and doing it securely. We&apos;re passionate about helping people turn those &quot;what ifs&quot; into &quot;we did it!&quot; moments. So, grab a coffee and relax – we&apos;ve got the code covered.</p>
          <h3 className="subtitle is-5 has-text-left">Why choose us?</h3>

          <p>We get it – there are tons of developers out there. So why should you pick us? Well, we believe in a few key things:</p>

          <motion.div
            className="columns is-multiline is-flex is-justify-content-center is-align-items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <ServicesBox
              icon={<PiFire className="has-text-primary responsive-icon" />}
              title="We think big (and small)"
              description="Whether you have a game-changing app idea or just need a solid website, we're ready to roll up our sleeves."
            />
            <ServicesBox
              icon={<PiLink className='has-text-primary responsive-icon' />}
              title="No hidden fees or surprises"
              description="We believe in transparent pricing and clear communication from the get-go. You'll know exactly what to expect."

            />
            <ServicesBox
              icon={<PiHandshake className='has-text-primary responsive-icon' />}
              title="We're all about quality over quantity"
              description="We take pride in our work and want you to absolutely love what we create together."
            />
          </motion.div>
          <motion.div
            className="columns is-multiline is-flex is-justify-content-center is-align-items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <ServicesBox
              icon={<PiCoffee className='has-text-primary responsive-icon' />}
              title="We speak your language (not just code)"
              description="We'll explain things clearly and avoid confusing tech jargon."
            />
            <ServicesBox
              icon={<PiChartLineUp className='has-text-primary responsive-icon' />}
              title="We take the tech headaches away"
              description="Let us handle the coding, hosting, and all the technical bits so you can have a coffee and focus on what you do best."
            />

          </motion.div>



          <h3 className="subtitle is-5">So, what can we actually do? Pretty much anything digital.</h3>

          <p>Okay, maybe &quot;anything&quot; sounds a bit bold, but we mean it. While we definitely have a soft spot for crafting beautiful and effective websites using WordPress and Shopify (they&apos;re powerful tools!), our real playground is in building custom software and applications from the ground up.</p>

          {/* <p>Here's the deal: our backgrounds are in Software Development with a strong emphasis on Cyber Security. That means we're not just about writing code; we're about writing secure code. We think about potential threats from the get-go, so you can rest easy knowing your project is in safe hands.</p> */}


          <h3 className="subtitle is-5">How we work</h3>


          <p>We&apos;re not the kind of developers who just disappear into a coding cave. We believe in actually talking to you, understanding your vision inside and out, and working together every step of the way. Your success is our success, and we&apos;re genuinely invested in making your project a win. We&apos;re all about clear communication, being transparent, and making the whole process as smooth (and maybe even a little fun!) as possible. <br />And yes, we also love a good cup
            of <span className="icon-text">
              <span className="icon">
                <i className="fas fa-coffee"></i>
              </span>
              <span>coffee</span>
            </span> while we&apos;re coding!</p>

          <h3 className="subtitle is-5">Let&apos;s chat!</h3>
          <p>Got a project brewing? Or maybe just a coffee-fueled idea you want to bounce off someone? We&apos;re all ears! Drop us a line – we&apos;d love to chat about how we can help you turn your vision into a reality.</p>
          <FloatingText duration={1.0}>
            {/* <a className='button mt-4 is-info has-text-info-invert'  href='#contact'>Let's grab a virtual coffee (or an actual one if you're local!) and talk. </a> */}
            <button className='button mt-4 is-info has-text-info-invert' style={{ whiteSpace: 'normal', }} onClick={() => window.location.href = '#contact'}>Let&apos;s grab a virtual coffee (or an actual one if you&apos;re local!) and talk. </button>
          </FloatingText>
        </div>

      </section >

      <section className="section" id='services'>
        <div className="block info-container is-flex is-flex-direction-column is-align-items-center">
          <FloatingText duration={1.0}>
            <h2 className="title is-3 pt-6 pb-2">Services</h2>
          </FloatingText>
          <FloatingText duration={1.0}>
            <h3 className='subtitle has-text-link-on-scheme'>Your vision, our expertise: Software development without limits.</h3>
          </FloatingText>
          <p>At Devkalm, we believe that technology should empower your vision, not restrict it. That&apos;s why we offer a comprehensive range of software development services, going beyond the ordinary to create truly custom solutions. Whether you have a groundbreaking app idea, need specialized business software, or require a powerful online presence, our team has the skills and experience to bring your concepts to life.</p>
          <motion.div
            className="columns is-multiline is-flex is-justify-content-center is-align-items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            <ServicesBox
              icon={<CgWebsite className="has-text-primary responsive-icon" />}
              title="Website development"
              description="Sometimes a truly custom website is needed to perfectly reflect your brand and achieve your specific goals. Devkalm creates bespoke websites with unique designs, advanced functionalities, and seamless user experiences. We focus on creating a digital presence that truly stands out."
            />
            <ServicesBox
              icon={<CgWebsite className="has-text-primary responsive-icon" />}
              title="Custom software"
              description="Off-the-shelf software doesn't always fit the unique needs of your business. Devkalm specializes in creating custom software applications designed to streamline your workflows, improve efficiency, and give you a competitive edge. From internal tools to specialized industry solutions, we build software that works the way you do."
            />
            <ServicesBox
              icon={<CgWebsite className="has-text-primary responsive-icon" />}
              title="Mobile application development"
              description="In today's mobile-first world, a powerful app can be a game-changer. Devkalm develops native and cross-platform mobile applications for both iOS and Android, designed to engage your users, build your brand, and drive results."
            />


          </motion.div>
          <motion.div
            className="columns is-multiline is-justify-content-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            
            <ServicesBox
              icon={<CgWebsite className="has-text-primary responsive-icon" />}
              title="Shopify Development"
              description="Looking to sell online? Devkalm specializes in building and customizing Shopify stores that are both visually appealing and highly effective at driving sales. From theme customization and app integration to payment gateway setup and SEO optimization, we provide everything you need to succeed in the world of e-commerce."
            />
            <ServicesBox
              icon={<TbSeo className='has-text-primary responsive-icon' />}
              title="Search Engine Optimization"
              description="Having a great website is only half the battle. Devkalm offers expert Search Engine Optimization (SEO) services to help your website rank higher in search engine results, attract more organic traffic, and ultimately grow your business. We employ proven strategies to optimize your website's content, structure, and technical aspects for maximum visibility."
            />
          </motion.div>
          <a className='button mt-4 is-info has-text-info-invert' href='#contact'>Book a free consultation</a>

        </div>
      </section>

      <PricingSection />

      <section className="section" id='contact'>

        <div className="block is-flex is-flex-direction-column">
          <FloatingText duration={1.0}>
            <h2 className="title has-text-centered">Let&apos;s work together</h2>
          </FloatingText>
          <CalendlyForm buttonText='Schedule time with us' calendlyUrl={'https://calendly.com/madyshhh/30min'} />
          <p className="is-size-5">or fill in the form and we will get back to you</p>
          <ContactForm />
        </div>

      </section>

      <FAQSection />


      <Footer />
    </div >
  );
}