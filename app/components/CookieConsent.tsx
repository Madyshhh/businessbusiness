"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already given consent
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true); // Show the banner if no consent is found
    }
  }, []);

  const handleAccept = () => {
    // Save consent to localStorage
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false); // Hide the banner
  };

  const handleDecline = () => {
    // Save decline to localStorage
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false); // Hide the banner
  };

  return (
    <>
      {isVisible && (
        <div
          className="notification has-text-centered"
          style={{
            position: "fixed",
            bottom: "0",
            width: "90%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            padding: "1rem",
            margin: "1rem auto",
            boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p>
            We use cookies to improve your experience on our website. By continuing to use this site, you accept our use of cookies.{" "}
            <Link href="/cookie-policy" rel="noopener noreferrer">
              Learn more about our cookie policy.
            </Link>
          </p>
          <div className="buttons is-centered mt-3">
            <button className="button is-small is-primary" onClick={handleAccept}>
              Accept
            </button>
            <button className="button is-small is-light" onClick={handleDecline}>
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;