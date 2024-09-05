import React from "react";

interface SecondStepProps {
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

const SecondStep: React.FC<SecondStepProps> = ({ goToNextStep, goToPreviousStep }) => {
  return (
    <div className="mb-8">
      <form className="space-y-4">
        {/* Event Type (IRL or Virtual) */}
        <div className="flex flex-col space-y-2">
          <label className="block text-sm font-medium mb-1">Event Type</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="eventType"
                value="irl"
                className="form-radio"
                // checked={formData.eventType === "irl"}
                // onChange={handleChange}
              />
              <span>IRL</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="eventType"
                value="virtual"
                className="form-radio"
                // checked={formData.eventType === "virtual"}
                // onChange={handleChange}
              />
              <span>Virtual</span>
            </label>
          </div>
        </div>

        {/* Date and Time */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="eventDate">
            Date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            className="w-full rounded-full p-2 "
            // value={formData.eventDate}
            // onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="eventTime">
            Time
          </label>
          <input
            type="time"
            id="eventTime"
            name="eventTime"
            className="w-full rounded-full p-2 "
            // value={formData.eventTime}
            // onChange={handleChange}
          />
        </div>

        {/* Link for Virtual Event */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="eventLink">
            Event Link
          </label>
          <input
            type="url"
            id="eventLink"
            name="eventLink"
            className="w-full rounded-full p-2 "
            placeholder="Enter the event link"
            // value={formData.eventLink}
            // onChange={handleChange}
          />
        </div>

        {/* Address for IRL Event */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="eventAddress">
            Address
          </label>
          <textarea
            id="eventAddress"
            name="eventAddress"
            className="w-full rounded-lg p-2"
            rows={4}
            placeholder="Enter the address"
            // value={formData.eventAddress}
            // onChange={handleChange}
          />
        </div>

        <div className="flex gap-x-10 justify-between">
          <button
            type="button"
            className="dark:bg-accent bg-black text-white py-2 px-4 rounded-full w-full mt-4"
            onClick={goToPreviousStep}
          >
            Previous
          </button>
          <button
            type="button"
            className="bg-white text-black py-2 px-4 rounded-full w-full mt-4"
            onClick={goToNextStep}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecondStep;
