"use client"
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import Image from 'next/image';
import FloatingText from "./components/FloatingText";

export default function Home() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [scrollYValue, setScrollYValue] = useState(0);
  const scale = 1 + scrollYValue / 1000; // Adjust 1000 for the desired zoom speed
  useEffect(() => {
    const handleScroll = () => {
      setScrollYValue(window.scrollY);  // Get scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Create a parallax effect for the second section
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <div id="parallax-page" className="">
      <motion.div className="progress-bar" style={{ scaleX }} />

      <section className="hero is-fullheight"> {/* Use is-fullheight for full viewport height */}
        <div className="hero-background">
          <div className="image-container">
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/images/hero-image.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed', // Make the background image fixed
              }}
              initial={{ scale: 1 }}
              animate={{ scale }}
              transition={{ type: 'spring', stiffness: 50, damping: 100 }}
            />
          </div>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-head">
          <header className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  Business logo
                </a>
                <span className="navbar-burger" data-target="navbarMenuHeroC">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroC" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item ">Services</a>
                  <a className="navbar-item">About us</a>
                  <a className="navbar-item">Team</a>
                  <span className="navbar-item">
                    <a className="button is-link is-inverted">
                      {/* <span className="icon">
                        <i className="fab fa-github"></i>
                      </span> */}
                      <span>Contact us</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered"> {/* Vertically center content */}
              <div className="column is-6"> {/* Adjust column width as needed */}
                <FloatingText duration={0.6}>
                  <h1 className="title hero-title is-1 has-text-white">Your Title Here</h1>
                </FloatingText>
                <FloatingText duration={0.8}>
                  <p className="subtitle is-4 has-text-white">
                    A short and compelling description.
                  </p>
                </FloatingText>
                <FloatingText duration={1.0}>
                  <button className="button mt-5 is-primary is-medium">Get a quote</button>
                </FloatingText>
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

      <section className="section content">
        <div className="container ">
          <motion.div style={{ y: y2 }}>
            <FloatingText duration={1.0}>
              <h2 className="title is-2">Section Title</h2>
            </FloatingText>
            <p className="subtitle is-4">Section subtitle</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}