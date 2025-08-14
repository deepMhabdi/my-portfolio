import {
  FaPencilRuler,
  FaPaintBrush,
  FaCode,
  FaBullhorn,
  FaCamera,
  FaMobileAlt,
} from "react-icons/fa";

const techData = [
  {
    id: 1,
    icon: <FaPencilRuler size={30} />,
    title: "UI/UX Design",
    desc: "I am available to design from scratch with creative and user-friendly interfaces.",
  },
  {
    id: 2,
    icon: <FaPaintBrush size={30} />,
    title: "Creative Design",
    desc: "Delivering unique designs with a balance of creativity and usability.",
  },
  {
    id: 3,
    icon: <FaCode size={30} />,
    title: "Web Design",
    desc: "Building modern, responsive websites optimized for performance.",
  },
  {
    id: 4,
    icon: <FaBullhorn size={30} />,
    title: "Branding",
    desc: "Helping your business stand out with strong visual identity.",
  },
  {
    id: 5,
    icon: <FaCamera size={30} />,
    title: "Photography",
    desc: "Capturing visuals to enhance your digital and brand presence.",
  },
  {
    id: 6,
    icon: <FaMobileAlt size={30} />,
    title: "Mobile App",
    desc: "Designing and developing functional mobile applications.",
  },
];

export default function Technologies() {
  return (
    <section className="bg-gradient-to-r from-[#06141B] to-[#11212D] text-[#CCD0CF] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What I Do</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techData.map((tech) => (
            <div
              key={tech.id}
              className="bg-[#253745]/80 p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:scale-105 transition"
            >
              <div className="text-[#9BA8AB] mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p className="text-[#A5C6CA] text-sm">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
