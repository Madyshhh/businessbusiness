"use client"

import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import FloatingText from "./components/FloatingText";

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
          <header className="navbar is-fixed-top">
            <div className="container navbar-container">
              <div className="navbar-brand">
                <a className="navbar-item" href='#home'>
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
                  <a className="navbar-item" href='#services'>Services</a>
                  <a className="navbar-item" href='#about'>About us</a>
                  <a className="navbar-item" href='#team'>Team</a>
                  <span className="navbar-item">
                    <a className="button is-primary" href='#contact'>
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
                <Parallax speed={20}>
                  <FloatingText duration={0.6}>
                    <h1 className="title hero-title has-text-white">Your Title Here</h1>
                  </FloatingText>
                  <FloatingText duration={0.8}>
                    <p className="subtitle is-4 has-text-white">
                      A short and compelling description.
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

        <div style={{width: "100%"}} className="block info-container is-flex is-flex-direction-column is-align-items-center is-background-white is-py-6">
          <FloatingText duration={1.0}>
            <h2 className="title is-2">Services</h2>
          </FloatingText>

          <p className="subtitle is-4" >Section subtitle</p>

          <figure className="image">
            <Image style={{width: "30%", borderRadius:"30px"}} className="serviceImage is-rounded" src="images\hero-image-2.jpg" alt="Hero image" />

          </figure>


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