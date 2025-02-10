import React, { useContext } from "react";
import { Input } from "../ui/input";
import { EventContext } from "@/contexts/EventContext";
import { BiSearch } from "react-icons/bi";
import { MdOutlineCancel } from "react-icons/md";

const EventSearch = () => {
  const { searchTerm, setSearchTerm, handleSubmit, handleClearSearch } =
    useContext(EventContext);

  return (
    <div className="flex items-center gap-2.5 w-full xl:w-47.5">
      <div className="text-lg text-accent">
        <BiSearch />
      </div>
      <Input
        value={searchTerm}
        type="text"
        placeholder="Search events..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-0 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      {searchTerm && (
        <div
          className="text-lg text-accent cursor-pointer"
          onClick={handleClearSearch}
        >
          <MdOutlineCancel />
        </div>
      )}
    </div>
  );
};

export default EventSearch;
