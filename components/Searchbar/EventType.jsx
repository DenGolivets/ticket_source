import React, { useContext } from "react";
import { BiLayer } from "react-icons/bi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from "@/components/ui/select";
import { EventContext } from "@/contexts/EventContext";

const EventType = () => {
  const { events, selectedType, setSelectedType } = useContext(EventContext);

  const uniqueTypes = [
    "All Types",
    ...new Set(events.map((event) => event.type)),
  ];

  return (
    <div className="flex items-center gap-2 w-full xl:w-47.5 select-none">
      <div className="text-lg text-accent">
        <BiLayer />
      </div>
      <Select
        value={selectedType ?? null}
        onValueChange={(value) => setSelectedType(value)}
      >
        <SelectTrigger className="bg-transparent border-none focus:ring-0 focus:ring-offset-0 text-left p-0
        capitalize">
          <SelectValue placeholder="Event type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Type</SelectLabel>
            {uniqueTypes.map((type, index) => {
              return (
                <SelectItem
                  key={index}
                  value={type === "All Types" ? "All" : type}
                  className="capitalize"
                >
                  {type}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default EventType;
