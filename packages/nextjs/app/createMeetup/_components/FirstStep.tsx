import React from "react";

const FirstStep = ({ goToNextStep }: { goToNextStep: () => void }) => {
  return (
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
            name="eventTitle"
            className="w-full rounded-full p-2"
            placeholder="Enter the event title"
            // value={formData.eventTitle}
            // onChange={handleChange}
          />
        </div>

        {/* Event Description */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full rounded-lg p-2"
            rows={4}
            placeholder="Enter the event description"
            // value={formData.description}
            // onChange={handleChange}
          />
        </div>

        {/* Event Cover Image */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="coverImage">
            Event Cover Image
          </label>
          <input
            type="file"
            id="coverImage"
            className="w-full rounded-full p-2"
            //    onChange={handleFileChange}
          />
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
