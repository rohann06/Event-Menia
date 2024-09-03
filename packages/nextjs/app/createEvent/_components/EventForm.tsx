"use client";

import React, { useState } from "react";

const EventForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const goToNextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="bg-primary flex flex-col justify-center items-center p-2 md:py-10 md:px-16 my-8 md:my-16 lg:my-24 max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto rounded-2xl">
      <p className="text-2xl font-bold mb-10">Create Your Event 🥂</p>

      {/* Event Form */}
      <div className="w-full">
        {/* Step Indicators */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map(step => (
            <div key={step} className="flex items-center space-x-2">
              <div
                className={`w-8 h-8 rounded-full ${
                  step === currentStep ? "bg-accent" : "bg-gray-300"
                } text-white flex items-center justify-center`}
              >
                {step}
              </div>
              <span className="text-sm md:text-base">Step {step}</span>
            </div>
          ))}
        </div>

        {/* Step 1 Form */}
        {currentStep === 1 && (
          <div className="mb-8">
            <form className="space-y-5">
              {/* Event Title */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="eventTitle">
                  Event Title
                </label>
                <input
                  type="text"
                  id="eventTitle"
                  className="w-full rounded-lg p-2"
                  placeholder="Enter the event title"
                />
              </div>

              {/* Event Description */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  className="w-full rounded-lg p-2"
                  rows={4}
                  placeholder="Enter the event description"
                />
              </div>

              {/* Event Cover Image */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="coverImage">
                  Event Cover Image
                </label>
                <input type="file" id="coverImage" className="w-full rounded-lg p-2" />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  className="bg-neutral dark:text-black text-white py-2 px-4 rounded-lg w-full mt-4"
                  onClick={goToNextStep}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 2 Form */}
        {currentStep === 2 && (
          <div className="mb-8">
            <form className="space-y-4">
              {/* Event Type (IRL or Virtual) */}
              <div className="flex flex-col space-y-2">
                <label className="block text-sm font-medium mb-1">Event Type</label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="eventType" value="irl" className="form-radio" />
                    <span>IRL</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="eventType" value="virtual" className="form-radio" />
                    <span>Virtual</span>
                  </label>
                </div>
              </div>

              {/* Date and Time */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="eventDate">
                  Date
                </label>
                <input type="date" id="eventDate" className="w-full rounded-lg p-2 border border-gray-300" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="eventTime">
                  Time
                </label>
                <input type="time" id="eventTime" className="w-full rounded-lg p-2 border border-gray-300" />
              </div>

              {/* Link for Virtual Event */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="eventLink">
                  Event Link
                </label>
                <input
                  type="url"
                  id="eventLink"
                  className="w-full rounded-lg p-2 border border-gray-300"
                  placeholder="Enter the event link"
                />
              </div>

              {/* Address for IRL Event */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="eventAddress">
                  Address
                </label>
                <textarea
                  id="eventAddress"
                  className="w-full rounded-lg p-2 border border-gray-300"
                  rows={4}
                  placeholder="Enter the address"
                />
              </div>

              <div className="flex gap-x-10 justify-between">
                <button
                  type="button"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mt-4"
                  onClick={goToPreviousStep}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mt-4"
                  onClick={goToNextStep}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3 Form */}
        {currentStep === 3 && (
          <div className="mb-8">
            <form className="space-y-4">
              {/* Ticket Price */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="ticketPrice">
                  Ticket Price
                </label>
                <input
                  type="number"
                  id="ticketPrice"
                  className="w-full rounded-lg p-2 border border-gray-300"
                  placeholder="Enter the ticket price"
                />
              </div>

              {/* Number of Tickets/Seats */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="numberOfTickets">
                  Number of Tickets/Seats
                </label>
                <input
                  type="number"
                  id="numberOfTickets"
                  className="w-full rounded-lg p-2 border border-gray-300"
                  placeholder="Enter the number of tickets or seats"
                />
              </div>

              {/* Organizer's Address */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="organizerAddress">
                  Organizer Address
                </label>
                <textarea
                  id="organizerAddress"
                  className="w-full rounded-lg p-2 border border-gray-300"
                  rows={4}
                  placeholder="Enter the organizer's address"
                />
                <p className="text-xs text-red-500 mt-2">
                  Add the correct address. All collected amounts will be added directly to this address.
                </p>
              </div>

              <div className="flex gap-x-10 justify-between">
                <button
                  type="button"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mt-4"
                  onClick={goToPreviousStep}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mt-4"
                  onClick={goToNextStep}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 4 Form */}
        {currentStep === 4 && (
          <div className="mb-8">
            <form className="space-y-4">
              {/* NFT or POAP */}
              <div className="flex flex-col space-y-2">
                <label className="block text-sm font-medium mb-1">NFT or POAP</label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="nftOrPoap" value="nft" className="form-radio" />
                    <span>NFT</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="nftOrPoap" value="poap" className="form-radio" />
                    <span>POAP</span>
                  </label>
                </div>
              </div>

              {/* Additional Instructions */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="additionalInstructions">
                  Additional Instructions
                </label>
                <textarea
                  id="additionalInstructions"
                  className="w-full rounded-lg p-2 border border-gray-300"
                  rows={4}
                  placeholder="Enter any additional instructions or information"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-x-10 justify-between">
                <button
                  type="button"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mt-4"
                  onClick={goToPreviousStep}
                >
                  Previous
                </button>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full mt-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventForm;
