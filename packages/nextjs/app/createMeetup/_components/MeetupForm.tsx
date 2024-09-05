"use client";

import React, { useState } from "react";
import FirstStep from "./FirstStep";
import ForthStep from "./ForthStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";

const MeetupForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // const [formData, setFormData] = useState({
  //   eventTitle: "",
  //   description: "",
  //   coverImage: null as File | null,
  //   eventType: "",
  //   eventDate: "",
  //   eventTime: "",
  //   eventLink: "",
  //   eventAddress: "",
  //   ticketPrice: "",
  //   numberOfTickets: "",
  //   organizerAddress: "",
  //   nftOrPoap: "",
  //   additionalInstructions: "",
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files ? e.target.files[0] : null;
  //   setFormData(prev => ({
  //     ...prev,
  //     coverImage: file,
  //   }));
  // };

  const goToNextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="bg-primary flex flex-col justify-center items-center p-2 md:py-9 md:px-16 my-8 md:my-10 lg:my-12 max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto rounded-2xl">
      <p className="text-2xl font-bold mb-10">Create Your Meetup 🥂</p>

      {/* Event Form */}
      <div className="w-full">
        {/* Step Indicators */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map(step => (
            <div key={step} className="flex items-center space-x-2">
              <div
                className={`w-8 h-8 rounded-full ${
                  step === currentStep ? "dark:bg-accent bg-black" : "bg-gray-300"
                } text-white flex items-center justify-center`}
              >
                {step}
              </div>
              <span className="text-sm md:text-base">Step {step}</span>
            </div>
          ))}
        </div>

        {/* Step 1 Form */}
        {currentStep === 1 && <FirstStep goToNextStep={goToNextStep} />}

        {/* Step 2 Form */}
        {currentStep === 2 && <SecondStep goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />}

        {/* Step 3 Form */}
        {currentStep === 3 && <ThirdStep goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />}

        {/* Step 4 Form */}
        {currentStep === 4 && <ForthStep goToPreviousStep={goToPreviousStep} />}
      </div>
    </div>
  );
};

export default MeetupForm;
