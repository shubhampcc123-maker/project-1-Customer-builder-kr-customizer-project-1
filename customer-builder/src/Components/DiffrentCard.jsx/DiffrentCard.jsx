import aiImage from "../../assets/Card1.png";
import designImage from "../../assets/Card2.png";
import orderImage from "../../assets/Card3.png";

const cards = [
  {
    title: "Let AI Do the Work",
    image: aiImage,
    description:
      "Whether your shop is in Texas or Toronto, our AI product customizer is like hiring a pro designer for every customer. Shoppers just type a simple idea, and the tool builds it.",
  },
  {
    title: "Built for Real People",
    image: designImage,
    description:
      "You shouldn't need a tech degree to use an online product configurator. Our plug-and-play setup is easy using a drag-and-drop editor. Designed for busy owners who want to sell, not spend hours on code.",
  },
  {
    title: "Orders That Just Work",
    image: orderImage,
    description:
      "The magic happens when the 'buy' button is clicked. KR Customizer creates a perfect, high-resolution file instantly. It's a clean, fast path from a shopper's imagination straight to your shipping box.",
  },
];

const DiffrentCard = () => {
  return (
    <section className="bg-[#FCF7FF] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-[#171B46] md:text-4xl lg:text-4xl">
            What Makes KR Customizer's Custom
            <br />
            Product Builder Different
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-9 text-[#2D2A68]">
            Most apps are just too fancy to us, but KR Customizer is different
            because it's a total engine that powers your whole business from
            start to finish.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-[320px] overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-[#171B46]">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-700">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiffrentCard;
