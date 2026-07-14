import Button from "./Button";
import Product from "../../assets/Product.png";

const ProductDetail = () => {
  return (
    <section className="bg-[#FCF7FF] py-14 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-center">
          <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-10 lg:p-12">
            <h2 className="text-3xl font-semibold leading-tight text-[#171B46] sm:text-4xl lg:text-4xl">
              What is a Custom Product Builder?
            </h2>

            <p className="mt-8 text-base leading-8 text-[#343434] sm:text-lg font-semibold">
              Shopping online can feel a bit soulless. It’s usually just
              clicking a button and hoping for the best. But imagine a customer
              in Texas or Toronto actually building their own gear. A product
              builder makes that happen.
            </p>

            <p className="mt-6 text-base leading-8 text-[#343434] sm:text-lg font-semibold">
              It’s like a digital workshop. Your shoppers in Ohio can swap
              colors or change fabrics with a tap. The image updates instantly,
              so they know exactly what they’re getting. KR Customizer handles
              the tech, so you can just focus on selling. It turns a boring
              transaction into something personal.
            </p>

            <div className="mt-10">
              <Button yellow className="w-full">
                GET STARTED FREE
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={Product}
              alt="Custom Product Builder"
              className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
