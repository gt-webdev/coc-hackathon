const Landing = () => {
  return (
    <section
      id="home"
      className="font-[Nunito] h-screen flex flex-col items-center justify-center text-white text-center relative"
      style={{
        backgroundImage: 'url("/images/klaus-cartoon.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white opacity-80"></div>

      <div className="relative z-10">
        <h1 className="text-9xl text-blue-950 font-bold">Ramblin' Hacks!</h1>
        <br />
        <h2 className="text-6xl text-blue-950 font-bold">Inaugural Hackathon</h2>
        <br />
        <h2 className="text-3xl text-blue-950 font-bold">April 5th - 6th</h2>
        <br />
        <br />
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="#about"
            className="bg-blue-950 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500"
          >
            Learn More
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdmn-T8aAt8niUGLmrv7As7lZohtcov3WQFY7R-DGW5oxmRNQ/viewform"
            className="bg-blue-950 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-500"
          >
            Register
          </a>
        </div>
      </div>

      {/* Scroll Down Arrow - centered and resized */}
      <div className="absolute bottom-10 flex justify-center w-full">
        <a href="#about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-[80px] h-[80px] text-blue-950 animate-bounce"
          >
            <path
              d="M12 5v14m-7-7l7 7 7-7"
              strokeWidth="4" // Moderately increased stroke width
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Landing;
