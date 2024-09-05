import React from "react";

interface ThirdStepProps {
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

const ThirdStep: React.FC<ThirdStepProps> = ({ goToNextStep, goToPreviousStep }) => {
  return (
    <div className="mb-8">
      <form className="space-y-4">
        {/* Ticket Price */}
        <div>
          <label className="block opacity-45 text-sm font-medium mb-1" htmlFor="ticketPrice">
            Ticket Price ($)*
          </label>
          <input
            type="number"
            id="ticketPrice"
            name="ticketPrice"
            className="w-full rounded-full py-2 px-5"
            min={0}
            placeholder="Enter meetup ticket price"
            // value={formData.ticketPrice}
            // onChange={handleChange}
          />
        </div>

        {/* Number of Tickets */}
        <div>
          <label className="block opacity-45 text-sm font-medium mb-1" htmlFor="numberOfTickets">
            Number of Tickets *
          </label>
          <input
            type="number"
            id="numberOfTickets"
            name="numberOfTickets"
            min={0}
            className="w-full rounded-full py-2 px-5"
            placeholder="Enter the number of tickets"
            // value={formData.numberOfTickets}
            // onChange={handleChange}
          />
        </div>

        {/* Organizer Address */}
        <div>
          <label className="block opacity-45 text-sm font-medium mb-1" htmlFor="organizerAddress">
            Organizer Address * <br />
            <span className=" text-[12px] font-light text-yellow-900 dark:text-yellow-600">
              ⚠️ Please ensure that the correct address is provided, as the ticket amount will be transferred directly
              to the specified address.
            </span>
          </label>
          <input
            type="text"
            id="organizerAddress"
            name="organizerAddress"
            className="w-full rounded-full py-2 px-5"
            placeholder="Enter organizer's address"
            // value={formData.organizerAddress}
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

export default ThirdStep;
