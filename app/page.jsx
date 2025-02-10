"use client";

import DownloadApp from "../components/DownloadApp";
import EventList from "@/components/Events/EventList";
import Hero from "@/components/Hero";
import RecommendedEvents from "@/components/RecommendedEvents";
import UpcomingEvents from "@/components/UpcomingEvents";
import { EventContext } from "@/contexts/EventContext";
import { useContext } from "react";

const Home = () => {

  const { showEventList } = useContext(EventContext);

  return (
    <div className="">
      <Hero />
      {showEventList ? (
        <div className="container mx-auto">
          <EventList />
        </div>
      ) : (
        <div>
          <div className="container mx-auto">
            <UpcomingEvents />
            <DownloadApp />
            <RecommendedEvents />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
