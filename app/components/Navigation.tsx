import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
            <header className="navbar is-fixed-top">

                <div className={`navbar-brand ${isScrolled ? 'scrolled' : ''}`}>
                    <a className="navbar-item" href='#home'>
                        <Image src="/images/logo-clear.png" className='logo' alt="Logo" width={300} height={50} />
                    </a>
                    <span
                        className={`navbar-burger ${isMenuActive ? 'is-active' : ''}`}
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
                        <a className="navbar-item" href='#services' onClick={handleMenuItemClick}>Services</a>
                        <a className="navbar-item" href='#about' onClick={handleMenuItemClick}>About us</a>
                        <a className="navbar-item" href='#team' onClick={handleMenuItemClick}>Team</a>
                        <span className="navbar-item">
                            <a className="button is-primary is-responsive" href='#contact' onClick={handleMenuItemClick}>
                                <span>Contact us</span>
                            </a>
                        </span>
                    </div>
                </div>

            </header>
        </>
    );
};

export default Navigation;