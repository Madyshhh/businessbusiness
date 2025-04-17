'use client';
import './style.css';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Privacy() {
    return (
        <>
            <Navigation />
            <section className="section">
                <div className="content block is-flex is-flex-direction-column  is-background-white is-py-6">
                    <h1 className="title">Privacy policy</h1>
                   
                </div>
            </section>
            <Footer />
        </>
    );
}