import React from "react";

const Portfolio = () => {
  return (
    <>
      <section className="mx-auto px-6 py-10 mt-10 bg-white" id='blog'>
        <h2 className="text-3xl font-bold mb-8">Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden bg-white shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6 border-t-4 border-green-600">
                <span className="inline-block mb-2 text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 truncate ...">
                  {project.description}
                </p>
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 transition-500 duration-300 hover:text-2xl"
                  >
                    <span className="border-b-2 border-yellow-900 text-black no-underline">
                      Read More
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr className="mb-20 mt-10 " />
    </>
  );
};

const projects = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXaUuGtZq-sqH453vqb8LhdLvXygGBeAZnVQ&s",
    title: "Unveiling the Power of JavaScript",
    category: "Javascript",
    description:
      "JavaScript stands as the cornerstone of modern web development, empowering developers to create dynamic and interactive web experiences. Born out of the necessity to bring life to static web pages, JavaScript has evolved into a versatile and ubiquitous programming language that drives the web forward.",
    link: "https://medium.com/@wknycfqyb/unveiling-the-power-of-javascript-a-cornerstone-of-web-development-8283cd5de6d1",
  },
  {
    image:
      "https://camo.githubusercontent.com/3795e5487dfe7c70b09b3e40c9d7a170bbb61aaec2b8bc35a2b4d0b5af1205ca/68747470733a2f2f7777772e69696d2e66722f65636f6c652d7765622f77702d636f6e74656e742f75706c6f6164732f323031372f30312f48544d4c352e6a7067",
    title: "Why HTML And CSS Is Necessary For Frontend Development",
    category: "HTML | CSS ",
    description: "HTML and CSS are essential for frontend...",
    link: "https://medium.com/@wknycfqyb/why-html-and-css-is-necessary-for-frontend-development-d0169f498458",
  },
];

export default Portfolio;
