"use client";

import React, { useState } from "react";

export default function Poll() {
  const [isPollVisible, setIsPollVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleScrollToSection = () => {
    const sectionId = "signup"; // Replace with the actual id of the section you want to scroll to
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const togglePoll = () => {
    setIsPollVisible(!isPollVisible);
    if (isPollVisible) handleScrollToSection();
  };

  return (
    <>
      <div
        className="fixed bottom-10 left-10 flex flex-col items-center z-50
        hover:cursor-pointer hover:opacity-50 transition-opacity"
        onClick={togglePoll}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-2"
        >
          <path
            d="M3 3V21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12H7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 6H11"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 18H15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="text-white text-sm font-bold tracking-widest">
          VOTE NOW
        </div>
      </div>

      {isPollVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-[#1a2b3c] text-white p-8 rounded-lg shadow-lg w-11/12 transform transition-transform duration-300 ease-in-out
            lg:w-4/12"
            style={{
              animation: "slideIn 0.3s ease-out",
            }}
          >
            <h2 className="text-2xl font-bold mb-4">
              What is your favorite game genre?
            </h2>
            <form className="space-y-4">
              {["Action", "RPG", "Strategy", "Simulation"].map((option) => (
                <label key={option} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="poll"
                    value={option}
                    checked={selectedOption === option}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="form-radio text-[#4a90e2]"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </form>
            <button
              onClick={togglePoll}
              className="mt-6 bg-[#4a90e2] text-white px-4 py-2 rounded hover:bg-[#3a7bc8] transition-colors"
            >
              Vote
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
