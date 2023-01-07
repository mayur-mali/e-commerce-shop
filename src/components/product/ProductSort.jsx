import React from "react";

export default function ProductSort() {
  return (
    <div className="h-20   mt-2 flex justify-end items-center">
      <div className="p-2  flex items-center px-4 bg-gray-300 rounded-full">
        sort by
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
}
