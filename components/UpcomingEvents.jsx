"use client";

import React, { useContext, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventContext } from "@/contexts/EventContext";
import SkeletonGrid from "./SkeletonGrid";
import Link from "next/link";
import Event from "./Events/Event";
import Image from "next/image";

const UpcomingEvents = () => {
  const { events } = useContext(EventContext);

  const [eventValue, setEventValue] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const filterEvents = () => {
      if (eventValue === "all") {
        setFilteredEvents(events);
      } else {
        const result = events.filter((event) => event.type === eventValue);
        setFilteredEvents(result);
      }
    };

    filterEvents();
  }, [eventValue, events]);

  return (
    <section className="mb-16">
      <div className="mb-12 text-center">
        <h3 className="pretitle">Upcoming</h3>
        <h2 className="h2">Popular Events</h2>
      </div>
      <div className="mb-12 flex flex-col xl:flex-row items-center justify-between">
        <Tabs
          value={eventValue}
          onValueChange={setEventValue}
          className="bg-none w-full max-w-150 h-full flex justify-center items-center mb-12 xl:mb-0
          focus:ring-0 focus:ring-offset-0 border-2 p-1 border-accent rounded-full"
        >
          <TabsList className="flex flex-col lg:flex-row gap-6 bg-transparent w-full h-full">
            <TabsTrigger value="all" className="cursor-pointer">
              All
            </TabsTrigger>
            <TabsTrigger value="sport" className="cursor-pointer">
              <Image src={'/assets/upcoming/sport.svg'} width={18} height={18} alt="sport" />
              Sport
            </TabsTrigger>
            <TabsTrigger value="music" className="cursor-pointer">
              <Image src={'/assets/upcoming/music.svg'} width={18} height={18} alt="music" />
              Music
            </TabsTrigger>
            <TabsTrigger value="food" className="cursor-pointer">
              <Image src={'/assets/upcoming/food.svg'} width={18} height={18} alt="food" />
              Food
            </TabsTrigger>
            <TabsTrigger value="art" className="cursor-pointer">
              <Image src={'/assets/upcoming/art.svg'} width={18} height={18} alt="art" />
              Art
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Link href={''} className="uppercase border-b-2 border-accent text-base font-semibold text-accent">
          See all events
        </Link>
      </div>
      {filteredEvents.length > 0 ? (
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
          {filteredEvents.map((event, index) => (
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

export default UpcomingEvents;
