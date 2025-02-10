"use client";

import { TicketContext } from "@/contexts/TicketContext";
import React, { useContext, useEffect } from "react";
import { PiChairFill } from "react-icons/pi";

const CustomSelect = ({ event }) => {
  const { initializeEvent, seat, showMenu, setShowMenu, handleSeat } =
    useContext(TicketContext);

  useEffect(() => {
    initializeEvent(event);
  }, []);

  return (
    <div
      onClick={(e) => {
        setShowMenu((prev) => !prev);
        e.stopPropagation();
      }}
      className="custom-select bg-secondary w-full h-16 flex items-center justify-between px-8 relative
      select-none cursor-pointer rounded-3xl"
    >
      <div className="flex items-center gap-2 w-full">
        <div className="text-xl text-accent">
          <PiChairFill />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex-1 capitalize">{seat.seat}</div>
          <div className="flex items-center gap-2">
            <div className="font-semibold">${seat.price}</div>
            <div className="text-sm text-white/60">each</div>
          </div>
        </div>
      </div>
      {showMenu && (
        <ul className="bg-secondary absolute top-17.5 left-0 overflow-hidden w-full rounded-3xl">
          {event.seats.map((seat, index) => (
            <li
              key={index}
              onClick={(e) => {
                handleSeat(seat.seat, seat.price);
                e.stopPropagation();
              }}
              className="cursor-pointer hover:bg-white/5 px-8 py-5"
            >
              <div className="flex justify-between">
                <div className="capitalize">{seat.seat}</div>
                <div>${seat.price}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
