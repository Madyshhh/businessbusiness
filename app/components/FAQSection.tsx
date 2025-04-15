import React, { useState } from 'react';
import FloatingText from "./FloatingText";


const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What exactly does Devkalm do?",
      answer:
        "Devkalm is a software development company based in the UK. We specialize in turning your digital visions into reality by building custom software applications, mobile apps and websites.",
    },
    {
      question: "What makes Devkalm different from other website developers?",
      answer:
        "Unlike many developers who focus solely on website platforms, our expertise extends to building software, apps, and anything digital you can imagine. Our team has degrees in Software Development, which lets us ensure we build secure and reliable solutions.",
    },
    {
      question: "Where is Devkalm located?",
      answer:
        "We are based in Stirling, Scotland, UK, but we work with clients both locally and internationally.",
    },

    {
      question: "Do you offer custom designs?",
      answer:
        "Yes, we provide custom designs tailored to your brand and requirements. Our design team works closely with you to create a unique and user-friendly experience.",
    },
    {
      question: "Do you only build custom software?",
      answer:
        "Not at all! While custom development is a core strength, we also have extensive experience in building and customizing websites and online stores using popular platforms like WordPress and Shopify. We can help you choose the best solution for your goals and budget.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "The timeline for a project depends on its complexity and scope. Simple websites can take a few weeks, while custom software or mobile apps may take several months. We'll provide you with a realistic estimate during the initial consultation phase.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Absolutely! We offer ongoing maintenance and support packages to ensure your website or software remains secure, up-to-date, and performing optimally. We're here to help you long after the initial launch.",
    },
    {
      question: "How does your development process work?",
      answer:
        "Our process typically involves an initial consultation to understand your needs, followed by planning and design, development, testing, deployment, and ongoing support. We believe in clear communication and collaboration throughout the entire process.",
    },
    // {
    //     question: "What if I need help after my project is completed?",
    //     answer:
    //       "We offer ongoing support and maintenance packages to ensure your project continues to run smoothly. Our team is always here to assist you with any questions or issues that may arise.",
    //   },
    {
      question: "How much does it cost to build a software application or website?",
      answer:
        "The cost of a project depends on its scope, features, and complexity. We provide customized quotes based on your specific needs after a thorough understanding of your requirements.",
    },
    {
      question: "How do you communicate with clients?",
      answer:
        "We believe in clear and consistent communication. We typically use a combination of email, phone calls, video conferencing, and project management tools to keep you informed and involved throughout the development process.",
    },

  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq">
      <div className="block info-container is-flex is-flex-direction-column is-background-white is-py-6">
        <FloatingText duration={1.0}>
          <h2 className="title is-3 pb-2 pt-6 has-text-centered">Frequently asked questions</h2>
        </FloatingText>
        <div className="accordion">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`accordion-item ${activeIndex === index ? "is-active" : ""}`}
            >
              <header
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
                style={{ cursor: "pointer" }}
              >
                <p className="text has-text-weight-bold has-text-light-on-scheme faq-question">{faq.question}</p>
                <span className="icon">
                  <i
                    className={`fas has-text-link-on-scheme ${activeIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                      }`}
                  ></i>
                </span>
              </header>
              <div
                className={`accordion-body ${activeIndex === index ? "is-active" : ""
                  }`}
                style={{
                  maxHeight: activeIndex === index ? "400px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <span className='content'>
                  <p className="faq-answer ">{faq.answer}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;