import { SlidersHorizontal, Users, TrendingUp } from "lucide-react";

const trustCards = [
  {
    icon: <SlidersHorizontal size={32} className="text-[#3A3200]" />,
    title: "It Just Works",
    description:
      "Software shouldn't be a headache. Whether you are in Texas or Toronto, our product customizer stays fast and stable. We focus on reliability so your store never misses a sale.",
  },
  {
    icon: <Users size={32} className="text-[#3A3200]" />,
    title: "People Who Care",
    description:
      "If you hit a snag in Ohio, a real person is here to help. We don't do robot loops. Our team ensures your online product configurator runs perfectly every day.",
  },
  {
    icon: <TrendingUp size={32} className="text-[#3A3200]" />,
    title: "Getting Better Daily",
    description:
      "We never stop updating. Your business stays ahead with new features and better technology. We listen to your feedback to keep KR Customizer the best in the game.",
  },
];

const LongTerm = () => {
  return (
    <section className="bg-[#FCF7FF] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-[#171B46] md:text-4xl">
            Why Brands Trust KR Customizer Long-Term
          </h2>

          <p className="mt-6 text-lg leading-9 text-[#2D2A68]">
            Brands stick with us because we focus on their growth. KR Customizer
            isn't just a tool; it's a long-term partner.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trustCards.map((card, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD600]">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-3xl font-semibold text-[#171B46]">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-6 text-lg leading-9 text-gray-700">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LongTerm;
