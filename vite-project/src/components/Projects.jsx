// src/components/PortfolioSection.jsx
import React from "react";

const projects = [
  {
    id: 1,
    title: "Dating Mobile App Design",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "E-Commerce Mobile App Design",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Fitness Mobile App Design",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Modelling Mobile App Design",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const PortfolioSection = () => {
  return (
    <section className="bg-[#0B1120] text-white py-14 px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">PORTFOLIO</h2>

      <div className="max-w-6xl mx-auto space-y-16">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="flex-1 max-w-md">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-lg border-2 border-blue-400"
              />
            </div>

            {/* Text */}
            <div className="flex-1 max-w-md">
              <p className="text-blue-400 uppercase font-semibold text-base mb-2">
                Project {project.id}
              </p>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 text-base mb-4">
                {project.description}
              </p>
              <a
                href="#"
                className="text-sm text-gray-200 underline hover:text-blue-400"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-12 text-center">
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 text-base rounded-full shadow-md hover:opacity-90 transition">
          View all
        </button>
      </div>
    </section>
  );
};

export default PortfolioSection;
