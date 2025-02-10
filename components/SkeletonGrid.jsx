"use client";

import React from "react";
import { Skeleton } from "./ui/skeleton";

const SkeletonGrid = ({ itemCount }) => {
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-4 gap-7.5 mb-32">
      {Array.from({ length: itemCount }).map((_, index) => {
        return (
          <div key={index} className="flex flex-col space-y-3">
            <Skeleton className="h-64 rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4" />
              <Skeleton className="h-4 w-50" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkeletonGrid;
