"use client";

import React, { useContext, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { EventContext } from "@/contexts/EventContext";
import SkeletonGrid from "./SkeletonGrid";
import Link from "next/link";
import Event from "./Events/Event";

const RecommendedEvents = () => {
  const { events } = useContext(EventContext);

  const filteredRecommendedEvents = events.filter(
    (event) => event.recommended === true
  );

  return (
    <section className="mb-32">
      <div className="mb-12 text-center">
        <h3 className="pretitle">Recommended for you</h3>
        <h2 className="h2">Events You Might Like</h2>
      </div>
      {filteredRecommendedEvents.length > 0 ? (
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1310: { slidesPerView: 4 },
          }}
          className="w-full h-125"
        >
          {filteredRecommendedEvents.map((event, index) => (
            <SwiperSlide key={index} className="select-none">
              <Link href={`/event/${event.id}`}>
                <Event event={event} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <SkeletonGrid itemCount={4} />
      )}
    </section>
  );
};

export default RecommendedEvents;
