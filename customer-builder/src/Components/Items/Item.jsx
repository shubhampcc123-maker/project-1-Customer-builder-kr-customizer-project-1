import Button from "./Button";
import designImage from "../../assets/Item.png";
import priceImage from "../../assets/Item1.png";
import designImage2 from "../../assets/Item2.png";
const Item = () => {
  return (
    <section className="bg-[#FCF7FF] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-[#171B46]">
            How a Custom Product Builder Works
          </h2>

          <p className="mt-3 text-2xl italic text-gray-700 font-semibold">
            From Click to Checkout
          </p>

          <p className="mt-6 max-w-3xl mx-auto text-center text-lg leading-10 text-[#2D2A68] font-semibold">
            Ever wondered how someone gets from{" "}
            <span className="font-bold">"just looking"</span> to{" "}
            <span className="font-bold">"bought it ?"</span> <br /> Making the
            process natural and entertaining is key.
          </p>
        </div>

        <div className="mt-12 bg-white rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="flex ">
              <img
                src={designImage}
                alt="Design Phase"
                className="w-full max-w-xl object-contain"
              />
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-[#171B46]">
                The Design Phase
              </h3>

              <p className="mt-6 text-lg leading-9 text-gray-700 font-semibold">
                A shopper in Texas lands on your page and starts playing with
                options. Instead of one boring photo, they see a live workshop.
                They can swap colors or tweak parts with a tap. KR Customizer
                makes it feel like a game.
              </p>

              <div className="mt-8">
                <Button yellow>GET STARTED FREE</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-semibold text-[#171B46]">
                No Price Surprises
              </h3>

              <p className="mt-6 text-lg leading-9 text-gray-700 font-semibold">
                As your customer upgrades fabrics or adds premium features,
                pricing updates instantly. There are no hidden surprises at
                checkout, making shoppers more confident to complete their
                purchase.
              </p>

              <div className="mt-8 font-semibold">
                <Button yellow>GET STARTED FREE</Button>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src={priceImage}
                alt="No Price Surprises"
                className="w-full max-w-xl object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 bg-white rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src={designImage2}
                alt="Design Phase"
                className="w-full max-w-xl object-contain"
              />
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-[#171B46]">
                Hitting the Buy Button
              </h3>

              <p className="mt-6 text-lg leading-9 text-gray-700 font-semibold">
                By the time a buyer in Ohio finishes, they’re sure of their
                choice. They aren't guessing what the product looks like
                anymore. They’ve built it, seen it, and loved it. This
                confidence is exactly what turns a casual browser into a happy
                customer.
              </p>

              <div className="mt-8">
                <Button yellow>GET STARTED FREE</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
