import React from "react";

// import { AddressInput } from "~~/components/scaffold-eth";

const FirstStep = ({ goToNextStep }: { goToNextStep: () => void }) => {
  return (
    <div className="mb-8">
      <form className="space-y-5">
        {/* meetup organiser */}
        <div>
          <label className="block opacity-45 text-sm font-medium mb-1" htmlFor="meetupTitle">
            Organiser Name *
          </label>
          <input
            type="text"
            id="meetupTitle"
            name="meetupTitle"
            className="w-full rounded-full py-2 px-5"
            placeholder="Enter the meetup organiser's name"
            // value={formData.meetupTitle}
            // onChange={handleChange}
          />
        </div>

        {/* meetup Title */}
        <div>
          <label className="block opacity-45 text-sm font-medium mb-1" htmlFor="meetupTitle">
            Organiser Twitter Handle *
          </label>
          <input
            type="text"
            id="meetupTitle"
            name="meetupTitle"
            className="w-full rounded-full py-2 px-5"
            placeholder="Enter the meetup title"
            // value={formData.meetupTitle}
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
          {/* <AddressInput
            placeholder="Enter organizer's address"
            value={"rohann06.eth"}
            onChange={value => setInputAddress(value as AddressType)}
          /> */}
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className="bg-neutral dark:text-black text-white py-2 px-4 rounded-full w-full mt-4"
            onClick={goToNextStep}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default FirstStep;
