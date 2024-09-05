import React from "react";

interface SecondStepProps {
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

const SecondStep: React.FC<SecondStepProps> = ({ goToNextStep, goToPreviousStep }) => {
  return (
    <div className="mb-8">
      <form className="space-y-4">
        {/* meetup Type (IRL or Virtual) */}
        <div className="flex flex-col space-y-2">
          <label className="block opacity-45 text-sm font-medium mb-1">meetup Type</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="meetupType"
                value="irl"
                className="form-radio"
                // checked={formData.meetupType === "irl"}
                // onChange={handleChange}
              />
              <span>IRL</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="meetupType"
                value="virtual"
                className="form-radio"
                // checked={formData.meetupType === "virtual"}
                // onChange={handleChange}
              />
              <span>Virtual</span>
            </label>
          </div>
        </div>

        {/* Date and Time */}
        <div>
          <label className="block opacity-45 text-sm font-medium mb-1" htmlFor="meetupDate">
            Date *
          </label>
          <input
            type="date"
            id="meetupDate"
            name="meetupDate"
            className="w-full rounded-full py-2 px-5 "
            // value={formData.meetupDate}
            // onChange={handleChange}
          />
        </div>
        <div>
          <label className="block opacity-45 text-sm font-medium mb-1" htmlFor="meetupTime">
            Time *
          </label>
          <input
            type="time"
            id="meetupTime"
            name="meetupTime"
            className="w-full rounded-full py-2 px-5 "
            // value={formData.meetupTime}
            // onChange={handleChange}
          />
        </div>

        {/* Link for Virtual meetup */}
        <div>
          <label className="block opacity-45 text-sm font-medium mb-1" htmlFor="meetupLink">
            Meetup Link <span className=" underline font-medium text-[11px]">( IRL? add the google map link )</span> *
          </label>
          <input
            type="url"
            id="meetupLink"
            name="meetupLink"
            className="w-full rounded-full py-2 px-5 "
            placeholder="Enter the meetup link"
            // value={formData.meetupLink}
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
