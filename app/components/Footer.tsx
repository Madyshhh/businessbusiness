import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const [isAtBottom, setIsAtBottom] = useState(false);
    const footerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY; // Current scroll position
            const windowHeight = window.innerHeight; // Viewport height
            const documentHeight = document.documentElement.scrollHeight; // Total page height

            // Check if user is at the bottom
            setIsAtBottom(scrollY + windowHeight >= documentHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer
            ref={footerRef}
            className="footer"
            style={{
                zIndex: isAtBottom ? 10 : -10, // Only appear when at the bottom
                position: 'sticky',
            }}
        >
            <div className="content">
                <div className="columns has-text-centered">
                    <div className="column has-text-left">
                        <Image src="/images/logo.png" alt="Devkalm Logo" width={250} height={100} />
                        <p className='has-text-centered-mobile'>
                            Devkalm specializes in building websites and web applications for businesses and individuals.
                        </p>
                    </div>
                    <div className="column content">
                        <p className='has-text-centered'><a href='/'>Home</a></p>
                        <p className='has-text-centered'><a href='/#contact' className="has-text-link">Contact us</a></p>
                        <p className='has-text-centered'><a href='/#about' className="has-text-link">About us</a></p>
                        <p className='has-text-centered'><a href='/#services' className="has-text-link">Services</a></p>
                    </div>
                    <div className="column">
                        <h3 className='is-size-5'>Contact</h3>
                        <address>
                            <p>Springfield house</p>
                            <p>Laurelhill Business Park</p>
                            <p>Stirling FK7 9JQ</p>
                            <p>Scotland</p>
                            <p>United Kingdom</p>
                        </address>
                    </div>
                </div>

                <hr />

                <div className='is-justify-content-center is-flex' style={{ gap: '1rem' }}>
                    <a href='https://www.facebook.com/devkalm' target='_blank' rel='noopener noreferrer'>
                        <FaFacebookSquare size={30} color="#4267B2" />
                    </a>
                    <a href='https://www.instagram.com/devkalm/' target='_blank' rel='noopener noreferrer'>
                        <FaInstagram size={30} color="#E1306C" />
                    </a>
                    <a href='https://www.linkedin.com/company/devkalm' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={30} color="#0077B5" />
                    </a>
                </div>

                <p className='has-text-centered'>
                    <a href='/privacy-policy'>Privacy Policy</a> | <a href='/terms-and-conditions'>Terms and Conditions</a>
                </p>


                <p className='has-text-centered'>
                    2025 <strong>Devkalm</strong>.
                </p>
            </div>
        </footer>
    );
};
