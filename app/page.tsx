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

import { CgWebsite } from "react-icons/cg";
import { MdOutlineDomainVerification } from "react-icons/md";
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
                      Custom software solutions tailored to your business needs. <br />We don't just build websites; we create robust applications, mobile experiences, and innovative software that allows your company to growth.                    </p>
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

          <p>We're the team behind Devkalm, and we're genuinely excited you're checking us out. We're not your typical, ordinary web folks. Sure, we build awesome websites – and we're big fans of WordPress and Shopify for getting things done efficiently. But what really gets our gears turning is taking those wild, ambitious software ideas you have brewing and actually building them. Think of us as your digital architects, ready to construct anything you can imagine.</p>
          <p>Maybe you've been there – that moment when you have a brilliant idea for an app or a custom piece of software, but you're not sure where to even begin. That's exactly where Devkalm comes in.</p>
          <p>We started this because we saw a gap: a need for developers who could handle the full spectrum, from simple websites to complex applications, all with a focus on doing it right – and doing it securely. We're passionate about helping people turn those "what ifs" into "we did it!" moments. So, grab a coffee and relax – we've got the code covered.</p>
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

          <p>Okay, maybe "anything" sounds a bit bold, but we mean it. While we definitely have a soft spot for crafting beautiful and effective websites using WordPress and Shopify (they're powerful tools!), our real playground is in building custom software and applications from the ground up.</p>

          {/* <p>Here's the deal: our backgrounds are in Software Development with a strong emphasis on Cyber Security. That means we're not just about writing code; we're about writing secure code. We think about potential threats from the get-go, so you can rest easy knowing your project is in safe hands.</p> */}


          <h3 className="subtitle is-5">How we work</h3>


          <p>We're not the kind of developers who just disappear into a coding cave. We believe in actually talking to you, understanding your vision inside and out, and working together every step of the way. Your success is our success, and we're genuinely invested in making your project a win. We're all about clear communication, being transparent, and making the whole process as smooth (and maybe even a little fun!) as possible. <br />And yes, we also love a good cup
            of <span className="icon-text">
              <span className="icon">
                <i className="fas fa-coffee"></i>
              </span>
              <span>coffee</span>
            </span> while we're coding!</p>

          <h3 className="subtitle is-5">Let's chat!</h3>
          <p>Got a project brewing? Or maybe just a coffee-fueled idea you want to bounce off someone? We're all ears! Drop us a line – we'd love to chat about how we can help you turn your vision into a reality.</p>
          <FloatingText duration={1.0}>
            {/* <a className='button mt-4 is-info has-text-info-invert'  href='#contact'>Let's grab a virtual coffee (or an actual one if you're local!) and talk. </a> */}
            <button className='button mt-4 is-info has-text-info-invert' style={{ whiteSpace: 'normal', }} onClick={() => window.location.href = '#contact'}>Let's grab a virtual coffee (or an actual one if you're local!) and talk. </button>
          </FloatingText>
        </div>

      </section >

      <section className="section" id='services'>
        <div className="block info-container is-flex is-flex-direction-column is-align-items-center">
          <FloatingText duration={1.0}>
            <h2 className="title is-3 pt-6 pb-2">Services</h2>
          </FloatingText>
          <FloatingText duration={1.0}>
            <h3 className='subtitle has-text-link-on-scheme'>Your vision, Our expertise: Software development without limits.</h3>
          </FloatingText>
          <p>At Devkalm, we believe that technology should empower your vision, not restrict it. That's why we offer a comprehensive range of software development services, going beyond the ordinary to create truly custom solutions. Whether you have a groundbreaking app idea, need specialized business software, or require a powerful online presence, our team has the skills and experience to bring your concepts to life.</p>
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
              title="WordPress Development"
              description="WordPress is a versatile and powerful platform, and Devkalm's developers can use its full potential to create stunning and functional websites. Whether you need a simple blog, a complex business website, or an e-commerce store, we can build a WordPress solution tailored to your needs, with custom themes, plugins, and integrations. We ensure your WordPress site is not only visually appealing but also secure and optimized for search engines."
            />
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

      <section className="section" id="pricing">
  <div className="block info-container is-flex is-flex-direction-column is-align-items-center">
    <FloatingText duration={1.0}>
      <h2 className="title is-3 pt-6 pb-2 has-text-centered">Our Pricing Plans</h2>
    </FloatingText>
    <p className="subtitle is-5 has-text-centered mb-5">
      Choose the perfect plan for your business needs. No hidden fees, just results.
    </p>

    <div className="columns is-multiline is-justify-content-center mt-5">
      {[
        {
          title: "Starter",
          price: "$99/month",
          features: [
            "Basic website setup",
            "1 custom page",
            "Email support",
          ],
          isPopular: false,
        },
        {
          title: "Professional",
          price: "$199/month",
          features: [
            "Custom website design",
            "Up to 5 pages",
            "SEO optimization",
            "Priority email support",
          ],
          isPopular: true, // Highlight this plan
        },
        {
          title: "Business",
          price: "$299/month",
          features: [
            "Advanced website design",
            "Up to 10 pages",
            "SEO & analytics",
            "Phone & email support",
          ],
          isPopular: false,
        },
        {
          title: "Enterprise",
          price: "$499/month",
          features: [
            "Custom software solutions",
            "Unlimited pages",
            "Dedicated account manager",
            "24/7 support",
          ],
          isPopular: false,
        },
        {
          title: "Custom",
          price: "Contact us",
          features: [
            "Tailored solutions",
            "Custom integrations",
            "Full-stack development",
            "Ongoing support",
          ],
          isPopular: false,
        },
      ].map((plan, index) => (
        <div
          key={index}
          className={`column is-one-fifth-desktop is-half-tablet ${
            plan.isPopular ? "is-relative" : ""
          }`}
        >
          <div
            className={`box has-text-centered ${
              plan.isPopular ? "has-background-gradient" : ""
            }`}
            style={{
              border: plan.isPopular ? "2px solid #3273dc" : "1px solid #ddd",
              boxShadow: plan.isPopular
                ? "0 4px 15px rgba(50, 115, 220, 0.3)"
                : "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            {plan.isPopular && (
              <span
                className="tag is-primary is-medium is-rounded"
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                Most Popular
              </span>
            )}
            <h3 className="title is-4">{plan.title}</h3>
            <p className="subtitle is-5 has-text-primary">{plan.price}</p>
            <ul className="is-size-6 has-text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2">
                  <i className="fas fa-check has-text-success mr-2"></i>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`button mt-4 is-fullwidth ${
                plan.isPopular ? "is-primary" : "is-info"
              }`}
            >
              {plan.price === "Contact us" ? "Get a Quote" : "Choose Plan"}
            </a>
          </div>
        </div>
      ))}
    </div>

    {/* Trust-Building Section */}
    <div className="trust-section mt-6">
      <p className="has-text-centered is-size-5">
        <strong>100% Satisfaction Guarantee</strong> – We’re committed to delivering results you’ll love.
      </p>
      <p className="has-text-centered is-size-6 mt-2">
        Trusted by <strong>100+ businesses</strong> worldwide.
      </p>
    </div>
  </div>
</section>

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