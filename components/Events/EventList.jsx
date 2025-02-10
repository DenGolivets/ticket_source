import { EventContext } from "@/contexts/EventContext";
import React, { useContext } from "react";
import Event from "./Event";
import SkeletonGrid from "../SkeletonGrid";
import Link from "next/link";

const EventList = () => {
  const { filteredEvents, isLoading, error } = useContext(EventContext);

  if (error) return <p>Error: {error}</p>;

  if (filteredEvents.length === 0 && !isLoading) {
    return (
      <div className="h-[80vh]">
        <p className="text-white/80 text-center">No events found</p>
      </div>
    );
  }

  if (isLoading) {
    return <SkeletonGrid itemCount={12} />;
  } else {
    return (
      <div>
        <h4 className="mb-4 text-center h4">
          <span className="text-accent">{filteredEvents.length}</span> results
          found
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7.5 mb-32">
          {filteredEvents.map((event, index) => (
            <div key={index}>
              <Link href={`/event/${event.id}`}>
                <Event event={event} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default EventList;
