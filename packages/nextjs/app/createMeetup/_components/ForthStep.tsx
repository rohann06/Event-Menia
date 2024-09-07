import React from "react";

interface ForthStepProps {
  goToNextStep: () => void;
  goToPreviousStep: () => void;
}

const ForthStep: React.FC<ForthStepProps> = ({ goToPreviousStep }) => {
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

        <div className="flex flex-col space-y-2">
          <label className="block opacity-45 text-sm font-medium mb-1">NFT or POAP (optional)</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="nftOrPoap"
                value="nft"
                className="form-radio"
                // checked={formData.nftOrPoap === "nft"}
                // onChange={handleChange}
              />
              <span>NFT</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="nftOrPoap"
                value="poap"
                className="form-radio"
                // checked={formData.nftOrPoap === "poap"}
                // onChange={handleChange}
              />
              <span>POAP</span>
            </label>
          </div>
        </div>

        {/* Upload NFT/POAP Image */}
        <div>
          <label className="block opacity-45 text-sm font-medium mb-1" htmlFor="nftImage">
            Upload NFT/POAP Image
          </label>
          <input
            type="file"
            id="nftImage"
            name="nftImage"
            className="w-full rounded-lg py-2 px-5"
            accept="image/*"
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
          <button type="submit" className="bg-white text-black py-2 px-4 rounded-full w-full mt-4">
            Create 🥂
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForthStep;
