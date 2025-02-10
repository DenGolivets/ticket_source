import React, { useContext } from "react";
import EventSearch from "./EventSearch";
import { EventContext } from "@/contexts/EventContext";
import EventLocation from "./EventLocation";
import EventDate from "./EventDate";
import EventType from "./EventType";
import { BiRightArrowAlt } from "react-icons/bi";
import { TbCancel } from "react-icons/tb";

const Searchbar = () => {
  const {
    handleSubmit,
    searchTerm,
    selectedLocation,
    handleClearSearch,
    selectedDate,
    selectedType,
    showEventList,
  } = useContext(EventContext);

  const hasActiveFilters =
    searchTerm ||
    (selectedLocation !== null && selectedLocation !== "") ||
    selectedDate ||
    (selectedType !== null && selectedType !== "");

  return (
    <div
      className="w-[90vw] bg-white/5 sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-max p-8 xl:pl-8 xl:pr-2
    h-auto xl:h-17.5 rounded-3xl xl:rounded-full backdrop-blur-[20px] flex flex-col xl:flex-row items-center
    gap-6 mx-auto text-sm z-50"
    >
      <EventSearch />
      <div className="border h-5 border-white/10 hidden xl:flex"></div>
      <EventLocation />
      <div className="border h-5 border-white/10 hidden xl:flex"></div>
      <EventDate />
      <div className="border h-5 border-white/10 hidden xl:flex"></div>
      <EventType />
      <button
        onClick={handleSubmit}
        className="w-full xl:w-13.5 h-13.5 rounded-[40px] xl:rounded-full bg-accent hover:bg-accent-hover
        flex items-center justify-center transition-all text-3xl active:shadow-inner 
        active:shadow-black/50 shadow-[inset_4px_4px_6px_rgba(0,0,0,0.5),inset_-4px_-4px_6px_rgba(255,255,255,0.1)]
        border border-orange-700"
      >
        <BiRightArrowAlt />
      </button>
      {(hasActiveFilters || showEventList) && (
        <button
          className="w-full xl:w-13.5 h-13.5 rounded-[40px] xl:rounded-full bg-accent hover:bg-accent-hover
          flex items-center justify-center transition-all text-3xl active:shadow-inner 
          active:shadow-black/50 shadow-[inset_4px_4px_6px_rgba(0,0,0,0.5),inset_-4px_-4px_6px_rgba(255,255,255,0.1)]
          border border-orange-700"
          onClick={handleClearSearch}
        >
          <TbCancel />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
