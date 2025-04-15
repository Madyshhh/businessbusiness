import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Navigation: React.FC = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleMenuItemClick = () => {
        setIsMenuActive(false);
    };

    const handleScroll = () => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
            const homeSectionHeight = homeSection.offsetHeight;
            if (window.scrollY > homeSectionHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`top-bar is-hidden-touch pt-2 scrolled`} style={{ position: 'fixed', width: '100%', height: '45px', zIndex: 10 }}>
                <div className="container is-family-secondary is-flex is-justify-content-space-between is-align-items-center ">
                    <div className="contact-info is-size-7 is-flex is-align-items-center" style={{ gap: '1rem' }}>
                        <span className='is-flex is-align-items-center' style={{ gap: '0.5rem' }}>
                            <FaPhone className='has-text-primary-on-scheme' style={{ height: '100%' }} />
                            <a className='has-text-current' href="tel:+447928984082">07928984082</a>
                        </span>
                        <span className='is-flex is-align-items-center' style={{ gap: '0.5rem' }}>
                            <FaEnvelope className='has-text-primary-on-scheme' style={{ height: '100%' }} />
                            <a className='has-text-current' href="mailto:info@devkalm.com">info@devkalm.com</a>
                        </span>
                        <span className='is-flex is-align-items-center' style={{ gap: '0.5rem' }}>
                            <FaLocationDot className='has-text-primary-on-scheme' style={{ height: '100%' }} />
                            <a className='has-text-current' href="https://goo.gl/maps/7qk2i8n3j9F2" target="_blank" rel="noopener noreferrer">Stirling</a>
                        </span>

                    </div>
                    <div className="social-icons is-flex" style={{ gap: '1rem' }}>
                        <a href="https://www.facebook.com/devkalm" target="_blank" rel="noopener noreferrer" style={{ height: '20px' }}>
                            <FaFacebookSquare style={{ height: '100%' }} color="#4267B2" />
                        </a>
                        <a href="https://www.instagram.com/devkalm/" target="_blank" rel="noopener noreferrer" style={{ height: '20px' }}>
                            <FaInstagram style={{ height: '100%' }} color="#E1306C" />
                        </a>
                        <a href="https://www.linkedin.com/company/devkalm" target="_blank" rel="noopener noreferrer" style={{ height: '20px' }}>
                            <FaLinkedin style={{ height: '100%' }} color="#0077B5" />
                        </a>
                    </div>

                </div>
                {/* <div className="container section-separator is-hidden-touch"></div> */}
            </div>

            <header className="navbar is-fixed-top ">
                <div className={`navbar-brand ${isScrolled ? 'scrolled' : ''}`}>
                    <a className="navbar-item" href='/#home'>
                        <Image src="/images/logo-clear.png" className='logo' alt="Logo" width={300} height={50} />
                    </a>
                    <span className='navbar-item ml-auto is-hidden-desktop'><ThemeToggle /></span>
                    <span
                        className={`navbar-burger m-0 mr-2 ${isMenuActive ? 'is-active' : ''}`}
                        data-target="navbarMenuHeroC"
                        onClick={() => setIsMenuActive(!isMenuActive)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        
                    </span>
                    
                </div>

                <div id="navbarMenuHeroC" className={`navbar-menu  py-1 ${isScrolled ? 'scrolled' : ''} ${isMenuActive ? 'is-active' : ''} `}>
                    <div className="navbar-end">
                        <a className="navbar-item" href='/#about' onClick={handleMenuItemClick}>About us</a>
                        <a className="navbar-item" href='/#services' onClick={handleMenuItemClick}>Services</a>
                        <a className="navbar-item" href='/#faq' onClick={handleMenuItemClick}>FAQ</a>
                        <span className="navbar-item">
                            <a className="button is-primary" href='/#contact' onClick={handleMenuItemClick}>
                                <span>Contact us</span>
                            </a>

                        </span>
                        <span className='navbar-item ml-auto is-hidden-touch'><ThemeToggle /></span>
                    </div>
                    {/* Mobile Top Bar Info */}
                    <div className="navbar-item is-hidden-desktop is-flex is-flex-direction-column" style={{ gap: '0.5rem' }}>
                        <span className='is-flex is-align-items-center' style={{ gap: '0.5rem' }}>
                            <FaPhone className='has-text-primary-on-scheme' style={{ height: '100%' }} />
                            <a className='has-text-current' href="tel:+447928984082">07928984082</a>
                        </span>
                        <span className='is-flex is-align-items-center' style={{ gap: '0.5rem' }}>
                            <FaEnvelope className='has-text-primary-on-scheme' style={{ height: '100%' }} />
                            <a className='has-text-current' href="mailto:info@devkalm.com">info@devkalm.com</a>
                        </span>
                        <span className='is-flex is-align-items-center' style={{ gap: '0.5rem' }}>
                            <FaLocationDot className='has-text-primary-on-scheme' style={{ height: '100%' }} />
                            <a className='has-text-current' href="https://goo.gl/maps/7qk2i8n3j9F2" target="_blank" rel="noopener noreferrer">Stirling</a>
                        </span>
                        <div className="social-icons is-flex" style={{ gap: '0.5rem' }}>
                            <a href="https://www.facebook.com/devkalm" target="_blank" rel="noopener noreferrer" style={{ height: '30px' }}>
                                <FaFacebookSquare style={{ height: '100%' }} color="#4267B2" />
                            </a>
                            <a href="https://www.instagram.com/devkalm/" target="_blank" rel="noopener noreferrer" style={{ height: '30px' }}>
                                <FaInstagram style={{ height: '100%' }} color="#E1306C" />
                            </a>
                            <a href="https://www.linkedin.com/company/devkalm" target="_blank" rel="noopener noreferrer" style={{ height: '30px' }}>
                                <FaLinkedin style={{ height: '100%' }} color="#0077B5" />
                            </a>
                        </div>
                    </div>
                    {/* <span className='navbar-item'><ThemeToggle /></span> */}
                </div>
            </header>
        </>
    );
};

export default Navigation;