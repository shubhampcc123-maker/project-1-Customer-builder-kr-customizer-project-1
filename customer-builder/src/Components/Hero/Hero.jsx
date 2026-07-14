import Button from "./Button";
import ShoesImage from "./ShoesImage";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-semibold leading-tight text-gray-900">
            Custom Product Builder That Lets Customers Create, Not Just Click –
            KR Customizer
          </h1>

          <p className="mt-5 text-base sm:text-lg font-semibold leading-8 text-gray-600">
            Ever wonder why people leave without buying? Usually, they're just
            unsure. They aren't sure if the color is right or if the parts fit.
            A Texas custom product builder fixes that instantly. When someone
            sees their creation change on the screen, that doubt goes away. It's
            not just a fancy tool; it's a confidence builder for Toronto or
            Ontario users. Using something like KR Customizer lets them play
            with options and feel good about their choice. That's how you turn a
            window shopper into a paying customer.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button yellow>Get Started Free</Button>
            <Button>Book Free Demo</Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <ShoesImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
