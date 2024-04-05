import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-indigo-100 py-28 md:px-12 px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
        <a href="/">
          <img src={logo} alt="" className="h-10" />
        </a>
        <div className="flex flex-col md:flex-row md:items-center gap-4 flex-wrap">
          <a
            href="#"
            className="block text-primary hover:text-gray-400 py-2 px-4"
          >
            Home
          </a>
          <a href="#" className="block hover:text-gray-400 py-2 px-4">
            Skills
          </a>
          <a href="#" className="block  hover:text-gray-400 py-2 px-4">
            About
          </a>
          <a href="#" className="block  hover:text-gray-400 py-2 px-4">
            Portfolio
          </a>
          <a href="#" className="block  hover:text-gray-400 py-2 px-4">
            Blog
          </a>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <a
            href="https://www.github.com/Melomey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          </a>

          <a
            href="https://www.linkedin.com/in/samuel-melomey-183639158"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
