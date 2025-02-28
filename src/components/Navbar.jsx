const Navbar = () => {
  return (
    <nav className="font-[Nunito] bg-blue-950 text-white py-4 px-8 fixed w-full z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-xl font-bold">
          {/* Optional branding or logo here */}
        </div>
        <ul className="flex gap-6">
          {["Home", "About", "Tracks", "Schedule", "Sponsors"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-xl hover:text-blue-400">
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
