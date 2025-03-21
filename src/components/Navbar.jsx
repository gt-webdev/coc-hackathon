import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-[Roboto] backdrop-blur-md bg-[#FFD76C] text-[#003057] py-4 px-8 fixed w-full z-20 shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <a href="#home">
            <img src={logo} alt="logo" className="w-24 h-auto cursor-pointer" />
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="flex justify-end items-center">
          <ul className="hidden md:flex gap-6 mr-4">
            {["About", "Sponsors", "Tracks", "Schedule"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-lg hover:text-[#397BB1] transition relative before:absolute before:w-0 before:h-[2px] before:bg-[#397BB1] before:bottom-0 before:left-0 before:transition-all before:duration-300 hover:before:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdmn-T8aAt8niUGLmrv7As7lZohtcov3WQFY7R-DGW5oxmRNQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-[#003057] hover:bg-[#1E5684] text-white font-semibold py-2 px-4 rounded-[32px] transition"
          >
            Register
          </a>
        </div>


        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav (Animated Dropdown) */}
      <div
        className={`absolute top-full left-0 w-full bg-blue-950/90 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-96 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6 text-white">
          {["About", "Sponsors", "Tracks", "Schedule"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg hover:text-blue-400 transition relative before:absolute before:w-0 before:h-[2px] before:bg-blue-400 before:bottom-0 before:left-0 before:transition-all before:duration-300 hover:before:w-full"
                onClick={() => setIsOpen(false)} // Closes menu when clicked
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdmn-T8aAt8niUGLmrv7As7lZohtcov3WQFY7R-DGW5oxmRNQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="items-center text-lg text-white block w-fit mx-auto"
        >
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
