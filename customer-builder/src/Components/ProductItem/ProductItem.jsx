import productsImage from "../../assets/Blog3.png"; // Replace with your image

const ProductItem = () => {
  return (
    <section className="bg-[#FCF7FF] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Image */}
          <div className="relative flex justify-center">
            {/* Yellow Background */}
            <div className="absolute left-0 top-0 h-[90%] w-[90%] bg-[#FFD600] rounded-sm"></div>

            {/* Image */}
            <img
              src={productsImage}
              alt="Custom Products"
              className="relative z-10 w-full max-w-[660px] object-cover shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl font-semibold leading-tight text-[#171B46] md:text-4xl lg:text-4xl">
              Products That Work Best with a
              <br />
              Custom Product Builder
            </h2>

            <p className="mt-8 text-base font-semibold leading-10 text-[#3B3B3B]">
              A product customizer works for almost anything, but it really
              shines with visual items. Imagine a shopper in Texas designing a
              custom hoodie or a leather jacket. They can swap colors or add
              patches instantly. In Toronto, someone might use a 3D product
              builder to pick the perfect wood finish for a new dining table.
            </p>

            <p className="mt-8 text-lg leading-10 text-[#3B3B3B]">
              Even small items like jewelry in Ohio benefit. A customer can
              engrave a necklace and see the font before buying. Whether it's
              personalized mugs or custom print-on-demand gear, KR Customizer
              makes it real. It turns a basic gift into something one-of-a-kind.
              If the look matters, a custom product builder is your best friend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
