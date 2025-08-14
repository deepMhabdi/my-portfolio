import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="relative w-full bg-cover bg-center text-[#CCD0CF]"
      style={{
        backgroundImage: "url('/header-bg.jpg')", // Replace with your image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#06141B]/90"></div>
      {/* Navbar */}
      <nav className="relative z-10 max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" /> {/* Replace with your logo path */}
        </div>

        {/* Menu - Desktop */}
        <ul className="hidden md:flex gap-10 text-sm uppercase tracking-wider">
          {["Home", "About Me", "Portfolio", "Services", "Experience"].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer transition-colors duration-300 hover:text-blue-400"
            >
              <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className="py-2">
                {item}
              </a>
              {/* Active underline */}
              {item === "Home" && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full shadow hover:opacity-90 transition"
        >
          Contact
        </a>

        {/* Hamburger - Mobile */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="fas fa-bars text-xl text-white"></i>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#11212D] text-[#CCD0CF] flex flex-col items-center py-6 space-y-4 z-20 md:hidden">
            {["Home", "About Me", "Portfolio", "Services", "Experience"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                className="hover:text-blue-400 transition"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-full shadow hover:opacity-90 transition"
            >
              Contact
            </a>
          </div>
        )}
      </nav>


      {/* Hero Section */}
      <div className="relative z-10 min-h-[80vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col items-start justify-center">
          <p className="text-2xl text-gray-300 mb-2">I'm a</p>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-white">
            FULL STACK <br />
            SOFTWARE <br />
            DEVELOPER<span className="text-blue-400">.</span>
          </h1>

          <a
            href="#projects"
            className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
          >
            Previous Projects
          </a>
        </div>
      </div>


    </header>
  );
}
