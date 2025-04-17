"use client";

import React from "react";
import FloatingText from "./FloatingText";
import { motion } from "framer-motion";

const PricingSection = () => {

    const handleContactRedirect = (planTitle: string) => {
        if (typeof window !== "undefined") {
            // Store the selected plan in localStorage
            localStorage.setItem("selectedPlan", planTitle);
      
            // Navigate to the contact section
            window.location.hash = "contact";
      
            // Scroll to the contact section
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }
      };
    
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Increased staggerChildren for slower delay between each box
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    };
    return (
        <section className="section" id="pricing">
            <div className="block info-container is-flex is-flex-direction-column is-align-items-center">
                <FloatingText duration={1.0}>
                    <h2 className="title is-3 pt-6 pb-2 has-text-centered">Our pricing</h2>
                </FloatingText>
                <p className="subtitle is-5 has-text-centered mb-5">
                    Choose the perfect plan for your business needs. No hidden fees, just results.
                </p>
                <p className="has-text-centered">All our plans come with a 100% satisfaction guarantee. If you&apos;re not happy with the results, we&apos;ll work with you until you are.</p>

                <p className="has-text-centered is-size-7 has-text-warning-bold">Please remember that these are estimates, and the final cost will depend on the specific requirements and complexity of your unique vision.</p>
                {/* Pricing Plans */}
                <motion.div
                    className="columns is-multiline is-justify-content-center mt-5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.001 }} // Adjust viewport settings
                >
                    {[
                        {
                            title: "Starter",
                            upfrontCost: "300",
                            monthlyOptions: [
                                { duration: "12 months", price: "40", total: "780" },
                                { duration: "20 months", price: "35", total: "1000", note: "Save £100" },
                            ],
                            description: "Individuals, startups, small businesses needing a basic online presence, blog, or informational website.",
                            features: [
                                "One page website",
                                "5 sections",
                                "Mobile ready (responsive design)",
                                "Basic SEO",
                                "Social media links",
                                "Choice of brand colours",
                                "Basic security features",

                            ],
                            pages: [
                                "Landing section",
                                "About us",
                                "Team",
                                "Services",
                                "Contact us",
                            ],
                            includes: [
                                "1 hour of support per month",
                                "Domain and hosting included",
                            ],
                            isPopular: false,
                        },
                        {
                            title: "Professional",
                            upfrontCost: "500",
                            monthlyOptions: [
                                { duration: "12 months", price: "60", total: "1220" },
                                { duration: "20 months", price: "50", total: "1500", note: "Save £200" },
                            ],
                            description: "Small to medium-sized businesses needing a professional online presence, e-commerce store, or a portfolio.",
                            features: [
                                "Custom website design",
                                "7 pages",
                                "SEO optimization",
                                "Mobile ready (responsive design)",
                                "Lead generation form",
                                "Google Analytics integration",
                                "Enhanced security features",
                            ],
                            pages: [
                                "Home",
                                "About us",
                                "Servces",
                                "Portfolio/Gallery",
                                "Testimonials/Reviews",
                                "Contact us",
                                "News",
                                "Privacy Policy",
                            ],
                            includes: [
                                "2 hour of support per month",
                                "Domain and hosting included",
                            ],
                            isPopular: true, // Highlight this plan
                        },
                        {
                            title: "Business",
                            upfrontCost: "800",
                            monthlyOptions: [
                                { duration: "12 months", price: "80", total: "1760" },
                                { duration: "20 months", price: "65", total: "2100", note: "Save £340" },
                            ],
                            description: "Businesses needing a comprehensive online presence, advanced features, and custom solutions.",
                            features: [
                                "Includes everything from 'Professional' package",
                                "Advanced website design",
                                "Up to 10 pages",
                                "SEO & analytics",
                                "E-commerce functionality",
                                "Custom integrations",
                                "Enhanced security features",
                                "Performance optimization",
                            ],
                            pages: [
                                "Home",
                                "About us",
                                "Services/Products",
                                "Product 1",
                                "Product 2",
                                "Product 3",
                                "Portfolio/Gallery",
                                "Testimonials/Reviews",
                                "Contact us",
                                "News",
                                "Privacy Policy",
                            ],
                            includes: [
                                "3 hour of support per month",
                                "Domain and hosting included",
                                "Business email setup",
                            ],
                            isPopular: false,
                        },

                        {
                            title: "Custom",
                            description: "Businesses with specific needs, complex functionality requirements, or those wanting a truly unique online presence.",
                            features: [
                                "Fully custom theme development from scratch",
                                "Integration with third-party APIs and systems",
                                "Advanced functionality and features",
                                "Complex e-commerce solutions",
                                "Website migrations and upgrades",
                            ],
                            pages: [
                                "Custom pages as per requirements",
                            ],
                            includes: [
                                "Custom features as per requirements",
                                "Ongoing support and maintenance packages available",
                            ],
                            upfrontCost: "Contact us for a tailored quote.",
                            monthlyOptions: [],
                            isPopular: false,
                        },
                    ].map((plan, index) => (
                        plan.title === "Custom" ? (
                            <div
                                key={index}
                                className="column is-four-fifths-desktop is-full-mobile"
                            >
                                <div className="box price-box has-text-centered is-flex is-flex-direction-column is-align-content-center" style={{ gap: "0.7rem" }}>
                                    <h3 className="title is-4 has-text-left mb-0">
                                        {plan.title}
                                    </h3>
                                    <p className="has-text-left is-size-6 has-text-white-bold">
                                        {plan.description}
                                    </p>
                                    {/* Features Section */}

                                    <span className="is-size-6 is-family-secondary has-text-weight-bold has-text-success-on-scheme has-text-left glowing-text">
                                        {plan.upfrontCost}
                                    </span>

                                    <ul className="is-size-6 has-text-left">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="mb-2">
                                                <i className="fas fa-check has-text-success-on-scheme mr-2"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Includes Section */}

                                    <ul className="is-size-6 has-text-left">
                                        {plan.includes.map((include, i) => (
                                            <li key={i} className="mb-2">
                                                <i className="far fa-star has-text-primary-on-scheme mr-2"></i>
                                                {include}
                                            </li>
                                        ))}
                                    </ul>
                                    {/* Call-to-Action */}

                                    <p className="has-text-grey is-size-7 has-text-left">
                                        *This package is fully customizable.
                                    </p>
                                    <div
                                        className='button has-text-white-on-scheme '
                                        onClick={() => handleContactRedirect(plan.title)}
                                    >
                                        Get a quote
                                    </div>

                                </div>

                            </div>

                        ) : (

                            <motion.div
                                key={index}
                                className="column is-one-third-desktop is-half-tablet"
                                variants={cardVariants}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                <div
                                    className={`box price-box has-text-centered is-flex is-flex-direction-column is-align-content-center ${plan.isPopular ? "has-background-gradient has-text-white-bold" : ""
                                        }`}
                                    style={{
                                        gap: "0.7rem",
                                        border: plan.isPopular ? "2px solid #3273dc" : "",
                                        boxShadow: plan.isPopular
                                            ? "0 4px 15px rgba(50, 115, 220, 0.3)"
                                            : "0 2px 10px rgba(0, 0, 0, 0.1)",
                                    }}
                                >
                                    {plan.isPopular && (
                                        <span
                                            className="tag popular-tag is-primary is-medium is-rounded"

                                        >
                                            Most Popular
                                        </span>
                                    )}
                                    <h3
                                        className={`title is-4 has-text-left mb-0 ${plan.title === "Starter"
                                            ? "has-text-warning-on-scheme" // Yellow for Starter
                                            : plan.title === "Professional"
                                                ? "has-text-link-bold" // Blue for Professional
                                                : plan.title === "Business"
                                                    ? "has-text-danger-on-scheme" // Red for Business
                                                    : "has-text-grey-on-scheme" // Default color for other plans
                                            }`}
                                    >
                                        {plan.title}
                                    </h3>
                                    <p className="has-text-left has-text-white-bold">{plan.description}</p>

                                    <p className=" is-size-3 is-family-secondary has-text-weight-bold has-text-success-on-scheme has-text-left glowing-text"><span className='is-size-6 '>£</span>{plan.upfrontCost} <span className='is-size-7 has-text-success-bold'> upfront</span></p>

                                    <div className="is-flex is-flex-direction-column is-justify-content-space-between is-size-7 has-text-left">
                                        {plan.monthlyOptions?.map((option, i) => (
                                            <div
                                                key={i}
                                                className="is-flex is-flex-direction-column is-justify-content-space-left is-flex-wrap-wrap"
                                            >
                                                <span className="is-size-7 is-flex is-align-items-center is-flex-wrap-wrap">
                                                    +&nbsp;
                                                    <span className="has-text-success-bold">£</span>
                                                    <span className="has-text-weight-bold has-text-success-bold is-size-6">
                                                        {option.price}&nbsp;
                                                    </span>
                                                    <span className="has-text-success-bold">/per month&nbsp;</span>
                                                    <span>for&nbsp;</span>
                                                    <span className="has-text-weight-bold"> {option.duration}</span>
                                                    {option.note && (
                                                        <span className="tag save-tag ml-2 has-text-success-bold has-background-success-soft is-family-secondary">
                                                            {option.note}
                                                        </span>
                                                    )}
                                                </span>



                                                {/* Add "or" if it's not the last option */}
                                                {i < plan.monthlyOptions.length - 1 && (
                                                    <span className="is-size-7 has-text-grey mx-2">or</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>


                                    <ul className="is-size-6 has-text-left">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="mb-2">
                                                <i className="fas fa-check has-text-success-on-scheme mr-2"></i>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <ul className="is-size-6 has-text-left">
                                        {plan.includes?.map((include, i) => (
                                            <li key={i} className="mb-2">
                                                <i className="far fa-star has-text-primary-on-scheme mr-2"></i>
                                                {include}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="has-text-white-bold has-text-left">{index === 0 ? "Sections included:" : "Pages included:"}</p>
                                    <ul className="is-size-6 has-text-left">
                                        {plan.pages?.map((page, i) => (
                                            <li key={i} className="mb-2">
                                                <i className="fas fa-minus has-text-grey-on-scheme mr-2 ml-3"></i>
                                                {page}
                                            </li>
                                        ))}
                                    </ul>
                                    {index !== 0 && (
                                        <p className="has-text-grey is-size-7 has-text-left">*Additional pages can be added for £70.</p>
                                    )}
                                    <p className="has-text-grey is-size-7 has-text-left">*Additional plugins and features can be added for extra cost.</p>


                                    <span className="has-text-weight-bold  has-text-white-bold">Total price</span>
                                    <div className="is-flex is-flex-direction-row is-justify-content-space-evenly has-text-left">

                                        <span className="is-flex is-flex-direction-column is-align-items-center">
                                            <span className="has-text-weight-bold is-size-7">Over 12 months&nbsp;</span>
                                            <span className="has-text-success-on-scheme is-size-5 has-text-weight-bold">
                                                <span className='is-size-7 '>£</span>
                                                {plan.monthlyOptions?.[0].total}
                                            </span>
                                        </span>

                                        <span className=" is-flex is-flex-direction-column is-align-items-center">
                                            <span className="has-text-weight-bold is-size-7">Over 20 months&nbsp;</span>
                                            <span className="has-text-success-on-scheme is-size-5 has-text-weight-bold">
                                                <span className='is-size-7 '>£</span>
                                                {plan.monthlyOptions?.[1].total}
                                            </span>
                                            {/* <span className="tag save-tag has-text-success-bold has-background-success-soft is-family-secondary is-small">
                            Best value for money
                          </span> */}
                                        </span>

                                    </div>

                                    <div
                                        onClick={() => handleContactRedirect(plan.title)}
                                        className={`button ${plan.title === "Starter"
                                            ? "has-text-warning-on-scheme" // Yellow for Starter
                                            : plan.title === "Professional"
                                                ? "is-link is-bold" // Blue for Professional
                                                : plan.title === "Business"
                                                    ? "has-text-danger-on-scheme" // Red for Business
                                                    : "has-text-white-on-scheme" // Default color for other plans
                                            }`}
                                    >
                                        {plan.title === "Custom" ? "Get a Quote" : "Choose Plan"}
                                    </div>

                                </div>

                            </motion.div>

                        )
                    ))}

                </motion.div>


                {/* Trust-Building Section */}
                <div className="trust-section">
                   
                   
                </div>

            </div>

        </section >
    );
};

export default PricingSection;