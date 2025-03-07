import { useState } from "react";
import { Menu, X } from "lucide-react"; // Mobile menu icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-[Nunito] bg-blue-950 text-white py-4 px-8 fixed w-full z-20 shadow-md">
      <div className="flex justify-between items-center">
        <div>
          {/* Logo / Branding */}
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          {["Home", "About", "Tracks", "Schedule", "Sponsors"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg hover:text-blue-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-blue-950 shadow-lg py-4 flex flex-col gap-4 items-center">
          {["Home", "About", "Tracks", "Schedule", "Sponsors"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)} // Closes menu when clicked
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
