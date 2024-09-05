import React from "react";

const FirstStep = ({ goToNextStep }: { goToNextStep: () => void }) => {
  return (
    <div className="mb-8">
      <form className="space-y-5">
        {/* meetup organiser */}
        <div>
          <label className="block opacity-45 text-sm font-medium mb-1" htmlFor="meetupTitle">
            Organiser *
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
            Meetup Title *
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

        {/* meetup Description */}
        <div>
          <label className="block opacity-45 text-sm font-medium mb-1" htmlFor="description">
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full rounded-lg py-2 px-5"
            rows={4}
            placeholder="Enter the meetup description"
            // value={formData.description}
            // onChange={handleChange}
          />
        </div>

        {/* meetup Cover Image */}
        <div>
          <label className="block opacity-45 text-sm font-medium mb-1" htmlFor="coverImage">
            Meetup Cover Image *
          </label>
          <input
            type="file"
            id="coverImage"
            className="w-full rounded-full py-2 px-5"
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
