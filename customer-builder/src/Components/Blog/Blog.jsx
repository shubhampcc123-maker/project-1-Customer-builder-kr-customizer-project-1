import shopperImage from "../../assets/BlogImage.png";

const Blog = () => {
  return (
    <section className="bg-[#FCF7FF] py-20">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="text-center text-4xl font-semibold text-[#171B46]">
          Why Shoppers Love Using a KR <br />
          Customizer Custom Product Builder
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-[#4F4F4F]">
          Shoppers are tired of the same old stuff. Using a product customizer
          makes them feel special.
        </p>

        <div className="mt-16 overflow-hidden">
          <div className="flex w-max gap-6 animate-scroll hover:[animation-play-state:paused]">
            {/* Card 1 */}
            <div className="flex h-[280px] w-[520px] overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex w-1/2 flex-col justify-center p-5">
                <h3 className="text-2xl font-semibold text-[#171B46]">
                  It's All About Them
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Whether someone is in Texas or Toronto, they want to stand out. An online product configurator let them put a personal spin on your gear. It stops being a random item and becomes "theirs." That emotional connection is a massive sales driver.
                </p>
              </div>

              <div className="w-1/2">
                <img
                  src={shopperImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex h-[280px] w-[520px] overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="flex w-1/2 flex-col justify-center p-5">
                <h3 className="text-2xl font-semibold text-[#171B46]">
                  Seeing is Believing
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  We’ve all bought something online that looked totally different once it arrived. For a shopper in Ohio, a 3D product builder kills that fear. They see the exact shade and texture change as they click. This clarity makes them much more likely to buy.
                </p>
              </div>

              <div className="w-1/2">
                <img
                  src={shopperImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

          
            <div className="flex h-[280px] w-[520px] overflow-hidden rounded-2xl bg-white shadow-sm">
              {/* Card 1 Copy */}
            </div>

            <div className="flex h-[280px] w-[520px] overflow-hidden rounded-2xl bg-white shadow-sm">
              {/* Card 2 Copy */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
