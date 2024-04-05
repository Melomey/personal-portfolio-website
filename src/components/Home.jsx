import banner from "../assets/banner.png";

const Home = () => {
  return (
    <div className="mt-20 bg-indigo-100" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img src={banner} alt="" className="w-80 rounded-lg" />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-black font-semibold mb-5">
            Hi, I am Sam
          </p>
          <h1 className="md:text-6xl text-4xl font-bold text-black leading-snug md:leading-[76px]  mb-5">
            I am a <span className="text-primary">FRONTEND </span> developer.
          </h1>
          <p className="text-2xl text-body leading-9 mb-8">
            Dedicated to bringing creativity and innovation to every project.
            With a focus on clean, efficient code and a commitment to staying
            abreast of the latest industry trends, I strive to deliver
            captivating interfaces that seamlessly blend form and function.
          </p>
          <button className="btn-primary">Get In Touch</button>
        </div>
        {/* rigth side */}
      </div>
    </div>
  );
};

export default Home;
