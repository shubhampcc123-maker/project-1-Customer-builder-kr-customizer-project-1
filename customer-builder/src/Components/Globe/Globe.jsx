import globalImage from "../../assets/Globe.png"; // Replace with your image

const Globe = () => {
  return (
    <section className="bg-[#FCF7FF] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-lg border border-[#E6E6E6] bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Image */}
            <div className="h-full">
              <img
                src={globalImage}
                alt="Importance of Product Customization"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <h2 className="text-2xl font-semibold leading-tight text-[#171B46] lg:text-3xl">
                Location-Friendly Custom Product Builder for Global Brands
              </h2>

              <p className="mt-4 text-base leading-9 text-[#3A3A3A]">
                You don't need to live in a big city to sell like a pro. Even if
                you're in a quiet spot in Ontario or a studio in Toronto, the
                whole world is your market. Your location doesn't hold you back
                anymore.
              </p>

              <p className="mt-2 text-base leading-9 text-[#3A3A3A]">
                A customer down in Texas can design their own gear just as fast
                as someone in Ohio or Missouri. Since KR Customizer is a
                web-based product customizer, it just works. It's like having a
                storefront that never closes. You reach people across the globe
                without leaving your house. It makes your brand feel local to
                everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Globe;
