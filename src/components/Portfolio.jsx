import React from "react";

const Portfolio = () => {
  return (
    <>
      <section className="mx-auto px-6 py-10 mt-10 bg-white" id='portfolio'>
        <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
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
              <div className="p-6 border-t-4 border-indigo-600">
                <span className="inline-block mb-2 text-xs font-semibold text-indigo-600 uppercase tracking-wide">
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
                      Explore Our Domain
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr />
    </>
  );
};

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Business Landing Page",
    category: "HTML|CSS",
    description:
      "Meltech A/C Services is a reputable provider of air conditioning solutions catering to both residential and commercial clients. At Meltech A/C Services, we're not just about keeping you cool; we're about keeping you comfortable. With our passion for perfect temperatures and our commitment to quality service, we're here to make every space feel like a refreshing oasis. Discover the Meltech difference today!",
    link: "https://meltech.vercel.app/",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661526833843-248a2f8fe129?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Shop For Me App",
    category: "REACT | TAILWIND CSS",
    description: "Get your errands done effortlessly",
    link: "https://shop-for-me-app.vercel.app/",
  },
  {
    image:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "JSE MOVIE APP",
    category: "REACT JS | TAILWIND CSS",
    description: "Explore the world of movies at the comfort of your home.",
    link: "https://topaz-movie.vercel.app/movie",
  },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   title: "Team Portfolio",
  //   category: "REACT JS | NODE JS | MONGODB",
  //   description:
  //     "Welcome to our domain. We bring your ideas to live with our exceptional skills.",
  //   link: "/project/6",
  // },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*wsGPomavMyR_wB2qGcnAaw.png",
    title: "Badak Portal",
    category: "REACT JS | NODE JS | MONGODB | EXPRESS",
    description:
      "Welcome to badak portal , where students verify their certificate type for visa acceptance.",
    link: "https://badak-react-app.vercel.app/",
  },
];

export default Portfolio;
