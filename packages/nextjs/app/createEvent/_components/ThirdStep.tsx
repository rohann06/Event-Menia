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
          <label className="block text-sm font-medium mb-1" htmlFor="ticketPrice">
            Ticket Price
          </label>
          <input
            type="number"
            id="ticketPrice"
            name="ticketPrice"
            className="w-full rounded-full p-2"
            placeholder="Enter ticket price"
            // value={formData.ticketPrice}
            // onChange={handleChange}
          />
        </div>

        {/* Number of Tickets */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="numberOfTickets">
            Number of Tickets
          </label>
          <input
            type="number"
            id="numberOfTickets"
            name="numberOfTickets"
            className="w-full rounded-full p-2"
            placeholder="Enter the number of tickets"
            // value={formData.numberOfTickets}
            // onChange={handleChange}
          />
        </div>

        {/* Organizer Address */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="organizerAddress">
            Organizer Address
          </label>
          <input
            type="text"
            id="organizerAddress"
            name="organizerAddress"
            className="w-full rounded-full p-2"
            placeholder="Enter organizer address"
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
