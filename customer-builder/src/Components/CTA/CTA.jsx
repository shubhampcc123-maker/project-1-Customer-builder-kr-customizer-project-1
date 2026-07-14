const CTA = () => {
  return (
    <section className="bg-white py-16 px-5">
      <div className="mx-auto max-w-5xl rounded-3xl border border-[#9B5CF6] bg-gradient-to-r from-[#F8F4FF] to-[#EEE6FF] px-6 py-12 text-center shadow-sm md:px-12 md:py-16">
        <h2 className="text-3xl font-semibold text-[#171B46] md:text-5xl">
          Start Offering Customized Apparel Today
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
          Turn standard fashion products into high-value personalized
          experiences without operational complexity.
        </p>

        <button className="mt-10 rounded-xl bg-[#3D5AFE] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#2F4DE0]">
          Request a Demo
        </button>
      </div>
    </section>
  );
};

export default CTA;
