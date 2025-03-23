import home from '../assets/home-icon.svg'

const Landing = () => {
  return (
    <section
      id="home"
      className="font-[Roboto] h-screen flex flex-col items-center justify-center text-white text-center relative"
      style={{
        backgroundImage: 'url("/images/klaus-cartoon.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white opacity-80"></div>

      <div className="relative z-10">
        <h2 className="text-2xl text-black mt-5">Introducing the Inaugural GT College of Computing x Corporate Affiliates Program Hackathon</h2>
        <img src={home} alt="home-visual" className="w-275 h-auto items-center" />
        <h2 className="text-3xl text-black">April 5th-6th | Tech Square Research Building | Georgia Tech</h2>
        <br />
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdmn-T8aAt8niUGLmrv7As7lZohtcov3WQFY7R-DGW5oxmRNQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#003057] text-white px-6 py-3 rounded-[32px] text-lg font-semibold hover:bg-[#397BB1]"
          >
            Register
          </a>
      </div>

      {/* Scroll Down Arrow - centered and resized */}
      <div className="absolute bottom-0 flex justify-center w-full">
        <a href="#about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-[50px] h-[50px] text-blue-950 animate-bounce"
          >
            <path
              d="M12 5v14m-7-7l7 7 7-7"
              strokeWidth="3" // Moderately increased stroke width
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
