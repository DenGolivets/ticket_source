"use client";

import React, { createContext, useState, useEffect, useMemo } from "react";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showEventList, setShowEventList] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const [appliedFilters, setAppliedFilters] = useState({
    searchTerm: "",
    selectedLocation: "",
    selectedDate: null,
    selectedType: "",
  });

  const filteredEvents = useMemo(() => {
    const today = new Date();
    return events.filter((event) => {
      const matchesSearch = appliedFilters.searchTerm
        ? event.title
            .toLowerCase()
            .includes(appliedFilters.searchTerm.toLowerCase())
        : true;

      const matchesLocation =
        appliedFilters.selectedLocation === "All" ||
        !appliedFilters.selectedLocation
          ? true
          : event.location.toLowerCase() ===
            appliedFilters.selectedLocation.toLowerCase();

      const eventDate = new Date(event.date);
      if (eventDate < today) return false;

      const matchesDate = appliedFilters.selectedDate
        ? eventDate.toDateString() === new Date(appliedFilters.selectedDate).toDateString()
        : true;

        const matchesType =
        appliedFilters.selectedType === "All" ||
        !appliedFilters.selectedType
          ? true
          : event.type.toLowerCase() ===
            appliedFilters.selectedType.toLowerCase();

      return matchesSearch && matchesLocation && matchesDate && matchesType;
    });
  }, [events, appliedFilters]);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/events");
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        setEvents(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleSubmit = () => {
    setIsLoading(true);
    setShowEventList(true);
    setAppliedFilters({ searchTerm, selectedLocation, selectedDate, selectedType });
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setShowEventList(false);
    setSelectedLocation("");
    setSelectedDate(null);
    setSelectedType("");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: "short", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <EventContext.Provider
      value={{
        events,
        isLoading,
        error,
        searchTerm,
        setSearchTerm,
        filteredEvents,
        handleSubmit,
        handleClearSearch,
        showEventList,
        selectedLocation,
        setSelectedLocation,
        selectedDate,
        setSelectedDate,
        selectedType,
        setSelectedType,
        formatDate,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
