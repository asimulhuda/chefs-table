const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(../../../public/hero-bg.png)` }}
      className="lg:py-[130px] py-14 text-center flex flex-col lg:px-0 px-4 items-center rounded-3xl text-white bg-cover bg-center bg-no-repeat"
    >
      <h1 className="lg:text-[52px] lg:leading-[70px] text-xl font-bold mb-6">
        Discover an exceptional cooking <br /> class tailored for you!
      </h1>
      <p className="mb-11">
        Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
        Database and solve 500+ coding <br /> problems to become an
        exceptionally well world-class Programmer.
      </p>
      <div className="flex lg:gap-7 gap-4 *:py-5 *:px-7 *:rounded-full lg:*:text-xl *:font-semibold">
        <button className="text-black bg-[#0BE58A]">Explore Now</button>
        <button className="border-[1px] border-[#fff] hover:bg-[#0BE58A] hover:text-black">
          Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Hero;
