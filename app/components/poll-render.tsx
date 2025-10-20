"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Poll() {
  const [isPollVisible, setIsPollVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleScrollToSection = () => {
    const sectionId = "signup"; // Replace with the actual id of the section you want to scroll to
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const togglePollAndScroll = () => {
    setIsPollVisible(!isPollVisible);
    if (isPollVisible) handleScrollToSection();
  };

  const togglePoll = () => {
    setIsAnimatingOut(!isAnimatingOut);
    if (isAnimatingOut == false) {
      setIsPollVisible(!isPollVisible);
    } else {
      setTimeout(() => {
        setIsPollVisible(!isPollVisible);
      }, 300)
    }
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              togglePoll();
            }
          }}>
          <div
            className="bg-[#1a2b3c] text-white p-8 rounded-lg shadow-lg w-11/12 transform transition-transform duration-300 ease-in-out
            lg:w-4/12"
            style={{
              animation: isAnimatingOut ? "slideIn 0.3s ease-out" : "slideOut 0.3s ease-out",
            }}
          >
            <h2 className="text-2xl font-bold mb-4">
              What is your favorite game genre?
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {["Action", "RPG", "Strategy", "Simulation"].map((option) => (
                <div
                  key={option}
                  className={`relative cursor-pointer rounded-lg overflow-hidden ${selectedOption === option ? 'ring-2 ring-[#4a90e2]' : ''
                    }`}
                  onClick={() => setSelectedOption(option)}
                >
                  <Image
                    src="/images/200x200.jpg"
                    alt={option}
                    className="w-full h-32 object-cover"
                    height={200}
                    width={200}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-bold text-lg">
                    {option}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={togglePollAndScroll}
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
            transform: translateX(-300%);
          }
          to {
            transform: translateX(0);
          }
        }
          @keyframes slideOut {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-300%);
          }
        }
      `}</style>
    </>
  );
}
