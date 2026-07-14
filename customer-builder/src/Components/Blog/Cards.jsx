import React from "react";

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="mx-auto flex w-full max-w-[868px] flex-col overflow-hidden rounded-2xl bg-white shadow-sm md:h-[400px] md:flex-row">
      {/* Left Content */}
      <div className="flex w-full flex-col justify-center p-6 md:w-[438px] md:px-8">
        <h3 className="text-2xl font-semibold leading-tight text-[#171B46] md:w-[374px] md:text-[32px]">
          {title}
        </h3>

        <p className="mt-6 text-base leading-8 text-gray-700 md:w-[374px] md:text-lg">
          {description}
        </p>
      </div>

      {/* Right Image */}
      <div className="h-[300px] w-full md:h-[400px] md:w-[430px]">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default FeatureCard;
