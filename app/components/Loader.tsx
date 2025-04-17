"use client";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import "../globals.css"; // Ensure this is correct

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after a short delay (to allow full hydration)
    const timer = setTimeout(() => {
      setLoading(false);
      document.documentElement.classList.remove("preload");
    }, 500); // Optional delay to prevent flickering

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-wrapper">
      <SyncLoader color="#fff" loading={true} size={20} margin={10} />
    </div>
  );
}
