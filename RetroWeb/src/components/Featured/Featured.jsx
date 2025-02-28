/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../Featured/Featured.css";

// eslint-disable-next-line react/prop-types
const Featured = ({ isFiltered }) => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-31T23:59:59"); // Hardcoded target date
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);
  return (
    <div className="featured container">
      <div className="flex">
        Content On the Way
      </div>
    </div>
  );
};

export default Featured;
