import React, { useState, useEffect } from "react";

import { useForm } from "@formspree/react";

import { MdOutlinePerson } from "react-icons/md";
import { FaEnvelope, FaExclamationTriangle, FaSuitcase, FaPhoneAlt, FaGlobeEurope } from "react-icons/fa";

export default function ExampleForm() {
  const [selectedPlan, setSelectedPlan] = useState("");

  useEffect(() => {
    const updateSelectedPlan = () => {
      const plan = localStorage.getItem("selectedPlan");
      if (plan) {
        setSelectedPlan(plan);
      }
    };

    // Update selectedPlan on component mount
    updateSelectedPlan();

    // Add an event listener to detect changes to localStorage
    window.addEventListener("storage", updateSelectedPlan);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("storage", updateSelectedPlan);
    };
  }, []);

  const [state, handleSubmit] = useForm("mwplpwkl");

  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  if (state.succeeded) {
    return <div className="notification  has-background-success-soft has-text-success-soft-invert" style={{ width: '100%' }}>
      Thank you for filling in the form! We will get back to you as soon as we can!
    </div>;

  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset className="columns is-multiline">
     {/* Selected Plan */}
     {selectedPlan && (
          <div className="column is-full">
           
            <input type="hidden" name="selectedPlan" value={selectedPlan} />
          </div>
        )}
        <div className="column is-half">
          <div className="field">
            <label className="label" htmlFor="name">Name</label>
            <div className="control has-icons-left">
              <input className="input" id="name" name="name" placeholder="Your name" required />
              <span className="icon is-small is-left">
                <MdOutlinePerson />
              </span>
            </div>
          </div>
        </div>

        <div className="column is-half">
          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className={`input ${isEmailValid ? '' : 'is-danger'}`}
                type="email"
                id="email"
                placeholder="Your email"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <span className="icon is-small is-left">
                <FaEnvelope />
              </span>
              {!isEmailValid && (
                <span className="icon is-small is-right">
                  <FaExclamationTriangle />
                </span>
              )}
            </div>
            {!isEmailValid && <p className="help is-danger">Please enter a valid email</p>}
          </div>
        </div>

        <div className="column is-half">
          <div className="field">
            <label className="label" htmlFor="company">Company</label>
            <div className="control has-icons-left">
              <input className="input" id="company" name="company" required placeholder="Company you represent" />
              <span className="icon is-small is-left">
                <FaSuitcase />
              </span>
            </div>
          </div>
        </div>

        <div className="column is-half">
          <div className="field">
            <label className="label" htmlFor="country">Country</label>
            <div className="control  has-icons-left">
              <input className="input" id="country" name="country" placeholder="Your country" required />
              <span className="icon is-small is-left">
                <FaGlobeEurope />
              </span>
            </div>
          </div>
        </div>

        <div className="column is-half">
          <div className="field">
            <label className="label" htmlFor="phone-number">Phone number</label>
            <div className="control has-icons-left">
              <input className="input" id="phone-number" name="phone-number" placeholder="Your phone number" />
              <span className="icon is-small is-left">
                <FaPhoneAlt />
              </span>
            </div>
          </div>
        </div>

        <div className="column is-full">
          <label className="label">What is the approximate budget for your project?</label>
          <div className="control">
            <div className="select">
              <select id="budget" name="budget" defaultValue="1000-5000" required>
                <option value="less-500">Less than £500</option>
                <option value="500-1000">£500 - £1,000</option>
                <option value="1000-5000">£1,000 - £5,000</option>
                <option value="5000-10000">£5,000 - £10,000</option>
                <option value="more-10000">More than £10,000</option>
                <option value="not-sure">Not sure</option>
              </select>
            </div>
          </div>
        </div>

        <div className="column is-full">
          <div className="field">
            <label className="label">What services are you interested in?</label>
            <div className="control checkboxes">
              <label className="checkbox"><input type="checkbox" name="services" value="new-web-design" /> Website development</label>
              <label className="checkbox"><input type="checkbox" name="services" value="website-redesign" /> Existing website redesign</label>
              <label className="checkbox"><input type="checkbox" name="services" value="e-commerce" /> Mobile application development</label>
              <label className="checkbox"><input type="checkbox" name="services" value="seo" /> Search Engine Optimisation</label>
              <label className="checkbox"><input type="checkbox" name="services" value="website-maintenance" /> Custom software</label>
              <label className="checkbox"><input type="checkbox" name="services" value="other" /> Other</label>
            </div>
          </div>
        </div>

        <div className="column is-full">
          <div className="field">
            <label className="label" htmlFor="message">Your Message</label>
            <div className="control">
              <textarea className="textarea" id="message" name="message" placeholder="Tell us about yourself and what services you need and we`ll figure out the best option for you and your project." required></textarea>
            </div>
          </div>
        </div>
      </fieldset>


      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input id="dpa-consent" name="dpa-consent" required type="checkbox" value="consent" />
            &nbsp;Declaration of consent for data processing
          </label>
        </div>
        <p className="help">
          You agree that your data from the form will be collected and processed to answer your request. You can revoke your consent at any time by sending an email to us.
        </p>
      </div>

      <div className="field">
        <div className="control">
          <button className="button is-primary" type="submit" onClick={() => window.location.href = '#contact'}>Submit</button>
        </div>
      </div>
    </form>

  );
}