import Button from "./Button";
import bagImage from "../../assets/BagImage.png";

const WhyCustomizer = () => {
  return (
    <section className="bg-[#FCF7FF] py-14 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 sm:px-8 lg:flex-row lg:gap-20 lg:px-10">
        <div className="flex w-full justify-center lg:w-1/2">
          <img
            src={bagImage}
            alt="Bag Customizer"
            className="w-full max-w-[320px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] object-contain"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-semibold leading-tight text-[#171B46] sm:text-4xl lg:text-4xl">
            Why Custom Product Building
            <br className="hidden lg:block" />
            Matters Today
          </h2>

          <p className="mt-6 text-base leading-8 text-[#343434] sm:text-lg font-semibold">
            Shopping isn't what it used to be. Picking from a basic list bores
            most people. You want something customized, whether you're in Texas
            or Toronto. You wish to alter colors and textures live on screen.
          </p>

          <p className="mt-4 text-base leading-8 text-[#343434] sm:text-lg font-semibold">
            Giving people that control is a total game-changer. If a shopper
            can't make a product fit their own style, they'll just head to a
            different site. This is exactly why custom builders are such a big
            deal now. With KR Customizer, you're turning a dull product page
            into a fun, hands-on experience. It makes people feel sure about
            what they're buying because there's no guessing involved. It's
            simple, it looks great, and it's how you actually stand out today.
          </p>

          <div className="mt-10 flex justify-center lg:justify-start">
            <Button yellow>GET STARTED FREE</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCustomizer;
