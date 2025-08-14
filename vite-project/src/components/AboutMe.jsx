export default function AboutMe() {
  return (
    <section className="bg-gradient-to-r from-[#0b1121] to-[#0b1121] text-[#CCD0CF] py-14 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Profile Image */}
        <div className="relative w-60 h-60 flex-shrink-0">
          <img
            src="/me.jpg" // <-- Replace with your image
            alt="Profile"
            className="w-full h-full object-cover rounded-lg border-4 border-transparent"
          />
          <div
            className="absolute inset-0 border-4 border-transparent rounded-lg"
            style={{
              borderImage: 'linear-gradient(90deg, #00C6FF, #0072FF) 1',
            }}
          ></div>
        </div>

        {/* Text Content */}
        <div className="flex-1 max-w-md text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-[#A5C6CA] text-base mb-6">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="px-6 py-2 text-base rounded-md bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition font-semibold">
              Hire Me
            </button>
            <button className="px-6 py-2 text-base rounded-md border border-[#9BA8AB] hover:bg-[#253745] transition font-semibold">
              Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
