import BuyTicket from "@/components/BuyTicket";
import CustomSelect from "@/components/CustomSelect";
import EventSchedule from "@/components/EventSchedule";
import Organizers from "@/components/Organizers";
import Timer from "@/components/Timer";
import Image from "next/image";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const EventDetails = async ({ params }) => {
  const { id } = await params;

  const fetchEvent = async (id) => {
    const res = await fetch(`http://localhost:4000/events/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch event");
    }

    return res.json();
  };

  const event = await fetchEvent(id);

  return (
    <section className="min-h-screen flex items-center py-8 sm:py-48">
      <div className="container mx-auto">
        <div className="w-full max-w-150 xl:max-w-none mx-auto">
          <div className="flex flex-col gap-8 xl:gap-24 xl:flex-row pt-28 pb-12 sm:py-0 xl:mb-24">
            <div className="relative w-full h-80 xl:max-w-167.5 xl:h-125 rounded-2xl overflow-hidden mb-12
            xl:mb-0">
              <Image 
                src={event.img_lg}
                alt="event"
                fill
                quality={100}
                className="object-cover mix-blend-lighten"
              />
            </div>
            <div className="flex w-full max-w-115 flex-col justify-center flex-1 gap-8 sm:mb-12 xl:mb-0">
              <div>
                <h2 className="h2 mb-4">{event.title}</h2>
                <EventSchedule event={event} />
              </div>
              <Timer event={event} />
              <CustomSelect event={event} />
              <BuyTicket event={event} />
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-8 xl:gap-24">
            <div className="w-full xl:max-w-167.5 flex flex-col gap-8 xl:gap-12">
              <p className="text-grey">{event.description}</p>
              <div className="">
                <h3 className="h3 mb-6">Requirements for the event</h3>
                <ul className="flex flex-col gap-4">
                  <li className="flex gap-3 items-center">
                    <span className="text-accent tet-xl">
                      <FaRegCircleCheck />
                    </span>
                    <p className="text-grey">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-accent tet-xl">
                      <FaRegCircleCheck />
                    </span>
                    <p className="text-grey">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-accent tet-xl">
                      <FaRegCircleCheck />
                    </span>
                    <p className="text-grey">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-accent tet-xl">
                      <FaRegCircleCheck />
                    </span>
                    <p className="text-grey">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full max-w-115">
              <Organizers event={event} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
