import banner from "../../assets/banner-stack.png";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* <Text */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-4">
              Build Your Ideal
              <br />
              <span className="gradient-brand-text">Development Stack</span>
            </h1>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-md">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <a href="#technologies" className="btn-primary">
                Explore Technologies
              </a>
              <a href="#" className="btn-outline">
                Learn More
              </a>
            </div>
          </div>
          {/* Banner image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={banner}
              alt="Development stack illustration"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md drop-shadow-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
