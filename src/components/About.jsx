import proPic from "../assets/exp.svg";
import CV from "../assets/Melomey-Samuel-CV.pdf"; // Replace "your_cv.pdf" with the actual filename of your CV

const About = () => {
  return (
    <>
      <hr className="mb-10" />
      <div className="lg:mx-12 mx-4" id="about">
        <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
          <div className="sm:w-1/2">
            <img src={proPic} alt="" className="w-full sm:w-11/12" />
          </div>
          <div className="sm:w-1/2">
            <p className="text-xl text-headingcolor font-semibold mb-5">
              Get to know me
            </p>
            <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
              My Experience
            </h2>
            <p className="mt-8 md:pr-8 mb-8">
              My journey has been marked by a steadfast commitment to pushing
              boundaries and embracing emerging technologies, particularly
              within the React ecosystem. Proficient in a wide array of front
              and back-end technologies, including React, Redux and React
              Router, I thrive on the dynamic interplay between creativity and
              functionality.
            </p>
            <a
              href={CV}
              download="Melomey_Samuel_CV.pdf"
              className="px-4 py-2 bg-transparent border border-indigo-500 text-indigo-700 rounded hover:bg-primary hover:text-white transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <hr className="mt-10" />
    </>
  );
};

export default About;
