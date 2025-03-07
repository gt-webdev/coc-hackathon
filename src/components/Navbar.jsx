import { useState } from "react";
import { Menu, X } from "lucide-react"; // Mobile menu icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-[Nunito] backdrop-blur-md bg-blue-950/90 text-white py-4 px-8 fixed w-full z-20 shadow-lg">
      <div className="flex justify-between items-center">
        <div>{/* Optional branding or logo here */}</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          {["Home", "About", "Tracks", "Schedule", "Sponsors"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg hover:text-blue-400 transition relative before:absolute before:w-0 before:h-[2px] before:bg-blue-400 before:bottom-0 before:left-0 before:transition-all before:duration-300 hover:before:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

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
        <ul className="flex flex-col items-center gap-4 py-6">
          {["Home", "About", "Tracks", "Schedule", "Sponsors"].map((item) => (
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
      </div>
    </nav>
  );
};

export default Navbar;
