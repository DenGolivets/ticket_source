"use client";

import React, { useEffect, useState } from "react";

const Timer = ({ event }) => {
  const eventDate = new Date(`${event.date}T${event.hour}`);

  const [timeRemaining, setTimeRemaining] = useState(eventDate - new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeLeft = eventDate - now;

      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(timeLeft);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  if (timeRemaining <= 0) {
    return <div>The event has already passed!</div>;
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div className="flex flex-wrap gap-4">
      <div
        className="text-center border-3 border-accent rounded-full w-25 h-25 flex items-center 
        justify-center"
      >
        <div>
          <div className="text-3xl font-semibold">{days}</div>
          <div className="text-sm uppercase font-medium">Days</div>
        </div>
      </div>

      <div
        className="text-center border-3 border-accent rounded-full w-25 h-25 flex items-center 
        justify-center"
      >
        <div>
          <div className="text-3xl font-semibold">{hours}</div>
          <div className="text-sm uppercase font-medium">Hours</div>
        </div>
      </div>

      <div
        className="text-center border-3 border-accent rounded-full w-25 h-25 flex items-center 
        justify-center"
      >
        <div>
          <div className="text-3xl font-semibold">{minutes}</div>
          <div className="text-sm uppercase font-medium">Minutes</div>
        </div>
      </div>

      <div
        className="text-center border-3 border-accent rounded-full w-25 h-25 flex items-center 
        justify-center"
      >
        <div>
          <div className="text-3xl font-semibold">{seconds}</div>
          <div className="text-sm uppercase font-medium">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
