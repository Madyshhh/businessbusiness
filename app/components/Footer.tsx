import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from 'react-icons/fa6';
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
            <div className="container py-6">
                <div className="columns is-multiline">
                    {/* Company Info */}
                    <div className="column is-one-third is-hidden-mobile">
                        <Image src="/images/logo.png" alt="Devkalm Logo" width={200} height={80} />
                        <p className="mt-4">
                            Devkalm specializes in building websites and web applications for businesses and individuals. We focus on delivering high-quality, secure, and scalable solutions tailored to your needs.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="column is-one-third">
                        <h3 className="title is-5">Quick Links</h3>
                        <ul className="mt-4">
                            <li>
                                <Link href="/" className="has-text-white-bold">Home</Link>
                            </li>
                            <li>
                                <Link href="/#about" className="has-text-white-bold">About Us</Link>
                            </li>
                            <li>
                                <Link href="/#services" className="has-text-white-bold">Services</Link>
                            </li>
                            <li>
                                <Link href="/#contact" className="has-text-white-bold">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="has-text-white-bold">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms-and-conditions" className="has-text-white-bold">Terms and Conditions</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="column is-one-third">
                        <h3 className="title is-5 ">Contact Us</h3>
                        <ul className="mt-4">
                            <li className="is-flex is-align-items-center mb-2">
                                <FaPhoneAlt className="mr-2" />
                                <a href="tel:+447928984082" className="has-text-white-bold">+44 7928 984082</a>
                            </li>
                            <li className="is-flex is-align-items-center mb-2">
                                <FaEnvelope className="mr-2" />
                                {/* <a href="mailto:info@devkalm.com" className="has-text-white-bold">info@devkalm.com</a> */}
                                <Link href="/#contact" className="has-text-current">
                                <span>info@devkalm.com</span>
                            </Link>
                            </li>
                            <li className="is-flex is-align-items-center">
                                <FaLocationDot className="mr-2" size={30}/>
                                <span>Springfield House, Laurelhill Business Park, Stirling FK7 9JQ, Scotland</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="has-background-bold" />

                {/* Social Media */}
                <div className="is-flex is-justify-content-center mt-4" style={{ gap: '1rem' }}>
                    <a href="https://www.facebook.com/profile.php?id=61575318331032" target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare size={30} color="#4267B2" />
                    </a>
                    <a href="https://www.instagram.com/devkalm_ltd/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} color="#E1306C" />
                    </a>
                    <a href="https://www.linkedin.com/company/devkalm" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} color="#0077B5" />
                    </a>
                </div>

                {/* Footer Bottom */}
                <div className="has-text-centered mt-4">
                    <p className="">
                        © 2025 <strong>Devkalm</strong>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}