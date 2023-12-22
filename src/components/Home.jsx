import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-emerald-500">Hi, My Name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Fauzi Bahmudah
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Web Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Passionate web developer with a flair for creativity and a high level
          of dedication, crafting exceptional digital experiences through
          innovative development skills.
        </p>
        <div>
          <a href="https://github.com/bahmudah" target="blank">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-emerald-500 hover:border-emerald-500 hover:duration-300">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
