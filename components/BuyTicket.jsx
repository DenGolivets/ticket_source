"use client";

import { TicketContext } from "@/contexts/TicketContext";
import React, { useContext, useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { HiTicket } from "react-icons/hi2";

const BuyTicket = ({ event }) => {
  const { buyNow, itemAmount, totalPrice, increaseAmount, decreaseAmount } =
    useContext(TicketContext);

  const [isLoading, setIsLoading] = useState(false);

  const handleBuyNow = () => {
    setIsLoading(true);
    buyNow(event);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-4">
      <div className="w-50 md:w-75 flex items-center justify-between bg-secondary p-2 rounded-full">
        <div
          className="cursor-pointer bg-accent w-12 h-12 flex items-center justify-center select-none
        rounded-full"
          onClick={decreaseAmount}
        >
          <BiMinus className="text-lg" />
        </div>
        <div>{itemAmount}</div>
        <div
          className="cursor-pointer bg-accent w-12 h-12 flex items-center justify-center select-none
        rounded-full"
          onClick={increaseAmount}
        >
          <BiPlus className="text-lg" />
        </div>
      </div>
      <button
        onClick={handleBuyNow}
        className="bg-accent hover:bg-accent-hover transition-all p-4 w-full rounded-full"
      >
        <div className="flex items-center justify-center">
          {isLoading ? (
            <div>Processing...</div>
          ) : (
            <div className="flex items-center gap-4">
              <HiTicket className="text-2xl" />
              <div>{`${itemAmount} x ticket - $${totalPrice}`}</div>
            </div>
          )}
        </div>
      </button>
    </div>
  );
};

export default BuyTicket;
