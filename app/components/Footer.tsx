import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="content">
                <div className="columns has-text-centered">
                    <div className="column has-text-left">
                    <Image src="/images/logo.png" alt="Devkalm Logo" width={250} height={100} />
                        <p>
                            Devkalm specializes in building websites and web applications for businesses and individuals.
                        </p>
                    </div>
                    <div className="column ">
                     
                        <a href='#contact'>SEO Scotland</a>
                        <a href='#contact'>SEO Glasgow</a>
                        <a href='#contact'>SEO Edinburgh</a>
                        <a href='#contact'>SEO Aberdeen</a>
                        <a href='#contact'>Global SEO</a>
                       
                    </div>
                    <div className="column">
                        <h3>Contact</h3>
                        <address>
                            <p>---</p>
                            <p>Scotland</p>
                            <p>United kingdom</p>
                        </address>
                    </div>
                </div>
                
                <p className='has-text-centered'>
                     2025 <strong>Devkalm</strong>.
                </p>
            </div>
        </footer>
    );
};

